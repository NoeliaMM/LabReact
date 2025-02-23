import { AccountVm } from "../account.vm";
import { validateForm } from "./account-form.validation";
import { vi } from "vitest";
import * as accountFieldValidation from "./account-field.validation";

describe("account-form.validation spec", () => {
  describe("valdateForm", () => {
    it("Should return true when all fields are correct", () => {
      const transfer: AccountVm = {
        type: "1",
        name: "Cuenta 1",
      };

      vi.spyOn(accountFieldValidation, "validateTypeField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(accountFieldValidation, "validateNameField").mockReturnValue({
        succeeded: true,
      });

      // Act
      const result = validateForm(transfer);
      // Assert
      expect(result.succeeded).toBeTruthy();
      expect(result.errors).toEqual({
        type: "",
        name: "",
      });
    });
    it("Should return false when validateTypeField is incorrect", () => {
      const account: AccountVm = {
        type: "",
        name: "cuenta 1",
      };

      vi.spyOn(accountFieldValidation, "validateNameField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(accountFieldValidation, "validateTypeField").mockReturnValue({
        succeeded: false,
        errorMessage: "Error",
      });

      // Act
      const result = validateForm(account);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "Error",
        name: "",
      });
    });
    it("Should return false when validateNameField is incorrect", () => {
      const account: AccountVm = {
        type: "1",
        name: "",
      };

      vi.spyOn(accountFieldValidation, "validateTypeField").mockReturnValue({
        succeeded: true,
      });
      vi.spyOn(accountFieldValidation, "validateNameField").mockReturnValue({
        succeeded: false,
        errorMessage: "Error",
      });

      // Act
      const result = validateForm(account);
      // Assert
      expect(result.succeeded).toBeFalsy();
      expect(result.errors).toEqual({
        type: "",
        name: "Error",
      });
    });
  });
});
