import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="fixed left-0 top-0 flex justify-center min-w-screen w-full h-[60px] backdrop-blur-sm border-b border-b-gray-500">
      <div className="max-w-[800px] w-full flex items-center justify-between">
        <Link
          to="/"
          className="text-xl font-semibold hover:opacity-50 active:opacity-20 transition-opacity bg-black text-white py-1 px-2 rounded-md"
        >
          Onboarding Project
        </Link>
        <Link
          to="/login"
          className="bg-black min-w-20 text-white flex items-center justify-center p-1 rounded-md hover:opacity-50 active:opacity-20 transition-opacity"
        >
          로그인
        </Link>
      </div>
    </header>
  );
};

export default Header;
