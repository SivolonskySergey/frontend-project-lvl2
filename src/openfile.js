import { readFileSync } from 'fs';
import { path, dirname } from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const openFile = (filename) => {
  const getFixturePath = path.join(__dirname, '..', '__fixtures__', filename);
  const readFile = readFileSync(getFixturePath(filename), 'utf8');
  console.log(readFile('file1.json'));
  return readFile;
};

export default openFile;
