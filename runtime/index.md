---
title: Runtime
description: sayori 协作层怎样落实理论的上游规范：形态、记录、委托、Station、视图、唤醒、消息、回路与消费。设计或修改协作层实现，或拿不准一条内容该放哪一层时读
assertion: 理论定义概念与恒成立的主张，这里定义 sayori 协作层的上游设计规范，sayori.run 严格按此落实。设计由 agent 提出候选，经 user 确认成为实现真源
validity: candidate
---
# Runtime

## Position

[派生](../theory/evolution/derivation.md)把理论转成 agent 运行时取得的 Runtime，理论多处写明某个问题属于 runtime。这些问题的回答是 user 对自己这套协作层的上游主张，与理论分开存放在本仓，经 user 确认后约束实现

| 层级 | 位置 | 内容 | 责任方 |
| --- | --- | --- | --- |
| 理论 | [theory/](../theory/index.md) | 跨 runtime 恒成立的概念与主张 | user 确认 |
| 协作层设计 | 本目录 | sayori 协作层的上游规范、边界与不变量 | agent 提候选，user 确认 |
| 工程层设计 | [dev/](../dev/index.md) | 通用工程做法与轻量化工作区基座规范 | agent 提候选，user 确认 |
| 实现 | `sayori.run`、`sayori.dev` | 具体代码架构、字段结构、命令行入口、外部化内容与工程 Skill | 实现 agent，追溯到上游设计 |
| 工作区 | 各消费工作区 | 遵守工程基座的薄路由、业务知识、Task 与特有规则 | user 与当前负责人 |

一条内容放哪一层，依次问四个问题，见[消费的 Border](consumer.md#border)。共享底座中出现只对某个工作区成立的内容，按缺陷处理

理论不指向本目录，本目录指向它所落实的理论

## Delegated

理论交给协作层的全部问题及其上游规范位置：

| 问题 | 理论出处 | 上游规范 |
| --- | --- | --- |
| 形态与载体分级 | [派生](../theory/evolution/derivation.md#runtime) | [形态](architecture.md) |
| 怎样通知与唤醒 | [职责树](../theory/agency/crew.md#notify) | [唤醒](wake.md) |
| Effect 登记的位置与契约 | [Effect](../theory/agency/effect.md#register) | [记录的 Contracts](records.md#contracts) |
| 批准的记录契约与核对 | [批准](../theory/agency/approval.md) | [记录的 Contracts](records.md#contracts) |
| 决定记录后怎样告知 user | [决定](../theory/communication/decision.md#record) | [记录的 Contracts](records.md#contracts) |
| 工作范围的呈现分级 | [工作范围](../theory/delivery/coverage.md#expression) | [记录的 Contracts](records.md#contracts) |
| Case 的存放、整理与检验 | [进化](../theory/evolution/index.md#loop) | [回路](loop.md) |
| 派生物的出处 | [派生](../theory/evolution/derivation.md#provenance) | [回路的 Provenance](loop.md#provenance) |
| Skill 的载体与分发 | [Skill](../theory/skill/index.md) | [消费的 Distribution](consumer.md#distribution) |
| Issue 的模板与位置 | [Issue](../theory/delivery/issue.md#selection) | [记录的 Contracts](records.md#contracts)，细则归[工程层](../dev/index.md) |
| Ticket 的位置 | [Ticket](../theory/delivery/ticket.md#composition) | [记录的 Contracts](records.md#contracts)，细则归[工程层](../dev/index.md) |
| 提问的格式 | [引领](../theory/communication/leadership.md#questions) | [消息的 Asking](message.md#asking) |

## Modules

| Module | Description |
| --- | --- |
| [Architecture](architecture.md) | 协作层跑在什么载体上，不同扩展能力的 harness 怎样分级实现同一理论，架构端口怎样隔离，机制与内容怎样分开，测试守什么边界。要设计协作层架构、接入新 harness 或划分机制与测试边界时读 |
| [Records](records.md) | 协作层把哪类事实放在哪里，持久日志与本地易失状态怎样分离，事件种类对应哪些理论概念，以及核心记录的上游契约。要新增事件、划分存储边界或核对记录格式时读 |
| [Delegation](delegation.md) | 职责树上下层之间怎样派活、交回、验收、结束委托、收口 Task 以及退站。要设计或修改派活、交回、验收、收口与退站状态机时读 |
| [Station](station.md) | Station 的身份与 Sailor 专业、Firstmate 单一入口与重启恢复、常驻焦点以及 /branch 主题分叉。要设计或修改角色身份、入口恢复、焦点维护或分支协议时读 |
| [View](view.md) | 面向 user 的只读职责树视图怎样组织信息、分层展开依据、保证键鼠阅读体验，以及怎样直接进出负责的 Station。要设计或修改只读浮层、状态栏计数或进出交互时读 |
| [Wake](wake.md) | 变化怎样在可查、常驻与唤醒三级注意力之间分配，事件驱动观测与送达边界怎样守住，以及各类唤醒的停止条件。要设计通知层级、修改唤醒规则或解决重复唤醒问题时读 |
| [Message](message.md) | 跨通道进入会话的文本怎样保真来源，行级意图标注怎样在人与模型间传递原意，以及向 user 提问的格式规范。要设计跨节点传话、意图标注或提问呈现时读 |
| [Loop](loop.md) | 进化回路在 sayori 里怎样运转：Case 记在哪里、谁整理、怎样决定与修订、单一共享分发下怎样采用与检验，以及派生物怎样保留出处。要记 Case、提修订、发布共享底座或追溯理论变化时读 |
| [Consumer](consumer.md) | 协作层与工程层怎样以单一共享方式分发，工作区需要提供哪些最小契约，多工作区怎样保持领域隔离，以及一条规则怎样判定归层。要接入新工作区、瘦身消费区或拿不准一条规则放哪里时读 |

[Repository](../index.md)
