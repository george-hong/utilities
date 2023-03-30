"use strict";
exports.__esModule = true;
/**
 * get a new object/array that performed particular operation
 * @param {Object | Array} objOrArr any object or array that you want to operate.
 * @param {Function} operation define to set or not set content, and how to set.
 * @return the operation result
 */
function operateObject(objOrArr, operation) {
    if (!(objOrArr instanceof Object))
        return null;
    if (typeof operation !== 'function')
        return objOrArr;
    var isArray = Array.isArray(objOrArr);
    var result = isArray ? [] : {};
    !isArray && Object.entries(objOrArr).forEach(function (keyAndValue) {
        var key = keyAndValue[0], value = keyAndValue[1];
        var _a = operation(key, value), isNeed = _a.isNeed, operationKey = _a.key, operationValue = _a.value;
        if (isNeed)
            result[operationKey || key] = operationValue;
    });
    isArray && objOrArr.forEach(function (value, key) {
        var _a = operation(key, value), isNeed = _a.isNeed, operationValue = _a.value;
        if (isNeed)
            result[result.length] = operationValue;
    });
    return result;
}
exports["default"] = operateObject;
