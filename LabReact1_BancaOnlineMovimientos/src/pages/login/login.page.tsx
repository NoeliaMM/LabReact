import React from "react";
import { Credentials } from "./login.vm";
import { LoginFormComponent } from "./components";
import { useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";
import { isValidLogin } from "./api";
import { mapCredentialsFromVmToApi } from "./login.mapper";
import classes from "./login.page.module.css";
import { userProfileContext } from "@/core/profile/profile.context";

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const { setUserProfile } = userProfileContext();

  const handleSubmit = (credentials: Credentials) => {
    const apiCredentials = mapCredentialsFromVmToApi(credentials);

    isValidLogin(apiCredentials).then((isValid) => {
      if (isValid) {
        setUserProfile(credentials.user);
        navigate(appRoutes.accountList);
      } else {
        alert(
          "Credenciales inválidas.No coinciden con admin@email.com / test "
        );
      }
    });
  };

  return (
    <>
      <header className={classes.header}>
        <img className={classes.logo} src="assets/logo_header.svg" />
      </header>
      <div className={classes.bgImg}></div>
      <div className={classes.box}>
        <h1>Acceso</h1>
        <LoginFormComponent onLogin={handleSubmit}></LoginFormComponent>
        <h4 className={classes.inputFooter}>
          Está Usted en un <strong> sitio seguro</strong>
        </h4>
      </div>
    </>
  );
};
