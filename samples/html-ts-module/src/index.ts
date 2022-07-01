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
    signInButton.hidden = true;
  } else {
    signInButton.hidden = !authentication.needsExplicitLogin();
    signInButton.innerHTML = "Sign In";
  }
};

const handleSignIn = async () => {
  if (!authentication.isAutenticated()) {
    try {
      await authentication.signIn();
    } catch {}
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
      clientId: "d3acdcda-130c-419a-b9d6-6ca1e0d2ceef",
      authority: "https://login.microsoftonline.com/organizations",
      redirectUri: "http://localhost:5500/sample/dist/blank.html",
      appIdURI:
        "api://rpaforms-dev.azurewebsites.net/d3acdcda-130c-419a-b9d6-6ca1e0d2ceef",
    },
    serviceUrl: "https://app.rpaforms.com/api",
  });

  signInButton.addEventListener("click", handleSignIn);
  setAccountInfo();

  listFormDefinitionsButton.addEventListener(
    "click",
    authentication.withAuthentication(handleListFormDefinitions)
  );

  createFormDefinitionButton.addEventListener(
    "click",
    authentication.withAuthentication(handleCreateFormDefinition)
  );

  listFormInstancesButton.addEventListener(
    "click",
    authentication.withAuthentication(handleListFormInstances)
  );
};

document.addEventListener(
  "DOMContentLoaded",
  function () {
    init();
  },
  false
);
