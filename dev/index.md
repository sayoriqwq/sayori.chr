---
title: 工程层设计
description: sayori 的工程层管什么、不管什么：通用工程做法与协作协议、工作区知识怎样分界，sayori.dev 怎样被工作区与执行者取得。拿不准一条工程规则该进 sayori.dev，或要设计工程层的组织与消费方式时读
assertion: 工程层只放换一个工作区还原样成立的工程做法，不含协作协议，不含任何业务。sayori.dev 按版本被工作区固定，派活时以入口路径交给执行者
validity: candidate
---
# Engineering

## Position

工程层回答"怎样做工程"：Git 的提交与分支、worktree 的开与清退、Issue 与 PR 的通用写法、验证与证据的方法、环境操作的通用做法，以及通用工程 Skill。实现在 sayori.dev

| Layer | Answers | Place |
| --- | --- | --- |
| 协作层 | agent 之间怎样派活、交回、收口与唤醒 | [runtime/](../runtime/index.md)，实现在 sayori.run |
| 工程层 | 一个 agent 怎样把工程做对 | 本目录，实现在 sayori.dev |
| 工作区 | 这个仓库、这个环境、这项业务的事实与约定 | 各工作区 |

## Border

一条规则进工程层，要同时满足两点：换一个工作区还原样成立，只关于工程做法本身。判断顺序见[消费的 Border](../runtime/consumer.md#border)

- **与协作层**：同一件事里，"交给谁、怎样交回"归协作层，"这块工程怎样做对"归工程层。例如交回前 rebase 并重跑验证，要求写在协作层的派活约定里，rebase 与冲突处理的做法写在工程层
- **与工作区**：通用做法进工程层，本仓的具体取值留工作区。例如 Issue 按目的分类是工程层，炎黄的 `type:*` 标签名与 Project 字段留在 sais

> 例：sais 的 Issue Skill 拆开后，"从真实材料定问题与范围""事实、反馈与推断分开"进工程层，炎黄的入口名、自动发现策略与发布合同留在 sais，作为工程层内容的薄适配

## Consumption

- **版本**：工作区在 `sayori-versions.json` 固定 sayori.dev 的 commit，与协作层一起升级，经 user 批准
- **取得**：派活时把工程入口的路径交给执行者，执行者自己读取。工程内容不复制进协作协议，也不写进角色说明
- **来源**：首批内容从 sais-workspace 抽出，每条写明 sais 中的出处，依据是 user 确认的归层表

[Repository](../index.md)
