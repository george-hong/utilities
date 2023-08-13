import getValueType from '../src/index';

class CustomClass {}
const objectThatHasNoPrototype = Object.create(null);
// eslint-disable-next-line @typescript-eslint/no-empty-function
const emptyFunction = () => {};
// eslint-disable-next-line @typescript-eslint/no-empty-function
function FunctionClass() {}

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
  test('number (NaN)', () => expect(getValueType(NaN)).toBe('NaN'));
  test('number (Infinity)', () => expect(getValueType(Infinity)).toBe('Number'));
  // symbol
  test('symbol', () => expect(getValueType(Symbol())).toBe('Symbol'));
  // null
  test('null', () => expect(getValueType(null)).toBe('Null'));
  // undefined
  test('undefined', () => expect(getValueType(undefined)).toBe('Undefined'));
  // object
  test('object', () => expect(getValueType({})).toBe('Object'));
  test('object (no prototype)', () => expect(getValueType(objectThatHasNoPrototype)).toBe('Object'));
  // function
  test('function', () => expect(getValueType(emptyFunction)).toBe('Function'));
  // array
  test('array', () => expect(getValueType([])).toBe('Array'));
  // class
  test('custom class', () => expect(getValueType(new CustomClass())).toBe('CustomClass'));
  // eslint-disable-next-line @typescript-eslint/ban-ts-comment
  // @ts-ignore
  test('function class', () => expect(getValueType(new FunctionClass())).toBe('FunctionClass'));
  // build-in object
  test('date', () => expect(getValueType(new Date())).toBe('Date'));
  test('regExp', () => expect(getValueType(new RegExp(''))).toBe('RegExp'));
  test('array buffer', () => expect(getValueType(new ArrayBuffer(1))).toBe('ArrayBuffer'));
  test('Map', () => expect(getValueType(new Map())).toBe('Map'));
  test('BigInt', () => expect(getValueType(BigInt(0))).toBe('BigInt'));
});
