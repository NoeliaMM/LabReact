import React from "react";
import {
  AccountVm,
  createEmptyTransferError,
  createEmptyTransferVm,
  TransferError,
  TransferVm,
} from "../transfer.vm";
import { validateForm } from "../validations";
import { InputComponent, SelectComponent } from "@/common/components";

import classes from "./transfer-form.component.module.css";

interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
  defaultAccountId? : string;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer ,defaultAccountId} = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(
    createEmptyTransferVm
  );
  const [error, setError] = React.useState<TransferError>(
    createEmptyTransferError
  );

React.useEffect(() => {
  if (defaultAccountId) {
    setTransfer({
      ...transfer,
      accountId: defaultAccountId ?? "",
    });
  }
}, []);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formValidationResult = validateForm(transfer);
    setError(formValidationResult.errors);
    if (formValidationResult.succeeded) {
      onTransfer(transfer);
    }
  };

  const handleFieldChange = (
    e:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLSelectElement>
  ) => {
    setTransfer({ ...transfer, [e.target.name]: e.target.value });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className={classes.formContainer}>
          <SelectComponent
            label="Seleccione una cuenta origen:"
            name="accountId"
            options={accountList.map((account) => ({
              id: account.id,
              label: account.alias,
            }))}
            value={transfer.accountId}
            onChange={handleFieldChange}
            error={error.accountId}
            className={classes.large}
          />
          <InputComponent
            label="Ingrese el IBAN de destino:"
            name="iban"
            onChange={handleFieldChange}
            error={error.iban}
            className= {classes.large}
          />

          <InputComponent
            label="Beneficiario:"
            name="name"
            onChange={handleFieldChange}
            error={error.name}
            className= {classes.large}
          />

          <InputComponent
            label={
              <span>
                Importe <span>(EUR)</span>
              </span>
            }
            name="amount"
            type="number"
            onChange={handleFieldChange}
            error={error.amount}
            className= {classes.small}
          />

          <InputComponent
            label="Concepto:"
            name="concept"
            onChange={handleFieldChange}
            error={error.concept}
            className= {classes.large}
          />

          <InputComponent
            label="Observaciones:"
            name="notes"
            onChange={handleFieldChange}
            error={error.notes}
            className= {classes.large}
          />
        </div>
        <div className={classes.formContainer}>
          <InputComponent
            infoLabel=" Para que la transferencia se realice en otra fecha diferente a la de hoy, por favor, indíquenos la fecha de ejecución:"
            label="Fecha de ejecución:"
            name="realDateTransfer"
            type="date"
            onChange={handleFieldChange}
            error={error.realDateTransfer}  
            className= {classes.inputDate}         
          />
        </div>
        <div className={classes.formContainer}>
          <InputComponent
            infoLabel="Escriba una dirección de email para dar aviso al beneficiario:"
            label="Email del beneficiario:"
            name="email"
            onChange={handleFieldChange}
            error={error.email}
            className= {classes.large}
          />
        </div>
        <div className={classes.buttonContainer}>
            <button type="submit">REALIZAR LA TRANSFERENCIA</button>
        </div>
      </form>
    </div>
  );
};
