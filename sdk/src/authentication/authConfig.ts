export const msalConfig = {
  auth: {
    clientId: "18db5397-4d46-4300-9e36-6d8c5c28a818",
    authority: "https://login.microsoftonline.com/organizations",
    redirectUri: "http://localhost:5500",
  },
  cache: {
    cacheLocation: "sessionStorage", // This configures where your cache will be stored
    storeAuthStateInCookie: false, // Set this to "true" if you are having issues on IE11 or Edge
  },
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
