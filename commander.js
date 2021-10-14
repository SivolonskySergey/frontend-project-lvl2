import { cwd } from 'process';

const action = (name) => {
	return cwd(name);
};
console.log(action());
