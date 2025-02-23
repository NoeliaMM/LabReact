import { AppLayout } from "@/layouts";
import React from "react";
import { AccountVm, TransferVm } from "./transfer.vm";
import { TransferFormComponent } from "./components/transfer-form.component";
import { HeaderPageComponent } from "@/common/components";
import classes from "./transfer.page.module.css";
import { getAccountList, saveTransfer } from "./api";
import {
  mapAccountFromApiToVm,
  mapTransferFromVmToApi,
} from "./transfer.mapper";
import { useParams } from "react-router-dom";

export const TransferPage: React.FC = () => {
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);

  const {id}= useParams<{id:string}>();

  React.useEffect(() => {
    getAccountList().then((accountList) => {
      const accountListVm = accountList.map((acc) =>
        mapAccountFromApiToVm(acc)
      );
      setAccountList(accountListVm);
    });
  }, []);

  const handleTransfer = (transferInfo: TransferVm) => {
    saveTransfer(mapTransferFromVmToApi(transferInfo)).then((result) => {
      if (result) {
        alert("Transferencia realizada con éxito");
      } else {
        alert("Ha ocurrido un error al realizar la transferencia");
      }
    });
  };

  return (
    <AppLayout>
      <div className={classes.root}>
        <HeaderPageComponent title="Transferencias Nacionales" />
        <TransferFormComponent
          accountList={accountList}
          onTransfer={handleTransfer}
          defaultAccountId ={id}
        />
      </div>
    </AppLayout>
  );
};
