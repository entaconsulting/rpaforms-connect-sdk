/* eslint-disable no-undef */
//configuración
const rpaFormsConnectSdkConfig = {
  authentication: {
    clientId: "18db5397-4d46-4300-9e36-6d8c5c28a818",
    authority: "https://login.microsoftonline.com/organizations",
    redirectUri: "http://localhost:5500/samples/html-static/blank.html",
    appIdURI:
      "api://rpaforms-dev.azurewebsites.net/d3acdcda-130c-419a-b9d6-6ca1e0d2ceef",
  },
  serviceUrl: "https://localhost:6001/api",
  publicFillUrl: "https://rpaforms-dev.azurewebsites.net/public/fill",
};

//inicialización al finalizar la carga de la página
document.addEventListener(
  "DOMContentLoaded",
  function () {
    rpaFormsConnectSdk.initialize(rpaFormsConnectSdkConfig);

    signInButton.addEventListener("click", handleSignIn);
    signOutButton.addEventListener("click", handleSignOut);
    rpaFormsConnectSdk.authentication.selectAccount();
    setAccountInfo();

    listFormDefinitionsButton.addEventListener(
      "click",
      rpaFormsConnectSdk.authentication.withAuthentication(
        handleListFormDefinitions
      )
    );

    loadMoreButton.hidden = true;
    loadMoreButton.addEventListener("click", () =>
      handleListFormInstances(true)
    );
  },
  false
);

//mapeo de elementos de la página
const signInButton = document.getElementById("SignIn");
const signOutButton = document.getElementById("SignOut");
const listFormDefinitionsButton = document.getElementById(
  "ListFormDefinitions"
);
const loadMoreButton = document.getElementById("ListFormInstancesMore");
loadMoreButton.hidden = true;

const listFormDefinitionsResult = document.getElementById(
  "ListFormDefinitionsResult"
);
let selectedFormDefinitionId = "";
let currentContinuationToken = null;

const listFormInstancesMessage = document.getElementById(
  "ListFormInstancesMessage"
);
const listFormInstancesResult = document.getElementById(
  "ListFormInstancesResult"
);

//listar los forms que el usuario puede crear
const handleListFormDefinitions = () => {
  listFormDefinitionsResult.innerHTML = "Loading...";

  rpaFormsConnectSdk.userProfile
    .formDefinitions()
    .then((result) => {
      buildFormDefinitionsList(result);
    })
    .catch((e) => {
      listFormDefinitionsResult.innerHTML = e.message;
    });
};

//listar las instancias de forms cargados por el usuario
const handleListFormInstances = (addMore) => {
  if (!selectedFormDefinitionId) {
    listFormInstancesMessage.innerHTML = "Debe seleccionar un formDefinitionId";
    return;
  }
  listFormInstancesMessage.innerHTML = "Loading...";
  rpaFormsConnectSdk.formInstance
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
  if (rpaFormsConnectSdk.authentication.isAutenticated()) {
    signInButton.hidden = true;
    signOutButton.hidden = false;
  } else {
    signInButton.hidden =
      !rpaFormsConnectSdk.authentication.needsExplicitLogin();
    signOutButton.hidden = true;
  }
};
const handleSignIn = () => {
  if (rpaFormsConnectSdk.authentication.isAutenticated()) return;
  rpaFormsConnectSdk.authentication.signIn().then(() => {
    setAccountInfo();
  });
};
const handleSignOut = () => {
  if (!rpaFormsConnectSdk.authentication.isAutenticated()) return;
  rpaFormsConnectSdk.authentication.signOut().then(() => {
    setAccountInfo();
  });
};

const createFormInstance = (id) => {
  rpaFormsConnectSdk.formInstance
    .create(id)
    .then((result) => {
      window.open(result.formInstanceUri, "RPA Forms");
    })
    .catch((e) => {
      alert(e ? e.message : "Error");
    });
};
const openFormInstance = (id) => {
  rpaFormsConnectSdk.formInstance
    .getInstanceUri(id)
    .then((result) => {
      window.open(result, "RPA Forms");
    })
    .catch((e) => {
      alert(e ? e.message : "Error");
    });
};

const deleteFormInstance = (id, tr) => {
  rpaFormsConnectSdk.formInstance
    .deleteInstance(id)
    .then(() => {
      const rowIndex = tr.rowIndex;
      const table = tr.parentElement.parentElement;
      table.deleteRow(rowIndex);
    })
    .catch((e) => {
      alert(e ? e.message : "Error");
    });
};
const buildFormDefinitionsList = (formDefinitions) => {
  const table = document.createElement("table");
  table.className = "table table-bordered";

  const tBody = document.createElement("tbody");
  formDefinitions.forEach((formDef) => {
    const tr = document.createElement("tr");

    const tdFormId = document.createElement("td");
    tdFormId.appendChild(document.createTextNode(formDef.formDefinitionId));

    const tdFormName = document.createElement("td");
    tdFormName.appendChild(document.createTextNode(formDef.name));

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
      return handleListFormInstances();
    });
    btnList.innerHTML = "Listar";
    btnList.className = "btn btn-primary";
    tdList.appendChild(btnList);

    tr.appendChild(tdFormId);
    tr.appendChild(tdFormName);
    tr.appendChild(tdCreate);
    tr.appendChild(tdList);

    tBody.appendChild(tr);
  });
  table.appendChild(tBody);
  listFormDefinitionsResult.replaceChildren(table);
};
const buildFormInstancesList = (formInstances, addMore) => {
  let tBody;
  if (addMore) {
    let table = listFormInstancesResult.children[0];
    if (!table) {
      table = document.createElement("table");
      table.className = "table";
      listFormInstancesResult.replaceChildren(table);
    }
    tBody = table.children[0];
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

  formInstances.result.forEach((instance) => {
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

    tr.appendChild(tdFormTitle);
    tr.appendChild(tdState);
    tr.appendChild(tdLastSaved);
    tr.appendChild(tdOpen);
    tr.appendChild(tdDelete);

    tBody.appendChild(tr);
  });

  currentContinuationToken = formInstances.continuationToken;
  loadMoreButton.hidden = !currentContinuationToken;
};
