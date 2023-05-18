import filterEmptyContent from '../src';

const EMPTY_OBJECT = {};
const EMPTY_ARRAY: Array<never> = [];
const SIMPLE_OBJECT = {
  a: '',
  b: NaN,
  c: null,
  d: {},
  e: [],
  f: undefined,
};
const DEEP_OBJECT = {
  a: { b: { c: { d: { e: {} } } } },
};
const DEEP_ARRAY = [[[[[[]]]]]];

describe('filter empty content without params', () => {
  // string
  test('simple', () => expect(filterEmptyContent(SIMPLE_OBJECT)).toEqual(EMPTY_OBJECT));
});

describe('filter empty content with deep', () => {
  test('deep object', () => expect(filterEmptyContent(DEEP_OBJECT, true)).toEqual(EMPTY_OBJECT));
  test('deep array', () => expect(filterEmptyContent(DEEP_ARRAY, true)).toEqual(EMPTY_ARRAY));
});
