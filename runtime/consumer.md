---
title: 消费
description: 一个工作区怎样使用 sayori 的 runtime：工作区提供什么，版本怎样固定，工作区内容与 runtime 内容怎样分界。接入新工作区、升级版本，或拿不准一条规则该留在工作区时读
assertion: 工作区固定一个 runtime 版本，只提供本工作区的配置、知识与特有规则。协作协议由 runtime 提供，工作区只写自己的差异
validity: candidate
---
# Consumer

## Contract

工作区提供以下内容：

| Item | Place | Content |
| --- | --- | --- |
| 版本 | `.pi/settings.json` | 声明 sayori.run 的 Pi package，用 git tag 或 commit 固定。Pi 在 user 信任该项目后读取 |
| 配置 | `.sayori/` | 本工作区的约定，例如 Task 登记文件的位置、scope 命名、herdr session 名称 |
| 路由 | `AGENTS.md` | 本工作区的仓库、环境、知识入口与特有规则 |
| 特有 Skill | `.agents/skills/` | 只服务本工作区的 Skill，名称与 runtime 的 Skill 互不相同 |
| Task | 工作区自己的组织方式 | Task 的当前记录 |

Pi 从工作目录向上发现 `.agents/skills/`，同名 Skill 以先发现的为准。工作区原有的协作 Skill 在接入前移除，协作协议只保留 runtime 提供的一份

## Package

sayori.run 发布为一个 Pi package：

- **扩展**：Firstmate 扩展与角色扩展
- **Skill 与提示模板**：派发、回传、收口等协作做法，采用 Pi 支持的 Agent Skills 格式
- **版本说明**：每个版本写 CHANGELOG，条目引用对应的 Case。Pi 在包更新后的下次启动时显示

## Border

一条规则留在工作区还是进入 runtime，看另一个工作区是否原样需要它：

| Runtime | Workspace |
| --- | --- |
| Crew 的委派、回传、交接与收口 | 仓库、环境与产品知识 |
| Report、Pending 与 Effect 登记 | 外层 Git 的提交批次 |
| Case 的记录方式 | 发布、QA 与原档保管的安排 |
| 唤醒规则 | 只在本机或本环境成立的经验 |

> 例：sais-workspace 的"分层回传"经验讲回传该交给谁，进入 runtime。"Pi 网页抓取与 Clash fake-IP 冲突"只在那台机器的网络环境成立，留在工作区

[Runtime](index.md)
