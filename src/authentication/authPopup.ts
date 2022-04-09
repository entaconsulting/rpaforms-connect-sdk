import {
  InteractionRequiredAuthError,
  PublicClientApplication,
  SilentRequest,
} from "@azure/msal-browser";
import { AccountNotFoundError } from "./authError";

// configuration parameters are located at authConfig.js
const myMSALObj = new PublicClientApplication(msalConfig);
let username: string = "";

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

export const signIn = async () => {
  await myMSALObj.loginPopup(loginRequest);
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
  let error;
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
