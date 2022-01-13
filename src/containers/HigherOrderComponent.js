import React from 'react';



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
			
			
			let filteredData = data.filter((d) => {
				if (entity === 'users') {
					const { name } = d;
					
					return name.indexOf(search) >= 0;
				}
				if (entity === 'todos') {
					const { title } = d;
					
					return title.indexOf(search) >= 0;
				}
			});
			
			
			return (
				<div>
					<h2>{entity}</h2>
					<input 
						type="text" 
						value={search}
						placeholder="Search users"
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


