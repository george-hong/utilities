
<a name="readmemd"></a>

@h-utils/get-value-type / [Exports](#modulesmd)

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

[@h-utils/get-value-type - v0.0.1](#readmemd) / Exports

# @h-utils/get-value-type - v0.0.1

## Table of contents

### Functions

- [default](#default)

## Functions

### default

▸ **default**(`value`): `string`

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

[index.ts:21](https://github.com/george-hong/utils/blob/203beda/packages/utils-get-value-type/src/index.ts#L21)
