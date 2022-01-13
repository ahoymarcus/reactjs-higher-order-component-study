import React from 'react';



const HigherOrderComponent = (WrappedComponent, entity) => {
	
	return class extends React.Component {
		state {
			data: [],
			search: '',
		};
		
		
		render() {
			
		};
	};
};



export default HigherOrderComponent;


