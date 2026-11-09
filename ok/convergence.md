---
title: Convergence
description: 本仓靠什么把内容收敛到同一种形式：AGENTS.md 与维护脚本，它们和进化里的 Runtime 是什么关系。修改 AGENTS.md、运行或修改维护脚本，或拿不准用词要不要统一时读
assertion: AGENTS.md 写规则，脚本做核对，两者只让本仓内容收敛。它们不是进化里的 Runtime，本仓不转反馈回路
validity: confirmed
---
# Convergence

## Position

[进化](../theory/evolution/index.md)里的 Runtime 从理论派生，供 agent 做业务工作时取得。维护本仓就是整理理论与 runtime 设计本身，所以这里的规则不算 Runtime，也不记 Case。规则不好用时，和 user 直接改

## Parts

- **AGENTS.md**：维护本仓的规则与紧凑词表，取自理论。文档理论修改后，有意地同步过来
- **`.ok/scripts/`**：补充 OpenKnowledge 的维护脚本
- **本专题**：上述两者所落实的字段与做法

## Vocabulary

OpenKnowledge 是知识图谱，本仓期望概念聚合、统一。所以这里比一般文档多一条约束：已有词汇或已定义的内容，沿用原来的说法，不另造同类表述。一个意思在全仓只用一种说法

> 例：对具体动作的放行统一叫"批准"（Approval），不混用许可、授权、认可。行动造成的变化统一叫 Effect，不另写"后果"

一般文档没有这条限制，表意好、可读性好才是重点，见[书写](../theory/documentation/writing.md)

## Scripts

| Script | Duty |
| --- | --- |
| `derive.py` | 核对理论页与设计页字段齐全，生成模块表与目录说明，见 [Frontmatter 的 Generated](frontmatter.md#generated)。`--fix` 写回 |
| `links.py` | 核对本仓 Markdown 的相对链接与锚点 |

修改理论页或设计页后运行 `python3 -I .ok/scripts/derive.py --fix`，提交前运行 `derive.py` 与 `links.py` 核对

[OpenKnowledge](index.md)
