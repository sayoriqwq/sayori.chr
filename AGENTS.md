# sayori.chr

本仓保存 user 关于"我和 agent 如何协作"的最高愿景、全部核心理论以及上游设计。本仓根部文件组织自举遵循[特殊文件名](theory/documentation/special-filenames.md)及[工作区基座](dev/workspace.md)的基础规范

本文件与 [ok/](ok/index.md) 是本仓使用 OpenKnowledge 的收敛入口，独立于进化里的派生运行产物，维护本仓不记 Case。规则不好用时和 user 直接改

## Reading

- **先召回，再选读**：进入本仓或作任何跨领域判断与修订前，先读[断言总览](ok/assertions.md)完成全仓断言召回，再按各页 `description` 选择性打开完整正文
- **按层定位**：从 [VISION.md](VISION.md) 校准价值目标与取舍红线，从 [index.md](index.md) 辨明仓库布局，理论正文从 [Theory](theory/index.md) 进入，协作层设计从 [Runtime](runtime/index.md) 进入，工作区基座设计从 [Dev](dev/index.md) 进入，真实反例从 [Cases](cases/index.md) 查阅
- **归层判定**：拿不准一条内容属于理论、协作层设计还是工作区基座设计时，按 [Runtime 的 Position](runtime/index.md#position) 与[消费的 Border](runtime/consumer.md#border) 判断
- **术语核对**：使用或修改概念时先查 [GLOSSARY.md](GLOSSARY.md)，定义真源在各词链接的理论页，词条准入见 [Language](theory/language.md#admission)

## Maintenance

- **特殊文件**：职责与写入权限遵循[特殊文件名](theory/documentation/special-filenames.md)，尤其严守 `NOTES.md` 由 user 专写、agent 只读的硬边界
- **写作规范**：本仓全部文档由 user 与 agent 共读，写作、命名、标点与语言白名单遵循[书写](theory/documentation/writing.md)、[读者](theory/documentation/audience/index.md)与 [GLOSSARY.md](GLOSSARY.md#language-whitelist)，用词统一遵循[Convergence](ok/convergence.md#vocabulary)
- **字段与阶段**：受管页面的 frontmatter、自动路由与 `candidate`/`confirmed` 阶段规则遵循 [Frontmatter](ok/frontmatter.md)
- **提交前校验**：修改文档后运行 `node .ok/scripts/derive.mjs --fix`，提交前依次运行以下三项确定性硬边界校验：
  1. `node .ok/scripts/derive.mjs`
  2. `node .ok/scripts/links.mjs`
  3. `node .ok/scripts/lint.mjs`
- **定期语义巡检**：理论扩张或阶段收口前，按[语义巡检规约](ok/lint.md)发起独立软语义审查

## Versioning

提交前审阅具体文件，区分已写入、已提交与已验证。推送与远端设置另行批准
