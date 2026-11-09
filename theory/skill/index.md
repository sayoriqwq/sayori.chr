---
title: Skill
description: 什么行为值得固定成 Skill，它怎样进入一次运行，怎样组合与修剪。要新建或修改 Skill，或拿不准一件事该不该做成 Skill 时，从这里找入口
assertion: agent 不会从经验中学习，同样的跑偏下次照样发生。Skill 是行为治理单元：在可识别的情境中约束 agent 的做事过程，不再靠 user 当场纠正
validity: candidate
---
# Skill

## Premise

本领域主要出自[前提](../premise.md)中的三个事实：

- **agent 不会从经验中学习**：同样的跑偏下次照样发生，除非改变给它的东西
- **user 的注意力极其有限**：同样的纠正不该每次由 user 来做
- **agent 的上下文有限**：约束只在适用时取得，不常驻

## Scope

本领域处理 Skill 的机理：凭什么成立，怎样进入一次运行，怎样组合，怎样修剪。换一种宿主，这些仍然成立

Skill 是 [Runtime](../evolution/derivation.md#runtime) 的一种形态，理论怎样变成 Runtime 见[派生](../evolution/derivation.md)。文件格式、字段名称与安装位置属于 runtime。description 的写法见 [Description](../documentation/description.md)

## Modules

| Module | Description |
| --- | --- |
| [Identity](identity.md) | 一件事该不该做成 Skill，一份 Skill 管到哪里。想新建 Skill，或拿不准该写 Skill、写程序还是什么都不做时读 |
| [Activation](activation.md) | Skill 怎样进入一次运行：谁来调用、持续多久、加载什么。决定一份 Skill 显式调用还是开放给模型，或它总被漏用、误用时读 |
| [Composition](composition.md) | 多份 Skill 怎样组成流程，组合层能管什么。要把几份 Skill 串起来，或拿不准一份 Skill 该不该拆时读 |
| [Maintenance](maintenance.md) | 已有的 Skill 怎样修补、拆分与删减。一份 Skill 用起来出了偏差，或想精简 Skill 时读 |

[Theory](../index.md)
