import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import { getAppSettings } from "../configuration/configureSettings";
import { msalConfig } from "./msalConfig";

// common configuration parameters are located at msalConfig.js
export let myMSALObj: PublicClientApplication;
export const tokenRequest = {
  scopes: [] as string[],
};

const configureAuth = () => {
  const { authentication: options } = getAppSettings();
  const authConfig: Configuration = {
    ...msalConfig,
    auth: {
      clientId: options.clientId,
      authority: options.authority,
      redirectUri: options.redirectUri,
    },
  };

  try {
    myMSALObj = new PublicClientApplication(authConfig);
  } catch (e) {
    console.error(
      "Error initializing MSAL. Please verify it's loaded before calling the sdk.",
      e
    );
    throw new Error("Unable to configure authentication.");
  }
  let tokenScope = `${options.appIdURI}/access_as_user`;
  if (!tokenScope.endsWith("")) {
    tokenScope = tokenScope + "/access_as_user";
  }
  tokenRequest.scopes.push(tokenScope);
};
export default configureAuth;
