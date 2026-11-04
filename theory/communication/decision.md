---
title: 决定
description: 决定怎样算形成、怎样记录，之后怎样回头审视。要在几个方案里选一个、拿不准 user 的回答算不算数，或想知道某个旧决定为什么这样定时读
assertion: 有理由地选定一个去向：选了什么、为了什么、接受了什么代价。决定一形成就记下，之后能回到当时的取舍重新审视
validity: confirmed
---
# Decision

Decision 是 [Validity 的 Form](../primitive/validity.md#form) 中的一种，本页展开它怎样形成、记录与回看

## Formation

user 选定时，决定形成，内容在 Validity 中即为 `confirmed`。调查、[Probe](probe.md) 与文档为判断提供依据。暂停或延期时，问题记为 Pending

决定以两种方式形成：

- **明确表达**：例如"可以""批准"，所确认的内容由表达本身与它回应的 Proposal 确定
- **user 声明的约定**：例如"我没提到的地方都视为已经审核通过"。约定只覆盖 agent 这一次呈现的 Proposal。[Leadership](leadership.md#order) 留出的决策点没有倾向，user 作出判断之前仍然开放

一句表达可以同时是 Decision 与 [Approval](../agency/approval.md)。对一份改写方案说"批准"，既定了方案，也放行了修改。两者仍按各自的规则处理

新表达与已形成的决定冲突时，agent 指出差异，辨明是修订还是误解，由 user 确认

## Reasons

决定写明选定了什么、为了什么、为什么接受相关代价。理由对应当时实际使用的依据与取舍

user 可以说明理由，也可以只给出结果。agent 分析出的理由标为 Inference。影响后续方向的重要推断，交给 user 校正

## Record

Decision Log 是 [Record](../primitive/record.md) 中的 Log。决定一形成就追加，不分 [Mode](../agency/mode.md)：

- 一条一个决定，写明决定了什么、出处在哪，user 明示与 agent 推断分别标明
- user 修改某个决定时，追加新的一条，旧条视为 `superseded`
- 记录后告诉 user 记了哪几条，形式属于 runtime

概念进入共享术语，可复用的主张进入所属理论，具体工作中的决定随该工作保存

## Review

回看把已有决定放回当时的目标、约束与优先级：当时想取得什么，接受了什么代价，为什么值得。依据取自相关记录、会话、提交或当时实现

理由按来源标明：来源明示、依据证据推断、无法恢复。当时的条件与今天的变化分开呈现，指出它继续成立的条件与已经变化的依据

需要改变时作出新的决定，按 Record 追加

[Communication](index.md)
