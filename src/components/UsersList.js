import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// HigherOrderComponent
import HigherOrderComponent from '../containers/HigherOrderComponent';



// styles
const SpanId = styled.span`
	color: green;
`;

const NotFount = styled.p`
	color: red;
	font-weight: bold;
	margin-left: 15px;
`;


const usersURL = 'https://jsonplaceholder.typicode.com/users';

const UsersList = ({ data }) => {
	
	const renderUsers = data.map((user) => {
		return (
			<div key={user.id}>
				<p>
					<SpanId>Id: {user.id}</SpanId>: <strong>{user.name}</strong>
				</p>
			</div>
		);
	});
	
	
	return (
		<div>
			{renderUsers.length > 0 ? (
					renderUsers 
				) : (
					<NotFount>User not found!</NotFount> 
				)
			}
		</div>
	);
};



const SearchUsers = HigherOrderComponent(UsersList, 'users');


export default SearchUsers;


