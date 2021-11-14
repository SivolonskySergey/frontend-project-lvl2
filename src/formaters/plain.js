const changeObjectValue = (value) => {
  if (typeof value === 'object' && value !== null) {
    return '[complex value]';
  }
  if (typeof value === 'boolean') {
    return `${value}`;
  }
  if (typeof value === 'number') {
    return value;
  }
  if (value === null) {
    return `${null}`;
  }
  return `'${value}'`;
};

const makePlainView = (tree) => {
  const iter = (node, parentKey) => {
    const result = node.flatMap((child) => {
      const keyPath = `${parentKey}${child.key}`;
      switch (child.status) {
        case 'added':
          return `Property '${keyPath}' was added with value: ${changeObjectValue(child.value)}`;
        case 'deleted':
          return `Property '${keyPath}' was removed`;
        case 'modified':
          return `Property '${keyPath}' was updated. From ${changeObjectValue(child.firstObjValue)} to ${changeObjectValue(child.secondObjValue)}`;
        case 'unmodified':
          return [];
        case 'nested':
          return iter(child.children, `${keyPath}.`);
        default:
          throw new Error(`Unknow type of status: '${child.status}'!`);
      }
    });
    return result;
  };
  return iter(tree, '');
};

export default (tree) => makePlainView(tree).join('\n');
