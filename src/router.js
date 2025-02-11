import { createBrowserRouter } from "react-router-dom";
import Home from "./pages/home";
import Upcoming from "./pages/upcoming";
import TopRated from "./pages/topRated";
import Searched from "./pages/searched";
import MovieDetail from "./pages/movieDetail";
import HomeLayout from "./layout/homeLayout";

const router = createBrowserRouter([
  {
    element: <HomeLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/upcoming",
        element: <Upcoming />,
      },
      {
        path: "/top-rated",
        element: <TopRated />,
      },
      {
        path: "/movie/:id",
        element: <MovieDetail />,
      },

      {
        path: "/search/:searchTerm",
        element: <Searched />,
      },
    ],
  },
]);
export default router;
