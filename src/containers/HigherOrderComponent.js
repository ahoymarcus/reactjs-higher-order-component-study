import React from 'react';
import styled from 'styled-components';




// styles
const Input = styled.input`
	margin: 20px 0px;
	padding: 5px;
`;

const Heading2 = styled.h2`
	color: gray;
`;


const HigherOrderComponent = (WrappedComponent, entity) => {
	
	return class extends React.Component {
		state = {
			data: [],
			search: '',
		};
		
		componentDidMount() {
			const fetchData = async () => {
				try {
					const response = await fetch(`https://jsonplaceholder.typicode.com/${entity}`);
					const data = await response.json();
					
					console.log(data);
					
					this.setState({ ...this.state, data });
				} catch (err) {
					console.log(err);
				}
			};
			
			fetchData();
		}
		
		
		render() {
			let { search, data } = this.state;
			
			let filteredData = data.slice(0, 10)
				.filter((d) => {
				if (entity === 'users') {
					const { name } = d;
					
					return name.toLowerCase().indexOf(search) >= 0;
				}
				if (entity === 'todos') {
					const { title } = d;
					
					return title.indexOf(search) >= 0;
				}
			});
			
			
			
			return (
				<div>
					<Heading2>{entity}</Heading2>
					<Input 
						type="text" 
						value={search}
						placeholder={entity === 'users' ? 'Search users' : 'Search tasks'}
						onChange={(e) => this.setState({
							...this.state,
							search: e.target.value
						})}
					/>
					<WrappedComponent data={filteredData}></WrappedComponent>
				</div>
			);
		};
	};
};



export default HigherOrderComponent;


