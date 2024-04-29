import { useEffect } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";

const Host = () => {
  const isLoggedIn=localStorage.getItem("loggin");
  const navigate=useNavigate()
  useEffect(() => {
    if (!isLoggedIn) {
      navigate("/login?message=Please logIn to access this page ");
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) {
    return null; // You may choose to return null or a loading indicator here
  }
  return (
    <div className="">
      <nav className="px-5 mt-5">
        <NavLink
          to="/host/dashboard"
          className={({ isActive }) =>
            isActive
              ? "font-int text-[18px]  text-[#161616] mr-6 font-bold "
              : "font-int text-[18px]  text-[#4d4d4d] mr-6  "
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
              : "font-int text-[18px]  text-[#4d4d4d] mr-6  "
          }
        >
          Vanslist
        </NavLink>
        <NavLink
          to="/host/review"
          className={({ isActive }) =>
            isActive
              ? "font-int text-[18px]  text-[#161616] mr-6 font-bold "
              : "font-int text-[18px]  text-[#4d4d4d] mr-6  "
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
