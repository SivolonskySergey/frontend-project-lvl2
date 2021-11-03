import stilysh from './stilysh.js';
import plain from './plain.js';
import json from './json.js';

const render = (data, outputFormat) => {
  switch (outputFormat) {
    case 'stilysh':
      return stilysh(data);
    case 'plain':
      return plain(data);
    case 'json':
      return json(data);
    default:
      throw new Error(`Unknown result format style: '${outputFormat}'!`);
  }
};

export default render;
