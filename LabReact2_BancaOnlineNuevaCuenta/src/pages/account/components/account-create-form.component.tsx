import { InputComponent, SelectComponent } from "@/common/components";
import React from "react";
import {
  AccountError,
  AccountVm,
  createEmptyAccountError,
  createEmptyAccountVm,
} from "../account.vm";
import classes from "./account-create-form.component.module.css";
import { validateForm } from "../validations";
import { saveAccount } from "../api/create-account.api";

const accountTypeList: AccountVm[] = [
  { type: "1", name: "Cuenta corriente" },
  { type: "2", name: "Cuenta de ahorro" },
  { type: "3", name: "Cuenta de nómina" },
];

export const AccountCreateFormComponent: React.FC = () => {
  const [account, setAccount] = React.useState<AccountVm>(createEmptyAccountVm);
  const [error, setError] = React.useState<AccountError>(
    createEmptyAccountError
  );

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setAccount({ ...account, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(account);
    if (formValidationResult.succeeded) {
      saveAccount(account).then((result) => {
        if (result.id) {
          alert("Cuenta creada con éxito");
        } else {
          alert("Ha ocurrido un error al crear la cuenta");
        }
      });
    } else {
      setError(formValidationResult.errors);
    }
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <SelectComponent
            label="Tipo de cuenta"
            name="type"
            options={accountTypeList.map((account) => ({
              id: account.type,
              label: account.name,
            }))}
            value={account.type}
            onChange={handleFieldChange}
            error={error.type}
            className={classes.medium}
          />
          <InputComponent
            label="Alias:"
            name="name"
            onChange={handleFieldChange}
            error={error.name}
            className={classes.medium}
          />
        </div>
        <div className={classes.buttonContainer}>
          <button type="submit">Guardar</button>
        </div>
      </form>
    </div>
  );
};
