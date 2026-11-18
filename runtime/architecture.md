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
| Mate | 可以亲自执行并因此阻塞，可以派 Sailor。交回方式同 Sailor |
| Sailor | 交回时先写 Report 再声明结束，缺最新的 Report 时追问一次 |

- **身份**：启动参数固定 role、scope、workId 与上层 scope，一个 Session 对应一份工作。scope 写成 `task/<task>/<node>`，状态按它归到 Task。Firstmate 的持久绑定与运行实例按下方 Identity 核对
- **派活**：上层用 `sy delegate` 一次完成：写 Task 与负责人，在所属 Task 的 herdr 工作区新开不抢焦点的 tab 启动下层，记一条 Effect，派发后立即返回。派发成功只说明任务已送达，结果经 Report 与 Pending 回来
- **交替**：Session 正常结束或被替换时，从未写过 Report 的身份记一次缺报。硬杀不经过关闭钩子，不在保证范围内

## Identity

Firstmate 从当前已保存的 Session 显式登录，在工作区 Store 的 Effect 中绑定 scope、workId、harness 与准确 Session 引用，并记录当前进程和 Herdr terminal。一个工作区只绑定一个 Firstmate，不靠换 scope 绕过唯一性检查。登录不启动节点，也不授予权限

- **首次登记**：由 user 在当前 Firstmate 发起，核对真实 Session 与命名 terminal。保留可回查的启动配置，并区分原始参数和等价重建参数，不从历史命令猜模型或捕获整份含秘密的环境
- **后续启动**：注册后先核对同一 Session 与工作身份，再取得当前实例的占用。原实例仍在或观察 Unknown 时拒绝第二个实例，两个同时登记不能都成功
- **正常关闭**：先排空本实例工作，再释放实例占用，Session 绑定继续保留。旧实例不能释放新实例的占用
- **硬中断**：不把无 Report、旧 pane 消失或进程号过期当成完整恢复证明。确认原进程已消失，并排除同名其他 terminal 后才续上同一 Session，PID 被复用或观察失败时拒绝自动接续
- **换代**：换 Session 或工作身份必须显式协调，不在登录或恢复时隐式替换。第一步不提供强制抢占

未登记的旧 Firstmate 保持显式启动方式，不能声称已受身份机制保护。登记后，加载新适配的实例在启动和业务工具入场处核验占用。此机制约束受管入口，不是认证系统，也不能阻止绕过适配的旧进程或任意原始 Store 写入

## Recovery

恢复由 sy 独占，Herdr 只承载进程和恢复布局，不并行原生续会话。使用前确认目标 server 已加载 `resume_agents_on_restore = false`，磁盘配置已改不等于当前 server 已生效。未确认时先阻塞，不以短暂无进程当成关闭证明

恢复分两步：先使原 Session 可交互，再按最新 Report 与 Pending 接续工作。恢复成功不生成新的派活任务，也不意味着原工作继续执行或已完成

第一步由 user 重启后手动调用一次恢复入口，不增加 daemon。入口按职责树先恢复 Firstmate，再恢复未接收工作的 Mate，Sailor 只按明确选择恢复。已匹配的活实例不重复启动，未知身份、缺原会话或中断中的恢复步骤先对账，不盲重试

恢复复用进入节点的身份核验与续会话操作，但不批量执行进入动作。它不借用 user tab、不 move/zoom，外部动作前后记录同一资源的 checkpoint。缺少所属工作区或现场身份冲突时报告阻塞，不猜目的地

恢复后读取最新协作状态，由宿主回写本次恢复与当前 terminal 对应的就绪回执，再显示定位提示。无待办时保持空闲，有未解决的目标 Pending 才沿既有唤醒规则处理。旧适配没有就绪回执时保留进程并报告 Unknown，不为了补回执重启它

恢复职责统一交给 sy，不代表实现已覆盖全宿主。首批按树恢复仅覆盖已登记且参数完整的 Pi。Claude 保留已有记录下的精确进入与等待 Pending 降级路径，尚无等价批量就绪握手。未登记、旧适配、其他 harness 和参数缺失节点是明确的覆盖缺口，不回退到 Herdr 原生恢复，也不猜身份启动

开机自动触发、现有 server 重载或重启、真实验收资源另定范围，不由恢复职责的决定自动批准

## Control

user 的控制面就是在终端里和 Mate 或 Firstmate 对话，不另建图形界面：

- **确定性操作**：派活、回答 Pending、接收与退回都以 `sy` 命令提供，由 agent 调用，不需要额外的模型判断
- **定位**：user 回来时，Mate 按需生成一页现状报告，只讲现状。决定另起，按上下文分组
- **进入 Station**：user 可以直接进入任意 Station（Crew 的 Tree）。`sy enter` 把它的 pane 移到 user 面前铺满，退出时送回原处，进程不中断。已结束的 Station 在新 pane 里接回原 Session。查看与进出的入口见 [Station 的 View](station.md#view)
- **分出**：偏题由 user 用 `/branch` 分出新 Station，见 [Station 的 Branch](station.md#branch)
- **布局**：每个 Task 一个 herdr 工作区，Mate 在前，Sailor 在后，派出时不抢焦点

## Mechanism

按[派生的 Fidelity](../theory/evolution/derivation.md#fidelity)，必须在中断和疏忽下仍然成立的规则交给机制，其余写成内容：

| Form | Carries | Change |
| --- | --- | --- |
| 机制 | 记录的追加与校验、缺报检查、后台任务的登记与收回、唤醒、只读观察 | 改代码，跑完整门禁 |
| 内容 | 角色说明，派活、交回与收口的做法，Skill | 改文件，核对出处与链接 |

新增机制要有反复发生的 Case，证明内容约束不住，这与 [Skill 的成立条件](../theory/skill/identity.md#condition)是同一个标准。机制只守住它负责的那一点，判断仍由模型按内容作出

内容按运行时的读取顺序组织，每个文件写明出处，见[回路的 Provenance](loop.md#provenance)

[Runtime](index.md)
