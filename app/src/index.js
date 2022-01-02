import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { BrowserRouter } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory({
  basename: ".",
});

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <BrowserRouter history={browserHistory}>
        <App />
      </BrowserRouter>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
