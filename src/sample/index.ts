import {
  isAutenticated,
  selectAccount,
  signIn,
  signOut,
} from "../authentication/authPopup";

// Select DOM elements to work with
const container = document.getElementById("container");
const signInButton = document.getElementById("SignIn");

const setSignInButton = () => {
  if (!signInButton) return;
  signInButton.innerHTML = isAutenticated() ? "Sign Out" : "Sign In";
};
const handleSignInOut = async () => {
  if (!isAutenticated()) {
    await signIn();
  } else {
    await signOut();
  }
  setSignInButton();
};

const init = () => {
  if (signInButton) {
    signInButton.addEventListener("click", handleSignInOut);
  }
  selectAccount();
  setSignInButton();
};

init();
