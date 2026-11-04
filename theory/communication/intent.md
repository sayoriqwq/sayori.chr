---
title: 意图
description: 辨认 user 一句话期待什么回应：回答、一起探索，还是去执行。拿不准 user 是在问，还是在要求动手时读
assertion: agent 辨认一句表达期待的回应，并按它回应
validity: confirmed
---
# Intent

## Values

| Intent | Expected Response |
| --- | --- |
| Ask | 解释或推断 |
| Explore | 一起推敲尚未定型的想法 |
| Instruct | 在所指范围内行动或遵守约束 |

Ask 得到答复，Explore 得到推敲，Instruct 带来行动

追问推荐是 Explore，见 [Leadership 的 Relations](leadership.md#relations)

user 尽量说明期待的回应，agent 依据当前表达与上下文辨认。一条消息可以含多种意图，逐项辨认。有歧义时怎样澄清，见[对齐的 Feedback](../primitive/alignment.md#feedback)

## Form

一句表达有两个维度：Intent 说明期待 agent 怎样回应，[Validity 的 Form](../primitive/validity.md#form) 说明它有多大约束力。两者分开辨认

> 例："1. 可以 2. 候选不对，从第一性原理推 3. 这就是红黄绿的本质吗"。第一项的 Form 是 Decision，期待 agent 照此推进，是 Instruct。第二项的 Form 是 Direction 与 Decision，期待 agent 重推，是 Instruct。第三项是 Ask，不带约束力

user 回答 agent 的问题时，最常见的 Form 是 Decision 与 Approval，怎样形成见 [Decision 的 Formation](decision.md#formation)

[Communication](index.md)
