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
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  g: function () {},
};
const SIMPLE_OBJECT_2 = {
  string: '1',
  number: 1,
  zero: 0,
  true: true,
  false: false,
  object: { a: 1 },
  array: [1],
};
const DEEP_OBJECT = {
  a: { b: { c: { d: { e: {} } } } },
};
const DEEP_ARRAY = [[[[[[]]]]]];

describe('filter empty content without params', () => {
  test('simple empty', () => expect(filterEmptyContent(SIMPLE_OBJECT)).toEqual(EMPTY_OBJECT));
  test('simple', () => expect(filterEmptyContent(SIMPLE_OBJECT_2)).toEqual(SIMPLE_OBJECT_2));
  test('simple', () => expect(filterEmptyContent(DEEP_OBJECT)).toEqual(DEEP_OBJECT));
  test('simple', () => expect(filterEmptyContent(DEEP_ARRAY)).toEqual(DEEP_ARRAY));
});

describe('filter empty content with deep', () => {
  test('deep simple empty', () => expect(filterEmptyContent(SIMPLE_OBJECT)).toEqual(EMPTY_OBJECT));
  test('deep object', () => expect(filterEmptyContent(DEEP_OBJECT, true)).toEqual(EMPTY_OBJECT));
  test('deep array', () => expect(filterEmptyContent(DEEP_ARRAY, true)).toEqual(EMPTY_ARRAY));
});
