export type RpaFormsSdkConfiguration = {
  authentication: {
    clientId: string;
    authority: string;
    redirectUri: string;
    appIdURI?: string;
  };
  serviceUrl?: string;
};
