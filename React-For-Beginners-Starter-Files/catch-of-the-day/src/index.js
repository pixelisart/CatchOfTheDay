// Load everything from 'react' into the variable called, React
import React from 'react';
import { render } from 'react-dom'; // Only used once and placed inside the index.js or main.js file.  Does not need to be added to components.
import { BrowserRouter, Match, Miss } from 'react-router';



import './css/style.css';

import StorePicker from './components/StorePicker';
import App from './components/App';
import Header from './components/Header';
import NotFound from './components/NotFound';

//Stateless function component
const Root = () => {
	return (
		<BrowserRouter>
			<div>
				<Match exactly pattern="/" component={StorePicker} />
				<Match pattern="/store/:storeId" component={App} />
				<Miss component={NotFound} />
			</div>
		</BrowserRouter>
	)
}

// RENDER THE CONTENTS OF THE STOREPICKER COMPONENT TO #MAIN DIV
//render(name of component, what element should the content of this component render out to);
//render(<App/>, document.getElementById('main'));
//render(<StorePicker/>, document.querySelector('#main'));
render(<Root/>, document.getElementById('main')); 