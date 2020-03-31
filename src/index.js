import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import * as serviceWorker from './serviceWorker';
import { HashRouter } from 'react-router-dom';
import './styles/style.css';
/* Polyfills */
import 'core-js/es/map';
import 'core-js/es/set';
import 'core-js/es/promise';
import 'raf/polyfill';

ReactDOM.render((<HashRouter><App /></HashRouter>), document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
