---
title: 记录
description: 持久日志、本地易失状态、Task 文档与环境四类存储位置的职责划分，事件种类与理论出处对照，以及核心记录的上游契约。新增事件、划分存储边界或核对记录契约时读
assertion: 持久事件日志保存可追溯的协作事实，易失运行态独立存于本地状态，文档承载合同与依据，环境作为现状唯一真源。读写共享单一强类型契约，记录、核对与批准各自沿边界独立成立
validity: confirmed
---
# Records

## Places

按[记录](../theory/primitive/record.md)与[效力的 Source](../theory/primitive/validity.md#source)，协作运行期涉及四类事实，按生命周期与真源属性物理分置：

| 位置 | 性质 | 承载内容 |
| --- | --- | --- |
| 事件存储 | 只追加日志 | 协作业务事件。写入前经单一结构契约校验，底层守卫只追加不可变属性 |
| 本地状态 | 易失运行态 | 随本机与进程变化的运行坐标，包含宿主会话绑定、进程号、容器坐标、Station 焦点、视图游标与布局偏好，按需覆写 |
| Task 记录 | 当前状态 | 权威文档承载合同、Spec、设计依据、证据与交付回执。动态进度、责任、待决与结果由事件存储确定性折叠 |
| 环境 | 实时现状 | 对 Git、容器与外部系统的受限查询，输出存在、缺失与未知三态，注明观察时间与覆盖范围 |

- **可信信封**：每条事件带有全局递增序号、事件标识、所属[作用域](../theory/primitive/scope.md)、来源与时间戳。可信运行上下文在写入边界覆写信封字段，确保记录归属真实可溯
- **读写对称**：写入与读取共享同一强类型结构契约，读侧严格暴露契约偏差，身份核验仅读取本地绑定与目标记录
- **确定性折叠**：同一对象的多条事件按最大序号折叠出当前状态，例如待决项按作用域与标识折叠，Effect 按标识折叠，Case 按案例标识折叠，Report 取所属作用域最新一条。展示与刷新完全由确定性折叠生成

> 例：汇报写入曾放行新字段而读侧严格校验拒读，且身份核验先解码全库并将结构错误笼统包装为身份故障，导致整个 Firstmate 工具瘫痪，见[结构失配掩盖身份报错](../cases/schema-error-masked-identity.md)

## Events

事件存储保存具备协作语义的事实，具体字段与键名在实现仓定义，各类事件与理论概念的映射如下：

| 事件 | 理论出处 | 语义 |
| --- | --- | --- |
| 工作声明 | [Task](../theory/delivery/task.md) | 声明一项工作的目标、归属与上下文入口 |
| 负责变更 | [负责](../theory/primitive/ownership.md) | 登记或移交某项工作的当前负责人 |
| 汇报 | [Task 的 Progress](../theory/delivery/task.md#progress) 与[交接的 Return](../theory/agency/handoff.md#return) | 结构化进展与交回汇报，一次记录供分层阅读 |
| 缺报 | 缺报事实 | 节点结束或交回时缺少最新汇报的客观记录 |
| 待决项 | [Task 的 Information](../theory/delivery/task.md#information) 与[职责树的 Notify](../theory/agency/crew.md#notify) | 待 user 决定、交回待核、阻塞或交上层协调的事项 |
| 验收结论 | [验收](../theory/delivery/acceptance.md) | 对一次交回的验收判断，支持追加更正，以最新为准 |
| 委托结束 | [职责树的 Ranks](../theory/agency/crew.md#ranks) | 由约定结束方在自身作用域写下的委托结束事实 |
| 任务收口 | [收口](../theory/delivery/closeout.md) | Task 的显式收口记录，覆盖正常交付与直接中止 |
| 决定 | [决定的 Record](../theory/communication/decision.md#record) | 已形成的决定，含轻重、理由与取代指向 |
| 批准 | [批准](../theory/agency/approval.md) | user 授予的动作批准及其原轮依据与四维范围 |
| Effect | [Effect 的 Register](../theory/agency/effect.md#register) | 留在外部世界的变化登记、转交与结局 |
| Case | [案例](../theory/evolution/case.md) | 一次偏差的结构化事实、归因与生命周期 |

## Contracts

理论交给协作层的核心记录契约：

- **Report**：表达作者对进展与交回的结构化声明，具体字段定义落在实现仓文档。一次记录同时支撑首层重点阅读与按需展开依据，影响判断的例外进入首层。成果核对归属[验收](../theory/delivery/acceptance.md)，现状查证归属环境观察，动作放行归属[批准](../theory/agency/approval.md)，四者各自独立成立
- **工作范围**：按[工作范围的 Expression](../theory/delivery/coverage.md#expression)，种类 Agreed、Implied、Outside、完成状态、Effect 生命周期与环境观察四个维度独立记录与呈现。呈现载体按[形态的 Realization](architecture.md#realization)分级，原生扩展宿主通过结构化视图与纯文字符号分层展示，封闭宿主以输出中的红黄绿格式标记承载。Outside 仅在写明实际影响或需扩大批准范围时进入留意视角
- **Effect**：记录留在外部世界且需要有主有结局的变化，必填 Intended 或 Byproduct，附落点、变化事实、原因、批准依据、负责人与预期结局。Firstmate 转入后台的受管进程组由机制自动登记为 Byproduct 并在退出后补结局。原生宿主由结构化登记与只读视图呈现，封闭宿主以输出末尾的结构化块承载
- **批准**：记录动作、工作、条件、时效四维范围与 user 原话及原轮入口。执行前与跨会话交接时直接对照原轮依据与后续变化核对范围
- **决定**：记录选定去向、轻重、明示与推断理由及取代指向，写入后返回序号与出处供告知 user，支持确定性导出可读的 Decision Log
- **Case**：拆分预期、实际与证据入口，缺失项显式留空。观察事实 Fact 与原因假设 Inference 分字段记录，按只追加事件折叠生命周期，涵盖未处理、已处理、已验证与已复发四个状态
- **外部指针**：[Issue](../theory/delivery/issue.md#selection) 的模板位置与 [Ticket](../theory/delivery/ticket.md#composition) 的切分存放归属[工程层](../dev/index.md)与消费工作区约定。协作层在事件中只保存指向它们的入口指针

[Runtime](index.md)
