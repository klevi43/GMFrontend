import { useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import NavListItem from "./NavListItem";
import { LOGIN_ENDPOINT } from "../../constants/constants";
import { HISTORY, WORKOUTS_ENDPOINT } from "../../constants/endpoints";
import { useLoadAuthUser } from "../../hooks/useLoadAuthUser";
const NavList = () => {
  const mutation = useLogout();
  const { data: authUser } = useLoadAuthUser();
  const handleLogout = () => {
    mutation.mutateAsync({});
  };

  return (
    <>
      <ul className="md:flex h-max-content">
        <NavListItem urlPath={WORKOUTS_ENDPOINT} text="My Workouts" />
        <NavListItem
          urlPath={WORKOUTS_ENDPOINT + HISTORY}
          text="Workout History"
        />
        {!authUser?.isAuthenticated && (
          <NavListItem urlPath={LOGIN_ENDPOINT} text="Login" />
        )}
        {authUser && authUser.isAuthenticated && (
          <li className="text-[2rem] md:text-[1.2rem] px-2 block text-center text-text hover:text-white transition">
            <button onClick={handleLogout}>Logout</button>
          </li>
        )}
      </ul>
    </>
  );
};

export default NavList;
