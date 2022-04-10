import { authentication } from "rpaforms-connect-sdk";

// Select DOM elements to work with
const container = document.getElementById("container");
const signInButton = document.getElementById("SignIn");

const setSignInButton = () => {
  if (!signInButton) return;
  signInButton.innerHTML = authentication.isAutenticated()
    ? "Sign Out"
    : "Sign In";
};
const handleSignInOut = async () => {
  if (!authentication.isAutenticated()) {
    await authentication.signIn();
  } else {
    await authentication.signOut();
  }
  setSignInButton();
};

const init = () => {
  if (signInButton) {
    signInButton.addEventListener("click", handleSignInOut);
  }
  authentication.selectAccount();
  setSignInButton();
};

init();
