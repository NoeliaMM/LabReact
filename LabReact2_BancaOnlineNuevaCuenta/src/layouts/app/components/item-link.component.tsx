import React from "react";
import { Link, useLocation } from "react-router-dom";
import classes from "./navbar.component.module.css";

interface Props {
  route: string;
  prefix:string | string[];
  label: string;
}

export const ItemLink: React.FC<Props> = (props) => {
  const { pathname } = useLocation();
  const { route,prefix, label } = props;

  const prefixes = Array.isArray(prefix) ? prefix : [prefix];
  
  const isActive = prefixes.some((p) => pathname.startsWith(p));

  return (
    <li className={isActive ? classes.selected : ""}>
      <Link to={route}>{label} </Link>
    </li>
  );
};
