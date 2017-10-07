import React from 'react';
import ReactDOM from 'react-dom';
import './assets/index.css';
import App from './components/UsersList';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
