---
title: 记录
description: 协作层把哪类事实放在哪里，持久日志与本地易失状态怎样分离，事件种类对应哪些理论概念，以及核心记录的上游契约。要新增事件、划分存储边界或核对记录格式时读
assertion: 持久事件日志只存可追溯的协作事实，易失运行态独立存于本地状态，文档承载合同与依据，环境是现状真源。读写共享同一强类型契约，记录本身不产生批准
validity: candidate
---
# Records

## Places

按[记录](../theory/primitive/record.md)与[效力的 Source](../theory/primitive/validity.md#source)，四类位置物理分离，各管一类事实：

| 位置 | 性质 | 承载内容 |
| --- | --- | --- |
| 事件存储 | 只追加日志 | 协作业务事件。写入前按单一结构契约校验，底层拒绝改写与删除 |
| 本地状态 | 易失运行态 | 随本机与进程变化的状态，包含宿主会话绑定、进程号、容器坐标、Station 焦点、视图游标与布局偏好。允许覆盖，不进入事件流 |
| Task 记录 | 当前状态 | 权威文档承载合同、Spec、设计依据、证据与交付回执。动态进度、责任、待决与结果由事件存储确定性折叠，不要求双写 Markdown 状态 |
| 环境 | 实时现状 | 对 Git、容器与外部系统的受限查询，区分存在、缺失与未知三态，注明观察时间与覆盖范围 |

- **可信信封**：每条事件带有全局递增序号、事件标识、所属[作用域](../theory/primitive/scope.md)、来源与时间戳。可信运行上下文在写入边界强制覆写信封字段，防止调用入参冒充他人身份
- **读写对称**：写入与读取共享同一强类型结构契约，读侧不静默裁切字段掩盖偏差，也不通过全表解码充当身份核验
- **确定性折叠**：同一对象的多条事件按最大序号折叠出当前状态。例如待决项按作用域与标识折叠，Effect 按标识折叠，Case 按案例标识折叠，Report 取所属作用域最新一条。展示与刷新只做确定性折叠，不调用模型重做摘要

> 例：曾因写入 Report 时放行新字段而读侧严格校验拒读，且身份核验先读全库并将解码失败笼统包成身份校验错误，导致整个 Firstmate 工具瘫痪

## Events

事件存储只记录具备协作语义的事实，具体字段与事件名在实现仓定义，各类事件与理论概念的对应关系如下：

| 事件 | 理论出处 | 语义 |
| --- | --- | --- |
| 工作声明 | [Task](../theory/delivery/task.md) | 声明一项工作的目标、归属与上下文入口 |
| 负责变更 | [负责](../theory/primitive/ownership.md) | 登记或移交某项工作的当前负责人 |
| 汇报 | [Task 的 Progress](../theory/delivery/task.md#progress) 与[交接的 Return](../theory/agency/handoff.md#return) | 结构化进展与交回汇报，一次记录供分层阅读 |
| 缺报 | 缺报事实 | 节点结束或交回时缺少最新汇报的客观记录 |
| 待决项 | [Task 的 Information](../theory/delivery/task.md#information) 与[职责树的 Notify](../theory/agency/crew.md#notify) | 待 user 决定、交回待核、阻塞或交上层协调的事项 |
| 验收结论 | [验收](../theory/delivery/acceptance.md) | 对一次交回的验收判断，可追加更正，以最新为准 |
| 委托结束 | [职责树的 Ranks](../theory/agency/crew.md#ranks) | 由约定结束方在自身作用域写下的委托结束事实 |
| 任务收口 | [收口](../theory/delivery/closeout.md) | Task 的显式收口记录，涵盖正常交付与无交回中止 |
| 决定 | [决定的 Record](../theory/communication/decision.md#record) | 已形成的决定，含轻重、理由与取代指向 |
| 批准 | [批准](../theory/agency/approval.md) | user 授予的动作批准及其原轮依据与四维范围 |
| Effect | [Effect 的 Register](../theory/agency/effect.md#register) | 留在外部世界的变化登记、转交与结局 |
| Case | [案例](../theory/evolution/case.md) | 一次偏差的结构化事实、归因与生命周期 |

## Contracts

理论交给协作层的核心记录契约：

- **Report**：承担进展与交回的结构化载体，具体字段定义留在实现仓文档。一次记录同时支持首层重点阅读与按需展开依据，影响当前判断的例外进入首层。Report 只是作者声明，不等于验收、环境证明或批准
- **工作范围**：按[工作范围的 Expression](../theory/delivery/coverage.md#expression)，种类 Agreed、Implied、Outside、完成状态、Effect 生命周期与环境观察四个维度严格分离，不合并成单一状态灯。呈现载体按[形态的 Realization](architecture.md#realization)分级，原生扩展宿主通过结构化视图与纯文字符号分层展示，封闭宿主退化为输出中的红黄绿格式标记。Outside 仅在写明实际影响或需扩大批准范围时上提留意
- **Effect**：严格记录留在外部世界、须有主有结局的变化，必填 Intended 或 Byproduct，附落点、变化事实、原因、批准依据、负责人与预期结局。Firstmate 转入后台的受管进程组由机制自动登记为 Byproduct 并在退出后补结局。原生宿主由结构化登记与只读视图呈现，封闭宿主退化为输出块展示，例如 `show-effect`
- **批准**：记录动作、工作、条件、时效四维范围与 user 原话及原轮入口。执行前与跨会话交接时核对原轮与后续变化，不凭转述放行
- **决定**：记录选定去向、轻重、明示与推断理由及取代指向，写入后返回序号与出处供告知 user，支持确定性导出可读的 Decision Log
- **Case**：拆分预期、实际与证据入口，缺项明确留空。观察事实 Fact 与原因假设 Inference 分字段记录，按只追加事件折叠生命周期，包含未处理、已处理、已验证与已复发四个状态
- **指针**：[Issue](../theory/delivery/issue.md#selection) 的模板位置与 [Ticket](../theory/delivery/ticket.md#composition) 的切分存放属于工程层与消费工作区约定，见[工程层设计](../dev/index.md)。协作层在事件中只持入口指针，不写死路径与模板

[Runtime](index.md)
