"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getTokenPopup = exports.signOut = exports.signIn = exports.isAutenticated = exports.selectAccount = void 0;
const msal_browser_1 = require("@azure/msal-browser");
const authError_1 = require("./authError");
// configuration parameters are located at authConfig.js
const myMSALObj = new msal_browser_1.PublicClientApplication(msalConfig);
let username = "";
const selectAccount = () => {
    const currentAccounts = myMSALObj.getAllAccounts();
    if (currentAccounts.length === 0) {
        username = "";
        return;
    }
    else if (currentAccounts.length > 1) {
        // Add choose account code here
        username = "";
        console.warn("Multiple accounts detected.");
    }
    else if (currentAccounts.length === 1) {
        username = currentAccounts[0].username;
    }
};
exports.selectAccount = selectAccount;
const isAutenticated = () => !!username;
exports.isAutenticated = isAutenticated;
const signIn = async () => {
    await myMSALObj.loginPopup(loginRequest);
};
exports.signIn = signIn;
const signOut = async () => {
    const logoutRequest = {
        account: myMSALObj.getAccountByUsername(username),
    };
    await myMSALObj.logoutPopup(logoutRequest);
    username = "";
};
exports.signOut = signOut;
const getTokenPopup = async () => {
    /**
     * See here for more info on account retrieval:
     * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
     */
    const account = myMSALObj.getAccountByUsername(username);
    if (!account) {
        throw new authError_1.AccountNotFoundError("Account not found.");
    }
    let error;
    const request = {
        account,
        scopes: [
            "api://localhost/a3422c27-265d-4cdc-bb0a-d30ecbd799a7/access_as_user",
        ],
    };
    try {
        return myMSALObj.acquireTokenSilent(request);
    }
    catch (e) {
        console.warn("silent token acquisition fails. acquiring token using popup");
        if (!(e instanceof msal_browser_1.InteractionRequiredAuthError)) {
            console.warn(e);
            return;
        }
    }
    // fallback to interaction when silent call fails
    try {
        return await myMSALObj.acquireTokenPopup(request);
    }
    catch (error) {
        console.error(error);
    }
};
exports.getTokenPopup = getTokenPopup;
//# sourceMappingURL=authPopup.js.map