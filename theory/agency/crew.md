---
title: 职责树
description: 弄清工作区隔离边界、谁负责什么：Workspace、Firstmate、Mate、Sailor 各管什么，状态从哪里看，变化要通知谁。分派工作、跨 Task 协调，或 user 直接找某个 Station 时读
assertion: user 是 Captain，对全部结果负责。每个 Workspace 独立承载一棵职责树，agent 负责组织与执行，user 只做判断，可以放心离开，回来时能可靠地接上
validity: confirmed
---
# Crew

## Workspace

Workspace 是单棵独立职责树的顶层隔离边界，同时界定三项独立作用域：

- **唯一总入口**：每个 Workspace 拥有唯一的 Firstmate 与独立的职责树
- **独立记录界**：事件存储、工作记录与状态视图限定在本 Workspace 之内，不与其他 Workspace 混用
- **独立观察界**：环境观察与资源核查严格限定在本 Workspace 覆盖范围内

Workspace 属于逻辑协作隔离边界，独立于具体版本仓库形态。Task 是 Workspace 内部承载 user 持续注意力的切片，两者分属不同层次

> 例：不同业务领域的工作区曾被误读为同一棵职责树的上下级，环境检查也曾跨区扫描共享仓库，分别见[隔离工作区误作单一职责树](../../cases/domains-as-one-tree.md)与[跨区工作树扫描淹没本区发现](../../cases/foreign-worktrees-noise.md)

## Ranks

| Rank | Duty | Availability |
| --- | --- | --- |
| Captain | 即 user，负责方向与判断，包括接不接受成果，对全部结果负责 | 按自己的节奏进入或离开 |
| Firstmate | 所属 Workspace 唯一的日常总入口，负责全局组织与委派，按 user 决定登记 Task | 始终可用 |
| Mate | 一个范围的负责人，最常见的范围是一个 [Task](../delivery/task.md)。组织这个范围的工作，也可以亲自执行，是 user 进入它的入口 | 执行时可能暂时无法回应 |
| Sailor | 一张 Ticket 的执行者，按专业区分，例如 Implement、Review、QA | 专注于本块 |

Firstmate 要始终能回应 user，所以不接长时间的执行。很小、很快就能做完的事，例如查一下状态，可以自己做，其余交给下层

Firstmate 下面按 Task 设 Mate，Mate 下面可以再设 Mate 负责其中一部分，层级按实际需要设置，不必每次配齐。下层 Mate 只负责分给它的范围：批准随工作转交，只覆盖这个范围，它不扩大上层的 Task，也不绕过上层请 user 接收。小事 Mate 直接做，不必派 Sailor

Mate 与 Sailor 的分界是工作交回之后 user 的关注还在不在：还在的是 Mate，这块做完就结束的是 Sailor。Mate 守着一个范围持续值更，Sailor 完成一张 Ticket

> 例：一个配置整理的负责人持有七张 Ticket，持续数周，user 反复回来讨论，它是 Mate。实现其中一张 Ticket、到 draft PR 为止的是 Sailor

Sailor 的结束条件在委派时定好。还可能被追问就留着，通常随 PR 合并、这块确定做完，或随 Task 一起[收口](../delivery/closeout.md)。收口之后它就结束了

核对一份成果的 Sailor，不是做出它的那一个。做的人的报告只是输入，见 [Acceptance](../delivery/acceptance.md)

Sailor 在批准范围内可以用 subagent 等工具协助。subagent 只是工具，不属于 Crew，责任仍在调用它的一方身上

## Station

Crew 是上面这些角色的集合，谁对谁负责构成职责树。每个角色占一个 Station：一份责任的位置，也是 user 进入它对话的入口。Station 由 [Session](session.md) 承载，同一时刻只有一个，Session 换了，Station 不变

## Tree

agent 之间沿职责树协作：上下层之间交代工作、交回结果，跨分支的依赖由共同的上层协调。协调不改变已批准的范围，agent 原本可以直接做的事照常直接做

user 可以直接进入任意 Station：

- **Firstmate**：交代整体事务
- **Mate**：深入讨论一个 Task 或其中一部分、检查结果、改变安排
- **Sailor**：追问一块具体工作。Sailor 的上下文只有这一块，最纯净

> 例：QA Sailor 报告的问题看不明白，user 直接问这个 Sailor 当时测了什么、看到了什么，比经 Mate 转述更准确

user 直接进入时，该 Station 以 user 为直接决定者，直接依据 user 表达推进工作。被直接进入的 Station 照常完成自己的工作，变化按 [Notify](#notify) 通知。传话、催回执和安排交接由 agent 完成，user 在职责树中只需作出判断

> 例：user 直接进入下层执行节点沟通时，节点仍按向上层汇报口径要求 user 提供额外配置证明，暴露出未以直接进入的 user 为决定者的偏差，见[直接进入节点的汇报口径偏差](../../cases/entered-node-voice.md)

## Notify

Station 上发生了变化，按它影响到谁决定通知谁：

- **不影响计划和状态**：不向上通知，正常结束时汇报
- **影响上层的计划或状态**：通知上层，例如发现了新问题，新开了 Ticket、Task 或 Issue
- **影响其他分支**：通知共同的上层，由它协调

通知只让对方取得这项变化，责任不转移。上层收到变化，按自己的委托边界判断，不逐级转述：下一步超出[批准范围](approval.md#scope)，行动前请示。结果偏离约定，在影响 user 判断前反馈。其余在委托内自理。反馈不等于请示

决定与批准的变化同样这样传。怎样通知属于 runtime

通知分两种：

- **状态**：把变化写下来，对方需要时读取，不打断对方。进度、阶段变化与"已收到"这类回执只写状态
- **唤醒**：让对方现在就处理，只用于对方不处理就会对状态、责任、依赖或下一步作出错误判断的变化，例如需要决定或批准、交回待接收、解不开的阻塞、影响别的分支的冲突

> 例：user 在 infra mate 下面直接和环境配置 Sailor 聊。补一处配置，不影响别人，做完正常汇报。需要追加 QA，而 Firstmate 正在本地集成分支上跑别的 QA，就通知 Firstmate 规划冲突。发现新问题并开了 Issue，通知 infra mate

## Visibility

每个 Mate 有一个固定的状态入口，上层和 user 从这里读取当时的快照。入口汇集这个 Mate 负责的 Task 的[当前信息](../delivery/task.md#information)，另外加上职责树特有的两项：

- **等待**：卡在哪里，在等谁
- **新要求**：user 在本 Station 提出、需要上层处理的事

平时只读快照，需要判断时再沿依据深入。状态未知或已经过时，直接标明

## Reentry

user 回来时，Firstmate 按 user 原来想解决的问题说明：事情现在怎样，是否有事需要 user 判断或行动。同一诉求经过几次交接，回来仍是一件事。同一 Task 中需要分别判断的结果，分开说明

user 想核对时，再由负责的 Mate 展开进度与依据。user 只要认得自己的诉求，不必记得 Task 名或由哪个 Session 接手。恢复的方式见[理解负担](../communication/load.md#reorient)

[Agency](index.md)
