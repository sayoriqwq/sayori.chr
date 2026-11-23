---
title: 单屏标签页布局偏差
description: 派活默认分屏破坏单屏单 agent 注意力边界的真实案例。核对标签页布局规则时读
assertion: 默认分屏把多个 agent 塞进同一视野会直接破坏 user 的单屏注意力边界，委派必须默认独占新标签页
validity: confirmed
---
# Single Screen Tab

## Expected

在同一 Herdr workspace 下委派新节点时，默认开启不抢焦点的新标签页，保持单屏仅有一个 agent 占据注意力

## Actual

Firstmate 沿用旧模板的同窗分屏默认规则，将新派出的 Mate 分屏到当前标签页下方，打断单屏视野，user 当场要求修正默认规则并迁移既有窗格

## Evidence

- 原始案例：建设区事件序号 16，标识 `agent-single-screen-tab-default`，记录于 2026-11-12
- user 原话明确要求单个屏幕只由一个 agent 占据注意力，后续将原窗格迁至独立标签页并保留原进程身份

## Inference

缺口属于容器布局默认规则违背 user 的单屏注意力偏好，需要在协作层布局规范中将单标签页单窗格确立为默认行为

[Cases](index.md)
