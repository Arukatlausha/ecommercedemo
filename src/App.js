import PropTypes from 'prop-types'; 
import React from 'react'; 


// Component 
class ComponentExample extends React.Component{ 
	render(){ 
		return( 
				<div> 
				
					{/* printing all props */} 
					<h1> 
						{this.props.arrayProp} 
						<br /> 

						{this.props.stringProp} 
						<br /> 

						{this.props.numberProp} 
						<br /> 

						{this.props.boolProp} 
						<br /> 
					</h1> 
				</div> 
			); 
	} 
} 

// Validating prop types 
ComponentExample.propTypes = { 
	arrayProp: PropTypes.array, 
	stringProp: PropTypes.string, 
	numberProp: PropTypes.number, 
	boolProp: PropTypes.bool, 
} 

// Creating default props 
ComponentExample.defaultProps = { 

	arrayProp: ['Ram', 'Shyam', 'Raghav'], 
	stringProp: "GeeksforGeeks", 
	numberProp: "10", 
	boolProp: true, 
} 

export default ComponentExample;