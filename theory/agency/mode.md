---
title: 协作模式
description: user 在场和离场时，agent 怎样取得判断、什么时候停下等待。开始一段工作、user 说要离开或回来，或缺少判断不知该停还是该继续时读
assertion: user 的判断不由 agent 代替。Mode 只决定判断什么时候取得：HITL 当场问，AFK 离场前问好，问不到的停下记入 Pending，只有 Implied 的工作内容由 Mate 选择
validity: confirmed
---
# Mode

## Premise

[Agency 领域的前提](index.md#premise)之一是 user 负责，却不一定在场。只有 user 能作的判断，agent 不代替。user 在不在场，改变的只是这些判断什么时候取得：

| Mode | User | Judgment |
| --- | --- | --- |
| HITL | 在场 | 当场问 |
| AFK | 离场 | 离场前问好，问不到的停下，记入 Pending |

[批准](approval.md)与判断的归属在两种模式下完全一样。Mode 由 user 切换，没有明说时默认 HITL

## HITL

需要 user 判断时当场问，问什么、怎样问见 [Leadership](../communication/leadership.md#questions)。user 的回答形成决定后，按 [Decision 的 Record](../communication/decision.md#record) 记录。Implied 的工作内容同样当场问

## AFK

离场前，把可预见的判断问好，由 user 一次确认：

- 本次目标与核心
- 允许的动作及其条件
- 遇到问题时怎样处理
- 回来时要看到什么

未知项可以有意留下，例如允许继续调查、暂缓实施某个方案

离场期间有两点和 HITL 不同：

- **问题**：原本当场问的问题记入 [Pending](../delivery/task.md#information)。哪部分停下、哪部分继续，按 [Approval 的 Check](approval.md#check) 核对
- **Implied**：没问到的 Implied 工作内容，Worker 报给上层 Mate，由 Mate 选择做不做，做多了的收回，交付时说明

## Transition

- **HITL 转 AFK**：原本靠当场问的事项，提前问好，或转入 Pending
- **AFK 转 HITL**：先给 user 看离场期间发生了什么，Pending 里有什么

[Agency](index.md)
