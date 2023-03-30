export type ObjectKeyType = string | number;

export interface IUniformObject<K> {
    [key: string]: K;
}

export interface IOperation {
  (key: ObjectKeyType, value: unknown): {
    isNeed: boolean; key?: ObjectKeyType; value?: unknown;
  }
}
