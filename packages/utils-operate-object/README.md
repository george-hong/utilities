
<a name="readmemd"></a>

@h-utils/operate-object

# @h-utils/operate-object - v0.0.2

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


<a name="interfacesioperationmd"></a>

[@h-utils/operate-object - v0.0.2](#readmemd) / IOperation

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


<a name="interfacesiuniformobjectmd"></a>

[@h-utils/operate-object - v0.0.2](#readmemd) / IUniformObject

# Interface: IUniformObject<K\>

## Type parameters

| Name |
| :------ |
| `K` |

## Indexable

▪ [key: `string`]: `K`
