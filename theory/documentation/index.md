---
title: 文档
description: 信息怎样组织、写给谁、怎样写。写文档、组织内容，或拿不准一份文档该怎样写时，从这里找入口
assertion: user 的注意力与 agent 的上下文都有限。读者只占用必要的部分，就取得当前需要的内容：打开之前能看出该不该读，打开之后先看到主张
validity: confirmed
---
# Documentation

## Premise

本领域出自[前提](../premise.md)中的两个事实：user 的注意力极其有限，agent 的上下文有限

一份文档是在和其他一切争夺读者的注意力与上下文。本领域守住的是：**读者只占用必要的部分，就取得当前需要的内容**。打开之前能看出该不该读，打开之后先看到主张，每个意思只有一处

## Scope

本领域处理信息本身：怎样组织，为谁书写，怎样书写。信息的约束力是原语 [Validity](../primitive/validity.md)。各领域的信息都由本领域承载。信息放在哪里、怎样注入给 agent（plugin、codemod 等），属于 runtime。Skill 的机理见 [Skill](../skill/index.md)，它的载体同样属于 runtime

## Modules

| Module | Description |
| --- | --- |
| [Organization](organization.md) | 文件、目录与文档入口怎样配合，让内容能被找到、被逐层理解。新建文件或目录、调整层级、写文档入口，或拿不准内容该放哪里时读 |
| [Audience](audience/index.md) | 动笔前先确定这份文档给谁读，人和 agent 共读时怎样处理。开始写任何文档或产物之前读 |
| [Writing](writing.md) | 所有文档共用的写法：文风、命名、形式、Example、标点、语言与修订。动笔写或修改任何文档时读 |
| [Description](description.md) | 写好一条 description，让读者在打开之前就能看出该不该来这里。写 md 模块、目录或 skill 的 description，或 agent 总是找错、漏找某份内容时读 |
| [Special Filenames](special-filenames.md) | NOTES、index、AGENTS 等文件名各自的约定，以及谁可以写。创建或修改这些文件，尤其是碰 NOTES.md 之前读 |

[Theory](../index.md)
