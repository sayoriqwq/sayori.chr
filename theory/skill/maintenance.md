---
title: 维护
description: 已有的 Skill 怎样修补、拆分与删减。一份 Skill 用起来出了偏差，或想精简 Skill 时读
assertion: 修改从真实偏差出发：责任不变就局部修补，责任变了就拆分。删掉后行为不变的内容就该删
validity: candidate
---
# Maintenance

## Patch

修改的依据是真实的 [Case](../evolution/case.md)。责任不变时，只修暴露出问题的那一处。跑偏的种类、动作范围或成功标准变了，这份 Skill 已经是另一个东西，拆分或新建，不当补丁处理

偏差先定位再修：没被选中修 description，读不到修加载，选错下一步修 Workflow。不把无关指令追加到正文里，定位方式见[进化的 Revision](../evolution/index.md#revision)

## Pruning

删掉一条指令后 agent 的做法不变，这条就没有在起作用，可能重复、过时，或已经是模型的默认行为。Skill 变少、变小可以是边界更清楚了。是否值得保留按 [Evaluation 的 Value](../evolution/evaluation.md#value)

## Constraint

禁止项来自真实发生的失败，不预先枚举想象中的错误。模型或工具变化后，试着去掉，看原来的跑偏是否重现，重现了再加回来

[Skill](index.md)
