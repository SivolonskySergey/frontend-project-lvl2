import { readFileSync } from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const openFile = (filename) => {
  const getFixturePath = (name) => path.join(__dirname, name);
  const readFile = readFileSync(getFixturePath(filename), 'utf8');
  return readFile;
};

export default openFile;
