#!/usr/bin/env node
import program from 'commander';
import genDiff from '../src/index.js';

program
  .version('1.0.0', '-v, --version')
  .description('does compare stuff idk')
  .helpOption('-h, --help', 'read more information')
  .option('-f, --format [type]', 'output format')
  .arguments('<filepath1> <filepath2>')
  .action((filepath1, filepath2, options) => {
    const difference = genDiff(filepath1, filepath2, options.format);
    console.log(difference);
  });

program.parse(process.argv);
