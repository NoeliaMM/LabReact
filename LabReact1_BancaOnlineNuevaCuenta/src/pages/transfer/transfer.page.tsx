import { AppLayout } from "@/layouts";
import React from "react";
import {AccountVm, TransferVm} from './transfer.vm';
import { TransferFormComponent } from "./components/transfer-form.component";
import { HeaderPageComponent } from "@/common/components";

 const accountListMock: AccountVm[] = [
     { id: "1", alias: "Cuenta principal", iban: "ES91 2100 0418 4502 0005 1332" },
     { id: "2", alias: "Cuenta ahorro", iban: "ES91 2100 0418 4502 0005 1332" },
     { id: "3", alias: "Cuenta nómina", iban: "ES91 2100 0418 4502 0005 1332" },
   ]; 

export const TransferPage: React.FC = () => {
  
  const [accountList, setAccountList] = React.useState<AccountVm[]>([]);
  
React.useEffect(()=>{
  setAccountList(accountListMock);
});

const handleTransfer = (transferInfo: TransferVm)=>{
console.log(transferInfo)
};

  return (
    <AppLayout>
      <HeaderPageComponent
              title="Transferencias Nacionales"           
            />
     <TransferFormComponent accountList={accountList} onTransfer={handleTransfer}/>
    </AppLayout>
  );
};
