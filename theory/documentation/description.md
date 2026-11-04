---
title: Description
description: 写好一条 description，让读者在打开之前就能看出该不该来这里。写 md 模块、目录或 skill 的 description，或 agent 总是找错、漏找某份内容时读
assertion: description 是指向一份内容的上下文指针，读者在打开之前只看得到它。它只回答一件事：当前问题该不该来这里
validity: confirmed
---
# Description

## Premise

挑选发生在打开之前。agent 面对一批 skill 或文档时，通常只看得到名称和 description，正文要等决定打开后才读到。description 写不好，内容再好也找不到，或者在不该用的时候被用上

同一个原理适用于一切在打开之前被挑选的内容：文档、目录与 skill。宿主据此决定是否加载 skill

## Division

description 是一种[上下文指针](../primitive/context-pointer.md)，指向的就是它所在的内容。它和 title、assertion 各管一件事，分工见[组织的 Entry](organization.md#entry)

## Content

两句话，各管一件事：

- **所得**：读了能解决什么问题，能得到什么。skill 写它的能力或产物
- **场景**：什么时候读，用读者实际遇到的任务和信号来写

相邻内容容易混淆时，补一句**边界**：说明最容易被误选的那个邻居管什么，这里不管什么

> 例：Approval 的 description："一个动作能直接做，还是要先问 user。准备 push、部署、改数据库、发 Issue，或接手别人的工作、情况有变时读"

## Wording

- **区分度前置**：最能把本内容和邻居分开的信息放在最前面，宿主可能会截断
- **任务用语**：场景写 agent 实际遇到的说法和信号，例如"user 让我顺手修旁边的 bug"。理论里的概念名，读者在遇到问题时想不到
- **不列节名**：节名是正文的目录，读者从中看不出自己的问题在不在这里
- **长度**：一到两句，够区分就停。skill 的 1024 字符是硬上限，不是目标
- **语气**：客观陈述。不用"我可以帮你"的口吻，也不用 ALWAYS、MUST 加强触发

## Check

只看 title 和 description，读者能看出这份内容是否适合当前问题、打开后能得到什么

- **换位**：把它放到相邻内容下面，应该显得不对劲。很多内容都能共用的 description，还不够具体
- **试选**：拿几条真实请求试一试：该选中的被选中，相邻任务的请求不被选中
- **修正**：漏选时补上缺失的任务说法，误选时收窄范围或补边界。偏差记为 [Case](../evolution/case.md)

[Documentation](index.md)
