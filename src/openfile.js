import { readFileSync } from 'fs';
import { dirname } from 'path';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const openFile = (filename) => {
  const getFixturePath = (filename) => path.join(__dirname, '..', '__fixtures__', filename);
  const readFile = readFileSync(getFixturePath(filename), 'utf8');
  return readFile;
};

export default openFile;
