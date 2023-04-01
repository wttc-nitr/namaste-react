import React from "react";
import ReactDOM from "react-dom/client";

// className="head" after transpilation converts to class="head".
// if class="head", then there'll be a warning
const jsxHeading = <h1 className="head">hello world using JSX</h1>;
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
