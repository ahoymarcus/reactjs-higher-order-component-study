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


const todosURL = 'https://jsonplaceholder.typicode.com/todos';

const TodoList = ({ data }) => {
	
	const renderTodos = data.map((todo) => {
			return (
				<div key={todo.id}>
					<p>
						<SpanId>User Id: {todo.userId}</SpanId>:
						Task: {todo.title}
					</p>
				</div>
			);
	});
	
	
	return (
		<div>
			{renderTodos.length > 0 ? (
					renderTodos 
				) : (
					<NotFount>Empty list!</NotFount> 
				)
			}
		</div>
	);
};



const SearchTodos = HigherOrderComponent(TodoList, 'todos');


export default SearchTodos;


