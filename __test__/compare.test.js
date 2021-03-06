import { test, expect } from '@jest/globals';
import genDiff from '../src/index.js';
import openfile from '../src/openfile.js';

const open = (filename) => openfile(filename);

const fileExtensionsList = ['.json', '.yml'];

const referenceFileContentStylish = open('result_stylish');
const referenceFileContentPlain = open('result_plain');
const referenceFileContentJson = open('result_json');

test.each(fileExtensionsList)('Test %s files with stylish, plain and json presentation formats', (extension) => {
  const pathToFile1 = `file1${extension}`;
  const pathToFile2 = `file2${extension}`;
  expect(genDiff(pathToFile1, pathToFile2, 'stylish')).toEqual(referenceFileContentStylish);
  expect(genDiff(pathToFile1, pathToFile2, 'plain')).toEqual(referenceFileContentPlain);
  expect(genDiff(pathToFile1, pathToFile2, 'json')).toEqual(referenceFileContentJson);
});
