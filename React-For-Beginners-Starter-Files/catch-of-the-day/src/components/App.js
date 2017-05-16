import React from 'react';
import Header from './Header'; // Because we are using the <Header /> component here
import Order from './Order'; // Because we are using the <Order /> component here
import Inventory from './Inventory'; // Because we are using the <Inventory /> component here

class App extends React.Component {
	render() {
		console.log(this);
		return(
			<div className="catch-of-the-day">
				<div className="menu">
					{ /* Header Component */ }
					<Header tagline="Fresh Seafood Market" />
				</div>

				{ /* Order Component*/ }
				<Order />
				
				{ /* Inventory Component */ }
				<Inventory />
			</div>
		)
	}
}

export default App;