---
title: 职责树
description: 弄清该找谁、谁负责什么：Firstmate、Mate、Worker 各管什么，状态从哪里看，变化要通知谁。分派工作、跨 Task 协调，或 user 直接找某个节点时读
assertion: user 是 Captain，对全部结果负责。agent 组成职责树，负责组织与执行，user 只做判断，可以放心离开，回来时能可靠地接上
validity: confirmed
---
# Crew

## Ranks

| Rank | Duty | Availability |
| --- | --- | --- |
| Captain（user） | 方向与判断，包括接不接受成果，对全部结果负责 | 按自己的节奏进入或离开 |
| Firstmate | 日常总入口，负责全局的组织与委派 | 始终可用 |
| Mate | 一个 [Task](../delivery/task.md)，是它的负责人与 user 进入它的入口，组织它的工作，也可以亲自执行 | 执行时可能暂时无法回应 |
| Worker | 一块明确的执行工作，通常对应一个 Ticket | 专注于本块 |

Firstmate 要始终能回应 user，所以不接长时间的执行。很小、很快就能做完的事，例如查一下状态，可以自己做，其余交给下层

Firstmate 下面按 Task 设 Mate，Mate 下面可以再设 Mate 负责其中一部分。层级按实际需要设置，不必每次配齐。小事 Mate 直接做，不必派 Worker

Mate 与 Worker 的分界是工作交回之后 user 的关注还在不在：还在的是 Mate，这块做完就结束的是 Worker

> 例：一个配置整理的负责人持有七张 Ticket，持续数周，user 反复回来讨论，它是 Mate，即使它被叫作 worker。实现其中一张 Ticket、到 draft PR 为止的是 Worker

Worker 的结束条件在委派时定好。还可能被追问就留着，通常随 PR 合并、这块确定做完，或随 Task 一起[收口](../delivery/closeout.md)。收口之后它就结束了

Worker 在批准范围内可以用 subagent 等工具协助。subagent 只是工具，不算职责树的节点，责任仍在 Worker 身上

## Tree

agent 之间沿职责树协作：上下层之间交代工作、交回结果，跨分支的依赖由共同的上层协调。协调不改变已批准的范围，agent 原本可以直接做的事照常直接做

user 可以直接进入任意节点：

- **Firstmate**：交代整体事务
- **Mate**：深入讨论一个 Task、检查结果、改变安排
- **Worker**：追问一块具体工作。Worker 的上下文只有这一块，最纯净

> 例：QA Worker 报告的问题看不明白，user 直接问这个 Worker 当时测了什么、看到了什么，比经 Mate 转述更准确

被直接进入的节点照常完成自己的工作，变化按 [Notify](#notify) 通知。传话、催回执和安排交接由 agent 完成，user 不需要在节点之间跑腿

## Notify

节点上发生了变化，按它影响到谁决定通知谁：

- **不影响计划和状态**：不向上通知，正常结束时汇报
- **影响上层的计划或状态**：通知上层，例如发现了新问题，新开了 Ticket、Task 或 Issue
- **影响其他分支**：通知共同的上层，由它协调

通知只让对方取得这项变化，责任不转移。决定与批准的变化同样这样传。怎样通知属于 runtime

> 例：user 在 infra mate 下面直接和环境配置 Worker 聊。补一处配置，不影响别人，做完正常汇报。需要追加 QA，而 Firstmate 正在本地集成分支上跑别的 QA，就通知 Firstmate 规划冲突。发现新问题并开了 Issue，通知 infra mate

## Visibility

每个 Mate 有一个固定的状态入口，上层和 user 从这里读取当时的快照。入口汇集这个 Mate 负责的 Task 的[当前信息](../delivery/task.md#information)，另外加上职责树特有的两项：

- **等待**：卡在哪里，在等谁
- **新要求**：user 在本节点提出、需要上层处理的事

平时只读快照，需要判断时再沿依据深入。状态未知或已经过时，直接标明

## Reentry

user 回来时，Firstmate 帮 user 整体定位：正在做哪些事、到了哪里、哪些在等 user。需要深入某个 Task 时，由它的 Mate 接着展开。恢复的方式见[理解负担](../communication/load.md#reorient)

[Agency](index.md)
