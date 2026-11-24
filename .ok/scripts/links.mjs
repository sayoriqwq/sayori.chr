/**
 * 补充 OpenKnowledge：核对本仓 Markdown 中的相对链接与锚点
 *
 * 职责只限维护本仓的知识库格式，不属于从理论派生的 Runtime
 * 模板中的占位链接不检查
 *
 * 用法：node .ok/scripts/links.mjs
 * 有失效链接时以非零状态退出
 */
import { execFileSync } from "node:child_process";
import fs from "node:fs";
import path from "node:path";
import process from "node:process";

const ROOT = execFileSync("git", ["rev-parse", "--show-toplevel"], {
  encoding: "utf8",
}).trim();
process.chdir(ROOT);

const anchorCache = new Map();

function anchors(filePath) {
  if (anchorCache.has(filePath)) return anchorCache.get(filePath);
  const found = new Set();
  for (const line of fs.readFileSync(filePath, "utf8").split("\n")) {
    const match = line.match(/^#+ (.+)/);
    if (match) {
      const slug = match[1]
        .trim()
        .toLowerCase()
        .replace(/[^\p{L}\p{N}_\- ]/gu, "")
        .replaceAll(" ", "-");
      found.add(slug);
    }
  }
  anchorCache.set(filePath, found);
  return found;
}

const files = execFileSync(
  "git",
  ["ls-files", "-co", "--exclude-standard", "*.md"],
  { encoding: "utf8" },
)
  .split(/\s+/)
  .filter((f) => f && !f.includes("/.ok/templates/") && fs.existsSync(f))
  .sort();

const broken = [];
for (const file of files) {
  const text = fs
    .readFileSync(file, "utf8")
    .replace(/```[\s\S]*?```/g, "");
  for (const match of text.matchAll(/\]\(([^)\s]+)\)/g)) {
    const target = match[1];
    if (target.startsWith("http") || target.startsWith("mailto")) continue;
    const hashIdx = target.indexOf("#");
    const relPath = hashIdx === -1 ? target : target.slice(0, hashIdx);
    const anchor = hashIdx === -1 ? "" : target.slice(hashIdx + 1);
    const resolved = relPath
      ? path.normalize(path.join(path.dirname(file), relPath))
      : file;
    if (!fs.existsSync(resolved)) {
      broken.push(`${file}: missing ${target}`);
    } else if (
      anchor &&
      resolved.endsWith(".md") &&
      !anchors(resolved).has(anchor)
    ) {
      broken.push(`${file}: anchor ${target}`);
    }
  }
}

console.log(broken.length > 0 ? broken.join("\n") : `ok (${files.length} files)`);
process.exit(broken.length > 0 ? 1 : 0);
