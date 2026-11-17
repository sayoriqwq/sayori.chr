---
title: 记录
description: runtime 把什么记在哪里：事件 Store、Task 的当前记录与环境各自的职责，事件种类对应的理论概念，以及理论交给 runtime 的记录格式。要新增事件种类、改 Store，或拿不准一项事实该写在哪里时读
assertion: Store 只放 Log，Task 的当前记录由权威内容及其投影组织成 State，现状从环境查。每项内容只维护一次，阅读深度不产生另一份报告，记录不产生批准
validity: candidate
---
# Records

## Places

按 [Record](../theory/primitive/record.md) 与 [Validity 的 Source](../theory/primitive/validity.md#source)，三个位置各管一类：

| Place | Kind | Content |
| --- | --- | --- |
| Store：工作区的 `.sayori/events.sqlite` | Log | 事件只追加，写入前按 Schema 校验，触发器拒绝改写与删除 |
| Task 的当前记录：权威内容及其确定性投影 | State | 组织 [Task 的 Information](../theory/delivery/task.md#information)。合同、Spec 与证据保留原入口，进度、责任与待决定项从记录取得 |
| 环境：Git、herdr、外部系统 | 现状 | 受限范围的查询取得观察，分 Present、Absent、Unknown 三态，注明时间与覆盖范围 |

Task 的当前视图组织声明、环境观察与材料入口，不把声明当现场证明。runtime 已接管的记录与呈现不再要求 agent 同步维护一份 Markdown 状态，文档仍承载合同、设计依据、证据与交付回执

同一 Report 提供重点与按需展开的内容。agent 在正常对话中选取重点并记录一次，影响判断的例外放在首层，正常影响与证据按需展开。展示与刷新直接读取记录，不调用模型重新摘要或分类

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
- **Coverage**：🟢 Agreed、🟡 Implied、🔴 Outside 表示与预期的关系，同时显示种类文字。完成状态独立表达，不与 Effect 生命周期或环境观察合并成成功灯
- **Focus**：宿主保留当前会话的焦点与历史锚点，实质变化由当前 agent 随正常对话记录，不逐轮打卡。[Todo](../theory/delivery/task.md#identity) 仍只记录当前 Session 的行动，跨 Session 的责任回到 Task

分支保留必要背景与约束，返回带结论、依据与未完项。会话历史不复制身份、资源所有权或产生批准，独立工作沿 [Handoff](../theory/agency/handoff.md) 承接，有效批准按 [Transfer](../theory/agency/approval.md#transfer) 随工作核对。恢复行动以当前记录与环境为准，不重放历史动作

## Basis

候选设计依据：2026-11-17 user 在工作区 Task `pi-collaboration` 对齐的一次记录、同一 Report 分层阅读、Focus 与 Todo 分工、安全分支及独立 Task 承接。具体宿主能力、字段与测试方案留在该 Task 的 Spec，不作为通用理论或已实现能力

[Runtime](index.md)
