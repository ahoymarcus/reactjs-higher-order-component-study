import React, { useState, useEffect } from 'react';
import styled from 'styled-components';

// HigherOrderComponent
import HigherOrderComponent from '../containers/HigherOrderComponent';



// styles
const Wrapper = styled.div`
	padding: 15px 30px 15px 0;
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
	color: purple;
`;


const todosURL = 'https://jsonplaceholder.typicode.com/todos';

const TodoList = ({ data }) => {
	// const [ todos, setTodos ] = useState([]);
	// const [ search, setSearch ] = useState('');
	
	
	// const fetchTodos = async (url) => {
		// try {
			// const response = await fetch(url);
			// const data = await response.json();
			
			// console.log(data);
			
			// setTodos(data);
		// } catch (err) {
			// console.log(err);
		// }
	// };
	
	
	// useEffect(() => {
		// fetchTodos(todosURL);
	// }, []);
	
	
	const renderTodos = data
		.slice(0, 10)
		.map((todo) => {
			return (
				<div key={todo.userId}>
					<p><strong>{todo.title}</strong></p>
				</div>
			);
	});
	
	
	// let filteredTodos = todos
		// .slice(0, 10)
		// .filter(({ title }) => {
			// console.log(title.indexOf(search) >= 0);
			
			// return title.indexOf(search) >= 0;
		// })
		// .map((todo) => {
			// return (
				// <div key={todo.useriId}>
					// <p><strong>{todo.title}</strong></p>
				// </div>
			// );
		// });
	
	
	return (
		<Wrapper>
			{renderTodos.length > 0 ? (
					renderTodos 
				) : (
					<NotFount>User not found!</NotFount> 
				)
			}
		</Wrapper>
	);
};



const SearchTodos = HigherOrderComponent(TodoList, 'todos');


export default SearchTodos;


