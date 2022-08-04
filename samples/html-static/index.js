//configuración
const rpaFormsConnectSdkConfig = {
  authentication: {
    clientId: "18db5397-4d46-4300-9e36-6d8c5c28a818",
    authority: "https://login.microsoftonline.com/organizations",
    redirectUri: "http://localhost:5500/samples/html-static/blank.html",
  },
  serviceUrl: "https://app.rpaforms.com/api",
};

//inicialización al finalizar la carga de la página
document.addEventListener(
  "DOMContentLoaded",
  function () {
    rpaFormsConnectSdk.initialize(rpaFormsConnectSdkConfig);

    signInButton.addEventListener("click", handleSignIn);
    rpaFormsConnectSdk.authentication.selectAccount();
    setAccountInfo();
  },
  false
);

//mapeo de elementos de la página
const signInButton = document.getElementById("SignIn");
const signOutButton = document.getElementById("SignOut");
const accountContainer = document.getElementById("AccountContainer");

//autenticación
const setAccountInfo = () => {
  if (rpaFormsConnectSdk.authentication.isAutenticated()) {
    signInButton.hidden = true;
    signOutButton.hidden = false;
    accountContainer.innerHTML =
      rpaFormsConnectSdk.authentication.getCurrentUsername();
  } else {
    signInButton.hidden = false;
    signOutButton.hidden = true;
    accountContainer.innerHTML = "";
  }
};
const handleSignIn = () => {
  if (rpaFormsConnectSdk.authentication.isAutenticated()) return;
  rpaFormsConnectSdk.authentication.signIn().then(() => {
    setAccountInfo();
  });
};
