import React from "react";
import { AppLayout } from "@/layouts";
import { AccountVm } from "@/pages/account-list/account-list.vm";
import classes from "./account-list.page.module.css";
import { AccountListTableComponent } from "./components";
import { getAccountList } from "./api/account-list.api";
import { mapAccountListFromApiToVm } from "./account-list.mapper";
import { HeaderPageComponent } from "@/common/components";


export const AccountListPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  React.useEffect(() => {
    getAccountList().then((result) =>
      setAccountList(mapAccountListFromApiToVm(result))
    );
  }, []);

  return (
    <AppLayout>
      <div className={classes.root}>     
        <HeaderPageComponent
          title="Mis cuentas"
          buttonText="AGREGAR NUEVA CUENTA"
          action={() => console.log("Próximamente")}
        />
        <AccountListTableComponent accountList={accountList} />
      </div>
    </AppLayout>
  );
};
