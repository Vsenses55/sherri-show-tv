import { createBrowserRouter } from "react-router";
import DesignSystem from "./DesignSystem";
import MyPage from "./MyPage";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MyPage />,
  },
  {
    path: "/design-system",
    element: <DesignSystem />,
  },
]);
