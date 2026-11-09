---
title: 启用
description: Skill 怎样进入一次运行：谁来调用、持续多久、加载什么。决定一份 Skill 显式调用还是开放给模型，或它总被漏用、误用时读
assertion: Skill 有显式调用与开放给模型两种方式，本质是分层：内部与独立流程的 Skill 不在日常工作中触发，所以多数默认显式。稳定流程，或本来就期望模型遵循的行为，才开放，并要设计好 description
validity: candidate
---
# Activation

## Invocation

调用分两件事：当前情境是否匹配这份 Skill，谁有权发起调用。情境匹配不等于有权调用

| Way | Initiator | Fits |
| --- | --- | --- |
| 显式 | user 或上层 Skill | 内部 Skill，完全独立的流程。它们不该在日常工作中被触发 |
| 开放 | 模型按 [description](../documentation/description.md) 选择 | 稳定的流程，本来就期望模型默认遵循的行为 |

两种方式是分层，不分高低。大多数时候处理的是前一种，所以默认显式。开放一份 Skill 要有理由，并把 description 设计好，模型能否选对全靠它

同一个行为可以分在两层：行为写在开放的一层，显式的一层只是入口

> 例：Matt 的 `grilling` 是开放的，description 写明了触发情境，追问的做法都在里面。`grill-me` 禁止模型调用，正文只有一句 "Run a `/grilling` session"，是给 user 的入口

调用一份 Skill 不等于取得它声明的动作。动作是否放行，按 [Approval](../agency/approval.md) 核对

## Duration

Skill 可以只管一个回合，也可以持续一项任务或一个阶段。超过一次动作的，要写明什么信号关闭它，否则约束会漏到后面不相关的工作里

持续生效或约束很强的 Skill，让 user 看得出它正在生效，也知道怎样退出

## Loading

每个转向点只加载够用的内容：调用前只看名称和 description，启用后读责任、边界和每次都要走的步骤，走到某个分支才读该分支的材料。加载方式见 [Agent 的 Load](../documentation/audience/agent.md#load)

运行时要用到的内容要取得到。关键内容放在永远读不到的地方，和没写一样

[Skill](index.md)
