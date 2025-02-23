import validator from "validator";

export const isValidIban = (iban:string):boolean => validator.isIBAN(iban);

export const isPositiveNumber = (amount:number):boolean=>(amount > 0);

export const isDateAfterToday = (date:string):boolean =>  new Date(date) > new 
Date();

export const isEmailWellFormed = (email:string):boolean =>
    validator.isEmail(email);

export const isStringValueInformed =(field:string):boolean=> field !== "";

export const isValueNotNullOrUndefined =<T>(field: T):boolean => field !== undefined && field !== null;