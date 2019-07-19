import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './serviceWorker';
import Shapes from "./Shapes"; 
import './index.css';
ReactDOM.render(<Shapes />, document.getElementById('root'));
serviceWorker.unregister();
