import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

import { Router, Route } from "react-router-dom";

import { HelmetProvider } from "react-helmet-async";
import { createBrowserHistory } from "history";

const browserHistory = createBrowserHistory({
  basename: ".",
});

ReactDOMClient.createRoot(document.getElementById("root")).render(
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
  </React.StrictMode>
);
