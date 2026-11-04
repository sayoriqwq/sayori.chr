---
title: Issue
description: 写给人看的问题：现状与期望差在哪里。写或更新 Issue，或从一个 Issue 开始工作时读
assertion: Issue 记录现状与 user 期望之间的差距，写给 user 与同事看，对技术人员可读
validity: confirmed
---
# Issue

## Essence

Issue 只做两件事：

- **定义问题**：现状是什么，期望是什么，差在哪里
- **写给人看**：读者是 user 与技术同事，写法见 [Colleague](../documentation/audience/human/colleague.md)

一项工作还要定义怎样验证，见 [Delivery 的 Definition](index.md#definition)。这部分写给 agent，放在 [Spec](spec.md) 的测试接缝里

## Problem

问题的定义提供支持理解与判断的必要事实：发生条件、期望及其依据、实际表现、必要背景。原因猜测标为 Inference，候选方案作为线索，与问题分开写。详细材料通过[上下文指针](../primitive/context-pointer.md)取得

Issue 有不同的形式。例如 bug 是现在的行为和期望不一样，feature 是期望的结果还不存在。各形式的写法与模板，由 runtime 分别提供

## Selection

[Task](task.md) 可以选取一个 Issue 的一部分，也可以汇集多个。选中的部分写进 Spec，没有选入的保持开放

Issue 放在哪里、怎样与其他对象对应，属于 runtime。发布与更新对他人可见，按 [Effect 的 Gate](../agency/effect.md#gate) 由 user 决定。关闭 Issue 与剩余问题的去向，由 [Closeout](closeout.md) 处理

[Delivery](index.md)
