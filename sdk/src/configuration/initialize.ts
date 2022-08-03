import { configureHttpRpaFormsClient } from "../api/httpRpaFormsClient/httpRpaFormsClient";
import { selectAccount } from "../authentication/authentication";
import configureAuth from "../authentication/configureAuth";
import { configureSettings } from "./configureSettings";
import { RpaFormsSdkConfigurationOptions } from "./types";

const initialize = (options: RpaFormsSdkConfigurationOptions) => {
  configureSettings(options);
  configureAuth();
  selectAccount();
  configureHttpRpaFormsClient();
};
export default initialize;
