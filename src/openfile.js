import { readFileSync } from 'fs';
import { cwd } from 'process';
import path from 'path';

const openFile = (filename) => {
  const endDir = '/home/ehg47/hexlet-project-num-2/frontend-project-lvl2/bin';
  const relPath = path.relative(cwd(), endDir);
  const absPath = path.resolve(cwd(), relPath, filename);
  return readFileSync(absPath, 'utf8');
};
export default openFile;
