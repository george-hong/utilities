export type ObjectKeyType = string | number;

export interface IUniformObject<K> {
    [key: string]: K;
}