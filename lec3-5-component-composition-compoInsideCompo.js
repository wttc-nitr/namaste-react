import React from "react";
import ReactDOM from "react-dom/client";

const C1 = () => (
  <h1>hello world</h1>
);

const C2 = () => (
  <div>
    <C1/>
    <h2>using component-composition</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<C2/>);