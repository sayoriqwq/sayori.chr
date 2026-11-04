---
title: 记录
description: 什么要写到外面，写成流水还是当前状态。内容要活过当前 Session、写日志或状态，或拿不准该追加还是改写时读
assertion: 要活过行动者的内容，产生时就写到外面。流水只追加，当前状态从流水推出或单独维护
validity: confirmed
---
# Record

## Outside

行动者会离开，它记住的东西随之消失。要活过它的内容，产生时就写到外面，不等到结束再写。这样正常结束和中断走同一条路径，接手的一方从记录取得依据，不靠对方的记忆

每项内容有一个权威位置，其他地方指向它

## Kinds

| Kind | Content | Writing |
| --- | --- | --- |
| Log | 发生过的事，例如决定、登记、偏差 | 只追加，原条不改 |
| State | 现在的事实，例如进展、负责人、阻塞 | 持续改写，只保留当前版本 |

Log 里的修改另追加一条，旧条视为 `superseded`，见 [Validity](validity.md#stage)。State 能从 Log 推出时，以 Log 为准

## Action

记录一个行动时，先写意图，完成后补上结果。中断后，只有意图、没有结果的条目，对照环境核对实际发生了什么，记录写真实状态

## Use

[Session](../agency/session.md#outside) 用它说明什么要放到外面，[Effect](../agency/effect.md#register) 的登记、[Decision Log](../communication/decision.md#record) 与 [Case](../evolution/case.md) 是 Log，[Task](../delivery/task.md) 的当前记录是 State

[Primitive](index.md)
