
<a name="readmemd"></a>

@h-utils/filter-empty-content

# @h-utils/filter-empty-content - v0.0.2

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
