import { onAuthStateChanged } from "firebase/auth";
import { useEffect, useState } from "react";
import { Outlet, NavLink, useNavigate } from "react-router-dom";
import { auth } from "../api";
const Host = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Effect to check user authentication status
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
    });

    // Clean-up function for the effect
    return () => unsubscribe();
  }, []);

  // Effect to navigate if user is not logged in
  useEffect(() => {
    if (user === null) {
      navigate("/user/login?message=Please log in to access this page");
    }
    else{
      navigate("/host/dashboard")
    }
  }, [user, navigate]);

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
