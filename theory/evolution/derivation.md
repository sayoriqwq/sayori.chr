---
title: 派生
description: 理论怎样变成 agent 运行时取得的说明，哪些含义不能丢。写或修改 runtime，或 runtime 出问题要追溯到理论时读
assertion: 按实际运行需要重组理论，派生说明能独立支持正确行动，关键含义不丢，来源可追溯
validity: confirmed
---
# Derivation

## Runtime

派生的产物是 Runtime：agent 运行时取得的[上下文](../primitive/context.md)。正常使用所需的规则与条件都在其中取得，不用追读理论。具体项目事实作为显式输入提供。Runtime 的形态与组织由它自己决定

## Selection

从要支持的实际行为出发：辨明适用情境和要改善的行为，挑出有关的理论，按运行时的读取顺序重组。派生物按实际需要生成，每一个都对应一个要改善的行为

## Fidelity

派生时逐项检查：

- **条件**：局部成立的主张保留其条件
- **效力**：Fact、Inference、Proposal、Decision、Approval 仍按 [Validity](../primitive/validity.md#form) 可辨
- **行动**：输入、需要 user 判断的点、未覆盖时的处理与结束条件足够清楚
- **边界**：原理论的边界在压缩后仍然存在
- **触发**：只在适用场景触发，正常默认行为保持自由
- **落实**：必须在中断和疏忽下仍然成立的规则，交给机制落实，不靠 prompt，例如 Effect 登记
- **分层**：理论写本源，user 的偏好写代称（例如以绿黄红指称 Coverage），runtime 写形式，三者不混。换一种 runtime 设计仍然成立的才写进理论。本源之下有不同形式时，理论写明需要 runtime 分别处理，例如 Issue 的 bug 与 feature、Coverage 的颜色标记

> 例：[Mode](../agency/mode.md) 的 HITL 等待边界，派生后仍是"停住等待"，Mode 只由 user 切换。[Approval](../agency/approval.md) 的带条件批准，派生后仍带着条件

派生可以补足运行环境所需的表达。遇到理论没有覆盖的取舍时，交给 user 判断，或限定为有依据的局部实现选择

## Provenance

每个派生物能追溯到它对应的理论，理论变化时据此找出哪些需要复核。这些指针服务维护，运行时不需要追读。怎样保留属于 runtime

[Evolution](index.md)
