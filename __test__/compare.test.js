import { test, expect } from '@jest/globals';
import compare from '../src/compare';
import makestring from '../src/makestring.js';

const result = {
  '- follow': true,
  '- host': 'rumbler.ru',
  '- proxy': '234.53.26',
  '  timeout': 35,
  '  who': 'me',
  '+ host': 'hexlet.io',
  '+ proxy': '123.234.53.22',
  '+ status': false,
};

test('compare', () => {
  expect(typeof compare('testfile1.json', 'testfile2.json')).toBe('string');
  expect(compare('testfile1.json', 'testfile2.json')).toEqual(makestring(result));
});
