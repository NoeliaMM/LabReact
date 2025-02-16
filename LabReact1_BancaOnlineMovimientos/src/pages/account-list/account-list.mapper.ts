import * as apiModel from "./api/account-list.api-model";
import * as viewModel from "./account-list.vm";

export const mapAccountListFromApiToVm = (
  accountList: apiModel.AccountApiModel[]
): viewModel.AccountVm[] =>
  accountList.map((account) => mapItemFromApiToVm(account));

export const mapItemFromApiToVm = (
  account: apiModel.AccountApiModel
): viewModel.AccountVm => ({
  id: account.id,
  iban: account.iban,
  name: account.name,
  balance: account.balance.toString(),
  lastTransaction: new Date(account.lastTransaction),
});
