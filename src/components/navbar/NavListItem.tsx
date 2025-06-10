import React from "react";
import { Link } from "react-router";
interface Props {
  text: string;
  urlPath: string;
}
const NavListItem = ({ text, urlPath }: Props) => {
  return (
    <>
      <li className=" text-[2rem] md:text-[1.1rem] px-2 block text-center text-text hover:text-white transition duration-300">
        <Link to={urlPath}>{text}</Link>
      </li>
    </>
  );
};

export default NavListItem;
