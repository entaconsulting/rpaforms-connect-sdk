export const msalConfig = {
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
  // system: {
  //   loggerOptions: {
  //     loggerCallback: (
  //       level: LogLevel,
  //       message: string,
  //       containsPii: boolean
  //     ): void => {
  //       if (containsPii) {
  //         return;
  //       }
  //       switch (level) {
  //         case LogLevel.Error:
  //           console.error(message);
  //           return;
  //         case LogLevel.Info:
  //           console.info(message);
  //           return;
  //         case LogLevel.Verbose:
  //           console.debug(message);
  //           return;
  //         case LogLevel.Warning:
  //           console.warn(message);
  //           return;
  //       }
  //     },
  //     piiLoggingEnabled: false,
  //   },
  // },
};

// Add scopes here for ID token to be used at Microsoft identity platform endpoints.
export const loginRequest = {
  scopes: ["openid", "profile"],
};

// Add scopes here for access token to be used at Microsoft Graph API endpoints.
export const tokenRequest = {
  scopes: [
    "api://rpaforms.com/b782e2e8-9682-4898-b211-a304714f4f6b/access_as_user",
  ],
};
