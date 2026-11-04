---
title: Frontmatter
description: 文档入口在 OpenKnowledge 中落到哪些字段，路由与目录说明怎样生成，页面阶段怎样改。新建页面、写 frontmatter、把一页改为 confirmed，或修改已确认的页面时读
assertion: 文档入口的四项落在 frontmatter 的四个字段。路由与目录说明从字段生成，不手写。confirmed 只征求一次
validity: confirmed
---
# Frontmatter

## Fields

[组织的 Entry](../theory/documentation/organization.md#entry) 的四项，在本仓落为 frontmatter 字段：

| Entry | Field | Note |
| --- | --- | --- |
| 名称 | `title` | OpenKnowledge 必填 |
| [Description](../theory/documentation/description.md) | `description` | OpenKnowledge 必填，列表与 agent 加载时显示 |
| 断言 | `assertion` | 本仓补充，OpenKnowledge 会显示 frontmatter |
| 阶段 | `validity` | 本仓补充，取值见 [Validity 的 Stage](../theory/primitive/validity.md#stage) |

断言放在读者最先看到的位置，按载体选一处：

- **frontmatter 可见**：OpenKnowledge 中，写在 `assertion` 字段
- **frontmatter 不可见**：普通 Markdown，写在 H1 下第一段，整段加粗
- **没有标题结构**：Issue、PR 描述、消息等，写成开头第一句

新页面从 `theory/.ok/templates/module.md` 开始，初值 `validity: candidate`

## Generated

[组织的 Directory](../theory/documentation/organization.md#directory) 要求路由生成、不手写。本仓用 OpenKnowledge 的目录机制落实：

- **模块表**：index 中 `Module | Description` 表的 Description 列，取自所链接页面的 `description`
- **目录说明**：目录的 `.ok/frontmatter.yml`，取自该目录 index 的 `title` 与 `description`

由 `.ok/scripts/derive.py` 生成并核对，见 [Convergence](convergence.md#scripts)

## Stage

`validity` 作用于整页，包括 `assertion`。`confirmed` 只在 user 确认后写入，只征求一次。之后的修改按变更大小处理：

- **一般变更**：保持 `confirmed`，改动明确告诉 user
- **重大变更，或 user 不在场时的变更**：退回 `candidate`，等 user 再次确认

[OpenKnowledge](index.md)
