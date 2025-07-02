import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import { BsBagCheck } from "react-icons/bs";
import { RiSearchLine } from "react-icons/ri";
import { MdPerson2 } from "react-icons/md";
// import MonifyLogo from "../assets/MonifyLogo.svg";

const navLinks = [
  { path: "/shop", name: "Shop" },
  { path: "/sale", name: "Sale" },
  { path: "/store", name: "Store" },
  { path: "/customercare", name: "Customer Care" },
];

const NavMenu: React.FC = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);
  const handleLinkClick = () => setNav(false);

  return (
    <nav className="bg-red-50 w-full h-18 px-6 flex items-center sticky top-0 z-40">
      {/* Left: Nav Links */}
      <div className="hidden md:flex flex-1">
        <ul className="flex space-x-6">
          {navLinks.map(({ path, name }) => (
            <li key={path}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive ? "text-blue-900 font-bold" : "hover:text-gray-500"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>

      {/* Center: Logo */}
      <div className="flex-shrink-0 flex justify-center flex-1">
        <h1 className="text-2xl font-bold cursor-pointer">LeParle`</h1>
      </div>

      {/* Right: Icons (always visible) */}
      <div className="flex-1 flex justify-end items-baseline space-x-3">
        <RiSearchLine className="text-xl cursor-pointer" />
        <MdPerson2 className="text-xl cursor-pointer" />
        <BsBagCheck className="text-xl cursor-pointer" />

        {/* Mobile Menu Icon (navbar, only when menu is closed) */}
        <div className="md:hidden ml-4" onClick={handleNav}>
          {!nav && <AiOutlineMenu size={20} />}
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-green-200 shadow-md transform ${
          nav ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden z-20 flex flex-col`}
      >
        {/* Close Icon inside Drawer */}
        <div className="flex justify-end p-4">
          <AiOutlineClose
            size={28}
            className="cursor-pointer"
            onClick={handleNav}
          />
        </div>
        <ul className="text-xl space-y-4 uppercase text-center flex-1 flex flex-col justify-center">
          {navLinks.map(({ path, name }) => (
            <li key={path} className="p-2">
              <NavLink
                to={path}
                onClick={handleLinkClick}
                className={({ isActive }) =>
                  isActive ? "text-blue-500 font-bold" : "hover:text-gray-200"
                }
              >
                {name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavMenu;
