/* eslint-disable no-console */
import _ from 'lodash';
import path from 'path';
import openFile from './openfile.js';
import parse from './parsers.js';
import render from './formaters/index.js';

const parseFile = (pathToFile) => {
  const format = path.extname(pathToFile).toLowerCase().slice(1);
  const content = openFile(pathToFile);
  return parse(content, format);
};

const compare = (obj1, obj2) => {
  const keys = _.sortBy(_.union(_.keys(obj1), _.keys(obj2)));
  return keys.map((key) => {
    if (!_.has(obj1, key)) {
      return { key, value: obj2[key], status: 'added' };
    }
    if (!_.has(obj2, key)) {
      return { key, value: obj1[key], status: 'deleted' };
    }
    if (_.isPlainObject(obj1[key]) && _.isPlainObject(obj2[key])) {
      return { key, children: compare(obj1[key], obj2[key]), status: 'nested' };
    }
    if (obj1[key] !== obj2[key]) {
      return {
        key, firstObjValue: obj1[key], secondObjValue: obj2[key], status: 'modified',
      };
    }
    return { key, value: obj1[key], status: 'unmodified' };
  });
};

const genDiff = (pathToFile1, pathToFile2, outputFormat = 'stilysh') => {
  const data1 = parseFile(pathToFile1);
  const data2 = parseFile(pathToFile2);
  const diffTree = compare(data1, data2);
  return render(diffTree, outputFormat);
};

export default genDiff;
