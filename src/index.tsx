import ReactGA from "react-ga";
import React, { StrictMode } from "react";
import { render } from "react-dom";

import App from "@app/App";
import "@app/global.css";

const target = document.getElementById("app");

render(
  <StrictMode>
    <App />
  </StrictMode>,
  target
);

ReactGA.initialize(import.meta.env.SNOWPACK_PUBLIC_GOOGLE_ANALYTICS_ID);
ReactGA.pageview(window.location.pathname + window.location.search);
