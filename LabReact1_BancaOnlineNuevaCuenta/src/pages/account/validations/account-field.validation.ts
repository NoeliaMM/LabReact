import {
  buildValidationFailedResult,
  buildValidationSucceededResult,
  isStringValueInformed,
  REQUIRED_ALIAS_MESSAGE,
  REQUIRED_TYPE_MESSAGE,
} from "@/common/validations";

import { FieldValidationResult } from "@/common/validations/validation.model";

export const validateTypeField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_TYPE_MESSAGE);
  }

  return buildValidationSucceededResult();
};

export const validateNameField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildValidationFailedResult(REQUIRED_ALIAS_MESSAGE);
  }

  return buildValidationSucceededResult();
};
