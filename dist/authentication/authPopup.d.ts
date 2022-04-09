export declare const selectAccount: () => void;
export declare const isAutenticated: () => boolean;
export declare const signIn: () => Promise<void>;
export declare const signOut: () => Promise<void>;
export declare const getTokenPopup: () => Promise<import("@azure/msal-browser").AuthenticationResult | undefined>;
