import {
  buildRequiredFieldValidationFailResult,
  buildValidationSucceededResult,
  FieldValidationResult,
  isStringValueInformed,
} from "@/common/validations";

export const validationUserField = (value: string): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailResult();
  }

  return buildValidationSucceededResult();
};

export const validationPasswordField = (
  value: string
): FieldValidationResult => {
  if (!isStringValueInformed(value)) {
    return buildRequiredFieldValidationFailResult();
  }

  return buildValidationSucceededResult();
};
