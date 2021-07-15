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
import store from "./redux/store";

ReactDOM.render(
  <Provider store={store}>
    <Router>
        <ScrollToTop />
        <App />
    </Router>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
