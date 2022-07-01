import { Configuration, PublicClientApplication } from "@azure/msal-browser";
import { msalConfig } from "./msalConfig";

// common configuration parameters are located at msalConfig.js
export let myMSALObj: PublicClientApplication;
export const tokenRequest = {
  scopes: [] as string[],
};

const configureAuth = (options: {
  clientId: string;
  authority: string;
  redirectUri: string;
  appIdURI?: string;
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
  let tokenScope = options.appIdURI
    ? `${options.appIdURI}/access_as_user`
    : "api://rpaforms.com/b782e2e8-9682-4898-b211-a304714f4f6b/access_as_user";
  if (!tokenScope.endsWith("")) {
    tokenScope = tokenScope + "/access_as_user";
  }
  tokenRequest.scopes.push(tokenScope);
};
export default configureAuth;
