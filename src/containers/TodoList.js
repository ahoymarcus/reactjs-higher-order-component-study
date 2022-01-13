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
	color: purple;
`;


const todosURL = 'https://jsonplaceholder.typicode.com/todos';

const TodoList = () => {
	const [ todos, setTodos ] = useState([]);
	const [ search, setSearch ] = useState('');
	//console.log(search);
	
	
	const fetchTodos = async (url) => {
		try {
			const response = await fetch(url);
			const data = await response.json();
			
			console.log(data);
			
			setTodos(data);
		} catch (err) {
			console.log(err);
		}
	};
	
	
	useEffect(() => {
		fetchTodos(todosURL);
	}, []);
	
	
	const renderTodos = todos.map((todo) => {
		return (
			<div key={todo.id}>
				<p><strong>{todo.title}</strong></p>
			</div>
		);
	});
	
	
	let filteredTodos = todos.filter(({ title }) => {
		console.log(title.indexOf(search) >= 0);
		
		return title.indexOf(search) >= 0;
	})
	.slice(0, 10)
	.map((todo) => {
		return (
			<div key={todo.useriId}>
				<p><strong>{todo.title}</strong></p>
			</div>
		);
	});
	
	
	return (
		<Wrapper>
			<Heading2>TodoList</Heading2>
			<Input 
				type="text" 
				value={search}
				placeholder="Search users"
				onChange={(e) => setSearch(e.target.value)}
			/>
			{filteredTodos.length > 0 ? (
					filteredTodos 
				) : (
					<NotFount>User not found!</NotFount> 
				)
			}
		</Wrapper>
	);
};



export default TodoList;


