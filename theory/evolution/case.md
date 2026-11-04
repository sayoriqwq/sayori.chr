---
title: 案例
description: 一次偏差怎样才算记下来了：要保留什么，观察与归因怎样分开。agent 做错了、被 user 纠正，或出现意外行为时读
assertion: 一次偏差的可检查记录，留下的是事实与证据，归因单独标明
validity: confirmed
---
# Case

## Purpose

Case 记录一次偏差，连接实际经历与后续修订。偏差可以是失败、user 的纠正，或未预期行为（包括意外产生的 [Effect](../agency/effect.md#kinds)）。它是 [Record](../primitive/record.md#kinds) 的 Log，产生时就写，只追加

## Content

一条 Case 能回答：期望什么，实际发生了什么，证据在哪里。缺项明确留空。记录要足够便宜，只记"agent 又忘了"又不足以支持修订

## Evidence

观察与原因假设分开写。直接记录是 Fact，agent 的总结与后续分析是 Inference，user 的转述按内容标明，见 [Validity 的 Evidence](../primitive/validity.md#evidence)

> 例：材料说"QA 没有读到已有决定"，这是调查线索。没有读取轨迹时，可能是没有读取、读取后误解、未接入有效上下文，或其他问题

[Evolution](index.md)
