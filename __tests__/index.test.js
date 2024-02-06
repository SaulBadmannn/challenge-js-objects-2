import assert from 'assert';
import test from 'node:test';
import fromPairs from '../index.js';

test('step1', () => {
  const result1 = fromPairs([['fred', 30], ['barney', 40]]);
  const expected1 = { fred: 30, barney: 40 };
  assert.deepStrictEqual(result1, expected1);
});

test('step2', () => {
  const result2 = fromPairs([['cat', 5], ['dog', 6], ['bird', 10]]);
  const expected2 = { cat: 5, dog: 6, bird: 10 };
  assert.deepStrictEqual(result2, expected2);
});

test('step3', () => {
  const result3 = fromPairs([['cat', 5], ['dog', 6], ['cat', 11]]);
  const expected3 = { cat: 11, dog: 6 };
  assert.deepStrictEqual(result3, expected3);
});