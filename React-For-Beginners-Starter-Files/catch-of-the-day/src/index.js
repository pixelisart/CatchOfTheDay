// Load everything from 'react' into the variable called, React
import React from 'react';
import { render } from 'react-dom';

import StorePicker from './components/StorePicker';

//render(name of component, what element should the content of this component render out to);
//render(<StorePicker/>, document.getElementById('main'));
render(<StorePicker/>, document.querySelector('#main'));