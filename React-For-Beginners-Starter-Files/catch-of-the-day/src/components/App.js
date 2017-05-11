import React from 'react';
import Header from './Header'; //Because we are using the <Header /> component here

class App extends React.Component {
	render() {
		return(
			<div className="catch-of-the-day">
				<div className="menu">
					{ /* Header Component */ }
					<Header />
				</div>


			</div>
		)
	}
}

export default App;