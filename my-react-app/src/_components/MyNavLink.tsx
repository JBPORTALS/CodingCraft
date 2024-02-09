import { NavLink } from "react-router-dom";
import { type NavLinkProps } from "react-router-dom";

interface Props extends NavLinkProps {}

export default function MyNavLink({ children, ...props }: Props) {
  return (
    <NavLink
      className={({ isActive }) =>
        isActive ? "border-b-2 border-b-purple-600" : "border-none"
      }
      {...props}
    >
      {children}
    </NavLink>
  );
}
