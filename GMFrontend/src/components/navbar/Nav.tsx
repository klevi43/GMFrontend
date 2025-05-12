import React, { useState } from "react";
import { Link } from "react-router";
import NavToggle from "../icons/NavToggle";
import NavList from "./NavList";
import Logo from "../../../public/leaf-svgrepo-com.svg";
const Nav = () => {
  const [isNavMenuOpen, setIsNavMenuOpen] = useState(false);
  const toggleNavMenu = () => {
    setIsNavMenuOpen(!isNavMenuOpen);
  };
  return (
    <>
      <nav>
        <div
          className={`${
            !isNavMenuOpen ? "border-b-0 border-b-box-outline" : "border-0"
          } flex justify-between flex-wrap sticky `}
        >
          <div>
            <Link to="/" className="text-white">
              <img
                className="h-[4rem] mb-[1rem] pl-[0.5rem]"
                src="../../../public/leaf-svgrepo-com.svg"
                alt=""
              />
            </Link>
          </div>
          <div>
            <NavToggle toggleNavMenu={toggleNavMenu} />
          </div>
          <div
            className={`${
              !isNavMenuOpen
                ? "h-0 opacity-0"
                : "h-auto opacity-100 border-b-1 border-b-box-outline"
            }  absolute mt-[4.5rem] overflow-hidden transition-all duration-300 bg-background w-full md:relative md:flex md:items-center md:justify-between md:w-auto md:mt-auto md:h-auto md:opacity-100`}
          >
            <NavList />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
