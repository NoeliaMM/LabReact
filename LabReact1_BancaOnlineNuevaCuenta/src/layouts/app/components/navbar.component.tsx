import { appRoutes, routesPrefixes } from "@/core/router";
import React from "react";
import classses from "./navbar.component.module.css";
import { ItemLink } from "./item-link.component";
import { generatePath } from "react-router-dom";

export const NavbarComponent: React.FC = () => {
  

  
  return (
    <nav className={classses.navbar}>
      <ul className={classses.list}>
        <ItemLink route= {appRoutes.accountList} prefix={routesPrefixes.accountList} label="Mis cuentas" />
        <ItemLink route= {generatePath(appRoutes.movements, { accountId: ''})} prefix={routesPrefixes.movements} label="Movimientos"/>       
        <ItemLink route= {appRoutes.transfer} prefix={routesPrefixes.transfer} label="Transferencias" />
      </ul>
    </nav>
  );
};
