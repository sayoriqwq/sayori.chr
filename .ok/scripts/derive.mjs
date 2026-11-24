/**
 * 补充 OpenKnowledge：从理论页、设计页、精选案例页与 ok/ 页的 frontmatter
 * 生成 index 路由表、目录说明与全仓断言总览，并核对一致
 *
 * 职责只限维护本仓的知识库格式，不属于从理论派生的 Runtime。规则见
 * ok/frontmatter.md#generated
 *
 * 用法：node .ok/scripts/derive.mjs [--fix]
 * 不带 --fix 时只核对，有偏差时以非零状态退出
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = execFileSync("git", ["rev-parse", "--show-toplevel"], {
  encoding: "utf8",
}).trim();
process.chdir(ROOT);

const FIX = process.argv.includes("--fix");
const FIELDS = ["title", "description", "assertion", "validity"];
const ASSERTIONS_PATH = "ok/assertions.md";
const SECTIONS = [
  ["Foundation", "__ROOT__"],
  ["Theory", "theory/"],
  ["Runtime", "runtime/"],
  ["Dev", "dev/"],
  ["Cases", "cases/"],
  ["OpenKnowledge", "ok/"],
];
const ROOT_MANAGED = ["VISION.md", "GLOSSARY.md"];

function frontmatter(filePath) {
  const text = fs.readFileSync(filePath, "utf8");
  if (!text.startsWith("---\n")) return {};
  const body = text.split("---\n")[1] ?? "";
  const meta = {};
  for (const line of body.split("\n")) {
    const match = line.match(/^(\w+): (.*)$/);
    if (match) meta[match[1]] = match[2];
  }
  return meta;
}

function listPages() {
  const out = execFileSync(
    "git",
    [
      "ls-files",
      "-co",
      "--exclude-standard",
      "VISION.md",
      "GLOSSARY.md",
      "theory/*.md",
      "runtime/*.md",
      "dev/*.md",
      "cases/*.md",
      "ok/*.md",
    ],
    { encoding: "utf8" },
  );
  return out
    .split(/\s+/)
    .filter((f) => f && !f.includes("/.ok/") && fs.existsSync(f))
    .sort();
}

function walkFrontmatterYmls(dir, acc = []) {
  if (!fs.existsSync(dir)) return acc;
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      if (entry.name === ".ok") {
        const yml = path.join(full, "frontmatter.yml");
        if (fs.existsSync(yml)) acc.push(yml);
      } else {
        walkFrontmatterYmls(full, acc);
      }
    }
  }
  return acc;
}

function renderAssertions(allPages) {
  const lines = [
    "---",
    "title: 断言总览",
    "description: 全仓所有理论页、设计页、精选案例与收敛规则的核心断言总览，由脚本自动生成。进入本仓、跨领域召回或动笔前先读此页，再按需打开具体文件",
    "assertion: 本页汇总全仓每篇受管文档的核心断言，支持低成本全局召回后再选择性深读完整正文，避免遗漏相邻领域的主张",
    "validity: confirmed",
    "---",
    "# Assertions",
    "",
    "本页由 `.ok/scripts/derive.mjs` 从各页 frontmatter 自动生成，切勿手工编辑",
    "",
  ];
  for (const [heading, prefix] of SECTIONS) {
    const group =
      prefix === "__ROOT__"
        ? allPages.filter((p) => ROOT_MANAGED.includes(p))
        : allPages.filter(
            (p) => p.startsWith(prefix) && p !== ASSERTIONS_PATH,
          );
    if (group.length === 0) continue;
    lines.push(`## ${heading}`, "", "| 模块 | 阶段 | 断言 |", "| --- | --- | --- |");
    for (const p of group) {
      const meta = frontmatter(p);
      const rel = path
        .relative(path.dirname(ASSERTIONS_PATH), p)
        .replaceAll(path.sep, "/");
      lines.push(
        `| [${meta.title ?? p}](${rel}) | \`${meta.validity ?? ""}\` | ${meta.assertion ?? ""} |`,
      );
    }
    lines.push("");
  }
  lines.push("[OpenKnowledge](index.md)", "");
  return lines.join("\n");
}

const problems = [];
let allPages = listPages();

const wantAssertions = renderAssertions(allPages);
const curAssertions = fs.existsSync(ASSERTIONS_PATH)
  ? fs.readFileSync(ASSERTIONS_PATH, "utf8")
  : "";
if (curAssertions !== wantAssertions) {
  if (FIX) {
    fs.writeFileSync(ASSERTIONS_PATH, wantAssertions, "utf8");
    if (!allPages.includes(ASSERTIONS_PATH)) {
      allPages = [...allPages, ASSERTIONS_PATH].sort();
    }
  } else {
    problems.push(`${ASSERTIONS_PATH}: drift from pages`);
  }
}

for (const page of allPages) {
  const meta = frontmatter(page);
  for (const field of FIELDS) {
    if (!(field in meta)) problems.push(`${page}: missing ${field}`);
  }
}

for (const page of allPages) {
  if (page === ASSERTIONS_PATH) continue;
  const lines = fs.readFileSync(page, "utf8").split("\n");
  let column = null;
  let changed = false;
  for (let i = 0; i < lines.length; i += 1) {
    const line = lines[i];
    if (!line.startsWith("|")) {
      column = null;
      continue;
    }
    const cells = line
      .replace(/^\|/, "")
      .replace(/\|$/, "")
      .split("|")
      .map((c) => c.trim());
    if (cells.includes("Description")) {
      column = cells.indexOf("Description");
      continue;
    }
    if (column === null || /^[|\- ]+$/.test(line)) continue;
    const link = line.match(/\]\(([^)#]+\.md)\)/);
    if (!link) {
      problems.push(`${page}:${i + 1}: row without link`);
      continue;
    }
    const target = path.normalize(path.join(path.dirname(page), link[1]));
    if (!fs.existsSync(target)) {
      problems.push(`${page}:${i + 1}: missing target ${target}`);
      continue;
    }
    const want = frontmatter(target).description;
    if (cells[column] !== want) {
      if (FIX) {
        cells[column] = want;
        lines[i] = `| ${cells.join(" | ")} |`;
        changed = true;
      } else {
        problems.push(`${page}:${i + 1}: description drift from ${target}`);
      }
    }
  }
  if (changed) fs.writeFileSync(page, lines.join("\n"), "utf8");
}

const ymls = ["theory", "runtime", "dev", "cases"]
  .flatMap((dir) => walkFrontmatterYmls(dir))
  .sort();

for (const yml of ymls) {
  const indexPath = yml.replace(".ok/frontmatter.yml", "index.md");
  const meta = frontmatter(indexPath);
  const want = `title: ${meta.title}\ndescription: ${meta.description}\n`;
  if (fs.readFileSync(yml, "utf8") !== want) {
    if (FIX) {
      fs.writeFileSync(yml, want, "utf8");
    } else {
      problems.push(`${yml}: drift from index`);
    }
  }
}

console.log(problems.length > 0 ? problems.join("\n") : "ok");
process.exit(problems.length > 0 ? 1 : 0);
