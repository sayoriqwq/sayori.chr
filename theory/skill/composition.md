---
title: 组合
description: 多份 Skill 怎样组成流程，组合层能管什么。要把几份 Skill 串起来，或拿不准一份 Skill 该不该拆时读
assertion: 调用其他 Skill 的才是 Workflow，步骤多少不算。Workflow 负责整体结局，它可以收紧被调用的 Skill，不能放宽
validity: candidate
---
# Composition

## Workflow

分类只看一件事：实现时是否调用其他 Skill。不调用的是单项 Skill，调用的是 Workflow。步骤、阶段、分支的数量都不改变分类

Workflow 调用哪些 Skill 事先写定，不在运行时临时发现

## Ownership

Workflow 负责整体结局：走到哪一步、何时停、下一步去哪里。被调用的 Skill 仍负责自己的约束、动作边界与局部检查

组合可以收紧被调用的 Skill，不能放宽。它们的批准点、动作边界不因为被组合而消失

## Split

一份 Skill 同时对付不同的跑偏、需要不同的动作范围或成功标准时，拆开再组合。拆分只增加交接、没有独立价值时，保持一份，标准见[身份的 Responsibility](identity.md#responsibility)

[Skill](index.md)
