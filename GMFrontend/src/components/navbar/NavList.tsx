import React from "react";
import { Link } from "react-router";
import NavListItem from "./NavListItem";
const NavList = () => {
  return (
    <>
      <ul className="md:flex">
        <NavListItem urlPath="/my-workouts" text="My Workouts" />
        <NavListItem urlPath="/login" text="Login" />
        <NavListItem urlPath="/logout" text="Logout" />
      </ul>
    </>
  );
};

export default NavList;
