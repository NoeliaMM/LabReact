import Axios from "axios";
import { AccountApiModel, MovementApiModel } from "./movement-list.api-model";
import { routesPrefixes } from "@/core/router";

const urlMovements = `${import.meta.env.VITE_BASE_API_URL}${
  routesPrefixes.movements
}`;
const urlAccount = `${import.meta.env.VITE_BASE_API_URL}${
  routesPrefixes.accountList
}`;

export const getMovementsByAccountId = (
  accountId: string
): Promise<MovementApiModel[]> =>
  Axios.get<MovementApiModel[]>(urlMovements, { params: { accountId } }).then(
    ({ data }) => data
  );

export const getInfoAccount = (accountId: string): Promise<AccountApiModel> =>
  Axios.get<AccountApiModel>(`${urlAccount}/${accountId}`).then(
    // Aquí concatenamos el accountId a la URL
    ({ data }) => data
  );

  export const getAllMovements = (): Promise<MovementApiModel[]> =>
    Axios.get<MovementApiModel[]>(urlMovements).then(
      ({ data }) => data
    );
