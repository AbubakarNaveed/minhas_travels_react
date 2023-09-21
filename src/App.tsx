import React from "react";
import { createBrowserRouter, RouterProvider, Link } from "react-router-dom";
import "./App.css";
import Home from "./pages/Home";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "*",
    element: (
      <div className="flex h-[100vh] items-center justify-center bg-white">
        <div className="flex flex-col text-start items-start gap-1">
          <h1 className="text-4xl font-bold">ERROR 404</h1>
          <h2 className="text-red-900">Page does not exist</h2>
          <button
            type="button"
            className="px-6 py-2 font-semibold rounded bg-blue-400 text-white text-base"
          >
            <Link to="/">Go Back</Link>
          </button>
        </div>
      </div>
    ),
  },
  {
    path: "/under-construction",
    element: (
      <div className="flex h-[100vh] items-center justify-center bg-white">
        <div className="flex flex-col text-start items-start gap-1">
          <h1 className="text-3xl font-bold">Under-construction</h1>
          <h2 className="text-red-900">page does not exist yet :-)</h2>
          <button
            type="button"
            className="px-6 py-2 font-semibold rounded bg-blue-400 text-white text-base"
          >
            <Link to="/">Go Back</Link>
          </button>
        </div>
      </div>
    ),
  },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
