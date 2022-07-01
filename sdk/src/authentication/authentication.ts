import {
  InteractionRequiredAuthError,
  SilentRequest,
} from "@azure/msal-browser";
import { AccountNotFoundError } from "./authError";
import { myMSALObj, tokenRequest } from "./configureAuth";

// common configuration parameters are located at msalConfig.js
let username = "";
let forceLogin = false;

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
export const needsExplicitLogin = () => forceLogin;
export const getCurrentUsername = () => username;

export const signIn = async () => {
  if (!myMSALObj)
    throw new Error(
      "Authorization not configured. Please call configureAuth before signIn."
    );
  const request = forceLogin
    ? {
        ...tokenRequest,
        prompt: "login",
      }
    : tokenRequest;
  try {
    const result = await myMSALObj.loginPopup(request);
    if (!result.account) throw new Error("No account info after login"); //this shouldn't happen
    forceLogin = false;
    username = result.account?.username;
  } catch (e) {
    forceLogin = true;
    throw e;
  }
};

export const signOut = async () => {
  const logoutRequest = {
    account: myMSALObj.getAccountByUsername(username),
  };

  await myMSALObj.logoutPopup(logoutRequest);
  username = "";
  forceLogin = false;
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

export const withAuthentication = (func: () => Promise<unknown>) => {
  return async () => {
    if (!isAutenticated()) {
      await signIn();
    }
    await func();
  };
};
