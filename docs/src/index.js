import React from "react";
import { render } from "react-dom";
import { HashRouter } from "react-router-dom";
import Docs from "./Docs";

render(
  <HashRouter>
    <Docs />
  </HashRouter>,
  document.getElementById("root")
);
