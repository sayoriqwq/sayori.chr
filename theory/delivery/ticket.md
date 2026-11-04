---
title: Ticket
description: 把 Spec 切成垂直切片交给 Worker：怎样切、阻塞关系怎样写、什么时候要 user 确认。拆分工作、给 Worker 写任务，或接收一个 Ticket 时读
assertion: Ticket 是从 Spec 切下的一条垂直切片，贯穿每一层、可以单独验证，恰好交给一个 Worker。Ticket 全部关闭，不等于 Spec 已经满足
validity: confirmed
---
# Ticket

## Slice

Ticket 是从 [Spec](spec.md) 切下的一条垂直切片：

- 窄，但贯穿每一层，例如数据结构、接口、界面与测试
- 完成后可以单独演示或验证
- 大小放得进一个新的上下文，所以恰好交给一个 [Worker](../agency/crew.md)，按 [Ownership](../primitive/ownership.md) 负责

有让后续改动变容易的前置重构，先做

> 例：给诊断功能加导出。切成"数据结构""接口""按钮"三张是横切，任何一张单独完成都看不到效果。垂直的切法是先做"导出一份最简单的诊断结果并能下载"，再逐步加字段

## Edges

每个 Ticket 写明阻塞它的前项：前项不完成，它就无法开始。没有前项的可以立即开始，前项都已完成的几张可以并行

发现互相阻塞时，先检查是不是切错了

大范围的机械重构无法切成垂直切片，例如改名一个到处使用的字段，一次修改就会破坏大量调用处。这时按顺序排：

1. **扩展**：新旧形式并存
2. **迁移**：分批迁移调用处，每批一个 Ticket
3. **收缩**：删去旧形式

## Content

每个 Ticket 写明：

- **要做什么**：这一块让什么端到端行为成立，从 user 的视角写
- **阻塞**：哪些 Ticket 卡住它
- **验收标准**：这一块怎样算完成

交接时另外交代的内容见 [Handoff 的 Basis](../agency/handoff.md#basis)。Ticket 的记录与 [Task](task.md#information) 同构，只覆盖这一块

## Confirm

发布之前，切分方案先经 user 确认：粒度是否合适，阻塞关系是否真实，要不要合并或再拆

## Composition

Ticket 完成，只说明这一块满足自己的验收标准。Spec 是否满足，由 Task 负责人在集成之后按 [Acceptance](acceptance.md) 整体核对

Ticket 属于 Task，写在哪里、发布到哪个 tracker 属于 runtime。结束后随 [Closeout](closeout.md) 收回

[Delivery](index.md)
