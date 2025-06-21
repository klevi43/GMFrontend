interface Props {
  toggleNavMenu: () => void;
}
const NavToggle = ({ toggleNavMenu }: Props) => {
  return (
    <>
      <div>
        <button className="hover:cursor-pointer " onClick={toggleNavMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 24 24"
            className="md:hidden h-[4.5rem] pr-[0.5rem] fill-text   hover:fill-white active:fill-white active:scale-95 transition duration-150"
            fill="none"
            stroke="currentColor"
          >
            <path d="M4 6h16v2H4zm0 5h16v2H4zm0 5h16v2H4z"></path>
          </svg>
        </button>
      </div>
    </>
  );
};

export default NavToggle;
