import {
  FormValidationResult,
  TransferVm,
} from "../transfer.vm";
import {
  validateAccountIdField,
  validateAmountField,
  validateConceptField,
  validateEmailField,
  validateIBANField,
  validateNameField,
  validateNotestField,
  validateRealDateField,
} from "./transfer-field.validation";

export const validateForm = (transfer: TransferVm): FormValidationResult => {
  const fieldValidationResults = [
    validateIBANField(transfer.iban),
    validateAccountIdField(transfer.accountId),
    validateNameField(transfer.name),
    validateAmountField(transfer.amount),
    validateConceptField(transfer.concept),
    validateNotestField(transfer.notes),
    validateRealDateField(transfer.realDateTransfer),
    validateEmailField(transfer.email),
  ];

  return {
    succeeded: Object.values(fieldValidationResults).every((f) => f.succeeded),
    errors: {
      iban: fieldValidationResults[0].errorMessage ?? "",
      accountId: fieldValidationResults[1].errorMessage ?? "",
      name: fieldValidationResults[2].errorMessage ?? "",
      amount: fieldValidationResults[3].errorMessage ?? "",
      concept: fieldValidationResults[4].errorMessage ?? "",
      notes: fieldValidationResults[5].errorMessage ?? "",
      realDateTransfer: fieldValidationResults[6].errorMessage ?? "",
      email: fieldValidationResults[7].errorMessage ?? "",
      dateTransfer: "",
    },
  };
};
