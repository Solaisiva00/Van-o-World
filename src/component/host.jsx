import { Outlet, Link } from "react-router-dom";

const Host = () => {
  return (
    <div className="">
      <nav className="px-5 mt-5">
        <Link
          to="/host/dashboard"
          className="font-int text-[18px]  text-[#4d4d4d] mr-6 hover:text-black hover:underline hover:font-semibold "
        >
          Dashbord
        </Link>
        <Link
          to="/host/income"
          className="font-int text-[18px]  text-[#4d4d4d] mr-6 hover:text-black hover:underline hover:font-semibold  "
        >
          Income
        </Link>
        <Link
          to="/host/vanlist"
          className="font-int text-[18px]  text-[#4d4d4d] mr-6 hover:text-black hover:underline hover:font-semibold "
        >
          Vanslist
        </Link>
        <Link
          to="/host/review"
          className="font-int text-[18px]  text-[#4d4d4d] mr-6 hover:text-black hover:underline hover:font-semibold "
        >
          Review
        </Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Host;
