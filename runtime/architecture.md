---
title: 形态
description: sayori 的协作层跑在什么上，Crew 怎样落成进程，各 harness 怎样适配，哪些规则做成机制。要改宿主、角色的启动与派活、接入新的 harness，或决定一条规则做成机制还是内容时读
assertion: 协作协议与 harness 无关，每个 harness 一份适配，钩子越少降级越多。容器是 herdr，每个节点一个独立进程。中断和疏忽下也必须成立的规则做成机制，其余写成带出处的内容，两者分开修改
validity: candidate
---
# Architecture

## Host

- **协议与 harness 无关**：Report、Pending、Effect、派活、交回与收口都经 `sy` 读写同一个 Store，任何能执行命令的 harness 都能参与。每个 harness 一份适配，适配只负责让协议进入这个 harness
- **容器**：herdr。每个节点占一个 pane，user 可以直接进入对话
- **常驻**：只有 herdr server 与 Firstmate 的进程，没有 daemon
- **工作区**：节点在工作区目录启动，工作区的 `AGENTS.md` 作为上下文载入，Store 写在该工作区的 `.sayori/`

## Adapters

适配按 harness 提供的钩子分级，钩子越少，靠机制保证的部分越少：

| Harness | Adapter | 由机制保证 | 降级 |
| --- | --- | --- | --- |
| Pi | 角色扩展 | 身份注入、缺报追问、停下追问、交回唤醒上层、Crew 面板 | 无 |
| Claude Code | hook 加 Skill | 身份注入、缺报追问、停下追问、交回唤醒上层 | 没有常驻面板，经 `sy status` 读状态 |
| Codex | 只有 Skill | 无 | 缺报与停下追问不由机制保证，靠 Skill 提醒。上层只能经 `sy wait` 等它交回 |

没有钩子的 harness 只能当执行者，不能当 Firstmate，因为 Firstmate 要能被交回叫醒

## Crew

[Crew](../theory/agency/crew.md) 的每个节点是一个进程，各占一个 herdr pane

| Rank | Mechanism |
| --- | --- |
| Firstmate | `bash` 超过 5 秒转入后台，结束时开回合送回结局。只做小而快的事，其余派活 |
| Mate | 可以亲自执行并因此阻塞，可以派 Worker。交回方式同 Worker |
| Worker | 交回时先写 Report 再声明结束，缺最新的 Report 时追问一次 |

- **身份**：启动参数固定 role、scope、workId 与上层 scope，一个 Session 对应一份工作。scope 写成 `task/<task>/<node>`，状态按它归到 Task
- **派活**：上层用 `sy delegate` 一次完成：写 Task 与负责人，在所属 Task 的 herdr 工作区新开不抢焦点的 tab 启动下层，记一条 Effect，派发后立即返回。派发成功只说明任务已送达，结果经 Report 与 Pending 回来
- **交替**：Session 正常结束或被替换时，从未写过 Report 的身份记一次缺报。硬杀不经过关闭钩子，不在保证范围内

## Control

user 的控制面就是在终端里和 Mate 或 Firstmate 对话，不另建图形界面：

- **确定性操作**：派活、回答 Pending、接收与退回都以 `sy` 命令提供，由 agent 调用，不需要额外的模型判断
- **定位**：user 回来时，Mate 按需生成一页现状报告，只讲现状。决定另起，按上下文分组
- **进入节点**：user 可以直接进入任意节点（Crew 的 Tree）。`sy enter` 把节点的 pane 移到 user 面前铺满，退出时送回原处，进程不中断。已结束的节点在新 pane 里接回原 Session
- **布局**：每个 Task 一个 herdr 工作区，Mate 在前，Worker 在后，派出时不抢焦点

## Mechanism

按[派生的 Fidelity](../theory/evolution/derivation.md#fidelity)，必须在中断和疏忽下仍然成立的规则交给机制，其余写成内容：

| Form | Carries | Change |
| --- | --- | --- |
| 机制 | 记录的追加与校验、缺报检查、后台任务的登记与收回、唤醒、只读观察 | 改代码，跑完整门禁 |
| 内容 | 角色说明，派活、交回与收口的做法，Skill | 改文件，核对出处与链接 |

新增机制要有反复发生的 Case，证明内容约束不住，这与 [Skill 的成立条件](../theory/skill/identity.md#condition)是同一个标准。机制只守住它负责的那一点，判断仍由模型按内容作出

内容按运行时的读取顺序组织，每个文件写明出处，见[回路的 Provenance](loop.md#provenance)

[Runtime](index.md)
