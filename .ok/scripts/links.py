"""补充 OpenKnowledge：核对本仓 Markdown 中的相对链接与锚点

职责只限维护本仓的知识库格式，不属于从理论派生的 Runtime
模板中的占位链接不检查

用法：python3 -I .ok/scripts/links.py
有失效链接时以非零状态退出
"""
import os, re, subprocess, sys

ROOT = subprocess.check_output(["git", "rev-parse", "--show-toplevel"], text=True).strip()
os.chdir(ROOT)


def anchors(path):
    found = set()
    for line in open(path):
        m = re.match(r"#+ (.+)", line)
        if m:
            found.add(re.sub(r"[^\w\- ]", "", m.group(1).strip().lower()).replace(" ", "-"))
    return found


files = subprocess.check_output(
    ["git", "ls-files", "-co", "--exclude-standard", "*.md"], text=True).split()
files = [f for f in files if "/.ok/templates/" not in f]
broken = []
for f in files:
    text = re.sub(r"```.*?```", "", open(f).read(), flags=re.S)
    for target in re.findall(r"\]\(([^)\s]+)\)", text):
        if target.startswith(("http", "mailto")):
            continue
        path, _, anchor = target.partition("#")
        resolved = os.path.normpath(os.path.join(os.path.dirname(f), path)) if path else f
        if not os.path.exists(resolved):
            broken.append(f"{f}: missing {target}")
        elif anchor and resolved.endswith(".md") and anchor not in anchors(resolved):
            broken.append(f"{f}: anchor {target}")

print("\n".join(broken) or f"ok ({len(files)} files)")
sys.exit(1 if broken else 0)
