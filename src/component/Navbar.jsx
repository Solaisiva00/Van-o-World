import { Link } from "react-router-dom";

const Nav = () => {
  return <nav className="bg-[#FFF7ED] sticky top-0 z-[1]  w-screen flex justify-between  h-[90px] md:h-[50px] items-center px-4 md:px-20 md:py-10">
    <Link to="/" className="font-int font-bold text-[25px]">VANOWORLD</Link>
    <ul className="flex gap-6 font-int item-center">
        <li className="font-semibold text-[#4D4D4D] text-[16px]"><Link to="/about">About</Link></li>
        <li className="text-[#4D4D4D] text-[16px]"><Link to="/vans">Vans</Link></li>
    </ul>
  </nav>;
};

export default Nav;
