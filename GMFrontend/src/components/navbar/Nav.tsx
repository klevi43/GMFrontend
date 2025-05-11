import React, { useState } from "react";
import { Link } from "react-router";
import NavToggle from "../icons/NavToggle";
import NavList from "./NavList";
const Nav = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };
  return (
    <>
      <nav>
        <div className="flex justify-between flex-wrap sticky">
          <div>
            <Link to="/" className="text-white">
              GM
            </Link>
          </div>
          <div>
            <NavToggle toggleNavMenu={toggleNavMenu} />
          </div>
          <div
            className={`${
              !isNavMenuOpen ? "h-0 opacity-0" : "h-auto opacity-100"
            }  absolute mt-[2.5rem] overflow-hidden transition-all duration-300 bg-gray-900 w-full md:relative md:flex md:items-center md:justify-between md:w-auto md:mt-auto md:h-auto md:opacity-100`}
          >
            <NavList />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
