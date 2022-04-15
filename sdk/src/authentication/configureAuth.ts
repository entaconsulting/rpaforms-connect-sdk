import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./msalConfig";

// common configuration parameters are located at msalConfig.js
export let myMSALObj: PublicClientApplication;

const configureAuth = (options: {
  clientId: string;
  authority: string;
  redirectUri: string;
}) => {
  const authConfig: Configuration = {
    ...msalConfig,
    auth: {
      clientId: options.clientId,
      authority: options.authority,
      redirectUri: options.redirectUri,
    },
  };

  myMSALObj = new PublicClientApplication(authConfig);
};
export default configureAuth;
