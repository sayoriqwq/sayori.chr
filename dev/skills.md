---
title: 工程 Skill
description: 独立自包含工程 Skill 的打包契约、消费工作区薄适配覆写机制、标准 Skill 清单及其理论出处总表，以及退场纪律。设计工程 Skill、编写工作区薄适配或追溯 Skill 理论依据时读
assertion: 工作区基座交付的每份工程 Skill 都是具备独立身份与完全自包含的可分发包，消费工作区通过薄适配按名称组合并只收紧不放宽，全部 Skill 的理论出处统一登记在本页维护
validity: confirmed
---
# Skills

## Contract

依据 [Skill 的 Package](../theory/skill/identity.md#package)，工作区基座发布的每份工程 Skill 满足以下四项打包契约：

- **独立身份**：每份包围绕单一可复发跑偏建立，拥有清晰且全局唯一的命名空间标识
- **完全自包含**：正文指令、输出模板与分支参考全部位于自身包目录内，脱离外部仓库或跨目录路径仍可独立安装并完整生效
- **显式注入**：目标仓库路径、分支命名、业务标签、环境地址与提交权限由当前任务上下文和工作区入口显式提供
- **出处外置**：理论依据与上游映射集中在下方 [Registry](#registry) 维护，使 Skill 运行时产物保持纯粹自包含

## Adaptation

消费工作区按薄适配模式复用并定制共享工程 Skill：

- **命名隔离**：共享工程 Skill 采用统一命名空间以隔离全局第三方 Skill，消费区薄适配使用本领域前缀命名
- **组合覆写**：薄适配 Skill 按名称显式调用对应的共享工程 Skill，仅补充本区标签体系、分支前缀、平台脚本入口与额外核对项
- **边界单调**：遵循[组合的 Ownership](../theory/skill/composition.md#ownership)，薄适配可以收紧共享 Skill 的约束与核对门槛，原批准点与安全边界保持有效

## Registry

工作区基座的标准工程 Skill 及其上游理论出处统一登记如下。仅当对应工程过程存在可复发跑偏且须由模型作语义判断时设立 Skill，其余规则交由静态基座配置或确定性检查机制承载：

| Skill | 治理的可复发跑偏 | 启用方式 | 理论出处 |
| --- | --- | --- | --- |
| Git 提审整合 | 本地反复 Attempt 混入产品主干、入仓前漏变基或漏筛公开敏感信息 | 开放 | [提交的 Integration](../theory/git/commit.md#integration)、[仓库的 Visibility](../theory/git/repository.md#visibility) |
| Git 收口清退 | 漏提宿主仓记录、误夹他人改动、已合入工作树滞留或漏查范围外写入 | 开放 | [提交的 Ownership](../theory/git/commit.md#ownership)、[工作树的 Audit](../theory/git/worktree.md#audit)、[收口](../theory/delivery/closeout.md) |
| Issue 编写 | 混写原因推断与事实、漏写发生条件或把验证实现细节塞进问题单 | 显式 | [Issue](../theory/delivery/issue.md)、[Colleague](../theory/documentation/audience/human/colleague.md) |
| PR 准备与合入 | 漏核变更基线、描述流于内部术语、或合入后未回流有效修复 | 显式 | [提交](../theory/git/commit.md)、[理解负担](../theory/communication/load.md) |
| Stack PR 协调 | 依赖链基线漂移、级联变基错序或上游合入后下游未同步更新 | 显式 | [工作树](../theory/git/worktree.md)、[提交的 Integration](../theory/git/commit.md#integration) |
| Release 发布 | 混淆构建成功与部署生效、漏记一次性运维回执或部分失败后盲目重放 | 显式 | [验收的 Separate](../theory/delivery/acceptance.md#separate)、[Effect](../theory/agency/effect.md) |
| Delivery 阶段汇报 | 把切片关闭当成目标完成、汇报未区分工作范围或缺少可定位证据入口 | 显式 | [交付](../theory/delivery/index.md)、[工作范围](../theory/delivery/coverage.md)、[收口](../theory/delivery/closeout.md) |
| 工程验证 | 用测试替身绿灯替代真实消费者验收、混淆三层完成度或把故障注入当自然复现 | 开放 | [验收](../theory/delivery/acceptance.md)、[Spec 的 Seams](../theory/delivery/spec.md#seams) |

## Retirement

按[维护的 Pruning](../theory/skill/maintenance.md#pruning)与[回路的 Revision](../runtime/loop.md#revision)，当工作区接入新版共享基座，或某类跑偏改由确定性检查机制守卫后，原有本地过渡 Skill 与重复规范在采用回执中逐项退场，确保消费区只保留唯一有效的能力入口

[Dev](index.md)
