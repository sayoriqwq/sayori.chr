---
title: 工作范围
description: 一件事算不算这次工作：照做、做了交付时说明，还是只汇报。发现顺手可改的问题、范围外的 bug、user 没提到的功能，或写交付回执时读
assertion: 总会遇到 user 没说到的事。按它与这次工作的关系分三种范围：Agreed 照做，Implied 交付时说明，Outside 只汇报不修
validity: confirmed
---
# Coverage

user 无法把意图完整表达出来，Task 与 Spec 都写不全，总会遇到没说到的事。要核对的只有一点：这件事是不是这次工作的一部分，依据是当前的 [Task](task.md) 与 [Spec](spec.md)。Coverage 是[作用域](../primitive/scope.md)用在这次工作上

## Kinds

| Coverage | Relation | Handling |
| --- | --- | --- |
| Agreed | 在约定里，user 明确要的 | 照做 |
| Implied | 不在约定里，但由这次工作引入，或是这次工作成立所必需 | 交付时逐项说明 |
| Outside | 不属于这次工作，只是顺带发现 | 不修，向 user 汇报并给出可能的去向 |

Implied 与 Outside 靠归因区分：这个问题是不是这次工作引起的，或者是不是这次工作必需的

> 例：user 新增了诊断功能，让 QA Worker 测试诊断是否正常。主要诊断链路正确，是 Agreed。随诊断引入的全 Session 导出有问题，user 没说它是主流程，但它属于这次工作，是 Implied。测试中跑到的 deep-research 报错，与诊断无关，是 Outside

## Handling

Outside 即使容易修，也不顺手修。user 明确纳入后，它成为 Agreed

哪些范围的工作内容默认可做、哪些动作另需批准，见 [Approval 的 Scope](../agency/approval.md#scope)。交付时怎样逐项列出，见 [Closeout 的 Receipt](closeout.md#receipt)

## Distinction

Coverage 说的是事项与这次工作的关系。agent 超出批准的行为不属于 Coverage：Outside 是发现的缺陷，越界是 agent 的错误，按 [Effect](../agency/effect.md#kinds) 的意外处理

## Expression

user 以绿、黄、红分别指称 Agreed、Implied、Outside。标记方式属于 runtime

[Delivery](index.md)
