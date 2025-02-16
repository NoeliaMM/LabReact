import React from "react";
import classes from "./login-form.component.module.css";
import {
  Credentials,
  createEmptyCredentials,
  emptyCredentialsFormErrors,
} from "../login.vm";
import { validateForm } from "../login.validation";
import { InputFormComponent } from "./input-form.component";

interface Props {
  onLogin: (credentials: Credentials) => void;
}

export const LoginFormComponent: React.FC<Props> = (props) => {
  const { onLogin } = props;

  const [credentials, setCredentials] = React.useState(createEmptyCredentials);

  const [errors, setErrors] = React.useState<Credentials>(
    emptyCredentialsFormErrors
  );

  const handleFieldChange =
    (field: string) => (event: React.ChangeEvent<HTMLInputElement>) => {
      setCredentials({ ...credentials, [field]: event.target.value.trim() });
    };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const { succedded, errors } = validateForm(credentials);
    setErrors(errors);

    if (succedded) {
      onLogin(credentials);
    } else {
      console.log("Credenciales no son válidas");
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className={classes.form}>
        <InputFormComponent
          id="user"
          type="text"
          placeholder="Usuario"
          value={credentials.user}
          error={errors.user}
          onChange={handleFieldChange("user")}
        />
        <InputFormComponent
          id="password"
          type="text"
          placeholder="Contraseña"
          value={credentials.password}
          error={errors.password}
          onChange={handleFieldChange("password")}
        />
        <button className={classes.btnEnviar} type="submit">
          Acceder
        </button>
      </form>
    </div>
  );
};
