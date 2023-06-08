
<a name="readmemd"></a>

@h-utils/get-value-type

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
getValueType(NaN); // 'NaN'
getValueType(true); // 'Boolean'
getValueType(Symbol()); // 'Symbol'
getValueType(null); // 'null'
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
