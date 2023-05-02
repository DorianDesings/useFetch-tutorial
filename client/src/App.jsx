import UserDelete from './components/user-delete/UserDelete';
import UsersList from './components/users-list/UsersList';
import { useFetch } from './hooks/useFetch';
import { GlobalStyles } from './styles/GlobalStyles';

const App = () => {
	const { data, loading, error, setFetchInfo } = useFetch(
		'http://127.0.0.1:3000/api/users/'
	);

	if (loading && !error) return <h2>Loading...</h2>;
	if (error) return <h2>Something wrong!!</h2>;

	return (
		<>
			<GlobalStyles />
			<UsersList users={data} />
			<UserDelete setFetchInfo={setFetchInfo} />
		</>
	);
};

export default App;
