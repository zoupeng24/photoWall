import React from 'react';
import ReactDOM from 'react-dom';
import './demo/index.css';
// import App from './demo/App';
import App from './Entry';
import * as serviceWorker from './demo/serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
