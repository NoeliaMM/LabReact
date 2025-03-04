import { TransferVm } from '../transfer.vm';
import {validateForm} from './transfer-form.validation';
import {vi} from 'vitest';
import * as transferFieldValidation from './transfer-field.validation';

describe("transfer-form.validation spec",()=>{
    describe("valdateForm",()=>{
    it("Should return true when all fields are correct",()=> {

      const transfer: TransferVm = { 
        accountId: "1", 
        iban: "ES91 2100 0418 4502 0005 1332", 
        name: "John Doe", 
        amount: 1, 
        concept: "Test", 
        notes: "", 
        dateTransfer: "", 
        realDateTransfer: undefined, 
        email: "", 
      };

      vi.spyOn(transferFieldValidation, "validateIBANField").mockReturnValue({ 
        succeeded: true 
      }); 
      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({ 
        succeeded: true 
      }); 
      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({ 
        succeeded: true 
      }); 
      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue( 
        { 
          succeeded: true
        }); 
      vi.spyOn(transferFieldValidation, "validateNotestField").mockReturnValue({
        succeeded: true
      }); 
      vi.spyOn( 
        transferFieldValidation,"validateRealDateField").mockReturnValue({ 
          succeeded: true 
        }); 
      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({ 
        succeeded: true, 
      }); 
      // Act 
      const result = validateForm(transfer); 
      // Assert 
      expect(result.succeeded).toBeTruthy(); 
      expect(result.errors).toEqual({ 
        accountId: "", 
        iban: "", 
        name: "", 
        amount: "", 
        concept: "", 
        notes: "", 
        realDateTransfer: "", 
        email: "", 
        dateTransfer: "", 
      }); 
    }); 
    it("Should return false when validateNameFieldAmount is incorrect",()=> {

      const transfer: TransferVm = { 
        accountId: "1", 
        iban: "ES91 2100 0418 4502 0005 1332", 
        name: "", 
        amount: 1, 
        concept: "Test", 
        notes: "", 
        dateTransfer: "",         
        email: "", 
      };

      vi.spyOn(transferFieldValidation, "validateIBANField").mockReturnValue({ 
        succeeded: true 
      }); 
      vi.spyOn(transferFieldValidation, "validateNameField").mockReturnValue({ 
        succeeded: false,
        errorMessage:"Error" 
      }); 
      vi.spyOn(transferFieldValidation, "validateAmountField").mockReturnValue({ 
        succeeded: true 
      }); 
      vi.spyOn(transferFieldValidation, "validateConceptField").mockReturnValue( 
        { 
          succeeded: true
        }); 
      vi.spyOn(transferFieldValidation, "validateNotestField").mockReturnValue({
        succeeded: true
      }); 
      vi.spyOn( 
        transferFieldValidation,"validateRealDateField").mockReturnValue({ 
          succeeded: true 
        }); 
      vi.spyOn(transferFieldValidation, "validateEmailField").mockReturnValue({ 
        succeeded: true, 
      }); 
      // Act 
      const result = validateForm(transfer); 
      // Assert 
      expect(result.succeeded).toBeFalsy(); 
      expect(result.errors).toEqual({ 
        accountId: "", 
        iban: "", 
        name: "Error", 
        amount: "", 
        concept: "", 
        notes: "", 
        realDateTransfer: "", 
        email: "", 
        dateTransfer: "", 
      }); 
    });    
   });
})