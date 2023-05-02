const UsersList = ({ users }) => {
	return (
		<div>
			{users.map(user => (
				<h2 key={user.userId}>{user.name}</h2>
			))}
		</div>
	);
};

export default UsersList;
