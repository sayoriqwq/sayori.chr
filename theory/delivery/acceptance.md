---
title: 验收
description: 怎样知道工作真的做完了，而不是看起来做完了。准备说"做完了"、写测试或验证报告、汇报结果之前读
assertion: 做完了没有，只能由环境里的证据对照 Spec 来核对，没有 Spec 的工作对照 Task 的当前记录，不看 agent 的报告，也不看 Ticket 关了几个。接不接受成果，由 user 判断
validity: confirmed
---
# Acceptance

## Basis

对照的是 [Spec](spec.md) 的 Solution，经 user 同意的测试接缝观察，不是任务清单。没有 Spec 的工作，直接对照 [Task](task.md#information) 的当前记录

Ticket 全部关闭、命令执行成功、PR 已合并，都只是输入。agent 会出错，而且说得很有把握，见[前提](../premise.md)，它的报告同样只是输入，环境才是真源，见 [Validity 的 Source](../primitive/validity.md#source)。证据怎样算数，见 [Evidence](../primitive/validity.md#evidence)

- **软件功能**：核对最重要的完整使用路径
- **没有用户交互的工作**：调查是否回答了所需的问题，文档是否支持预期的判断

## Separate

找到原因、修复成立、整体能用、用户路径走得通，是四个推断。一个成立，不代表其他成立

> 例：测试通过，说明修复在测试条件下成立。user 打开页面时问题是否消失，要单独核对

## Result

agent 做核对，把结果交给 user，接不接受这份成果是 user 的[判断](../primitive/judgment.md)

无法复现或无法观察的部分，写明证据缺口。测试者报告观察与初步推断。放宽验收、接受限制、延期或取消，同样由 user 决定，按 [Decision](../communication/decision.md#record) 记录。结果进入 [Closeout](closeout.md) 的回执

[Delivery](index.md)
