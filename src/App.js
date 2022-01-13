// https://www.youtube.com/watch?v=tsCoBd7xSK8
//  0hs 11' 10''  
import React from 'react';

// components
import SearchUsers from './components/UsersList';
import SearchTodos from './components/TodoList';

// styles
import './App.css';




const App = () => {
	
	
	
	return (
		<div className="app">
			<h1>Higher Order Component</h1>
			<div className="section">
				<SearchUsers />
				<SearchTodos />
			</div>
		</div>
	);
};


export default App;




