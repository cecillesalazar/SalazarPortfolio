import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux';
import store from './store';
import Menu from '../src/components/menu';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
  <Provider store={store}>
    <Menu />
  </Provider>, document.getElementById('root'));
registerServiceWorker();
