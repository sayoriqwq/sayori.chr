---
title: 消息
description: 跨通道输入文本的来源保真、行级意图标注以及向 user 提问的呈现规范。设计跨节点传话、意图标注或提问格式时读
assertion: 跨通道输入统一附带结构化来源信封以保真出处，出处标记与批准核对各自按边界独立成立。行级意图标注让原话与意图对人和模型同等可见，向 user 提问并列决策点、选项与代价，默认保持中性
validity: confirmed
---
# Message

本页落实[意图](../theory/communication/intent.md)、[引领](../theory/communication/leadership.md)与跨会话通信中的消息保真规范

## Provenance

按[意图的 Attribution](../theory/communication/intent.md#attribution)，经不同通道送入会话的文本均须保真出处，使接收方清楚辨认父级派活、代送原话、节点直送与系统通知：

- **来源信封**：经协作通道投递的消息统一附带四项来源信息，即发送通道、发送者、引用原话与原决定入口。可可靠判别的清晰标注，来源不明的显式标为未知
- **输入分类**：终端命令按命令通道执行，控制键按按键通道传递，来源信封仅作用于自然语言协作消息
- **边界分离**：来源信封专责说明消息的传递路径与出处，身份核验归属系统进程边界，动作放行归属[批准的 Check](../theory/agency/approval.md#check)对原轮依据与后续变化的核对，三者各自独立成立

> 例：接手节点曾将通知非 user 当场发出误判为另一会话中的原批准无效，未回查原轮即要求重复确认，见[跨会话原批准被重复请示](../cases/cross-session-approval.md)

## Annotation

按[意图的 Values](../theory/communication/intent.md#values)，输入支持对具体句子作行级意图标注，分别对应 Ask、Explore 与 Instruct 三类意图：

- **默认直发**：普通自然语言输入直接发送，保持零额外操作步骤
- **原意保真**：启用行级标注时，同一句原话与逐行意图同时呈现给人与模型。跨节点转述时连同原轮入口一起附带，将作者明示与 agent 的归纳分列呈现
- **职责边界**：意图标注专责标明期待的回应类型，决定与批准仍分别按[决定](../theory/communication/decision.md)与[批准](../theory/agency/approval.md)成立

## Asking

按[引领的 Questions](../theory/communication/leadership.md#questions)规范向 user 提问的呈现方式：

- **聚焦未知**：提问仅围绕当前焦点最核心的未知展开，可从环境与记录查明的事实由 agent 先行查实
- **中性并列**：每个决策点并列呈现各选项的含义、代价与成立条件，默认保持客观中性
- **追问推荐**：仅在 user 明确追问推荐时给出建议与理由，作为共同推敲的起点，最终判断归 user

[Runtime](index.md)
