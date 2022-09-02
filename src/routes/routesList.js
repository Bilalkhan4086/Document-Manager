import { lazy } from "react";

const routes = [
  {
    exact: true,
    path: "/404",
    component: lazy(() => import("../views/404")),
  },
  {
    exact: true,
    path: "/",
    component: lazy(() => import("../views/home")),
  },
  {
    exact: true,
    path: "/date",
    component: lazy(() => import("../views/date")),
  },
];

export default routes;
