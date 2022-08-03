import {
  RpaFormsSdkConfiguration,
  RpaFormsSdkConfigurationOptions,
} from "./types";

let settings: RpaFormsSdkConfiguration;
export const configureSettings = (options: RpaFormsSdkConfigurationOptions) => {
  settings = {
    ...options,
    authentication: {
      ...options.authentication,
      appIdURI:
        options.authentication.appIdURI ??
        "api://rpaforms.com/b782e2e8-9682-4898-b211-a304714f4f6b",
    },
    serviceUrl: options.serviceUrl ?? "https://app.rpaforms.com/api",
    publicFillUrl:
      options.publicFillUrl ?? "https://app.rpaforms.com/public/fill",
  };
};

export const getAppSettings = () => {
  if (!settings) throw new Error("app settings not configured");
  return settings;
};
