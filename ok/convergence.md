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

- **AGENTS.md**：维护本仓的规则与校验入口，取自理论。文档理论修改后，有意地同步过来
- **GLOSSARY.md**：全套理论的共享术语词表与语言白名单，供本仓与外层工作区统一引用
- **`.ok/scripts/`**：补充 OpenKnowledge 的确定性维护与结构 lint 脚本
- **本专题**：上述组件所落实的字段、结构校验与定期语义巡检规约

## Vocabulary

OpenKnowledge 是知识图谱，本仓期望概念聚合、统一。所以这里比一般文档多一条约束：已有词汇或已定义的内容，沿用原来的说法，不另造同类表述。一个意思在全仓只用一种说法

> 例：对具体动作的放行统一叫批准，对应概念词 Approval，不混用许可、授权、认可。行动造成的变化统一叫 Effect，不另写后果

一般文档没有这条限制，表意好、可读性好才是重点，见[书写](../theory/documentation/writing.md)

## Scripts

| Script | Duty |
| --- | --- |
| `derive.mjs` | 核对受管页面字段齐全，生成模块表、目录说明与[断言总览](assertions.md)，见 [Frontmatter 的 Generated](frontmatter.md#generated)。带上 `--fix` 参数写回 |
| `links.mjs` | 核对本仓 Markdown 的相对链接与锚点 |
| `lint.mjs` | 核对不动点无环 DAG、理论零向下链接与纯标点硬格式，见 [Lint](lint.md) |

修改受管页面后运行 `node .ok/scripts/derive.mjs --fix`，提交前依次运行 `node .ok/scripts/derive.mjs`、`node .ok/scripts/links.mjs` 与 `node .ok/scripts/lint.mjs` 核对。本仓常驻维护脚本按体系主技术栈统一以 Node.js ESM 编写

[OpenKnowledge](index.md)
