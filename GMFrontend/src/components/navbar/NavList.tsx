import { useState } from "react";
import { useLogout } from "../../hooks/useLogout";
import NavListItem from "./NavListItem";
const NavList = () => {
  const mutation = useLogout();
  const [currentUser, setCurrentUser] = useState(null);
  const handleLogout = () => {
    mutation.mutateAsync({});
  };

  return (
    <>
      <ul className="md:flex h-max-content">
        <NavListItem urlPath="/workouts" text="My Workouts" />
        <NavListItem urlPath="/login" text="Login" />
        <li className="text-[2rem] md:text-[1.2rem] px-2 block text-center text-text hover:text-white transition">
          <button onClick={handleLogout}>Logout</button>
        </li>
      </ul>
    </>
  );
};

export default NavList;
