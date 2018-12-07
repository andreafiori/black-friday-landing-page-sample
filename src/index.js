import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';
import './styles/style.css';
/* IE Polyfills */
import 'core-js/es6/map';
import 'core-js/es6/set';
import 'raf/polyfill';
import 'core-js/es6/promise';

ReactDOM.render((<HashRouter><App /></HashRouter>), document.getElementById('root'));
registerServiceWorker();
