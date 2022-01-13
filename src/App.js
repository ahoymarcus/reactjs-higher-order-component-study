// https://www.youtube.com/watch?v=tsCoBd7xSK8
//  0hs 11' 10''  
import React from 'react';

// components
import UsersList from './containers/UsersList';
import TodoList from './containers/TodoList';

// styles
import './App.css';




const App = () => {
	
	
	
	return (
		<div className="app">
			<h1>Higher Order Component</h1>
			<div className="section">
				<UsersList />
				<TodoList />
			</div>
		</div>
	);
};


export default App;




