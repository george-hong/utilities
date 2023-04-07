import getValueType from '@h-utils/get-value-type';
import operateObject from '@h-utils/operate-object';

/**
 * filter the content of array or object, bump the field which value is ''、undefined、null、{}、[]
 * @param {Object | Array} target The value you want to filter,except object or array.
 * @param {boolean} isDeep If field is an array of object,filter it or not.
 * @returns {null | Object | Array} filter result
 */
const filterEmptyParams = (target: unknown, isDeep = false): unknown => {
  return operateObject(target, (key, value) => {
    const isArray = Array.isArray(value);
    const isObject = getValueType(value) === 'Object';
    if (isDeep && (isArray || isObject)) {
      value = filterEmptyParams(value, isDeep);
    }
    const isNeed =
      value !== '' &&
      value !== undefined &&
      value !== null &&
      (!isArray || (isArray && (value as Array<unknown>).length > 0)) &&
      (!isObject || (isObject && Object.keys(value as object).length > 0));
    return {
      isNeed,
      key,
      value,
    };
  });
};
// esli
export default filterEmptyParams;
