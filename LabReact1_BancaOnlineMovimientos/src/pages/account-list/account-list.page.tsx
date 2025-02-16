
import React from "react";
import { AppLayout } from "@/layouts";
import { AccountVm } from "@/pages/account-list/account-list.vm";
import classes from './account-list.page.module.css';
import { AccountListTableComponent } from "./components";
import {getAccountList} from './api/account-list.api';
import { mapAccountListFromApiToVm } from "./account-list.mapper";



export const AccountListPage: React.FC = () => {

  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(()=>{   
    getAccountList().then((result)=>setAccountList(mapAccountListFromApiToVm(result)));
  },[]);

  return (
    <AppLayout>
      <div className={classes.root}>
      <div className={classes.headerContainer}>
        <h1 >Mis cuentas</h1>
        <button>AGREGAR NUEVA CUENTA</button>
      </div>
      <AccountListTableComponent accountList={accountList}/>
      </div>  
    </AppLayout>
    
  );
};


/* <br />
      <Link to={generatePath(appRoutes.movements, { id: 1 })}>
        Movimientos cuenta
      </Link>
      <br />
      <Link to={appRoutes.transfer}>Transferencia</Link>
      <br />
      <Link to={generatePath(appRoutes.transferFromAccount, { id: 1 })}>
        Transferencia desde cuenta 1
      </Link>
      <br />
      <Link to={appRoutes.createAccount}>
        Crear cuenta
      </Link>
      <br />
      <Link to={generatePath(appRoutes.editAccount, { id: 1 })}>
        Editar cuenta 1
      </Link> */
