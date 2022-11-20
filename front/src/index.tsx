import React from 'react';
import ReactDOM from 'react-dom/client';

import { configureStore } from "@reduxjs/toolkit";
import { Provider } from "react-redux";
import rootReducer from "./store";
import './index.css';
import App from './App';

const store = configureStore({ reducer: rootReducer });

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);
