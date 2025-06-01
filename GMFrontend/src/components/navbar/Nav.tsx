import React, { useState } from "react";
import { Link } from "react-router";
import NavToggle from "../icons/NavToggle";
import NavList from "./NavList";
import { useLoadAuthUser } from "../../hooks/useLoadAuthUser";

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
            !isNavMenuOpen ? "border-b-0 border-modal-outline" : "border-0"
          } flex justify-between items-center flex-wrap mx-auto max-w-[1150px] sticky `}
        >
          <div className="">
            <Link to="/">
              <div className="flex items-center text-text hover:text-white transition duration-300">
                <img
                  className="h-[4rem] mb-[1rem] pl-[0.5rem]"
                  src="/leaf-svgrepo-com.svg"
                  alt=""
                />
                <h1 className="font-Jost text-[2.1rem] invisible md:visible">
                  Growth Mindset
                </h1>
              </div>
            </Link>
          </div>
          <div>
            <NavToggle toggleNavMenu={toggleNavMenu} />
          </div>
          {/* TODO: fix opacity animation */}
          <div
            className={`${
              !isNavMenuOpen
                ? "h-0 opacity-0"
                : "h-auto opacity-100 border-b-1 border-modal-outline"
            }  absolute top-full overflow-hidden bg-background w-full pb-6 md:relative md:flex  md:justify-between md:p-0 md:w-auto md:mt-[6px] md:h-auto md:opacity-100`}
          >
            <NavList />
          </div>
        </div>
      </nav>
    </>
  );
};

export default Nav;
