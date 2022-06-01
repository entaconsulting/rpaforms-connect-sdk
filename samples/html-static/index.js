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

    listFormDefinitionsButton.addEventListener(
      "click",
      rpaFormsConnectSdk.authentication.withAuthentication(
        handleListFormDefinitions
      )
    );

    listFormInstancesButton.addEventListener(
      "click",
      rpaFormsConnectSdk.authentication.withAuthentication(
        handleListFormInstances
      )
    );
  },
  false
);

//mapeo de elementos de la página
const signInButton = document.getElementById("SignIn");
const accountContainer = document.getElementById("AccountContainer");
const listFormDefinitionsButton = document.getElementById(
  "ListFormDefinitions"
);
const listFormDefinitionsResult = document.getElementById(
  "ListFormDefinitionsResult"
);
const listFormInstancesButton = document.getElementById("ListFormInstances");
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

//crear una nueva instancia de formulario para completar
const handleCreateFormDefinition = () => {
  const id = createFormDefinitionId.value;
  if (!id) throw new Error("Form definition ID empty.");
  createFormDefinitionResult.innerHTML = "Creating...";
  rpaFormsConnectSdk.formInstance
    .create(id)
    .then((result) => {
      createFormDefinitionResult.innerHTML = JSON.stringify(result);
    })
    .catch((e) => {
      createFormDefinitionResult.innerHTML = e.message;
    });
};

//listar las instancias de forms cargados por el usuario
const handleListFormInstances = () => {
  listFormInstancesResult.innerHTML = "Loading...";
  rpaFormsConnectSdk.formInstance
    .listUserInstances()
    .then((result) => {
      buildFormInstancesList(result);
    })
    .catch((e) => {
      listFormInstancesResult.innerHTML = e.message;
    });
};

//autenticación
const setAccountInfo = () => {
  if (rpaFormsConnectSdk.authentication.isAutenticated()) {
    signInButton.hidden = true;
  } else {
    signInButton.hidden =
      !rpaFormsConnectSdk.authentication.needsExplicitLogin();
    signInButton.innerHTML = "Sign In";
  }
};
const handleSignIn = () => {
  if (rpaFormsConnectSdk.authentication.isAutenticated()) return;
  rpaFormsConnectSdk.authentication.signIn().then(() => {
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

const deleteFormInstance = (id) => {
  rpaFormsConnectSdk.formInstance
    .deleteInstance(id)
    .then(() => {
      handleListFormInstances();
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

    tr.appendChild(tdFormName);
    tr.appendChild(tdCreate);

    tBody.appendChild(tr);
  });
  table.appendChild(tBody);
  listFormDefinitionsResult.replaceChildren(table);
};
const buildFormInstancesList = (formInstances) => {
  const table = document.createElement("table");
  table.className = "table";
  const tBody = document.createElement("tbody");
  formInstances.forEach((instance) => {
    const tr = document.createElement("tr");

    const tdFormName = document.createElement("td");
    tdFormName.appendChild(document.createTextNode(instance.name));

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
    btnDelete.addEventListener("click", () => deleteFormInstance(instance.id));
    btnDelete.innerHTML = "Borrar";
    btnDelete.className = "btn btn-secondary";

    tdOpen.appendChild(btnDelete);

    tr.appendChild(tdFormName);
    tr.appendChild(tdState);
    tr.appendChild(tdLastSaved);
    tr.appendChild(tdOpen);
    tr.appendChild(tdDelete);

    tBody.appendChild(tr);
  });

  table.appendChild(tBody);
  listFormInstancesResult.replaceChildren(table);
};
