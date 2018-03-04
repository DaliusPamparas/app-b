import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import ReactDOM from 'react-dom';
import 'semantic-ui-css/semantic.min.css';
import './index.css';
import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
// https://react.semantic-ui.com/
ReactDOM.render(
<BrowserRouter>
  <App />
</BrowserRouter>
, document.getElementById('root'));
registerServiceWorker();
