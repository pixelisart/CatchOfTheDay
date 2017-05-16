import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

	// Render() {} is same as:
	/*
	function render(){

	}
	*/

	render() {
		// This is a comment
		return (
			// This is a comment
			<form className="store-selector">
			
				{ /* This is a comment */ }

				<h2>Please Enter A Store</h2>
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} />
				<button type="submit">Visit Store -></button>
			</form> 
		)
	}
}

// Line below allows to go back to the index.js file and be able to import this component.
export default StorePicker; 