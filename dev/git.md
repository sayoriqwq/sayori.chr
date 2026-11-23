---
title: Git 规约
description: Git 理论在工作区基座中的三类载体落地映射、按职责分层的忽略基座以及提审与收口执行流。在工作区基座落实 Git 配置、检查机制或工程 Skill 时读
assertion: Git 理论在工作区基座中按决策性质分别落到静态基座配置、确定性检查机制与两类独立工程 Skill，使结构边界常驻生效、机械卫生自动守卫、语义整理与收口清退由模型精准执行
validity: confirmed
---
# Git

## Mapping

[Git 理论](../theory/git/index.md)在工作区基座中按[载体分流规则](index.md#realization)分别落实，使每条规范落在最恰当的执行层次：

| 理论依据 | 落实载体 | 在工作区基座中的具体形态 |
| --- | --- | --- |
| [仓库的 Kinds](../theory/git/repository.md#kinds)与 [Visibility](../theory/git/repository.md#visibility) | 静态基座配置 | 工作区薄入口扩展槽显式声明本宿主仓公开性与旗下各仓库性质 |
| [仓库的 Tracking](../theory/git/repository.md#tracking) | 静态基座配置 | 标准 `.gitignore` 按职责分层模板，内置运行态、凭据、大体积产物与嵌套独立仓边界 |
| [提交的 Review](../theory/git/commit.md#review) | 静态基座配置 | 工作区基座常驻声明差异审阅窗口纪律与收口必落盘约束 |
| [工作树的 Retirement](../theory/git/worktree.md#retirement) | 确定性检查机制 | 接入工作区环境端口的轻量巡检机制，识别已合入工作树、未忽略嵌套仓与超阈值大文件 |
| [提交的 Integration](../theory/git/commit.md#integration) | 独立工程 Skill | Git 提审整合 Skill，负责主干变基、将本地 Attempt 按文件级粗粒度重整为 Conventional Commits 语义提交与公开内容甄别 |
| [提交的 Ownership](../theory/git/commit.md#ownership)与[工作树的 Audit](../theory/git/worktree.md#audit) | 独立工程 Skill | Git 收口清退 Skill，负责区分一次性与常驻 Task、执行 Mate 分权提交或冲突升级 Firstmate、保护他人现场与四步清退核查 |

## Ignore

工作区基座提供的标准 `.gitignore` 严格按文件职责分层，使新增任务与目录自动落入正确跟踪范围：

- **持久工作记录**：任务合同、规格、票据、回执、索引与正式文档按职责纳入跟踪
- **运行态隔离**：协作运行数据目录与本地缓存归入忽略
- **凭据与本机私有**：密钥、令牌与本机专属配置实体归入忽略
- **嵌套仓与大体积产物**：工作区内嵌的独立产品仓与测试仓、截图录像与高体量原始日志归入忽略，版本库仅留轻量索引与摘要

> 例：未按职责分层而依赖手工白名单会导致交接文档无法入库且嵌套独立仓库持续污染状态，见[工作区工程卫生规则缺位](../cases/git-hygiene-gap.md)

## Lifecycle

涉及产品仓交付或宿主仓收口的工程动作，在工作区基座中遵循以下有序执行流：

1. 从工作区入口识别目标仓库属于产品仓、公开宿主仓还是私有宿主仓，确定对应甄别与提交口径
2. 核对当前工作树是否存在他人在途未提交改动，以及 user 是否已声明差异审阅窗口
3. 产品仓准备提审或合入主干前，启用 Git 提审整合 Skill 完成变基、文件级粗粒度语义整理、追加修复区分与安全内容甄别
4. 宿主仓阶段留档或任务收口时，在差异审阅窗口结束后启用 Git 收口清退 Skill，由所属 Mate 精确提交本 Task 记录，出现冲突时交由 Firstmate 统一整合，并按 Task 生命周期完成工作树四步清退核查

[Dev](index.md)
