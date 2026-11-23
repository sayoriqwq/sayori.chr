---
title: 验收
description: 怎样知道工作真的做完了：对照依据、内容接入与使用三层完成度分离、真实消费者验证以及结果判定。准备宣告完成、组织验证或汇报成果前读
assertion: 完成与否只能由环境证据对照 Spec 或 Task 当前记录核对，内容完成、接入完成与使用验证各自独立成立。接不接受成果由 user 判断
validity: confirmed
---
# Acceptance

## Basis

对照的是 [Spec](spec.md) 的 Solution，经 user 同意的测试接缝观察，不是任务清单。没有 Spec 的工作，直接对照 [Task](task.md#information) 的当前记录

Ticket 全部关闭、命令执行成功、PR 已合并，都只是输入。agent 会出错，而且说得很有把握，见[前提](../premise.md)，它的报告同样只是输入，环境才是真源，见 [Validity 的 Source](../primitive/validity.md#source)。证据怎样算数，见 [Evidence](../primitive/validity.md#evidence)

- **软件功能**：核对最重要的完整使用路径
- **没有用户交互的工作**：调查是否回答了所需的问题，文档是否支持预期的判断

## Separate

改进与交付按生效深度分为三个独立层次，每层各自凭对应证据成立：

| 层次 | 证明什么 |
| --- | --- |
| 内容完成 | 代码、规则、文档或 Skill 正文已按批准内容修改到位 |
| 接入完成 | 运行入口、装载路径、路由与部署已指向新版并能被执行环境实际取得 |
| 使用验证 | 在真实使用路径与真实消费者环境下观察到预期行为 |

找到原因、修复成立、整体能用与用户路径走得通同样是四个独立推断。测试替身与人工故障注入只证明设定条件下的局部反应，真实消费者路径须单独取得证据。核对成果由独立于实施方的一方承担，见 [Crew 的 Ranks](../agency/crew.md#ranks)

> 例：两个单元测试替身全部绿灯，进入真实环境后真实对象存储客户端因仅支持无参读取而失败，人工故障注入亦与真实并发表现分歧，见[测试替身掩盖真实存储契约](../../cases/storage-contract-mismatch.md)

## Result

agent 做核对，把结果交给 user，接不接受这份成果是 user 的[判断](../primitive/judgment.md)

无法复现或无法观察的部分，写明证据缺口。测试者报告观察与初步推断。放宽验收、接受限制、延期或取消，同样由 user 决定，按 [Decision](../communication/decision.md#record) 记录。结果进入 [Closeout](closeout.md) 的回执

[Delivery](index.md)
