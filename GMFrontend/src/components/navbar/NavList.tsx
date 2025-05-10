import React from "react";
import { Link } from "react-router";
import NavListItem from "./NavListItem";
const NavList = () => {
  const navListItems = ["My Workouts", "Login", "Logout"];
  return (
    <>
      <ul className="md:flex">
        <NavListItem text="My Workouts" />
        <NavListItem text="Login" />
        <NavListItem text="Logout" />
      </ul>
    </>
  );
};

export default NavList;
