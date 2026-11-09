---
title: 形态
description: sayori 的 runtime 跑在什么上，Crew 怎样落成进程，哪些规则做成机制。要改宿主、角色的启动与委派，或决定一条规则做成机制还是内容时读
assertion: 宿主是 Pi，容器是 herdr，每个角色是一个独立的 Pi 进程。中断和疏忽下也必须成立的规则做成机制，其余写成带出处的内容，两者分开修改
validity: candidate
---
# Architecture

## Host

- **宿主**：Pi 是唯一的 first-class 宿主，herdr 是容器。模型订阅经 Pi 的 provider 接入
- **常驻**：只有 herdr server 与 Firstmate 的 Pi 进程，没有 daemon
- **工作区**：Pi 在工作区目录启动，工作区的 `AGENTS.md` 作为上下文载入，Store 写在该工作区的 `.sayori/`

## Crew

[Crew](../theory/agency/crew.md) 的每个节点是一个 Pi 进程，各占一个 herdr pane，user 直接进入 pane 对话

| Rank | Process | Mechanism |
| --- | --- | --- |
| Firstmate | Firstmate 扩展 | `bash` 超过 5 秒转入后台，结束时开回合送回结局。只做小而快的事，其余委派 |
| Mate | 角色扩展 | 可以亲自执行并因此阻塞，可以委派 Worker。交回方式同 Worker |
| Worker | 角色扩展 | 交回时先写 Report 再声明结束，缺最新的 Report 时追问一次 |

- **身份**：启动参数固定 role、scope 与 workId，一个 Session 对应一份工作。scope 写成 `task/<task>/<node>`，状态按它归到 Task
- **委派**：上层用 herdr 新开 pane 启动下层，派发后立即返回。结果经 Report 与 Pending 回来，派发成功只说明任务已送达
- **交替**：Session 正常结束或被替换时，从未写过 Report 的身份记一次缺报。硬杀不经过关闭钩子，不在保证范围内

## Mechanism

按[派生的 Fidelity](../theory/evolution/derivation.md#fidelity)，必须在中断和疏忽下仍然成立的规则交给机制，其余写成内容：

| Form | Carries | Change |
| --- | --- | --- |
| 机制 | 记录的追加与校验、缺报检查、后台任务的登记与收回、唤醒、只读观察 | 改代码，跑完整门禁 |
| 内容 | 角色说明，派发、回传与收口的做法，Skill | 改文件，核对出处与链接 |

新增机制要有反复发生的 Case，证明内容约束不住，这与 Skill 的成立条件是同一个标准。机制只守住它负责的那一点，判断仍由模型按内容作出

内容按运行时的读取顺序组织，每个文件写明出处，见[回路的 Provenance](loop.md#provenance)

[Runtime](index.md)
