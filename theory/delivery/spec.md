---
title: Spec
description: 把多个 Session 里已经定下的决定整理成一份交给 agent 执行的说明：写什么、怎样定测试接缝、什么时候不需要。工作跨了多个 Session、要交给其他 agent 实现，或要把讨论结果定下来时读
assertion: Spec 是交给 agent 执行的说明，把已经定下的决定整理成一份能活过 Session 的文件。只综合，不重开，不编造
validity: confirmed
---
# Spec

## Use

讨论跨了多个 Session，定下的决定散在对话里，要交给新的 agent 执行时，把它们整理成一份 Spec。一个 Session 的上下文装得下的工作，不需要 Spec

Spec 只写已定的内容。还在对齐中的内容留在对话、[Decision Log](../communication/decision.md#record) 与 [Task](task.md#information) 的 Pending 里，定下之后再进 Spec。一个 Task 可以先后有多个 Spec

## Content

| Section | Content |
| --- | --- |
| Problem | user 面对的问题，从 user 的视角写 |
| Solution | 解决之后 user 看到什么，从 user 的视角写 |
| Decisions | 已定的实现决定：模块、接口、架构、数据结构与契约，不写文件路径与代码 |
| Testing | 测试接缝与测试决定：测什么、在哪一层测、参照哪些已有的测试 |
| Out of Scope | 明确不做的事 |
| Gaps | 尚未解决的缺口 |

没有依据的部分空着，不为了填满而编造。问题来自 [Issue](issue.md) 时，从 Issue 的问题定义出发

## Seams

动笔之前，先提出测试接缝：在哪里观察，就能知道工作是否达成。优先用已有的接缝，越少越好，越高越好，理想是一个。接缝经 user 同意后再写 Spec

这一步就是交给 agent 时"定义怎样验证"。好的测试只测外部行为，不测实现细节，并且要先能失败，见 [Validity 的 Evidence](../primitive/validity.md#evidence)

## Change

已定的决定改变，是一次新的 Decision：按 [Decision 的 Record](../communication/decision.md#record) 追加，更新 Spec 正文，被取代的内容标为 `superseded`。Task 负责人把变化告诉受影响的负责人。已有结果保留原样，按新要求重新验收，还没核对的部分标明待核对。批准的变化同样这样传到受影响的工作

[Delivery](index.md)
