import React from 'react';
import ReactDom from 'react-dom';
import App from './components/App.js';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import rootReducer from './Reducers/index.js';

const store = createStore(rootReducer);

ReactDom.render(
    <Provider store={store}>
    <App/>
    </Provider>,
    document.getElementById("root")
    );

export default store;