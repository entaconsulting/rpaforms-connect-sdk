import {
  DelegatedAuthenticationOptions,
  isDelegatedAuthentictionOptions,
  RpaFormsSdkConfiguration,
  RpaFormsSdkConfigurationOptions,
  SdkAuthenticationOptions,
} from "./types";

let settings: RpaFormsSdkConfiguration;
export const configureSettings = (options: RpaFormsSdkConfigurationOptions) => {
  const authOptions = isDelegatedAuthentictionOptions(options.authentication)
    ? options.authentication
    : {
        ...options.authentication,
        appIdURI:
          options.authentication.appIdURI ??
          "api://rpaforms.com/b782e2e8-9682-4898-b211-a304714f4f6b",
      };

  settings = {
    ...options,
    authentication: authOptions,
    serviceUrl: options.serviceUrl ?? "https://app.rpaforms.com/api",
    publicFillUrl:
      options.publicFillUrl ?? "https://app.rpaforms.com/public/fill",
  };
};

export const getAppSettings = () => {
  if (!settings) throw new Error("app settings not configured");
  return settings;
};
export const getAuthSettings = <
  T extends DelegatedAuthenticationOptions | SdkAuthenticationOptions
>() => {
  if (!settings) throw new Error("app settings not configured");
  return settings.authentication as T;
};
