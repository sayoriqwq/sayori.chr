---
title: 聚焦独占空标签页滞留
description: 退站时独占空标签页因持有焦点而被跳过清理的真实案例。核对退站释放规则时读
assertion: 已收口的受管独占空标签页即使当前持有焦点也应关闭并将焦点切回 Firstmate，以消除已收口窗口滞留
validity: confirmed
---
# Focused Retired Tab

## Expected

受管节点完成退站后，其独占的空标签页随之关闭并释放，不再留在工作区视野中

## Actual

节点完成受管退出并退回空闲终端，因该独占标签页恰好处于聚焦状态，清理流程中止且未安排后续跟进，同时提前回报清理项为零，导致已收口窗口长期滞留

## Evidence

- 原始案例：建设区事件序号 1531，标识 `retired-mate-focused-shell-cleanup-stalled`，记录于 2026-11-20
- 后续待该标签页失焦后再次执行关闭才彻底清除残留

## Inference

退站释放对聚焦状态采用了直接放弃策略，缺少关闭已收口独占标签页并回焦 Firstmate 的确定性收尾步骤

[Cases](index.md)
