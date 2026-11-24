---
title: 收口
description: 一件工作或一个 Task 结束时怎样收尾：解耦工作收口与 Task 撤除、完成复盘、落实记录持久化与 Effect 结局、区分保留与处置并向 user 给出逐项回执。阶段交付或任务撤除时读
assertion: 收口解耦为工作收口与 Task 撤除两层。收口分别核对经验复盘、记录持久化、Effect 结局与职责转交，保留价值、正式归属与最终处置独立判断，版本提交在差异审阅窗口后完成落盘
validity: confirmed
---
# Closeout

## Levels

收口按作用范围分为两个正交层次，避免将阶段交付与撤除整个注意力域混为一谈：

| 层次 | 触发时机 | 处置范围 | 对 Task 的影响 |
| --- | --- | --- | --- |
| 工作收口 | Spec 交付、阶段切片完成或 Sailor 到达结束条件 | 回收本阶段 Byproduct、落实本阶段记录持久化与交付回执 | 所属 Task 保持活跃延续 |
| Task 撤除 | 一次性 Task 目标达成、工作取消或 user 明确下达常驻 Task 清退 | 回收 Task 级长期载体与遗留副产物、转交剩余责任并退出工作载体 | 整个域退出注意力 |

Ticket 交回由上层核对验收，Sailor 在到达结束条件前保持存活以备追问。收口与 [Acceptance](acceptance.md)、对外交付分属独立事实，收口中的外部动作仍按 [Approval](../agency/approval.md) 核对。user 下达收口指令所涵盖的删除批准限于已登记且落在本次工作专属隔离范围内的 Byproduct，落在共享环境或不可逆的删除仍按 [Gate](../agency/approval.md#gate) 逐项核对

## Steps

1. **复盘**：经验找到去处
2. **落盘**：在差异审阅窗口后完成本次工作记录的持久化提交，见[变更的 Review](change.md#review)
3. **结局**：剩余职责与所属层级的 Effect 都有明确结局
4. **回执**：逐项告诉 user

## Review

收回之前，回看值得复用的经历：

- 哪些做法有效
- 哪里偏离了要求
- 什么事实支持这一结论

经验按用途去向：

- **当场消化**：当前工作就能用上的，无须长期保存
- **[Case](../evolution/case.md)**：一次偏差
- **[进化](../evolution/index.md)**：可能改变理论或运行方式的建议

没有新经验时如实收口。user 可以明确决定跳过某次复盘，agent 不静默省略

## Ending

这次工作负责的每件事，按 [Ownership 的 Ending](../primitive/ownership.md#ending) 收回或转交：

| Object | Ending |
| --- | --- |
| 延期、未做的事项，本来就有的缺陷 | 转交：写明交给谁、记在哪里、对方是否已接收。没有接手方时交还 user |
| 阶段级或 Task 级 Byproduct，例如隔离副本、临时分支、临时文件、备份与临时 Ticket | 按所属收口层次逐项收回，见 [Effect 的 Ending](../agency/effect.md#ending) |
| Intended，例如交付成果与有长期用途的知识 | 转交，先于收回 |

残留的 Byproduct 会被之后的 agent 当成现状，见 [Validity 的 Source](../primitive/validity.md#source)。失败或被阻塞时保留真实状态，仍在使用的资源保留到用途结束

- **保留与处置分离**：资源的保留价值、正式归属位置与问题是否已处置完毕属于三个独立判断。为材料记录保管人或转移存放位置属于信息登记，正式归位与撤除冗余副本须分别落实
- **记录与 Effect 分离**：过程记录载体的持久化提交属于 [Record](../primitive/record.md) 落盘，与外部 Effect 结局分别核实并在差异审阅窗口后完成

> 例：整理现用配置目录时确认旧材料具有保留价值并指派保管人即宣告收口，导致历史源码滞留现用目录且已合入分支仍未删除，见[保留材料误作完成处置](../../cases/preservation-is-not-disposition.md)

## Receipt

回执逐项列出，每一项写明范围与状态：

- **范围**：按 [Coverage](coverage.md)。Implied 与 Outside 逐项写明，Agreed 可以简写，user 接受的问题留一行
- **状态**：做了、没做，以及去向

另外列出：

- **记录**：已持久化提交的文档、结论与仍待审阅的差异现场
- **Effect**：收回了什么，转交了什么
- **阻塞**：还有什么卡住

回执之后，工作收口保留所属 Task 活跃，Task 撤除让整个域退出注意力，未结束的部分保持可见

[Delivery](index.md)
