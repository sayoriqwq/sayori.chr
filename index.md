# sayori.chr

**Sayori 关于"我和 agent 如何协作"的理论与 runtime 设计：理解的依据，也是派生 runtime 的真源**

## Position

- **先理论，后 runtime**：理论定稿成本低，runtime 固化后再改代价大。两者同时推进会让改动失去可追踪性
- **理论是真源**：给 agent 运行的说明经[派生](theory/evolution/derivation.md)形成，能追溯到理论
- **设计与理论分开**：sayori 的 runtime 怎样落实理论写在 [runtime/](runtime/index.md)，经 user 确认，不写进理论。实现在 sayori.run，[进化](theory/evolution/index.md)的回路靠它的使用转起来

## Layout

| 位置 | 性质 | 内容 |
| --- | --- | --- |
| [theory/](theory/index.md) | 理论（真源） | 基础、协作领域与进化元层 |
| [runtime/](runtime/index.md) | 设计 | sayori 的 runtime 怎样落实理论，实现在 sayori.run |
| [AGENTS.md](AGENTS.md) | 收敛规则 | 维护规则与紧凑词表，取自理论 |
| [NOTES.md](NOTES.md) | 输入 | user 原始表达，user 专写 |
| [ok/](ok/index.md) | 收敛规则 | 本仓用 OpenKnowledge 的字段与做法，不属于理论 |
| `.ok/` | 知识库格式层 | OpenKnowledge 配置与补充它的维护脚本 |
