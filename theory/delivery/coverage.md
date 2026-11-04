---
title: 工作范围
description: 一件事在不在 user 对这次结果的预期里：照做、先定下来，还是按问题处置并汇报。遇到 user 没提到的事、测出问题、发现做多了，或写交付回执时读
assertion: 范围以 user 对这次结果的预期为准，它约束 agent 做到哪里，也决定向 user 汇报什么。Agreed 照做，Implied 定下来并说明，Outside 按错误或缺陷处置并汇报
validity: confirmed
---
# Coverage

user 无法把预期完整表达出来，Task 与 Spec 都写不全，总会遇到没说到的事。Coverage 是[作用域](../primitive/scope.md)中的工作范围，以 user 对这次结果的预期为准，依据是当前的 [Task](task.md) 与 [Spec](spec.md)。它只做两件事：约束 agent 做到哪里，决定向 user 汇报什么

## Kinds

| Coverage | Meaning | Handling |
| --- | --- | --- |
| Agreed | user 明说的预期，以及它成立所需的部分 | 照做 |
| Implied | user 没明说，agent 依据这次工作推断的预期 | 按 [Mode](../agency/mode.md) 定下来，交付时说明 |
| Outside | 预期之外的问题 | 按下面的种类处置，向 user 汇报 |

Outside 有两种：

- **错误**：agent 做了预期之外的事，例如做重、做偏、超出批准。收回，留在外面的变化按 [Effect](../agency/effect.md#kinds) 的意外处理
- **缺陷**：功能不对。这次工作造成的，修好才算做完。本来就有的不顺手修，汇报并给出可能的去向

> 例：user 新增诊断功能，任务说明写了"参考 DeepSeek harness 的设计"
>
> - 对话诊断的界面、接口与数据，是 Agreed
> - 从参考里读到的全 Session 导出，user 没提，是 Implied
> - 顺带引入的插件系统，是错误
> - 诊断的改动弄坏了别处，是这次造成的缺陷
> - 测试中跑到的 deep-research 报错，是本来就有的缺陷

## Change

user 的回答会改变范围：要的成为 Agreed，不要的成为 Outside

user 明确接受一个问题，也就是知道它存在、这次不关注，它同样成为 Agreed。按 [Decision](../communication/decision.md#record) 记录，之后不再反馈，只在[回执](closeout.md#receipt)留一行。问题变了，重新汇报

哪些动作另需批准，见 [Approval 的 Scope](../agency/approval.md#scope)

## Expression

user 以绿、黄、红分别指称 Agreed、Implied、Outside。标记方式属于 runtime

[Delivery](index.md)
