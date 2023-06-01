// React functional component -> JS function returning some JSX
import React from "react";
import ReactDOM from "react-dom/client";

// functional component start with Capital letter - convention
const Heading1 = () => {
  return <h1>functional component usign arrow function with return</h1>;
};

/**
 * below Heading2 is same as: (arrow function with a single statement -> no need to use {} )
 *  const Heading2 = () => <h1> functional component using arrow function without return</h1> ;
 */
const Heading2 = () => (
  <h1>functional component using arrow function without return</h1>
);

const MultiLineWithoutBraces = () => (
  <h1>functional component, multi-line without curly braces</h1>
);

const UsingFunctionKeyword = function () {
  return (
    <div>
      <h1>functional component using function keyword</h1>
    </div>
  );
};

const Heading3 = <h1>JSX multi-line.</h1>;

const Heading4 = (
  <div>
    <h1> another one, JSX multi-line</h1>
  </div>
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<Heading1 />);

// this was also valid
// root.render(multiLineWithoutBraces());
