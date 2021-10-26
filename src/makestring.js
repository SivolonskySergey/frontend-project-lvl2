const makeString = (obj) => {
  const strDiff = JSON.stringify(obj, null, ' ');
  const repalceQuotes = strDiff.replace(/['"]+/g, '');
  const replaceComma = repalceQuotes.replace(/[',]+/g, '');
  return replaceComma;
};
export default makeString;
