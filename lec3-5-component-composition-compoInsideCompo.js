import React from "react";
import ReactDOM from "react-dom/client";

const C1 = () => <h1>hello world</h1>;

const C2 = () => (
  <div>
    <C1 />
    <h2>using component-composition</h2>
  </div>
);

// another way to inject component inside another component
const C3 = () => (
  <div>
    {C1()}
    <C1 />
    <C1></C1>
    <h2>another way to inject a component inside another component.</h2>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<C3 />);
