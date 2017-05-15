import React from 'react';
import Header from './Header'; //Because we are using the <Header /> component here
import Order from './Order';
import Inventory from './Inventory';

class App extends React.Component {
	render() {
		return(
			<div className="catch-of-the-day">
				<div className="menu">
					{ /* Header Component */ }
					<Header />
				</div>
				<Order />
				<Inventory />
			</div>
		)
	}
}

export default App;