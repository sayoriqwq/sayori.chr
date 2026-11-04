---
title: 上下文
description: 一方此刻实际手上有什么，为什么写在别处不等于它知道。agent 的行为出乎意料、拿不准某项内容 agent 能不能看到，或要决定给 agent 什么时读
assertion: 上下文是一方此刻实际取得的内容。结论与行动只能依据它，没取得的等于不存在
validity: confirmed
---
# Context

上下文是一方此刻实际取得的内容。结论与行动只能依据它

## Obtained

内容存在不等于已经取得。写在别处的规则，没读到就不起作用，读到了也可能没用上

agent 的行为只由模型和上下文决定，见[前提](../premise.md)。所以要改变 agent 的行为，就改变它取得的内容

## Limits

- **有限**：每一项都占位置，见[前提](../premise.md)
- **会消失**：Session 结束或被压缩，上下文就没了，要活过它的内容写到外面，见 [Record](record.md)
- **是缓存**：上下文里关于现状的内容会过时，以环境为准，见 [Validity 的 Source](validity.md#source)

## Use

[上下文指针](context-pointer.md)提供取得内容的入口，[Session](../agency/session.md) 处理它的消失，[Derivation](../evolution/derivation.md) 决定 agent 运行时取得什么

[Primitive](index.md)
