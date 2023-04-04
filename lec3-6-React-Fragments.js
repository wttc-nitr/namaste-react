import React from "react";
import ReactDOM from "react-dom/client";

/**
 * JSX expressions must have one parent element. example :
 * const elem = (
 *  <div> hello </div>
 *  <div> world </div>
 * );
 *
 * One solution to solve the above problem is to wrap both divs in another div:
 * const elem = (
 *  <div>
 *    <div> hello </div>
 *    <div> world </div>
 *  </div>
 * );
 */

// now we can use React.Fragment, instead of a useless div

const elem = (
  <React.Fragment>
    <div>hello</div>
    <div>world</div>
  </React.Fragment>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(elem);
