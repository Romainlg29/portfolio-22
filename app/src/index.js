import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";

import { Router, Route } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory({
  basename: ".",
});

ReactDOM.render(
  <React.StrictMode>
    <HelmetProvider>
      <Router history={browserHistory}>
        <Route
          component={({ history }) => {
            window.appHistory = history;
            return <App />;
          }}
        />
      </Router>
    </HelmetProvider>
  </React.StrictMode>,
  document.getElementById("root")
);
