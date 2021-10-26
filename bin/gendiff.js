#!/usr/bin/env node
import program from 'commander';
import compare from '../index.js';

program
  .version('0.0.1')
  .description('Compares two configuration files and shows a difference.')
  .arguments('<filepath1> <filepath2>')
  .option('-f, --format <type>', 'output format')
  .action((filepath1, filepath2) => {
    const result = compare(filepath1, filepath2);
	console.log(result);
    return result;
  })
  .parse(process.argv);
// const result1 = openFile('fixture1.json');
// console.log(openFile('fixture2.json'));
// console.log(JSON.parse(result1));
