import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
//import { handleInitialData } from '../src/actions/getdata';
import reducers from './reducers'
import middleware from './middleware'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducers, middleware)

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    , document.getElementById('root'));