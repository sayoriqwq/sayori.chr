# sayori.chr

**Sayori 关于"我和 agent 如何协作"的全部理论与上游设计：理解的依据，也是派生协作层与工作区基座的真源**

## Position

- **先理论，后实现**：理论定稿成本低，实现固化后再改代价大。两者同时推进会让改动失去可追踪性
- **理论集中声明**：全部跨实现恒成立的原理集中声明在本仓 [theory/](theory/index.md)，下游运行产物经[派生](theory/evolution/derivation.md)形成并可追溯到理论
- **设计分置**：协作层设计写在 [runtime/](runtime/index.md)，工作区基座设计写在 [dev/](dev/index.md)，均经 user 确认，[进化](theory/evolution/index.md)的回路靠实际使用转起来
- **自举组织**：本仓根部的特殊文件布局自举遵循[特殊文件名](theory/documentation/special-filenames.md)及[工作区基座](dev/workspace.md)的基础规范，以自身验证上游设计的一致性

## Layout

| 位置 | 性质 | 内容 |
| --- | --- | --- |
| [VISION.md](VISION.md) | 愿景标尺 | 最高价值目标、六大核心信条与支持抵制取舍裁判 |
| [GLOSSARY.md](GLOSSARY.md) | 共享词表 | 全套理论紧凑术语定义与正文语言白名单，供外层工作区引用 |
| [theory/](theory/index.md) | 理论真源 | 基础、沟通、Agency、交付、文档、Skill 与进化元层的全部原理 |
| [runtime/](runtime/index.md) | 协作层设计 | 协作引擎怎样落实理论，在 sayori 中由 `sayori.run` 实现 |
| [dev/](dev/index.md) | 工作区基座设计 | 成品工作区基座的装配方案、规约载体与 Skill 出处映射，在 sayori 中由 `sayori.dev` 实现 |
| [cases/](cases/index.md) | 精选案例 | 已被理论或设计正式吸收的脱敏偏差记录，供正文反例链接回溯 |
| [ok/assertions.md](ok/assertions.md) | 断言总览 | 自动派生的全仓核心断言索引，供跨领域召回 |
| [AGENTS.md](AGENTS.md) | 收敛规则 | 读取规范、维护规则与脚本校验入口 |
| [NOTES.md](NOTES.md) | 原始输入 | user 原始表达，user 专写 |
| [ok/](ok/index.md) | 收敛规则 | 本仓用 OpenKnowledge 的字段、结构校验与定期语义巡检规约 |
| `.ok/` | 格式层 | OpenKnowledge 配置与维护脚本 |
