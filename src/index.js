import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';

import App from './components/App/App';

import "./scss/app.scss";

import folderReducer from './store/reducers/folders';

const rootReducer = combineReducers({
  foldersData: folderReducer,
});
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);
