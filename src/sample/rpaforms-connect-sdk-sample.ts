import { AccountInfo, AuthenticationResult } from "@azure/msal-browser";
import {
  isAutenticated,
  selectAccount,
  signIn,
  signOut,
} from "../authentication/authPopup";

// Select DOM elements to work with
const container = document.getElementById("container");
const signInButton = document.getElementById("SignIn");

const init = () => {
  selectAccount();
  if (isAutenticated()) {
    if (signInButton) {
      signInButton.setAttribute("onclick", "doSignOut();");
      signInButton.innerHTML = "Sign Out";
    }
  }
};

const doSignIn = async () => {
  await signIn();
  if (isAutenticated()) {
    if (signInButton) {
      signInButton.setAttribute("onclick", "doSignOut();");
      signInButton.innerHTML = "Sign Out";
    }
  }
};
const doSignOut = async () => {
  await signOut();
  if (!isAutenticated()) {
    if (signInButton) {
      signInButton.setAttribute("onclick", "doSignIn();");
      signInButton.innerHTML = "Sign In";
    }
  }
};

init();
