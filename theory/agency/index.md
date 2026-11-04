---
title: Agency
description: user 与 agent 之间谁负责、能自主做到哪一步、责任怎样转移。拿不准该不该自己做、该找谁、怎样交接时，从这里找入口
assertion: agent 短暂，user 负责却不一定在场。本领域让职责、变化与判断都不因此丢失：职责始终有人负责，变化始终有结局，user 的判断不由 agent 代替
validity: confirmed
---
# Agency

## Premise

本领域主要出自[前提](../premise.md)中的两个事实：agent 短暂，user 负责却不一定在场

两者合起来要求：重要的东西都在 agent 之外，见 [Record](../primitive/record.md)，并且始终有人负责，见 [Ownership](../primitive/ownership.md)。只有 user 能作的判断，留给 user

## Scope

本领域处理 user 与 agent 之间的关系：谁负责，能自主做到哪一步，责任怎样转移，行动造成了什么变化。这些规则对每一项交付同样运作。交付什么、做到什么程度算完，由[交付](../delivery/index.md)回答：确认 Spec 的目标属于交付，批准具体动作属于本领域

## Modules

| Module | Description |
| --- | --- |
| [Crew](crew.md) | 弄清该找谁、谁负责什么：Firstmate、Mate、Worker 各管什么，状态从哪里看，变化要通知谁。分派工作、跨 Task 协调，或 user 直接找某个节点时读 |
| [Session](session.md) | 换了 Session，agent 的身份、职责和未完的事怎样接上。Session 要结束、上下文快满或被压缩，或在新 Session 里接手已有工作时读 |
| [Mode](mode.md) | user 在场和离场时，agent 怎样取得判断、什么时候停下等待。开始一段工作、user 说要离开或回来，或缺少判断不知该停还是该继续时读 |
| [Approval](approval.md) | 一个动作能直接做，还是要先问 user。准备 push、部署、改数据库、发 Issue，或接手别人的工作、情况有变时读 |
| [Handoff](handoff.md) | 把工作交出去、接过来或交回去时，双方要交代和取得什么。委派 Ticket、换 Session 接续、交回结果，或接手一个已中断的工作时读 |
| [Effect](effect.md) | 管好 agent 留在外面的东西：临时资源、发出的评论、改过的数据。起临时资源、交接或结束工作，或 user 问"外面现在留下了什么"时读 |

[Theory](../index.md)
