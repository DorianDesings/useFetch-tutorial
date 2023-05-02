import { METHODS } from '../constants/methods';

export const getAllUsers = async setUsers => {
	const data = await fetchData('http://127.0.0.1:3000/api/users', {
		method: METHODS.GET
	});
	setUsers(data);
};

export const createUser = async (setUsers, body) => {
	const data = await fetchData('http://127.0.0.1:3000/api/users', {
		method: METHODS.POST,
		body: JSON.stringify(body),
		headers: {
			Accept: 'application/json',
			'Content-Type': 'application/json'
		}
	});
	setUsers(data);
};

export const deleteUser = async (id, setUsers) => {
	const data = await fetchData(`http://127.0.0.1:3000/api/users/${id}`, {
		method: METHODS.DELETE
	});
	setUsers(data);
};
