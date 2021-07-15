import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// import Router
import { BrowserRouter as Router} from 'react-router-dom';
// "router component" to scroll to top in each render
import ScrollToTop from './components/scrollToTop/ScrollToTop';
// redux
import { Provider } from "react-redux";
import {store, persistor} from "./redux/store";
// redux-persist
import { PersistGate } from 'redux-persist/integration/react'

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <ScrollToTop />
        <PersistGate persistor={persistor}>
          <App />
        </PersistGate>
    </Router>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
