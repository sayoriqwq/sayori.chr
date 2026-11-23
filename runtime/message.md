---
title: 消息
description: 跨通道进入会话的文本怎样保真来源，行级意图标注怎样在人与模型间传递原意，以及向 user 提问的格式规范。要设计跨节点传话、意图标注或提问呈现时读
assertion: 跨通道输入必须附带结构化来源信封以保真出处，但来源本身不构成身份认证或批准。意图标注让原话与意图对人和模型同等可见，向 user 提问只列决策点、选项与代价，默认不附倾向
validity: candidate
---
# Message

本页落实[意图](../theory/communication/intent.md)、[引领](../theory/communication/leadership.md)与跨会话通信中的消息保真规范

## Provenance

按[意图的 Attribution](../theory/communication/intent.md#attribution)，不同通道送入会话的文本必须保真出处，避免把父级派活、代送原话、节点直送或系统通知误认成 user 当场指令：

- **来源信封**：经协作通道投递的消息统一附带四项来源信息，即发送通道、发送者、引用原话与原决定入口。能可靠判别的清晰标注，不可靠来源保持未知
- **通道边界**：终端命令按命令执行，控制键按键传递，不向命令或按键盲目拼接信封文本
- **非批准凭据**：可见信封、无信封文本、手动粘贴的头部或代送原话均不是身份认证，也不授予新批准。涉及跨会话动作时，接手者仍须按[批准的 Check](../theory/agency/approval.md#check)回查原轮依据与后续变化

> 例：曾因接手节点把通知不是 user 当场发出误当成另一会话的原批准无效，未回查原轮就要求 user 重复确认

## Annotation

按[意图的 Values](../theory/communication/intent.md#values)，支持在输入中对具体句子作行级意图标注，对应 Ask、Explore 与 Instruct 三类意图：

- **无额外负担**：普通输入无需多走一步，按原样发送
- **原意保真**：选择标注时，同一句原话与逐行意图对人与模型同等可见。跨节点转述时连同原轮入口一起附带，agent 的总结不冒充作者明示
- **效力边界**：意图标注只帮助辨认期待的回应类型，不构成决定、批准或身份认证

## Asking

按[引领的 Questions](../theory/communication/leadership.md#questions)规范向 user 提问的呈现方式：

- **聚焦未知**：只围绕当前焦点最核心的未知发问，已知事实先从环境与记录查明
- **无倾向呈现**：每个决策点并列写出各选项的含义、代价与成立条件，默认不附推荐标识或倾向性措辞
- **追问推荐**：仅在 user 明确追问推荐时，给出建议与理由作为共同推敲的起点，判断仍归 user

[Runtime](index.md)
