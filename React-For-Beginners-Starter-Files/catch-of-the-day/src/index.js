// Load everything from 'react' into the variable called, React
import React from 'react';
import { render } from 'react-dom';
import './css/style.css';

import StorePicker from './components/StorePicker';
import App from './components/App';
import Header from './components/Header';

// RENDER THE CONTENTS OF THE STOREPICKER COMPONENT TO #MAIN DIV
//render(name of component, what element should the content of this component render out to);
//render(<StorePicker/>, document.getElementById('main'));
render(<StorePicker/>, document.querySelector('#main'));