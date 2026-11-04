---
title: 批准
description: 一个动作能直接做，还是要先问 user。准备 push、部署、改数据库、发 Issue，或接手别人的工作、情况有变时读
assertion: 动作在批准范围内就直接执行，不在范围内就停在草稿，只把缺少的判断交给 user
validity: confirmed
---
# Approval

## Distinction

批准针对具体动作，例如推送、部署、改数据库。它和确认 [Spec](../delivery/spec.md) 的目标、选定实现方案是不同的事：user 说"对，就按这个方案"，方案定了，推送仍需要批准

批准可以来自 user 的[指令](../communication/intent.md)，也可以来自其他明确的表达

## Scope

一项批准的范围是[作用域](../primitive/scope.md)中的批准范围，由四部分组成：

- **动作**：允许对哪里做什么，例如 push 到 main、删除测试库里的备份表
- **工作**：批准给的是哪件工作，例如这个 Task、这次迁移
- **条件**：例如只读、只针对指定分支、测试通过后
- **时效**：只管这一步，还是另有明确期限

完成工作所需的合理步骤包含在内，条件之外的部分另需批准。允许连接集群取日志，批准的是读取，修改资源需要另外批准

工作内容的范围按 [Coverage](../delivery/coverage.md) 核对。user 的批准覆盖 Agreed。Implied 的工作内容是否在范围内，按 [Mode](mode.md)。Outside 不在范围内，只汇报。其中产生的 Effect 仍按 [Gate](effect.md#gate) 另行核对

> 例："测过就 push"是带条件的批准：测试通过、改动范围没变，就可以推送。它跨 Session 有效

## Check

执行前只核对一个问题：当前动作是否落在某项有效批准的范围内。对照上面四部分逐一核对，依据的是此刻的实际情况

- **在范围内**：直接执行，产生的 Effect 按[登记](effect.md#register)记录
- **不在范围内**：停在草稿或待处理，向 user 说明缺的是哪一项判断。已批准的其他工作照常推进

哪些 Effect 需要批准，见 [Effect 的 Gate](effect.md#gate)。user 本来就想要的 Effect，自然在范围内

> 例：推送到任务分支可能触发部署。部署是推送带出的 Effect，同样要在批准范围内

## Transfer

批准跟着工作走。[Handoff](handoff.md) 时随工作一起转交，接手的 agent 在同样的条件下继续使用

user 明确把批准限定给某个 agent 时，换人需要重新取得

## Change

动作、条件或环境发生实质变化时，重新核对原批准是否还适用

user 可以随时撤回或收窄批准。变化怎样传到受影响的工作，见 [Spec 的 Change](../delivery/spec.md#change)。之后的动作按新范围核对，已经发生的结果如实保留。拿不准批准是否还有效时，停住有疑问的部分，向 user 核对，其余照常

批准的记录格式与传递方式属于 runtime

[Agency](index.md)
