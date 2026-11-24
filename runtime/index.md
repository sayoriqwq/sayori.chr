---
title: Runtime
description: sayori 协作层落实理论的上游规范总入口：形态、记录、委托、Station、视图、唤醒、消息、回路与消费。设计或修改协作层实现，或判定一条内容归层时读
assertion: 理论定义跨 runtime 恒成立的概念与主张，本目录定义 sayori 协作层的上游设计规范，sayori.run 严格按此落实。设计由 agent 提出候选，经 user 确认成为实现真源
validity: confirmed
---
# Runtime

## Position

[派生](../theory/evolution/derivation.md)将理论转化为 agent 运行时取得的 Runtime，理论多处标明具体落法归属 runtime。这些上游规范体现 user 对自身协作层的主张，独立于理论存放在本目录，经 user 确认后约束实现

| 层级 | 位置 | 内容 | 责任方 |
| --- | --- | --- | --- |
| 理论 | [theory/](../theory/index.md) | 跨具体实现恒成立的全部原理与主张 | user 确认 |
| 协作层设计 | 本目录 | 协作引擎的上游规范、边界与不变量 | agent 提候选，user 确认 |
| 工作区基座设计 | [dev/](../dev/index.md) | 成品工作区基座的装配方案、规约载体与 Skill 出处映射 | agent 提候选，user 确认 |
| 精选案例 | [cases/](../cases/index.md) | 已被理论或设计吸收的脱敏真实反例 | 维护者提候选，user 确认 |
| 实现 | 协作层实现仓与工作区基座实现仓 | 协作引擎代码与外部化内容，以及成品工作区基座的配置、检查机制与独立 Skill 包 | 实现 agent，追溯到上游设计 |
| 具体工作区 | 各消费工作区 | 基于基座扩展的薄入口、仓库拓扑、环境合同、领域知识、Task 与薄适配 Skill | user 与当前负责人 |

一条内容的归层遵循[消费的 Border](consumer.md#border)。依赖方向保持单向：理论独立于协作层设计，协作层设计指向其所落实的理论

## Delegated

理论交由协作层落实的全部议题及其上游规范位置：

| 议题 | 理论出处 | 上游规范 |
| --- | --- | --- |
| 形态与载体分级 | [派生](../theory/evolution/derivation.md#runtime) | [形态](architecture.md) |
| 通知与唤醒分级 | [职责树](../theory/agency/crew.md#notify) | [唤醒](wake.md) |
| Effect 登记契约 | [Effect](../theory/agency/effect.md#register) | [记录的 Contracts](records.md#contracts) |
| 批准记录契约 | [批准](../theory/agency/approval.md) | [记录的 Contracts](records.md#contracts) |
| 决定记录回执 | [决定](../theory/communication/decision.md#record) | [记录的 Contracts](records.md#contracts) |
| 工作范围呈现分级 | [工作范围](../theory/delivery/coverage.md#expression) | [记录的 Contracts](records.md#contracts) |
| 进化回路与精选案例 | [进化](../theory/evolution/index.md#loop) | [回路](loop.md) |
| 派生物出处追溯 | [派生](../theory/evolution/derivation.md#provenance) | [回路的 Provenance](loop.md#provenance) |
| Skill 共享分发 | [Skill](../theory/skill/index.md) | [消费的 Distribution](consumer.md#distribution) |
| Issue 指针与归属 | [Issue](../theory/delivery/issue.md#selection) | [记录的 Contracts](records.md#contracts)，细则归[工程层](../dev/index.md) |
| Ticket 指针与归属 | [Ticket](../theory/delivery/ticket.md#composition) | [记录的 Contracts](records.md#contracts)，细则归[工程层](../dev/index.md) |
| 提问呈现格式 | [引领](../theory/communication/leadership.md#questions) | [消息的 Asking](message.md#asking) |

## Modules

| Module | Description |
| --- | --- |
| [Architecture](architecture.md) | 协作层的运行载体、跨宿主扩展分级、端口边界隔离、机制与内容分工以及边界验证规范。设计协作层架构、接入新宿主或划分机制与验证边界时读 |
| [Records](records.md) | 持久日志、本地易失状态、Task 文档与环境四类存储位置的职责划分，事件种类与理论出处对照，以及核心记录的上游契约。新增事件、划分存储边界或核对记录契约时读 |
| [Delegation](delegation.md) | 职责树上下层之间的派活后置提交点、交回回落、验收、结束委托、阶段收口与任务撤除以及退站门禁状态机。设计或修改派活、交回、验收、收口与退站流程时读 |
| [Station](station.md) | Station 的身份与 Sailor 专业、Firstmate 单一入口与重启恢复、常驻焦点以及 /branch 主题分叉规范。设计或修改角色身份、入口恢复、焦点维护或分支协议时读 |
| [View](view.md) | 面向 user 的只读职责树视图的信息组织、分层阅读、键鼠交互以及进出 Station 的导航规范。设计或修改只读浮层、状态栏计数或进出交互时读 |
| [Wake](wake.md) | 可查、常驻与唤醒三级注意力的分配规则、事件驱动观测与送达边界以及各类唤醒的停止条件。设计通知层级、修改唤醒规则或解决重复唤醒问题时读 |
| [Message](message.md) | 跨通道输入文本的来源保真、行级意图标注以及向 user 提问的呈现规范。设计跨节点传话、意图标注或提问格式时读 |
| [Loop](loop.md) | 进化回路的六步运转、运行期事件存储与精选案例库的分层关系、缺口定位、义务退场、派生物出处与代理信号。记录偏差、沉淀精选案例、整理修订或追溯理论变化时读 |
| [Consumer](consumer.md) | 协作层与工程层的单一共享分发模型、消费工作区的最小契约、多工作区领域隔离以及四层归属判定规约。接入新工作区、瘦身消费区或判定一条规则归属层级时读 |

[Repository](../index.md)
