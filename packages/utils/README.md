
<a name="readmemd"></a>

@h-utils/h-utils / [Exports](#modulesmd)

# h-utils

tips

1. 每次添加新的子包时，应在跟目录执行 npm install 重置包之间的依赖关系，否则 rollup 会找不到依赖倒置打包有问题

工作流

1. 多包管理 [Lerna](https://lerna.js.org/)
2. 构建工具 [Rollup](https://www.rollupjs.com/)
3. 代码格式化 [Prettier](https://prettier.io/)
4. 代码检查 [ESLint](https://eslint.org/)
   - [ESLint 规则](https://zh-hans.eslint.org/docs/latest/rules/)


<a name="modulesmd"></a>

[@h-utils/h-utils - v0.0.1](#readmemd) / Exports

# @h-utils/h-utils - v0.0.1

## Table of contents

### Functions

- [filterEmptyContent](#filteremptycontent)
- [getValueType](#getvaluetype)
- [operateObject](#operateobject)

## Functions

### filterEmptyContent

▸ **filterEmptyContent**(`target`, `isDeep?`, `filterConfig?`): `unknown`

filter the content of array or object, bump the field which value is ''、undefined、null、{}、[]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | `unknown` | The value you want to filter,except object or array. |
| `isDeep?` | `boolean` | If field is an array of object,filter it or not. |
| `filterConfig?` | `IFilterConfig` \| `checkIsNeedType` | The method or config to filter value. |

#### Returns

`unknown`

filter result

#### Defined in

utils-filter-empty-content/dist/index.d.ts:21

___

### getValueType

▸ **getValueType**(`value`): `string`

get type of the value

**`Example`**

```ts
import getValueType from '@h-utils/getValueType';

getValueType('value'); // 'String'
getValueType(1); // 'Number'
getValueType(true); // 'Boolean'
getValueType(Symbol()); // 'Symbol'
getValueType(Null); // 'Null'
getValueType({}); // 'Object'
getValueType([]); // 'Array'
getValueType(new CustomClass()); // 'CustomClass'
```

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `value` | `unknown` | the value that you want to get type |

#### Returns

`string`

type of the value

#### Defined in

utils-get-value-type/dist/index.d.ts:17

___

### operateObject

▸ **operateObject**(`objOrArr`, `operation`): ``null`` \| `IUniformObject`<`unknown`\> \| `unknown`[] \| `unknown`

get a new object/array that performed particular operation

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `objOrArr` | `unknown` | any object or array that you want to operate. |
| `operation` | `IOperation` | define to set or not set content, and how to set. |

#### Returns

``null`` \| `IUniformObject`<`unknown`\> \| `unknown`[] \| `unknown`

the operation result

#### Defined in

utils-operate-object/dist/index.d.ts:18
