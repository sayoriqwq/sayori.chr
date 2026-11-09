"""补充 OpenKnowledge：从理论页、设计页与 ok/ 页的 frontmatter 生成 index 路由表与目录说明，并核对一致

职责只限维护本仓的知识库格式，不属于从理论派生的 Runtime。规则见
ok/frontmatter.md#generated

- 每篇理论页、设计页与 ok/ 页带 title、description、assertion、validity
- index 模块表中 Description 列取自所链接页面的 description
- 目录的 .ok/frontmatter.yml 取自该目录 index 的 title 与 description

用法：python3 -I .ok/scripts/derive.py [--fix]
不带 --fix 时只核对，有偏差时以非零状态退出
"""
import glob, os, re, subprocess, sys

ROOT = subprocess.check_output(["git", "rev-parse", "--show-toplevel"], text=True).strip()
os.chdir(ROOT)
FIX = "--fix" in sys.argv
FIELDS = ("title", "description", "assertion", "validity")


def frontmatter(path):
    text = open(path).read()
    if not text.startswith("---\n"):
        return {}
    return dict(re.findall(r"^(\w+): (.*)$", text.split("---\n")[1], re.M))


def pages():
    out = subprocess.check_output(
        ["git", "ls-files", "-co", "--exclude-standard", "theory/*.md", "runtime/*.md", "ok/*.md"], text=True)
    return [f for f in out.split() if "/.ok/" not in f]


problems = []

for page in pages():
    meta = frontmatter(page)
    problems += [f"{page}: missing {k}" for k in FIELDS if k not in meta]

for page in pages():
    lines = open(page).read().split("\n")
    column, changed = None, False
    for i, line in enumerate(lines):
        if not line.startswith("|"):
            column = None
            continue
        cells = [c.strip() for c in line.strip("|").split("|")]
        if "Description" in cells:
            column = cells.index("Description")
            continue
        if column is None or set(line) <= set("|- "):
            continue
        link = re.search(r"\]\(([^)#]+\.md)\)", line)
        if not link:
            problems.append(f"{page}:{i + 1}: row without link")
            continue
        target = os.path.normpath(os.path.join(os.path.dirname(page), link.group(1)))
        want = frontmatter(target).get("description")
        if cells[column] != want:
            if FIX:
                cells[column] = want
                lines[i] = "| " + " | ".join(cells) + " |"
                changed = True
            else:
                problems.append(f"{page}:{i + 1}: description drift from {target}")
    if changed:
        open(page, "w").write("\n".join(lines))

for yml in glob.glob("theory/**/.ok/frontmatter.yml", recursive=True) + glob.glob("runtime/**/.ok/frontmatter.yml", recursive=True):
    meta = frontmatter(yml.replace(".ok/frontmatter.yml", "index.md"))
    want = f"title: {meta['title']}\ndescription: {meta['description']}\n"
    if open(yml).read() != want:
        if FIX:
            open(yml, "w").write(want)
        else:
            problems.append(f"{yml}: drift from index")

print("\n".join(problems) or "ok")
sys.exit(1 if problems else 0)
