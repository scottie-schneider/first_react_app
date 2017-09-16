import React from 'react';
import { render } from 'react-dom';
import './css/style.css';
import App from './components/App';
import Header from './components/Header';
import Order from './components/Order';
import Inventory from './components/Inventory';

import StorePicker from './components/StorePicker';

render(<App/>, document.querySelector('#main'));
