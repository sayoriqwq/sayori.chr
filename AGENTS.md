# sayori.chr

本仓保存 user 关于"我和 agent 如何协作"的最高愿景、全部核心理论以及让内容收敛的少量规则。[VISION.md](VISION.md) 声明最高价值目标与取舍裁判，`theory/` 声明全部跨实现恒成立的理论真源，`runtime/` 定义协作层的上游设计，`dev/` 定义成品工作区基座的上游设计，[GLOSSARY.md](GLOSSARY.md) 承载共享术语与语言白名单，根部文件是收敛规则与 user 的原始输入。本仓只存 user 自己的主张，历史由 Git 追溯

本文件与 [ok/](ok/index.md) 是本仓用 OpenKnowledge 的收敛规则，独立于进化里的派生运行产物，维护本仓不记 Case。规则取自[文档](theory/documentation/index.md)理论，理论修改后有意地同步过来，规则不好用时和 user 直接改

## Reading

- **先召回，再选读**：进入本仓或作任何跨领域判断与修订前，先读[断言总览](ok/assertions.md)完成全仓断言召回，识别全部相关或可能受影响的领域主张，再按各页 `description` 选择性打开完整正文
- **按层定位**：从 [VISION.md](VISION.md) 校准价值目标与取舍红线，从 [index.md](index.md) 辨明仓库布局，理论正文从 [Theory](theory/index.md) 进入，协作层设计从 [Runtime](runtime/index.md) 进入，工作区基座设计从 [Dev](dev/index.md) 进入，真实反例从 [Cases](cases/index.md) 查阅
- **归层判定**：拿不准一条内容属于理论、协作层设计还是工作区基座设计时，按 [Runtime 的 Position](runtime/index.md#position) 与[消费的 Border](runtime/consumer.md#border) 判断。设计页的写法、字段与阶段规则同理论页
- **术语核对**：使用或修改概念时先查 [GLOSSARY.md](GLOSSARY.md)，定义真源在各词链接的理论页。沿已确认含义表达，出现歧义或冲突时以具体场景辨析，新含义经 user 确认后更新理论页、词表与相关引用。词条准入见 [Language](theory/language.md#admission)

## Special Files

职责与权限见[特殊文件名](theory/documentation/special-filenames.md)。硬边界：

- `NOTES.md` 由 user 专写，agent 只读。创建、写入、覆盖、格式化、重命名、删除，以及经工具、脚本或委派的间接修改，都只由 user 进行。这条边界独立于一般的编辑批准
- `NOTES.md` 的表达按 user 直接发出的 prompt 理解：想法和偏好用于判断，与现行决定冲突时指出并确认

## Writing

规则真源见[书写](theory/documentation/writing.md)与[读者](theory/documentation/audience/index.md)。本仓理论由 user 与 agent 共读。评判标准是美观与可读性

- **陈述**：用描述性语言正面定义本模块是什么、做什么、为什么，执行流程用命令式编号步骤。相邻概念按边界与第一性维度区分职责，不在定义里写不是什么。真实反例统一由 [cases/](cases/index.md) 承载并在正文示例块链接引用。规则采用规约式陈述，不用问句组织定义。与相邻模块的分界只在入口写一次
- **文风**：按人写给人读的方式来写：完整的句子、日常说法、段落连贯，不造抽象名词
- **命名**：一个 leading word，不足时用 a-b。需要 and 才能命名时，先拆分对象
- **形式**：优先用结构化 Markdown：粗体标签列表、编号步骤、表格、`> 例：` 引用块写 Example、Mermaid。一段一个重点，两三行以内。表头统一一种语言，单元格写成短语。有分支时先写分支条件，再分述各情形，编号只用于真正的步骤
- **标点**：段尾、列表项、单元格、断言与 description 结尾不加句号，段内句间正常用句号。不用分号。不用括号组织额外含义或限定，需要解释的词写在该解释的位置并用链接指向
- **论断**：结论先行，主张、理由与成立条件写在一起，Inference 标明
- **修订**：从整体含义出发 patch，新内容归入现有结构并改写相应段落。追加式写作只用于 Decision Log、Case、Effect 登记等日志类记录
- **层级**：新增目录、分类或条目前先确定层级。同一层按同一维度并列，细分放到所属条目下面
- **精简**：每个意思一处权威位置。删去后理解不变的句子，整句删去
- **语言**：正文尽可能用中文，避免中英混杂。允许保留的英文词以 [GLOSSARY.md](GLOSSARY.md#language-whitelist) 为准。标题、frontmatter、文件名与目录名用英文
- **用词**：已有词汇或已定义的内容沿用原说法，不另造同类表述。例如动作放行统一叫批准，行动造成的变化统一叫 Effect。这条是本仓的约束，见 [Convergence](ok/convergence.md#vocabulary)
- **英文风格**：标识用小写与连字符，建模概念首字母大写，例如 `special-filenames.md`、Effect

## Validity

愿景页、词表页、理论页、设计页与精选案例页的 frontmatter 带 `title`、`description`、`assertion`、`validity`。index 模块表的 Description 列与目录的 `.ok/frontmatter.yml` 从各页 frontmatter 生成，不手写。新文档从 `theory/.ok/templates/module.md` 开始，`validity: candidate`。`confirmed` 只在 user 确认后写入，只征求一次。之后的一般变更保持状态并明确告诉 user，重大变更或 user 不在场时的变更退回 `candidate`。含义见[效力](theory/primitive/validity.md)，字段与阶段规则见 [Frontmatter](ok/frontmatter.md)

修改文档后运行 `node .ok/scripts/derive.mjs --fix` 更新生成的内容，提交前依次运行以下三项确定性校验：

1. `node .ok/scripts/derive.mjs`：核对 frontmatter 字段、自动路由表与断言总览一致
2. `node .ok/scripts/links.mjs`：核对相对链接与锚点可达
3. `node .ok/scripts/lint.mjs`：核对不动点无环依赖、理论单向分层、实现名零泄漏与写作硬格式红线

理论扩张或阶段收口前，按[语义巡检规约](ok/lint.md)发起独立语义审查，守住本体正交性与第一性一致性

本仓常驻与可复用的维护脚本遵循体系主技术栈偏好，统一采用 Node.js 生态的 TypeScript 或 JavaScript 编写。仅服务单次会话命令行需求的一次性脚本由 agent 按需选用工具

## Versioning

提交前审阅具体文件，区分已写入、已提交与已验证。推送与远端设置另行批准
