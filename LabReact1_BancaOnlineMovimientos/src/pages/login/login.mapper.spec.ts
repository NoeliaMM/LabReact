import { mapCredentialsFromVmToApi } from "./login.mapper";
import * as apiModel from "./api/login.api-model";
import * as viewModel from "./login.vm";

describe("mapCredentialsFromVmToApi", () => {
  it("should return credentials same as viewmodel", () => {
    //Arrange
    const vwCredentials: viewModel.Credentials = {
      user: "test",
      password: "test",
    };

    const expectedApiCredentials: apiModel.Credentials = {
      user: "test",
      password: "test",
    };

    const credentials = mapCredentialsFromVmToApi(vwCredentials);

    expect(credentials).toEqual(expectedApiCredentials);
  });
});
