import React, { useEffect, useState } from 'react';
import Card from '../card/card.component';

const UseReduceExample = () => {
	const [user, setUser] = useState(null);
	const [searchQuery, setSearchQuery] = useState('Bret');

	// useEffect(() => {
	// 	console.log(
	// 		'fires every time state changes ie any of the set methods is called'
	// 	);
	// });

	// useEffect(() => {
	// 	console.log('called only one time. (Dependant array is empty)');
	// }, []);

	// useEffect(() => {
	// 	console.log('called for first time and then every time user state changes');
	// }, [user]);

	useEffect(() => {
		const fetchUser = async () => {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/users?username=${searchQuery}`
			);
			const resJson = await response.json();
			setUser(resJson[0]);
		};
		fetchUser();
	}, [searchQuery]);

	return (
		<Card>
			<input
				type="text"
				value={searchQuery}
				onChange={(event) => setSearchQuery(event.target.value)}
			></input>
			{user ? (
				<div>
					<h1>{user.name}</h1>
					<p>{user.email}</p>
				</div>
			) : (
				<p>No user found!!</p>
			)}
		</Card>
	);
};

export default UseReduceExample;
