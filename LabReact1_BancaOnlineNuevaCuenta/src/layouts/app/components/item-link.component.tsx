import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.component.module.css";

interface Props {
  route: string;
  prefix:string;
  label: string;
}

export const ItemLink: React.FC<Props> = (props) => {
  const { pathname } = useLocation();
  const { route,prefix, label } = props;

  return (
    <li className={pathname.startsWith(prefix) ? classes.selected : ""}>
      <Link to={route}>{label} </Link>
    </li>
  );
};
