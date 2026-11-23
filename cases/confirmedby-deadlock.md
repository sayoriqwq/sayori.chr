---
title: 确认方字段耦合死锁
description: 用自由文本确认方并耦合验收与退站导致委托永久死锁的真实案例。核对三事实分离与作用域身份规则时读
assertion: 将验收与退站耦合并以自由文本确认方做门禁会导致委托永久死锁，交回、验收与结束必须拆分为三个独立事实且以可信作用域定身份
validity: confirmed
---
# Confirmedby Deadlock

## Expected

已完成并经 user 验收的委托能够正常结束并安全退站，错误的验收记录允许追加新记录更正

## Actual

派活合同写明确认方为 Firstmate，而验收入口仅允许写入 user 依据，且同工作禁止二次验收。退站校验要求验收记录中的确认方字符串与合同严格一致，两条已验收委托因此永久死锁在活跃状态

## Evidence

- 原始案例：消费区事件序号 409，标识 `confirmedby-acceptance-deadlock`，记录于 2026-11-23
- 关联案例：建设区事件序号 1845，标识 `firstmate-confirmed-contract-deadlock`，记录于 2026-11-23

## Inference

旧协议同时叠加了三项脆弱假设：把自由文本参数当作身份凭据、把验收设为不可更正的一次性写入、把验收直接等同于退站门禁

[Cases](index.md)
