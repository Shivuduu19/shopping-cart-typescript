import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import GlobalStyle from "./themes/GlobalStyle.jsx";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./pages/Home.jsx";
import Products from "./pages/products/Products.jsx";
import Contact from "./pages/Contact.jsx";
import "./index.css";
// import { LogIn } from "./pages/login/LogIn.jsx";
import ErrorPage from "./ErrorPage.js";
import Protected from "./components/Protected.tsx";
import SignInPage from "./pages/login/LogIn.js";
import SignUpPage from "./components/SignUp.js";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      { path: "/sign-in", element: <SignInPage /> },
      { path: "/sign-up", element: <SignUpPage /> },
      {
        element: <Protected />,
        path: "protected",
        children: [
          { path: "products", element: <Products /> },
          { path: "contact", element: <Contact /> },
        ],
      },
      // { path: "login", element: <LogIn /> },
    ],
  },
]);
ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <GlobalStyle />
    <RouterProvider router={router} />
  </React.StrictMode>
);
