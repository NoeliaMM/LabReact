import Axios from "axios";
import { AccountVm } from "../account.vm";
import { AccountApi } from "./account.api-model";

const urlAccount = `${import.meta.env.VITE_BASE_API_URL}/account-list`;

export const saveAccount = (account: AccountVm): Promise<AccountApi> =>
  Axios.post<AccountApi>(urlAccount, account).then(({ data }) => data);
