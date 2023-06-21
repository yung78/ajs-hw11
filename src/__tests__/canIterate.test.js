import canIterate from '../js/canIterate.js';

test('null can iterate', () => {
  const result = canIterate(null);
  expect(result).toBe(false);
});

test('array can iterate', () => {
  const result = canIterate([1, 2, 3]);
  expect(result).toBe(true);
});

test('integer can iterate', () => {
  const result = canIterate(123);
  expect(result).toBe(false);
});
