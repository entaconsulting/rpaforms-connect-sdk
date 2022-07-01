# RPA Forms Connect SDK

Esta librería permite incorporar las funcionalidades de RPA Forms Connect en cualquier aplicación Javascript.

## Instalación

### Paquete Node

```javascript
npm install @entaconsulting/rpaforms-connect-sdk

yarn add @entaconsulting/rpaforms-connect-sdk
```

### Referencia global

```html
<script src="https://unpkg.com/@entaconsulting/rpaforms-connect-sdk"></script>
```

En el caso de utilizar el sdk como referencia global, todas las funciones se encuentran disponibles dentro del espacio de nombres "rpaFormsConnectSdk". Por ejemplo:

```javascript
rpaFormsConnectSdk.authentication.selectAccount();
```

Ver ejemplo de este tipo de uso en [samples/html-static](../samples/html-static)

## Configurar autenticación Azure AD

### Registrar una nueva aplicación Azure AD

1. En el portal Azure, registrar una nueva aplicación en Azure AD
2. Copiar el Client ID de la aplicación registrada, que se utilizará más adelante en la inicialización del SDK

### Configurar autenticación SPA

1. En la sección "Autenticación" de la configuración del registro de aplicación Azure AD, agregar plataforma "Single Page Application" y configurar la URL de redirección a la ruta de la aplicación. Esta ruta debe coincidir con la página en donde se inicializará el SDK.

    Por ejemplo: `https://myconnectapp.entaconsulting.com/`

### Asignar permiso de acceso a la API RPA Forms

En la sección "Permisos de API" de la configuración del registro de aplicación Azure AD

1. Agregar un permiso
2. Seleccionar "APIs que usa mi organización"
3. Buscar y seleccionar "RPA Forms" (b782e2e8-9682-4898-b211-a304714f4f6b)
4. Seleccionar "Permisos delegados"
5. Seleccionar permiso "access_as_user"
6. Finalmente seleccionar "Otorgar consentimiento de administrador" (esto sólo puede hacerlo un administrador global de Azure)

## Inicializar SDK

El SDK debe ser configurado al cargar la página donde será utilizado.

```javascript
initialize({
    authentication: {
      clientId: "{0000000-0000-0000-000000000000}",
      authority: "https://login.microsoftonline.com/<ID tenant Azure>",
      redirectUri: "<URI de la página donde se inicializa el SDK>",
    }
  });
```

### clientId

Es el ClientID de la app registrada anteriormente en el paso [Registrar una nueva aplicación Azure AD](#Registrar-una-nueva-aplicación-Azure-AD).

### authority

Es la URL de Microsoft Identity seguida del ID del tenant donde se registró tu aplicación

### redirectUri

Es la URI de la página donde se inicializa el SDK, y debe coincidir con la URL de redirección configurada en el paso [Configurar autenticación SPA](#Configurar-autenticación-SPA).

## Referencia

<https://entaconsulting.github.io/rpaforms-connect-sdk/>

## Repositorio

<https://github.com/entaconsulting/rpaforms-connect-sdk>
