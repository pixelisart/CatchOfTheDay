import React from 'react';
import { getFunName } from '../helpers';

class StorePicker extends React.Component {

	// Render() {} is same as:
	/*
	function render(){

	}
	*/

	// Render () method is bound to the class that you are in which is the StorePicker component
	// Other custom method created will not be bound to the class StorePicker component.  Therefore, we need to find a way to bind them to the StorePicker component so that when "this" is used "this.goToStore", it will equal to the StorePicker component.

	// In ES6, methods are usually separated by commas, methods does not need commas.

	// Use constructor of the component is a bunch of codes that runs when the component is created.

	//-----------------------------------
	// ONE WAY
	constructor(){
		super();  // super() first creates the React.Component then we extend the StorePicker component by adding our own custom methods
		this.goToStore = this.goToStore.bind(this);  // This looks for the goToStore method and it sets itself to its own and then binds it to "this" which is inside the constructor.  The "this" inside the bind(this) is equal to the StorePicker component.  This will need to be done for every custom components.
	}
	//-----------------------------------

	//-----------------------------------
	// SECOND WAY
	// go to onSubmit and assign the following:
	//
	// onSubmit={this.goToStore.bind(this)}
	//
	//-----------------------------------


	goToStore(event) {
		event.preventDefault();  // This prevents the default from happening which is prevent the form from submitting (or page from refreshing.)
		console.log('You changed the URL');

		// First, grab the text from the box
		//const value = $('input').val();  // jQuery way by touching the DOM
		//console.log(this.storeInput);  // This outputs NULL
		//console.log(this); // This outputs NULL, if you want "this" to equal StorePicker component, there's a couple ways and one of them is using a "constructor"
		console.log(this.storePickerInput);  //This prints the actual input value here
		console.log("From goToStore - this.storePickerInput.value - " + this.storePickerInput.value); //This prints out the value via reference
			// Use "ref" to grab the text from the <input>


		// Second, we're going to transition from / to /store/:storeid
		
	}

	render() {
		// This is a comment
		return (
			// This is a comment
			// onSubmit event is used because a <form> is used with the <input> tag.
			// <form className="store-selector" onSubmit={this.goToStore.bind(this)}>
			<form className="store-selector" onSubmit={this.goToStore}>
				<h2>Please Enter A Store</h2>

				{ /* When the <input> is rendered onto the page, it's going to put a "ref" reference to the <input> onto the class StorePicker itself.  */ }
				<input type="text" required placeholder="Store Name" defaultValue={getFunName()} ref={(input) => {this.storePickerInput = input}} />
				<button type="submit">Visit Store -></button>
			</form> 
		)
	}
}

// Line below allows to go back to the index.js file and be able to import this component.
export default StorePicker; 