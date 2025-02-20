import { isValidIban,isPositiveNumber,
  isDateAfterToday,isEmailWellFormed, isStringValueInformed, 
  isValueNotNullOrUndefined} from "./plain.validation";

describe("plain.validation", () => {
  describe("isValidIban spec", () => {
    test.each([
      ["ES1001289282216773521582", true],
      ["ES91 2100 0418 4502 0005 1332", true],
      ["ES91-2100-0418-4502-0005-1332", true],
      ["ES9121000418450200051332", true],
      ["ES9521001647056318451363", false],
      ["ES91 2100 0418 4502 0005 1333", false],
      ["R09090909099090909", false],
      ["", false],
      ["9521001647056318451361", false],
      ["AB95-2100-1647-056318451361", false],
      ["ES95  2100  1647  056318451361", true],
    ])(
      "Deberia devolver para el IBAN %s el valor %s",
      (iban: string, expected: boolean) => {
        expect(isValidIban(iban)).toBe(expected);
      }
    );
  });

  describe("isPositiveNumber spec", ()=>{
    it("should return true is amount positive",()=>{     
      const amount=1;    
      expect(isPositiveNumber(amount)).toBeTruthy();
    });

    it("should return false is amount negative",()=>{     
      const amount=-1;    
      expect(isPositiveNumber(amount)).toBeFalsy();
    });

    it("should return false is amount is 0",()=>{     
      const amount=0;    
      expect(isPositiveNumber(amount)).toBeFalsy();
    });
  });


    describe("isDateAfterToday spec", () => {      
      const today = new Date();
      const date1 = new Date(today); 
      date1.setDate(date1.getDate() + 1); 
    
      const date2 = new Date(today); 
      date2.setDate(date2.getDate() - 3);

      test.each([
        [today, false],
        [date1, true],
        [date2, false]     
      ])(
        "Deberia devolver para la fecha %s el valor %s",
        (dateTest: Date, expected: boolean) => {
          expect(isDateAfterToday(dateTest)).toBe(expected);
        }
      );
    });

    describe("isEmailWellFormed spec", () => {      
      test.each([
        ['email@gmail.com', true],
        ['solonombre', false]
      ])(
        "Deberia devolver para el mail %s el valor %s",
        (mail: string, expected: boolean) => {
          expect(isEmailWellFormed(mail)).toBe(expected);
        }
      );
    });

    describe("isStringValueInformed spec", ()=>{
      it("should return true is field informed",()=>{     
        const field="hola";    
        expect(isStringValueInformed(field)).toBeTruthy();
      });
  
      it("should return false is not field informed",()=>{     
        const field="";    
        expect(isStringValueInformed(field)).toBeFalsy();
      });
    });

    describe("isValueNotNullOrUndefined specs", () => {      

      test.each([
        ["test", true],
        [1, true],
        [null, false],
        [undefined, false]     
      ])(
        "Deberia devolver para el valor %s el valor %s",
        <T>(value: T, expected: boolean) => {
          expect(isValueNotNullOrUndefined(value)).toBe(expected);
        }
      );
    });


});
