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
  {
    exact: true,
    path: "/card",
    component: lazy(() => import("../views/card")),
  },
  {
    exact: true,
    path: "/chart",
    component: lazy(() => import("../views/chart")),
  },
  {
    exact: true,
    path: "/hchart",
    component: lazy(() => import("../views/highchart")),
  },
];

export default routes;
