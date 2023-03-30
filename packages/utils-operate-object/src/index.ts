import type {
    IOperation,
    IUniformObject,
} from '../index.type';

/**
 * get a new object/array that performed particular operation
 * @param {Object | Array} objOrArr any object or array that you want to operate.
 * @param {Function} operation define to set or not set content, and how to set.
 * @return the operation result
 */
function operateObject(objOrArr: unknown, operation: IOperation): null | IUniformObject<unknown> | Array<unknown> | unknown {
    if (!(objOrArr instanceof Object)) return null;
    if (typeof operation !== 'function') return objOrArr;
    const isArray = Array.isArray(objOrArr);
    const result = isArray ? [] : {};
    !isArray && Object.entries(objOrArr).forEach((keyAndValue) => {
        const [key, value] = keyAndValue;
        const {isNeed, key: operationKey, value: operationValue} = operation(key, value);
        if (isNeed) (result as IUniformObject<unknown>)[operationKey || key] = operationValue;
    });
    isArray && objOrArr.forEach((value, key) => {
        const {isNeed, value: operationValue} = operation(key, value);
        if (isNeed) (result as Array<unknown>)[(result as Array<unknown>).length] = operationValue;
    });
    return result;
}

export default operateObject;
