import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RecoilRoot } from "recoil";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Counter from "./pages/Counter.jsx";
import Signup from "./pages/Signup.jsx";
import NavBar from "./components/NavBar.jsx";
import Layout from "./pages/Layout.jsx";
import Login from "./pages/Login.jsx";
import Boards from "./pages/Board.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { path: "/", element: <Counter /> },
      { path: "/join", element: <Signup /> }, // 해당 path를 들어가면 element를 띄울 것이다.
      { path: "/login", element: <Login /> },
      { path: "/board", element: <Boards /> },
    ],
  },
  // { path: "/", element: <Counter /> },
  // { path: "/join", element: <Signup /> }, // 해당 path를 들어가면 element를 띄울 것이다.
  // { path: "/head", element: <NavBar /> },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RecoilRoot>
    <RouterProvider router={router} />
  </RecoilRoot>
);
