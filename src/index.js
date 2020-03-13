import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter} from 'react-router-dom'
import reducers from './reducers'
import middleware from './middleware'
import { createStore } from 'redux'
import { Provider } from 'react-redux'

const store = createStore(reducers, middleware)

ReactDOM.render(
    <Provider store={store}>
       <BrowserRouter><App />
</BrowserRouter>
    </Provider>
    , document.getElementById('root'));