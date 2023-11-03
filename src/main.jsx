import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./index.css";
import Root from "./components/Root";
import Home from "./components/pages/Home";
import Login from "./components/pages/Login";
import Register from "./components/pages/Register";
import AuthProvider from "./components/AuthProvider";
import Checkout from "./components/pages/Checkout";
import MyBook from "./components/pages/MyBook";
import PrivateRoute from "./components/PrivateRoute";

const router = createBrowserRouter([
  {
    path: "/", element: <Root />,
    children: [
      { path: "/", element: <Home />, loader: () => fetch('http://localhost:5000/services') },
      { path: "/login", element: <Login /> },
      { path: "/register", element: <Register /> },
      { path: "/checkout/:id", element: <PrivateRoute><Checkout /></PrivateRoute>, loader: ({ params }) => fetch(`http://localhost:5000/services/${params.id}`) },
      { path: 'mybook', element: <PrivateRoute><MyBook /></PrivateRoute> }

    ]
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode><AuthProvider><RouterProvider router={router} /></AuthProvider></React.StrictMode>
);