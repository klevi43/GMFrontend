import React from "react";
import { Link } from "react-router";
interface Props {
  text: string;
}
const NavListItem = ({ text }: Props) => {
  return (
    <>
      <li className="px-2 block text-center">
        <Link to="/">{text}</Link>
      </li>
    </>
  );
};

export default NavListItem;
