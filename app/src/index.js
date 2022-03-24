import React from "react";
import * as ReactDOMClient from "react-dom/client";
import "./index.css";
import App from "./App";

import { HelmetProvider } from "react-helmet-async";
import ThreeRouter from "./Components/Routes/ThreeRouter";

import { history } from "./Components/Routes/History";

/*ReactDOMClient.hydrateRoot(
  document.getElementById("root"),
  <React.StrictMode>
    <HelmetProvider>
      <ThreeRouter history={history}>
        <App />
      </ThreeRouter>
    </HelmetProvider>
  </React.StrictMode>
);*/

ReactDOMClient.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <HelmetProvider>
      <ThreeRouter history={history}>
        <App />
      </ThreeRouter>
    </HelmetProvider>
  </React.StrictMode>
);
