const obj = {};

/**
 * get type of the value
 * @param value the value that you want to get type
 * @return {string} type of the value
 */
function getValueType(value: unknown): string {
  return obj.toString.call(value).slice(8, -1);
}

export default getValueType;
