import { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import MonifyLogo from "../assets/MonifyLogo.svg";

const navLinks = [
  { path: "/about", name: "About" },
  { path: "/faq", name: "FAQ" },
  { path: "/contact", name: "Contact" },
];

const NavMenu: React.FC = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => setNav(!nav);
  const handleLinkClick = () => setNav(false);

  return (
    <nav className="bg-green-200 fixed top-0 left-0 w-full z-50 flex items-center h-18 px-6">
      {/* Logo */}
      <div className="flex-shrink-0 flex items-center space-x-2">
        {/* <img src={MonifyLogo} alt="Monify Logo" className="h-8 w-8" /> */}
        <h1 className="text-2xl font-bold cursor-pointer">Monify</h1>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden md:flex flex-grow justify-center">
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

      {/* Mobile Menu Icon */}
      <div className="md:hidden flex items-center ml-auto z-30">
        <div onClick={handleNav} className="text-2xl cursor-pointer">
          {nav ? <AiOutlineClose size={25} /> : <AiOutlineMenu size={25} />}
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-green-200 shadow-md transform ${
          nav ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out md:hidden z-20 flex items-center justify-center`}
      >
        <ul className="text-xl space-y-4 uppercase text-center">
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
