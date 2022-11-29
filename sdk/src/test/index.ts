import {
  authentication,
  FormDefinition,
  formInstance,
  FormInstanceListResult,
  FormInstanceQueryOptionsFilter,
  initialize,
  userProfile,
} from "../rpaforms-connect-sdk";

const rpaFormsConnectSdkConfig = {
  authentication: {
    clientId: "18db5397-4d46-4300-9e36-6d8c5c28a818",
    authority: "https://login.microsoftonline.com/organizations",
    redirectUri: "http://localhost:5500/samples/html-static/blank.html",
    appIdURI:
      "api://rpaforms-dev.azurewebsites.net/d3acdcda-130c-419a-b9d6-6ca1e0d2ceef",
  },
  // serviceUrl: "https://rpaforms-dev.azurewebsites.net/api",
  serviceUrl: "https://localhost:6001/api",
  publicFillUrl: "https://rpaforms-dev.azurewebsites.net/public/fill",
};

//mapeo de elementos de la página
const signInButton = document.getElementById("SignIn") as HTMLButtonElement;
const signOutButton = document.getElementById("SignOut") as HTMLButtonElement;
const listFormDefinitionsButton = document.getElementById(
  "ListFormDefinitions"
) as HTMLButtonElement;
const loadMoreButton = document.getElementById(
  "ListFormInstancesMore"
) as HTMLButtonElement;
loadMoreButton.hidden = true;

const filterLastSavedFromInput = document.getElementById(
  "FilterLastSavedFrom"
) as HTMLInputElement;
const filterLastSavedToInput = document.getElementById(
  "FilterLastSavedTo"
) as HTMLInputElement;
const filterStateInput = document.getElementById(
  "FiltrState"
) as HTMLInputElement;
const refreshInstancesButton = document.getElementById(
  "RefreshInstances"
) as HTMLButtonElement;

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
  const filter: FormInstanceQueryOptionsFilter = {};

  if (filterLastSavedFromInput.value) {
    filter.lastSavedFrom = new Date(filterLastSavedFromInput.value);
  }
  if (filterLastSavedToInput.value) {
    filter.lastSavedTo = new Date(filterLastSavedToInput.value);
  }
  if (filterStateInput.value) {
    filter.state = filterStateInput.value;
  }

  formInstance
    .listUserInstances({
      formDefinitionId: selectedFormDefinitionId,
      maxItemCount: 2,
      filter,
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
  if (authentication.isAutenticated()) {
    signInButton.hidden = true;
    signOutButton.hidden = false;
  } else {
    signInButton.hidden = !authentication.needsExplicitLogin();
    signOutButton.hidden = true;
  }
};
const handleSignIn = () => {
  if (authentication.isAutenticated()) return;
  authentication.signIn().then(() => {
    setAccountInfo();
  });
};
const handleSignOut = () => {
  if (!authentication.isAutenticated()) return;
  authentication.signOut().then(() => {
    setAccountInfo();
  });
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
    const tdCreatedBy = document.createElement("td");
    tdCreatedBy.appendChild(
      document.createTextNode(instance.createdBy ?? "---")
    );

    const tdProcessInfoStatus = document.createElement("td");
    tdProcessInfoStatus.appendChild(
      document.createTextNode(instance.processInfo?.status ?? "---")
    );

    const tdProcessInfoEndState = document.createElement("td");
    tdProcessInfoEndState.appendChild(
      document.createTextNode(instance.processInfo?.endState ?? "---")
    );

    const tdProcessInfoCompletionMessage = document.createElement("td");
    tdProcessInfoCompletionMessage.appendChild(
      document.createTextNode(instance.processInfo?.completionMessage ?? "---")
    );

    const tdProcessInfoUpdatedAt = document.createElement("td");
    tdProcessInfoUpdatedAt.appendChild(
      document.createTextNode(instance.processInfo?.updatedAt ?? "---")
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

    tr.appendChild(tdFormTitle);
    tr.appendChild(tdState);
    tr.appendChild(tdLastSaved);
    tr.appendChild(tdCreatedBy);
    tr.appendChild(tdOpen);
    tr.appendChild(tdDelete);
    tr.appendChild(tdProcessInfoStatus);
    tr.appendChild(tdProcessInfoEndState);
    tr.appendChild(tdProcessInfoCompletionMessage);
    tr.appendChild(tdProcessInfoUpdatedAt);

    tBody.appendChild(tr);
  });

  currentContinuationToken = formInstanceResult.continuationToken;
  loadMoreButton.hidden = !currentContinuationToken;
};

document.addEventListener(
  "DOMContentLoaded",
  function () {
    initialize(rpaFormsConnectSdkConfig);

    signInButton.addEventListener("click", handleSignIn);
    signOutButton.addEventListener("click", handleSignOut);
    authentication.selectAccount();
    setAccountInfo();

    listFormDefinitionsButton.addEventListener(
      "click",
      authentication.withAuthentication(handleListFormDefinitions)
    );

    refreshInstancesButton.addEventListener("click", () =>
      handleListFormInstances(false)
    );
    loadMoreButton.hidden = true;
    loadMoreButton.addEventListener("click", () =>
      handleListFormInstances(true)
    );
  },
  false
);
