import getValueType from '@h-utils/get-value-type';
import operateObject from '@h-utils/operate-object';

interface IFilterConfig {
  emptyString?: boolean;
  undefined?: boolean;
  null?: boolean;
  NaN?: boolean;
  emptyObject?: boolean;
  emptyArray?: boolean;
  function?: boolean;
}

interface ICheckIsNeed {
  (value: unknown, isArray: boolean, isObject: boolean): boolean;
}
type checkIsNeedType = undefined | ICheckIsNeed;

const DEFAULT_FILTER_CONFIG: IFilterConfig = {
  emptyString: true,
  undefined: true,
  null: true,
  NaN: true,
  emptyObject: true,
  emptyArray: true,
  function: true,
};

/**
 * parse the filter config
 * @param config
 */
function parseFilterConfig(config: IFilterConfig = {}): checkIsNeedType {
  return function (value: unknown, isArray: boolean, isObject: boolean): boolean {
    if (isArray) {
      return !config.emptyArray || (config.emptyArray && (value as Array<unknown>).length > 0);
    }
    if (isObject) {
      return !config.emptyObject || (config.emptyObject && Object.keys(value as object).length > 0);
    }
    if (value === null) return !config.null;
    const valueType = typeof value;
    switch (valueType) {
      case 'string':
        return !config.emptyString || (config.emptyString && value !== '');
      case 'undefined':
        return !config.undefined || (config.undefined && value !== undefined);
      case 'number':
        return !config.NaN || (config.NaN && !Number.isNaN(value));
      case 'function':
        return !config.function;
      default:
        return true;
    }
  };
}

/**
 * filter the content of array or object, bump the field which value is ''、undefined、null、{}、[]
 * @param {Object | Array} target The value you want to filter,except object or array.
 * @param {boolean} [isDeep = false] If field is an array of object,filter it or not.
 * @param {Function} filterConfig The method or config to filter value.
 * @returns {null | Object | Array} filter result
 */
const filterEmptyContent = (
  target: unknown,
  isDeep = false,
  filterConfig: IFilterConfig | checkIsNeedType = DEFAULT_FILTER_CONFIG
): unknown => {
  let checkIsNeed: checkIsNeedType;
  const configType = typeof filterConfig;
  if (configType === 'function') checkIsNeed = filterConfig as ICheckIsNeed;
  else if (configType === 'object') checkIsNeed = parseFilterConfig(filterConfig as IFilterConfig);
  return operateObject(target, (key, value) => {
    const isArray = Array.isArray(value);
    const isObject = getValueType(value) === 'Object';
    if (isDeep && (isArray || isObject)) {
      // deep first
      value = filterEmptyContent(value, isDeep, checkIsNeed);
    }
    const isNeed = checkIsNeed ? checkIsNeed(value, isArray, isObject) : true;
    return {
      isNeed,
      key,
      value,
    };
  });
};

export default filterEmptyContent;
