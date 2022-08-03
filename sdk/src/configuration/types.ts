export type RpaFormsSdkConfigurationOptions = {
  authentication: {
    clientId: string;
    authority: string;
    redirectUri: string;
    appIdURI?: string;
  };
  serviceUrl?: string;
  publicFillUrl?: string;
};
export type RpaFormsSdkConfiguration = RpaFormsSdkConfigurationOptions & {
  authentication: {
    appIdURI: string;
  };
  serviceUrl: string;
  publicFillUrl: string;
};
