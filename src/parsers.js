import yaml from 'js-yaml';

const parsers = {
  yml: yaml.load,
  json: JSON.parse,
};

const parse = (content, format) => parsers[format](content);

export default parse;
