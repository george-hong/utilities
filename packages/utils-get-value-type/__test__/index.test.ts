import getValueType from '../src/index';

describe('get value type of', () => {
  test('string', () => expect(getValueType('test')).toBe('String'));
  test('string (empty)', () => expect(getValueType('test')).toBe('String'));
  test('boolean (true)', () => expect(getValueType(true)).toBe('Boolean'));
  test('boolean (false)', () => expect(getValueType(false)).toBe('Boolean'));
  test('symbol', () => expect(getValueType(Symbol())).toBe('Symbol'));
  test('null', () => expect(getValueType(null)).toBe('Null'));
  test('object', () => expect(getValueType({})).toBe('Object'));
  test('array', () => expect(getValueType([])).toBe('Array'));
});
