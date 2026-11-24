---
title: 词表
description: Sayori 全套理论的共享术语紧凑词表与正文语言白名单，供本仓与外层宿主仓统一引用。查术语含义、核对用词一致性或审阅新增概念词时读
assertion: 本页汇总 Sayori 理论全部已确认建模概念的紧凑定义与语言白名单，权威定义在各词链接的理论页，全仓与外层工作区统一以此为准
validity: confirmed
---
# Glossary

紧凑词表取自理论正文，权威定义以各词链接的理论页为准。外层工作区入口直接引用本页，保持单一术语真源

## Terms

| Term | Meaning |
| --- | --- |
| [Premise](theory/premise.md) | 理论出自的少数世界事实，与原语同级，各领域由事实、原语与 user 的偏好、决定推出 |
| [Primitive](theory/primitive/index.md) | 上层理论的基本语义基底，只定义一次，独立于领域与载体 |
| [Judgment](theory/primitive/judgment.md) | 对结果负责的人对可行去向作取舍，默认是 user。agent 做核对、推断与授权内的选择，内容叫主张 |
| [Context](theory/primitive/context.md) | 一方此刻实际取得的内容，未取得的内容视同不存在 |
| [Scope](theory/primitive/scope.md) | 对象在指定维度上的覆盖范围 |
| [Border](theory/primitive/scope.md#border) | Scope 的覆盖边界，以及与相邻对象的区分维度 |
| [Assertion](theory/primitive/assertion.md) | 简明表达关键主张，置于读者最先看到的位置 |
| [Context Pointer](theory/primitive/context-pointer.md) | 指向所需材料的入口，写明读取用途或条件 |
| [Ownership](theory/primitive/ownership.md) | 一件事恰好一个负责人，转交以接收为准，负责持续到有结局 |
| [Record](theory/primitive/record.md) | 活过行动者的外部持久化内容：Log 只追加，State 维护当前版本 |
| [Validity](theory/primitive/validity.md) | 环境是现状的唯一真源，其余是缓存。信息的约束力由 Form、Stage 与 Evidence 界定 |
| [Focus](theory/primitive/focus.md) | 当前对话载体围绕的核心主题锚点，跨会话延续，用来保持讨论方向 |
| [Alignment](theory/primitive/alignment.md) | 通过交互校准对当前内容的理解，直到足以支持判断 |
| [Load](theory/communication/load.md) | 理解负担由 agent 承担，向上由特例提炼本体抽象，向下落回具体变化，user 的注意力留给判断 |
| [Intent](theory/communication/intent.md) | 表达期待的回应：Ask、Explore、Instruct，逐项辨认 |
| [Leadership](theory/communication/leadership.md) | 判断归 user，判断准备归 agent：每一点上 user 先判断，选项中性对等呈现 |
| [Argue](theory/communication/argue.md) | agent 作可信反方，经交锋辨清真实诉求 |
| [Probe](theory/communication/probe.md) | 关键维度足够真实的最简实践，用以取得判断依据 |
| [Decision](theory/communication/decision.md) | 有理由地选定去向，一形成即追加到 Decision Log |
| [Workspace](theory/agency/crew.md#workspace) | 单棵独立职责树的隔离边界，同时界定唯一 Firstmate 入口、独立记录界与独立环境观察界 |
| [Crew](theory/agency/crew.md) | Captain、Firstmate、Mate、Sailor 构成的职责树，Captain 即 user。Mate 负责一个范围，Sailor 执行一张 Ticket |
| [Station](theory/agency/crew.md#station) | 职责树上一份责任的位置与对话入口，同一时刻由一个 Session 承载 |
| [Session](theory/agency/session.md) | 职责持久而 Session 短暂，活过单次会话的内容存放在外部记录 |
| [Mode](theory/agency/mode.md) | 判断何时取得：HITL 当场问，AFK 离场前问好，默认 HITL |
| [Approval](theory/agency/approval.md) | 具体动作是否在 user 的批准范围内 |
| [Handoff](theory/agency/handoff.md) | 职责转交的三种方向：Delegate、Return、Resume，支持语义确认与机制确定性两类接收 |
| [Effect](theory/agency/effect.md) | 行动后留在外部世界的变化，始终有主有结局。Pure 行动局限于会话内，Effectful 行动留下 Effect |
| [Issue](theory/delivery/issue.md) | 现状与预期的差距，写给 user 与技术同事看 |
| [Task](theory/delivery/task.md) | user 注意力的一个域，分一次性与常驻两类，由唯一 Mate 负责，含 Pending |
| [Spec](theory/delivery/spec.md) | 交给 agent 执行的说明，综合已定决定与测试接缝 |
| [Ticket](theory/delivery/ticket.md) | 从 Spec 切下的垂直切片，恰好交给一个 Sailor，写明阻塞 |
| [Coverage](theory/delivery/coverage.md) | 事项与 user 预期的关系：Agreed、Implied、Outside，约束范围并决定汇报口径 |
| [Change](theory/delivery/change.md) | 变更载体的公开性安全边界、隔离副本与并发保护、差异审阅窗口及分权持久化模型 |
| [Attempt](theory/delivery/change.md#integration) | 探索期在隔离副本内反复尝试与验证产生的过程变更 |
| [Run](theory/delivery/change.md#integration) | 成果对齐主干基线并按粗粒度重整语义后接入正式主干的交付阶段 |
| [Acceptance](theory/delivery/acceptance.md) | 用环境证据对照 Spec 或 Task 当前记录核对完成，内容、接入与使用三层独立成立 |
| [Closeout](theory/delivery/closeout.md) | 解耦为工作收口与 Task 撤除两层，完成复盘、记录落盘、Effect 结局与逐项回执 |
| [Todo](theory/delivery/task.md#identity) | 当前 Session 内的待办，跨 Session 待办以 Task 为准 |
| [Module](theory/documentation/organization.md#module) | 一个文件承担单一职责的组织单元 |
| [Directory](theory/documentation/organization.md#directory) | 以位置与层级表达归属，index 只写前提、边界与路由 |
| [Audience](theory/documentation/audience/index.md) | 目标读者：人类读者含 user 与 colleague，以及 agent |
| [Description](theory/documentation/description.md) | 指向内容自身的指针，帮助读者在打开前判断是否该读 |
| [Example](theory/documentation/writing.md#examples) | 说明规则的具体场景，以 `> 例：` 引用块书写，可链接真实案例 |
| [Leading Word](theory/documentation/writing.md#language) | 模型已理解的紧凑词语，在全文锚定同一概念或行为 |
| [Skill](theory/skill/index.md) | 行为治理单元，具备独立身份与完全自包含的可分发包形态，成立条件是可复发的跑偏 |
| [Derivation](theory/evolution/derivation.md) | 将理论重组为可独立支持行动的运行产物并保持出处可追溯 |
| [Case](theory/evolution/case.md) | 一次偏差的可检查记录，只追加，经吸收的典型案例沉淀于 [cases/](cases/index.md) |
| [Evaluation](theory/evolution/evaluation.md) | 用证据核对一项修订是否带来值得保留的改善 |

## Language Whitelist

正文优先使用中文，仅保留有明确语义价值的理论词与无贴切中文的基础概念词：

- **理论词**：见上方 [Terms](#terms) 及各理论页已确认的控制词
- **基础概念词**：`user`、`agent`、`token`、`runtime`、`harness`

专有产品、协议与工具名按原名引用，日常说法与界面术语一律使用中文

[Repository](index.md)
