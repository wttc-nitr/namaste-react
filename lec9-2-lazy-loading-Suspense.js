import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Body from "./components/Body";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import Menu from "./components/Menu";


import { lazy, Suspense } from "react";
// import Grocery from "./components/Grocery";

const AppLayout = () => {
    
  return (
    <div className="app">
      <Header />
      <Outlet />
    </div>
  );
};

/** dynamic importing */
const Grocery = lazy(() => import('./components/Grocery'));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        /** this is lazy loading.......... */
        path: '/grocery',
        element: <Suspense fallback={<h2>loading groceries...</h2>}>
            <Grocery/>
          </Suspense>
      },
      {
        path: "/restaurants/:resId",
        element: <Menu />,
      },
    ],
    errorElement: <Error />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter} />);

/**
 *  lazy loading is also called:
 *  - Dynamic Bundling
 *  - Chunking
 *  - Code Splitting
 *  - Lazy Loading
 *  - On-demand Loading
 *  - Dynamic Import
 */
