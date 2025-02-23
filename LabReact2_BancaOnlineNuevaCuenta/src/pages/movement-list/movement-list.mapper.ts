import * as apiModel from "./api";
import * as viewModel from "./movement-list.vm";

export const mapMovementListFromApiToVm = (
  movementList: apiModel.MovementApiModel[]
): viewModel.MovementVm[] =>
  movementList.map((movement) => mapItemFromApiToVm(movement));

export const mapItemFromApiToVm = (
  movement: apiModel.MovementApiModel
): viewModel.MovementVm => ({
  id: movement.id,
  description: movement.description,
  amount: movement.amount,
  balance: movement.balance,
  transaction: new Date(movement.transaction),
  realTransaction: new Date(movement.realTransaction),
  accountId: movement.accountId,
});

export const mapAccountFromApiToVm = (
  account: apiModel.AccountApiModel
): viewModel.AccountVm => ({
  name: account.name,
  iban: account.iban,
  balance:account.balance.toString()
});
