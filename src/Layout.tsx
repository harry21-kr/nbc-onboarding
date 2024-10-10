import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import useWatchAccountStatus from "./hooks/useWatchAccountStatus";

const Layout = () => {
  useWatchAccountStatus();
  return (
    <main>
      <Header />
      <div className="max-w-[800px] mt-[60px] mx-auto">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
