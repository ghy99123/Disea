import React, { FC } from "react";
import { useRoutes } from "react-router-dom";
import { Login, Register } from "./pages/auth";
import { Social } from "./pages/social";
import type { RouteObject } from "react-router-dom";

const AppRouter: FC = () => {
  const routes: RouteObject[] = [
    {
      path: "/",
      element: <Login />,
    },
    {
      path: "/register",
      element: <Register />,
    },
    {
      path: "/dashboard",
      element: <Social />,
    },
  ];

  return useRoutes(routes);
};

export default AppRouter;
