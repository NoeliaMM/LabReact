import { FormValidationResult } from "@/common/validations";
import { Credentials, CredentialsFormErrors} from "./login.vm";
import { validationPasswordField, validationUserField } from "./login-field.validation";



export const validateForm = (credentials: Credentials): FormValidationResult<CredentialsFormErrors>=>{
  
  const fieldValidationResults = [
    validationUserField(credentials.user),
    validationPasswordField(credentials.password)
  ];

  return {
    succeeded: Object.values(fieldValidationResults).every((f) => f.succeeded),
    errors: {
        user: fieldValidationResults[0].errorMessage ?? "",
        password: fieldValidationResults[1].errorMessage ?? "",   
    },
  };
}