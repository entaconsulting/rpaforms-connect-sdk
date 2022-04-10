import { authentication } from "rpaforms-connect-sdk";

// Select DOM elements to work with
const signInButton = document.getElementById("SignIn")!;
const accountContainer = document.getElementById("account")!;

const setAccountInfo = () => {
  if (authentication.isAutenticated()) {
    signInButton.innerHTML = "Sign Out";
    accountContainer.innerHTML = `Signed in account: ${authentication.getCurrentUsername()}`;
  } else {
    signInButton.innerHTML = "Sign In";
    accountContainer.innerHTML = ``;
  }
};
const handleSignInOut = async () => {
  if (!authentication.isAutenticated()) {
    await authentication.signIn();
  } else {
    await authentication.signOut();
  }
  setAccountInfo();
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
  setAccountInfo();
};

document.addEventListener(
  "DOMContentLoaded",
  function () {
    init();
  },
  false
);
