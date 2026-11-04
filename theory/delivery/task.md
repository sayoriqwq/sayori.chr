---
title: Task
description: user 持续关注的一个域怎样保持整体：记录哪些信息、谁负责、进展怎样汇报。开始关注一件新的事、接手已有工作，或 user 问"做到哪了"时读
assertion: Task 是 user 注意力的一个域：user 知道自己在做什么，会持续在这里做。它的当前记录让任何负责人都能接上
validity: confirmed
---
# Task

## Identity

user 的注意力极其有限，只能同时关注少数几件事，见[前提](../premise.md)。Task 就是其中的一件：user 知道自己在做什么，会持续回到这里。它由一个 [Mate](../agency/crew.md) 负责，这个 Mate 也是 user 进入它的入口

> 例：基建与清理都可以是 Task，分别由 infra mate 与 cleanup mate 负责，它们都服务于 user 当前想推进的内容

Task 的身份来自 user 的持续关注。交付了几次、开了几个 PR、换了多少 Session 和负责人，它都是同一个 Task。user 不再关注时，Task 结束，见 [Closeout](closeout.md)

一个 Task 里可以先后有很多个 [Spec](spec.md)，可以关联多个 [Issue](issue.md)。一闪而过的想法不必建 Task

Session 内的 Todo 只服务当前 Session，跨 Session 的待办以 Task 为准

## Information

Task 的当前记录是 [Record](../primitive/record.md) 中的 State，组织以下信息及其入口，正文可以分布在多个文件中：

| Item | Content |
| --- | --- |
| Spec | 当前有效的 [Spec](spec.md)。没有 Spec 的工作，要达成的结果直接写在这里 |
| Progress | 已达到的结果、证据、未满足的要求与阻塞 |
| Owner | 谁负责整体，哪些部分由其他 agent 负责 |
| Collaboration | 当前 [Mode](../agency/mode.md) 与有效 [Approval](../agency/approval.md) |
| Pending | 等 user 回答的问题与等 user 批准的动作 |
| Effect | 登记中的 [Effect](../agency/effect.md#register) |
| Related | [Ticket](ticket.md)、交付物与剩余事项的去向 |

环境能证明的事实从原处取得，记录只写[指向](../primitive/context-pointer.md)。记录与环境不一致时，以环境为准，见 [Validity 的 Source](../primitive/validity.md#source)

## Ownership

负责 Task 的 [Mate](../agency/crew.md) 是它唯一的负责人，见 [Ownership](../primitive/ownership.md)，由它维护当前记录。并行的参与者各自提供结果与证据，记录只有一个版本

## Progress

进展对照 Spec 表达，没有 Spec 时对照本记录里要达成的结果，对 user 优先回答：

- 目前到哪里
- 对目标实际做了什么
- 还剩什么，下一步由谁处理

阻塞、反复尝试或长时间没有新证据，直接呈现。摘要保持简明，并能进入证据，写法见 [User](../documentation/audience/human/user.md)

[Delivery](index.md)
