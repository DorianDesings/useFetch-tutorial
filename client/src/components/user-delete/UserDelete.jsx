const UserDelete = ({ setFetchInfo }) => {
	return (
		<button
			onClick={() => {
				setFetchInfo({
					url: 'https://jsonplaceholder.typicode.com/users'
				});
			}}
		>
			DELETE
		</button>
	);
};

export default UserDelete;
