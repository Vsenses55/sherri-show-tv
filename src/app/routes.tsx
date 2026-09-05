import { createBrowserRouter } from "react-router";
import MyPage from "./MyPage";

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <MyPage />,
    },
  ],
  {
    basename: import.meta.env.BASE_URL,
  },
);
