import React from "react";
import ReactDOM from "react-dom/client";

// JSX - html-like syntax or xml-like syntax
const jsxHeading = (<h1 className="head">
  hello world using JSX
  </h1>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(jsxHeading);
