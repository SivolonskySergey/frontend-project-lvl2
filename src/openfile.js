import { readFileSync } from 'fs';
import path from 'path';

const openFile = (filename) => {
  const getFixturePath = (name) => path.resolve(process.cwd(), '__fixtures__', name);
  const readFile = readFileSync(getFixturePath(filename), 'utf8');
  return readFile;
};

export default openFile;
