---
title: 组织
description: 文件、目录与文档入口怎样配合，让内容能被找到、被逐层理解。新建文件或目录、调整层级、写文档入口，或拿不准内容该放哪里时读
assertion: 一个文件承担一个职责，目录用位置表达归属，文档入口让读者打开之前能挑选、打开之后先看到主张
validity: confirmed
---
# Organization

## Module

一个文件是一个模块，围绕一个职责组织内容。文件边界就是它的[作用域](../primitive/scope.md)。一个职责可以包含定义、解释、关系、例子与依据，它们服务同一个目的，就写在同一个文件里

内容归哪个模块，看它服务哪个目的，出现相同的关键词只是线索。有独立目的的内容拆成另一个模块，模块之间用[上下文指针](../primitive/context-pointer.md)连接，写明为什么读。命名见[书写的 Naming](writing.md#naming)

## Directory

目录用位置和父子层级表达归属：放在哪一层，就在哪个语境里被理解。各模块仍有自己的职责，位置只提供语境

每层的 index 只写单个模块写不了的内容：

- **前提**：本层各页共同的出发点，写在 index 的断言与正文
- **边界**：本层管什么，和相邻层怎样分，只在这里写一次
- **路由**：模块表取用各页的 description，读者据此决定打开哪一页

路由与目录自身的说明，从各页的入口生成，不手写。手写的副本迟早和原处不一致

## Hierarchy

同一层的条目按同一个分类维度并列。新增目录、分类或条目时，先确定它在哪一层：

- **并列**：与现有条目按同一维度划分，放在同一层
- **从属**：是现有某个条目的细分，放到该条目下面

> 例：读者先按 human 与 agent 划分。user 与 colleague 都是 human，属于 human 的细分，放在 human 下面。把 colleague 与 human、agent 并列，就在同一层混用了两个分类维度

## Entry

每篇文档有一个入口，四项各管一件事：

| Entry | Answers | Seen |
| --- | --- | --- |
| 名称 | 这是什么 | 列表中 |
| [Description](description.md) | 当前问题该不该来这里 | 打开之前 |
| [断言](../primitive/assertion.md) | 本页主张什么 | 打开之后最先 |
| 阶段 | 本页现在走到哪一步，取值见 [Validity 的 Stage](../primitive/validity.md#stage) | 打开之后 |

description 不复述名称，也不写结论，结论属于断言。断言只放一处，放在读者最先看到的位置。正文从断言展开理由、条件与例子，不复述它。阶段作用于整页，包括断言

## Reading

读者先在当前层看 description 与断言，够用就停在这一层，需要时再进入正文，或沿下层与指针取得材料。agent 沿同一结构查找，替 user 完成串联，见 [Load](../communication/load.md)

[Documentation](index.md)
