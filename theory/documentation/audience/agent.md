---
title: Agent
description: 写给 agent 执行的文档怎样写：指针、步骤、完成标准、正面指令。写 AGENTS.md、skill、prompt 或给 subagent 的任务说明时读
assertion: 面向 agent 的文档借助模型已有的语义能力，以清楚的范围、动作与完成标准指导执行，通过指针按需取得依据
validity: confirmed
---
# Agent

## Leading Words

用 [leading word](../writing.md#language) 锚定概念、方法或行为，例如 TDD、tracer bullet。同一个词在文档、提示与代码中反复出现，agent 每次遇到都会采取同一类行为。具体任务的范围、目标与本地差异仍要写明

## Pointers

上下文指针写明两件事：所指材料是什么，在哪些情形下读取。每种情形一个触发词，同义词合并。agent 是否读到材料，取决于指针的措辞

## Steps

下达操作时用命令式步骤，写明对象、范围、必要条件与依据。每一步以可检查的完成标准结束，完成标准限定在当前范围内

> 例："修改后的引用应保持一致"写成"检查本次改动影响的引用，更新失效的路径与锚点，核对它们指向正确目标"

## Instructions

写期望的动作。必须设置的禁止项写成硬边界，并配上正确做法

需要标明强度时，可用 MUST、SHOULD、MAY：MUST 必须遵守，SHOULD 通常遵循、有理由时可偏离，MAY 允许。强度词用在确实需要的地方

## Load

始终加载的内容（AGENTS.md、skill 的 description）每一行都占用 agent 每一轮的上下文，压到最短。只在部分情形用到的内容放到指针后面，按需读取。逐句删减按[书写的 Pruning](../writing.md#pruning)

[Audience](index.md)
