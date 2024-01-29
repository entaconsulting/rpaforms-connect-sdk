import {
  Configuration,
  InteractionRequiredAuthError,
  PublicClientApplication,
  SilentRequest,
} from "@azure/msal-browser";
import { msalConfig } from "../authentication/msalConfig";
import {
  AuthenticationType,
  FormDefinition,
  formInstance,
  FormInstanceListResult,
  initialize,
  userProfile,
} from "../rpaforms-connect-sdk";

let myMSALObj: PublicClientApplication;
const tokenRequest = {
  scopes: [] as string[],
};

const rpaFormsConnectSdkConfig = {
  authentication: {
    getToken: async () => {
      const account = myMSALObj.getAccountByUsername(username);
      if (!account) {
        throw new Error("Account not found.");
      }
      const request: SilentRequest = {
        account,
        ...tokenRequest,
      };
      try {
        return (await myMSALObj.acquireTokenSilent(request))?.accessToken;
      } catch (e) {
        console.warn(
          "silent token acquisition fails. acquiring token using popup"
        );
        if (!(e instanceof InteractionRequiredAuthError)) {
          console.warn(e);
          return;
        }
      }

      // fallback to interaction when silent call fails
      try {
        return (await myMSALObj.acquireTokenPopup(request))?.accessToken;
      } catch (error) {
        console.error(error);
      }
    },
    username: "test",
    authType: "AAD" as AuthenticationType,
  },
  serviceUrl: "https://rpaforms-dev.azurewebsites.net/api",
  publicFillUrl: "https://rpaforms-dev.azurewebsites.net/public/fill",
};

let username = "";
const configureAuth = () => {
  const options = {
    clientId: "18db5397-4d46-4300-9e36-6d8c5c28a818",
    authority: "https://login.microsoftonline.com/organizations",
    redirectUri: "http://localhost:5500/samples/html-static/blank.html",
    appIdURI:
      "api://rpaforms-dev.azurewebsites.net/d3acdcda-130c-419a-b9d6-6ca1e0d2ceef",
  };
  const authConfig: Configuration = {
    ...msalConfig,
    auth: {
      clientId: options.clientId,
      authority: options.authority,
      redirectUri: options.redirectUri,
    },
  };

  try {
    myMSALObj = new PublicClientApplication(authConfig);
  } catch (e) {
    console.error(
      "Error initializing MSAL. Please verify it's loaded before calling the sdk.",
      e
    );
    throw new Error("Unable to configure authentication.");
  }
  let tokenScope = `${options.appIdURI}/access_as_user`;
  if (!tokenScope.endsWith("")) {
    tokenScope = tokenScope + "/access_as_user";
  }
  tokenRequest.scopes.push(tokenScope);

  const currentAccounts = myMSALObj.getAllAccounts();
  if (currentAccounts.length === 0) {
    username = "";
    return;
  } else if (currentAccounts.length > 1) {
    // Add choose account code here
    username = "";
    console.warn("Multiple accounts detected.");
  } else if (currentAccounts.length === 1) {
    username = currentAccounts[0].username;
  }
};

//mapeo de elementos de la página
const signInButton = document.getElementById("SignIn") as HTMLButtonElement;
const listFormDefinitionsButton = document.getElementById(
  "ListFormDefinitions"
) as HTMLButtonElement;
const loadMoreButton = document.getElementById(
  "ListFormInstancesMore"
) as HTMLButtonElement;
loadMoreButton.hidden = true;

const listFormDefinitionsResult = document.getElementById(
  "ListFormDefinitionsResult"
) as HTMLDivElement;
let selectedFormDefinitionId = "";
let currentContinuationToken: string | null = null;

const listFormInstancesMessage = document.getElementById(
  "ListFormInstancesMessage"
) as HTMLDivElement;
const listFormInstancesResult = document.getElementById(
  "ListFormInstancesResult"
) as HTMLDivElement;

//listar los forms que el usuario puede crear
const handleListFormDefinitions = () => {
  listFormDefinitionsResult.innerHTML = "Loading...";

  return userProfile
    .formDefinitions()
    .then((result) => {
      buildFormDefinitionsList(result);
    })
    .catch((e) => {
      listFormDefinitionsResult.innerHTML = e.message;
    });
};

//listar las instancias de forms cargados por el usuario
const handleListFormInstances = (addMore: boolean) => {
  if (!selectedFormDefinitionId) {
    listFormInstancesMessage.innerHTML = "Debe seleccionar un formDefinitionId";
    return;
  }
  listFormInstancesMessage.innerHTML = "Loading...";
  formInstance
    .listUserInstances({
      formDefinitionId: selectedFormDefinitionId,
      maxItemCount: 2,
      continuationToken: currentContinuationToken,
    })
    .then((result) => {
      buildFormInstancesList(result, addMore);
      listFormInstancesMessage.innerHTML = "";
    })
    .catch((e) => {
      listFormInstancesMessage.innerHTML = e.message;
    });
};

//autenticación
const setAccountInfo = () => {
  if (!username) {
    signInButton.hidden = true;
  } else {
    signInButton.hidden = true;
  }
};
const handleSignIn = async () => {
  if (username) return;
  const request = {
    ...tokenRequest,
    prompt: "login",
  };
  const result = await myMSALObj.loginPopup(request);
  if (!result.account) throw new Error("No account info after login"); //this shouldn't happen
  username = result.account?.username;
};

const createFormInstance = (id: string) => {
  formInstance
    .create(id)
    .then((result) => {
      window.open(result.formInstanceUri, "RPA Forms");
    })
    .catch((e) => {
      alert(e ? e.message : "Error");
    });
};
const openFormInstance = (id: string) => {
  formInstance
    .getInstanceUri(id)
    .then((result) => {
      window.open(result, "RPA Forms");
    })
    .catch((e) => {
      alert(e ? e.message : "Error");
    });
};

const deleteFormInstance = (id: string, tr: HTMLTableRowElement) => {
  formInstance
    .deleteInstance(id)
    .then(() => {
      const rowIndex = tr.rowIndex;
      // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
      const table = tr.parentElement!.parentElement as HTMLTableElement;
      table.deleteRow(rowIndex);
    })
    .catch((e) => {
      alert(e ? e.message : "Error");
    });
};

const cloneInstance = (id: string, withAttachments: boolean) => {
  formInstance
    .cloneInstance(id, withAttachments)
    .then((result) => {
      console.log(result);
    })
    .catch((e) => {
      alert(e ? e.message : "Error");
    });
};

const buildFormDefinitionsList = (formDefinitions: FormDefinition[]) => {
  const table = document.createElement("table");
  table.className = "table table-bordered";

  const tBody = document.createElement("tbody");
  formDefinitions.forEach((formDef) => {
    const tr = document.createElement("tr");

    const tdFormId = document.createElement("td");
    tdFormId.appendChild(document.createTextNode(formDef.formDefinitionId));

    const tdFormName = document.createElement("td");
    tdFormName.appendChild(document.createTextNode(formDef.name));

    const tdFormTags = document.createElement("td");
    tdFormTags.appendChild(
      document.createTextNode(
        formDef.tags?.join(",") ?? "No hay tags definidos"
      )
    );

    const tdCreate = document.createElement("td");
    const btnCreate = document.createElement("button");
    btnCreate.addEventListener("click", () =>
      createFormInstance(formDef.formDefinitionId)
    );
    btnCreate.innerHTML = "Iniciar";
    btnCreate.className = "btn btn-primary";
    tdCreate.appendChild(btnCreate);

    const tdList = document.createElement("td");
    const btnList = document.createElement("button");
    btnList.addEventListener("click", () => {
      selectedFormDefinitionId = formDef.formDefinitionId;
      currentContinuationToken = null;
      return handleListFormInstances(false);
    });
    btnList.innerHTML = "Listar";
    btnList.className = "btn btn-primary";
    tdList.appendChild(btnList);

    tr.appendChild(tdFormId);
    tr.appendChild(tdFormName);
    tr.appendChild(tdFormTags);
    tr.appendChild(tdCreate);
    tr.appendChild(tdList);

    tBody.appendChild(tr);
  });
  table.appendChild(tBody);
  listFormDefinitionsResult.replaceChildren(table);
};
const buildFormInstancesList = (
  formInstanceResult: FormInstanceListResult,
  addMore: boolean
) => {
  let tBody: HTMLTableSectionElement;
  if (addMore) {
    let table = listFormInstancesResult.children[0];
    if (!table) {
      table = document.createElement("table");
      table.className = "table";
      listFormInstancesResult.replaceChildren(table);
    }
    tBody = table.children[0] as HTMLTableSectionElement;
    if (!tBody) {
      tBody = document.createElement("tbody");
      table.appendChild(tBody);
    }
  } else {
    const table = document.createElement("table");
    table.className = "table";
    listFormInstancesResult.replaceChildren(table);
    tBody = document.createElement("tbody");
    table.appendChild(tBody);
  }

  formInstanceResult.result.forEach((instance) => {
    const tr = document.createElement("tr");

    const tdFormTitle = document.createElement("td");
    tdFormTitle.appendChild(
      document.createTextNode(instance.title ?? `${instance.name} (Nuevo)`)
    );

    const tdState = document.createElement("td");
    tdState.appendChild(document.createTextNode(instance.state));

    const tdLastSaved = document.createElement("td");
    tdLastSaved.appendChild(
      document.createTextNode(
        instance.lastSaved
          ? new Date(instance.lastSaved).toLocaleString()
          : "---"
      )
    );

    const tdOpen = document.createElement("td");
    const btnOpen = document.createElement("button");
    btnOpen.addEventListener("click", () => openFormInstance(instance.id));
    btnOpen.innerHTML = "Ver";
    btnOpen.className = "btn btn-primary";
    tdOpen.appendChild(btnOpen);

    const tdDelete = document.createElement("td");
    const btnDelete = document.createElement("button");
    btnDelete.addEventListener("click", () =>
      deleteFormInstance(instance.id, tr)
    );
    btnDelete.innerHTML = "Borrar";
    btnDelete.className = "btn btn-secondary";

    tdOpen.appendChild(btnDelete);

    const tdClone = document.createElement("td");
    const btnClone = document.createElement("button");
    btnClone.addEventListener("click", () => cloneInstance(instance.id, true));
    btnClone.innerHTML = "Clonar";
    btnClone.className = "btn btn-info";

    tdOpen.appendChild(btnClone);

    tr.appendChild(tdFormTitle);
    tr.appendChild(tdState);
    tr.appendChild(tdLastSaved);
    tr.appendChild(tdOpen);
    tr.appendChild(tdDelete);
    tr.appendChild(tdClone);

    tBody.appendChild(tr);
  });

  currentContinuationToken = formInstanceResult.continuationToken;
  loadMoreButton.hidden = !currentContinuationToken;
};

document.addEventListener(
  "DOMContentLoaded",
  function () {
    configureAuth();
    initialize(rpaFormsConnectSdkConfig);

    signInButton.addEventListener("click", handleSignIn);
    setAccountInfo();

    listFormDefinitionsButton.addEventListener(
      "click",
      handleListFormDefinitions
    );

    loadMoreButton.hidden = true;
    loadMoreButton.addEventListener("click", () =>
      handleListFormInstances(true)
    );
  },
  false
);
