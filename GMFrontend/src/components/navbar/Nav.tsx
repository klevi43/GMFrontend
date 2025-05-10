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
        <div className="flex justify-between flex-wrap">
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
              isNavMenuOpen && "hidden"
            } w-full md:flex md:items-center md:justify-between md:w-auto`}
          >
            <NavList />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
