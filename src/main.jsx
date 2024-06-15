import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App, { appLoader } from "./App.jsx";
import About from "./routes/About/About.jsx";
import Contacts from "./routes/Contacts/Contacts.jsx";
import DefaultLayout from "./Layouts/DefaultLayout/DefaultLayout.jsx";
import ErrorPage from "./routes/ErrorPage/ErrorPage.jsx";
import Movie, { movieLoader } from "./routes/Movie/Movie.jsx";
import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

// New block - start
const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <App />,
        loader: appLoader,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/contacts",
        element: <Contacts />,
      },
      {
        path: "catalog/:id",
        /* i : creano il valore dinamico, la parola dopo è un pippo */
        element: <Movie />,
        loader: movieLoader,
      },
    ],
  },
]);
// New block - end

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>
);
