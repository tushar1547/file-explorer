import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import { createStore, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage';
// import { PersistGate } from 'redux-persist/integration/react'

import App from './components/App/App';

import "./scss/app.scss";

import folderReducer from './store/reducers/folders';

// const persistConfig = {
//   key: 'root',
//   storage: storage,
// };

// console.log('persistConfig', persistConfig);
const rootReducer = combineReducers({
  foldersData: folderReducer,
});

// const pReducer = persistReducer(persistConfig, rootReducer);
// const middleware = applyMiddleware(thunk);

// const store = createStore(pReducer, {}, middleware);
// console.log('store', store);
// const persistor = persistStore(store);
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.render(
  <Provider store={store}>
    {/* <PersistGate loading={null} persistor={persistor}> */}
      <App />
    {/* </PersistGate> */}
  </Provider>,
  document.getElementById('root')
);
