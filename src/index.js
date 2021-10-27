import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { StateContextProvider } from "./StateProvider";
import Productsdata from './data/productData';
ReactDOM.render(
  <StateContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
  </StateContextProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();