# sayori.chr

**Sayori 关于"我和 agent 如何协作"的理论与 runtime 设计：理解的依据，也是派生 runtime 的真源**

## Position

- **先理论，后 runtime**：理论定稿成本低，runtime 固化后再改代价大。两者同时推进会让改动失去可追踪性
- **理论是真源**：给 agent 运行的说明经[派生](theory/evolution/derivation.md)形成，能追溯到理论
- **设计与理论分开**：协作层怎样落实理论写在 [runtime/](runtime/index.md)，工程层的定位写在 [dev/](dev/index.md)，经 user 确认，不写进理论。实现在 sayori.run 与 sayori.dev，[进化](theory/evolution/index.md)的回路靠它的使用转起来

## Layout

| 位置 | 性质 | 内容 |
| --- | --- | --- |
| [theory/](theory/index.md) | 理论真源 | 基础、协作领域与进化元层 |
| [runtime/](runtime/index.md) | 协作层设计 | 协作层怎样落实理论，实现在 `sayori.run` |
| [dev/](dev/index.md) | 工程层设计 | 工程层的定位与分界，实现在 `sayori.dev` |
| [cases/](cases/index.md) | 精选案例 | 已被理论或设计正式吸收的脱敏偏差记录，供正文反例链接回溯 |
| [ok/assertions.md](ok/assertions.md) | 断言总览 | 自动派生的全仓核心断言索引，供跨领域召回 |
| [AGENTS.md](AGENTS.md) | 收敛规则 | 读取规范、维护规则与紧凑词表 |
| [NOTES.md](NOTES.md) | 原始输入 | user 原始表达，user 专写 |
| [ok/](ok/index.md) | 收敛规则 | 本仓用 OpenKnowledge 的字段与维护脚本 |
| `.ok/` | 格式层 | OpenKnowledge 配置与维护脚本 |
