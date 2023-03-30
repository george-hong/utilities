import type { ObjectKeyType } from '../../../types/index.type';

export interface IOperation {
    (key: ObjectKeyType, value: unknown): {
        isNeed: boolean;
        key?: ObjectKeyType;
        value?: unknown;
    }
}