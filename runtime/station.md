---
title: Station
description: sayori 的协作层怎样落实 Station：登记与承载、Sailor 的专业、/branch 分出新 Station、Crew 视图与常驻焦点。要改派活与分支、设计 Crew 视图，或拿不准一个新 Session 该归哪个 Station 时读
assertion: 每个 Station 一个 scope、同一时刻一个 Session、一行焦点。偏题由 user 用 /branch 分出新 Station，新 Task 须经 user 批准。Crew 视图只读记录，不调用模型，只把需要 user 的事放到眼前
validity: candidate
---
# Station

本页落实 [Crew](../theory/agency/crew.md) 的 Station 与 Ranks，各 harness 的适配按本页实现

## Register

- **scope**：`task/<task>/<station>`，Firstmate 用 `firstmate`。上层 scope 在派活或分出时固定，同一 Station 换 Session 时不变
- **承载**：同一时刻一个 Session。换 Session 时从记录接回，见 [Session](../theory/agency/session.md#identity)
- **焦点**：每个 Station 一行焦点，由当前 agent 在实质变化时随正常对话记录，换 Session 时随 Station 接回
- **显示**：`Role · Scope`，例如 `Mate · pi-collaboration`。Sailor 加专业，例如 `QA Sailor · Ticket 3`

## Specialty

Sailor 的默认专业，工作区可以增加：

| Specialty | Answers | Returns |
| --- | --- | --- |
| Implement | 把改动做出来 | 提交或 draft PR、先失败后通过的测试、Effect |
| Review | 改动按规范与 Spec 对不对 | 分级问题，各附依据 |
| QA | 真实环境里整体能不能用、用户路径通不通 | 实际观察、复现步骤、证据缺口 |
| Diagnosis | 原因在哪 | 因果证据，事实与推断分开，最小修法候选 |
| Research | 外部与官方怎样做 | 带出处的结论、适用条件、未核部分 |

- **独立**：Review 与 QA 不由同一张 Ticket 的 Implement 担任
- **只读**：Review 不改代码，Diagnosis 不顺手修。需要实验时按 [Probe](../theory/communication/probe.md)，有界并收回

## Branch

一个 Session 只谈一个主题。偏题时 agent 照常回答并提示，见 [Focus 的 Change](../theory/primitive/focus.md#change)，分不分出去由 user 决定

`/branch` 由 user 执行，本身不调用模型：

1. **fork**：从偏题的那条 user 消息起分出新 Session
2. **裁剪**：原 Session 退回到那条消息之前，焦点不变
3. **登记**：按下表给新 Session 一个 Station

| 新话题属于 | 登记 |
| --- | --- |
| 同一个 Task | 原 Station 下的 Mate |
| 别的工作，user 已批准 | Firstmate 登记新 Task |
| 别的工作，user 未批准 | 停下等 user |

`/branch` 后可跟一句自然语言，原样作为新 Session 的第一条指令。带上目标即表示 user 知道并批准。两个 Session 之后互不带回结论，结果经记录回到所属 Task。新 Session 不复制原 Station 的身份与资源所有权，批准按 [Transfer](../theory/agency/approval.md#transfer) 随所分的工作核对

## View

Crew 按[原诉求](../theory/agency/crew.md#reentry)呈现事项。首屏回答「这件事现在怎样，是否需要我行动」。能查到、值得常驻、需要 [Wake](wake.md) 分别判断：

| Section | Content |
| --- | --- |
| 等你决定 | target 为 user 的 Pending，只写决定什么，展开见背景、选项与代价，不带倾向 |
| 需要留意 | 会影响 user 判断的例外及其后果。超出原范围本身不占一行，须扩大批准范围才继续时，列入「等你决定」 |
| 进行中 | 用 user 认得的问题标识事项，说明已核实的结果或最近记录的进度。没有验收记录不等于在等 user 验收 |

- **详情**：展开看 Coverage、Effect、相关 Session 最近记录的进度及原据。会改变选择的范围或后果直接写在首屏，其余不要求 user 先读懂
- **零模型**：打开、刷新、展开、进入与返回都只读记录与有界现场观察，不开模型回合
- **减法**：已有结局的失败、无遗留责任的缺报、已收口的 Task 都不显示
- **计数**：等你决定与需要留意的计数在每个 Station 的界面常驻，为零时不显示
- **入口**：打开视图与从进入的 Station 返回是同一个动作，返回时回到视图原位置
- **范围**：只看本工作区，另一个工作区有自己的 Firstmate 与视图

[Runtime](index.md)
