import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <main className="flex justify-center">
      <div className="max-w-[1224px]">
        <Outlet />
      </div>
    </main>
  );
};

export default Layout;
