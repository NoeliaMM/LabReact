import {
  REQUIRED_ALIAS_MESSAGE,
  REQUIRED_TYPE_MESSAGE,
} from "@/common/validations";
import {
  validateNameField,
  validateTypeField,
} from "./account-field.validation";

describe("account-field.validation spec", () => {
  describe("validateTypeField", () => {
    it("Should return false when type is not informed", () => {
      const value = "";
      const result = validateTypeField(value);

      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toBe(REQUIRED_TYPE_MESSAGE);
    });

    it("Should return true when type is  informed", () => {
      const value = "1";
      const result = validateTypeField(value);

      expect(result.succeeded).toBeTruthy();
    });
  });
  describe("validateNameField", () => {
    it("Should return false when Alias is not informed", () => {
      const value = "";
      const result = validateNameField(value);

      expect(result.succeeded).toBeFalsy();
      expect(result.errorMessage).toBe(REQUIRED_ALIAS_MESSAGE);
    });
    it("Should return true when Alias is informed", () => {
      const value = "1";
      const result = validateNameField(value);

      expect(result.succeeded).toBeTruthy();
    });
  });
});
