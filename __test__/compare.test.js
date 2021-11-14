import { test, expect, beforeAll } from '@jest/globals';
import fs from 'fs';
import path from 'path';
import genDiff from '../src/index.js';

const readFile = (fileName) => fs.readFileSync(path.resolve(process.cwd(), fileName), 'utf8');

const getFixturePath = (fileName) => `__fixtures__/${fileName}`;

const fileExtensionsList = ['.json', '.yml'];

let referenceFileContentStilysh;
let referenceFileContentPlain;
let referenceFileContentJson;

beforeAll(() => {
  referenceFileContentStilysh = readFile(getFixturePath('result_stilysh'));
  referenceFileContentPlain = readFile(getFixturePath('result_plain'));
  referenceFileContentJson = readFile(getFixturePath('result_json'));
});

test.each(fileExtensionsList)('Test %s files with stylish, plain and json presentation formats', (extension) => {
  const pathToFile1 = getFixturePath(`file1${extension}`);
  const pathToFile2 = getFixturePath(`file2${extension}`);
  expect(genDiff(pathToFile1, pathToFile2, 'stilysh')).toEqual(referenceFileContentStilysh);
  expect(genDiff(pathToFile1, pathToFile2, 'plain')).toEqual(referenceFileContentPlain);
  expect(genDiff(pathToFile1, pathToFile2, 'json')).toEqual(referenceFileContentJson);
});
