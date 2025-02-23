import React from "react";
import { AppLayout } from "@/layouts";
import { AccountVm } from "@/pages/account-list/account-list.vm";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components";
import { getAccountList } from "./api/account-list.api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import { HeaderPageComponent } from "@/common/components";
import { generatePath, useNavigate } from "react-router-dom";
import { appRoutes } from "@/core/router";

export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  const navigate = useNavigate();

  React.useEffect(() => {
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  const handleNewAccount = () => {
    navigate(generatePath(appRoutes.createAccount));
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <HeaderPageComponent
          title="Mis cuentas"
          buttonText="AGREGAR NUEVA CUENTA"
          action={() => handleNewAccount()}
        />
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};
