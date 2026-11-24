---
title: 断言总览
description: 全仓所有理论页、设计页、精选案例与收敛规则的核心断言总览，由脚本自动生成。进入本仓、跨领域召回或动笔前先读此页，再按需打开具体文件
assertion: 本页汇总全仓每篇受管文档的核心断言，支持低成本全局召回后再选择性深读完整正文，避免遗漏相邻领域的主张
validity: confirmed
---
# Assertions

本页由 `.ok/scripts/derive.mjs` 从各页 frontmatter 自动生成，切勿手工编辑

## Foundation

| 模块 | 阶段 | 断言 |
| --- | --- | --- |
| [词表](../GLOSSARY.md) | `confirmed` | 本页汇总 Sayori 理论全部已确认建模概念的紧凑定义与语言白名单，权威定义在各词链接的理论页，全仓与外层工作区统一以此为准 |
| [愿景](../VISION.md) | `confirmed` | Sayori 致力于让单个责任人以团队的杠杆率运作多 agent 协作，在安心移开注意力的同时保持完全掌控。程序守卫硬边界机制，agent 处理软语义扩展，理论与设计以本体正交与公理纯度为最高准绳 |

## Theory

| 模块 | 阶段 | 断言 |
| --- | --- | --- |
| [批准](../theory/agency/approval.md) | `confirmed` | 动作在批准范围内就直接执行，不在范围内就停在草稿，只把缺少的判断交给 user |
| [职责树](../theory/agency/crew.md) | `confirmed` | user 是 Captain，对全部结果负责。每个 Workspace 独立承载一棵职责树，agent 负责组织与执行，user 只做判断，可以放心离开，回来时能可靠地接上 |
| [Effect](../theory/agency/effect.md) | `confirmed` | agent 短暂，Effect 持久，user 负责却不在场。所以不留下没人知道、没人管的东西：每个 Effect 始终有负责人、有结局，user 对外部状态的认识与实际一致 |
| [交接](../theory/agency/handoff.md) | `confirmed` | 任何时刻，一份职责恰好有一个负责人。交接以接收为准，区分语义确认接收与机制确定性接收两种等价方式，接收者从外部记录取得依据 |
| [Agency](../theory/agency/index.md) | `confirmed` | agent 短暂，user 负责却不一定在场。本领域让职责、变化与判断都不因此丢失：职责始终有人负责，变化始终有结局，user 的判断不由 agent 代替 |
| [协作模式](../theory/agency/mode.md) | `confirmed` | user 的判断不由 agent 代替。Mode 只决定判断什么时候取得：HITL 当场问，AFK 离场前问好，问不到的停下记入 Pending，AFK 期间只有 Implied 的工作内容由 Mate 选择 |
| [Session](../theory/agency/session.md) | `confirmed` | 职责持久，Session 短暂。凡是要活过 Session 的都放在 Session 之外，丢掉任何一个 Session 都不丢重要的东西 |
| [对抗式讨论](../theory/communication/argue.md) | `confirmed` | user 不确定自己的主张是否代表真实诉求时，agent 作为可信反方参与，经交锋辨清主张、优先级与真实诉求 |
| [决定](../theory/communication/decision.md) | `confirmed` | 有理由地选定一个去向：选了什么、为了什么、接受了什么代价。决定一形成就记下，之后能回到当时的取舍重新审视 |
| [沟通](../theory/communication/index.md) | `confirmed` | user 只能尽量表意，双方经对齐使理解一致。agent 交给 user 的，是帮助 user 自己作判断的内容，会影响判断或行动的理解差异在判断之前让 user 看到 |
| [意图](../theory/communication/intent.md) | `confirmed` | agent 辨认一句表达期待的回应，并按它回应 |
| [引领](../theory/communication/leadership.md) | `confirmed` | 判断归 user，判断的准备归 agent。每一点上 user 先判断，agent 再回应：只问当前焦点核心的未知，选项打散排位且只附理由与冲突指标，不附推荐 |
| [理解负担](../theory/communication/load.md) | `confirmed` | 理解负担主要由 agent 承担，user 的注意力留给判断。向上建构理论时由特例提炼本体抽象，向下说明结果时由抽象落回具体变化 |
| [实证探索](../theory/communication/probe.md) | `confirmed` | 语言和现有材料不足以支持判断时，agent 在关键维度上构建足够真实的最简实践，取得依据 |
| [验收](../theory/delivery/acceptance.md) | `confirmed` | 完成与否只能由环境证据对照 Spec 或 Task 当前记录核对，内容完成、接入完成与使用验证各自独立成立。接不接受成果由 user 判断 |
| [变更](../theory/delivery/change.md) | `confirmed` | 正式交付载体与过程记录载体各司其职，安全入库边界由公开性决定。探索期的局部试错与进入主干的正式交付分属两个阶段，并发工作在隔离副本推进并保护他人现场，持久化提交服从 user 的差异审阅窗口并在收口时落实 |
| [收口](../theory/delivery/closeout.md) | `confirmed` | 收口解耦为工作收口与 Task 撤除两层。收口分别核对经验复盘、记录持久化、Effect 结局与职责转交，保留价值、正式归属与最终处置独立判断，版本提交在差异审阅窗口后完成落盘 |
| [工作范围](../theory/delivery/coverage.md) | `confirmed` | 范围以 user 对这次结果的预期为准，它约束 agent 做到哪里，也决定向 user 汇报什么。Agreed 照做，Implied 定下来并说明，Outside 按错误或缺陷处置并汇报 |
| [交付](../theory/delivery/index.md) | `confirmed` | user 无法把预期完整表达出来，注意力又极其有限。本领域让交付与预期之间的差异始终可见，结束的工作退出注意力 |
| [Issue](../theory/delivery/issue.md) | `confirmed` | Issue 记录现状与 user 预期之间的差距，写给 user 与同事看，对技术人员可读 |
| [Spec](../theory/delivery/spec.md) | `confirmed` | Spec 是交给 agent 执行的说明，把已经定下的决定整理成一份能活过 Session 的文件。只综合，不重开，不编造 |
| [Task](../theory/delivery/task.md) | `confirmed` | Task 是 user 注意力的一个域，按生命周期分为一次性与常驻两类，由唯一 Mate 负责。它的当前记录让任何负责人都能可靠接续 |
| [Ticket](../theory/delivery/ticket.md) | `confirmed` | Ticket 是从 Spec 切下的一条垂直切片，贯穿每一层、可以单独验证，恰好交给一个 Sailor。Ticket 全部关闭，不等于 Spec 已经满足 |
| [Agent](../theory/documentation/audience/agent.md) | `confirmed` | 面向 agent 的文档借助模型已有的语义能力，以清楚的范围、动作与完成标准指导执行，通过指针按需取得依据 |
| [Colleague](../theory/documentation/audience/human/colleague.md) | `confirmed` | 给技术同事读的文档，在共同的基础认知之上，把定义讲清楚：问题是什么，文档承担验证时还有怎样验证它 |
| [Human](../theory/documentation/audience/human/index.md) | `confirmed` | 给人读的文档帮助读者理解与判断：上层就能把握局面，需要时再深入 |
| [User](../theory/documentation/audience/human/user.md) | `confirmed` | 给 user 读的文档让 user 的注意力只花在判断上 |
| [读者](../theory/documentation/audience/index.md) | `confirmed` | 按文档用途确定它给谁读，并遵循该读者的要求 |
| [Description](../theory/documentation/description.md) | `confirmed` | description 是指向一份内容的上下文指针，读者在打开之前只看得到它。它只回答一件事：当前问题该不该来这里 |
| [文档](../theory/documentation/index.md) | `confirmed` | user 的注意力与 agent 的上下文都有限。读者只占用必要的部分，就取得当前需要的内容：打开之前能看出该不该读，打开之后先看到主张 |
| [组织](../theory/documentation/organization.md) | `confirmed` | 一个文件承担一个职责，目录用位置表达归属，文档入口让读者打开之前能挑选、打开之后先看到主张 |
| [特殊文件名](../theory/documentation/special-filenames.md) | `confirmed` | 一些文件名带有约定：看到名字，就知道它承担什么、谁可以写 |
| [书写](../theory/documentation/writing.md) | `confirmed` | 每个模块正面陈述自己的内容，按 user 的重点组织，读起来美观、有层次，一眼看到重点 |
| [案例](../theory/evolution/case.md) | `confirmed` | 一次偏差的可检查记录，留下的是事实与证据，归因单独标明 |
| [派生](../theory/evolution/derivation.md) | `confirmed` | 按实际运行需要重组理论，派生说明能独立支持正确行动，关键含义不丢，来源由设计层或维护元数据可追溯 |
| [检验](../theory/evolution/evaluation.md) | `confirmed` | 在原定目标与边界不变的前提下，用证据看一项修改是否带来足够可信、值得保留的改善 |
| [进化](../theory/evolution/index.md) | `confirmed` | agent 不会从经验中学习。user 的纠正都要落到 agent 下次得到的东西上，留下的每一条都要值得它占的位置 |
| [理论](../theory/index.md) | `confirmed` | 组织 Sayori 关于"我和 agent 如何协作"的全部核心理论，作为理解的依据与派生各类运行实现的真源 |
| [用词](../theory/language.md) | `confirmed` | 以共同含义理解作者的表达，作者可以自由措辞 |
| [前提](../theory/premise.md) | `confirmed` | 理论出自少数几个关于世界的客观事实。各领域由事实、原语与 user 的偏好、决定推出，推不出来的内容没有根据 |
| [对齐](../theory/primitive/alignment.md) | `confirmed` | 通过交互校准对当前内容的理解，直到足以支持判断 |
| [断言](../theory/primitive/assertion.md) | `confirmed` | 简明表达关键主张，读者能一眼辨认当前要点 |
| [上下文指针](../theory/primitive/context-pointer.md) | `confirmed` | 从当前内容指向所需材料，读取用途或条件可辨 |
| [上下文](../theory/primitive/context.md) | `confirmed` | 上下文是一方此刻实际取得的内容。结论与行动只能依据它，没取得的等于不存在 |
| [焦点](../theory/primitive/focus.md) | `confirmed` | 焦点是当前对话载体围绕的核心主题锚点，跨会话延续，用来保持讨论方向并辨认哪些展开仍在回应同一个问题 |
| [原语](../theory/primitive/index.md) | `confirmed` | 原语是上层理论的意思，领域的规则靠它们说清。每个原语只在这里定义一次，不依赖上层，也不依赖载体 |
| [判断](../theory/primitive/judgment.md) | `confirmed` | 判断是对结果负责的人对可行去向作取舍，在本理论里默认是 user。agent 做的是核对、推断与授权内的选择，它们是判断的准备或执行 |
| [负责](../theory/primitive/ownership.md) | `confirmed` | 任何时刻，一件事恰好有一个负责人。转交以接收为准，负责持续到这件事有结局 |
| [记录](../theory/primitive/record.md) | `confirmed` | 要活过行动者的内容，产生时就写到外面。流水只追加，当前状态从流水推出或单独维护 |
| [作用域](../theory/primitive/scope.md) | `confirmed` | 说明一个对象在指定维度上覆盖什么、到哪里为止，每种范围只为自己的维度下结论 |
| [效力](../theory/primitive/validity.md) | `confirmed` | 环境是现状的唯一真源，记录、记忆与总结都是它的缓存。每条信息的约束力清楚可辨：它是什么形态，走到哪个阶段，凭什么证据成立 |
| [启用](../theory/skill/activation.md) | `confirmed` | Skill 有显式调用与开放给模型两种方式，本质是分层：内部与独立流程的 Skill 不在日常工作中触发，所以多数默认显式。稳定流程，或本来就期望模型遵循的行为，才开放，并要设计好 description |
| [组合](../theory/skill/composition.md) | `confirmed` | 调用其他 Skill 的才是 Workflow，步骤多少不算。Workflow 负责整体结局，它可以收紧被调用的 Skill，不能放宽 |
| [身份](../theory/skill/identity.md) | `confirmed` | Skill 的成立条件是一种可复发的跑偏，它以独立身份和完全自包含的可分发包约束做事过程，理论出处统一在所属设计层维护 |
| [Skill](../theory/skill/index.md) | `confirmed` | agent 不会从经验中学习，同样的跑偏下次照样发生。Skill 是行为治理单元：在可识别的情境中约束 agent 的做事过程，不再靠 user 当场纠正 |
| [维护](../theory/skill/maintenance.md) | `confirmed` | 修改从真实偏差出发：责任不变就局部修补，责任变了就拆分。删掉后行为不变的内容就该删 |

## Runtime

| 模块 | 阶段 | 断言 |
| --- | --- | --- |
| [形态](../runtime/architecture.md) | `confirmed` | 协作协议独立于具体宿主运行，按宿主扩展能力在原生扩展与输出退化之间择优实现。系统沿八个抽象端口隔离核心协议与外部实现，必须稳定成立的规则交由机制守卫，其余外部化为带出处的内容，验证守卫扩展点与协议不变量 |
| [消费](../runtime/consumer.md) | `confirmed` | 协作层与工作区基座采用正式化的单一共享分发，消费工作区仅保留薄适配与自身业务。每个工作区是独立的职责领域，规则按作用域从广到窄依次匹配归层，协作协议与工作区基座全机各仅一份 |
| [委托](../runtime/delegation.md) | `confirmed` | 派活遵循先启就绪后落盘的后置提交点以实现机制确定性接收，交回、验收与结束分属三个独立事实，收口解耦为阶段收口与任务撤除两层，委托结束事件是退站的唯一门禁 |
| [Runtime](../runtime/index.md) | `confirmed` | 理论定义跨 runtime 恒成立的概念与主张，本目录定义 sayori 协作层的上游设计规范，sayori.run 严格按此落实。设计由 agent 提出候选，经 user 确认成为实现真源 |
| [回路](../runtime/loop.md) | `confirmed` | 运行期 Case 记在使用处工作区的事件存储，经理论或设计正式吸收的典范 Case 脱敏沉淀进精选案例库供规则回溯。共享底座在独立分支验证并经 user 批准后统一切换，旧义务随新机制逐项退场 |
| [消息](../runtime/message.md) | `confirmed` | 跨通道输入统一附带结构化来源信封以保真出处，出处标记与批准核对各自按边界独立成立。行级意图标注让原话与意图对人和模型同等可见，向 user 提问并列决策点、选项与代价，默认保持中性 |
| [记录](../runtime/records.md) | `confirmed` | 持久事件日志保存可追溯的协作事实，易失运行态独立存于本地状态，文档承载合同与依据，环境作为现状唯一真源。读写共享单一强类型契约，记录、核对与批准各自沿边界独立成立 |
| [Station](../runtime/station.md) | `confirmed` | 每个 Station 拥有固定作用域、单一承载会话与一行常驻焦点。Firstmate 经单一前台入口恢复或新建，重启恢复由协作层独占，/branch 专责选定讨论主题并与实施批准边界分离 |
| [视图](../runtime/view.md) | `confirmed` | 职责树视图是唯一的零模型只读浮层，按原诉求分四类视角呈现，首层足以支撑当前判断，原据按需展开。视图专注只读观察与快速定位，判断与批准留在真实对话上下文中作出 |
| [唤醒](../runtime/wake.md) | `confirmed` | 所有变化默认落在可查一级，按注意力与额度代价分为可查、常驻与唤醒三级。观测由增量游标与变更流驱动，业务状态、通知送达与原动作结果三者严格分离，每个唤醒来源都有明确停止条件 |

## Dev

| 模块 | 阶段 | 断言 |
| --- | --- | --- |
| [Git 规约](../dev/git.md) | `confirmed` | Git 规约将变更与收口理论落地为静态基座配置、确定性巡检与工程 Skill，严格区分版本化记录提交与外部 Effect，明确产品仓变基语义整理、两类工作树清退时机与四步现场核查 |
| [工作区基座](../dev/index.md) | `confirmed` | 工作区基座是成品的工作区基础装配方案，向上落实理论，向内接入协作层基础实现，并按决策性质将工程规约落实为静态基座配置、确定性检查机制与独立工程 Skill，全部理论真源与出处说明留在本仓 |
| [工程 Skill](../dev/skills.md) | `confirmed` | 工作区基座交付的每份工程 Skill 都是具备独立身份与完全自包含的可分发包，消费工作区通过薄适配按名称组合并只收紧不放宽，仅登记已有真实案例支撑的治理型 Skill，理论出处统一维护于本页 |
| [校验基建](../dev/verification.md) | `confirmed` | 工作区校验基建严格分离内容完成、接入完成与使用验证，测试优先守卫架构扩展点、端口契约与协议不变量，并以轻量确定性检查机制承担机械可判定的结构与卫生自检 |
| [工作区](../dev/workspace.md) | `confirmed` | 成品工作区基座落实 Workspace 的独立逻辑边界，根部特殊文件直接遵循特殊文件名理论，基座补充单层平铺任务区、协作数据目录与忽略基座，具体工作区仅填入四个扩展槽即可运行 |

## Cases

| 模块 | 阶段 | 断言 |
| --- | --- | --- |
| [交付说明过于抽象](../cases/abstract-delivery.md) | `confirmed` | 面向 user 的交付与汇报首层必须用日常语言说明具体前后变化与实际影响，而非罗列内部结构术语与提交编号 |
| [写入夹带容器布局超时](../cases/attention-layout-timeout.md) | `confirmed` | 在持久事件写入路径中隐式触发终端布局调整会把容器超时污染成业务派发故障，存储与容器必须沿端口彻底隔离 |
| [分叉讨论目标误作实施批准](../cases/branch-goal-approval.md) | `confirmed` | 分叉命令附带自然语言目标只表达讨论方向，与实施及资源批准分属不同边界，不应要求额外审批才能开启讨论 |
| [确认方字段耦合死锁](../cases/confirmedby-deadlock.md) | `confirmed` | 将验收与退站耦合并以自由文本确认方做门禁会导致委托永久死锁，交回、验收与结束必须拆分为三个独立事实且以可信作用域定身份 |
| [跨会话原批准被重复请示](../cases/cross-session-approval.md) | `confirmed` | 跨会话消息的发送渠道与原批准是否有效分属两个维度，接手节点应先回查原轮批准依据与范围，而非仅因消息经转达就要求重复批准 |
| [隔离工作区误作单一职责树](../cases/domains-as-one-tree.md) | `confirmed` | 不同业务领域的工作区各自拥有独立职责树与 Firstmate，彼此只共享协作层与工程层底座，不构成跨区上下级管理关系 |
| [直接进入节点的汇报口径偏差](../cases/entered-node-voice.md) | `confirmed` | user 直接进入任意 Station 时即为直接决定者，节点应直接依据 user 表达推进，而非沿向上层汇报的防御口径索要额外证明 |
| [焦点滞留与重载重复唤醒](../cases/focus-drift-reload-replay.md) | `confirmed` | 前台放下旧题须允许清空焦点且不受后台回执改写，已送达待决项须持久记录送达状态以免会话重载时重复唤醒模型 |
| [聚焦独占空标签页滞留](../cases/focused-retired-tab.md) | `confirmed` | 已收口的受管独占空标签页即使当前持有焦点也应关闭并将焦点切回 Firstmate，以消除已收口窗口滞留 |
| [跨区工作树扫描淹没本区发现](../cases/foreign-worktrees-noise.md) | `confirmed` | 工作区环境观察必须严格限定在本工作区作用域之内，避免跨区枚举共享仓库状态淹没本区真正需要判断的发现 |
| [工作区工程卫生规则缺位](../cases/git-hygiene-gap.md) | `confirmed` | 已合入工作树清退、草稿分支识别与忽略文件纪律属于跨工作区通用的工程层规范，缺位会在各消费区反复造成仓库卫生残留 |
| [精选案例](../cases/index.md) | `confirmed` | 这里保存已被理论或设计正式吸收的脱敏经典 Case，按预期、实际、证据与归因组织，使每条规则的反例都可回溯到真实经历 |
| [保留材料误作完成处置](../cases/preservation-is-not-disposition.md) | `confirmed` | 保留价值、正式归属与最终处置是三个独立判断，记录保管人或搬移位置不能替代按目录职责完成归位与清退 |
| [离开回归后的信息过载](../cases/reentry-overload.md) | `confirmed` | 状态视图必须按原诉求持久呈现未结事项与待决项，避免按短时间窗口截断或迫使 user 从长文与决策清单里自行拼接全貌 |
| [交回缺少子作用域声明](../cases/return-missing-declaration.md) | `confirmed` | 派活时在父子作用域原子建立一致的工作声明，才能保证交回与验收共享同一前置而不事后拒收 |
| [结构失配掩盖身份报错](../cases/schema-error-masked-identity.md) | `confirmed` | 读写共享同一强类型契约且直接暴露底层失败原因，才能避免单条新字段事件毒害整条读链并误报身份故障 |
| [汇报失败后沉默交回](../cases/silent-report-failure.md) | `confirmed` | 汇报写入失败必须显式阻断交回并沿阻塞通道唤醒上层，避免节点声明完成后整条交回静默丢失 |
| [单屏标签页布局偏差](../cases/single-screen-tab.md) | `confirmed` | 默认分屏把多个 agent 塞进同一视野会直接破坏 user 的单屏注意力边界，委派必须默认独占新标签页 |
| [测试替身掩盖真实存储契约](../cases/storage-contract-mismatch.md) | `confirmed` | 两个测试替身各自通过只证明替身条件下的逻辑成立，必须沿真实消费者与真实接口契约取得使用验证证据 |
| [探针在工作目录留范围外写入](../cases/test-output-outside-task.md) | `confirmed` | 探针与测试脚本可能通过真实写盘路径在工作目录留下范围外产物，清退核查须覆盖实际执行目录与写入出口，而非仅查已登记工作树 |

## OpenKnowledge

| 模块 | 阶段 | 断言 |
| --- | --- | --- |
| [Convergence](convergence.md) | `confirmed` | AGENTS.md 写规则，脚本做核对，两者只让本仓内容收敛。它们不是进化里的 Runtime，本仓不转反馈回路 |
| [Frontmatter](frontmatter.md) | `confirmed` | 文档入口的四项落在 frontmatter 的四个字段。路由与目录说明从字段生成，不手写。confirmed 只征求一次 |
| [OpenKnowledge](index.md) | `confirmed` | 这里是本仓用 OpenKnowledge 的收敛规则。它不属于理论，也不是进化里的 Runtime，理论不依赖它 |
| [Lint](lint.md) | `confirmed` | 确定性硬边界脚本守卫零语义歧义的依赖图与标点红线，定期软语义巡检从愿景、本体论与第一性原理审视并列命名、抽象泄漏、中间态混入与跨领域碰撞，两层按用途分界守住理论扩张 |

[OpenKnowledge](index.md)
