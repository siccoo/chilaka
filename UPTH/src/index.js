import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter, Route} from 'react-router-dom';
import './styles/index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';


ReactDOM.render((
    <BrowserRouter>
    
    <App />
    
    </BrowserRouter>

), document.getElementById('root'));
registerServiceWorker();


