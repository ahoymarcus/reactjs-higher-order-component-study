import React, { useState, useEffect } from 'react';
import styled from 'styled-components';



// styles
const Wrapper = styled.div`
	padding: 15px 30px;
`;

const Input = styled.input`
	margin: 15px 40px;
	padding: 5px;
`;

const NotFount = styled.p`
	color: red;
	font-weight: bold;
	margin-left: 15px;
`;

const Heading2 = styled.h2`
	color: gray;
`;


const usersURL = 'https://jsonplaceholder.typicode.com/users';

const UsersList = () => {
	const [ users, setUsers ] = useState([]);
	const [ search, setSearch ] = useState('');
	//console.log(search);
	
	
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
	
	
	let filteredUsers = users.filter(({ name }) => {
		console.log(name.indexOf(search) >= 0);
		
		return name.indexOf(search) >= 0;
	}).map((user) => {
		return (
			<div key={user.id}>
				<p><strong>{user.name}</strong></p>
			</div>
		);
	});
	
	
	return (
		<Wrapper>
			<Heading2>Users</Heading2>
			<Input 
				type="text" 
				value={search}
				placeholder="Search users"
				onChange={(e) => setSearch(e.target.value)}
			/>
			{filteredUsers.length > 0 ? (
					filteredUsers 
				) : (
					<NotFount>User not found!</NotFount> 
				)
			}
		</Wrapper>
	);
};



export default UsersList;


