import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import "./index.css";
import reportWebVitals from "./reportWebVitals";
import { IndexRouters } from "./routes";
import { BrandsRoutes } from "./routes/BrandsRoutes";
import { ProductsRouter } from "./routes/ProductRoutes";

const router = createBrowserRouter(
  [...IndexRouters, ...BrandsRoutes, ...ProductsRouter],
  { basename: process.env.PUBLIC_URL }
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App>
      <RouterProvider router={router}></RouterProvider>
    </App>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
