import { CredentialsFormErrors, emptyCredentialsFormErrors } from "./login.vm";

interface ValidationResult{
    succedded:boolean;
    errors: CredentialsFormErrors
}

export const validateForm = (credentials: CredentialsFormErrors): ValidationResult=>{
    let validationResult :ValidationResult = { succedded:true, errors:emptyCredentialsFormErrors()};

    if(!credentials.user.trim()){
       validationResult.succedded = false;
       validationResult.errors ={...validationResult.errors, user: "Debe informar el campo usuario"};
    }

    if(!credentials.password.trim()){
        validationResult.succedded = false;
        validationResult.errors = {...validationResult.errors, password: "Debe informar el campo contraseña"};
    }

    return validationResult;
}