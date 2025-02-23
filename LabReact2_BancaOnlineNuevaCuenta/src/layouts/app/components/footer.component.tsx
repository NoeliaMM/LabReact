import React from "react";
import classes from "./footer.component.module.css";
import logoFooter from "/assets/logo_footer.svg";

export const FooterComponent: React.FC = () => {
  return (
    <footer className={classes.footer}>
      <img src={logoFooter} alt="" className={classes.footerLogo} />
    </footer>
  );
};
