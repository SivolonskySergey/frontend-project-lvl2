import genDiff from './src/index.js';

const egn = genDiff('file1.json', 'file2.yml', 'plain');
console.log(egn);
