---
title: 回路
description: 进化回路在 sayori 里怎样转：Case 记在哪里、谁整理、怎样决定与采用、怎样检验，派生物怎样保留出处。记 Case、提修订、发布新版本，或理论改了要找受影响的派生物时读
assertion: Case 在使用处记下，由维护 runtime 的 Mate 成批整理成修订提议，user 决定，改在缺口所在的一层，工作区按版本采用，再按事先写下的问题检验。一圈只做一个小改动
validity: candidate
---
# Loop

## Steps

[进化的 Loop](../theory/evolution/index.md#loop) 在 sayori 里分六步：

| Step | Who | Where | Point |
| --- | --- | --- | --- |
| 记录 | 任何节点，或 user 说一句"记 Case" | 发生处工作区的 Store | 一次工具调用。机制提供候选：缺报、长时间未解的 Pending、Unknown 的 Effect |
| 整理 | 维护 runtime 的 Mate | 它负责的 Task | 攒够一批或到周期时整理，按 [Revision](#revision) 定位缺口，每组写成一份修订提议，动手前写下[检验的问题](../theory/evolution/evaluation.md#question) |
| 决定 | user | Decision Log | 一份提议一个决定：证据、改哪一层、怎么改、怎样算有效 |
| 修订 | 维护 runtime 的 Mate，或它委派的 Worker | 缺口所在的一层 | 理论按本仓规则修改，设计页从 candidate 起，实现发布新版本 |
| 采用 | 工作区的 Firstmate | 工作区固定的版本号 | 升级经 user 批准，版本说明引用对应的 Case |
| 检验 | 维护 runtime 的 Mate | Case 的后续事件 | 对照原场景、相邻场景与正常行为，复发就记新 Case 并关联原条 |

Firstmate 在回路里只记 Case 和升级版本，整理与修订由维护 runtime 的 Mate 负责。这个 Mate 的 Task 属于 sayori 自身的建设，放在 `~/workspace/` 下

一圈处理一组 Case、做一个小改动、发一个版本。过程记录留在维护 Mate 的 Task 里，收口后由 Git 历史保留

## Case

Case 是 Log，记在发生处工作区的 Store，内容按 [Case](../theory/evolution/case.md)：

- **事实**：预期、实际与证据入口分开写，缺项留空
- **归因**：与观察分开，标明是 Inference
- **生命周期**：按追加的事件折叠，从 open 到已在某个版本处理，再到已验证或复发

## Revision

按[进化的 Revision](../theory/evolution/index.md#revision) 定位缺口，再加上设计这一层：

| Gap | Change |
| --- | --- |
| 理论 | 修改理论页，再复核受影响的设计页与派生物 |
| 设计 | 修改本目录的设计页，退回 candidate 等 user 确认 |
| 派生 | 修改 sayori.run 的内容或机制 |
| 取得 | 规则已具备，调整它进入上下文的方式，例如 description、读取顺序或唤醒条件 |
| 环境 | 只改该工作区的配置或规则 |

长期没有 Case、删掉后行为不变的规则，按 [Evaluation 的 Value](../theory/evolution/evaluation.md#value) 删去

## Provenance

- **内容文件**：frontmatter 写明对应的理论页、本仓 commit 与设计页
- **代码入口**：注释写明理论 commit，沿用现有做法
- **理论变化时**：按变化的理论页列出引用它的派生文件，逐个复核

## Signals

检验整体效果的代理指标，都从 Store 与 Pi 的 Session 记录算出：

- **协调占用**：Firstmate 只由跟进消息触发的回合占比。基线是 10.30 一晚 61 个回合中的 48 个
- **交回**：缺报率，以及 Pending 从打开到解决的时长
- **纠正**：user 纠正产生的 Case 数量

指标服务判断，改进以 Case 与 user 的判断为准

[Runtime](index.md)
