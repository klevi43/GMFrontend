import { Link } from "react-router";
interface Props {
  text: string;
  urlPath: string;
}
const NavListItem = ({ text, urlPath }: Props) => {
  return (
    <>
      <li className=" text-[1.5rem] md:text-[1.1rem] px-2 block text-center text-text hover:text-white active:text-white active:scale-95 transition duration-150">
        <Link to={urlPath}>{text}</Link>
      </li>
    </>
  );
};

export default NavListItem;
