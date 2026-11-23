---
title: Git
description: 协作场景下 Git 的核心模型与边界：两类仓库的性质与安全口径、试错与交付的提交规约，以及工作树与分支的生命周期。建立仓库、整理提交、处理协作冲突或清退工作树时从这里进入
assertion: Git 在协作中承担产品演进与状态溯源两种独立职责。产品仓追求清晰语义化的变更历史，宿主仓作为轻量事件源记录状态变迁，提交既是阶段落盘的必要 Effect，也服从 user 的差异审阅窗口
validity: confirmed
---
# Git

## Premise

本领域出自[前提](../premise.md)中的三个事实：

- **agent 短暂**：过程记录、代码变更与工作上下文借助版本历史活过 Session，见 [Record](../primitive/record.md)
- **user 的注意力极其有限**：产品历史保持语义清晰可读，工作树保持干净，未提交差异保留给 user 审阅当前现场
- **现状只有环境自己知道**：Git 历史记录当时的版本状态，实际分支、工作树与运行环境以现场核对为准，见 [Validity 的 Source](../primitive/validity.md#source)

## Scope

本领域定义协作场景下 Git 的通用模型：按职责区分产品仓与宿主仓、按公开性区分安全边界、区分工作树试错与入仓交付、规范职责树上的提交归属与差异审阅窗口，以及按 [Task](../delivery/task.md) 性质管理工作树与分支的生命周期

本领域衔接 [Ownership](../primitive/ownership.md)、[Effect](../agency/effect.md) 与 [Closeout](../delivery/closeout.md)。具体载体形态、检查机制与工具装配归属下游实现

## Modules

| Module | Description |
| --- | --- |
| [Repository](repository.md) | 区分产品仓与宿主仓的职责、公开与私有宿主仓的安全口径、按职责划分跟踪边界以及轻量定位。决定哪些内容安全入库、制定忽略规则或评估仓库边界时读 |
| [Commit](commit.md) | 区分局部试错与正式入仓交付、规范产品仓语义化整理与宿主仓分权提交、保护并发改动并遵守差异审阅窗口。整理提交历史、提审 PR、协调工作区提交或收口落盘时读 |
| [Worktree](worktree.md) | 隔离开发的工作树登记、按 Task 生命周期分流的清退时机以及四步清退核查。新建工作树、合入后清理分支或核查执行残留时读 |

[Theory](../index.md)
