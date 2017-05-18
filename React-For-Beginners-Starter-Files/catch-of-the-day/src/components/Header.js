import React from 'react';

// class Header extends React.Component {
// 	render() {
// 		console.log(this);
// 		return (
// 			<header className="top">
// 				<h1>
// 					Catch 
// 					<span className="ofThe">
// 						<span className="of">of</span>
// 						<span className="the">the</span>
// 					</span>
// 					Day
// 				</h1>
// 				<h3 className="tagline"><span>{this.props.tagline}</span></h3>
// 			</header>
// 		)
// 	}
// }

//STATELESS FUNCTION - 
//Sometimes a component can only do something simple such as rendering out some html to the DOM.  
//When this is the case, a react full component is not necessary and, therefore, a stateless component is used.  
//This means that if you don't need other methods other than render(), it doesn't make sense to use the entire react component.  
//We can simply use a stateless functional component to render out a JSX.
// Same as function Header(){}
const Header = (props) => {
	return (
		<header className="top">
			<h1>
				Catch 
				<span className="ofThe">
					<span className="of">of</span>
					<span className="the">the</span>
				</span>
				Day
			</h1>
			<h3 className="tagline"><span>{props.tagline}</span></h3>
		</header>
	)
}

export default Header;