---
title: 工程 Skill
description: 独立自包含工程 Skill 的打包契约、消费工作区薄适配覆写机制、已有真实案例支撑的 Skill 出处总表，以及退场纪律。设计工程 Skill、编写薄适配或追溯理论依据时读
assertion: 工作区基座交付的每份工程 Skill 都是具备独立身份与完全自包含的可分发包，消费工作区通过薄适配按名称组合并只收紧不放宽，仅登记已有真实案例支撑的治理型 Skill，理论出处统一维护于本页
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

严格依据 [Skill 的 Condition](../theory/skill/identity.md#condition)，本表当前仅登记已有真实[精选案例](../cases/index.md)支撑的可复发工程跑偏 Skill。其余工程流程待后续补充真实案例或扩展 Skill 分类理论后再按需登记，其余规则交由静态基座配置或确定性检查机制承载：

| Skill | 治理的可复发跑偏 | 启用方式 | 理论与案例出处 |
| --- | --- | --- | --- |
| Git 收口清退 | 漏提宿主仓记录、误夹他人改动、已合入工作树滞留或漏查范围外写入 | 开放 | [变更的 Review](../theory/delivery/change.md#review)、[收口](../theory/delivery/closeout.md)、[Git 规约](git.md)、[探针范围外写入](../cases/test-output-outside-task.md)、[保留误作处置](../cases/preservation-is-not-disposition.md) |
| Delivery 阶段汇报 | 把切片关闭当成目标完成、汇报流于内部术语或缺少可定位证据入口 | 显式 | [交付](../theory/delivery/index.md)、[工作范围](../theory/delivery/coverage.md)、[理解负担](../theory/communication/load.md)、[交付说明过于抽象](../cases/abstract-delivery.md) |
| 工程验证 | 用测试替身绿灯替代真实消费者验收、混淆三层完成度或把故障注入当自然复现 | 开放 | [验收](../theory/delivery/acceptance.md)、[Spec 的 Seams](../theory/delivery/spec.md#seams)、[测试替身掩盖存储契约](../cases/storage-contract-mismatch.md) |

## Retirement

按[维护的 Pruning](../theory/skill/maintenance.md#pruning)与[回路的 Revision](../runtime/loop.md#revision)，当工作区接入新版共享基座，或某类跑偏改由确定性检查机制守卫后，原有本地过渡 Skill 与重复规范在采用回执中逐项退场，确保消费区只保留唯一有效的能力入口

[Dev](index.md)
