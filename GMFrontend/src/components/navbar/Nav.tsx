import React, { useState } from "react";
import { Link } from "react-router";
import NavToggle from "../Icons/NavToggle";
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
              !isNavMenuOpen ? "h-0 opacity-0" : "h-[8rem] opacity-100"
            } absolute mt-[3rem] overflow-hidden transition-all duration-300 bg-background w-full md:flex md:items-center md:justify-between md:w-auto`}
          >
            <NavList />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
