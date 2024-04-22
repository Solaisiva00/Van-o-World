import { Outlet, NavLink } from "react-router-dom";

const Host = () => {
  return (
    <div className="">
      <nav className="px-5 mt-5">
        <NavLink
          to="/host/dashboard"
          className={({ isActive }) =>
            isActive
              ? "font-int text-[18px]  text-[#161616] mr-6 font-bold "
              : "font-int text-[18px]  text-[#4d4d4d] mr-6 hover:text-black hover:underline hover:font-semibold "
          }
        >
          Dashbord
        </NavLink>
        <NavLink
          to="/host/income"
          className={({ isActive }) =>
            isActive
              ? "font-int text-[18px]  text-[#161616] mr-6 font-bold "
              : "font-int text-[18px]  text-[#4d4d4d] mr-6 hover:text-black hover:underline hover:font-semibold "
          }
        >
          Income
        </NavLink>
        <NavLink
          to="/host/vanlist"
          className={({ isActive }) =>
            isActive
              ? "font-int text-[18px]  text-[#161616] mr-6 font-bold "
              : "font-int text-[18px]  text-[#4d4d4d] mr-6 hover:text-black hover:underline hover:font-semibold "
          }
        >
          Vanslist
        </NavLink>
        <NavLink
          to="/host/review"
          className={({ isActive }) =>
            isActive
              ? "font-int text-[18px]  text-[#161616] mr-6 font-bold "
              : "font-int text-[18px]  text-[#4d4d4d] mr-6 hover:text-black hover:underline hover:font-semibold "
          }
        >
          Review
        </NavLink>
      </nav>
      <Outlet />
    </div>
  );
};

export default Host;
