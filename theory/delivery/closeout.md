---
title: 收口
description: 一件工作结束时怎样收尾：复盘、让剩余职责与 Effect 都有结局、给 user 回执。Spec 交付、Worker 到达结束条件、PR 合并，或一个 Task 要结束时读
assertion: 一件工作结束时收口：经验有去处，剩余职责与 Effect 都有结局，user 收到逐项回执。Task 结束时，整个域退出注意力
validity: confirmed
---
# Closeout

## When

Spec 交付、Worker 到达[结束条件](../agency/crew.md#ranks)、Task 结束，都要收口，规模随工作大小。Ticket 交回不等于 Worker 结束，它还可能被追问。Task 结束时多一步：整个域退出注意力

收口与 [Acceptance](acceptance.md)、对外交付是不同的事。收口中的动作仍按 [Approval](../agency/approval.md) 核对。user 说收口，就批准了删除这次工作留下的 Byproduct，不再留给 user

## Steps

1. **复盘**：经验找到去处
2. **结局**：剩余职责与 Effect 都有结局
3. **回执**：逐项告诉 user

## Review

收回之前，回看值得复用的经历：

- 哪些做法有效
- 哪里偏离了要求
- 什么事实支持这一结论

经验按用途去向：

- **当场消化**：当前工作就能用上的，不必长期保存
- **[Case](../evolution/case.md)**：一次偏差
- **[进化](../evolution/index.md)**：可能改变理论或运行方式的建议

没有新经验时如实收口。user 可以明确决定跳过某次复盘，agent 不静默省略

## Ending

这次工作负责的每件事，按 [Ownership 的 Ending](../primitive/ownership.md#ending) 收回或转交：

| Object | Ending |
| --- | --- |
| 延期、未做的事项，本来就有的缺陷 | 转交：交给谁，记在哪里，对方接收了没有。没有接手的人，交还 user |
| Byproduct，例如 worktree、分支、临时文件、备份、归档、临时 Ticket | 收回，按 [Effect 的 Ending](../agency/effect.md#ending) |
| Intended，例如交付成果与有长期用途的知识 | 转交，先于收回 |

残留的 Byproduct 会被之后的 agent 当成现状，见 [Validity 的 Source](../primitive/validity.md#source)。失败或被阻塞时，保留真实状态。仍在使用的资源，保留到用途结束

## Receipt

回执逐项列出，每一项写明范围与状态：

- **范围**：按 [Coverage](coverage.md)。Implied 与 Outside 逐项写明，Agreed 可以简写，user 接受的问题留一行
- **状态**：做了、没做，以及去向

另外列出：

- **Effect**：收回了什么，转交了什么
- **阻塞**：还有什么卡住

回执之后，已结束的工作退出注意力，未结束的部分保持可见

[Delivery](index.md)
