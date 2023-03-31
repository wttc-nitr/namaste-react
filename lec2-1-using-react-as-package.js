/* <script src="./App.js" type="module"> -> normal browser scripts don't have import/export , so type=module is required*/

const React = require("react");
// const ReactDOM = require("react-dom/client");
// import React from "react";
import ReactDOM from "react-dom/client";

const heading = React.createElement("h1", {}, "hello world");

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);
