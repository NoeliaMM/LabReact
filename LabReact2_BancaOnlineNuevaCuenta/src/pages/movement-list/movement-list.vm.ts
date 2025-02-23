export interface MovementVm {
  id: string;
  description: string;
  amount: number;
  balance: number;
  transaction: Date;
  realTransaction: Date;
  accountId: string;
}

export interface AccountVm {
  name: string;
  iban: string;
  balance: string;
}

export const infoAccountEmpty = {   
    iban: "",
    name: "", 
    balance:"" 
  };
