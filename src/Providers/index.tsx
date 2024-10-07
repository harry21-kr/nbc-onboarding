import { RouterProvider } from "react-router-dom";
import router from "../routes/router";
import QueryProvider from "./QueryProvider";

const Providers = () => {
  return (
    <QueryProvider>
      <RouterProvider router={router} />
    </QueryProvider>
  );
};

export default Providers;
