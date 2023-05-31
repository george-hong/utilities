
<a name="readmemd"></a>

@h-utils/operate-object / [Exports](#modulesmd)

# h-utils

tips

1. 每次添加新的子包时，应在跟目录执行 npm install 重置包之间的依赖关系，否则 rollup 会找不到依赖倒置打包有问题

工作流

1. 多包管理 [Lerna](https://lerna.js.org/)
2. 构建工具 [Rollup](https://www.rollupjs.com/)
3. 代码格式化 [Prettier](https://prettier.io/)
4. 代码检查 [ESLint](https://eslint.org/)
   - [ESLint 规则](https://zh-hans.eslint.org/docs/latest/rules/)


<a name="interfacesioperationmd"></a>

[@h-utils/operate-object - v0.0.1](#readmemd) / [Exports](#modulesmd) / IOperation

# Interface: IOperation

## Callable

### IOperation

▸ **IOperation**(`key`, `value`): `Object`

#### Parameters

| Name | Type |
| :------ | :------ |
| `key` | [`ObjectKeyType`](#objectkeytype) |
| `value` | `unknown` |

#### Returns

`Object`

| Name | Type |
| :------ | :------ |
| `isNeed` | `boolean` |
| `key?` | [`ObjectKeyType`](#objectkeytype) |
| `value?` | `unknown` |

#### Defined in

[index.ts:8](https://github.com/george-hong/utils/blob/203beda/packages/utils-operate-object/src/index.ts#L8)


<a name="interfacesiuniformobjectmd"></a>

[@h-utils/operate-object - v0.0.1](#readmemd) / [Exports](#modulesmd) / IUniformObject

# Interface: IUniformObject<K\>

## Type parameters

| Name |
| :------ |
| `K` |

## Indexable

▪ [key: `string`]: `K`


<a name="modulesmd"></a>

[@h-utils/operate-object - v0.0.1](#readmemd) / Exports

# @h-utils/operate-object - v0.0.1

## Table of contents

### Interfaces

- [IOperation](#interfacesioperationmd)
- [IUniformObject](#interfacesiuniformobjectmd)

### Type Aliases

- [ObjectKeyType](#objectkeytype)

### Functions

- [default](#default)

## Type Aliases

### ObjectKeyType

Ƭ **ObjectKeyType**: `string` \| `number`

#### Defined in

[index.ts:1](https://github.com/george-hong/utils/blob/203beda/packages/utils-operate-object/src/index.ts#L1)

## Functions

### default

▸ **default**(`objOrArr`, `operation`): ``null`` \| [`IUniformObject`](#interfacesiuniformobjectmd)<`unknown`\> \| `unknown`[] \| `unknown`

get a new object/array that performed particular operation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objOrArr` | `unknown` | any object or array that you want to operate. |
| `operation` | [`IOperation`](#interfacesioperationmd) | define to set or not set content, and how to set. |

#### Returns

``null`` \| [`IUniformObject`](#interfacesiuniformobjectmd)<`unknown`\> \| `unknown`[] \| `unknown`

the operation result

#### Defined in

[index.ts:21](https://github.com/george-hong/utils/blob/203beda/packages/utils-operate-object/src/index.ts#L21)
