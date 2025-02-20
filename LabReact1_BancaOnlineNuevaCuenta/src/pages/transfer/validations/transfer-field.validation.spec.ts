import {validateIBANField,
    INVALID_IBAN_MESSAGE,
    REQUIRED_FIELD_MESSAGE, 
    INVALID_AMOUNT_MESSAGE,
    INVALID_REAL_DATE_TRANSFER_MESSAGE,
    INVALID_EMAIL_MESSAGE,
    validateAccountIdField, 
    validateNameField,
    validateAmountField,
    validateConceptField,
    validateRealDateField,   
    validateEmailField 
} from './transfer-field.validation';

describe("transfer-field.validation spec",()=>{
    describe("validateIBANField",()=>{
    it("Should return false when IBAN is not informed",()=> {
        const value="";
        const result= validateIBANField(value);

        expect (result.succeeded).toBeFalsy();
        expect(result.errorMessage).toBe(REQUIRED_FIELD_MESSAGE);
    });

    it("Should return false when IBAN is not valid",()=> {
        const value="AB95-2100-1647-056318451361"; 
        // ["ES95  2100  1647  056318451361", true],

        const result= validateIBANField(value);

        expect (result.succeeded).toBeFalsy();
        expect(result.errorMessage).toBe(INVALID_IBAN_MESSAGE);
    });
    });
    describe("validateAccountIdField",()=>{
        it("Should return false when Id Account is not informed",()=> {
            const value="";
            const result= validateAccountIdField(value);
    
            expect (result.succeeded).toBeFalsy();
            expect(result.errorMessage).toBe(REQUIRED_FIELD_MESSAGE);
        });   
        it("Should return true when Id Account is informed",()=> {
            const value="1";
            const result= validateAccountIdField(value);
    
            expect (result.succeeded).toBeTruthy();           
        });  
      });
      describe("validateNameField",()=>{
        it("Should return false when Name is not informed",()=> {
            const value="";
            const result= validateNameField(value);
    
            expect (result.succeeded).toBeFalsy();
            expect(result.errorMessage).toBe(REQUIRED_FIELD_MESSAGE);
        });   
        it("Should return true when Name is informed",()=> {
            const value="1";
            const result= validateNameField(value);
    
            expect (result.succeeded).toBeTruthy();           
        });  
      });

      describe('validateAmountField',()=>{
        it("Should return false when amount is negative",() => {
            const value = -3;
            const result = validateAmountField(value);

            expect (result.succeeded).toBeFalsy();
            expect(result.errorMessage).toBe(INVALID_AMOUNT_MESSAGE);
     
        });

        it("Should return false when amount is 0",() => {
            const value = 0;
            const result = validateAmountField(value);

            expect (result.succeeded).toBeFalsy();
            expect(result.errorMessage).toBe(INVALID_AMOUNT_MESSAGE);
        });

        it("Should return true when amount is positive",() => {
            const value = 6000;
            const result = validateAmountField(value);

            expect(result).toBeTruthy();
        });
      });

      describe("validateConceptField",()=>{
        it("Should return false when Concept is empty",()=> {
            const value="";
            const result= validateConceptField(value);
    
            expect (result.succeeded).toBeFalsy();
            expect(result.errorMessage).toBe(REQUIRED_FIELD_MESSAGE);
        });   
        it("Should return true when Concept is informed",()=> {
            const value="pago";
            const result= validateNameField(value);
    
            expect (result.succeeded).toBeTruthy();           
        });  
      });

      describe("validateRealDateField", () => {      
            const today = new Date();
            const date1 = new Date(); 
            date1.setDate(date1.getDate() + 1); 
          
            const date2 = new Date(); 
            date2.setDate(date2.getDate() - 3);
            
      
            test.each([
                [null, { succeeded: true }],
                [today, { succeeded: false, errorMessage: INVALID_REAL_DATE_TRANSFER_MESSAGE }],
                [date1, { succeeded: true}],
                [date2, { succeeded: false, errorMessage:INVALID_REAL_DATE_TRANSFER_MESSAGE}]       
            ])(
              "Deberia devolver para la fecha %s el valor %s y el mensaje %s",
              (dateTest: Date | null | undefined, expected: { succeeded: boolean; errorMessage?: string | null }) => {                      
               
                const result = validateRealDateField(dateTest as Date |undefined);
                
                expect(result.succeeded).toEqual(expected.succeeded);
                
                if (expected.errorMessage) {
                  expect(result.errorMessage).toEqual(expected.errorMessage);
                } 
              }
            );
          });

          describe("validateEmailField", () => {      
     
            test.each([
                ['', { succeeded: true }],    
                ['hola',  { succeeded: false, errorMessage:INVALID_EMAIL_MESSAGE}],
                ['hola@com.com', { succeeded: true}],
                ['@tes.tes', { succeeded: false, errorMessage:INVALID_EMAIL_MESSAGE}]       
            ])(
              "Deberia devolver para el mail %s el valor %s y el mensaje %s",
              (value: string , expected: { succeeded: boolean; errorMessage?: string | null }) => {                      
               
                const result = validateEmailField(value);
                
                expect(result.succeeded).toEqual(expected.succeeded);
                
                if (expected.errorMessage) {
                  expect(result.errorMessage).toEqual(expected.errorMessage);
                } 
              }
            );
          });
})