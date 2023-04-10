import getValueType from '../src/index';

class CustomClass {}
const objectThatHasNoPrototype = Object.create(null);

describe('get value type of', () => {
  // string
  test('string', () => expect(getValueType('test')).toBe('String'));
  test('string (empty)', () => expect(getValueType('test')).toBe('String'));
  // boolean
  test('boolean (true)', () => expect(getValueType(true)).toBe('Boolean'));
  test('boolean (false)', () => expect(getValueType(false)).toBe('Boolean'));
  // number
  test('number (normal)', () => expect(getValueType(0)).toBe('Number'));
  test('number (constructor)', () => expect(getValueType(Number(7))).toBe('Number'));
  test('number (NaN)', () => expect(getValueType(NaN)).toBe('Number'));
  test('number (Infinity)', () => expect(getValueType(Infinity)).toBe('Number'));
  // symbol
  test('symbol', () => expect(getValueType(Symbol())).toBe('Symbol'));
  // null
  test('null', () => expect(getValueType(null)).toBe('Null'));
  // object
  test('object', () => expect(getValueType({})).toBe('Object'));
  test('object (no prototype)', () => expect(getValueType(objectThatHasNoPrototype)).toBe('Object'));
  // array
  test('array', () => expect(getValueType([])).toBe('Array'));
  test('custom class', () => expect(getValueType(new CustomClass())).toBe('CustomClass'));
});
