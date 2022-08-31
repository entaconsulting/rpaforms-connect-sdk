import {
  InteractionRequiredAuthError,
  SilentRequest,
} from "@azure/msal-browser";
import { getAuthSettings } from "../configuration/configureSettings";
import { DelegatedAuthenticationOptions } from "../rpaforms-connect-sdk";
import { AccountNotFoundError } from "./authError";
import { authMode, myMSALObj, tokenRequest } from "./configureAuth";

// common configuration parameters are located at msalConfig.js
let username = "";
let forceLogin = false;

export const selectAccount = () => {
  if (authMode === "delegated") {
    throw new Error(
      "Cannot call selectAccount when authentication method is delegated."
    );
  }
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

export const isAutenticated = () => {
  if (authMode === "delegated") {
    throw new Error(
      "Cannot call isAutenticated when authentication method is delegated."
    );
  }
  return !!username;
};
export const needsExplicitLogin = () => {
  if (authMode === "delegated") {
    throw new Error(
      "Cannot call needsExplicitLogin when authentication method is delegated."
    );
  }
  return forceLogin;
};
export const getCurrentUsername = () => {
  if (authMode === "delegated") {
    throw new Error(
      "Cannot call getCurrentUsername when authentication method is delegated."
    );
  }
  return username;
};

export const signIn = async () => {
  if (authMode === "delegated") {
    throw new Error(
      "Cannot call signIn when authentication method is delegated."
    );
  }
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
  if (authMode === "delegated") {
    throw new Error(
      "Cannot call signOut when authentication method is delegated."
    );
  }
  const logoutRequest = {
    account: myMSALObj.getAccountByUsername(username),
  };

  await myMSALObj.logoutPopup(logoutRequest);
  username = "";
  forceLogin = false;
};

export const getTokenPopup = async () => {
  if (authMode === "delegated") {
    const authSettings = getAuthSettings<DelegatedAuthenticationOptions>();
    const token = await authSettings.getToken();
    return token;
  }
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
    return (await myMSALObj.acquireTokenSilent(request))?.accessToken;
  } catch (e) {
    console.warn("silent token acquisition fails. acquiring token using popup");
    if (!(e instanceof InteractionRequiredAuthError)) {
      console.warn(e);
      return;
    }
  }

  // fallback to interaction when silent call fails
  try {
    return (await myMSALObj.acquireTokenPopup(request))?.accessToken;
  } catch (error) {
    console.error(error);
  }
};

export const withAuthentication = (func: () => Promise<unknown>) => {
  if (authMode === "delegated") {
    throw new Error(
      "Cannot call withAuthentication when authentication method is delegated."
    );
  }
  return async () => {
    if (!isAutenticated()) {
      await signIn();
    }
    await func();
  };
};
