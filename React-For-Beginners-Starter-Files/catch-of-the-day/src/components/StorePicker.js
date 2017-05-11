import React from 'react';

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
				<input type="text" required placeholder="Store Name" />
				<button type="submit">Visit Store -></button>
			</form> 
		)
	}
}

export default StorePicker;