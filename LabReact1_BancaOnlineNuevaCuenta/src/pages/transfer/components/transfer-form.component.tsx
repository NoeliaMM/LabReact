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

// import classes from "./transfer-form.component.module.css";


interface Props {
  accountList: AccountVm[];
  onTransfer: (transferInfo: TransferVm) => void;
}

export const TransferFormComponent: React.FC<Props> = (props) => {
  const { accountList, onTransfer } = props;
  const [transfer, setTransfer] = React.useState<TransferVm>(
    createEmptyTransferVm
  );
  const [error, setError] = React.useState<TransferError>(
    createEmptyTransferError
  );

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
      <h2>Transfer</h2>
      <form onSubmit={handleSubmit}>       
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
        />
        <InputComponent
          label="Ingrese el IBAN de destino::"
          name="iban"
          onChange={handleFieldChange}
          error={error.iban}
        />

        <InputComponent
          label="Beneficiario:"
          name="name"
          onChange={handleFieldChange}
          error={error.name}
        />

        <InputComponent
          label={<span>Importe <span>(EUR)</span></span>}
          name="amount"
          type="number"
          onChange={handleFieldChange}
          error={error.amount}
        />

        <InputComponent
          label="Concepto:"
          name="concept"
          onChange={handleFieldChange}
          error={error.concept}
        />

        <InputComponent
          label="Observaciones:"
          name="notes"
          onChange={handleFieldChange}
          error={error.notes}
        />

        <InputComponent
          infoLabel=" Para que la transferencia se realice en otra fecha diferente a la de hoy, por favor, indíquenos la fecha de ejecución:"
          label="Fecha de ejecución:"
          name="realDateTransfer"
          type="date"
          onChange={handleFieldChange}
          error={error.realDateTransfer}
        />

        <InputComponent
          infoLabel="Escriba una dirección de email para dar aviso al beneficiario:"
          label="Email del beneficiario:"
          name="email"
          onChange={handleFieldChange}
          error={error.email}
        />

        <button type="submit">REALIZAR LA TRANSFERENCIA</button>
      </form>
    </div>
  );
};
