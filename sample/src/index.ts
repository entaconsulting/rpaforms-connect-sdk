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
  authentication.configureAuth({
    clientId: "18db5397-4d46-4300-9e36-6d8c5c28a818",
    authority: "https://login.microsoftonline.com/organizations",
    redirectUri: "http://localhost:5500/sample/dist/",
  });
  if (signInButton) {
    signInButton.addEventListener("click", handleSignInOut);
  }
  authentication.selectAccount();
  setSignInButton();
};

document.addEventListener(
  "DOMContentLoaded",
  function () {
    init();
  },
  false
);
