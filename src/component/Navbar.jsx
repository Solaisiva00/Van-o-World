import icon from "../asset/Icon.svg"
import { NavLink } from "react-router-dom";

const Nav = () => {
  
  return (
    <nav className="bg-[#FFF7ED] sticky top-0 z-[1]  w-screen flex justify-between  h-[90px] md:h-[50px] items-center px-4 md:px-20 md:py-10">
      <NavLink to="/" className="font-int font-bold text-[25px]">
        VANOWORLD
      </NavLink>
      <ul className="flex gap-4 font-int item-center">
        <li className="font-semibold text-[#4D4D4D] text-[16px] hover:text-[#161616] hover:font-bold"  >
          <NavLink to="/host"  className={({isActive})=> isActive? "text-[#161616] font-bold":null}>Host</NavLink>
        </li>
        <li className="font-semibold text-[#4D4D4D] text-[16px] hover:text-[#161616] hover:font-bold"  >
          <NavLink to="/about" className={({isActive})=> isActive? "text-[#161616] font-bold":null}>About</NavLink>
        </li>
        <li className="text-[#4D4D4D] text-[16px] hover:text-[#161616] hover:font-bold"  >
          <NavLink to="/vans"  className={({isActive})=> isActive? "text-[#161616] font-bold":null}>Vans</NavLink>
        </li>
        <li>
          <NavLink to="login"><img src={icon} alt="" /></NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
