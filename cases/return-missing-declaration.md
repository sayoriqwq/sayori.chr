---
title: 交回缺少子作用域声明
description: 派活与交回、验收前置声明不对称导致交回无法结算的真实案例。核对对称声明规则时读
assertion: 派活时在父子作用域原子建立一致的工作声明，才能保证交回与验收共享同一前置而不事后拒收
validity: confirmed
---
# Return Missing Declaration

## Expected

派活、交回与验收共用同一套工作声明前置，节点按规交回后上层可直接完成验收结算

## Actual

派活仅在父作用域写入工作声明，交回入口未校验子作用域声明，而验收与收口入口要求子作用域存在先于交回的工作声明。子节点完成后补写声明反而使早先交回失效，导致无法结算

## Evidence

- 原始案例：建设区事件序号 1897，标识 `return-without-task-declaration`，记录于 2026-11-23
- 关联案例：消费区事件序号 76，标识 `adoption-return-missing-child-task`，记录于 2026-11-17

## Inference

派活、交回与验收三个入口各自假定了不同的工作声明位置，协议前置缺乏统一对称约束

[Cases](index.md)
