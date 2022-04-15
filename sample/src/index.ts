import {
  authentication,
  userProfile,
  initialize,
  formInstance,
} from "@entaconsulting/rpaforms-connect-sdk";

// Select DOM elements to work with
const signInButton = document.getElementById("SignIn")!;
const accountContainer = document.getElementById("AccountContainer")!;

const listFormDefinitionsButton = document.getElementById(
  "ListFormDefinitions"
)!;
const listFormDefinitionsResult = document.getElementById(
  "ListFormDefinitionsResult"
)!;

const createFormDefinitionId: HTMLInputElement = document.getElementById(
  "CreateFormDefinitionId"
)! as HTMLInputElement;
const createFormDefinitionButton = document.getElementById(
  "CreateFormDefinition"
)!;
const createFormDefinitionResult = document.getElementById(
  "CreateFormDefinitionResult"
)!;

const listFormInstancesButton = document.getElementById("ListFormInstances")!;
const listFormInstancesResult = document.getElementById(
  "ListFormInstancesResult"
)!;

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

const handleListFormDefinitions = async () => {
  try {
    listFormDefinitionsResult.innerHTML = "Loading...";
    const result = await userProfile.formDefinitions();
    listFormDefinitionsResult.innerHTML = JSON.stringify(result);
  } catch (e: any) {
    listFormDefinitionsResult.innerHTML = e.message;
  }
};

const handleListFormInstances = async () => {
  try {
    listFormInstancesResult.innerHTML = "Loading...";
    const result = await formInstance.listUserInstances();
    listFormInstancesResult.innerHTML = JSON.stringify(result);
  } catch (e: any) {
    listFormInstancesResult.innerHTML = e.message;
  }
};

const handleCreateFormDefinition = async () => {
  try {
    const id = createFormDefinitionId.value;
    if (!id) throw new Error("Form definition ID empty.");
    createFormDefinitionResult.innerHTML = "Creating...";
    const result = await formInstance.create(id);
    createFormDefinitionResult.innerHTML = JSON.stringify(result);
  } catch (e: any) {
    createFormDefinitionResult.innerHTML = e.message;
  }
};
const init = () => {
  initialize({
    authentication: {
      clientId: "18db5397-4d46-4300-9e36-6d8c5c28a818",
      authority: "https://login.microsoftonline.com/organizations",
      redirectUri: "http://localhost:5500/sample/dist/",
    },
    serviceUrl: "https://localhost:6001/api",
  });

  signInButton.addEventListener("click", handleSignInOut);
  authentication.selectAccount();
  setAccountInfo();

  listFormDefinitionsButton.addEventListener(
    "click",
    handleListFormDefinitions
  );

  createFormDefinitionButton.addEventListener(
    "click",
    handleCreateFormDefinition
  );

  listFormInstancesButton.addEventListener("click", handleListFormInstances);
};

document.addEventListener(
  "DOMContentLoaded",
  function () {
    init();
  },
  false
);
