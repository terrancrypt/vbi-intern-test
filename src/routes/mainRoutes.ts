import HomePage from "../pages/HomePage/HomePage";

type RouteConfig = {
  url: string;
  component: React.FC;
};

export const mainRoutes: RouteConfig[] = [
  {
    url: "/",
    component: HomePage,
  },
];
