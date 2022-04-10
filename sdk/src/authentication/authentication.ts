import {
  Configuration,
  InteractionRequiredAuthError,
  PublicClientApplication,
  SilentRequest,
} from "@azure/msal-browser";
import { loginRequest, msalConfig } from "./msalConfig";
import { AccountNotFoundError } from "./authError";

// common configuration parameters are located at msalConfig.js
let myMSALObj: PublicClientApplication;
let username = "";

export const configureAuth = (options: {
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

export const selectAccount = () => {
  const currentAccounts = myMSALObj.getAllAccounts();
  if (currentAccounts.length === 0) {
    username = "";
    return;
  } else if (currentAccounts.length > 1) {
    // Add choose account code here
    username = "";
    console.warn("Multiple accounts detected.");
  } else if (currentAccounts.length === 1) {
    username = currentAccounts[0].username;
  }
};

export const isAutenticated = () => !!username;
export const getCurrentUsername = () => username;

export const signIn = async () => {
  if (!myMSALObj)
    throw new Error(
      "Authorization not configured. Please call configureAuth before signIn."
    );
  try {
    const result = await myMSALObj.loginPopup(loginRequest);
    if (!result.account) throw new Error("No account info after login"); //this shouldn't happen
    username = result.account?.username;
  } catch (e) {
    console.log(e);
  }
};

export const signOut = async () => {
  const logoutRequest = {
    account: myMSALObj.getAccountByUsername(username),
  };

  await myMSALObj.logoutPopup(logoutRequest);
  username = "";
};

export const getTokenPopup = async () => {
  /**
   * See here for more info on account retrieval:
   * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
   */
  const account = myMSALObj.getAccountByUsername(username);
  if (!account) {
    throw new AccountNotFoundError("Account not found.");
  }
  const request: SilentRequest = {
    account,
    scopes: [
      "api://localhost/a3422c27-265d-4cdc-bb0a-d30ecbd799a7/access_as_user",
    ],
  };
  try {
    return myMSALObj.acquireTokenSilent(request);
  } catch (e) {
    console.warn("silent token acquisition fails. acquiring token using popup");
    if (!(e instanceof InteractionRequiredAuthError)) {
      console.warn(e);
      return;
    }
  }

  // fallback to interaction when silent call fails
  try {
    return await myMSALObj.acquireTokenPopup(request);
  } catch (error) {
    console.error(error);
  }
};
