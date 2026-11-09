# sayori.chr

本仓保存 user（sayori）关于"我和 agent 如何协作"的理论，以及让它收敛的少量规则。`theory/` 是理论真源，`runtime/` 是 sayori 的 runtime 怎样落实理论的设计，根部文件是收敛规则与 user 的输入。本仓只存 user 自己的主张，历史由 Git 追溯

本文件与 [ok/](ok/index.md) 是本仓用 OpenKnowledge 的收敛规则，不是进化里的 Runtime，维护本仓不记 Case。规则取自[文档](theory/documentation/index.md)理论，理论修改后有意地同步过来，规则不好用时和 user 直接改

## Reading

- 从 [index.md](index.md) 定位内容，理论正文从 [Theory](theory/index.md) 进入，runtime 设计从 [Runtime](runtime/index.md) 进入
- 拿不准一条内容属于理论还是 runtime 设计时，按 [Runtime 的 Position](runtime/index.md#position) 判断。设计页的写法、字段与阶段规则同理论页
- 使用或修改概念时先查下方 [Glossary](#glossary)，定义真源在各词链接的理论页。沿已确认含义表达，出现歧义或冲突时以具体场景辨析，新含义经 user 确认后更新理论页、本表与相关引用。词条准入见 [Language](theory/language.md#admission)

## Glossary

紧凑词表，取自理论正文。定义以链接的理论页为准

| Term | Meaning |
| --- | --- |
| [Premise](theory/premise.md) | 理论出自的少数事实，与原语同级，各领域由事实、原语与 user 的偏好、决定推出 |
| [Primitive](theory/primitive/index.md) | 上层理论的意思，只定义一次，领域只做应用 |
| [Judgment](theory/primitive/judgment.md) | 对结果负责的人对可行去向作取舍，默认是 user。agent 做核对、推断与授权内的选择，内容叫主张 |
| [Context](theory/primitive/context.md) | 一方此刻实际取得的内容，没取得的等于不存在 |
| [Scope](theory/primitive/scope.md) | 对象在指定维度上的覆盖范围 |
| [Border](theory/primitive/scope.md#border) | Scope 到哪里为止，凭什么区分相邻对象 |
| [Assertion](theory/primitive/assertion.md) | 简明表达关键主张，放在读者最先看到的一处 |
| [Context Pointer](theory/primitive/context-pointer.md) | 指向所需材料，写明读取用途或条件 |
| [Ownership](theory/primitive/ownership.md) | 一件事恰好一个负责人，以接收为准，负责到有结局 |
| [Record](theory/primitive/record.md) | 要活过行动者的内容产生时就写到外面：Log 只追加，State 是当前版本 |
| [Validity](theory/primitive/validity.md) | 环境是现状的唯一真源，其余是缓存。信息的约束力：Form、Stage、Evidence |
| [Focus](theory/primitive/focus.md) | 当前会话围绕的核心内容 |
| [Alignment](theory/primitive/alignment.md) | 校准理解，直到足以支持判断 |
| [Load](theory/communication/load.md) | 理解负担由 agent 承担，user 的注意力留给判断 |
| [Intent](theory/communication/intent.md) | 表达期待的回应：Ask、Explore、Instruct，逐项辨认 |
| [Leadership](theory/communication/leadership.md) | 判断归 user，准备归 agent：每一点上 user 先判断，agent 再回应 |
| [Argue](theory/communication/argue.md) | agent 作可信反方，辨清真实诉求 |
| [Probe](theory/communication/probe.md) | 关键维度足够真实的最简实践，取得依据 |
| [Decision](theory/communication/decision.md) | 有理由地选定去向，一形成就追加到 Decision Log |
| [Crew](theory/agency/crew.md) | Captain（user）、Firstmate、Mate、Worker 组成的职责树 |
| [Session](theory/agency/session.md) | 职责持久，Session 短暂：要活过它的都放在外面 |
| [Mode](theory/agency/mode.md) | 判断何时取得：HITL 当场问，AFK 离场前问好，默认 HITL |
| [Approval](theory/agency/approval.md) | 具体动作是否在 user 的批准范围内 |
| [Handoff](theory/agency/handoff.md) | 职责恰好一个负责人，以接收为准：Delegate、Return、Resume |
| [Effect](theory/agency/effect.md) | 行动后留在外部的变化：始终有负责人、有结局。Pure 行动不留 Effect，Effectful 行动留下 |
| [Issue](theory/delivery/issue.md) | 现状与预期的差距，写给 user 与同事看 |
| [Task](theory/delivery/task.md) | user 注意力的一个域，Mate 负责，含 Pending |
| [Spec](theory/delivery/spec.md) | 交给 agent 执行的说明：已定的决定整理成一份，只综合不编造 |
| [Ticket](theory/delivery/ticket.md) | 从 Spec 切下的垂直切片，恰好交给一个 Worker，写明阻塞 |
| [Coverage](theory/delivery/coverage.md) | 事项与 user 预期的关系：Agreed、Implied、Outside，约束范围并决定汇报什么 |
| [Acceptance](theory/delivery/acceptance.md) | 用环境证据对照 Spec 或 Task 的记录核对做完，不看报告 |
| [Closeout](theory/delivery/closeout.md) | 工作结束时收口：复盘、结局、逐项回执 |
| [Todo](theory/delivery/task.md#identity) | 当前 Session 内的待办，跨 Session 以 Task 为准 |
| [Module](theory/documentation/organization.md#module) | 一个 md 文件，围绕一个职责组织内容 |
| [Directory](theory/documentation/organization.md#directory) | 以位置与层级表达归属，index 只写前提、边界、路由 |
| [Audience](theory/documentation/audience/index.md) | 目标读者：human（user、colleague）与 agent |
| [Description](theory/documentation/description.md) | 指向内容自身的指针：当前问题该不该来这里 |
| [Example](theory/documentation/writing.md#examples) | 说明规则的具体场景，`> 例：` 引用块，可引 Case |
| [Leading Word](theory/documentation/writing.md#language) | 模型已理解的紧凑词语，锚定同一概念或行为 |
| [Skill](theory/skill/index.md) | 行为治理单元：在可识别的情境中约束 agent 的做事过程，成立条件是可复发的跑偏 |
| [Derivation](theory/evolution/derivation.md) | 将 Theory 转成自包含的 Runtime |
| [Case](theory/evolution/case.md) | 一次偏差的可检查记录，只追加 |
| [Evaluation](theory/evolution/evaluation.md) | 用证据看一项修改是否带来值得保留的改善 |

## Special Files

职责与权限见[特殊文件名](theory/documentation/special-filenames.md)。硬边界：

- `NOTES.md` 由 user 专写，agent 只读。创建、写入、覆盖、格式化、重命名、删除，以及经工具、脚本或委派的间接修改，都只由 user 进行。这条边界独立于一般的编辑批准
- `NOTES.md` 的表达按 user 直接发出的 prompt 理解：想法和偏好用于判断，与现行决定冲突时指出并确认

## Writing

规则真源见[书写](theory/documentation/writing.md)与[读者](theory/documentation/audience/index.md)。本仓理论由 user 与 agent 共读。评判标准是美观与可读性

- **陈述**：正面陈述本模块的对象、关系与依据，按 user 的重点组织。与相邻模块的分界只在入口写一次
- **文风**：按人写给人读的方式来写：完整的句子、日常说法、段落连贯，不造抽象名词
- **命名**：一个 leading word，不足时用 a-b。需要 and 才能命名时，先拆分对象
- **形式**：优先用结构化 Markdown：粗体标签列表、编号步骤、表格、`> 例：` 引用块写 Example、Mermaid。一段一个重点，两三行以内。表头统一一种语言，单元格写成短语。有分支时先写分支条件，再分述各情形，编号只用于真正的步骤
- **标点**：段尾、列表项、单元格、断言与 description 结尾不加句号，段内句间正常用句号。不用分号
- **论断**：结论先行，主张、理由与成立条件写在一起，Inference 标明
- **修订**：从整体含义出发 patch，新内容归入现有结构并改写相应段落。追加式写作只用于 Decision Log、Case、Effect 登记等日志类记录
- **层级**：新增目录、分类或条目前先确定层级。同一层按同一维度并列，细分放到所属条目下面
- **精简**：每个意思一处权威位置。删去后理解不变的句子，整句删去
- **语言**：正文中文，常见英文与技术词直接用，难译的词直接用英文，例如 agent、token。控制词（建模概念及其取值）用英文，已定下中文说法的概念正文用中文，例如判断、批准。标题、frontmatter、文件名与目录名用英文
- **用词**：已有词汇或已定义的内容沿用原说法，不另造同类表述。例如动作放行统一叫批准，行动造成的变化统一叫 Effect。这条是本仓的约束，见 [Convergence](ok/convergence.md#vocabulary)
- **英文风格**：标识用小写与连字符，建模概念首字母大写，例如 `special-filenames.md`、Effect

## Validity

理论页与设计页的 frontmatter 带 `title`、`description`、`assertion`、`validity`。index 模块表的 Description 列与目录的 `.ok/frontmatter.yml` 从各页 frontmatter 生成，不手写。新文档从 `theory/.ok/templates/module.md` 开始，`validity: candidate`。`confirmed` 只在 user 确认后写入，只征求一次。之后的一般变更保持状态并明确告诉 user，重大变更或 user 不在场时的变更退回 `candidate`。含义见[效力](theory/primitive/validity.md)，字段与阶段规则见 [Frontmatter](ok/frontmatter.md)

修改理论页或设计页后运行 `python3 -I .ok/scripts/derive.py --fix` 更新生成的内容，提交前运行 `derive.py` 与 `links.py` 核对。这两个脚本只补充 OpenKnowledge，职责见 [Convergence](ok/convergence.md)

## Versioning

提交前审阅具体文件，区分已写入、已提交与已验证。推送与远端设置另行批准
