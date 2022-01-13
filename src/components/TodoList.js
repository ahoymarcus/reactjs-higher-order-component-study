import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// HigherOrderComponent
import HigherOrderComponent from '../containers/HigherOrderComponent';



// styles
const NotFount = styled.p`
	color: red;
	font-weight: bold;
	margin-left: 15px;
`;


const todosURL = 'https://jsonplaceholder.typicode.com/todos';

const TodoList = ({ data }) => {
	
	const renderTodos = data.map((todo) => {
			return (
				<div key={todo.userId}>
					<p><strong>{todo.title}</strong></p>
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


