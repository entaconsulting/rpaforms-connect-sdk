"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const authPopup_1 = require("../authentication/authPopup");
// Select DOM elements to work with
const container = document.getElementById("container");
const signInButton = document.getElementById("SignIn");
const init = () => {
    (0, authPopup_1.selectAccount)();
    if ((0, authPopup_1.isAutenticated)()) {
        if (signInButton) {
            signInButton.setAttribute("onclick", "doSignOut();");
            signInButton.innerHTML = "Sign Out";
        }
    }
};
const doSignIn = async () => {
    await (0, authPopup_1.signIn)();
    if ((0, authPopup_1.isAutenticated)()) {
        if (signInButton) {
            signInButton.setAttribute("onclick", "doSignOut();");
            signInButton.innerHTML = "Sign Out";
        }
    }
};
const doSignOut = async () => {
    await (0, authPopup_1.signOut)();
    if (!(0, authPopup_1.isAutenticated)()) {
        if (signInButton) {
            signInButton.setAttribute("onclick", "doSignIn();");
            signInButton.innerHTML = "Sign In";
        }
    }
};
init();
//# sourceMappingURL=rpaforms-connect-sdk-sample.js.map