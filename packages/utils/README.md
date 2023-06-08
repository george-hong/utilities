
<a name="readmemd"></a>

@h-utils/h-utils

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
