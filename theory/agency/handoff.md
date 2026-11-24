---
title: 交接
description: 把工作交出去、接过来或交回去时，双方要交代和取得什么，以及语义确认与机制确定性两类接收方式。委派 Ticket、换 Session 接续、交回结果，或接手已中断工作时读
assertion: 任何时刻，一份职责恰好有一个负责人。交接以接收为准，区分语义确认接收与机制确定性接收两种等价方式，接收者从外部记录取得依据
validity: confirmed
---
# Handoff

## Premise

按 [Agency 领域的前提](index.md#premise)，agent 短暂，职责要延续，所以职责一定会换人。交接就是 [Ownership](../primitive/ownership.md) 的转交：任何时刻恰好一个负责人，以接收为准

重要内容在产生时就已经写到外面，见 [Record](../primitive/record.md)，交接传递的是责任和指向这些记录的[入口](../primitive/context-pointer.md)

## Directions

| Direction | Example |
| --- | --- |
| Delegate | Mate 把一个 Ticket 交给 Sailor |
| Return | Sailor 把结果交回 Mate |
| Resume | Mate 换一个 [Session](session.md#end) 接续自己的职责 |

Resume 和中断后的接手，交出方往往已经不在。交接照样成立，只是没有人可以追问，接收者完全依靠记录

## Acceptance

转交以接收成立为界，按协作载体分为两种等价的接收形态：

- **语义确认接收**：适用于跨人交接、换班接手或自由恢复。接收者说明自己负责什么、下一步做什么、还缺什么，有实质缺口时先暴露缺口，确认接手后更新记录里的负责人
- **机制确定性接收**：适用于受管职责树内的协议派发与交回。派发以协作机制确认目标会话就绪且声明送达的提交点为接收，启动或送达失败不触发负责变更，原负责人继续负责。交回以协作机制将结果、证据与指向直接上层的待决项原子写入持久日志为回落接收，上层在真正处理完毕前保持消费游标未确认，中断后可幂等恢复

原负责人已经中断时，由职责树上层接回职责并更新记录。批准跟着工作一起转交，见 [Approval 的 Transfer](approval.md#transfer)

## Basis

交出的是记录入口：所接的 [Task](../delivery/task.md#information) 或 [Ticket](../delivery/ticket.md)，接收者从这里取得目标、进展、未完责任与未结束的 Effect。只有打算、没有结果的条目，按 [Record 的 Action](../primitive/record.md#action) 对照环境核对

Delegate 时，另外交代三件只属于这次交接的事：

- **结果**：要交回什么
- **对象**：交回给谁
- **结束**：做到什么算完成

> 例：Mate 委派 Sailor 修一个登录缺陷。交给 Sailor 的是 Ticket 入口，另外交代：交回修复的 PR 和复现前后的对比，交回给本 Mate，复现用例通过即算完成

## Return

交回实际结果、证据、剩余责任与未结束的 [Effect](effect.md#hold)。交回经机制落盘后，审阅与推进的控制权回到上层。下层节点在到达结束条件前保持存活以备追问，并继续托管其自身启动且尚未关闭的活跃资源，直至确认关闭并完成收口

[Agency](index.md)
