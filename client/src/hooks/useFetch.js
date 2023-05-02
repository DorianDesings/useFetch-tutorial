import { useEffect, useState } from 'react';

const fetchData = async (fetchInfo, setFetchStatus) => {
	const { url, options } = fetchInfo;

	try {
		const request = await fetch(url, options);
		const data = await request.json();
		setFetchStatus({ data, loading: false, error: undefined });
	} catch (err) {
		setFetchStatus({ data: undefined, loading: false, error: err });
	}
};

export const useFetch = () => {
	const [fetchInfo, setFetchInfo] = useState({
		url: 'http://127.0.0.1:3000/api/users',
		options: {
			method: 'GET'
		}
	});

	const [fetchStatus, setFetchStatus] = useState({
		data: undefined,
		loading: true,
		error: undefined
	});

	useEffect(() => {
		fetchData(fetchInfo, setFetchStatus);
	}, [fetchInfo]);

	return { ...fetchStatus, setFetchInfo };
};
