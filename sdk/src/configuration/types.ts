export type SdkAuthenticationOptions = {
  clientId: string;
  authority: string;
  redirectUri: string;
  appIdURI?: string;
};
export type DelegatedAuthenticationOptions = {
  getToken: () => Promise<string | undefined>;
};
export type AuthenticationOptions =
  | SdkAuthenticationOptions
  | DelegatedAuthenticationOptions;
export const isDelegatedAuthentictionOptions = (
  options: AuthenticationOptions
): options is DelegatedAuthenticationOptions => {
  return "getToken" in options;
};

export type RpaFormsSdkConfigurationOptions = {
  authentication: AuthenticationOptions;
  serviceUrl?: string;
  publicFillUrl?: string;
};
export type RpaFormsSdkConfiguration = Exclude<
  RpaFormsSdkConfigurationOptions,
  "authentication"
> & {
  authentication: Required<AuthenticationOptions>;
};
