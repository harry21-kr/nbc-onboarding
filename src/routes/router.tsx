import { createBrowserRouter } from "react-router-dom";
import { getPosts } from "../api/getPosts";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyPage from "../pages/MyPage";

const router = createBrowserRouter([
  {
    path: "/",
    loader: getPosts,
    element: <HomePage />,
  },
  { path: "/login", element: <LoginPage /> },
  { path: "/my/:userId", element: <MyPage /> },
]);

export default router;
