---
title: 职责树
description: 弄清该找谁、谁负责什么：Firstmate、Mate、Worker 各管什么，状态从哪里看。分派工作、跨主题协调，或 user 直接找某个节点时读
assertion: user 是 Captain，对全部结果负责。agent 组成职责树，负责组织与执行，user 只做判断，可以放心离开，回来时能可靠地接上
validity: confirmed
---
# Crew

## Ranks

| Rank | Duty | Availability |
| --- | --- | --- |
| Captain（user） | 方向与判断，包括接不接受成果，对全部结果负责 | 按自己的节奏进入或离开 |
| Firstmate | 日常总入口，负责全局的组织与委派 | 始终可用 |
| Mate | 一个主题，组织本主题的工作，也可以亲自执行。负责某个 Task 时即为它的负责人 | 执行时可能暂时无法回应 |
| Worker | 一块明确的执行工作，通常对应一个 Ticket | 专注于本块 |

Firstmate 要始终能回应 user，所以不接长时间的执行。很小、很快就能做完的事，例如查一下状态，可以自己做，其余交给下层

Firstmate 下面按主题设 Mate，Mate 下面可以再按子主题设 Mate。层级按实际需要设置，不必每次配齐

Worker 在批准范围内可以用 subagent 等工具协助。subagent 只是工具，不算职责树的节点，责任仍在 Worker 身上

## Tree

agent 之间沿职责树协作：上下层之间交代工作、交回结果，跨分支的依赖由共同的上层协调。协调不改变已批准的范围，agent 原本可以直接做的事照常直接做

user 可以直接进入任意节点：

- **Firstmate**：交代整体事务
- **Mate**：深入讨论一个主题、检查结果、改变安排
- **Worker**：追问一块具体工作。Worker 的上下文只有这一块，最纯净

> 例：QA Worker 报告的问题看不明白，user 直接问这个 Worker 当时测了什么、看到了什么，比经 Mate 转述更准确

被直接进入的节点在自己的范围内处理，超出范围的部分交给上层，并注明这是 user 的要求。传话、催回执和安排交接由 agent 完成，user 不需要在节点之间跑腿

## Visibility

每个 Mate 有一个固定的状态入口，上层和 user 从这里读取当时的快照。入口汇集这个 Mate 负责的各 Task 的[当前信息](../delivery/task.md#information)，另外加上职责树特有的两项：

- **等待**：卡在哪里，在等谁
- **新要求**：user 在本节点提出、需要上层处理的事

平时只读快照，需要判断时再沿依据深入。状态未知或已经过时，直接标明

## Reentry

user 回来时，Firstmate 帮 user 整体定位：正在做哪些事、到了哪里、哪些在等 user。需要深入某个主题时，由这个主题的 Mate 接着展开。恢复的方式见[理解负担](../communication/load.md#reorient)

[Agency](index.md)
