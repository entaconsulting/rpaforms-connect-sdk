import { configureHttpRpaFormsClient } from "../api/httpRpaFormsClient/httpRpaFormsClient";
import configureAuth from "../authentication/configureAuth";
import { RpaFormsSdkConfiguration } from "./types";

const initialize = (options: RpaFormsSdkConfiguration) => {
  configureAuth(options.authentication);
  configureHttpRpaFormsClient(options.serviceUrl);
};
export default initialize;
