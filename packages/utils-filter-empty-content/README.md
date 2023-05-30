
<a name="readmemd"></a>

@h-utils/filter-empty-content / [Exports](#modulesmd)

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

[@h-utils/filter-empty-content - v0.0.1](#readmemd) / Exports

# @h-utils/filter-empty-content - v0.0.1

## Table of contents

### Functions

- [default](#default)

## Functions

### default

▸ **default**(`target`, `isDeep?`, `filterConfig?`): `unknown`

filter the content of array or object, bump the field which value is ''、undefined、null、{}、[]

#### Parameters

| Name | Type | Default value | Description |
| :------ | :------ | :------ | :------ |
| `target` | `unknown` | `undefined` | The value you want to filter,except object or array. |
| `isDeep` | `boolean` | `false` | If field is an array of object,filter it or not. |
| `filterConfig` | `IFilterConfig` \| `checkIsNeedType` | `DEFAULT_FILTER_CONFIG` | The method or config to filter value. |

#### Returns

`unknown`

filter result

#### Defined in

[index.ts:65](https://github.com/george-hong/utils/blob/fae12a8/packages/utils-filter-empty-content/src/index.ts#L65)
