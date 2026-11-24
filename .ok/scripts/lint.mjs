/**
 * OpenKnowledge 结构与写作硬规则确定性 lint
 *
 * 守卫可机械判定的架构与写作红线，与 derive.mjs、links.mjs 配套运行。
 * 定期语义与本体论审查规约见 ok/lint.md
 *
 * 用法：node .ok/scripts/lint.mjs
 * 有违例时打印具体位置并以非零状态退出
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = execFileSync("git", ["rev-parse", "--show-toplevel"], {
  encoding: "utf8",
}).trim();
process.chdir(ROOT);

const MANAGED_FILES = execFileSync(
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
)
  .split(/\s+/)
  .filter((f) => f && !f.includes("/.ok/") && f !== "ok/assertions.md" && fs.existsSync(f))
  .sort();

const FIXED_POINTS = new Set([
  "theory/premise.md",
  "theory/language.md",
]);

const UPPER_DOMAIN_PREFIXES = [
  "theory/communication/",
  "theory/agency/",
  "theory/delivery/",
  "theory/documentation/",
  "theory/skill/",
  "theory/evolution/",
  "runtime/",
  "dev/",
  "cases/",
];

const THEORY_BANNED_IMPL =
  /\b(sayori\.run|sayori\.dev|Herdr|EffectTS|Node\.js|Python|TypeScript|JavaScript)\b|\.sayori\/|task\/<name>/;

const INTERMEDIATE_WORDING =
  /\bv[12]\b|首版实现|迁移期|过渡期|暂不建设|本轮暂不|历史遗留兼容/;

const violations = [];

function resolveLinkTarget(fromFile, rawTarget) {
  const clean = rawTarget.split("#")[0];
  if (!clean || /^https?:\/\//.test(clean)) return null;
  return path.normalize(path.join(path.dirname(fromFile), clean)).replaceAll(path.sep, "/");
}

for (const file of MANAGED_FILES) {
  const lines = fs.readFileSync(file, "utf8").split("\n");
  const isFixedPoint = FIXED_POINTS.has(file) || file.startsWith("theory/primitive/");
  const isTheory = file.startsWith("theory/");
  const isCase = file.startsWith("cases/");
  let inCode = false;
  let inFrontmatter = false;

  lines.forEach((line, idx) => {
    const lineNo = idx + 1;
    if (idx === 0 && line === "---") {
      inFrontmatter = true;
      return;
    }
    if (inFrontmatter) {
      if (line === "---") {
        inFrontmatter = false;
        return;
      }
      if (/^(description|assertion):/.test(line)) {
        const val = line.replace(/^\w+:\s*/, "");
        if (/[;；]/.test(val)) violations.push(`${file}:${lineNo} [semicolon] frontmatter 含分号`);
        if (/。$/.test(val)) violations.push(`${file}:${lineNo} [trailing-period] frontmatter 结尾含句号`);
        if (/[（）()]/.test(val)) violations.push(`${file}:${lineNo} [parentheses] frontmatter 含括号`);
        if (!isCase && INTERMEDIATE_WORDING.test(val)) violations.push(`${file}:${lineNo} [intermediate] frontmatter 含阶段过渡措辞`);
        if (isTheory && THEORY_BANNED_IMPL.test(val)) {
          violations.push(`${file}:${lineNo} [impl-leak] theory frontmatter 含具体实现名`);
        }
      }
      return;
    }

    if (line.startsWith("```")) {
      inCode = !inCode;
      return;
    }
    if (inCode) return;

    for (const match of line.matchAll(/\[[^\]]*\]\(([^)]+)\)/g)) {
      const target = resolveLinkTarget(file, match[1]);
      if (!target) continue;
      if (isFixedPoint && UPPER_DOMAIN_PREFIXES.some((p) => target.startsWith(p))) {
        violations.push(`${file}:${lineNo} [dag-upward] 不动点反向链接上层目标 ${target}`);
      }
      if (isTheory && (target.startsWith("runtime/") || target.startsWith("dev/"))) {
        violations.push(`${file}:${lineNo} [theory-downward] theory 反向链接下游设计 ${target}`);
      }
    }

    const stripped = line
      .replace(/\[[^\]]*\]\([^)]*\)/g, "")
      .replace(/`[^`]*`/g, "");

    if (/[;；]/.test(stripped)) {
      violations.push(`${file}:${lineNo} [semicolon] 正文含分号`);
    }
    if (/。(?:\s*\||\s*$)/.test(stripped)) {
      violations.push(`${file}:${lineNo} [trailing-period] 段尾、项尾或单元格尾含句号`);
    }
    if (/[（）()]/.test(stripped)) {
      violations.push(`${file}:${lineNo} [parentheses] 正文含括号`);
    }
    if (/^#+\s.*与/.test(stripped)) {
      violations.push(`${file}:${lineNo} [parallel-heading] 标题含并列命名`);
    }
    if (!isCase && INTERMEDIATE_WORDING.test(stripped)) {
      violations.push(`${file}:${lineNo} [intermediate] 含阶段过渡措辞`);
    }
    if (isTheory && THEORY_BANNED_IMPL.test(line)) {
      violations.push(`${file}:${lineNo} [impl-leak] theory 正文含具体实现或工具名`);
    }
  });
}

if (violations.length > 0) {
  console.log(violations.join("\n"));
  process.exit(1);
}
console.log(`ok (${MANAGED_FILES.length} files)`);
