import React, { Suspense } from "react";
import { BrowserRouter } from "react-router-dom";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import store from './redux/store'
import "./assets/less/yoda-theme.less";
import App from "./App";

ReactDOM.createRoot(document.getElementById('root')).render(
  <Suspense fallback="loading">
    <Provider store={store}>
      <BrowserRouter >
        <App />
      </BrowserRouter>
    </Provider>
  </Suspense>
);
