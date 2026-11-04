---
title: 特殊文件名
description: NOTES、index、AGENTS 等文件名各自的约定，以及谁可以写。创建或修改这些文件，尤其是碰 NOTES.md 之前读
assertion: 一些文件名带有约定：看到名字，就知道它承担什么、谁可以写
validity: confirmed
---
# Special Filenames

## Files

| 文件 | 职责 | 维护权限 |
| --- | --- | --- |
| `NOTES.md` | user 亲自组织的原始表达：想法、偏好、问题、决定和指令 | user 专写，agent 只读。创建、写入、覆盖、格式化、重命名、删除，以及经工具、脚本或委派的间接修改，都只由 user 进行。这条边界独立于一般的编辑批准 |
| `index.md` | 当前层级的入口：前提、边界与路由，见[组织的 Directory](organization.md#directory) | 按有效批准更新，内容指向所属正文 |
| `AGENTS.md` | 当前层级面向 agent 的维护约束与读取入口 | 依据 user 的有效决定修改 |
| `GLOSSARY.md` | 当前领域已确认的共享术语与含义 | 按已确认语义维护，概念变化时同步理论页与相关引用 |
| `README.md` | 帮助外部访问者认识仓库或产品 | 按其读者的需要维护 |

同名文件可以在不同层级出现，各自承担所在位置的职责

其余文档按对象命名，一页承担一个对象，见[组织的 Module](organization.md#module)

## Notes

`NOTES.md` 中的表达按与 user 直接发出的 prompt 相同的语义理解：想法和偏好用于判断，明确的指令按对象、范围和当前有效性处理。与现行决定冲突时，agent 指出冲突并请 user 确认

[Documentation](index.md)
