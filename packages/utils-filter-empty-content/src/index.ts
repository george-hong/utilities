import getValueType from '@h-utils/get-value-type';
import operateObject from '@h-utils/operate-object';

const filterEmptyParams = (obj: unknown, isDeep = false): unknown => {
    return operateObject(obj, (key, value) => {
        const isArray = Array.isArray(value)
        const isObject = getValueType(value) === 'Object'
        if (isDeep && (isArray || isObject)) {
            value = filterEmptyParams(value, isDeep)
        }
        const isNeed = (
            (value !== '') &&
            (value !== undefined) &&
            (!isArray || (isArray && value.length > 0)) &&
            (!isObject || (isObject && Object.keys(value).length > 0))
        )
        return {
            isNeed,
            key,
            value
        }
    })
}

export default filterEmptyParams;