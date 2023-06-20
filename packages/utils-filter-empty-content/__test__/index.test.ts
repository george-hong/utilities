import filterEmptyContent from '../src';

const EMPTY_OBJECT = {};
const EMPTY_ARRAY: Array<never> = [];
const EMPTY_FUNCTION = function () {
  return;
};
const SIMPLE_OBJECT = {
  emptyString: '',
  NaN: NaN,
  null: null,
  emptyObject: {},
  emptyArray: [],
  undefined: undefined,
  function: EMPTY_FUNCTION,
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
const MIXED_SIMPLE_OBJECT = Object.assign({}, SIMPLE_OBJECT, SIMPLE_OBJECT_2);
const DEEP_OBJECT = {
  a: { b: { c: { d: { e: {} } } } },
};
const DEEP_ARRAY = [[[[[[]]]]]];
const EMPTY_STRING_OBJECT = { emptyString: '' };
const NAN_OBJECT = { NaN: NaN };
const NULL_OBJECT = { null: null };
const UNDEFINED_OBJECT = { undefined: undefined };
const INCLUDE_EMPTY_OBJECT = { emptyObject: {} };
const INCLUDE_EMPTY_ARRAY_OBJECT = { emptyArray: [] };
const INCLUDE_FUNCTION_OBJECT = { function: EMPTY_FUNCTION };

describe('filter empty content without params', () => {
  test('simple empty', () => expect(filterEmptyContent(SIMPLE_OBJECT)).toEqual(EMPTY_OBJECT));
  test('simple', () => expect(filterEmptyContent(SIMPLE_OBJECT_2)).toEqual(SIMPLE_OBJECT_2));
  test('mixed object', () => expect(filterEmptyContent(MIXED_SIMPLE_OBJECT)).toEqual(SIMPLE_OBJECT_2));
  test('deep object', () => expect(filterEmptyContent(DEEP_OBJECT)).toEqual(DEEP_OBJECT));
  test('deep array', () => expect(filterEmptyContent(DEEP_ARRAY)).toEqual(DEEP_ARRAY));
});

describe('filter empty content with deep', () => {
  test('deep simple empty', () => expect(filterEmptyContent(SIMPLE_OBJECT, true)).toEqual(EMPTY_OBJECT));
  test('simple', () => expect(filterEmptyContent(SIMPLE_OBJECT_2, true)).toEqual(SIMPLE_OBJECT_2));
  test('mixed object', () => expect(filterEmptyContent(MIXED_SIMPLE_OBJECT, true)).toEqual(SIMPLE_OBJECT_2));
  test('deep object', () => expect(filterEmptyContent(DEEP_OBJECT, true)).toEqual(EMPTY_OBJECT));
  test('deep array', () => expect(filterEmptyContent(DEEP_ARRAY, true)).toEqual(EMPTY_ARRAY));
});

describe('use config object', () => {
  test('ignore string', () => {
    expect(filterEmptyContent(EMPTY_STRING_OBJECT, false, { emptyString: false })).toEqual(EMPTY_STRING_OBJECT);
  });
  test('ignore NaN', () => {
    expect(filterEmptyContent(NAN_OBJECT, false, { NaN: false })).toEqual(NAN_OBJECT);
  });
  test('ignore null', () => {
    expect(filterEmptyContent(NULL_OBJECT, false, { null: false })).toEqual(NULL_OBJECT);
  });
  test('ignore undefined', () => {
    expect(filterEmptyContent(UNDEFINED_OBJECT, false, { undefined: false })).toEqual(UNDEFINED_OBJECT);
  });
  test('ignore empty object', () => {
    expect(filterEmptyContent(INCLUDE_EMPTY_OBJECT, false, { emptyObject: false })).toEqual(INCLUDE_EMPTY_OBJECT);
  });
  test('ignore empty array', () => {
    expect(filterEmptyContent(INCLUDE_EMPTY_ARRAY_OBJECT, false, { emptyArray: false })).toEqual(
      INCLUDE_EMPTY_ARRAY_OBJECT
    );
  });
  test('ignore function', () => {
    expect(filterEmptyContent(INCLUDE_FUNCTION_OBJECT, false, { function: false })).toEqual(INCLUDE_FUNCTION_OBJECT);
  });
});
