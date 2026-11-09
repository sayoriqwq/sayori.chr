---
title: 唤醒
description: 一项变化怎样让该知道的一方取得：记录、提示与唤醒怎样分工，谁在什么条件下被叫醒。设计通知、新增唤醒来源，或协调回合过多时读
assertion: 所有变化都记录，只有需要对方判断或行动的变化才唤醒模型。轮询由代码做，每个唤醒来源都有停止条件
validity: candidate
---
# Wake

## Levels

[Crew 的 Notify](../theory/agency/crew.md#notify) 让受影响的一方取得变化。runtime 按代价分三级落实：

| Level | Effect | Cost |
| --- | --- | --- |
| 记录 | 追加进 Store，需要的一方读取时取得 | 几乎没有 |
| 提示 | 显示在对方的界面上，不开回合 | user 的一点注意力 |
| 唤醒 | 给对方的模型开一个回合 | 额度与上下文 |

变化默认只记录。提升为提示或唤醒的标准：对方现在不取得，就会对状态、责任、依赖或下一步作出错误判断

## Rules

| Source | Level | Condition |
| --- | --- | --- |
| target 为 user 的 Pending | 提示，显示在 Firstmate 的 pane | 每条事件在一个 Session 内提示一次 |
| target 为 firstmate 的 Pending | 唤醒 Firstmate | Firstmate 空闲时，一次观察最多开一个回合 |
| Firstmate 转入后台的任务结束 | 唤醒发起它的 Firstmate Session | 送回结局与输出尾部 |
| Mate 或 Worker 声明交回时缺最新的 Report | 唤醒该节点 | 只追问一次，仍缺就记缺报 |

Firstmate 的 Session 约每秒读一次 Store，读取由代码完成，模型只在上表的条件满足时被叫醒。等外部系统时，起一个阻塞到结果出现的命令，例如等 CI 结束的命令，结果作为后台任务的结局回来

## Limits

每个唤醒来源都有停止条件：

- **解不开的阻塞**：对方无法自主解决时，例如缺权限或缺 user 的判断，转成给 user 的 Pending，停止唤醒
- **重复唤醒**：同一来源需要多次唤醒时设次数上限，到达上限后报告一次

> 例：sais-workspace 记过一次。QA 定时任务每 5 分钟唤醒协调者，浏览器能力被禁用后，任务的停止条件仍只有交付或 user 停止。之后 3 小时它又唤醒 37 次，每次读一遍状态后空答，直到 user 要求关掉

## Gaps

现在覆盖不到的情形，出现 Case 再决定是否补机制：

- **Mate 与 Worker**：只由 user 或上层的 `herdr agent prompt` 唤醒
- **外部系统**：只能经某个节点主动起的命令进入，没有外部事件源
- **已退出的 Session**：无法唤醒
- **按时间提醒**：例如"明天提醒我"，暂不提供定时跟进

[Runtime](index.md)
