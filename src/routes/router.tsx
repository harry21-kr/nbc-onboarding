import { createBrowserRouter } from "react-router-dom";
import { getPosts } from "../api/getPosts";
import { getUsers } from "../api/getUsers";
import Layout from "../Layout";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import MyPage from "../pages/MyPage";

const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
        loader: async () => {
          const [postList, userList] = await Promise.all([
            getPosts(),
            getUsers(),
          ]);
          return { postList, userList };
        },

        element: <HomePage />,
      },
      { path: "/login", element: <LoginPage /> },
      { path: "/my/:userId", element: <MyPage /> },
    ],
  },
]);

export default router;
