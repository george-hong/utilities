const obj = {};
// use to check value is a object
const OBJECT_STRING = 'Object';

/**
 * get type of the value
 * @param value the value that you want to get type
 * @return {string} type of the value
 */
function getValueType(value: unknown): string {
  const typeString = obj.toString.call(value).slice(8, -1);
  return typeString === OBJECT_STRING
    ? (value as object).constructor
      ? (value as object).constructor.name
      : OBJECT_STRING
    : typeString;
}

export default getValueType;
