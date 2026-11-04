---
title: 上下文指针
description: 怎样写链接和引用，让读者知道为什么读、什么时候读。写链接、引用或给 agent 的读取入口时读
assertion: 从当前内容指向所需材料，读取用途或条件可辨
validity: confirmed
---
# Context Pointer

上下文指针是从当前内容指向所需材料、并说明其用途或读取条件的引用。链接是常见载体，指针还承载"为什么读、何时读"

## Relation

目标可以是一份文档、其中的片段，或其他可辨认的内容，可以在任何位置

用途可以由当前表述直接说明，也可以从已经清楚的上下文取得

> 例：查定义、理解背景、查看依据，是三种读取用途

## Scope

指针给出入口，读取、理解与核对各是后续的一步。被引用内容的约定，在当前场景是否生效，按[作用域的复用](scope.md#reuse)来看

读取多少、何时读取、是否自动加载，由使用指针的一方决定

## Position

位置表达归属，指针表达跨位置的具体关联。一段表达可以同时是[断言](assertion.md)与指针

## Use

[文档组织](../documentation/organization.md)用它连接模块，写法见 [Agent 的 Pointers](../documentation/audience/agent.md#pointers)，指向内容自身的指针就是 [description](../documentation/description.md)。[Handoff](../agency/handoff.md) 交出的入口与 [Task](../delivery/task.md) 记录里的指向，都是指针

[Primitive](index.md)
