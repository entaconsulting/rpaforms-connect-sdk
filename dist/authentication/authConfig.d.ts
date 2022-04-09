declare const msalConfig: {
    auth: {
        clientId: string;
        authority: string;
        redirectUri: string;
    };
    cache: {
        cacheLocation: string;
        storeAuthStateInCookie: boolean;
    };
};
declare const loginRequest: {
    scopes: string[];
};
declare const tokenRequest: {
    scopes: string[];
};
