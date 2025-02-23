import { FormValidationResult } from "@/common/validations";
import {
  validateNameField,
  validateTypeField,
} from "./account-field.validation";
import { AccountError, AccountVm } from "../account.vm";

export const validateForm = (
  acount: AccountVm
): FormValidationResult<AccountError> => {
  const fieldValidationResults = [
    validateTypeField(acount.type),
    validateNameField(acount.name),
  ];

  return {
    succeeded: Object.values(fieldValidationResults).every((f) => f.succeeded),
    errors: {
      type: fieldValidationResults[0].errorMessage ?? "",
      name: fieldValidationResults[1].errorMessage ?? "",
    },
  };
};
