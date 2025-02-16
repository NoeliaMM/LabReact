import React from "react";
import { AccountVm } from "../account-list.vm";
import classes from "./account-list-item.component.module.css";

import { generatePath, Link, useNavigate } from "react-router-dom";
import { appRoutes} from "@/core/router";

const ACTION_NONE = "";
const ACTION_TRANSFER = "1";
const ACTION_MOVEMENTS = "2";

interface Props {
  accountItem: AccountVm;
}

export const AccountListItemComponent: React.FC<Props> = (props) => {
  const { accountItem } = props;
  // TO DO: MEJORA . Crear un Hook para la Navegacion
  const navigate = useNavigate();

  const handleSelectedOptionChange = (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => {
    // TO DO: MEJORA .Llevarse esa lógica a un fichero ts
    switch (e.target.value) {
      case ACTION_TRANSFER:
        navigate(
          generatePath(appRoutes.transferFromAccount, { id: accountItem.id })
        );
        break;
      case ACTION_MOVEMENTS:
        navigate(generatePath(appRoutes.movements, { accountId: accountItem.id }));
        break;
    }
  };

  return (
    <div className={classes.row}>
      <span className={`${classes.dataCell} ${classes.bold}`}>
      <Link to={generatePath(appRoutes.movements, { accountId: accountItem.id })}>
        {accountItem.iban}
      </Link>

      </span>
      <span className={classes.dataCell}>{accountItem.name}</span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {accountItem.balance}
      </span>
      <span className={`${classes.dataCell} ${classes.alignRight}`}>
        {accountItem.lastTransaction.toLocaleDateString()}
      </span>
      <span className={`${classes.dataCell} ${classes.selectContainer}`}>
        <select
          onChange={handleSelectedOptionChange}
          className={classes.select}
          name=""
          id=""
        >
          <option value={ACTION_NONE}>Seleccionar</option>
          <option value={ACTION_TRANSFER}>Transferir</option>
          <option value={ACTION_MOVEMENTS}>Movimientos</option>
        </select>
      </span>
    </div>
  );
};
