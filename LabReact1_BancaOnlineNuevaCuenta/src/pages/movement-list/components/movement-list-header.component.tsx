import React from "react";
import { AccountVm, infoAccountEmpty } from "../movement-list.vm";
import { getInfoAccount } from "../api";
import { mapAccountFromApiToVm } from "../movement-list.mapper";
import classes from './movement-list-header.module.css';

interface Props {
  accountId: string;
}

export const MovementListHeaderComponent: React.FC<Props> = (props) => {
  const { accountId } = props;

  const [infoAccount, setInfoAccount] =    React.useState<AccountVm>(infoAccountEmpty);

  React.useEffect(() => {
    if (accountId) {
      getInfoAccount(accountId).then((result) =>
        setInfoAccount(mapAccountFromApiToVm(result))
      );
    }
  }, []);

  return (
    <>      
        <div className={classes.headerContainer}>
          <h1>Saldos y Últimos movimientos</h1>
          <div>
            <p className={classes.labelBalance}>{infoAccount.balance ? "SALDO DISPONIBLE" :""}</p>
            <p className={`${classes.balance} ${infoAccount.balance ? classes.currency:''}`}>{infoAccount.balance}</p>
          </div>
        </div>
        <div className={classes.headerContainerAccount}>
          <span className={classes.accountAlias}>              
              {infoAccount.name ? `Alias: ${infoAccount.name}` : ""}
          </span>
          <span className={classes.accountIban}> {infoAccount.iban ? `IBAN: ${infoAccount.iban}` : ""}</span>
        </div>      
    </>
  );
};
