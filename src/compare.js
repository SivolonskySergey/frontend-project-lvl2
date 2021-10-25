/* eslint-disable no-console */
import _ from 'lodash';
import openFile from './openfile.js';
import makestring from './makestring.js';

const compare = (file1, file2) => {
  // ----- находим и открываем файлы
  const fileJson1 = openFile(file1);
  const fileJson2 = openFile(file2);
  // ----- конверитруем из JSON => Object => Array и сортируем
  const Jparse1 = _.sortBy(_.toPairs(JSON.parse(fileJson1)));
  const Jparse2 = _.sortBy(_.toPairs(JSON.parse(fileJson2)));
  // console.log(Jparse2);
  // console.log(Jparse1);
  // ----- объединяем в один массив
  const sortedConc = [...Jparse1, ...Jparse2];
  // ----- формируем вывод строки,
  // ----- (сравниваем значения sortedConc с Jparse1 и Jparse2)
  const diff = sortedConc.reduce((acc, item) => {
    const [key, value] = item;
    const fileConc1 = Object.fromEntries(Jparse1);
    const fileConc2 = Object.fromEntries(Jparse2);
    if (_.has(fileConc1, key) && _.has(fileConc2, key)) {
      if (fileConc1[key] === fileConc2[key]) {
        return { ...acc, [`  ${key}`]: value };
      } if (fileConc1[key] !== fileConc2[key]) {
        return fileConc1[key] === value ? { ...acc, [`- ${key}`]: value } : { ...acc, [`+ ${key}`]: value };
      }
    }
    if (_.has(fileConc1, key) && !_.has(fileConc2, key)) {
      return { ...acc, [`- ${key}`]: value };
    }
    if (!_.has(fileConc1, key) && _.has(fileConc2, key)) {
      return { ...acc, [`+ ${key}`]: value };
    }
    return acc;
  }, {});
  return makestring(diff);
};

export default compare;
