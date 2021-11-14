import { test, expect, beforeAll } from '@jest/globals';
import genDiff from '../src/index.js';
import openfile from '../src/openfile.js';

const open = (filename) => openfile(filename);

const fileExtensionsList = ['.json', '.yml'];

let referenceFileContentStylish;
let referenceFileContentPlain;
let referenceFileContentJson;

beforeAll(() => {
  referenceFileContentStylish = open('result_stilysh');
  referenceFileContentPlain = open('result_plain');
  referenceFileContentJson = open('result_json');
});

test.each(fileExtensionsList)('Test %s files with stylish, plain and json presentation formats', (extension) => {
  const pathToFile1 = `file1${extension}`;
  const pathToFile2 = `file2${extension}`;
  expect(genDiff(pathToFile1, pathToFile2, 'stilysh')).toEqual(referenceFileContentStylish);
  expect(genDiff(pathToFile1, pathToFile2, 'plain')).toEqual(referenceFileContentPlain);
  expect(genDiff(pathToFile1, pathToFile2, 'json')).toEqual(referenceFileContentJson);
});
