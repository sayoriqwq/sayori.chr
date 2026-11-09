---
title: Runtime 设计
description: sayori 自己的 runtime 怎样落实理论：形态、记录、唤醒、回路与工作区怎样使用。设计或修改 sayori.run，或拿不准一条内容该放理论、设计、实现还是工作区时读
assertion: 理论写本源，这里写 sayori 的 runtime 怎样落实它，sayori.run 只实现理论与这里的设计。设计由 agent 提出候选，user 确认
validity: candidate
---
# Runtime

## Position

[派生](../theory/evolution/derivation.md)把理论变成 agent 运行时取得的 Runtime，理论在多处写明某个问题"属于 runtime"。这些问题的回答是 user 对自己这套 runtime 的主张，和理论一样经 user 确认，所以放在本仓，与理论分开

| Layer | Place | Content | Owner |
| --- | --- | --- | --- |
| 理论 | [theory/](../theory/index.md) | 换一种 runtime 仍然成立的主张 | user 确认 |
| 设计 | 本目录 | sayori 的 runtime 怎样落实理论 | agent 提候选，user 确认 |
| 实现 | sayori.run | 机制代码与带出处的派生内容，发布为带版本的 Pi package | 实现 agent，追溯到上两层 |
| 工作区 | 各工作区 | 本工作区的配置、知识、Task 与特有规则 | user 与当前负责人 |

一条内容放哪一层，依次问：换一种 runtime 是否仍然成立，成立就写进理论。只对这套 runtime 成立，写进本目录。只对某个工作区成立，留在那个工作区。sayori.run 里出现只对某个工作区成立的内容，按缺陷处理

理论不指向本目录，本目录指向它所落实的理论

## Delegated

理论交给 runtime 的问题，以及回答所在的位置：

| Question | Theory | Answer |
| --- | --- | --- |
| 形态与组织 | [Derivation](../theory/evolution/derivation.md#runtime) | [形态](architecture.md) |
| 怎样通知 | [Crew](../theory/agency/crew.md#notify) | [唤醒](wake.md) |
| Effect 登记的位置与格式 | [Effect](../theory/agency/effect.md#register) | [记录](records.md#formats) |
| 批准的记录格式与传递 | [Approval](../theory/agency/approval.md) | [记录](records.md#formats) |
| Decision 记录后怎样告诉 user | [Decision](../theory/communication/decision.md#record) | [记录](records.md#formats) |
| Case 的存放、整理与版本 | [Evolution](../theory/evolution/index.md#loop) | [回路](loop.md) |
| 派生物的出处 | [Derivation](../theory/evolution/derivation.md#provenance) | [回路](loop.md#provenance) |
| Skill 的载体 | [Skill](../theory/skill/index.md) | [消费](consumer.md#package) |
| Issue 的模板与位置 | [Issue](../theory/delivery/issue.md#selection) | 未定 |
| Ticket 的位置 | [Ticket](../theory/delivery/ticket.md#composition) | 未定 |
| Coverage 的标记 | [Coverage](../theory/delivery/coverage.md#expression) | 未定 |
| 提问的格式 | [Leadership](../theory/communication/leadership.md#questions) | 未定 |

## Gaps

sayori.run 现在与本设计的差距，按[回路](loop.md)逐项处理：

- **内容未独立**：角色说明写在 TS 代码里，测试断言说明的文本
- **工作区约定写死**：`task/now/*/worktrees.json` 的位置与格式写在环境 adapter 里
- **Case 字段不足**：Case 事件只有 `caseId`、`message`、`basis`
- **未发布为 Pi package**：工作区按源码路径直接加载扩展
- **过程记录未迁出**：`sayori.run/docs` 保存着建造过程的 Spec、Ticket、交付记录与 Decision Log。设计决定迁到本目录，建造过程的 Task 记录放到 `~/workspace/` 下，见 sayori.run 的 [Decision Log](../../sayori.run/docs/decisions.md) 0064、0065
- **Report 没有理论出处**：它是 Task 的 Progress 与 Handoff 的 Return 在 runtime 中的形式，要不要补一页理论由 user 决定

## Modules

| Module | Description |
| --- | --- |
| [Architecture](architecture.md) | sayori 的 runtime 跑在什么上，Crew 怎样落成进程，哪些规则做成机制。要改宿主、角色的启动与委派，或决定一条规则做成机制还是内容时读 |
| [Records](records.md) | runtime 把什么记在哪里：事件 Store、Task 的当前记录与环境各自的职责，事件种类对应的理论概念，以及理论交给 runtime 的记录格式。要新增事件种类、改 Store，或拿不准一项事实该写在哪里时读 |
| [Wake](wake.md) | 一项变化怎样让该知道的一方取得：记录、提示与唤醒怎样分工，谁在什么条件下被叫醒。设计通知、新增唤醒来源，或协调回合过多时读 |
| [Loop](loop.md) | 进化回路在 sayori 里怎样转：Case 记在哪里、谁整理、怎样决定与采用、怎样检验，派生物怎样保留出处。记 Case、提修订、发布新版本，或理论改了要找受影响的派生物时读 |
| [Consumer](consumer.md) | 一个工作区怎样使用 sayori 的 runtime：工作区提供什么，版本怎样固定，工作区内容与 runtime 内容怎样分界。接入新工作区、升级版本，或拿不准一条规则该留在工作区时读 |

[Repository](../index.md)
