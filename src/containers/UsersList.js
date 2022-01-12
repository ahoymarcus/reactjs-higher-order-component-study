import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



// styles
const Wrapper = styled.div`
	padding: 5px 10px;
`;

const Input = styled.input`
	margin: 15px 40px;
	padding: 5px;
`;


const usersURL = 'https://jsonplaceholder.typicode.com/users';

const UsersList = () => {
	const [ users, setUsers ] = useState([]);
	const [ search, setSearch ] = useState('');
	console.log(search);
	
	
	const fetchUsers = async (url) => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			
			console.log(data);
			
			setUsers(data);
		} catch (err) {
			console.log(err);
		}
	};
	
	
	useEffect(() => {
		fetchUsers(usersURL);
	}, []);
	
	
	const renderUsers = users.map((user) => {
		return (
			<div key={user.id}>
				<p><strong>{user.name}</strong></p>
			</div>
		);
	});
	
	
	return (
		<Wrapper>
			<Input 
				type="text" 
				value={search}
				placeholder="Search users"
				onChange={(e) => setSearch(e.target.value)}
			/>
			{renderUsers}
		</Wrapper>
	);
};



export default UsersList;


