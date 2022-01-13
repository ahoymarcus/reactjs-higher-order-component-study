import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// HigherOrderComponent
import HigherOrderComponent from '../containers/HigherOrderComponent';



// styles
const Wrapper = styled.div`
	padding: 15px 0 15px 30px;
`;

const Input = styled.input`
	margin: 20px 0px;
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

const UsersList = ({ data }) => {
	// const [ users, setUsers ] = useState([]);
	// const [ search, setSearch ] = useState('');
	
	
	// const fetchUsers = async (url) => {
		// try {
			// const response = await fetch(url);
			// const data = await response.json();
			
			// console.log(data);
			
			// setUsers(data);
		// } catch (err) {
			// console.log(err);
		// }
	// };
	
	
	// useEffect(() => {
		// fetchUsers(usersURL);
	// }, []);
	
	
	const renderUsers = data.map((user) => {
		return (
			<div key={user.id}>
				<p><strong>{user.name}</strong></p>
			</div>
		);
	});
	
	
	// let filteredUsers = users.filter(({ name }) => {
		// console.log(name.indexOf(search) >= 0);
		
		// return name.indexOf(search) >= 0;
	// }).map((user) => {
		// return (
			// <div key={user.id}>
				// <p><strong>{user.name}</strong></p>
			// </div>
		// );
	// });
	
	
	return (
		<Wrapper>
			{renderUsers.length > 0 ? (
					renderUsers 
				) : (
					<NotFount>User not found!</NotFount> 
				)
			}
		</Wrapper>
	);
};



const SearchUsers = HigherOrderComponent(UsersList, 'users');


export default SearchUsers;


