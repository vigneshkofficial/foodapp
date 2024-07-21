import React, { createElement } from "react";
import ReactDOM from "react-dom";
const heading=createElement("h1",{},"Hello from react!");
const root=ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);