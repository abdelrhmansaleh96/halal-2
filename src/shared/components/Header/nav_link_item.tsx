import { NavLink } from "react-router-dom";

type Props = {
  to: string;
  text: string;
};

const NavLinkItem: React.FC<Props> = ({ to, text }) => {
  const classNames = "text-md xl:text-lg hover:text-white transition-colors duration-300 uppercase";
  return (
    <NavLink to={to} className={({ isActive }) => (isActive ? "text-white " : "text-popover ") + classNames}>
      {text}
    </NavLink>
  );
};

export default NavLinkItem;
