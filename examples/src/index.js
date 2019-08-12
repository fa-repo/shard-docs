import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import Documentation from "./Documentation";

render(
  <HashRouter>
    <Documentation />
  </HashRouter>,
  document.getElementById("root")
);
