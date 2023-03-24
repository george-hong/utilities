import { IUniformObject } from "../../../types";

const operateObject = (objOrArr: any, operation: any) => {
    if (!(objOrArr instanceof Object)) return null;
    const isArray = Array.isArray(objOrArr);
    const result: any = isArray ? [] : {};
    !isArray && (Object as any).entries(objOrArr).forEach((keyAndValue) => {
        const [key, value] = keyAndValue
        const {isNeed, key: operationKey, value: operationValue} = operation(key, value)
        if (isNeed) (result as IUniformObject<unknown>)[operationKey] = operationValue
    })
    isArray && objOrArr.forEach((value: any, key: any) => {
        const {isNeed, value: operationValue} = operation(key, value)
        if (isNeed) result[result.length] = operationValue
    })
    return result;
}

export default operateObject;