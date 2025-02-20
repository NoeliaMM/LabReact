import Axios from "axios";
import { AccountApiModel, MovementApiModel } from "./movement-list.api-model";
import {  routesPrefixes } from "@/core/router";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}${routesPrefixes.movements}`;
const urlAccount = `${import.meta.env.VITE_BASE_API_URL}${routesPrefixes.accountList}`;

export const getMovements = (accountId?: string): Promise<MovementApiModel[]> => {  

  console.log("Final URL:", urlMovements, "Params:", { accountId });

  return Axios.get<MovementApiModel[]>(urlMovements, {
    params: accountId ? { accountId } : {},
  })
    .then(({ data }) => data)
    .catch((error) => {
      console.error("API error:", error);
      throw error;
    });
};


export const getInfoAccount = (accountId: string): Promise<AccountApiModel> =>
{
 
  return Axios.get<AccountApiModel>(`${urlAccount}/${accountId}`).then(   
    ({ data }) => data
  );
}

