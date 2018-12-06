import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/font-awesome/css/font-awesome.min.css';
import './styles/style.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import { HashRouter } from 'react-router-dom';

ReactDOM.render((<HashRouter><App /></HashRouter>), document.getElementById('root'));
registerServiceWorker();
