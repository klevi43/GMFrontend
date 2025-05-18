import React from "react";
import { Link } from "react-router";
import NavListItem from "./NavListItem";
import authService from "../../services/authService";
const NavList = () => {
  const handleLogout = () => {
    authService.logout();
  };
  return (
    <>
      <ul className="md:flex h-max-content">
        <NavListItem urlPath="/my-workouts" text="My Workouts" />
        <NavListItem urlPath="/login" text="Login" />
        <button onClick={handleLogout} className="text-white">
          Logout
        </button>
      </ul>
    </>
  );
};

export default NavList;
