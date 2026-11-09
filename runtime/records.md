---
title: 记录
description: runtime 把什么记在哪里：事件 Store、Task 的当前记录与环境各自的职责，事件种类对应的理论概念，以及理论交给 runtime 的记录格式。要新增事件种类、改 Store，或拿不准一项事实该写在哪里时读
assertion: Store 只放 Log，Task 的当前记录是 State，现状从环境查，每项内容一个权威位置。Store 里的事件是声明，批准以 user 的依据为准，现状以环境为准
validity: candidate
---
# Records

## Places

按 [Record](../theory/primitive/record.md) 与 [Validity 的 Source](../theory/primitive/validity.md#source)，三个位置各管一类：

| Place | Kind | Content |
| --- | --- | --- |
| Store：工作区的 `.sayori/events.sqlite` | Log | 事件只追加，写入前按 Schema 校验，触发器拒绝改写与删除 |
| Task 的当前记录：工作区的 Task 文件 | State | [Task 的 Information](../theory/delivery/task.md#information)，写给人读 |
| 环境：Git、herdr、外部系统 | 现状 | `sy status` 与 `sy check` 现查，观察结果分 Present、Absent、Unknown 三态，留在环境一侧 |

`sy status` 合并 Store 的声明与环境观察，并指向各 Task 的当前记录。Task 的当前记录引用 Store 里的事件，内容只在 Store 保留一份

## Kinds

| Event | Theory |
| --- | --- |
| `report` | [Task 的 Progress](../theory/delivery/task.md#progress)，以及 [Handoff 的 Return](../theory/agency/handoff.md#return) |
| `report.missing` | 交回时缺少 Report 这一事实，与 Report 分开记 |
| `task`、`owner` | Task 的身份与 [Ownership](../theory/primitive/ownership.md) |
| `decision` | [Decision 的 Record](../theory/communication/decision.md#record) |
| `approval` | [Approval](../theory/agency/approval.md) |
| `effect` | [Effect 的 Register](../theory/agency/effect.md#register) |
| `pending` | target 为 user 时是 Task 的 Pending，为 firstmate 时是 [Crew 的 Notify](../theory/agency/crew.md#notify) 中交给共同上层的协调 |
| `case` | [Case](../theory/evolution/case.md) |

每条事件带 `scope`、`source`、`time` 与全局递增的 `seq`。同一对象的多条事件按最大 seq 折叠出当前状态，例如 Pending 按 scope 与 pendingId，Effect 按 effectId，Report 取每个 scope 的最新一条

## Formats

理论交给 runtime 的记录格式：

- **Effect 登记**：`effect` 事件。机制自动登记 Firstmate 转入后台的进程组，结束时补上结局。其他 Effect 由负责人用工具登记
- **批准**：`approval` 事件。条件与时效供人阅读，执行前由负责人对照。`source` 说明出处，批准以 `userBasis` 写明的 user 原话或决定为依据
- **Decision**：`decision` 事件带轻重与理由，取代时写 `supersedes`。`sy decisions` 导出 Markdown 形式的 Decision Log。工具返回 seq 与 source，agent 据此告诉 user 记了哪几条

[Runtime](index.md)
