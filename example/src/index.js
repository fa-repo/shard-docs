import React from "react";
import { render } from "react-dom";
import { BrowserRouter } from "react-router-dom";
import Documentation from "./Documentation";

render(
  <BrowserRouter>
    <Documentation />
  </BrowserRouter>,
  document.getElementById("root")
);
