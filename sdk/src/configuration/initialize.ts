import { configureHttpRpaFormsClient } from "../api/httpRpaFormsClient/httpRpaFormsClient";
import { selectAccount } from "../authentication/authentication";
import configureAuth from "../authentication/configureAuth";
import { RpaFormsSdkConfiguration } from "./types";

const initialize = (options: RpaFormsSdkConfiguration) => {
  configureAuth(options.authentication);
  selectAccount();
  configureHttpRpaFormsClient(options.serviceUrl);
};
export default initialize;
