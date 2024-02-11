import ComparePage from "../pages/ComparePage/ComparePage";
import DetailPage from "../pages/DetailPage/DetailPage";
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
  {
    url: "/car/:id",
    component: DetailPage,
  },
  {
    url: "/compare",
    component: ComparePage,
  },
];
