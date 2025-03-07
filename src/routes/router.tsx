import * as React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Adidas } from "../components/pages/Adidas";
import { Puma } from "../components/pages/Puma";
import { Croses } from "../components/pages/Croses";
import { Abibas } from "../components/pages/Abibas";
import { Prices } from "../components/pages/Prices";

const PATH = {
    ADIDAS: '/adidas',
    PUMA: '/puma',
    ABIBAS: '/abibas',
    PRICES: '/prices'
    

} as const

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App/>,
    errorElement: <Error404/>,
    children: [
        {
          path: PATH.ADIDAS,
          element: <Adidas />,
        }, {
            path: PATH.PUMA,
          element: <Puma/>,
        }, {
            path: PATH.ABIBAS,
            element: <Abibas/>,
        }, {
            path: PATH.PRICES,
            element: <Prices/>,
        }],
  },
  {
    path: "about",
    element: <div>About</div>,
  },
]);

