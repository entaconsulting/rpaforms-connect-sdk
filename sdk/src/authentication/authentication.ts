import {
  Configuration,
  InteractionRequiredAuthError,
  PublicClientApplication,
  SilentRequest,
} from "@azure/msal-browser";
import { msalConfig, tokenRequest } from "./msalConfig";
import { AccountNotFoundError } from "./authError";
import { myMSALObj } from "./configureAuth";

// common configuration parameters are located at msalConfig.js
let username = "";

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
    const result = await myMSALObj.loginPopup(tokenRequest);
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
  if (!username) {
    throw new Error("Not autenticated.");
  }

  const account = myMSALObj.getAccountByUsername(username);
  if (!account) {
    throw new AccountNotFoundError("Account not found.");
  }
  const request: SilentRequest = {
    account,
    ...tokenRequest,
  };
  try {
    return await myMSALObj.acquireTokenSilent(request);
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
