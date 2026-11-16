---
title: 消费
description: 一个工作区怎样使用 sayori 的协作层与工程层：工作区提供什么，版本怎样固定，一条规则该放协作层、工程层还是工作区。接入新工作区、升级版本，或拿不准一条规则放哪里时读
assertion: 工作区固定协作层与工程层的版本，只提供本工作区的配置、知识与特有规则。一条规则依次问四个问题决定放哪层，协作协议与工程做法各只有一份
validity: candidate
---
# Consumer

## Contract

工作区提供以下内容：

| Item | Place | Content |
| --- | --- | --- |
| 版本 | `sayori-versions.json` | 固定 sayori.run 与 sayori.dev 的 commit，`sy check` 报告与实际 checkout 的差异。升级经 user 批准 |
| 登记 | `sayori-workspaces.json` | Firstmate 管理的工作区与各自的写权限，只放在 Firstmate 所在的工作区 |
| 配置 | `.sayori/` | Store 与本工作区的 Session 目录 |
| 路由 | `AGENTS.md` | 本工作区的仓库、环境、知识入口与特有规则 |
| 特有 Skill | `.agents/skills/` | 只服务本工作区的 Skill，名称与协作层、工程层的 Skill 互不相同 |
| Task | 工作区自己的组织方式 | Task 的当前记录与 worktree 登记 |

工作区原有的协作 Skill 在接入前移除，协作协议只保留协作层提供的一份。接入前先核对同名 Skill 与部署副本，未验证不卸旧入口

## Package

协作层与工程层各自按版本提供：

- **协作层（sayori.run）**：`sy` CLI、各 harness 的适配（Pi 扩展、Claude Code hook 与 Skill、Codex Skill）、派活、交回与收口的做法
- **工程层（sayori.dev）**：通用工程规范与工程 Skill，派活时以工程入口的路径交给执行者，不复制进协作协议
- **版本说明**：每个版本写说明，条目引用对应的 Case

## Border

一条规则放哪层，依次问四个问题，第一个回答"是"的就是它的层：

1. 换一种 runtime 还成立吗？成立就进理论
2. 只关于 agent 之间怎样协作吗？是就进协作层
3. 换一个工作区还原样成立的工程做法吗？是就进工程层
4. 都不是，就留在工作区

第一问判断的是原则或主张。具体的工程做法即使换 runtime 也成立，仍归第三问，免得工程层被理论吞掉

| Collaboration | Engineering | Workspace |
| --- | --- | --- |
| Crew 的派活、交回、交接与收口 | Git 提交与分支、worktree 的开与清退 | 仓库、环境与产品知识 |
| Report、Pending 与 Effect 登记 | Issue、PR 与 Release 的通用写法 | 本仓的标签、分支拓扑与发布脚本 |
| Case 的记录方式 | 验证与证据的通用方法 | 外层 Git 的提交批次 |
| 唤醒规则 | 通用工程 Skill | 只在本机或本环境成立的经验 |

> 例：sais-workspace 的"分层回传"讲回传该交给谁，进协作层。"审阅明确文件、核对暂存再提交"换哪个仓库都成立，进工程层。"Pi 网页抓取与 Clash fake-IP 冲突"只在那台机器的网络环境成立，留在工作区

sais 规则的逐条归属见 `~/workspace/task/now/layer-split/classification.md`，user 2026-11-16 确认

[Runtime](index.md)
