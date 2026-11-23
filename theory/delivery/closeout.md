---
title: 收口
description: 一件工作结束时怎样收尾：复盘、按 Task 生命周期分流结局、区分保留与处置、落实提交 Effect 并向 user 给出逐项回执。交付、到达结束条件或任务收尾时读
assertion: 工作结束时完成复盘、结局与逐项回执，保留价值、正式归属与最终处置分别判断，版本提交在差异审阅窗口后作为必要 Effect 落盘。一次性 Task 彻底退出注意力，常驻 Task 保留至明确清退
validity: confirmed
---
# Closeout

## When

Spec 交付、Sailor 到达[结束条件](../agency/crew.md#ranks)、Task 结束，都要收口，规模随工作大小。Ticket 交回不等于 Sailor 结束，它还可能被追问。Task 结束时多一步：整个域退出注意力

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

- **保留与处置分离**：资源的保留价值、正式归属位置与问题是否已处置完毕属于三个独立判断。为材料记录保管人或转移存放位置属于登记，正式归位与撤除冗余副本须分别落实
- **生命周期分流**：一次性 Task 在收口时彻底收回副产物、退出工作载体并退出注意力。常驻 Task 在阶段收口时回收该阶段副产物、合并阶段成果并保持任务域延续，直至 user 明确下达清退
- **提交落盘**：将已确认改动提交进版本历史属于收口必须落实的 Effect。当 user 明确要求审阅未提交差异时，先保留工作树现场，待审阅通过或阶段结束后完成提交，见[提交的 Review](../git/commit.md#review)

> 例：整理现用配置目录时确认旧材料具有保留价值并指派保管人即宣告收口，导致历史源码滞留现用目录且已合入分支仍未删除，见[保留材料误作完成处置](../../cases/preservation-is-not-disposition.md)

## Receipt

回执逐项列出，每一项写明范围与状态：

- **范围**：按 [Coverage](coverage.md)。Implied 与 Outside 逐项写明，Agreed 可以简写，user 接受的问题留一行
- **状态**：做了、没做，以及去向

另外列出：

- **Effect**：收回了什么，转交了什么
- **阻塞**：还有什么卡住

回执之后，已结束的工作退出注意力，未结束的部分保持可见

[Delivery](index.md)
