import type { ObjectKeyType } from '../../../types';

export interface IOperation {
    (key: ObjectKeyType, value: unknown): {
        isNeed: boolean;
        key?: ObjectKeyType;
        value?: unknown;
    }
}
