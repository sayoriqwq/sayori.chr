---
title: Session
description: 换了 Session，agent 的身份、职责和未完的事怎样接上。Session 要结束、上下文快满或被压缩，或在新 Session 里接手已有工作时读
assertion: 职责持久，Session 短暂。凡是要活过 Session 的都放在 Session 之外，丢掉任何一个 Session 都不丢重要的东西
validity: confirmed
---
# Session

## Premise

Mate 负责一个 Task，可能持续几周。承载它的 Session 却很短暂：上下文会满，会被压缩，进程会崩溃，user 也会随手开一个新的

所以 Session 理论守住一条不变式：丢掉任何一个 Session，都不丢任何重要的东西。由此，结束 Session 是常态，照常处理即可

这是 [Agency 领域的前提](index.md#premise)落在职责上。[Effect](effect.md#premise) 处理留在外面的变化，Session 处理要延续下去的职责

## Identity

身份属于 [Crew](crew.md) 里的角色，Session 只是承载它。一个 Mate 和它的 Task 前后可以由许多 Session 承载。Worker 通常只活在一个 Session 里，随所负责的 Ticket 结束

## Outside

凡是要活过 Session 的，产生时就写到 Session 之外，见 [Record](../primitive/record.md)。在本领域，它们的权威位置是：

| Item | Home |
| --- | --- |
| 目标、进展、Pending | [Task](../delivery/task.md#information) |
| Effect 登记 | [Effect](effect.md#register) |
| 决定与理由 | [Decision Log](../communication/decision.md#record) |
| 当前状态快照 | [Crew 的状态入口](crew.md#visibility) |

Session 里只留下丢了也无妨的东西，例如推理过程、临时的 todo、读过的文件内容

## End

Session 结束的起因各不相同：上下文满了、被压缩、进程崩溃、user 开了新的。重要内容已经在外面，所以正常结束和中断没有区别，接续都走同一条路：从外面读回当前依据，经 [Handoff](handoff.md#acceptance) 明确接收职责与未完事项

压缩也一样：压缩之后以外面的记录为准，摘要只作线索

> 例：Mate 刚和 user 定下一个取舍，随即追加到 Decision Log。之后 Session 崩溃，新 Session 读 Decision Log 就能接上，不需要 user 重说一遍

[Agency](index.md)
