(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(require('http'), require('https'), require('url'), require('stream'), require('assert'), require('tty'), require('util'), require('os'), require('zlib')) :
    typeof define === 'function' && define.amd ? define(['http', 'https', 'url', 'stream', 'assert', 'tty', 'util', 'os', 'zlib'], factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.require$$1$2, global.require$$2, global.require$$0$1, global.require$$3, global.require$$4, global.require$$1, global.require$$1$1, global.require$$0, global.require$$8));
})(this, (function (require$$1$2, require$$2, require$$0$1, require$$3, require$$4, require$$1, require$$1$1, require$$0, require$$8) { 'use strict';

    function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

    var require$$1__default$2 = /*#__PURE__*/_interopDefaultLegacy(require$$1$2);
    var require$$2__default = /*#__PURE__*/_interopDefaultLegacy(require$$2);
    var require$$0__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$0$1);
    var require$$3__default = /*#__PURE__*/_interopDefaultLegacy(require$$3);
    var require$$4__default = /*#__PURE__*/_interopDefaultLegacy(require$$4);
    var require$$1__default = /*#__PURE__*/_interopDefaultLegacy(require$$1);
    var require$$1__default$1 = /*#__PURE__*/_interopDefaultLegacy(require$$1$1);
    var require$$0__default = /*#__PURE__*/_interopDefaultLegacy(require$$0);
    var require$$8__default = /*#__PURE__*/_interopDefaultLegacy(require$$8);

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */

    function __rest(s, e) {
        var t = {};
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
            t[p] = s[p];
        if (s != null && typeof Object.getOwnPropertySymbols === "function")
            for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
                if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                    t[p[i]] = s[p[i]];
            }
        return t;
    }

    function __awaiter$2(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    /*! @azure/msal-browser v2.26.0 2022-06-13 */
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics$1 = function(d, b) {
        extendStatics$1 = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics$1(d, b);
    };

    function __extends$1(d, b) {
        extendStatics$1(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign$1 = function() {
        __assign$1 = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign$1.apply(this, arguments);
    };

    function __awaiter$1(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator$1(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __read(o, n) {
        var m = typeof Symbol === "function" && o[Symbol.iterator];
        if (!m) return o;
        var i = m.call(o), r, ar = [], e;
        try {
            while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
        }
        catch (error) { e = { error: error }; }
        finally {
            try {
                if (r && !r.done && (m = i["return"])) m.call(i);
            }
            finally { if (e) throw e.error; }
        }
        return ar;
    }

    function __spread() {
        for (var ar = [], i = 0; i < arguments.length; i++)
            ar = ar.concat(__read(arguments[i]));
        return ar;
    }

    /*! @azure/msal-common v7.0.0 2022-06-13 */
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var __assign = function() {
        __assign = Object.assign || function __assign(t) {
            for (var s, i = 1, n = arguments.length; i < n; i++) {
                s = arguments[i];
                for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
            }
            return t;
        };
        return __assign.apply(this, arguments);
    };

    function __awaiter(thisArg, _arguments, P, generator) {
        function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
        return new (P || (P = Promise))(function (resolve, reject) {
            function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
            function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
            function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
            step((generator = generator.apply(thisArg, _arguments || [])).next());
        });
    }

    function __generator(thisArg, body) {
        var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
        return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
        function verb(n) { return function (v) { return step([n, v]); }; }
        function step(op) {
            if (f) throw new TypeError("Generator is already executing.");
            while (_) try {
                if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
                if (y = 0, t) op = [op[0] & 2, t.value];
                switch (op[0]) {
                    case 0: case 1: t = op; break;
                    case 4: _.label++; return { value: op[1], done: false };
                    case 5: _.label++; y = op[1]; op = [0]; continue;
                    case 7: op = _.ops.pop(); _.trys.pop(); continue;
                    default:
                        if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                        if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                        if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                        if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                        if (t[2]) _.ops.pop();
                        _.trys.pop(); continue;
                }
                op = body.call(thisArg, _);
            } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
            if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
        }
    }

    function __spreadArrays() {
        for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
        for (var r = Array(s), k = 0, i = 0; i < il; i++)
            for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
                r[k] = a[j];
        return r;
    }

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var Constants = {
        LIBRARY_NAME: "MSAL.JS",
        SKU: "msal.js.common",
        // Prefix for all library cache entries
        CACHE_PREFIX: "msal",
        // default authority
        DEFAULT_AUTHORITY: "https://login.microsoftonline.com/common/",
        DEFAULT_AUTHORITY_HOST: "login.microsoftonline.com",
        DEFAULT_COMMON_TENANT: "common",
        // ADFS String
        ADFS: "adfs",
        // Default AAD Instance Discovery Endpoint
        AAD_INSTANCE_DISCOVERY_ENDPT: "https://login.microsoftonline.com/common/discovery/instance?api-version=1.1&authorization_endpoint=",
        // Resource delimiter - used for certain cache entries
        RESOURCE_DELIM: "|",
        // Placeholder for non-existent account ids/objects
        NO_ACCOUNT: "NO_ACCOUNT",
        // Claims
        CLAIMS: "claims",
        // Consumer UTID
        CONSUMER_UTID: "9188040d-6c67-4c5b-b112-36a304b66dad",
        // Default scopes
        OPENID_SCOPE: "openid",
        PROFILE_SCOPE: "profile",
        OFFLINE_ACCESS_SCOPE: "offline_access",
        EMAIL_SCOPE: "email",
        // Default response type for authorization code flow
        CODE_RESPONSE_TYPE: "code",
        CODE_GRANT_TYPE: "authorization_code",
        RT_GRANT_TYPE: "refresh_token",
        FRAGMENT_RESPONSE_MODE: "fragment",
        S256_CODE_CHALLENGE_METHOD: "S256",
        URL_FORM_CONTENT_TYPE: "application/x-www-form-urlencoded;charset=utf-8",
        AUTHORIZATION_PENDING: "authorization_pending",
        NOT_DEFINED: "not_defined",
        EMPTY_STRING: "",
        FORWARD_SLASH: "/",
        IMDS_ENDPOINT: "http://169.254.169.254/metadata/instance/compute/location",
        IMDS_VERSION: "2020-06-01",
        IMDS_TIMEOUT: 2000,
        AZURE_REGION_AUTO_DISCOVER_FLAG: "TryAutoDetect",
        REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX: "login.microsoft.com",
        KNOWN_PUBLIC_CLOUDS: ["login.microsoftonline.com", "login.windows.net", "login.microsoft.com", "sts.windows.net"],
        TOKEN_RESPONSE_TYPE: "token",
        ID_TOKEN_RESPONSE_TYPE: "id_token"
    };
    var OIDC_DEFAULT_SCOPES = [
        Constants.OPENID_SCOPE,
        Constants.PROFILE_SCOPE,
        Constants.OFFLINE_ACCESS_SCOPE
    ];
    var OIDC_SCOPES = __spreadArrays(OIDC_DEFAULT_SCOPES, [
        Constants.EMAIL_SCOPE
    ]);
    /**
     * Request header names
     */
    var HeaderNames;
    (function (HeaderNames) {
        HeaderNames["CONTENT_TYPE"] = "Content-Type";
        HeaderNames["RETRY_AFTER"] = "Retry-After";
        HeaderNames["CCS_HEADER"] = "X-AnchorMailbox";
        HeaderNames["WWWAuthenticate"] = "WWW-Authenticate";
        HeaderNames["AuthenticationInfo"] = "Authentication-Info";
    })(HeaderNames || (HeaderNames = {}));
    /**
     * Persistent cache keys MSAL which stay while user is logged in.
     */
    var PersistentCacheKeys;
    (function (PersistentCacheKeys) {
        PersistentCacheKeys["ID_TOKEN"] = "idtoken";
        PersistentCacheKeys["CLIENT_INFO"] = "client.info";
        PersistentCacheKeys["ADAL_ID_TOKEN"] = "adal.idtoken";
        PersistentCacheKeys["ERROR"] = "error";
        PersistentCacheKeys["ERROR_DESC"] = "error.description";
        PersistentCacheKeys["ACTIVE_ACCOUNT"] = "active-account";
    })(PersistentCacheKeys || (PersistentCacheKeys = {}));
    /**
     * String constants related to AAD Authority
     */
    var AADAuthorityConstants;
    (function (AADAuthorityConstants) {
        AADAuthorityConstants["COMMON"] = "common";
        AADAuthorityConstants["ORGANIZATIONS"] = "organizations";
        AADAuthorityConstants["CONSUMERS"] = "consumers";
    })(AADAuthorityConstants || (AADAuthorityConstants = {}));
    /**
     * Keys in the hashParams sent by AAD Server
     */
    var AADServerParamKeys;
    (function (AADServerParamKeys) {
        AADServerParamKeys["CLIENT_ID"] = "client_id";
        AADServerParamKeys["REDIRECT_URI"] = "redirect_uri";
        AADServerParamKeys["RESPONSE_TYPE"] = "response_type";
        AADServerParamKeys["RESPONSE_MODE"] = "response_mode";
        AADServerParamKeys["GRANT_TYPE"] = "grant_type";
        AADServerParamKeys["CLAIMS"] = "claims";
        AADServerParamKeys["SCOPE"] = "scope";
        AADServerParamKeys["ERROR"] = "error";
        AADServerParamKeys["ERROR_DESCRIPTION"] = "error_description";
        AADServerParamKeys["ACCESS_TOKEN"] = "access_token";
        AADServerParamKeys["ID_TOKEN"] = "id_token";
        AADServerParamKeys["REFRESH_TOKEN"] = "refresh_token";
        AADServerParamKeys["EXPIRES_IN"] = "expires_in";
        AADServerParamKeys["STATE"] = "state";
        AADServerParamKeys["NONCE"] = "nonce";
        AADServerParamKeys["PROMPT"] = "prompt";
        AADServerParamKeys["SESSION_STATE"] = "session_state";
        AADServerParamKeys["CLIENT_INFO"] = "client_info";
        AADServerParamKeys["CODE"] = "code";
        AADServerParamKeys["CODE_CHALLENGE"] = "code_challenge";
        AADServerParamKeys["CODE_CHALLENGE_METHOD"] = "code_challenge_method";
        AADServerParamKeys["CODE_VERIFIER"] = "code_verifier";
        AADServerParamKeys["CLIENT_REQUEST_ID"] = "client-request-id";
        AADServerParamKeys["X_CLIENT_SKU"] = "x-client-SKU";
        AADServerParamKeys["X_CLIENT_VER"] = "x-client-VER";
        AADServerParamKeys["X_CLIENT_OS"] = "x-client-OS";
        AADServerParamKeys["X_CLIENT_CPU"] = "x-client-CPU";
        AADServerParamKeys["X_CLIENT_CURR_TELEM"] = "x-client-current-telemetry";
        AADServerParamKeys["X_CLIENT_LAST_TELEM"] = "x-client-last-telemetry";
        AADServerParamKeys["X_MS_LIB_CAPABILITY"] = "x-ms-lib-capability";
        AADServerParamKeys["X_APP_NAME"] = "x-app-name";
        AADServerParamKeys["X_APP_VER"] = "x-app-ver";
        AADServerParamKeys["POST_LOGOUT_URI"] = "post_logout_redirect_uri";
        AADServerParamKeys["ID_TOKEN_HINT"] = "id_token_hint";
        AADServerParamKeys["DEVICE_CODE"] = "device_code";
        AADServerParamKeys["CLIENT_SECRET"] = "client_secret";
        AADServerParamKeys["CLIENT_ASSERTION"] = "client_assertion";
        AADServerParamKeys["CLIENT_ASSERTION_TYPE"] = "client_assertion_type";
        AADServerParamKeys["TOKEN_TYPE"] = "token_type";
        AADServerParamKeys["REQ_CNF"] = "req_cnf";
        AADServerParamKeys["OBO_ASSERTION"] = "assertion";
        AADServerParamKeys["REQUESTED_TOKEN_USE"] = "requested_token_use";
        AADServerParamKeys["ON_BEHALF_OF"] = "on_behalf_of";
        AADServerParamKeys["FOCI"] = "foci";
        AADServerParamKeys["CCS_HEADER"] = "X-AnchorMailbox";
        AADServerParamKeys["RETURN_SPA_CODE"] = "return_spa_code";
        AADServerParamKeys["NATIVE_BROKER"] = "nativebroker";
        AADServerParamKeys["LOGOUT_HINT"] = "logout_hint";
    })(AADServerParamKeys || (AADServerParamKeys = {}));
    /**
     * Claims request keys
     */
    var ClaimsRequestKeys;
    (function (ClaimsRequestKeys) {
        ClaimsRequestKeys["ACCESS_TOKEN"] = "access_token";
        ClaimsRequestKeys["XMS_CC"] = "xms_cc";
    })(ClaimsRequestKeys || (ClaimsRequestKeys = {}));
    /**
     * we considered making this "enum" in the request instead of string, however it looks like the allowed list of
     * prompt values kept changing over past couple of years. There are some undocumented prompt values for some
     * internal partners too, hence the choice of generic "string" type instead of the "enum"
     */
    var PromptValue = {
        LOGIN: "login",
        SELECT_ACCOUNT: "select_account",
        CONSENT: "consent",
        NONE: "none",
        CREATE: "create"
    };
    /**
     * SSO Types - generated to populate hints
     */
    var SSOTypes;
    (function (SSOTypes) {
        SSOTypes["ACCOUNT"] = "account";
        SSOTypes["SID"] = "sid";
        SSOTypes["LOGIN_HINT"] = "login_hint";
        SSOTypes["ID_TOKEN"] = "id_token";
        SSOTypes["DOMAIN_HINT"] = "domain_hint";
        SSOTypes["ORGANIZATIONS"] = "organizations";
        SSOTypes["CONSUMERS"] = "consumers";
        SSOTypes["ACCOUNT_ID"] = "accountIdentifier";
        SSOTypes["HOMEACCOUNT_ID"] = "homeAccountIdentifier";
    })(SSOTypes || (SSOTypes = {}));
    /**
     * allowed values for codeVerifier
     */
    var CodeChallengeMethodValues = {
        PLAIN: "plain",
        S256: "S256"
    };
    /**
     * allowed values for response_mode
     */
    var ResponseMode;
    (function (ResponseMode) {
        ResponseMode["QUERY"] = "query";
        ResponseMode["FRAGMENT"] = "fragment";
        ResponseMode["FORM_POST"] = "form_post";
    })(ResponseMode || (ResponseMode = {}));
    /**
     * allowed grant_type
     */
    var GrantType;
    (function (GrantType) {
        GrantType["IMPLICIT_GRANT"] = "implicit";
        GrantType["AUTHORIZATION_CODE_GRANT"] = "authorization_code";
        GrantType["CLIENT_CREDENTIALS_GRANT"] = "client_credentials";
        GrantType["RESOURCE_OWNER_PASSWORD_GRANT"] = "password";
        GrantType["REFRESH_TOKEN_GRANT"] = "refresh_token";
        GrantType["DEVICE_CODE_GRANT"] = "device_code";
        GrantType["JWT_BEARER"] = "urn:ietf:params:oauth:grant-type:jwt-bearer";
    })(GrantType || (GrantType = {}));
    /**
     * Account types in Cache
     */
    var CacheAccountType;
    (function (CacheAccountType) {
        CacheAccountType["MSSTS_ACCOUNT_TYPE"] = "MSSTS";
        CacheAccountType["ADFS_ACCOUNT_TYPE"] = "ADFS";
        CacheAccountType["MSAV1_ACCOUNT_TYPE"] = "MSA";
        CacheAccountType["GENERIC_ACCOUNT_TYPE"] = "Generic"; // NTLM, Kerberos, FBA, Basic etc
    })(CacheAccountType || (CacheAccountType = {}));
    /**
     * Separators used in cache
     */
    var Separators;
    (function (Separators) {
        Separators["CACHE_KEY_SEPARATOR"] = "-";
        Separators["CLIENT_INFO_SEPARATOR"] = ".";
    })(Separators || (Separators = {}));
    /**
     * Credential Type stored in the cache
     */
    var CredentialType;
    (function (CredentialType) {
        CredentialType["ID_TOKEN"] = "IdToken";
        CredentialType["ACCESS_TOKEN"] = "AccessToken";
        CredentialType["ACCESS_TOKEN_WITH_AUTH_SCHEME"] = "AccessToken_With_AuthScheme";
        CredentialType["REFRESH_TOKEN"] = "RefreshToken";
    })(CredentialType || (CredentialType = {}));
    /**
     * Credential Type stored in the cache
     */
    var CacheSchemaType;
    (function (CacheSchemaType) {
        CacheSchemaType["ACCOUNT"] = "Account";
        CacheSchemaType["CREDENTIAL"] = "Credential";
        CacheSchemaType["ID_TOKEN"] = "IdToken";
        CacheSchemaType["ACCESS_TOKEN"] = "AccessToken";
        CacheSchemaType["REFRESH_TOKEN"] = "RefreshToken";
        CacheSchemaType["APP_METADATA"] = "AppMetadata";
        CacheSchemaType["TEMPORARY"] = "TempCache";
        CacheSchemaType["TELEMETRY"] = "Telemetry";
        CacheSchemaType["UNDEFINED"] = "Undefined";
        CacheSchemaType["THROTTLING"] = "Throttling";
    })(CacheSchemaType || (CacheSchemaType = {}));
    /**
     * Combine all cache types
     */
    var CacheType;
    (function (CacheType) {
        CacheType[CacheType["ADFS"] = 1001] = "ADFS";
        CacheType[CacheType["MSA"] = 1002] = "MSA";
        CacheType[CacheType["MSSTS"] = 1003] = "MSSTS";
        CacheType[CacheType["GENERIC"] = 1004] = "GENERIC";
        CacheType[CacheType["ACCESS_TOKEN"] = 2001] = "ACCESS_TOKEN";
        CacheType[CacheType["REFRESH_TOKEN"] = 2002] = "REFRESH_TOKEN";
        CacheType[CacheType["ID_TOKEN"] = 2003] = "ID_TOKEN";
        CacheType[CacheType["APP_METADATA"] = 3001] = "APP_METADATA";
        CacheType[CacheType["UNDEFINED"] = 9999] = "UNDEFINED";
    })(CacheType || (CacheType = {}));
    /**
     * More Cache related constants
     */
    var APP_METADATA = "appmetadata";
    var CLIENT_INFO = "client_info";
    var THE_FAMILY_ID = "1";
    var AUTHORITY_METADATA_CONSTANTS = {
        CACHE_KEY: "authority-metadata",
        REFRESH_TIME_SECONDS: 3600 * 24 // 24 Hours
    };
    var AuthorityMetadataSource;
    (function (AuthorityMetadataSource) {
        AuthorityMetadataSource["CONFIG"] = "config";
        AuthorityMetadataSource["CACHE"] = "cache";
        AuthorityMetadataSource["NETWORK"] = "network";
    })(AuthorityMetadataSource || (AuthorityMetadataSource = {}));
    var SERVER_TELEM_CONSTANTS = {
        SCHEMA_VERSION: 5,
        MAX_CUR_HEADER_BYTES: 80,
        MAX_LAST_HEADER_BYTES: 330,
        MAX_CACHED_ERRORS: 50,
        CACHE_KEY: "server-telemetry",
        CATEGORY_SEPARATOR: "|",
        VALUE_SEPARATOR: ",",
        OVERFLOW_TRUE: "1",
        OVERFLOW_FALSE: "0",
        UNKNOWN_ERROR: "unknown_error"
    };
    /**
     * Type of the authentication request
     */
    var AuthenticationScheme;
    (function (AuthenticationScheme) {
        AuthenticationScheme["BEARER"] = "Bearer";
        AuthenticationScheme["POP"] = "pop";
        AuthenticationScheme["SSH"] = "ssh-cert";
    })(AuthenticationScheme || (AuthenticationScheme = {}));
    /**
     * Constants related to throttling
     */
    var ThrottlingConstants = {
        // Default time to throttle RequestThumbprint in seconds
        DEFAULT_THROTTLE_TIME_SECONDS: 60,
        // Default maximum time to throttle in seconds, overrides what the server sends back
        DEFAULT_MAX_THROTTLE_TIME_SECONDS: 3600,
        // Prefix for storing throttling entries
        THROTTLING_PREFIX: "throttling",
        // Value assigned to the x-ms-lib-capability header to indicate to the server the library supports throttling
        X_MS_LIB_CAPABILITY_VALUE: "retry-after, h429"
    };
    var Errors = {
        INVALID_GRANT_ERROR: "invalid_grant",
        CLIENT_MISMATCH_ERROR: "client_mismatch",
    };
    /**
     * Password grant parameters
     */
    var PasswordGrantConstants;
    (function (PasswordGrantConstants) {
        PasswordGrantConstants["username"] = "username";
        PasswordGrantConstants["password"] = "password";
    })(PasswordGrantConstants || (PasswordGrantConstants = {}));
    /**
     * Response codes
     */
    var ResponseCodes;
    (function (ResponseCodes) {
        ResponseCodes[ResponseCodes["httpSuccess"] = 200] = "httpSuccess";
        ResponseCodes[ResponseCodes["httpBadRequest"] = 400] = "httpBadRequest";
    })(ResponseCodes || (ResponseCodes = {}));
    /**
     * Region Discovery Sources
     */
    var RegionDiscoverySources;
    (function (RegionDiscoverySources) {
        RegionDiscoverySources["FAILED_AUTO_DETECTION"] = "1";
        RegionDiscoverySources["INTERNAL_CACHE"] = "2";
        RegionDiscoverySources["ENVIRONMENT_VARIABLE"] = "3";
        RegionDiscoverySources["IMDS"] = "4";
    })(RegionDiscoverySources || (RegionDiscoverySources = {}));
    /**
     * Region Discovery Outcomes
     */
    var RegionDiscoveryOutcomes;
    (function (RegionDiscoveryOutcomes) {
        RegionDiscoveryOutcomes["CONFIGURED_MATCHES_DETECTED"] = "1";
        RegionDiscoveryOutcomes["CONFIGURED_NO_AUTO_DETECTION"] = "2";
        RegionDiscoveryOutcomes["CONFIGURED_NOT_DETECTED"] = "3";
        RegionDiscoveryOutcomes["AUTO_DETECTION_REQUESTED_SUCCESSFUL"] = "4";
        RegionDiscoveryOutcomes["AUTO_DETECTION_REQUESTED_FAILED"] = "5";
    })(RegionDiscoveryOutcomes || (RegionDiscoveryOutcomes = {}));
    var CacheOutcome;
    (function (CacheOutcome) {
        CacheOutcome["NO_CACHE_HIT"] = "0";
        CacheOutcome["FORCE_REFRESH"] = "1";
        CacheOutcome["NO_CACHED_ACCESS_TOKEN"] = "2";
        CacheOutcome["CACHED_ACCESS_TOKEN_EXPIRED"] = "3";
        CacheOutcome["REFRESH_CACHED_ACCESS_TOKEN"] = "4";
    })(CacheOutcome || (CacheOutcome = {}));
    var JsonTypes;
    (function (JsonTypes) {
        JsonTypes["Jwt"] = "JWT";
        JsonTypes["Jwk"] = "JWK";
    })(JsonTypes || (JsonTypes = {}));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * AuthErrorMessage class containing string constants used by error codes and messages.
     */
    var AuthErrorMessage = {
        unexpectedError: {
            code: "unexpected_error",
            desc: "Unexpected error in authentication."
        }
    };
    /**
     * General error class thrown by the MSAL.js library.
     */
    var AuthError = /** @class */ (function (_super) {
        __extends(AuthError, _super);
        function AuthError(errorCode, errorMessage, suberror) {
            var _this = this;
            var errorString = errorMessage ? errorCode + ": " + errorMessage : errorCode;
            _this = _super.call(this, errorString) || this;
            Object.setPrototypeOf(_this, AuthError.prototype);
            _this.errorCode = errorCode || Constants.EMPTY_STRING;
            _this.errorMessage = errorMessage || Constants.EMPTY_STRING;
            _this.subError = suberror || Constants.EMPTY_STRING;
            _this.name = "AuthError";
            return _this;
        }
        AuthError.prototype.setCorrelationId = function (correlationId) {
            this.correlationId = correlationId;
        };
        /**
         * Creates an error that is thrown when something unexpected happens in the library.
         * @param errDesc
         */
        AuthError.createUnexpectedError = function (errDesc) {
            return new AuthError(AuthErrorMessage.unexpectedError.code, AuthErrorMessage.unexpectedError.desc + ": " + errDesc);
        };
        return AuthError;
    }(Error));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var DEFAULT_CRYPTO_IMPLEMENTATION = {
        createNewGuid: function () {
            var notImplErr = "Crypto interface - createNewGuid() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        base64Decode: function () {
            var notImplErr = "Crypto interface - base64Decode() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        base64Encode: function () {
            var notImplErr = "Crypto interface - base64Encode() has not been implemented";
            throw AuthError.createUnexpectedError(notImplErr);
        },
        generatePkceCodes: function () {
            return __awaiter(this, void 0, void 0, function () {
                var notImplErr;
                return __generator(this, function (_a) {
                    notImplErr = "Crypto interface - generatePkceCodes() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        },
        getPublicKeyThumbprint: function () {
            return __awaiter(this, void 0, void 0, function () {
                var notImplErr;
                return __generator(this, function (_a) {
                    notImplErr = "Crypto interface - getPublicKeyThumbprint() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        },
        removeTokenBindingKey: function () {
            return __awaiter(this, void 0, void 0, function () {
                var notImplErr;
                return __generator(this, function (_a) {
                    notImplErr = "Crypto interface - removeTokenBindingKey() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        },
        clearKeystore: function () {
            return __awaiter(this, void 0, void 0, function () {
                var notImplErr;
                return __generator(this, function (_a) {
                    notImplErr = "Crypto interface - clearKeystore() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        },
        signJwt: function () {
            return __awaiter(this, void 0, void 0, function () {
                var notImplErr;
                return __generator(this, function (_a) {
                    notImplErr = "Crypto interface - signJwt() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        },
        hashString: function () {
            return __awaiter(this, void 0, void 0, function () {
                var notImplErr;
                return __generator(this, function (_a) {
                    notImplErr = "Crypto interface - hashString() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        }
    };

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * ClientAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var ClientAuthErrorMessage = {
        clientInfoDecodingError: {
            code: "client_info_decoding_error",
            desc: "The client info could not be parsed/decoded correctly. Please review the trace to determine the root cause."
        },
        clientInfoEmptyError: {
            code: "client_info_empty_error",
            desc: "The client info was empty. Please review the trace to determine the root cause."
        },
        tokenParsingError: {
            code: "token_parsing_error",
            desc: "Token cannot be parsed. Please review stack trace to determine root cause."
        },
        nullOrEmptyToken: {
            code: "null_or_empty_token",
            desc: "The token is null or empty. Please review the trace to determine the root cause."
        },
        endpointResolutionError: {
            code: "endpoints_resolution_error",
            desc: "Error: could not resolve endpoints. Please check network and try again."
        },
        networkError: {
            code: "network_error",
            desc: "Network request failed. Please check network trace to determine root cause."
        },
        unableToGetOpenidConfigError: {
            code: "openid_config_error",
            desc: "Could not retrieve endpoints. Check your authority and verify the .well-known/openid-configuration endpoint returns the required endpoints."
        },
        hashNotDeserialized: {
            code: "hash_not_deserialized",
            desc: "The hash parameters could not be deserialized. Please review the trace to determine the root cause."
        },
        blankGuidGenerated: {
            code: "blank_guid_generated",
            desc: "The guid generated was blank. Please review the trace to determine the root cause."
        },
        invalidStateError: {
            code: "invalid_state",
            desc: "State was not the expected format. Please check the logs to determine whether the request was sent using ProtocolUtils.setRequestState()."
        },
        stateMismatchError: {
            code: "state_mismatch",
            desc: "State mismatch error. Please check your network. Continued requests may cause cache overflow."
        },
        stateNotFoundError: {
            code: "state_not_found",
            desc: "State not found"
        },
        nonceMismatchError: {
            code: "nonce_mismatch",
            desc: "Nonce mismatch error. This may be caused by a race condition in concurrent requests."
        },
        nonceNotFoundError: {
            code: "nonce_not_found",
            desc: "nonce not found"
        },
        noTokensFoundError: {
            code: "no_tokens_found",
            desc: "No tokens were found for the given scopes, and no authorization code was passed to acquireToken. You must retrieve an authorization code before making a call to acquireToken()."
        },
        multipleMatchingTokens: {
            code: "multiple_matching_tokens",
            desc: "The cache contains multiple tokens satisfying the requirements. " +
                "Call AcquireToken again providing more requirements such as authority or account."
        },
        multipleMatchingAccounts: {
            code: "multiple_matching_accounts",
            desc: "The cache contains multiple accounts satisfying the given parameters. Please pass more info to obtain the correct account"
        },
        multipleMatchingAppMetadata: {
            code: "multiple_matching_appMetadata",
            desc: "The cache contains multiple appMetadata satisfying the given parameters. Please pass more info to obtain the correct appMetadata"
        },
        tokenRequestCannotBeMade: {
            code: "request_cannot_be_made",
            desc: "Token request cannot be made without authorization code or refresh token."
        },
        appendEmptyScopeError: {
            code: "cannot_append_empty_scope",
            desc: "Cannot append null or empty scope to ScopeSet. Please check the stack trace for more info."
        },
        removeEmptyScopeError: {
            code: "cannot_remove_empty_scope",
            desc: "Cannot remove null or empty scope from ScopeSet. Please check the stack trace for more info."
        },
        appendScopeSetError: {
            code: "cannot_append_scopeset",
            desc: "Cannot append ScopeSet due to error."
        },
        emptyInputScopeSetError: {
            code: "empty_input_scopeset",
            desc: "Empty input ScopeSet cannot be processed."
        },
        DeviceCodePollingCancelled: {
            code: "device_code_polling_cancelled",
            desc: "Caller has cancelled token endpoint polling during device code flow by setting DeviceCodeRequest.cancel = true."
        },
        DeviceCodeExpired: {
            code: "device_code_expired",
            desc: "Device code is expired."
        },
        DeviceCodeUnknownError: {
            code: "device_code_unknown_error",
            desc: "Device code stopped polling for unknown reasons."
        },
        NoAccountInSilentRequest: {
            code: "no_account_in_silent_request",
            desc: "Please pass an account object, silent flow is not supported without account information"
        },
        invalidCacheRecord: {
            code: "invalid_cache_record",
            desc: "Cache record object was null or undefined."
        },
        invalidCacheEnvironment: {
            code: "invalid_cache_environment",
            desc: "Invalid environment when attempting to create cache entry"
        },
        noAccountFound: {
            code: "no_account_found",
            desc: "No account found in cache for given key."
        },
        CachePluginError: {
            code: "no cache plugin set on CacheManager",
            desc: "ICachePlugin needs to be set before using readFromStorage or writeFromStorage"
        },
        noCryptoObj: {
            code: "no_crypto_object",
            desc: "No crypto object detected. This is required for the following operation: "
        },
        invalidCacheType: {
            code: "invalid_cache_type",
            desc: "Invalid cache type"
        },
        unexpectedAccountType: {
            code: "unexpected_account_type",
            desc: "Unexpected account type."
        },
        unexpectedCredentialType: {
            code: "unexpected_credential_type",
            desc: "Unexpected credential type."
        },
        invalidAssertion: {
            code: "invalid_assertion",
            desc: "Client assertion must meet requirements described in https://tools.ietf.org/html/rfc7515"
        },
        invalidClientCredential: {
            code: "invalid_client_credential",
            desc: "Client credential (secret, certificate, or assertion) must not be empty when creating a confidential client. An application should at most have one credential"
        },
        tokenRefreshRequired: {
            code: "token_refresh_required",
            desc: "Cannot return token from cache because it must be refreshed. This may be due to one of the following reasons: forceRefresh parameter is set to true, claims have been requested, there is no cached access token or it is expired."
        },
        userTimeoutReached: {
            code: "user_timeout_reached",
            desc: "User defined timeout for device code polling reached",
        },
        tokenClaimsRequired: {
            code: "token_claims_cnf_required_for_signedjwt",
            desc: "Cannot generate a POP jwt if the token_claims are not populated"
        },
        noAuthorizationCodeFromServer: {
            code: "authorization_code_missing_from_server_response",
            desc: "Server response does not contain an authorization code to proceed"
        },
        noAzureRegionDetected: {
            code: "no_azure_region_detected",
            desc: "No azure region was detected and no fallback was made available"
        },
        accessTokenEntityNullError: {
            code: "access_token_entity_null",
            desc: "Access token entity is null, please check logs and cache to ensure a valid access token is present."
        },
        bindingKeyNotRemovedError: {
            code: "binding_key_not_removed",
            desc: "Could not remove the credential's binding key from storage."
        },
        logoutNotSupported: {
            code: "end_session_endpoint_not_supported",
            desc: "Provided authority does not support logout."
        },
        keyIdMissing: {
            code: "key_id_missing",
            desc: "A keyId value is missing from the requested bound token's cache record and is required to match the token to it's stored binding key."
        }
    };
    /**
     * Error thrown when there is an error in the client code running on the browser.
     */
    var ClientAuthError = /** @class */ (function (_super) {
        __extends(ClientAuthError, _super);
        function ClientAuthError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "ClientAuthError";
            Object.setPrototypeOf(_this, ClientAuthError.prototype);
            return _this;
        }
        /**
         * Creates an error thrown when client info object doesn't decode correctly.
         * @param caughtError
         */
        ClientAuthError.createClientInfoDecodingError = function (caughtError) {
            return new ClientAuthError(ClientAuthErrorMessage.clientInfoDecodingError.code, ClientAuthErrorMessage.clientInfoDecodingError.desc + " Failed with error: " + caughtError);
        };
        /**
         * Creates an error thrown if the client info is empty.
         * @param rawClientInfo
         */
        ClientAuthError.createClientInfoEmptyError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.clientInfoEmptyError.code, "" + ClientAuthErrorMessage.clientInfoEmptyError.desc);
        };
        /**
         * Creates an error thrown when the id token extraction errors out.
         * @param err
         */
        ClientAuthError.createTokenParsingError = function (caughtExtractionError) {
            return new ClientAuthError(ClientAuthErrorMessage.tokenParsingError.code, ClientAuthErrorMessage.tokenParsingError.desc + " Failed with error: " + caughtExtractionError);
        };
        /**
         * Creates an error thrown when the id token string is null or empty.
         * @param invalidRawTokenString
         */
        ClientAuthError.createTokenNullOrEmptyError = function (invalidRawTokenString) {
            return new ClientAuthError(ClientAuthErrorMessage.nullOrEmptyToken.code, ClientAuthErrorMessage.nullOrEmptyToken.desc + " Raw Token Value: " + invalidRawTokenString);
        };
        /**
         * Creates an error thrown when the endpoint discovery doesn't complete correctly.
         */
        ClientAuthError.createEndpointDiscoveryIncompleteError = function (errDetail) {
            return new ClientAuthError(ClientAuthErrorMessage.endpointResolutionError.code, ClientAuthErrorMessage.endpointResolutionError.desc + " Detail: " + errDetail);
        };
        /**
         * Creates an error thrown when the fetch client throws
         */
        ClientAuthError.createNetworkError = function (endpoint, errDetail) {
            return new ClientAuthError(ClientAuthErrorMessage.networkError.code, ClientAuthErrorMessage.networkError.desc + " | Fetch client threw: " + errDetail + " | Attempted to reach: " + endpoint.split("?")[0]);
        };
        /**
         * Creates an error thrown when the openid-configuration endpoint cannot be reached or does not contain the required data
         */
        ClientAuthError.createUnableToGetOpenidConfigError = function (errDetail) {
            return new ClientAuthError(ClientAuthErrorMessage.unableToGetOpenidConfigError.code, ClientAuthErrorMessage.unableToGetOpenidConfigError.desc + " Attempted to retrieve endpoints from: " + errDetail);
        };
        /**
         * Creates an error thrown when the hash cannot be deserialized.
         * @param hashParamObj
         */
        ClientAuthError.createHashNotDeserializedError = function (hashParamObj) {
            return new ClientAuthError(ClientAuthErrorMessage.hashNotDeserialized.code, ClientAuthErrorMessage.hashNotDeserialized.desc + " Given Object: " + hashParamObj);
        };
        /**
         * Creates an error thrown when the state cannot be parsed.
         * @param invalidState
         */
        ClientAuthError.createInvalidStateError = function (invalidState, errorString) {
            return new ClientAuthError(ClientAuthErrorMessage.invalidStateError.code, ClientAuthErrorMessage.invalidStateError.desc + " Invalid State: " + invalidState + ", Root Err: " + errorString);
        };
        /**
         * Creates an error thrown when two states do not match.
         */
        ClientAuthError.createStateMismatchError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.stateMismatchError.code, ClientAuthErrorMessage.stateMismatchError.desc);
        };
        /**
         * Creates an error thrown when the state is not present
         * @param missingState
         */
        ClientAuthError.createStateNotFoundError = function (missingState) {
            return new ClientAuthError(ClientAuthErrorMessage.stateNotFoundError.code, ClientAuthErrorMessage.stateNotFoundError.desc + ":  " + missingState);
        };
        /**
         * Creates an error thrown when the nonce does not match.
         */
        ClientAuthError.createNonceMismatchError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.nonceMismatchError.code, ClientAuthErrorMessage.nonceMismatchError.desc);
        };
        /**
         * Creates an error thrown when the mnonce is not present
         * @param missingNonce
         */
        ClientAuthError.createNonceNotFoundError = function (missingNonce) {
            return new ClientAuthError(ClientAuthErrorMessage.nonceNotFoundError.code, ClientAuthErrorMessage.nonceNotFoundError.desc + ":  " + missingNonce);
        };
        /**
         * Throws error when multiple tokens are in cache.
         */
        ClientAuthError.createMultipleMatchingTokensInCacheError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingTokens.code, ClientAuthErrorMessage.multipleMatchingTokens.desc + ".");
        };
        /**
         * Throws error when multiple accounts are in cache for the given params
         */
        ClientAuthError.createMultipleMatchingAccountsInCacheError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingAccounts.code, ClientAuthErrorMessage.multipleMatchingAccounts.desc);
        };
        /**
         * Throws error when multiple appMetada are in cache for the given clientId.
         */
        ClientAuthError.createMultipleMatchingAppMetadataInCacheError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.multipleMatchingAppMetadata.code, ClientAuthErrorMessage.multipleMatchingAppMetadata.desc);
        };
        /**
         * Throws error when no auth code or refresh token is given to ServerTokenRequestParameters.
         */
        ClientAuthError.createTokenRequestCannotBeMadeError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.tokenRequestCannotBeMade.code, ClientAuthErrorMessage.tokenRequestCannotBeMade.desc);
        };
        /**
         * Throws error when attempting to append a null, undefined or empty scope to a set
         * @param givenScope
         */
        ClientAuthError.createAppendEmptyScopeToSetError = function (givenScope) {
            return new ClientAuthError(ClientAuthErrorMessage.appendEmptyScopeError.code, ClientAuthErrorMessage.appendEmptyScopeError.desc + " Given Scope: " + givenScope);
        };
        /**
         * Throws error when attempting to append a null, undefined or empty scope to a set
         * @param givenScope
         */
        ClientAuthError.createRemoveEmptyScopeFromSetError = function (givenScope) {
            return new ClientAuthError(ClientAuthErrorMessage.removeEmptyScopeError.code, ClientAuthErrorMessage.removeEmptyScopeError.desc + " Given Scope: " + givenScope);
        };
        /**
         * Throws error when attempting to append null or empty ScopeSet.
         * @param appendError
         */
        ClientAuthError.createAppendScopeSetError = function (appendError) {
            return new ClientAuthError(ClientAuthErrorMessage.appendScopeSetError.code, ClientAuthErrorMessage.appendScopeSetError.desc + " Detail Error: " + appendError);
        };
        /**
         * Throws error if ScopeSet is null or undefined.
         * @param givenScopeSet
         */
        ClientAuthError.createEmptyInputScopeSetError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.emptyInputScopeSetError.code, "" + ClientAuthErrorMessage.emptyInputScopeSetError.desc);
        };
        /**
         * Throws error if user sets CancellationToken.cancel = true during polling of token endpoint during device code flow
         */
        ClientAuthError.createDeviceCodeCancelledError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.DeviceCodePollingCancelled.code, "" + ClientAuthErrorMessage.DeviceCodePollingCancelled.desc);
        };
        /**
         * Throws error if device code is expired
         */
        ClientAuthError.createDeviceCodeExpiredError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.DeviceCodeExpired.code, "" + ClientAuthErrorMessage.DeviceCodeExpired.desc);
        };
        /**
         * Throws error if device code is expired
         */
        ClientAuthError.createDeviceCodeUnknownError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.DeviceCodeUnknownError.code, "" + ClientAuthErrorMessage.DeviceCodeUnknownError.desc);
        };
        /**
         * Throws error when silent requests are made without an account object
         */
        ClientAuthError.createNoAccountInSilentRequestError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.NoAccountInSilentRequest.code, "" + ClientAuthErrorMessage.NoAccountInSilentRequest.desc);
        };
        /**
         * Throws error when cache record is null or undefined.
         */
        ClientAuthError.createNullOrUndefinedCacheRecord = function () {
            return new ClientAuthError(ClientAuthErrorMessage.invalidCacheRecord.code, ClientAuthErrorMessage.invalidCacheRecord.desc);
        };
        /**
         * Throws error when provided environment is not part of the CloudDiscoveryMetadata object
         */
        ClientAuthError.createInvalidCacheEnvironmentError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.invalidCacheEnvironment.code, ClientAuthErrorMessage.invalidCacheEnvironment.desc);
        };
        /**
         * Throws error when account is not found in cache.
         */
        ClientAuthError.createNoAccountFoundError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.noAccountFound.code, ClientAuthErrorMessage.noAccountFound.desc);
        };
        /**
         * Throws error if ICachePlugin not set on CacheManager.
         */
        ClientAuthError.createCachePluginError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.CachePluginError.code, "" + ClientAuthErrorMessage.CachePluginError.desc);
        };
        /**
         * Throws error if crypto object not found.
         * @param operationName
         */
        ClientAuthError.createNoCryptoObjectError = function (operationName) {
            return new ClientAuthError(ClientAuthErrorMessage.noCryptoObj.code, "" + ClientAuthErrorMessage.noCryptoObj.desc + operationName);
        };
        /**
         * Throws error if cache type is invalid.
         */
        ClientAuthError.createInvalidCacheTypeError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.invalidCacheType.code, "" + ClientAuthErrorMessage.invalidCacheType.desc);
        };
        /**
         * Throws error if unexpected account type.
         */
        ClientAuthError.createUnexpectedAccountTypeError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.unexpectedAccountType.code, "" + ClientAuthErrorMessage.unexpectedAccountType.desc);
        };
        /**
         * Throws error if unexpected credential type.
         */
        ClientAuthError.createUnexpectedCredentialTypeError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.unexpectedCredentialType.code, "" + ClientAuthErrorMessage.unexpectedCredentialType.desc);
        };
        /**
         * Throws error if client assertion is not valid.
         */
        ClientAuthError.createInvalidAssertionError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.invalidAssertion.code, "" + ClientAuthErrorMessage.invalidAssertion.desc);
        };
        /**
         * Throws error if client assertion is not valid.
         */
        ClientAuthError.createInvalidCredentialError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.invalidClientCredential.code, "" + ClientAuthErrorMessage.invalidClientCredential.desc);
        };
        /**
         * Throws error if token cannot be retrieved from cache due to refresh being required.
         */
        ClientAuthError.createRefreshRequiredError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.tokenRefreshRequired.code, ClientAuthErrorMessage.tokenRefreshRequired.desc);
        };
        /**
         * Throws error if the user defined timeout is reached.
         */
        ClientAuthError.createUserTimeoutReachedError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.userTimeoutReached.code, ClientAuthErrorMessage.userTimeoutReached.desc);
        };
        /*
         * Throws error if token claims are not populated for a signed jwt generation
         */
        ClientAuthError.createTokenClaimsRequiredError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.tokenClaimsRequired.code, ClientAuthErrorMessage.tokenClaimsRequired.desc);
        };
        /**
         * Throws error when the authorization code is missing from the server response
         */
        ClientAuthError.createNoAuthCodeInServerResponseError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.noAuthorizationCodeFromServer.code, ClientAuthErrorMessage.noAuthorizationCodeFromServer.desc);
        };
        ClientAuthError.createBindingKeyNotRemovedError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.bindingKeyNotRemovedError.code, ClientAuthErrorMessage.bindingKeyNotRemovedError.desc);
        };
        /**
         * Thrown when logout is attempted for an authority that doesnt have an end_session_endpoint
         */
        ClientAuthError.createLogoutNotSupportedError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.logoutNotSupported.code, ClientAuthErrorMessage.logoutNotSupported.desc);
        };
        /**
         * Create an error when kid attribute is missing from a PoP token's cache record
         */
        ClientAuthError.createKeyIdMissingError = function () {
            return new ClientAuthError(ClientAuthErrorMessage.keyIdMissing.code, ClientAuthErrorMessage.keyIdMissing.desc);
        };
        return ClientAuthError;
    }(AuthError));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * @hidden
     */
    var StringUtils = /** @class */ (function () {
        function StringUtils() {
        }
        /**
         * decode a JWT
         *
         * @param authToken
         */
        StringUtils.decodeAuthToken = function (authToken) {
            if (StringUtils.isEmpty(authToken)) {
                throw ClientAuthError.createTokenNullOrEmptyError(authToken);
            }
            var tokenPartsRegex = /^([^\.\s]*)\.([^\.\s]+)\.([^\.\s]*)$/;
            var matches = tokenPartsRegex.exec(authToken);
            if (!matches || matches.length < 4) {
                throw ClientAuthError.createTokenParsingError("Given token is malformed: " + JSON.stringify(authToken));
            }
            var crackedToken = {
                header: matches[1],
                JWSPayload: matches[2],
                JWSSig: matches[3]
            };
            return crackedToken;
        };
        /**
         * Check if a string is empty.
         *
         * @param str
         */
        StringUtils.isEmpty = function (str) {
            return (typeof str === "undefined" || !str || 0 === str.length);
        };
        /**
         * Check if stringified object is empty
         * @param strObj
         */
        StringUtils.isEmptyObj = function (strObj) {
            if (strObj && !StringUtils.isEmpty(strObj)) {
                try {
                    var obj = JSON.parse(strObj);
                    return Object.keys(obj).length === 0;
                }
                catch (e) { }
            }
            return true;
        };
        StringUtils.startsWith = function (str, search) {
            return str.indexOf(search) === 0;
        };
        StringUtils.endsWith = function (str, search) {
            return (str.length >= search.length) && (str.lastIndexOf(search) === (str.length - search.length));
        };
        /**
         * Parses string into an object.
         *
         * @param query
         */
        StringUtils.queryStringToObject = function (query) {
            var obj = {};
            var params = query.split("&");
            var decode = function (s) { return decodeURIComponent(s.replace(/\+/g, " ")); };
            params.forEach(function (pair) {
                if (pair.trim()) {
                    var _a = pair.split(/=(.+)/g, 2), key = _a[0], value = _a[1]; // Split on the first occurence of the '=' character
                    if (key && value) {
                        obj[decode(key)] = decode(value);
                    }
                }
            });
            return obj;
        };
        /**
         * Trims entries in an array.
         *
         * @param arr
         */
        StringUtils.trimArrayEntries = function (arr) {
            return arr.map(function (entry) { return entry.trim(); });
        };
        /**
         * Removes empty strings from array
         * @param arr
         */
        StringUtils.removeEmptyStringsFromArray = function (arr) {
            return arr.filter(function (entry) {
                return !StringUtils.isEmpty(entry);
            });
        };
        /**
         * Attempts to parse a string into JSON
         * @param str
         */
        StringUtils.jsonParseHelper = function (str) {
            try {
                return JSON.parse(str);
            }
            catch (e) {
                return null;
            }
        };
        /**
         * Tests if a given string matches a given pattern, with support for wildcards and queries.
         * @param pattern Wildcard pattern to string match. Supports "*" for wildcards and "?" for queries
         * @param input String to match against
         */
        StringUtils.matchPattern = function (pattern, input) {
            /**
             * Wildcard support: https://stackoverflow.com/a/3117248/4888559
             * Queries: replaces "?" in string with escaped "\?" for regex test
             */
            var regex = new RegExp(pattern.replace(/\\/g, "\\\\").replace(/\*/g, "[^ ]*").replace(/\?/g, "\\\?")); // eslint-disable-line security/detect-non-literal-regexp
            return regex.test(input);
        };
        return StringUtils;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Log message level.
     */
    var LogLevel;
    (function (LogLevel) {
        LogLevel[LogLevel["Error"] = 0] = "Error";
        LogLevel[LogLevel["Warning"] = 1] = "Warning";
        LogLevel[LogLevel["Info"] = 2] = "Info";
        LogLevel[LogLevel["Verbose"] = 3] = "Verbose";
        LogLevel[LogLevel["Trace"] = 4] = "Trace";
    })(LogLevel || (LogLevel = {}));
    /**
     * Class which facilitates logging of messages to a specific place.
     */
    var Logger = /** @class */ (function () {
        function Logger(loggerOptions, packageName, packageVersion) {
            // Current log level, defaults to info.
            this.level = LogLevel.Info;
            var defaultLoggerCallback = function () {
                return;
            };
            this.localCallback = loggerOptions.loggerCallback || defaultLoggerCallback;
            this.piiLoggingEnabled = loggerOptions.piiLoggingEnabled || false;
            this.level = typeof (loggerOptions.logLevel) === "number" ? loggerOptions.logLevel : LogLevel.Info;
            this.correlationId = loggerOptions.correlationId || Constants.EMPTY_STRING;
            this.packageName = packageName || Constants.EMPTY_STRING;
            this.packageVersion = packageVersion || Constants.EMPTY_STRING;
        }
        /**
         * Create new Logger with existing configurations.
         */
        Logger.prototype.clone = function (packageName, packageVersion, correlationId) {
            return new Logger({ loggerCallback: this.localCallback, piiLoggingEnabled: this.piiLoggingEnabled, logLevel: this.level, correlationId: correlationId || this.correlationId }, packageName, packageVersion);
        };
        /**
         * Log message with required options.
         */
        Logger.prototype.logMessage = function (logMessage, options) {
            if ((options.logLevel > this.level) || (!this.piiLoggingEnabled && options.containsPii)) {
                return;
            }
            var timestamp = new Date().toUTCString();
            // Add correlationId to logs if set, correlationId provided on log messages take precedence
            var logHeader;
            if (!StringUtils.isEmpty(options.correlationId)) {
                logHeader = "[" + timestamp + "] : [" + options.correlationId + "]";
            }
            else if (!StringUtils.isEmpty(this.correlationId)) {
                logHeader = "[" + timestamp + "] : [" + this.correlationId + "]";
            }
            else {
                logHeader = "[" + timestamp + "]";
            }
            var log = logHeader + " : " + this.packageName + "@" + this.packageVersion + " : " + LogLevel[options.logLevel] + " - " + logMessage;
            // debug(`msal:${LogLevel[options.logLevel]}${options.containsPii ? "-Pii": Constants.EMPTY_STRING}${options.context ? `:${options.context}` : Constants.EMPTY_STRING}`)(logMessage);
            this.executeCallback(options.logLevel, log, options.containsPii || false);
        };
        /**
         * Execute callback with message.
         */
        Logger.prototype.executeCallback = function (level, message, containsPii) {
            if (this.localCallback) {
                this.localCallback(level, message, containsPii);
            }
        };
        /**
         * Logs error messages.
         */
        Logger.prototype.error = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Error,
                containsPii: false,
                correlationId: correlationId || Constants.EMPTY_STRING
            });
        };
        /**
         * Logs error messages with PII.
         */
        Logger.prototype.errorPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Error,
                containsPii: true,
                correlationId: correlationId || Constants.EMPTY_STRING
            });
        };
        /**
         * Logs warning messages.
         */
        Logger.prototype.warning = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Warning,
                containsPii: false,
                correlationId: correlationId || Constants.EMPTY_STRING
            });
        };
        /**
         * Logs warning messages with PII.
         */
        Logger.prototype.warningPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Warning,
                containsPii: true,
                correlationId: correlationId || Constants.EMPTY_STRING
            });
        };
        /**
         * Logs info messages.
         */
        Logger.prototype.info = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Info,
                containsPii: false,
                correlationId: correlationId || Constants.EMPTY_STRING
            });
        };
        /**
         * Logs info messages with PII.
         */
        Logger.prototype.infoPii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Info,
                containsPii: true,
                correlationId: correlationId || Constants.EMPTY_STRING
            });
        };
        /**
         * Logs verbose messages.
         */
        Logger.prototype.verbose = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Verbose,
                containsPii: false,
                correlationId: correlationId || Constants.EMPTY_STRING
            });
        };
        /**
         * Logs verbose messages with PII.
         */
        Logger.prototype.verbosePii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Verbose,
                containsPii: true,
                correlationId: correlationId || Constants.EMPTY_STRING
            });
        };
        /**
         * Logs trace messages.
         */
        Logger.prototype.trace = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Trace,
                containsPii: false,
                correlationId: correlationId || Constants.EMPTY_STRING
            });
        };
        /**
         * Logs trace messages with PII.
         */
        Logger.prototype.tracePii = function (message, correlationId) {
            this.logMessage(message, {
                logLevel: LogLevel.Trace,
                containsPii: true,
                correlationId: correlationId || Constants.EMPTY_STRING
            });
        };
        /**
         * Returns whether PII Logging is enabled or not.
         */
        Logger.prototype.isPiiLoggingEnabled = function () {
            return this.piiLoggingEnabled || false;
        };
        return Logger;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */
    /* eslint-disable header/header */
    var name$1 = "@azure/msal-common";
    var version$1 = "7.0.0";

    /*! @azure/msal-common v7.0.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var AzureCloudInstance;
    (function (AzureCloudInstance) {
        // AzureCloudInstance is not specified.
        AzureCloudInstance[AzureCloudInstance["None"] = 0] = "None";
        // Microsoft Azure public cloud
        AzureCloudInstance["AzurePublic"] = "https://login.microsoftonline.com";
        // Microsoft PPE
        AzureCloudInstance["AzurePpe"] = "https://login.windows-ppe.net";
        // Microsoft Chinese national cloud
        AzureCloudInstance["AzureChina"] = "https://login.chinacloudapi.cn";
        // Microsoft German national cloud ("Black Forest")
        AzureCloudInstance["AzureGermany"] = "https://login.microsoftonline.de";
        // US Government cloud
        AzureCloudInstance["AzureUsGovernment"] = "https://login.microsoftonline.us";
    })(AzureCloudInstance || (AzureCloudInstance = {}));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Base type for credentials to be stored in the cache: eg: ACCESS_TOKEN, ID_TOKEN etc
     *
     * Key:Value Schema:
     *
     * Key: <home_account_id*>-<environment>-<credential_type>-<client_id>-<realm*>-<target*>-<requestedClaims*>-<scheme*>
     *
     * Value Schema:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
     *      clientId: client ID of the application
     *      secret: Actual credential as a string
     *      familyId: Family ID identifier, usually only used for refresh tokens
     *      realm: Full tenant or organizational identifier that the account belongs to
     *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
     *      tokenType: Matches the authentication scheme for which the token was issued (i.e. Bearer or pop)
     *      requestedClaimsHash: Matches the SHA 256 hash of the claims object included in the token request
     *      userAssertionHash: Matches the SHA 256 hash of the obo_assertion for the OBO flow
     * }
     */
    var CredentialEntity = /** @class */ (function () {
        function CredentialEntity() {
        }
        /**
         * Generate Account Id key component as per the schema: <home_account_id>-<environment>
         */
        CredentialEntity.prototype.generateAccountId = function () {
            return CredentialEntity.generateAccountIdForCacheKey(this.homeAccountId, this.environment);
        };
        /**
         * Generate Credential Id key component as per the schema: <credential_type>-<client_id>-<realm>
         */
        CredentialEntity.prototype.generateCredentialId = function () {
            return CredentialEntity.generateCredentialIdForCacheKey(this.credentialType, this.clientId, this.realm, this.familyId);
        };
        /**
         * Generate target key component as per schema: <target>
         */
        CredentialEntity.prototype.generateTarget = function () {
            return CredentialEntity.generateTargetForCacheKey(this.target);
        };
        /**
         * generates credential key
         */
        CredentialEntity.prototype.generateCredentialKey = function () {
            return CredentialEntity.generateCredentialCacheKey(this.homeAccountId, this.environment, this.credentialType, this.clientId, this.realm, this.target, this.familyId, this.tokenType, this.requestedClaimsHash);
        };
        /**
         * returns the type of the cache (in this case credential)
         */
        CredentialEntity.prototype.generateType = function () {
            switch (this.credentialType) {
                case CredentialType.ID_TOKEN:
                    return CacheType.ID_TOKEN;
                case CredentialType.ACCESS_TOKEN:
                case CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                    return CacheType.ACCESS_TOKEN;
                case CredentialType.REFRESH_TOKEN:
                    return CacheType.REFRESH_TOKEN;
                default: {
                    throw ClientAuthError.createUnexpectedCredentialTypeError();
                }
            }
        };
        /**
         * helper function to return `CredentialType`
         * @param key
         */
        CredentialEntity.getCredentialType = function (key) {
            // First keyword search will match all "AccessToken" and "AccessToken_With_AuthScheme" credentials
            if (key.indexOf(CredentialType.ACCESS_TOKEN.toLowerCase()) !== -1) {
                // Perform second search to differentiate between "AccessToken" and "AccessToken_With_AuthScheme" credential types
                if (key.indexOf(CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase()) !== -1) {
                    return CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
                }
                return CredentialType.ACCESS_TOKEN;
            }
            else if (key.indexOf(CredentialType.ID_TOKEN.toLowerCase()) !== -1) {
                return CredentialType.ID_TOKEN;
            }
            else if (key.indexOf(CredentialType.REFRESH_TOKEN.toLowerCase()) !== -1) {
                return CredentialType.REFRESH_TOKEN;
            }
            return Constants.NOT_DEFINED;
        };
        /**
         * generates credential key
         * <home_account_id*>-\<environment>-<credential_type>-<client_id>-<realm\*>-<target\*>-<scheme\*>
         */
        CredentialEntity.generateCredentialCacheKey = function (homeAccountId, environment, credentialType, clientId, realm, target, familyId, tokenType, requestedClaimsHash) {
            var credentialKey = [
                this.generateAccountIdForCacheKey(homeAccountId, environment),
                this.generateCredentialIdForCacheKey(credentialType, clientId, realm, familyId),
                this.generateTargetForCacheKey(target),
                this.generateClaimsHashForCacheKey(requestedClaimsHash),
                this.generateSchemeForCacheKey(tokenType)
            ];
            return credentialKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * generates Account Id for keys
         * @param homeAccountId
         * @param environment
         */
        CredentialEntity.generateAccountIdForCacheKey = function (homeAccountId, environment) {
            var accountId = [homeAccountId, environment];
            return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Generates Credential Id for keys
         * @param credentialType
         * @param realm
         * @param clientId
         * @param familyId
         */
        CredentialEntity.generateCredentialIdForCacheKey = function (credentialType, clientId, realm, familyId) {
            var clientOrFamilyId = credentialType === CredentialType.REFRESH_TOKEN
                ? familyId || clientId
                : clientId;
            var credentialId = [
                credentialType,
                clientOrFamilyId,
                realm || Constants.EMPTY_STRING,
            ];
            return credentialId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Generate target key component as per schema: <target>
         */
        CredentialEntity.generateTargetForCacheKey = function (scopes) {
            return (scopes || Constants.EMPTY_STRING).toLowerCase();
        };
        /**
         * Generate requested claims key component as per schema: <requestedClaims>
         */
        CredentialEntity.generateClaimsHashForCacheKey = function (requestedClaimsHash) {
            return (requestedClaimsHash || Constants.EMPTY_STRING).toLowerCase();
        };
        /**
         * Generate scheme key componenet as per schema: <scheme>
         */
        CredentialEntity.generateSchemeForCacheKey = function (tokenType) {
            /*
             * PoP Tokens and SSH certs include scheme in cache key
             * Cast to lowercase to handle "bearer" from ADFS
             */
            return (tokenType && tokenType.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase()) ? tokenType.toLowerCase() : Constants.EMPTY_STRING;
        };
        return CredentialEntity;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * ClientConfigurationErrorMessage class containing string constants used by error codes and messages.
     */
    var ClientConfigurationErrorMessage = {
        redirectUriNotSet: {
            code: "redirect_uri_empty",
            desc: "A redirect URI is required for all calls, and none has been set."
        },
        postLogoutUriNotSet: {
            code: "post_logout_uri_empty",
            desc: "A post logout redirect has not been set."
        },
        claimsRequestParsingError: {
            code: "claims_request_parsing_error",
            desc: "Could not parse the given claims request object."
        },
        authorityUriInsecure: {
            code: "authority_uri_insecure",
            desc: "Authority URIs must use https.  Please see here for valid authority configuration options: https://docs.microsoft.com/en-us/azure/active-directory/develop/msal-js-initializing-client-applications#configuration-options"
        },
        urlParseError: {
            code: "url_parse_error",
            desc: "URL could not be parsed into appropriate segments."
        },
        urlEmptyError: {
            code: "empty_url_error",
            desc: "URL was empty or null."
        },
        emptyScopesError: {
            code: "empty_input_scopes_error",
            desc: "Scopes cannot be passed as null, undefined or empty array because they are required to obtain an access token."
        },
        nonArrayScopesError: {
            code: "nonarray_input_scopes_error",
            desc: "Scopes cannot be passed as non-array."
        },
        clientIdSingleScopeError: {
            code: "clientid_input_scopes_error",
            desc: "Client ID can only be provided as a single scope."
        },
        invalidPrompt: {
            code: "invalid_prompt_value",
            desc: "Supported prompt values are 'login', 'select_account', 'consent', 'create' and 'none'.  Please see here for valid configuration options: https://azuread.github.io/microsoft-authentication-library-for-js/ref/modules/_azure_msal_common.html#commonauthorizationurlrequest",
        },
        invalidClaimsRequest: {
            code: "invalid_claims",
            desc: "Given claims parameter must be a stringified JSON object."
        },
        tokenRequestEmptyError: {
            code: "token_request_empty",
            desc: "Token request was empty and not found in cache."
        },
        logoutRequestEmptyError: {
            code: "logout_request_empty",
            desc: "The logout request was null or undefined."
        },
        invalidCodeChallengeMethod: {
            code: "invalid_code_challenge_method",
            desc: "code_challenge_method passed is invalid. Valid values are \"plain\" and \"S256\"."
        },
        invalidCodeChallengeParams: {
            code: "pkce_params_missing",
            desc: "Both params: code_challenge and code_challenge_method are to be passed if to be sent in the request"
        },
        invalidCloudDiscoveryMetadata: {
            code: "invalid_cloud_discovery_metadata",
            desc: "Invalid cloudDiscoveryMetadata provided. Must be a stringified JSON object containing tenant_discovery_endpoint and metadata fields"
        },
        invalidAuthorityMetadata: {
            code: "invalid_authority_metadata",
            desc: "Invalid authorityMetadata provided. Must by a stringified JSON object containing authorization_endpoint, token_endpoint, issuer fields."
        },
        untrustedAuthority: {
            code: "untrusted_authority",
            desc: "The provided authority is not a trusted authority. Please include this authority in the knownAuthorities config parameter."
        },
        invalidAzureCloudInstance: {
            code: "invalid_azure_cloud_instance",
            desc: "Invalid AzureCloudInstance provided. Please refer MSAL JS docs: aks.ms/msaljs/azure_cloud_instance for valid values"
        },
        missingSshJwk: {
            code: "missing_ssh_jwk",
            desc: "Missing sshJwk in SSH certificate request. A stringified JSON Web Key is required when using the SSH authentication scheme."
        },
        missingSshKid: {
            code: "missing_ssh_kid",
            desc: "Missing sshKid in SSH certificate request. A string that uniquely identifies the public SSH key is required when using the SSH authentication scheme."
        },
        missingNonceAuthenticationHeader: {
            code: "missing_nonce_authentication_header",
            desc: "Unable to find an authentication header containing server nonce. Either the Authentication-Info or WWW-Authenticate headers must be present in order to obtain a server nonce."
        },
        invalidAuthenticationHeader: {
            code: "invalid_authentication_header",
            desc: "Invalid authentication header provided"
        }
    };
    /**
     * Error thrown when there is an error in configuration of the MSAL.js library.
     */
    var ClientConfigurationError = /** @class */ (function (_super) {
        __extends(ClientConfigurationError, _super);
        function ClientConfigurationError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "ClientConfigurationError";
            Object.setPrototypeOf(_this, ClientConfigurationError.prototype);
            return _this;
        }
        /**
         * Creates an error thrown when the redirect uri is empty (not set by caller)
         */
        ClientConfigurationError.createRedirectUriEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.redirectUriNotSet.code, ClientConfigurationErrorMessage.redirectUriNotSet.desc);
        };
        /**
         * Creates an error thrown when the post-logout redirect uri is empty (not set by caller)
         */
        ClientConfigurationError.createPostLogoutRedirectUriEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.postLogoutUriNotSet.code, ClientConfigurationErrorMessage.postLogoutUriNotSet.desc);
        };
        /**
         * Creates an error thrown when the claims request could not be successfully parsed
         */
        ClientConfigurationError.createClaimsRequestParsingError = function (claimsRequestParseError) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.claimsRequestParsingError.code, ClientConfigurationErrorMessage.claimsRequestParsingError.desc + " Given value: " + claimsRequestParseError);
        };
        /**
         * Creates an error thrown if authority uri is given an insecure protocol.
         * @param urlString
         */
        ClientConfigurationError.createInsecureAuthorityUriError = function (urlString) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.authorityUriInsecure.code, ClientConfigurationErrorMessage.authorityUriInsecure.desc + " Given URI: " + urlString);
        };
        /**
         * Creates an error thrown if URL string does not parse into separate segments.
         * @param urlString
         */
        ClientConfigurationError.createUrlParseError = function (urlParseError) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.urlParseError.code, ClientConfigurationErrorMessage.urlParseError.desc + " Given Error: " + urlParseError);
        };
        /**
         * Creates an error thrown if URL string is empty or null.
         * @param urlString
         */
        ClientConfigurationError.createUrlEmptyError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.urlEmptyError.code, ClientConfigurationErrorMessage.urlEmptyError.desc);
        };
        /**
         * Error thrown when scopes are empty.
         * @param scopesValue
         */
        ClientConfigurationError.createEmptyScopesArrayError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.emptyScopesError.code, "" + ClientConfigurationErrorMessage.emptyScopesError.desc);
        };
        /**
         * Error thrown when client id scope is not provided as single scope.
         * @param inputScopes
         */
        ClientConfigurationError.createClientIdSingleScopeError = function (inputScopes) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.clientIdSingleScopeError.code, ClientConfigurationErrorMessage.clientIdSingleScopeError.desc + " Given Scopes: " + inputScopes);
        };
        /**
         * Error thrown when prompt is not an allowed type.
         * @param promptValue
         */
        ClientConfigurationError.createInvalidPromptError = function (promptValue) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidPrompt.code, ClientConfigurationErrorMessage.invalidPrompt.desc + " Given value: " + promptValue);
        };
        /**
         * Creates error thrown when claims parameter is not a stringified JSON object
         */
        ClientConfigurationError.createInvalidClaimsRequestError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidClaimsRequest.code, ClientConfigurationErrorMessage.invalidClaimsRequest.desc);
        };
        /**
         * Throws error when token request is empty and nothing cached in storage.
         */
        ClientConfigurationError.createEmptyLogoutRequestError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.logoutRequestEmptyError.code, ClientConfigurationErrorMessage.logoutRequestEmptyError.desc);
        };
        /**
         * Throws error when token request is empty and nothing cached in storage.
         */
        ClientConfigurationError.createEmptyTokenRequestError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.tokenRequestEmptyError.code, ClientConfigurationErrorMessage.tokenRequestEmptyError.desc);
        };
        /**
         * Throws error when an invalid code_challenge_method is passed by the user
         */
        ClientConfigurationError.createInvalidCodeChallengeMethodError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeMethod.code, ClientConfigurationErrorMessage.invalidCodeChallengeMethod.desc);
        };
        /**
         * Throws error when both params: code_challenge and code_challenge_method are not passed together
         */
        ClientConfigurationError.createInvalidCodeChallengeParamsError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCodeChallengeParams.code, ClientConfigurationErrorMessage.invalidCodeChallengeParams.desc);
        };
        /**
         * Throws an error when the user passes invalid cloudDiscoveryMetadata
         */
        ClientConfigurationError.createInvalidCloudDiscoveryMetadataError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.code, ClientConfigurationErrorMessage.invalidCloudDiscoveryMetadata.desc);
        };
        /**
         * Throws an error when the user passes invalid cloudDiscoveryMetadata
         */
        ClientConfigurationError.createInvalidAuthorityMetadataError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidAuthorityMetadata.code, ClientConfigurationErrorMessage.invalidAuthorityMetadata.desc);
        };
        /**
         * Throws error when provided authority is not a member of the trusted host list
         */
        ClientConfigurationError.createUntrustedAuthorityError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.untrustedAuthority.code, ClientConfigurationErrorMessage.untrustedAuthority.desc);
        };
        /**
         * Throws error when the AzureCloudInstance is set to an invalid value
         */
        ClientConfigurationError.createInvalidAzureCloudInstanceError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidAzureCloudInstance.code, ClientConfigurationErrorMessage.invalidAzureCloudInstance.desc);
        };
        /**
         * Throws an error when the authentication scheme is set to SSH but the SSH public key is omitted from the request
         */
        ClientConfigurationError.createMissingSshJwkError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.missingSshJwk.code, ClientConfigurationErrorMessage.missingSshJwk.desc);
        };
        /**
         * Throws an error when the authentication scheme is set to SSH but the SSH public key ID is omitted from the request
         */
        ClientConfigurationError.createMissingSshKidError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.missingSshKid.code, ClientConfigurationErrorMessage.missingSshKid.desc);
        };
        /**
         * Throws error when provided headers don't contain a header that a server nonce can be extracted from
         */
        ClientConfigurationError.createMissingNonceAuthenticationHeadersError = function () {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.missingNonceAuthenticationHeader.code, ClientConfigurationErrorMessage.missingNonceAuthenticationHeader.desc);
        };
        /**
         * Throws error when a provided header is invalid in any way
         */
        ClientConfigurationError.createInvalidAuthenticationHeaderError = function (invalidHeaderName, details) {
            return new ClientConfigurationError(ClientConfigurationErrorMessage.invalidAuthenticationHeader.code, ClientConfigurationErrorMessage.invalidAuthenticationHeader.desc + ". Invalid header: " + invalidHeaderName + ". Details: " + details);
        };
        return ClientConfigurationError;
    }(ClientAuthError));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * The ScopeSet class creates a set of scopes. Scopes are case-insensitive, unique values, so the Set object in JS makes
     * the most sense to implement for this class. All scopes are trimmed and converted to lower case strings in intersection and union functions
     * to ensure uniqueness of strings.
     */
    var ScopeSet = /** @class */ (function () {
        function ScopeSet(inputScopes) {
            var _this = this;
            // Filter empty string and null/undefined array items
            var scopeArr = inputScopes ? StringUtils.trimArrayEntries(__spreadArrays(inputScopes)) : [];
            var filteredInput = scopeArr ? StringUtils.removeEmptyStringsFromArray(scopeArr) : [];
            // Validate and filter scopes (validate function throws if validation fails)
            this.validateInputScopes(filteredInput);
            this.scopes = new Set(); // Iterator in constructor not supported by IE11
            filteredInput.forEach(function (scope) { return _this.scopes.add(scope); });
        }
        /**
         * Factory method to create ScopeSet from space-delimited string
         * @param inputScopeString
         * @param appClientId
         * @param scopesRequired
         */
        ScopeSet.fromString = function (inputScopeString) {
            var scopeString = inputScopeString || Constants.EMPTY_STRING;
            var inputScopes = scopeString.split(" ");
            return new ScopeSet(inputScopes);
        };
        /**
         * Used to validate the scopes input parameter requested  by the developer.
         * @param {Array<string>} inputScopes - Developer requested permissions. Not all scopes are guaranteed to be included in the access token returned.
         * @param {boolean} scopesRequired - Boolean indicating whether the scopes array is required or not
         */
        ScopeSet.prototype.validateInputScopes = function (inputScopes) {
            // Check if scopes are required but not given or is an empty array
            if (!inputScopes || inputScopes.length < 1) {
                throw ClientConfigurationError.createEmptyScopesArrayError();
            }
        };
        /**
         * Check if a given scope is present in this set of scopes.
         * @param scope
         */
        ScopeSet.prototype.containsScope = function (scope) {
            var lowerCaseScopes = this.printScopesLowerCase().split(" ");
            var lowerCaseScopesSet = new ScopeSet(lowerCaseScopes);
            // compare lowercase scopes
            return !StringUtils.isEmpty(scope) ? lowerCaseScopesSet.scopes.has(scope.toLowerCase()) : false;
        };
        /**
         * Check if a set of scopes is present in this set of scopes.
         * @param scopeSet
         */
        ScopeSet.prototype.containsScopeSet = function (scopeSet) {
            var _this = this;
            if (!scopeSet || scopeSet.scopes.size <= 0) {
                return false;
            }
            return (this.scopes.size >= scopeSet.scopes.size && scopeSet.asArray().every(function (scope) { return _this.containsScope(scope); }));
        };
        /**
         * Check if set of scopes contains only the defaults
         */
        ScopeSet.prototype.containsOnlyOIDCScopes = function () {
            var _this = this;
            var defaultScopeCount = 0;
            OIDC_SCOPES.forEach(function (defaultScope) {
                if (_this.containsScope(defaultScope)) {
                    defaultScopeCount += 1;
                }
            });
            return this.scopes.size === defaultScopeCount;
        };
        /**
         * Appends single scope if passed
         * @param newScope
         */
        ScopeSet.prototype.appendScope = function (newScope) {
            if (!StringUtils.isEmpty(newScope)) {
                this.scopes.add(newScope.trim());
            }
        };
        /**
         * Appends multiple scopes if passed
         * @param newScopes
         */
        ScopeSet.prototype.appendScopes = function (newScopes) {
            var _this = this;
            try {
                newScopes.forEach(function (newScope) { return _this.appendScope(newScope); });
            }
            catch (e) {
                throw ClientAuthError.createAppendScopeSetError(e);
            }
        };
        /**
         * Removes element from set of scopes.
         * @param scope
         */
        ScopeSet.prototype.removeScope = function (scope) {
            if (StringUtils.isEmpty(scope)) {
                throw ClientAuthError.createRemoveEmptyScopeFromSetError(scope);
            }
            this.scopes.delete(scope.trim());
        };
        /**
         * Removes default scopes from set of scopes
         * Primarily used to prevent cache misses if the default scopes are not returned from the server
         */
        ScopeSet.prototype.removeOIDCScopes = function () {
            var _this = this;
            OIDC_SCOPES.forEach(function (defaultScope) {
                _this.scopes.delete(defaultScope);
            });
        };
        /**
         * Combines an array of scopes with the current set of scopes.
         * @param otherScopes
         */
        ScopeSet.prototype.unionScopeSets = function (otherScopes) {
            if (!otherScopes) {
                throw ClientAuthError.createEmptyInputScopeSetError();
            }
            var unionScopes = new Set(); // Iterator in constructor not supported in IE11
            otherScopes.scopes.forEach(function (scope) { return unionScopes.add(scope.toLowerCase()); });
            this.scopes.forEach(function (scope) { return unionScopes.add(scope.toLowerCase()); });
            return unionScopes;
        };
        /**
         * Check if scopes intersect between this set and another.
         * @param otherScopes
         */
        ScopeSet.prototype.intersectingScopeSets = function (otherScopes) {
            if (!otherScopes) {
                throw ClientAuthError.createEmptyInputScopeSetError();
            }
            // Do not allow OIDC scopes to be the only intersecting scopes
            if (!otherScopes.containsOnlyOIDCScopes()) {
                otherScopes.removeOIDCScopes();
            }
            var unionScopes = this.unionScopeSets(otherScopes);
            var sizeOtherScopes = otherScopes.getScopeCount();
            var sizeThisScopes = this.getScopeCount();
            var sizeUnionScopes = unionScopes.size;
            return sizeUnionScopes < (sizeThisScopes + sizeOtherScopes);
        };
        /**
         * Returns size of set of scopes.
         */
        ScopeSet.prototype.getScopeCount = function () {
            return this.scopes.size;
        };
        /**
         * Returns the scopes as an array of string values
         */
        ScopeSet.prototype.asArray = function () {
            var array = [];
            this.scopes.forEach(function (val) { return array.push(val); });
            return array;
        };
        /**
         * Prints scopes into a space-delimited string
         */
        ScopeSet.prototype.printScopes = function () {
            if (this.scopes) {
                var scopeArr = this.asArray();
                return scopeArr.join(" ");
            }
            return Constants.EMPTY_STRING;
        };
        /**
         * Prints scopes into a space-delimited lower-case string (used for caching)
         */
        ScopeSet.prototype.printScopesLowerCase = function () {
            return this.printScopes().toLowerCase();
        };
        return ScopeSet;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Function to build a client info object from server clientInfo string
     * @param rawClientInfo
     * @param crypto
     */
    function buildClientInfo(rawClientInfo, crypto) {
        if (StringUtils.isEmpty(rawClientInfo)) {
            throw ClientAuthError.createClientInfoEmptyError();
        }
        try {
            var decodedClientInfo = crypto.base64Decode(rawClientInfo);
            return JSON.parse(decodedClientInfo);
        }
        catch (e) {
            throw ClientAuthError.createClientInfoDecodingError(e);
        }
    }
    /**
     * Function to build a client info object from cached homeAccountId string
     * @param homeAccountId
     */
    function buildClientInfoFromHomeAccountId(homeAccountId) {
        if (StringUtils.isEmpty(homeAccountId)) {
            throw ClientAuthError.createClientInfoDecodingError("Home account ID was empty.");
        }
        var clientInfoParts = homeAccountId.split(Separators.CLIENT_INFO_SEPARATOR, 2);
        return {
            uid: clientInfoParts[0],
            utid: clientInfoParts.length < 2 ? Constants.EMPTY_STRING : clientInfoParts[1]
        };
    }

    /*! @azure/msal-common v7.0.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Authority types supported by MSAL.
     */
    var AuthorityType;
    (function (AuthorityType) {
        AuthorityType[AuthorityType["Default"] = 0] = "Default";
        AuthorityType[AuthorityType["Adfs"] = 1] = "Adfs";
    })(AuthorityType || (AuthorityType = {}));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Type that defines required and optional parameters for an Account field (based on universal cache schema implemented by all MSALs).
     *
     * Key : Value Schema
     *
     * Key: <home_account_id>-<environment>-<realm*>
     *
     * Value Schema:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      realm: Full tenant or organizational identifier that the account belongs to
     *      localAccountId: Original tenant-specific accountID, usually used for legacy cases
     *      username: primary username that represents the user, usually corresponds to preferred_username in the v2 endpt
     *      authorityType: Accounts authority type as a string
     *      name: Full name for the account, including given name and family name,
     *      clientInfo: Full base64 encoded client info received from ESTS
     *      lastModificationTime: last time this entity was modified in the cache
     *      lastModificationApp:
     *      idTokenClaims: Object containing claims parsed from ID token
     *      nativeAccountId: Account identifier on the native device
     * }
     */
    var AccountEntity = /** @class */ (function () {
        function AccountEntity() {
        }
        /**
         * Generate Account Id key component as per the schema: <home_account_id>-<environment>
         */
        AccountEntity.prototype.generateAccountId = function () {
            var accountId = [this.homeAccountId, this.environment];
            return accountId.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Generate Account Cache Key as per the schema: <home_account_id>-<environment>-<realm*>
         */
        AccountEntity.prototype.generateAccountKey = function () {
            return AccountEntity.generateAccountCacheKey({
                homeAccountId: this.homeAccountId,
                environment: this.environment,
                tenantId: this.realm,
                username: this.username,
                localAccountId: this.localAccountId
            });
        };
        /**
         * returns the type of the cache (in this case account)
         */
        AccountEntity.prototype.generateType = function () {
            switch (this.authorityType) {
                case CacheAccountType.ADFS_ACCOUNT_TYPE:
                    return CacheType.ADFS;
                case CacheAccountType.MSAV1_ACCOUNT_TYPE:
                    return CacheType.MSA;
                case CacheAccountType.MSSTS_ACCOUNT_TYPE:
                    return CacheType.MSSTS;
                case CacheAccountType.GENERIC_ACCOUNT_TYPE:
                    return CacheType.GENERIC;
                default: {
                    throw ClientAuthError.createUnexpectedAccountTypeError();
                }
            }
        };
        /**
         * Returns the AccountInfo interface for this account.
         */
        AccountEntity.prototype.getAccountInfo = function () {
            return {
                homeAccountId: this.homeAccountId,
                environment: this.environment,
                tenantId: this.realm,
                username: this.username,
                localAccountId: this.localAccountId,
                name: this.name,
                idTokenClaims: this.idTokenClaims,
                nativeAccountId: this.nativeAccountId
            };
        };
        /**
         * Generates account key from interface
         * @param accountInterface
         */
        AccountEntity.generateAccountCacheKey = function (accountInterface) {
            var accountKey = [
                accountInterface.homeAccountId,
                accountInterface.environment || Constants.EMPTY_STRING,
                accountInterface.tenantId || Constants.EMPTY_STRING,
            ];
            return accountKey.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Build Account cache from IdToken, clientInfo and authority/policy. Associated with AAD.
         * @param clientInfo
         * @param authority
         * @param idToken
         * @param policy
         */
        AccountEntity.createAccount = function (clientInfo, homeAccountId, idToken, authority, cloudGraphHostName, msGraphHost, environment, nativeAccountId) {
            var _a, _b, _c, _d, _e, _f;
            var account = new AccountEntity();
            account.authorityType = CacheAccountType.MSSTS_ACCOUNT_TYPE;
            account.clientInfo = clientInfo;
            account.homeAccountId = homeAccountId;
            account.nativeAccountId = nativeAccountId;
            var env = environment || (authority && authority.getPreferredCache());
            if (!env) {
                throw ClientAuthError.createInvalidCacheEnvironmentError();
            }
            account.environment = env;
            // non AAD scenarios can have empty realm
            account.realm = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.tid) || Constants.EMPTY_STRING;
            if (idToken) {
                account.idTokenClaims = idToken.claims;
                // How do you account for MSA CID here?
                account.localAccountId = ((_b = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _b === void 0 ? void 0 : _b.oid) || ((_c = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _c === void 0 ? void 0 : _c.sub) || Constants.EMPTY_STRING;
                /*
                 * In B2C scenarios the emails claim is used instead of preferred_username and it is an array. In most cases it will contain a single email.
                 * This field should not be relied upon if a custom policy is configured to return more than 1 email.
                 */
                account.username = ((_d = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _d === void 0 ? void 0 : _d.preferred_username) || (((_e = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _e === void 0 ? void 0 : _e.emails) ? idToken.claims.emails[0] : Constants.EMPTY_STRING);
                account.name = (_f = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _f === void 0 ? void 0 : _f.name;
            }
            account.cloudGraphHostName = cloudGraphHostName;
            account.msGraphHost = msGraphHost;
            return account;
        };
        /**
         * Builds non-AAD/ADFS account.
         * @param authority
         * @param idToken
         */
        AccountEntity.createGenericAccount = function (homeAccountId, idToken, authority, cloudGraphHostName, msGraphHost, environment) {
            var _a, _b, _c, _d;
            var account = new AccountEntity();
            account.authorityType = (authority && authority.authorityType === AuthorityType.Adfs) ? CacheAccountType.ADFS_ACCOUNT_TYPE : CacheAccountType.GENERIC_ACCOUNT_TYPE;
            account.homeAccountId = homeAccountId;
            // non AAD scenarios can have empty realm
            account.realm = Constants.EMPTY_STRING;
            var env = environment || authority && authority.getPreferredCache();
            if (!env) {
                throw ClientAuthError.createInvalidCacheEnvironmentError();
            }
            if (idToken) {
                // How do you account for MSA CID here?
                account.localAccountId = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.oid) || ((_b = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _b === void 0 ? void 0 : _b.sub) || Constants.EMPTY_STRING;
                // upn claim for most ADFS scenarios
                account.username = ((_c = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _c === void 0 ? void 0 : _c.upn) || Constants.EMPTY_STRING;
                account.name = ((_d = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _d === void 0 ? void 0 : _d.name) || Constants.EMPTY_STRING;
                account.idTokenClaims = idToken === null || idToken === void 0 ? void 0 : idToken.claims;
            }
            account.environment = env;
            account.cloudGraphHostName = cloudGraphHostName;
            account.msGraphHost = msGraphHost;
            /*
             * add uniqueName to claims
             * account.name = idToken.claims.uniqueName;
             */
            return account;
        };
        /**
         * Generate HomeAccountId from server response
         * @param serverClientInfo
         * @param authType
         */
        AccountEntity.generateHomeAccountId = function (serverClientInfo, authType, logger, cryptoObj, idToken) {
            var _a;
            var accountId = ((_a = idToken === null || idToken === void 0 ? void 0 : idToken.claims) === null || _a === void 0 ? void 0 : _a.sub) ? idToken.claims.sub : Constants.EMPTY_STRING;
            // since ADFS does not have tid and does not set client_info
            if (authType === AuthorityType.Adfs) {
                return accountId;
            }
            // for cases where there is clientInfo
            if (serverClientInfo) {
                try {
                    var clientInfo = buildClientInfo(serverClientInfo, cryptoObj);
                    if (!StringUtils.isEmpty(clientInfo.uid) && !StringUtils.isEmpty(clientInfo.utid)) {
                        return "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid;
                    }
                }
                catch (e) { }
            }
            // default to "sub" claim
            logger.verbose("No client info in response");
            return accountId;
        };
        /**
         * Validates an entity: checks for all expected params
         * @param entity
         */
        AccountEntity.isAccountEntity = function (entity) {
            if (!entity) {
                return false;
            }
            return (entity.hasOwnProperty("homeAccountId") &&
                entity.hasOwnProperty("environment") &&
                entity.hasOwnProperty("realm") &&
                entity.hasOwnProperty("localAccountId") &&
                entity.hasOwnProperty("username") &&
                entity.hasOwnProperty("authorityType"));
        };
        /**
         * Helper function to determine whether 2 accountInfo objects represent the same account
         * @param accountA
         * @param accountB
         * @param compareClaims - If set to true idTokenClaims will also be compared to determine account equality
         */
        AccountEntity.accountInfoIsEqual = function (accountA, accountB, compareClaims) {
            if (!accountA || !accountB) {
                return false;
            }
            var claimsMatch = true; // default to true so as to not fail comparison below if compareClaims: false
            if (compareClaims) {
                var accountAClaims = (accountA.idTokenClaims || {});
                var accountBClaims = (accountB.idTokenClaims || {});
                // issued at timestamp and nonce are expected to change each time a new id token is acquired
                claimsMatch = (accountAClaims.iat === accountBClaims.iat) &&
                    (accountAClaims.nonce === accountBClaims.nonce);
            }
            return (accountA.homeAccountId === accountB.homeAccountId) &&
                (accountA.localAccountId === accountB.localAccountId) &&
                (accountA.username === accountB.username) &&
                (accountA.tenantId === accountB.tenantId) &&
                (accountA.environment === accountB.environment) &&
                (accountA.nativeAccountId === accountB.nativeAccountId) &&
                claimsMatch;
        };
        return AccountEntity;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * JWT Token representation class. Parses token string and generates claims object.
     */
    var AuthToken = /** @class */ (function () {
        function AuthToken(rawToken, crypto) {
            if (StringUtils.isEmpty(rawToken)) {
                throw ClientAuthError.createTokenNullOrEmptyError(rawToken);
            }
            this.rawToken = rawToken;
            this.claims = AuthToken.extractTokenClaims(rawToken, crypto);
        }
        /**
         * Extract token by decoding the rawToken
         *
         * @param encodedToken
         */
        AuthToken.extractTokenClaims = function (encodedToken, crypto) {
            var decodedToken = StringUtils.decodeAuthToken(encodedToken);
            // token will be decoded to get the username
            try {
                var base64TokenPayload = decodedToken.JWSPayload;
                // base64Decode() should throw an error if there is an issue
                var base64Decoded = crypto.base64Decode(base64TokenPayload);
                return JSON.parse(base64Decoded);
            }
            catch (err) {
                throw ClientAuthError.createTokenParsingError(err);
            }
        };
        return AuthToken;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Interface class which implement cache storage functions used by MSAL to perform validity checks, and store tokens.
     */
    var CacheManager = /** @class */ (function () {
        function CacheManager(clientId, cryptoImpl) {
            this.clientId = clientId;
            this.cryptoImpl = cryptoImpl;
        }
        /**
         * Returns all accounts in cache
         */
        CacheManager.prototype.getAllAccounts = function () {
            var _this = this;
            var currentAccounts = this.getAccountsFilteredBy();
            var accountValues = Object.keys(currentAccounts).map(function (accountKey) { return currentAccounts[accountKey]; });
            var numAccounts = accountValues.length;
            if (numAccounts < 1) {
                return [];
            }
            else {
                var allAccounts = accountValues.map(function (value) {
                    var accountEntity = CacheManager.toObject(new AccountEntity(), value);
                    var accountInfo = accountEntity.getAccountInfo();
                    var idToken = _this.readIdTokenFromCache(_this.clientId, accountInfo);
                    if (idToken && !accountInfo.idTokenClaims) {
                        accountInfo.idTokenClaims = new AuthToken(idToken.secret, _this.cryptoImpl).claims;
                    }
                    return accountInfo;
                });
                return allAccounts;
            }
        };
        /**
         * saves a cache record
         * @param cacheRecord
         */
        CacheManager.prototype.saveCacheRecord = function (cacheRecord) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!cacheRecord) {
                                throw ClientAuthError.createNullOrUndefinedCacheRecord();
                            }
                            if (!!cacheRecord.account) {
                                this.setAccount(cacheRecord.account);
                            }
                            if (!!cacheRecord.idToken) {
                                this.setIdTokenCredential(cacheRecord.idToken);
                            }
                            if (!!!cacheRecord.accessToken) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.saveAccessToken(cacheRecord.accessToken)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            if (!!cacheRecord.refreshToken) {
                                this.setRefreshTokenCredential(cacheRecord.refreshToken);
                            }
                            if (!!cacheRecord.appMetadata) {
                                this.setAppMetadata(cacheRecord.appMetadata);
                            }
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * saves access token credential
         * @param credential
         */
        CacheManager.prototype.saveAccessToken = function (credential) {
            return __awaiter(this, void 0, void 0, function () {
                var currentTokenCache, currentScopes, currentAccessTokens, removedAccessTokens_1;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            currentTokenCache = this.getCredentialsFilteredBy({
                                clientId: credential.clientId,
                                credentialType: credential.credentialType,
                                environment: credential.environment,
                                homeAccountId: credential.homeAccountId,
                                realm: credential.realm,
                                tokenType: credential.tokenType,
                                requestedClaimsHash: credential.requestedClaimsHash
                            });
                            currentScopes = ScopeSet.fromString(credential.target);
                            currentAccessTokens = Object.keys(currentTokenCache.accessTokens).map(function (key) { return currentTokenCache.accessTokens[key]; });
                            if (!currentAccessTokens) return [3 /*break*/, 2];
                            removedAccessTokens_1 = [];
                            currentAccessTokens.forEach(function (tokenEntity) {
                                var tokenScopeSet = ScopeSet.fromString(tokenEntity.target);
                                if (tokenScopeSet.intersectingScopeSets(currentScopes)) {
                                    removedAccessTokens_1.push(_this.removeCredential(tokenEntity));
                                }
                            });
                            return [4 /*yield*/, Promise.all(removedAccessTokens_1)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            this.setAccessTokenCredential(credential);
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * retrieve accounts matching all provided filters; if no filter is set, get all accounts
         * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
         * @param homeAccountId
         * @param environment
         * @param realm
         */
        CacheManager.prototype.getAccountsFilteredBy = function (accountFilter) {
            return this.getAccountsFilteredByInternal(accountFilter ? accountFilter.homeAccountId : Constants.EMPTY_STRING, accountFilter ? accountFilter.environment : Constants.EMPTY_STRING, accountFilter ? accountFilter.realm : Constants.EMPTY_STRING);
        };
        /**
         * retrieve accounts matching all provided filters; if no filter is set, get all accounts
         * not checking for casing as keys are all generated in lower case, remember to convert to lower case if object properties are compared
         * @param homeAccountId
         * @param environment
         * @param realm
         */
        CacheManager.prototype.getAccountsFilteredByInternal = function (homeAccountId, environment, realm) {
            var _this = this;
            var allCacheKeys = this.getKeys();
            var matchingAccounts = {};
            allCacheKeys.forEach(function (cacheKey) {
                var entity = _this.getAccount(cacheKey);
                if (!entity) {
                    return;
                }
                if (!!homeAccountId && !_this.matchHomeAccountId(entity, homeAccountId)) {
                    return;
                }
                if (!!environment && !_this.matchEnvironment(entity, environment)) {
                    return;
                }
                if (!!realm && !_this.matchRealm(entity, realm)) {
                    return;
                }
                matchingAccounts[cacheKey] = entity;
            });
            return matchingAccounts;
        };
        /**
         * retrieve credentails matching all provided filters; if no filter is set, get all credentials
         * @param homeAccountId
         * @param environment
         * @param credentialType
         * @param clientId
         * @param realm
         * @param target
         */
        CacheManager.prototype.getCredentialsFilteredBy = function (filter) {
            return this.getCredentialsFilteredByInternal(filter.homeAccountId, filter.environment, filter.credentialType, filter.clientId, filter.familyId, filter.realm, filter.target, filter.userAssertionHash, filter.tokenType, filter.keyId, filter.requestedClaimsHash);
        };
        /**
         * Support function to help match credentials
         * @param homeAccountId
         * @param environment
         * @param credentialType
         * @param clientId
         * @param realm
         * @param target
         * @param userAssertionHash
         * @param tokenType
         */
        CacheManager.prototype.getCredentialsFilteredByInternal = function (homeAccountId, environment, credentialType, clientId, familyId, realm, target, userAssertionHash, tokenType, keyId, requestedClaimsHash) {
            var _this = this;
            var allCacheKeys = this.getKeys();
            var matchingCredentials = {
                idTokens: {},
                accessTokens: {},
                refreshTokens: {},
            };
            allCacheKeys.forEach(function (cacheKey) {
                // don't parse any non-credential type cache entities
                var credType = CredentialEntity.getCredentialType(cacheKey);
                if (credType === Constants.NOT_DEFINED) {
                    return;
                }
                // Attempt retrieval
                var entity = _this.getSpecificCredential(cacheKey, credType);
                if (!entity) {
                    return;
                }
                if (!!userAssertionHash && !_this.matchUserAssertionHash(entity, userAssertionHash)) {
                    return;
                }
                if (!!homeAccountId && !_this.matchHomeAccountId(entity, homeAccountId)) {
                    return;
                }
                if (!!environment && !_this.matchEnvironment(entity, environment)) {
                    return;
                }
                if (!!realm && !_this.matchRealm(entity, realm)) {
                    return;
                }
                if (!!credentialType && !_this.matchCredentialType(entity, credentialType)) {
                    return;
                }
                if (!!clientId && !_this.matchClientId(entity, clientId)) {
                    return;
                }
                if (!!familyId && !_this.matchFamilyId(entity, familyId)) {
                    return;
                }
                /*
                 * idTokens do not have "target", target specific refreshTokens do exist for some types of authentication
                 * Resource specific refresh tokens case will be added when the support is deemed necessary
                 */
                if (!!target && !_this.matchTarget(entity, target)) {
                    return;
                }
                // If request OR cached entity has requested Claims Hash, check if they match
                if (requestedClaimsHash || entity.requestedClaimsHash) {
                    // Don't match if either is undefined or they are different
                    if (entity.requestedClaimsHash !== requestedClaimsHash) {
                        return;
                    }
                }
                // Access Token with Auth Scheme specific matching
                if (credentialType === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME) {
                    if (!!tokenType && !_this.matchTokenType(entity, tokenType)) {
                        return;
                    }
                    // KeyId (sshKid) in request must match cached SSH certificate keyId because SSH cert is bound to a specific key
                    if (tokenType === AuthenticationScheme.SSH) {
                        if (keyId && !_this.matchKeyId(entity, keyId)) {
                            return;
                        }
                    }
                }
                // At this point, the entity matches the request, update cache key if key schema has changed
                var updatedCacheKey = _this.updateCredentialCacheKey(cacheKey, entity);
                switch (credType) {
                    case CredentialType.ID_TOKEN:
                        matchingCredentials.idTokens[updatedCacheKey] = entity;
                        break;
                    case CredentialType.ACCESS_TOKEN:
                    case CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME:
                        matchingCredentials.accessTokens[updatedCacheKey] = entity;
                        break;
                    case CredentialType.REFRESH_TOKEN:
                        matchingCredentials.refreshTokens[updatedCacheKey] = entity;
                        break;
                }
            });
            return matchingCredentials;
        };
        /**
         * retrieve appMetadata matching all provided filters; if no filter is set, get all appMetadata
         * @param filter
         */
        CacheManager.prototype.getAppMetadataFilteredBy = function (filter) {
            return this.getAppMetadataFilteredByInternal(filter.environment, filter.clientId);
        };
        /**
         * Support function to help match appMetadata
         * @param environment
         * @param clientId
         */
        CacheManager.prototype.getAppMetadataFilteredByInternal = function (environment, clientId) {
            var _this = this;
            var allCacheKeys = this.getKeys();
            var matchingAppMetadata = {};
            allCacheKeys.forEach(function (cacheKey) {
                // don't parse any non-appMetadata type cache entities
                if (!_this.isAppMetadata(cacheKey)) {
                    return;
                }
                // Attempt retrieval
                var entity = _this.getAppMetadata(cacheKey);
                if (!entity) {
                    return;
                }
                if (!!environment && !_this.matchEnvironment(entity, environment)) {
                    return;
                }
                if (!!clientId && !_this.matchClientId(entity, clientId)) {
                    return;
                }
                matchingAppMetadata[cacheKey] = entity;
            });
            return matchingAppMetadata;
        };
        /**
         * retrieve authorityMetadata that contains a matching alias
         * @param filter
         */
        CacheManager.prototype.getAuthorityMetadataByAlias = function (host) {
            var _this = this;
            var allCacheKeys = this.getAuthorityMetadataKeys();
            var matchedEntity = null;
            allCacheKeys.forEach(function (cacheKey) {
                // don't parse any non-authorityMetadata type cache entities
                if (!_this.isAuthorityMetadata(cacheKey) || cacheKey.indexOf(_this.clientId) === -1) {
                    return;
                }
                // Attempt retrieval
                var entity = _this.getAuthorityMetadata(cacheKey);
                if (!entity) {
                    return;
                }
                if (entity.aliases.indexOf(host) === -1) {
                    return;
                }
                matchedEntity = entity;
            });
            return matchedEntity;
        };
        /**
         * Removes all accounts and related tokens from cache.
         */
        CacheManager.prototype.removeAllAccounts = function () {
            return __awaiter(this, void 0, void 0, function () {
                var allCacheKeys, removedAccounts;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            allCacheKeys = this.getKeys();
                            removedAccounts = [];
                            allCacheKeys.forEach(function (cacheKey) {
                                var entity = _this.getAccount(cacheKey);
                                if (!entity) {
                                    return;
                                }
                                removedAccounts.push(_this.removeAccount(cacheKey));
                            });
                            return [4 /*yield*/, Promise.all(removedAccounts)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                    }
                });
            });
        };
        /**
         * returns a boolean if the given account is removed
         * @param account
         */
        CacheManager.prototype.removeAccount = function (accountKey) {
            return __awaiter(this, void 0, void 0, function () {
                var account;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            account = this.getAccount(accountKey);
                            if (!account) {
                                throw ClientAuthError.createNoAccountFoundError();
                            }
                            return [4 /*yield*/, this.removeAccountContext(account)];
                        case 1: return [2 /*return*/, ((_a.sent()) && this.removeItem(accountKey, CacheSchemaType.ACCOUNT))];
                    }
                });
            });
        };
        /**
         * Removes credentials associated with the provided account
         * @param account
         */
        CacheManager.prototype.removeAccountContext = function (account) {
            return __awaiter(this, void 0, void 0, function () {
                var allCacheKeys, accountId, removedCredentials;
                var _this = this;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            allCacheKeys = this.getKeys();
                            accountId = account.generateAccountId();
                            removedCredentials = [];
                            allCacheKeys.forEach(function (cacheKey) {
                                // don't parse any non-credential type cache entities
                                var credType = CredentialEntity.getCredentialType(cacheKey);
                                if (credType === Constants.NOT_DEFINED) {
                                    return;
                                }
                                var cacheEntity = _this.getSpecificCredential(cacheKey, credType);
                                if (!!cacheEntity && accountId === cacheEntity.generateAccountId()) {
                                    removedCredentials.push(_this.removeCredential(cacheEntity));
                                }
                            });
                            return [4 /*yield*/, Promise.all(removedCredentials)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, true];
                    }
                });
            });
        };
        /**
         * returns a boolean if the given credential is removed
         * @param credential
         */
        CacheManager.prototype.removeCredential = function (credential) {
            return __awaiter(this, void 0, void 0, function () {
                var key, accessTokenWithAuthSchemeEntity, kid;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            key = credential.generateCredentialKey();
                            if (!(credential.credentialType.toLowerCase() === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME.toLowerCase())) return [3 /*break*/, 4];
                            if (!(credential.tokenType === AuthenticationScheme.POP)) return [3 /*break*/, 4];
                            accessTokenWithAuthSchemeEntity = credential;
                            kid = accessTokenWithAuthSchemeEntity.keyId;
                            if (!kid) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.cryptoImpl.removeTokenBindingKey(kid)];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            _a.sent();
                            throw ClientAuthError.createBindingKeyNotRemovedError();
                        case 4: return [2 /*return*/, this.removeItem(key, CacheSchemaType.CREDENTIAL)];
                    }
                });
            });
        };
        /**
         * Removes all app metadata objects from cache.
         */
        CacheManager.prototype.removeAppMetadata = function () {
            var _this = this;
            var allCacheKeys = this.getKeys();
            allCacheKeys.forEach(function (cacheKey) {
                if (_this.isAppMetadata(cacheKey)) {
                    _this.removeItem(cacheKey, CacheSchemaType.APP_METADATA);
                }
            });
            return true;
        };
        /**
         * Retrieve the cached credentials into a cacherecord
         * @param account
         * @param clientId
         * @param scopes
         * @param environment
         * @param authScheme
         */
        CacheManager.prototype.readCacheRecord = function (account, clientId, request, environment) {
            var cachedAccount = this.readAccountFromCache(account);
            var cachedIdToken = this.readIdTokenFromCache(clientId, account);
            var cachedAccessToken = this.readAccessTokenFromCache(clientId, account, request);
            var cachedRefreshToken = this.readRefreshTokenFromCache(clientId, account, false);
            var cachedAppMetadata = this.readAppMetadataFromCache(environment, clientId);
            if (cachedAccount && cachedIdToken) {
                cachedAccount.idTokenClaims = new AuthToken(cachedIdToken.secret, this.cryptoImpl).claims;
            }
            return {
                account: cachedAccount,
                idToken: cachedIdToken,
                accessToken: cachedAccessToken,
                refreshToken: cachedRefreshToken,
                appMetadata: cachedAppMetadata,
            };
        };
        /**
         * Retrieve AccountEntity from cache
         * @param account
         */
        CacheManager.prototype.readAccountFromCache = function (account) {
            var accountKey = AccountEntity.generateAccountCacheKey(account);
            return this.getAccount(accountKey);
        };
        /**
         * Retrieve IdTokenEntity from cache
         * @param clientId
         * @param account
         * @param inputRealm
         */
        CacheManager.prototype.readIdTokenFromCache = function (clientId, account) {
            var idTokenFilter = {
                homeAccountId: account.homeAccountId,
                environment: account.environment,
                credentialType: CredentialType.ID_TOKEN,
                clientId: clientId,
                realm: account.tenantId,
            };
            var credentialCache = this.getCredentialsFilteredBy(idTokenFilter);
            var idTokens = Object.keys(credentialCache.idTokens).map(function (key) { return credentialCache.idTokens[key]; });
            var numIdTokens = idTokens.length;
            if (numIdTokens < 1) {
                return null;
            }
            else if (numIdTokens > 1) {
                throw ClientAuthError.createMultipleMatchingTokensInCacheError();
            }
            return idTokens[0];
        };
        /**
         * Retrieve AccessTokenEntity from cache
         * @param clientId
         * @param account
         * @param scopes
         * @param authScheme
         */
        CacheManager.prototype.readAccessTokenFromCache = function (clientId, account, request) {
            var scopes = new ScopeSet(request.scopes || []);
            var authScheme = request.authenticationScheme || AuthenticationScheme.BEARER;
            /*
             * Distinguish between Bearer and PoP/SSH token cache types
             * Cast to lowercase to handle "bearer" from ADFS
             */
            var credentialType = (authScheme && authScheme.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase()) ? CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME : CredentialType.ACCESS_TOKEN;
            var accessTokenFilter = {
                homeAccountId: account.homeAccountId,
                environment: account.environment,
                credentialType: credentialType,
                clientId: clientId,
                realm: account.tenantId,
                target: scopes.printScopesLowerCase(),
                tokenType: authScheme,
                keyId: request.sshKid,
                requestedClaimsHash: request.requestedClaimsHash,
            };
            var credentialCache = this.getCredentialsFilteredBy(accessTokenFilter);
            var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
            var numAccessTokens = accessTokens.length;
            if (numAccessTokens < 1) {
                return null;
            }
            else if (numAccessTokens > 1) {
                throw ClientAuthError.createMultipleMatchingTokensInCacheError();
            }
            return accessTokens[0];
        };
        /**
         * Helper to retrieve the appropriate refresh token from cache
         * @param clientId
         * @param account
         * @param familyRT
         */
        CacheManager.prototype.readRefreshTokenFromCache = function (clientId, account, familyRT) {
            var id = familyRT ? THE_FAMILY_ID : undefined;
            var refreshTokenFilter = {
                homeAccountId: account.homeAccountId,
                environment: account.environment,
                credentialType: CredentialType.REFRESH_TOKEN,
                clientId: clientId,
                familyId: id,
            };
            var credentialCache = this.getCredentialsFilteredBy(refreshTokenFilter);
            var refreshTokens = Object.keys(credentialCache.refreshTokens).map(function (key) { return credentialCache.refreshTokens[key]; });
            var numRefreshTokens = refreshTokens.length;
            if (numRefreshTokens < 1) {
                return null;
            }
            // address the else case after remove functions address environment aliases
            return refreshTokens[0];
        };
        /**
         * Retrieve AppMetadataEntity from cache
         */
        CacheManager.prototype.readAppMetadataFromCache = function (environment, clientId) {
            var appMetadataFilter = {
                environment: environment,
                clientId: clientId,
            };
            var appMetadata = this.getAppMetadataFilteredBy(appMetadataFilter);
            var appMetadataEntries = Object.keys(appMetadata).map(function (key) { return appMetadata[key]; });
            var numAppMetadata = appMetadataEntries.length;
            if (numAppMetadata < 1) {
                return null;
            }
            else if (numAppMetadata > 1) {
                throw ClientAuthError.createMultipleMatchingAppMetadataInCacheError();
            }
            return appMetadataEntries[0];
        };
        /**
         * Return the family_id value associated  with FOCI
         * @param environment
         * @param clientId
         */
        CacheManager.prototype.isAppMetadataFOCI = function (environment, clientId) {
            var appMetadata = this.readAppMetadataFromCache(environment, clientId);
            return !!(appMetadata && appMetadata.familyId === THE_FAMILY_ID);
        };
        /**
         * helper to match account ids
         * @param value
         * @param homeAccountId
         */
        CacheManager.prototype.matchHomeAccountId = function (entity, homeAccountId) {
            return !!(entity.homeAccountId && homeAccountId === entity.homeAccountId);
        };
        /**
         * helper to match assertion
         * @param value
         * @param oboAssertion
         */
        CacheManager.prototype.matchUserAssertionHash = function (entity, userAssertionHash) {
            return !!(entity.userAssertionHash && userAssertionHash === entity.userAssertionHash);
        };
        /**
         * helper to match environment
         * @param value
         * @param environment
         */
        CacheManager.prototype.matchEnvironment = function (entity, environment) {
            var cloudMetadata = this.getAuthorityMetadataByAlias(environment);
            if (cloudMetadata && cloudMetadata.aliases.indexOf(entity.environment) > -1) {
                return true;
            }
            return false;
        };
        /**
         * helper to match credential type
         * @param entity
         * @param credentialType
         */
        CacheManager.prototype.matchCredentialType = function (entity, credentialType) {
            return (entity.credentialType && credentialType.toLowerCase() === entity.credentialType.toLowerCase());
        };
        /**
         * helper to match client ids
         * @param entity
         * @param clientId
         */
        CacheManager.prototype.matchClientId = function (entity, clientId) {
            return !!(entity.clientId && clientId === entity.clientId);
        };
        /**
         * helper to match family ids
         * @param entity
         * @param familyId
         */
        CacheManager.prototype.matchFamilyId = function (entity, familyId) {
            return !!(entity.familyId && familyId === entity.familyId);
        };
        /**
         * helper to match realm
         * @param entity
         * @param realm
         */
        CacheManager.prototype.matchRealm = function (entity, realm) {
            return !!(entity.realm && realm === entity.realm);
        };
        /**
         * Returns true if the target scopes are a subset of the current entity's scopes, false otherwise.
         * @param entity
         * @param target
         */
        CacheManager.prototype.matchTarget = function (entity, target) {
            var isNotAccessTokenCredential = (entity.credentialType !== CredentialType.ACCESS_TOKEN && entity.credentialType !== CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME);
            if (isNotAccessTokenCredential || !entity.target) {
                return false;
            }
            var entityScopeSet = ScopeSet.fromString(entity.target);
            var requestTargetScopeSet = ScopeSet.fromString(target);
            if (!requestTargetScopeSet.containsOnlyOIDCScopes()) {
                requestTargetScopeSet.removeOIDCScopes(); // ignore OIDC scopes
            }
            else {
                requestTargetScopeSet.removeScope(Constants.OFFLINE_ACCESS_SCOPE);
            }
            return entityScopeSet.containsScopeSet(requestTargetScopeSet);
        };
        /**
         * Returns true if the credential's tokenType or Authentication Scheme matches the one in the request, false otherwise
         * @param entity
         * @param tokenType
         */
        CacheManager.prototype.matchTokenType = function (entity, tokenType) {
            return !!(entity.tokenType && entity.tokenType === tokenType);
        };
        /**
         * Returns true if the credential's keyId matches the one in the request, false otherwise
         * @param entity
         * @param tokenType
         */
        CacheManager.prototype.matchKeyId = function (entity, keyId) {
            return !!(entity.keyId && entity.keyId === keyId);
        };
        /**
         * returns if a given cache entity is of the type appmetadata
         * @param key
         */
        CacheManager.prototype.isAppMetadata = function (key) {
            return key.indexOf(APP_METADATA) !== -1;
        };
        /**
         * returns if a given cache entity is of the type authoritymetadata
         * @param key
         */
        CacheManager.prototype.isAuthorityMetadata = function (key) {
            return key.indexOf(AUTHORITY_METADATA_CONSTANTS.CACHE_KEY) !== -1;
        };
        /**
         * returns cache key used for cloud instance metadata
         */
        CacheManager.prototype.generateAuthorityMetadataCacheKey = function (authority) {
            return AUTHORITY_METADATA_CONSTANTS.CACHE_KEY + "-" + this.clientId + "-" + authority;
        };
        /**
         * Returns the specific credential (IdToken/AccessToken/RefreshToken) from the cache
         * @param key
         * @param credType
         */
        CacheManager.prototype.getSpecificCredential = function (key, credType) {
            switch (credType) {
                case CredentialType.ID_TOKEN: {
                    return this.getIdTokenCredential(key);
                }
                case CredentialType.ACCESS_TOKEN:
                case CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME: {
                    return this.getAccessTokenCredential(key);
                }
                case CredentialType.REFRESH_TOKEN: {
                    return this.getRefreshTokenCredential(key);
                }
                default:
                    return null;
            }
        };
        /**
         * Helper to convert serialized data to object
         * @param obj
         * @param json
         */
        CacheManager.toObject = function (obj, json) {
            for (var propertyName in json) {
                obj[propertyName] = json[propertyName];
            }
            return obj;
        };
        return CacheManager;
    }());
    var DefaultStorageClass = /** @class */ (function (_super) {
        __extends(DefaultStorageClass, _super);
        function DefaultStorageClass() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        DefaultStorageClass.prototype.setAccount = function () {
            var notImplErr = "Storage interface - setAccount() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getAccount = function () {
            var notImplErr = "Storage interface - getAccount() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.setIdTokenCredential = function () {
            var notImplErr = "Storage interface - setIdTokenCredential() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getIdTokenCredential = function () {
            var notImplErr = "Storage interface - getIdTokenCredential() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.setAccessTokenCredential = function () {
            var notImplErr = "Storage interface - setAccessTokenCredential() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getAccessTokenCredential = function () {
            var notImplErr = "Storage interface - getAccessTokenCredential() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.setRefreshTokenCredential = function () {
            var notImplErr = "Storage interface - setRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getRefreshTokenCredential = function () {
            var notImplErr = "Storage interface - getRefreshTokenCredential() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.setAppMetadata = function () {
            var notImplErr = "Storage interface - setAppMetadata() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getAppMetadata = function () {
            var notImplErr = "Storage interface - getAppMetadata() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.setServerTelemetry = function () {
            var notImplErr = "Storage interface - setServerTelemetry() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getServerTelemetry = function () {
            var notImplErr = "Storage interface - getServerTelemetry() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.setAuthorityMetadata = function () {
            var notImplErr = "Storage interface - setAuthorityMetadata() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getAuthorityMetadata = function () {
            var notImplErr = "Storage interface - getAuthorityMetadata() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getAuthorityMetadataKeys = function () {
            var notImplErr = "Storage interface - getAuthorityMetadataKeys() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.setThrottlingCache = function () {
            var notImplErr = "Storage interface - setThrottlingCache() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getThrottlingCache = function () {
            var notImplErr = "Storage interface - getThrottlingCache() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.removeItem = function () {
            var notImplErr = "Storage interface - removeItem() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.containsKey = function () {
            var notImplErr = "Storage interface - containsKey() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.getKeys = function () {
            var notImplErr = "Storage interface - getKeys() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        DefaultStorageClass.prototype.clear = function () {
            return __awaiter(this, void 0, void 0, function () {
                var notImplErr;
                return __generator(this, function (_a) {
                    notImplErr = "Storage interface - clear() has not been implemented for the cacheStorage interface.";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        };
        DefaultStorageClass.prototype.updateCredentialCacheKey = function () {
            var notImplErr = "Storage interface - updateCredentialCacheKey() has not been implemented for the cacheStorage interface.";
            throw AuthError.createUnexpectedError(notImplErr);
        };
        return DefaultStorageClass;
    }(CacheManager));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    // Token renewal offset default in seconds
    var DEFAULT_TOKEN_RENEWAL_OFFSET_SEC = 300;
    var DEFAULT_SYSTEM_OPTIONS = {
        tokenRenewalOffsetSeconds: DEFAULT_TOKEN_RENEWAL_OFFSET_SEC,
        preventCorsPreflight: false,
        proxyUrl: Constants.EMPTY_STRING
    };
    var DEFAULT_LOGGER_IMPLEMENTATION = {
        loggerCallback: function () {
            // allow users to not set loggerCallback
        },
        piiLoggingEnabled: false,
        logLevel: LogLevel.Info,
        correlationId: Constants.EMPTY_STRING
    };
    var DEFAULT_NETWORK_IMPLEMENTATION = {
        sendGetRequestAsync: function () {
            return __awaiter(this, void 0, void 0, function () {
                var notImplErr;
                return __generator(this, function (_a) {
                    notImplErr = "Network interface - sendGetRequestAsync() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        },
        sendPostRequestAsync: function () {
            return __awaiter(this, void 0, void 0, function () {
                var notImplErr;
                return __generator(this, function (_a) {
                    notImplErr = "Network interface - sendPostRequestAsync() has not been implemented";
                    throw AuthError.createUnexpectedError(notImplErr);
                });
            });
        }
    };
    var DEFAULT_LIBRARY_INFO = {
        sku: Constants.SKU,
        version: version$1,
        cpu: Constants.EMPTY_STRING,
        os: Constants.EMPTY_STRING
    };
    var DEFAULT_CLIENT_CREDENTIALS = {
        clientSecret: Constants.EMPTY_STRING,
        clientAssertion: undefined
    };
    var DEFAULT_AZURE_CLOUD_OPTIONS = {
        azureCloudInstance: AzureCloudInstance.None,
        tenant: "" + Constants.DEFAULT_COMMON_TENANT
    };
    var DEFAULT_TELEMETRY_OPTIONS = {
        application: {
            appName: "",
            appVersion: ""
        }
    };
    /**
     * Function that sets the default options when not explicitly configured from app developer
     *
     * @param Configuration
     *
     * @returns Configuration
     */
    function buildClientConfiguration(_a) {
        var userAuthOptions = _a.authOptions, userSystemOptions = _a.systemOptions, userLoggerOption = _a.loggerOptions, storageImplementation = _a.storageInterface, networkImplementation = _a.networkInterface, cryptoImplementation = _a.cryptoInterface, clientCredentials = _a.clientCredentials, libraryInfo = _a.libraryInfo, telemetry = _a.telemetry, serverTelemetryManager = _a.serverTelemetryManager, persistencePlugin = _a.persistencePlugin, serializableCache = _a.serializableCache;
        var loggerOptions = __assign(__assign({}, DEFAULT_LOGGER_IMPLEMENTATION), userLoggerOption);
        return {
            authOptions: buildAuthOptions(userAuthOptions),
            systemOptions: __assign(__assign({}, DEFAULT_SYSTEM_OPTIONS), userSystemOptions),
            loggerOptions: loggerOptions,
            storageInterface: storageImplementation || new DefaultStorageClass(userAuthOptions.clientId, DEFAULT_CRYPTO_IMPLEMENTATION),
            networkInterface: networkImplementation || DEFAULT_NETWORK_IMPLEMENTATION,
            cryptoInterface: cryptoImplementation || DEFAULT_CRYPTO_IMPLEMENTATION,
            clientCredentials: clientCredentials || DEFAULT_CLIENT_CREDENTIALS,
            libraryInfo: __assign(__assign({}, DEFAULT_LIBRARY_INFO), libraryInfo),
            telemetry: __assign(__assign({}, DEFAULT_TELEMETRY_OPTIONS), telemetry),
            serverTelemetryManager: serverTelemetryManager || null,
            persistencePlugin: persistencePlugin || null,
            serializableCache: serializableCache || null
        };
    }
    /**
     * Construct authoptions from the client and platform passed values
     * @param authOptions
     */
    function buildAuthOptions(authOptions) {
        return __assign({ clientCapabilities: [], azureCloudOptions: DEFAULT_AZURE_CLOUD_OPTIONS }, authOptions);
    }

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Error thrown when there is an error with the server code, for example, unavailability.
     */
    var ServerError = /** @class */ (function (_super) {
        __extends(ServerError, _super);
        function ServerError(errorCode, errorMessage, subError) {
            var _this = _super.call(this, errorCode, errorMessage, subError) || this;
            _this.name = "ServerError";
            Object.setPrototypeOf(_this, ServerError.prototype);
            return _this;
        }
        return ServerError;
    }(AuthError));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var ThrottlingUtils = /** @class */ (function () {
        function ThrottlingUtils() {
        }
        /**
         * Prepares a RequestThumbprint to be stored as a key.
         * @param thumbprint
         */
        ThrottlingUtils.generateThrottlingStorageKey = function (thumbprint) {
            return ThrottlingConstants.THROTTLING_PREFIX + "." + JSON.stringify(thumbprint);
        };
        /**
         * Performs necessary throttling checks before a network request.
         * @param cacheManager
         * @param thumbprint
         */
        ThrottlingUtils.preProcess = function (cacheManager, thumbprint) {
            var _a;
            var key = ThrottlingUtils.generateThrottlingStorageKey(thumbprint);
            var value = cacheManager.getThrottlingCache(key);
            if (value) {
                if (value.throttleTime < Date.now()) {
                    cacheManager.removeItem(key, CacheSchemaType.THROTTLING);
                    return;
                }
                throw new ServerError(((_a = value.errorCodes) === null || _a === void 0 ? void 0 : _a.join(" ")) || Constants.EMPTY_STRING, value.errorMessage, value.subError);
            }
        };
        /**
         * Performs necessary throttling checks after a network request.
         * @param cacheManager
         * @param thumbprint
         * @param response
         */
        ThrottlingUtils.postProcess = function (cacheManager, thumbprint, response) {
            if (ThrottlingUtils.checkResponseStatus(response) || ThrottlingUtils.checkResponseForRetryAfter(response)) {
                var thumbprintValue = {
                    throttleTime: ThrottlingUtils.calculateThrottleTime(parseInt(response.headers[HeaderNames.RETRY_AFTER])),
                    error: response.body.error,
                    errorCodes: response.body.error_codes,
                    errorMessage: response.body.error_description,
                    subError: response.body.suberror
                };
                cacheManager.setThrottlingCache(ThrottlingUtils.generateThrottlingStorageKey(thumbprint), thumbprintValue);
            }
        };
        /**
         * Checks a NetworkResponse object's status codes against 429 or 5xx
         * @param response
         */
        ThrottlingUtils.checkResponseStatus = function (response) {
            return response.status === 429 || response.status >= 500 && response.status < 600;
        };
        /**
         * Checks a NetworkResponse object's RetryAfter header
         * @param response
         */
        ThrottlingUtils.checkResponseForRetryAfter = function (response) {
            if (response.headers) {
                return response.headers.hasOwnProperty(HeaderNames.RETRY_AFTER) && (response.status < 200 || response.status >= 300);
            }
            return false;
        };
        /**
         * Calculates the Unix-time value for a throttle to expire given throttleTime in seconds.
         * @param throttleTime
         */
        ThrottlingUtils.calculateThrottleTime = function (throttleTime) {
            var time = throttleTime <= 0 ? 0 : throttleTime;
            var currentSeconds = Date.now() / 1000;
            return Math.floor(Math.min(currentSeconds + (time || ThrottlingConstants.DEFAULT_THROTTLE_TIME_SECONDS), currentSeconds + ThrottlingConstants.DEFAULT_MAX_THROTTLE_TIME_SECONDS) * 1000);
        };
        ThrottlingUtils.removeThrottle = function (cacheManager, clientId, request, homeAccountIdentifier) {
            var thumbprint = {
                clientId: clientId,
                authority: request.authority,
                scopes: request.scopes,
                homeAccountIdentifier: homeAccountIdentifier,
                claims: request.claims,
                authenticationScheme: request.authenticationScheme,
                resourceRequestMethod: request.resourceRequestMethod,
                resourceRequestUri: request.resourceRequestUri,
                shrClaims: request.shrClaims,
                sshKid: request.sshKid
            };
            var key = this.generateThrottlingStorageKey(thumbprint);
            return cacheManager.removeItem(key, CacheSchemaType.THROTTLING);
        };
        return ThrottlingUtils;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var NetworkManager = /** @class */ (function () {
        function NetworkManager(networkClient, cacheManager) {
            this.networkClient = networkClient;
            this.cacheManager = cacheManager;
        }
        /**
         * Wraps sendPostRequestAsync with necessary preflight and postflight logic
         * @param thumbprint
         * @param tokenEndpoint
         * @param options
         */
        NetworkManager.prototype.sendPostRequest = function (thumbprint, tokenEndpoint, options) {
            return __awaiter(this, void 0, void 0, function () {
                var response, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            ThrottlingUtils.preProcess(this.cacheManager, thumbprint);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.networkClient.sendPostRequestAsync(tokenEndpoint, options)];
                        case 2:
                            response = _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _a.sent();
                            if (e_1 instanceof AuthError) {
                                throw e_1;
                            }
                            else {
                                throw ClientAuthError.createNetworkError(tokenEndpoint, e_1);
                            }
                        case 4:
                            ThrottlingUtils.postProcess(this.cacheManager, thumbprint, response);
                            return [2 /*return*/, response];
                    }
                });
            });
        };
        return NetworkManager;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var CcsCredentialType;
    (function (CcsCredentialType) {
        CcsCredentialType["HOME_ACCOUNT_ID"] = "home_account_id";
        CcsCredentialType["UPN"] = "UPN";
    })(CcsCredentialType || (CcsCredentialType = {}));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Base application class which will construct requests to send to and handle responses from the Microsoft STS using the authorization code flow.
     */
    var BaseClient = /** @class */ (function () {
        function BaseClient(configuration) {
            // Set the configuration
            this.config = buildClientConfiguration(configuration);
            // Initialize the logger
            this.logger = new Logger(this.config.loggerOptions, name$1, version$1);
            // Initialize crypto
            this.cryptoUtils = this.config.cryptoInterface;
            // Initialize storage interface
            this.cacheManager = this.config.storageInterface;
            // Set the network interface
            this.networkClient = this.config.networkInterface;
            // Set the NetworkManager
            this.networkManager = new NetworkManager(this.networkClient, this.cacheManager);
            // Set TelemetryManager
            this.serverTelemetryManager = this.config.serverTelemetryManager;
            // set Authority
            this.authority = this.config.authOptions.authority;
        }
        /**
         * Creates default headers for requests to token endpoint
         */
        BaseClient.prototype.createTokenRequestHeaders = function (ccsCred) {
            var headers = {};
            headers[HeaderNames.CONTENT_TYPE] = Constants.URL_FORM_CONTENT_TYPE;
            if (!this.config.systemOptions.preventCorsPreflight && ccsCred) {
                switch (ccsCred.type) {
                    case CcsCredentialType.HOME_ACCOUNT_ID:
                        try {
                            var clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
                            headers[HeaderNames.CCS_HEADER] = "Oid:" + clientInfo.uid + "@" + clientInfo.utid;
                        }
                        catch (e) {
                            this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                        }
                        break;
                    case CcsCredentialType.UPN:
                        headers[HeaderNames.CCS_HEADER] = "UPN: " + ccsCred.credential;
                        break;
                }
            }
            return headers;
        };
        /**
         * Http post to token endpoint
         * @param tokenEndpoint
         * @param queryString
         * @param headers
         * @param thumbprint
         */
        BaseClient.prototype.executePostToTokenEndpoint = function (tokenEndpoint, queryString, headers, thumbprint) {
            return __awaiter(this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.networkManager.sendPostRequest(thumbprint, tokenEndpoint, { body: queryString, headers: headers, proxyUrl: this.config.systemOptions.proxyUrl })];
                        case 1:
                            response = _a.sent();
                            if (this.config.serverTelemetryManager && response.status < 500 && response.status !== 429) {
                                // Telemetry data successfully logged by server, clear Telemetry cache
                                this.config.serverTelemetryManager.clearTelemetryCache();
                            }
                            return [2 /*return*/, response];
                    }
                });
            });
        };
        /**
         * Updates the authority object of the client. Endpoint discovery must be completed.
         * @param updatedAuthority
         */
        BaseClient.prototype.updateAuthority = function (updatedAuthority) {
            if (!updatedAuthority.discoveryComplete()) {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Updated authority has not completed endpoint discovery.");
            }
            this.authority = updatedAuthority;
        };
        return BaseClient;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Validates server consumable params from the "request" objects
     */
    var RequestValidator = /** @class */ (function () {
        function RequestValidator() {
        }
        /**
         * Utility to check if the `redirectUri` in the request is a non-null value
         * @param redirectUri
         */
        RequestValidator.validateRedirectUri = function (redirectUri) {
            if (StringUtils.isEmpty(redirectUri)) {
                throw ClientConfigurationError.createRedirectUriEmptyError();
            }
        };
        /**
         * Utility to validate prompt sent by the user in the request
         * @param prompt
         */
        RequestValidator.validatePrompt = function (prompt) {
            var promptValues = [];
            for (var value in PromptValue) {
                promptValues.push(PromptValue[value]);
            }
            if (promptValues.indexOf(prompt) < 0) {
                throw ClientConfigurationError.createInvalidPromptError(prompt);
            }
        };
        RequestValidator.validateClaims = function (claims) {
            try {
                JSON.parse(claims);
            }
            catch (e) {
                throw ClientConfigurationError.createInvalidClaimsRequestError();
            }
        };
        /**
         * Utility to validate code_challenge and code_challenge_method
         * @param codeChallenge
         * @param codeChallengeMethod
         */
        RequestValidator.validateCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
            if (StringUtils.isEmpty(codeChallenge) || StringUtils.isEmpty(codeChallengeMethod)) {
                throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
            }
            else {
                this.validateCodeChallengeMethod(codeChallengeMethod);
            }
        };
        /**
         * Utility to validate code_challenge_method
         * @param codeChallengeMethod
         */
        RequestValidator.validateCodeChallengeMethod = function (codeChallengeMethod) {
            if ([
                CodeChallengeMethodValues.PLAIN,
                CodeChallengeMethodValues.S256
            ].indexOf(codeChallengeMethod) < 0) {
                throw ClientConfigurationError.createInvalidCodeChallengeMethodError();
            }
        };
        /**
         * Removes unnecessary or duplicate query parameters from extraQueryParameters
         * @param request
         */
        RequestValidator.sanitizeEQParams = function (eQParams, queryParams) {
            if (!eQParams) {
                return {};
            }
            // Remove any query parameters already included in SSO params
            queryParams.forEach(function (value, key) {
                if (eQParams[key]) {
                    delete eQParams[key];
                }
            });
            return eQParams;
        };
        return RequestValidator;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var RequestParameterBuilder = /** @class */ (function () {
        function RequestParameterBuilder() {
            this.parameters = new Map();
        }
        /**
         * add response_type = code
         */
        RequestParameterBuilder.prototype.addResponseTypeCode = function () {
            this.parameters.set(AADServerParamKeys.RESPONSE_TYPE, encodeURIComponent(Constants.CODE_RESPONSE_TYPE));
        };
        /**
         * add response_type = token id_token
         */
        RequestParameterBuilder.prototype.addResponseTypeForTokenAndIdToken = function () {
            this.parameters.set(AADServerParamKeys.RESPONSE_TYPE, encodeURIComponent(Constants.TOKEN_RESPONSE_TYPE + " " + Constants.ID_TOKEN_RESPONSE_TYPE));
        };
        /**
         * add response_mode. defaults to query.
         * @param responseMode
         */
        RequestParameterBuilder.prototype.addResponseMode = function (responseMode) {
            this.parameters.set(AADServerParamKeys.RESPONSE_MODE, encodeURIComponent((responseMode) ? responseMode : ResponseMode.QUERY));
        };
        /**
         * Add flag to indicate STS should attempt to use WAM if available
         */
        RequestParameterBuilder.prototype.addNativeBroker = function () {
            this.parameters.set(AADServerParamKeys.NATIVE_BROKER, encodeURIComponent("1"));
        };
        /**
         * add scopes. set addOidcScopes to false to prevent default scopes in non-user scenarios
         * @param scopeSet
         * @param addOidcScopes
         */
        RequestParameterBuilder.prototype.addScopes = function (scopes, addOidcScopes) {
            if (addOidcScopes === void 0) { addOidcScopes = true; }
            var requestScopes = addOidcScopes ? __spreadArrays(scopes || [], OIDC_DEFAULT_SCOPES) : scopes || [];
            var scopeSet = new ScopeSet(requestScopes);
            this.parameters.set(AADServerParamKeys.SCOPE, encodeURIComponent(scopeSet.printScopes()));
        };
        /**
         * add clientId
         * @param clientId
         */
        RequestParameterBuilder.prototype.addClientId = function (clientId) {
            this.parameters.set(AADServerParamKeys.CLIENT_ID, encodeURIComponent(clientId));
        };
        /**
         * add redirect_uri
         * @param redirectUri
         */
        RequestParameterBuilder.prototype.addRedirectUri = function (redirectUri) {
            RequestValidator.validateRedirectUri(redirectUri);
            this.parameters.set(AADServerParamKeys.REDIRECT_URI, encodeURIComponent(redirectUri));
        };
        /**
         * add post logout redirectUri
         * @param redirectUri
         */
        RequestParameterBuilder.prototype.addPostLogoutRedirectUri = function (redirectUri) {
            RequestValidator.validateRedirectUri(redirectUri);
            this.parameters.set(AADServerParamKeys.POST_LOGOUT_URI, encodeURIComponent(redirectUri));
        };
        /**
         * add id_token_hint to logout request
         * @param idTokenHint
         */
        RequestParameterBuilder.prototype.addIdTokenHint = function (idTokenHint) {
            this.parameters.set(AADServerParamKeys.ID_TOKEN_HINT, encodeURIComponent(idTokenHint));
        };
        /**
         * add domain_hint
         * @param domainHint
         */
        RequestParameterBuilder.prototype.addDomainHint = function (domainHint) {
            this.parameters.set(SSOTypes.DOMAIN_HINT, encodeURIComponent(domainHint));
        };
        /**
         * add login_hint
         * @param loginHint
         */
        RequestParameterBuilder.prototype.addLoginHint = function (loginHint) {
            this.parameters.set(SSOTypes.LOGIN_HINT, encodeURIComponent(loginHint));
        };
        /**
         * Adds the CCS (Cache Credential Service) query parameter for login_hint
         * @param loginHint
         */
        RequestParameterBuilder.prototype.addCcsUpn = function (loginHint) {
            this.parameters.set(HeaderNames.CCS_HEADER, encodeURIComponent("UPN:" + loginHint));
        };
        /**
         * Adds the CCS (Cache Credential Service) query parameter for account object
         * @param loginHint
         */
        RequestParameterBuilder.prototype.addCcsOid = function (clientInfo) {
            this.parameters.set(HeaderNames.CCS_HEADER, encodeURIComponent("Oid:" + clientInfo.uid + "@" + clientInfo.utid));
        };
        /**
         * add sid
         * @param sid
         */
        RequestParameterBuilder.prototype.addSid = function (sid) {
            this.parameters.set(SSOTypes.SID, encodeURIComponent(sid));
        };
        /**
         * add claims
         * @param claims
         */
        RequestParameterBuilder.prototype.addClaims = function (claims, clientCapabilities) {
            var mergedClaims = this.addClientCapabilitiesToClaims(claims, clientCapabilities);
            RequestValidator.validateClaims(mergedClaims);
            this.parameters.set(AADServerParamKeys.CLAIMS, encodeURIComponent(mergedClaims));
        };
        /**
         * add correlationId
         * @param correlationId
         */
        RequestParameterBuilder.prototype.addCorrelationId = function (correlationId) {
            this.parameters.set(AADServerParamKeys.CLIENT_REQUEST_ID, encodeURIComponent(correlationId));
        };
        /**
         * add library info query params
         * @param libraryInfo
         */
        RequestParameterBuilder.prototype.addLibraryInfo = function (libraryInfo) {
            // Telemetry Info
            this.parameters.set(AADServerParamKeys.X_CLIENT_SKU, libraryInfo.sku);
            this.parameters.set(AADServerParamKeys.X_CLIENT_VER, libraryInfo.version);
            if (libraryInfo.os) {
                this.parameters.set(AADServerParamKeys.X_CLIENT_OS, libraryInfo.os);
            }
            if (libraryInfo.cpu) {
                this.parameters.set(AADServerParamKeys.X_CLIENT_CPU, libraryInfo.cpu);
            }
        };
        /**
         * Add client telemetry parameters
         * @param appTelemetry
         */
        RequestParameterBuilder.prototype.addApplicationTelemetry = function (appTelemetry) {
            if (appTelemetry === null || appTelemetry === void 0 ? void 0 : appTelemetry.appName) {
                this.parameters.set(AADServerParamKeys.X_APP_NAME, appTelemetry.appName);
            }
            if (appTelemetry === null || appTelemetry === void 0 ? void 0 : appTelemetry.appVersion) {
                this.parameters.set(AADServerParamKeys.X_APP_VER, appTelemetry.appVersion);
            }
        };
        /**
         * add prompt
         * @param prompt
         */
        RequestParameterBuilder.prototype.addPrompt = function (prompt) {
            RequestValidator.validatePrompt(prompt);
            this.parameters.set("" + AADServerParamKeys.PROMPT, encodeURIComponent(prompt));
        };
        /**
         * add state
         * @param state
         */
        RequestParameterBuilder.prototype.addState = function (state) {
            if (!StringUtils.isEmpty(state)) {
                this.parameters.set(AADServerParamKeys.STATE, encodeURIComponent(state));
            }
        };
        /**
         * add nonce
         * @param nonce
         */
        RequestParameterBuilder.prototype.addNonce = function (nonce) {
            this.parameters.set(AADServerParamKeys.NONCE, encodeURIComponent(nonce));
        };
        /**
         * add code_challenge and code_challenge_method
         * - throw if either of them are not passed
         * @param codeChallenge
         * @param codeChallengeMethod
         */
        RequestParameterBuilder.prototype.addCodeChallengeParams = function (codeChallenge, codeChallengeMethod) {
            RequestValidator.validateCodeChallengeParams(codeChallenge, codeChallengeMethod);
            if (codeChallenge && codeChallengeMethod) {
                this.parameters.set(AADServerParamKeys.CODE_CHALLENGE, encodeURIComponent(codeChallenge));
                this.parameters.set(AADServerParamKeys.CODE_CHALLENGE_METHOD, encodeURIComponent(codeChallengeMethod));
            }
            else {
                throw ClientConfigurationError.createInvalidCodeChallengeParamsError();
            }
        };
        /**
         * add the `authorization_code` passed by the user to exchange for a token
         * @param code
         */
        RequestParameterBuilder.prototype.addAuthorizationCode = function (code) {
            this.parameters.set(AADServerParamKeys.CODE, encodeURIComponent(code));
        };
        /**
         * add the `authorization_code` passed by the user to exchange for a token
         * @param code
         */
        RequestParameterBuilder.prototype.addDeviceCode = function (code) {
            this.parameters.set(AADServerParamKeys.DEVICE_CODE, encodeURIComponent(code));
        };
        /**
         * add the `refreshToken` passed by the user
         * @param refreshToken
         */
        RequestParameterBuilder.prototype.addRefreshToken = function (refreshToken) {
            this.parameters.set(AADServerParamKeys.REFRESH_TOKEN, encodeURIComponent(refreshToken));
        };
        /**
         * add the `code_verifier` passed by the user to exchange for a token
         * @param codeVerifier
         */
        RequestParameterBuilder.prototype.addCodeVerifier = function (codeVerifier) {
            this.parameters.set(AADServerParamKeys.CODE_VERIFIER, encodeURIComponent(codeVerifier));
        };
        /**
         * add client_secret
         * @param clientSecret
         */
        RequestParameterBuilder.prototype.addClientSecret = function (clientSecret) {
            this.parameters.set(AADServerParamKeys.CLIENT_SECRET, encodeURIComponent(clientSecret));
        };
        /**
         * add clientAssertion for confidential client flows
         * @param clientAssertion
         */
        RequestParameterBuilder.prototype.addClientAssertion = function (clientAssertion) {
            if (!StringUtils.isEmpty(clientAssertion)) {
                this.parameters.set(AADServerParamKeys.CLIENT_ASSERTION, encodeURIComponent(clientAssertion));
            }
        };
        /**
         * add clientAssertionType for confidential client flows
         * @param clientAssertionType
         */
        RequestParameterBuilder.prototype.addClientAssertionType = function (clientAssertionType) {
            if (!StringUtils.isEmpty(clientAssertionType)) {
                this.parameters.set(AADServerParamKeys.CLIENT_ASSERTION_TYPE, encodeURIComponent(clientAssertionType));
            }
        };
        /**
         * add OBO assertion for confidential client flows
         * @param clientAssertion
         */
        RequestParameterBuilder.prototype.addOboAssertion = function (oboAssertion) {
            this.parameters.set(AADServerParamKeys.OBO_ASSERTION, encodeURIComponent(oboAssertion));
        };
        /**
         * add grant type
         * @param grantType
         */
        RequestParameterBuilder.prototype.addRequestTokenUse = function (tokenUse) {
            this.parameters.set(AADServerParamKeys.REQUESTED_TOKEN_USE, encodeURIComponent(tokenUse));
        };
        /**
         * add grant type
         * @param grantType
         */
        RequestParameterBuilder.prototype.addGrantType = function (grantType) {
            this.parameters.set(AADServerParamKeys.GRANT_TYPE, encodeURIComponent(grantType));
        };
        /**
         * add client info
         *
         */
        RequestParameterBuilder.prototype.addClientInfo = function () {
            this.parameters.set(CLIENT_INFO, "1");
        };
        /**
         * add extraQueryParams
         * @param eQparams
         */
        RequestParameterBuilder.prototype.addExtraQueryParameters = function (eQparams) {
            var _this = this;
            RequestValidator.sanitizeEQParams(eQparams, this.parameters);
            Object.keys(eQparams).forEach(function (key) {
                _this.parameters.set(key, eQparams[key]);
            });
        };
        RequestParameterBuilder.prototype.addClientCapabilitiesToClaims = function (claims, clientCapabilities) {
            var mergedClaims;
            // Parse provided claims into JSON object or initialize empty object
            if (!claims) {
                mergedClaims = {};
            }
            else {
                try {
                    mergedClaims = JSON.parse(claims);
                }
                catch (e) {
                    throw ClientConfigurationError.createInvalidClaimsRequestError();
                }
            }
            if (clientCapabilities && clientCapabilities.length > 0) {
                if (!mergedClaims.hasOwnProperty(ClaimsRequestKeys.ACCESS_TOKEN)) {
                    // Add access_token key to claims object
                    mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN] = {};
                }
                // Add xms_cc claim with provided clientCapabilities to access_token key
                mergedClaims[ClaimsRequestKeys.ACCESS_TOKEN][ClaimsRequestKeys.XMS_CC] = {
                    values: clientCapabilities
                };
            }
            return JSON.stringify(mergedClaims);
        };
        /**
         * adds `username` for Password Grant flow
         * @param username
         */
        RequestParameterBuilder.prototype.addUsername = function (username) {
            this.parameters.set(PasswordGrantConstants.username, encodeURIComponent(username));
        };
        /**
         * adds `password` for Password Grant flow
         * @param password
         */
        RequestParameterBuilder.prototype.addPassword = function (password) {
            this.parameters.set(PasswordGrantConstants.password, encodeURIComponent(password));
        };
        /**
         * add pop_jwk to query params
         * @param cnfString
         */
        RequestParameterBuilder.prototype.addPopToken = function (cnfString) {
            if (!StringUtils.isEmpty(cnfString)) {
                this.parameters.set(AADServerParamKeys.TOKEN_TYPE, AuthenticationScheme.POP);
                this.parameters.set(AADServerParamKeys.REQ_CNF, encodeURIComponent(cnfString));
            }
        };
        /**
         * add SSH JWK and key ID to query params
         */
        RequestParameterBuilder.prototype.addSshJwk = function (sshJwkString) {
            if (!StringUtils.isEmpty(sshJwkString)) {
                this.parameters.set(AADServerParamKeys.TOKEN_TYPE, AuthenticationScheme.SSH);
                this.parameters.set(AADServerParamKeys.REQ_CNF, encodeURIComponent(sshJwkString));
            }
        };
        /**
         * add server telemetry fields
         * @param serverTelemetryManager
         */
        RequestParameterBuilder.prototype.addServerTelemetry = function (serverTelemetryManager) {
            this.parameters.set(AADServerParamKeys.X_CLIENT_CURR_TELEM, serverTelemetryManager.generateCurrentRequestHeaderValue());
            this.parameters.set(AADServerParamKeys.X_CLIENT_LAST_TELEM, serverTelemetryManager.generateLastRequestHeaderValue());
        };
        /**
         * Adds parameter that indicates to the server that throttling is supported
         */
        RequestParameterBuilder.prototype.addThrottling = function () {
            this.parameters.set(AADServerParamKeys.X_MS_LIB_CAPABILITY, ThrottlingConstants.X_MS_LIB_CAPABILITY_VALUE);
        };
        /**
         * Adds logout_hint parameter for "silent" logout which prevent server account picker
         */
        RequestParameterBuilder.prototype.addLogoutHint = function (logoutHint) {
            this.parameters.set(AADServerParamKeys.LOGOUT_HINT, encodeURIComponent(logoutHint));
        };
        /**
         * Utility to create a URL from the params map
         */
        RequestParameterBuilder.prototype.createQueryString = function () {
            var queryParameterArray = new Array();
            this.parameters.forEach(function (value, key) {
                queryParameterArray.push(key + "=" + value);
            });
            return queryParameterArray.join("&");
        };
        return RequestParameterBuilder;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * ID_TOKEN Cache
     *
     * Key:Value Schema:
     *
     * Key Example: uid.utid-login.microsoftonline.com-idtoken-clientId-contoso.com-
     *
     * Value Schema:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
     *      clientId: client ID of the application
     *      secret: Actual credential as a string
     *      realm: Full tenant or organizational identifier that the account belongs to
     * }
     */
    var IdTokenEntity = /** @class */ (function (_super) {
        __extends(IdTokenEntity, _super);
        function IdTokenEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Create IdTokenEntity
         * @param homeAccountId
         * @param authenticationResult
         * @param clientId
         * @param authority
         */
        IdTokenEntity.createIdTokenEntity = function (homeAccountId, environment, idToken, clientId, tenantId) {
            var idTokenEntity = new IdTokenEntity();
            idTokenEntity.credentialType = CredentialType.ID_TOKEN;
            idTokenEntity.homeAccountId = homeAccountId;
            idTokenEntity.environment = environment;
            idTokenEntity.clientId = clientId;
            idTokenEntity.secret = idToken;
            idTokenEntity.realm = tenantId;
            return idTokenEntity;
        };
        /**
         * Validates an entity: checks for all expected params
         * @param entity
         */
        IdTokenEntity.isIdTokenEntity = function (entity) {
            if (!entity) {
                return false;
            }
            return (entity.hasOwnProperty("homeAccountId") &&
                entity.hasOwnProperty("environment") &&
                entity.hasOwnProperty("credentialType") &&
                entity.hasOwnProperty("realm") &&
                entity.hasOwnProperty("clientId") &&
                entity.hasOwnProperty("secret") &&
                entity["credentialType"] === CredentialType.ID_TOKEN);
        };
        return IdTokenEntity;
    }(CredentialEntity));

    /*! @azure/msal-common v7.0.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility class which exposes functions for managing date and time operations.
     */
    var TimeUtils = /** @class */ (function () {
        function TimeUtils() {
        }
        /**
         * return the current time in Unix time (seconds).
         */
        TimeUtils.nowSeconds = function () {
            // Date.getTime() returns in milliseconds.
            return Math.round(new Date().getTime() / 1000.0);
        };
        /**
         * check if a token is expired based on given UTC time in seconds.
         * @param expiresOn
         */
        TimeUtils.isTokenExpired = function (expiresOn, offset) {
            // check for access token expiry
            var expirationSec = Number(expiresOn) || 0;
            var offsetCurrentTimeSec = TimeUtils.nowSeconds() + offset;
            // If current time + offset is greater than token expiration time, then token is expired.
            return (offsetCurrentTimeSec > expirationSec);
        };
        /**
         * If the current time is earlier than the time that a token was cached at, we must discard the token
         * i.e. The system clock was turned back after acquiring the cached token
         * @param cachedAt
         * @param offset
         */
        TimeUtils.wasClockTurnedBack = function (cachedAt) {
            var cachedAtSec = Number(cachedAt);
            return cachedAtSec > TimeUtils.nowSeconds();
        };
        /**
         * Waits for t number of milliseconds
         * @param t number
         * @param value T
         */
        TimeUtils.delay = function (t, value) {
            return new Promise(function (resolve) { return setTimeout(function () { return resolve(value); }, t); });
        };
        return TimeUtils;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * ACCESS_TOKEN Credential Type
     *
     * Key:Value Schema:
     *
     * Key Example: uid.utid-login.microsoftonline.com-accesstoken-clientId-contoso.com-user.read
     *
     * Value Schema:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
     *      clientId: client ID of the application
     *      secret: Actual credential as a string
     *      familyId: Family ID identifier, usually only used for refresh tokens
     *      realm: Full tenant or organizational identifier that the account belongs to
     *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
     *      cachedAt: Absolute device time when entry was created in the cache.
     *      expiresOn: Token expiry time, calculated based on current UTC time in seconds. Represented as a string.
     *      extendedExpiresOn: Additional extended expiry time until when token is valid in case of server-side outage. Represented as string in UTC seconds.
     *      keyId: used for POP and SSH tokenTypes
     *      tokenType: Type of the token issued. Usually "Bearer"
     * }
     */
    var AccessTokenEntity = /** @class */ (function (_super) {
        __extends(AccessTokenEntity, _super);
        function AccessTokenEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Create AccessTokenEntity
         * @param homeAccountId
         * @param environment
         * @param accessToken
         * @param clientId
         * @param tenantId
         * @param scopes
         * @param expiresOn
         * @param extExpiresOn
         */
        AccessTokenEntity.createAccessTokenEntity = function (homeAccountId, environment, accessToken, clientId, tenantId, scopes, expiresOn, extExpiresOn, cryptoUtils, refreshOn, tokenType, userAssertionHash, keyId, requestedClaims, requestedClaimsHash) {
            var _a, _b;
            var atEntity = new AccessTokenEntity();
            atEntity.homeAccountId = homeAccountId;
            atEntity.credentialType = CredentialType.ACCESS_TOKEN;
            atEntity.secret = accessToken;
            var currentTime = TimeUtils.nowSeconds();
            atEntity.cachedAt = currentTime.toString();
            /*
             * Token expiry time.
             * This value should be  calculated based on the current UTC time measured locally and the value  expires_in Represented as a string in JSON.
             */
            atEntity.expiresOn = expiresOn.toString();
            atEntity.extendedExpiresOn = extExpiresOn.toString();
            if (refreshOn) {
                atEntity.refreshOn = refreshOn.toString();
            }
            atEntity.environment = environment;
            atEntity.clientId = clientId;
            atEntity.realm = tenantId;
            atEntity.target = scopes;
            atEntity.userAssertionHash = userAssertionHash;
            atEntity.tokenType = StringUtils.isEmpty(tokenType) ? AuthenticationScheme.BEARER : tokenType;
            if (requestedClaims) {
                atEntity.requestedClaims = requestedClaims;
                atEntity.requestedClaimsHash = requestedClaimsHash;
            }
            /*
             * Create Access Token With Auth Scheme instead of regular access token
             * Cast to lower to handle "bearer" from ADFS
             */
            if (((_a = atEntity.tokenType) === null || _a === void 0 ? void 0 : _a.toLowerCase()) !== AuthenticationScheme.BEARER.toLowerCase()) {
                atEntity.credentialType = CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME;
                switch (atEntity.tokenType) {
                    case AuthenticationScheme.POP:
                        // Make sure keyId is present and add it to credential
                        var tokenClaims = AuthToken.extractTokenClaims(accessToken, cryptoUtils);
                        if (!((_b = tokenClaims === null || tokenClaims === void 0 ? void 0 : tokenClaims.cnf) === null || _b === void 0 ? void 0 : _b.kid)) {
                            throw ClientAuthError.createTokenClaimsRequiredError();
                        }
                        atEntity.keyId = tokenClaims.cnf.kid;
                        break;
                    case AuthenticationScheme.SSH:
                        atEntity.keyId = keyId;
                }
            }
            return atEntity;
        };
        /**
         * Validates an entity: checks for all expected params
         * @param entity
         */
        AccessTokenEntity.isAccessTokenEntity = function (entity) {
            if (!entity) {
                return false;
            }
            return (entity.hasOwnProperty("homeAccountId") &&
                entity.hasOwnProperty("environment") &&
                entity.hasOwnProperty("credentialType") &&
                entity.hasOwnProperty("realm") &&
                entity.hasOwnProperty("clientId") &&
                entity.hasOwnProperty("secret") &&
                entity.hasOwnProperty("target") &&
                (entity["credentialType"] === CredentialType.ACCESS_TOKEN || entity["credentialType"] === CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME));
        };
        return AccessTokenEntity;
    }(CredentialEntity));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * REFRESH_TOKEN Cache
     *
     * Key:Value Schema:
     *
     * Key Example: uid.utid-login.microsoftonline.com-refreshtoken-clientId--
     *
     * Value:
     * {
     *      homeAccountId: home account identifier for the auth scheme,
     *      environment: entity that issued the token, represented as a full host
     *      credentialType: Type of credential as a string, can be one of the following: RefreshToken, AccessToken, IdToken, Password, Cookie, Certificate, Other
     *      clientId: client ID of the application
     *      secret: Actual credential as a string
     *      familyId: Family ID identifier, '1' represents Microsoft Family
     *      realm: Full tenant or organizational identifier that the account belongs to
     *      target: Permissions that are included in the token, or for refresh tokens, the resource identifier.
     * }
     */
    var RefreshTokenEntity = /** @class */ (function (_super) {
        __extends(RefreshTokenEntity, _super);
        function RefreshTokenEntity() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Create RefreshTokenEntity
         * @param homeAccountId
         * @param authenticationResult
         * @param clientId
         * @param authority
         */
        RefreshTokenEntity.createRefreshTokenEntity = function (homeAccountId, environment, refreshToken, clientId, familyId, userAssertionHash) {
            var rtEntity = new RefreshTokenEntity();
            rtEntity.clientId = clientId;
            rtEntity.credentialType = CredentialType.REFRESH_TOKEN;
            rtEntity.environment = environment;
            rtEntity.homeAccountId = homeAccountId;
            rtEntity.secret = refreshToken;
            rtEntity.userAssertionHash = userAssertionHash;
            if (familyId)
                rtEntity.familyId = familyId;
            return rtEntity;
        };
        /**
         * Validates an entity: checks for all expected params
         * @param entity
         */
        RefreshTokenEntity.isRefreshTokenEntity = function (entity) {
            if (!entity) {
                return false;
            }
            return (entity.hasOwnProperty("homeAccountId") &&
                entity.hasOwnProperty("environment") &&
                entity.hasOwnProperty("credentialType") &&
                entity.hasOwnProperty("clientId") &&
                entity.hasOwnProperty("secret") &&
                entity["credentialType"] === CredentialType.REFRESH_TOKEN);
        };
        return RefreshTokenEntity;
    }(CredentialEntity));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * InteractionRequiredServerErrorMessage contains string constants used by error codes and messages returned by the server indicating interaction is required
     */
    var InteractionRequiredServerErrorMessage = [
        "interaction_required",
        "consent_required",
        "login_required"
    ];
    var InteractionRequiredAuthSubErrorMessage = [
        "message_only",
        "additional_action",
        "basic_action",
        "user_password_expired",
        "consent_required"
    ];
    /**
     * Interaction required errors defined by the SDK
     */
    var InteractionRequiredAuthErrorMessage = {
        noTokensFoundError: {
            code: "no_tokens_found",
            desc: "No refresh token found in the cache. Please sign-in."
        }
    };
    /**
     * Error thrown when user interaction is required.
     */
    var InteractionRequiredAuthError = /** @class */ (function (_super) {
        __extends(InteractionRequiredAuthError, _super);
        function InteractionRequiredAuthError(errorCode, errorMessage, subError) {
            var _this = _super.call(this, errorCode, errorMessage, subError) || this;
            _this.name = "InteractionRequiredAuthError";
            Object.setPrototypeOf(_this, InteractionRequiredAuthError.prototype);
            return _this;
        }
        /**
         * Helper function used to determine if an error thrown by the server requires interaction to resolve
         * @param errorCode
         * @param errorString
         * @param subError
         */
        InteractionRequiredAuthError.isInteractionRequiredError = function (errorCode, errorString, subError) {
            var isInteractionRequiredErrorCode = !!errorCode && InteractionRequiredServerErrorMessage.indexOf(errorCode) > -1;
            var isInteractionRequiredSubError = !!subError && InteractionRequiredAuthSubErrorMessage.indexOf(subError) > -1;
            var isInteractionRequiredErrorDesc = !!errorString && InteractionRequiredServerErrorMessage.some(function (irErrorCode) {
                return errorString.indexOf(irErrorCode) > -1;
            });
            return isInteractionRequiredErrorCode || isInteractionRequiredErrorDesc || isInteractionRequiredSubError;
        };
        /**
         * Creates an error thrown when the authorization code required for a token request is null or empty.
         */
        InteractionRequiredAuthError.createNoTokensFoundError = function () {
            return new InteractionRequiredAuthError(InteractionRequiredAuthErrorMessage.noTokensFoundError.code, InteractionRequiredAuthErrorMessage.noTokensFoundError.desc);
        };
        return InteractionRequiredAuthError;
    }(AuthError));

    /*! @azure/msal-common v7.0.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var CacheRecord = /** @class */ (function () {
        function CacheRecord(accountEntity, idTokenEntity, accessTokenEntity, refreshTokenEntity, appMetadataEntity) {
            this.account = accountEntity || null;
            this.idToken = idTokenEntity || null;
            this.accessToken = accessTokenEntity || null;
            this.refreshToken = refreshTokenEntity || null;
            this.appMetadata = appMetadataEntity || null;
        }
        return CacheRecord;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class which provides helpers for OAuth 2.0 protocol specific values
     */
    var ProtocolUtils = /** @class */ (function () {
        function ProtocolUtils() {
        }
        /**
         * Appends user state with random guid, or returns random guid.
         * @param userState
         * @param randomGuid
         */
        ProtocolUtils.setRequestState = function (cryptoObj, userState, meta) {
            var libraryState = ProtocolUtils.generateLibraryState(cryptoObj, meta);
            return !StringUtils.isEmpty(userState) ? "" + libraryState + Constants.RESOURCE_DELIM + userState : libraryState;
        };
        /**
         * Generates the state value used by the common library.
         * @param randomGuid
         * @param cryptoObj
         */
        ProtocolUtils.generateLibraryState = function (cryptoObj, meta) {
            if (!cryptoObj) {
                throw ClientAuthError.createNoCryptoObjectError("generateLibraryState");
            }
            // Create a state object containing a unique id and the timestamp of the request creation
            var stateObj = {
                id: cryptoObj.createNewGuid()
            };
            if (meta) {
                stateObj.meta = meta;
            }
            var stateString = JSON.stringify(stateObj);
            return cryptoObj.base64Encode(stateString);
        };
        /**
         * Parses the state into the RequestStateObject, which contains the LibraryState info and the state passed by the user.
         * @param state
         * @param cryptoObj
         */
        ProtocolUtils.parseRequestState = function (cryptoObj, state) {
            if (!cryptoObj) {
                throw ClientAuthError.createNoCryptoObjectError("parseRequestState");
            }
            if (StringUtils.isEmpty(state)) {
                throw ClientAuthError.createInvalidStateError(state, "Null, undefined or empty state");
            }
            try {
                // Split the state between library state and user passed state and decode them separately
                var splitState = state.split(Constants.RESOURCE_DELIM);
                var libraryState = splitState[0];
                var userState = splitState.length > 1 ? splitState.slice(1).join(Constants.RESOURCE_DELIM) : Constants.EMPTY_STRING;
                var libraryStateString = cryptoObj.base64Decode(libraryState);
                var libraryStateObj = JSON.parse(libraryStateString);
                return {
                    userRequestState: !StringUtils.isEmpty(userState) ? userState : Constants.EMPTY_STRING,
                    libraryState: libraryStateObj
                };
            }
            catch (e) {
                throw ClientAuthError.createInvalidStateError(state, e);
            }
        };
        return ProtocolUtils;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Url object class which can perform various transformations on url strings.
     */
    var UrlString = /** @class */ (function () {
        function UrlString(url) {
            this._urlString = url;
            if (StringUtils.isEmpty(this._urlString)) {
                // Throws error if url is empty
                throw ClientConfigurationError.createUrlEmptyError();
            }
            if (StringUtils.isEmpty(this.getHash())) {
                this._urlString = UrlString.canonicalizeUri(url);
            }
        }
        Object.defineProperty(UrlString.prototype, "urlString", {
            get: function () {
                return this._urlString;
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Ensure urls are lower case and end with a / character.
         * @param url
         */
        UrlString.canonicalizeUri = function (url) {
            if (url) {
                var lowerCaseUrl = url.toLowerCase();
                if (StringUtils.endsWith(lowerCaseUrl, "?")) {
                    lowerCaseUrl = lowerCaseUrl.slice(0, -1);
                }
                else if (StringUtils.endsWith(lowerCaseUrl, "?/")) {
                    lowerCaseUrl = lowerCaseUrl.slice(0, -2);
                }
                if (!StringUtils.endsWith(lowerCaseUrl, "/")) {
                    lowerCaseUrl += "/";
                }
                return lowerCaseUrl;
            }
            return url;
        };
        /**
         * Throws if urlString passed is not a valid authority URI string.
         */
        UrlString.prototype.validateAsUri = function () {
            // Attempts to parse url for uri components
            var components;
            try {
                components = this.getUrlComponents();
            }
            catch (e) {
                throw ClientConfigurationError.createUrlParseError(e);
            }
            // Throw error if URI or path segments are not parseable.
            if (!components.HostNameAndPort || !components.PathSegments) {
                throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
            }
            // Throw error if uri is insecure.
            if (!components.Protocol || components.Protocol.toLowerCase() !== "https:") {
                throw ClientConfigurationError.createInsecureAuthorityUriError(this.urlString);
            }
        };
        /**
         * Given a url and a query string return the url with provided query string appended
         * @param url
         * @param queryString
         */
        UrlString.appendQueryString = function (url, queryString) {
            if (StringUtils.isEmpty(queryString)) {
                return url;
            }
            return url.indexOf("?") < 0 ? url + "?" + queryString : url + "&" + queryString;
        };
        /**
         * Returns a url with the hash removed
         * @param url
         */
        UrlString.removeHashFromUrl = function (url) {
            return UrlString.canonicalizeUri(url.split("#")[0]);
        };
        /**
         * Given a url like https://a:b/common/d?e=f#g, and a tenantId, returns https://a:b/tenantId/d
         * @param href The url
         * @param tenantId The tenant id to replace
         */
        UrlString.prototype.replaceTenantPath = function (tenantId) {
            var urlObject = this.getUrlComponents();
            var pathArray = urlObject.PathSegments;
            if (tenantId && (pathArray.length !== 0 && (pathArray[0] === AADAuthorityConstants.COMMON || pathArray[0] === AADAuthorityConstants.ORGANIZATIONS))) {
                pathArray[0] = tenantId;
            }
            return UrlString.constructAuthorityUriFromObject(urlObject);
        };
        /**
         * Returns the anchor part(#) of the URL
         */
        UrlString.prototype.getHash = function () {
            return UrlString.parseHash(this.urlString);
        };
        /**
         * Parses out the components from a url string.
         * @returns An object with the various components. Please cache this value insted of calling this multiple times on the same url.
         */
        UrlString.prototype.getUrlComponents = function () {
            // https://gist.github.com/curtisz/11139b2cfcaef4a261e0
            var regEx = RegExp("^(([^:/?#]+):)?(//([^/?#]*))?([^?#]*)(\\?([^#]*))?(#(.*))?");
            // If url string does not match regEx, we throw an error
            var match = this.urlString.match(regEx);
            if (!match) {
                throw ClientConfigurationError.createUrlParseError("Given url string: " + this.urlString);
            }
            // Url component object
            var urlComponents = {
                Protocol: match[1],
                HostNameAndPort: match[4],
                AbsolutePath: match[5],
                QueryString: match[7]
            };
            var pathSegments = urlComponents.AbsolutePath.split("/");
            pathSegments = pathSegments.filter(function (val) { return val && val.length > 0; }); // remove empty elements
            urlComponents.PathSegments = pathSegments;
            if (!StringUtils.isEmpty(urlComponents.QueryString) && urlComponents.QueryString.endsWith("/")) {
                urlComponents.QueryString = urlComponents.QueryString.substring(0, urlComponents.QueryString.length - 1);
            }
            return urlComponents;
        };
        UrlString.getDomainFromUrl = function (url) {
            var regEx = RegExp("^([^:/?#]+://)?([^/?#]*)");
            var match = url.match(regEx);
            if (!match) {
                throw ClientConfigurationError.createUrlParseError("Given url string: " + url);
            }
            return match[2];
        };
        UrlString.getAbsoluteUrl = function (relativeUrl, baseUrl) {
            if (relativeUrl[0] === Constants.FORWARD_SLASH) {
                var url = new UrlString(baseUrl);
                var baseComponents = url.getUrlComponents();
                return baseComponents.Protocol + "//" + baseComponents.HostNameAndPort + relativeUrl;
            }
            return relativeUrl;
        };
        /**
         * Parses hash string from given string. Returns empty string if no hash symbol is found.
         * @param hashString
         */
        UrlString.parseHash = function (hashString) {
            var hashIndex1 = hashString.indexOf("#");
            var hashIndex2 = hashString.indexOf("#/");
            if (hashIndex2 > -1) {
                return hashString.substring(hashIndex2 + 2);
            }
            else if (hashIndex1 > -1) {
                return hashString.substring(hashIndex1 + 1);
            }
            return Constants.EMPTY_STRING;
        };
        UrlString.constructAuthorityUriFromObject = function (urlObject) {
            return new UrlString(urlObject.Protocol + "//" + urlObject.HostNameAndPort + "/" + urlObject.PathSegments.join("/"));
        };
        /**
         * Returns URL hash as server auth code response object.
         */
        UrlString.getDeserializedHash = function (hash) {
            // Check if given hash is empty
            if (StringUtils.isEmpty(hash)) {
                return {};
            }
            // Strip the # symbol if present
            var parsedHash = UrlString.parseHash(hash);
            // If # symbol was not present, above will return empty string, so give original hash value
            var deserializedHash = StringUtils.queryStringToObject(StringUtils.isEmpty(parsedHash) ? hash : parsedHash);
            // Check if deserialization didn't work
            if (!deserializedHash) {
                throw ClientAuthError.createHashNotDeserializedError(JSON.stringify(deserializedHash));
            }
            return deserializedHash;
        };
        /**
         * Check if the hash of the URL string contains known properties
         */
        UrlString.hashContainsKnownProperties = function (hash) {
            if (StringUtils.isEmpty(hash) || hash.indexOf("=") < 0) {
                // Hash doesn't contain key/value pairs
                return false;
            }
            var parameters = UrlString.getDeserializedHash(hash);
            return !!(parameters.code ||
                parameters.error_description ||
                parameters.error ||
                parameters.state);
        };
        return UrlString;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var KeyLocation;
    (function (KeyLocation) {
        KeyLocation["SW"] = "sw";
        KeyLocation["UHW"] = "uhw";
    })(KeyLocation || (KeyLocation = {}));
    var PopTokenGenerator = /** @class */ (function () {
        function PopTokenGenerator(cryptoUtils) {
            this.cryptoUtils = cryptoUtils;
        }
        /**
         * Generates the req_cnf validated at the RP in the POP protocol for SHR parameters
         * and returns an object containing the keyid, the full req_cnf string and the req_cnf string hash
         * @param request
         * @returns
         */
        PopTokenGenerator.prototype.generateCnf = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var reqCnf, reqCnfString, _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.generateKid(request)];
                        case 1:
                            reqCnf = _b.sent();
                            reqCnfString = this.cryptoUtils.base64Encode(JSON.stringify(reqCnf));
                            _a = {
                                kid: reqCnf.kid,
                                reqCnfString: reqCnfString
                            };
                            return [4 /*yield*/, this.cryptoUtils.hashString(reqCnfString)];
                        case 2: return [2 /*return*/, (_a.reqCnfHash = _b.sent(),
                                _a)];
                    }
                });
            });
        };
        /**
         * Generates key_id for a SHR token request
         * @param request
         * @returns
         */
        PopTokenGenerator.prototype.generateKid = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var kidThumbprint;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.cryptoUtils.getPublicKeyThumbprint(request)];
                        case 1:
                            kidThumbprint = _a.sent();
                            return [2 /*return*/, {
                                    kid: kidThumbprint,
                                    xms_ksl: KeyLocation.SW
                                }];
                    }
                });
            });
        };
        /**
         * Signs the POP access_token with the local generated key-pair
         * @param accessToken
         * @param request
         * @returns
         */
        PopTokenGenerator.prototype.signPopToken = function (accessToken, keyId, request) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.signPayload(accessToken, keyId, request)];
                });
            });
        };
        /**
         * Utility function to generate the signed JWT for an access_token
         * @param payload
         * @param kid
         * @param request
         * @param claims
         * @returns
         */
        PopTokenGenerator.prototype.signPayload = function (payload, keyId, request, claims) {
            return __awaiter(this, void 0, void 0, function () {
                var resourceRequestMethod, resourceRequestUri, shrClaims, shrNonce, resourceUrlString, resourceUrlComponents;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            resourceRequestMethod = request.resourceRequestMethod, resourceRequestUri = request.resourceRequestUri, shrClaims = request.shrClaims, shrNonce = request.shrNonce;
                            resourceUrlString = (resourceRequestUri) ? new UrlString(resourceRequestUri) : undefined;
                            resourceUrlComponents = resourceUrlString === null || resourceUrlString === void 0 ? void 0 : resourceUrlString.getUrlComponents();
                            return [4 /*yield*/, this.cryptoUtils.signJwt(__assign({ at: payload, ts: TimeUtils.nowSeconds(), m: resourceRequestMethod === null || resourceRequestMethod === void 0 ? void 0 : resourceRequestMethod.toUpperCase(), u: resourceUrlComponents === null || resourceUrlComponents === void 0 ? void 0 : resourceUrlComponents.HostNameAndPort, nonce: shrNonce || this.cryptoUtils.createNewGuid(), p: resourceUrlComponents === null || resourceUrlComponents === void 0 ? void 0 : resourceUrlComponents.AbsolutePath, q: (resourceUrlComponents === null || resourceUrlComponents === void 0 ? void 0 : resourceUrlComponents.QueryString) ? [[], resourceUrlComponents.QueryString] : undefined, client_claims: shrClaims || undefined }, claims), keyId, request.correlationId)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return PopTokenGenerator;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * APP_METADATA Cache
     *
     * Key:Value Schema:
     *
     * Key: appmetadata-<environment>-<client_id>
     *
     * Value:
     * {
     *      clientId: client ID of the application
     *      environment: entity that issued the token, represented as a full host
     *      familyId: Family ID identifier, '1' represents Microsoft Family
     * }
     */
    var AppMetadataEntity = /** @class */ (function () {
        function AppMetadataEntity() {
        }
        /**
         * Generate AppMetadata Cache Key as per the schema: appmetadata-<environment>-<client_id>
         */
        AppMetadataEntity.prototype.generateAppMetadataKey = function () {
            return AppMetadataEntity.generateAppMetadataCacheKey(this.environment, this.clientId);
        };
        /**
         * Generate AppMetadata Cache Key
         */
        AppMetadataEntity.generateAppMetadataCacheKey = function (environment, clientId) {
            var appMetaDataKeyArray = [
                APP_METADATA,
                environment,
                clientId,
            ];
            return appMetaDataKeyArray.join(Separators.CACHE_KEY_SEPARATOR).toLowerCase();
        };
        /**
         * Creates AppMetadataEntity
         * @param clientId
         * @param environment
         * @param familyId
         */
        AppMetadataEntity.createAppMetadataEntity = function (clientId, environment, familyId) {
            var appMetadata = new AppMetadataEntity();
            appMetadata.clientId = clientId;
            appMetadata.environment = environment;
            if (familyId) {
                appMetadata.familyId = familyId;
            }
            return appMetadata;
        };
        /**
         * Validates an entity: checks for all expected params
         * @param entity
         */
        AppMetadataEntity.isAppMetadataEntity = function (key, entity) {
            if (!entity) {
                return false;
            }
            return (key.indexOf(APP_METADATA) === 0 &&
                entity.hasOwnProperty("clientId") &&
                entity.hasOwnProperty("environment"));
        };
        return AppMetadataEntity;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * This class instance helps track the memory changes facilitating
     * decisions to read from and write to the persistent cache
     */ var TokenCacheContext = /** @class */ (function () {
        function TokenCacheContext(tokenCache, hasChanged) {
            this.cache = tokenCache;
            this.hasChanged = hasChanged;
        }
        Object.defineProperty(TokenCacheContext.prototype, "cacheHasChanged", {
            /**
             * boolean which indicates the changes in cache
             */
            get: function () {
                return this.hasChanged;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(TokenCacheContext.prototype, "tokenCache", {
            /**
             * function to retrieve the token cache
             */
            get: function () {
                return this.cache;
            },
            enumerable: false,
            configurable: true
        });
        return TokenCacheContext;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class that handles response parsing.
     */
    var ResponseHandler = /** @class */ (function () {
        function ResponseHandler(clientId, cacheStorage, cryptoObj, logger, serializableCache, persistencePlugin) {
            this.clientId = clientId;
            this.cacheStorage = cacheStorage;
            this.cryptoObj = cryptoObj;
            this.logger = logger;
            this.serializableCache = serializableCache;
            this.persistencePlugin = persistencePlugin;
        }
        /**
         * Function which validates server authorization code response.
         * @param serverResponseHash
         * @param cachedState
         * @param cryptoObj
         */
        ResponseHandler.prototype.validateServerAuthorizationCodeResponse = function (serverResponseHash, cachedState, cryptoObj) {
            if (!serverResponseHash.state || !cachedState) {
                throw !serverResponseHash.state ? ClientAuthError.createStateNotFoundError("Server State") : ClientAuthError.createStateNotFoundError("Cached State");
            }
            if (decodeURIComponent(serverResponseHash.state) !== decodeURIComponent(cachedState)) {
                throw ClientAuthError.createStateMismatchError();
            }
            // Check for error
            if (serverResponseHash.error || serverResponseHash.error_description || serverResponseHash.suberror) {
                if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponseHash.error, serverResponseHash.error_description, serverResponseHash.suberror)) {
                    throw new InteractionRequiredAuthError(serverResponseHash.error || Constants.EMPTY_STRING, serverResponseHash.error_description, serverResponseHash.suberror);
                }
                throw new ServerError(serverResponseHash.error || Constants.EMPTY_STRING, serverResponseHash.error_description, serverResponseHash.suberror);
            }
            if (serverResponseHash.client_info) {
                buildClientInfo(serverResponseHash.client_info, cryptoObj);
            }
        };
        /**
         * Function which validates server authorization token response.
         * @param serverResponse
         */
        ResponseHandler.prototype.validateTokenResponse = function (serverResponse) {
            // Check for error
            if (serverResponse.error || serverResponse.error_description || serverResponse.suberror) {
                if (InteractionRequiredAuthError.isInteractionRequiredError(serverResponse.error, serverResponse.error_description, serverResponse.suberror)) {
                    throw new InteractionRequiredAuthError(serverResponse.error, serverResponse.error_description, serverResponse.suberror);
                }
                var errString = serverResponse.error_codes + " - [" + serverResponse.timestamp + "]: " + serverResponse.error_description + " - Correlation ID: " + serverResponse.correlation_id + " - Trace ID: " + serverResponse.trace_id;
                throw new ServerError(serverResponse.error, errString, serverResponse.suberror);
            }
        };
        /**
         * Returns a constructed token response based on given string. Also manages the cache updates and cleanups.
         * @param serverTokenResponse
         * @param authority
         */
        ResponseHandler.prototype.handleServerTokenResponse = function (serverTokenResponse, authority, reqTimestamp, request, authCodePayload, userAssertionHash, handlingRefreshTokenResponse) {
            return __awaiter(this, void 0, void 0, function () {
                var idTokenObj, requestStateObj, cacheRecord, cacheContext, key, account;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (serverTokenResponse.id_token) {
                                idTokenObj = new AuthToken(serverTokenResponse.id_token || Constants.EMPTY_STRING, this.cryptoObj);
                                // token nonce check (TODO: Add a warning if no nonce is given?)
                                if (authCodePayload && !StringUtils.isEmpty(authCodePayload.nonce)) {
                                    if (idTokenObj.claims.nonce !== authCodePayload.nonce) {
                                        throw ClientAuthError.createNonceMismatchError();
                                    }
                                }
                            }
                            // generate homeAccountId
                            this.homeAccountIdentifier = AccountEntity.generateHomeAccountId(serverTokenResponse.client_info || Constants.EMPTY_STRING, authority.authorityType, this.logger, this.cryptoObj, idTokenObj);
                            if (!!authCodePayload && !!authCodePayload.state) {
                                requestStateObj = ProtocolUtils.parseRequestState(this.cryptoObj, authCodePayload.state);
                            }
                            // Add keyId from request to serverTokenResponse if defined
                            serverTokenResponse.key_id = serverTokenResponse.key_id || request.sshKid || undefined;
                            cacheRecord = this.generateCacheRecord(serverTokenResponse, authority, reqTimestamp, request, idTokenObj, userAssertionHash, authCodePayload);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, , 5, 8]);
                            if (!(this.persistencePlugin && this.serializableCache)) return [3 /*break*/, 3];
                            this.logger.verbose("Persistence enabled, calling beforeCacheAccess");
                            cacheContext = new TokenCacheContext(this.serializableCache, true);
                            return [4 /*yield*/, this.persistencePlugin.beforeCacheAccess(cacheContext)];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            /*
                             * When saving a refreshed tokens to the cache, it is expected that the account that was used is present in the cache.
                             * If not present, we should return null, as it's the case that another application called removeAccount in between
                             * the calls to getAllAccounts and acquireTokenSilent. We should not overwrite that removal.
                             */
                            if (handlingRefreshTokenResponse && cacheRecord.account) {
                                key = cacheRecord.account.generateAccountKey();
                                account = this.cacheStorage.getAccount(key);
                                if (!account) {
                                    this.logger.warning("Account used to refresh tokens not in persistence, refreshed tokens will not be stored in the cache");
                                    return [2 /*return*/, ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, idTokenObj, requestStateObj)];
                                }
                            }
                            return [4 /*yield*/, this.cacheStorage.saveCacheRecord(cacheRecord)];
                        case 4:
                            _a.sent();
                            return [3 /*break*/, 8];
                        case 5:
                            if (!(this.persistencePlugin && this.serializableCache && cacheContext)) return [3 /*break*/, 7];
                            this.logger.verbose("Persistence enabled, calling afterCacheAccess");
                            return [4 /*yield*/, this.persistencePlugin.afterCacheAccess(cacheContext)];
                        case 6:
                            _a.sent();
                            _a.label = 7;
                        case 7: return [7 /*endfinally*/];
                        case 8: return [2 /*return*/, ResponseHandler.generateAuthenticationResult(this.cryptoObj, authority, cacheRecord, false, request, idTokenObj, requestStateObj, serverTokenResponse.spa_code)];
                    }
                });
            });
        };
        /**
         * Generates CacheRecord
         * @param serverTokenResponse
         * @param idTokenObj
         * @param authority
         */
        ResponseHandler.prototype.generateCacheRecord = function (serverTokenResponse, authority, reqTimestamp, request, idTokenObj, userAssertionHash, authCodePayload) {
            var env = authority.getPreferredCache();
            if (StringUtils.isEmpty(env)) {
                throw ClientAuthError.createInvalidCacheEnvironmentError();
            }
            // IdToken: non AAD scenarios can have empty realm
            var cachedIdToken;
            var cachedAccount;
            if (!StringUtils.isEmpty(serverTokenResponse.id_token) && !!idTokenObj) {
                cachedIdToken = IdTokenEntity.createIdTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.id_token || Constants.EMPTY_STRING, this.clientId, idTokenObj.claims.tid || Constants.EMPTY_STRING);
                cachedAccount = this.generateAccountEntity(serverTokenResponse, idTokenObj, authority, authCodePayload);
            }
            // AccessToken
            var cachedAccessToken = null;
            if (!StringUtils.isEmpty(serverTokenResponse.access_token)) {
                // If scopes not returned in server response, use request scopes
                var responseScopes = serverTokenResponse.scope ? ScopeSet.fromString(serverTokenResponse.scope) : new ScopeSet(request.scopes || []);
                /*
                 * Use timestamp calculated before request
                 * Server may return timestamps as strings, parse to numbers if so.
                 */
                var expiresIn = (typeof serverTokenResponse.expires_in === "string" ? parseInt(serverTokenResponse.expires_in, 10) : serverTokenResponse.expires_in) || 0;
                var extExpiresIn = (typeof serverTokenResponse.ext_expires_in === "string" ? parseInt(serverTokenResponse.ext_expires_in, 10) : serverTokenResponse.ext_expires_in) || 0;
                var refreshIn = (typeof serverTokenResponse.refresh_in === "string" ? parseInt(serverTokenResponse.refresh_in, 10) : serverTokenResponse.refresh_in) || undefined;
                var tokenExpirationSeconds = reqTimestamp + expiresIn;
                var extendedTokenExpirationSeconds = tokenExpirationSeconds + extExpiresIn;
                var refreshOnSeconds = refreshIn && refreshIn > 0 ? reqTimestamp + refreshIn : undefined;
                // non AAD scenarios can have empty realm
                cachedAccessToken = AccessTokenEntity.createAccessTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.access_token || Constants.EMPTY_STRING, this.clientId, idTokenObj ? idTokenObj.claims.tid || Constants.EMPTY_STRING : authority.tenant, responseScopes.printScopes(), tokenExpirationSeconds, extendedTokenExpirationSeconds, this.cryptoObj, refreshOnSeconds, serverTokenResponse.token_type, userAssertionHash, serverTokenResponse.key_id, request.claims, request.requestedClaimsHash);
            }
            // refreshToken
            var cachedRefreshToken = null;
            if (!StringUtils.isEmpty(serverTokenResponse.refresh_token)) {
                cachedRefreshToken = RefreshTokenEntity.createRefreshTokenEntity(this.homeAccountIdentifier, env, serverTokenResponse.refresh_token || Constants.EMPTY_STRING, this.clientId, serverTokenResponse.foci, userAssertionHash);
            }
            // appMetadata
            var cachedAppMetadata = null;
            if (!StringUtils.isEmpty(serverTokenResponse.foci)) {
                cachedAppMetadata = AppMetadataEntity.createAppMetadataEntity(this.clientId, env, serverTokenResponse.foci);
            }
            return new CacheRecord(cachedAccount, cachedIdToken, cachedAccessToken, cachedRefreshToken, cachedAppMetadata);
        };
        /**
         * Generate Account
         * @param serverTokenResponse
         * @param idToken
         * @param authority
         */
        ResponseHandler.prototype.generateAccountEntity = function (serverTokenResponse, idToken, authority, authCodePayload) {
            var authorityType = authority.authorityType;
            var cloudGraphHostName = authCodePayload ? authCodePayload.cloud_graph_host_name : Constants.EMPTY_STRING;
            var msGraphhost = authCodePayload ? authCodePayload.msgraph_host : Constants.EMPTY_STRING;
            // ADFS does not require client_info in the response
            if (authorityType === AuthorityType.Adfs) {
                this.logger.verbose("Authority type is ADFS, creating ADFS account");
                return AccountEntity.createGenericAccount(this.homeAccountIdentifier, idToken, authority, cloudGraphHostName, msGraphhost);
            }
            // This fallback applies to B2C as well as they fall under an AAD account type.
            if (StringUtils.isEmpty(serverTokenResponse.client_info) && authority.protocolMode === "AAD") {
                throw ClientAuthError.createClientInfoEmptyError();
            }
            return serverTokenResponse.client_info ?
                AccountEntity.createAccount(serverTokenResponse.client_info, this.homeAccountIdentifier, idToken, authority, cloudGraphHostName, msGraphhost) :
                AccountEntity.createGenericAccount(this.homeAccountIdentifier, idToken, authority, cloudGraphHostName, msGraphhost);
        };
        /**
         * Creates an @AuthenticationResult from @CacheRecord , @IdToken , and a boolean that states whether or not the result is from cache.
         *
         * Optionally takes a state string that is set as-is in the response.
         *
         * @param cacheRecord
         * @param idTokenObj
         * @param fromTokenCache
         * @param stateString
         */
        ResponseHandler.generateAuthenticationResult = function (cryptoObj, authority, cacheRecord, fromTokenCache, request, idTokenObj, requestState, code) {
            var _a, _b, _c;
            return __awaiter(this, void 0, void 0, function () {
                var accessToken, responseScopes, expiresOn, extExpiresOn, familyId, popTokenGenerator, _d, secret, keyId, uid, tid;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            accessToken = Constants.EMPTY_STRING;
                            responseScopes = [];
                            expiresOn = null;
                            familyId = Constants.EMPTY_STRING;
                            if (!cacheRecord.accessToken) return [3 /*break*/, 4];
                            if (!(cacheRecord.accessToken.tokenType === AuthenticationScheme.POP)) return [3 /*break*/, 2];
                            popTokenGenerator = new PopTokenGenerator(cryptoObj);
                            _d = cacheRecord.accessToken, secret = _d.secret, keyId = _d.keyId;
                            if (!keyId) {
                                throw ClientAuthError.createKeyIdMissingError();
                            }
                            return [4 /*yield*/, popTokenGenerator.signPopToken(secret, keyId, request)];
                        case 1:
                            accessToken = _e.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            accessToken = cacheRecord.accessToken.secret;
                            _e.label = 3;
                        case 3:
                            responseScopes = ScopeSet.fromString(cacheRecord.accessToken.target).asArray();
                            expiresOn = new Date(Number(cacheRecord.accessToken.expiresOn) * 1000);
                            extExpiresOn = new Date(Number(cacheRecord.accessToken.extendedExpiresOn) * 1000);
                            _e.label = 4;
                        case 4:
                            if (cacheRecord.appMetadata) {
                                familyId = cacheRecord.appMetadata.familyId === THE_FAMILY_ID ? THE_FAMILY_ID : Constants.EMPTY_STRING;
                            }
                            uid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.oid) || (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.sub) || Constants.EMPTY_STRING;
                            tid = (idTokenObj === null || idTokenObj === void 0 ? void 0 : idTokenObj.claims.tid) || Constants.EMPTY_STRING;
                            return [2 /*return*/, {
                                    authority: authority.canonicalAuthority,
                                    uniqueId: uid,
                                    tenantId: tid,
                                    scopes: responseScopes,
                                    account: cacheRecord.account ? cacheRecord.account.getAccountInfo() : null,
                                    idToken: idTokenObj ? idTokenObj.rawToken : Constants.EMPTY_STRING,
                                    idTokenClaims: idTokenObj ? idTokenObj.claims : {},
                                    accessToken: accessToken,
                                    fromCache: fromTokenCache,
                                    expiresOn: expiresOn,
                                    correlationId: request.correlationId,
                                    extExpiresOn: extExpiresOn,
                                    familyId: familyId,
                                    tokenType: ((_a = cacheRecord.accessToken) === null || _a === void 0 ? void 0 : _a.tokenType) || Constants.EMPTY_STRING,
                                    state: requestState ? requestState.userRequestState : Constants.EMPTY_STRING,
                                    cloudGraphHostName: ((_b = cacheRecord.account) === null || _b === void 0 ? void 0 : _b.cloudGraphHostName) || Constants.EMPTY_STRING,
                                    msGraphHost: ((_c = cacheRecord.account) === null || _c === void 0 ? void 0 : _c.msGraphHost) || Constants.EMPTY_STRING,
                                    code: code,
                                    fromNativeBroker: false
                                }];
                    }
                });
            });
        };
        return ResponseHandler;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Oauth2.0 Authorization Code client
     */
    var AuthorizationCodeClient = /** @class */ (function (_super) {
        __extends(AuthorizationCodeClient, _super);
        function AuthorizationCodeClient(configuration) {
            var _this = _super.call(this, configuration) || this;
            // Flag to indicate if client is for hybrid spa auth code redemption
            _this.includeRedirectUri = true;
            return _this;
        }
        /**
         * Creates the URL of the authorization request letting the user input credentials and consent to the
         * application. The URL target the /authorize endpoint of the authority configured in the
         * application object.
         *
         * Once the user inputs their credentials and consents, the authority will send a response to the redirect URI
         * sent in the request and should contain an authorization code, which can then be used to acquire tokens via
         * acquireToken(AuthorizationCodeRequest)
         * @param request
         */
        AuthorizationCodeClient.prototype.getAuthCodeUrl = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var queryString;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.createAuthCodeUrlQueryString(request)];
                        case 1:
                            queryString = _a.sent();
                            return [2 /*return*/, UrlString.appendQueryString(this.authority.authorizationEndpoint, queryString)];
                    }
                });
            });
        };
        /**
         * API to acquire a token in exchange of 'authorization_code` acquired by the user in the first leg of the
         * authorization_code_grant
         * @param request
         */
        AuthorizationCodeClient.prototype.acquireToken = function (request, authCodePayload) {
            return __awaiter(this, void 0, void 0, function () {
                var reqTimestamp, response, responseHandler;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.info("in acquireToken call");
                            if (!request || StringUtils.isEmpty(request.code)) {
                                throw ClientAuthError.createTokenRequestCannotBeMadeError();
                            }
                            reqTimestamp = TimeUtils.nowSeconds();
                            return [4 /*yield*/, this.executeTokenRequest(this.authority, request)];
                        case 1:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                            // Validate response. This function throws a server error if an error is returned by the server.
                            responseHandler.validateTokenResponse(response.body);
                            return [4 /*yield*/, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request, authCodePayload)];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Handles the hash fragment response from public client code request. Returns a code response used by
         * the client to exchange for a token in acquireToken.
         * @param hashFragment
         */
        AuthorizationCodeClient.prototype.handleFragmentResponse = function (hashFragment, cachedState) {
            // Handle responses.
            var responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, null, null);
            // Deserialize hash fragment response parameters.
            var hashUrlString = new UrlString(hashFragment);
            // Deserialize hash fragment response parameters.
            var serverParams = UrlString.getDeserializedHash(hashUrlString.getHash());
            // Get code response
            responseHandler.validateServerAuthorizationCodeResponse(serverParams, cachedState, this.cryptoUtils);
            // throw when there is no auth code in the response
            if (!serverParams.code) {
                throw ClientAuthError.createNoAuthCodeInServerResponseError();
            }
            return __assign(__assign({}, serverParams), { 
                // Code param is optional in ServerAuthorizationCodeResponse but required in AuthorizationCodePaylod
                code: serverParams.code });
        };
        /**
         * Used to log out the current user, and redirect the user to the postLogoutRedirectUri.
         * Default behaviour is to redirect the user to `window.location.href`.
         * @param authorityUri
         */
        AuthorizationCodeClient.prototype.getLogoutUri = function (logoutRequest) {
            // Throw error if logoutRequest is null/undefined
            if (!logoutRequest) {
                throw ClientConfigurationError.createEmptyLogoutRequestError();
            }
            var queryString = this.createLogoutUrlQueryString(logoutRequest);
            // Construct logout URI.
            return UrlString.appendQueryString(this.authority.endSessionEndpoint, queryString);
        };
        /**
         * Executes POST request to token endpoint
         * @param authority
         * @param request
         */
        AuthorizationCodeClient.prototype.executeTokenRequest = function (authority, request) {
            return __awaiter(this, void 0, void 0, function () {
                var thumbprint, requestBody, queryParameters, ccsCredential, clientInfo, headers, endpoint;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            thumbprint = {
                                clientId: this.config.authOptions.clientId,
                                authority: authority.canonicalAuthority,
                                scopes: request.scopes,
                                claims: request.claims,
                                authenticationScheme: request.authenticationScheme,
                                resourceRequestMethod: request.resourceRequestMethod,
                                resourceRequestUri: request.resourceRequestUri,
                                shrClaims: request.shrClaims,
                                sshKid: request.sshKid
                            };
                            return [4 /*yield*/, this.createTokenRequestBody(request)];
                        case 1:
                            requestBody = _a.sent();
                            queryParameters = this.createTokenQueryParameters(request);
                            ccsCredential = undefined;
                            if (request.clientInfo) {
                                try {
                                    clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils);
                                    ccsCredential = {
                                        credential: "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid,
                                        type: CcsCredentialType.HOME_ACCOUNT_ID
                                    };
                                }
                                catch (e) {
                                    this.logger.verbose("Could not parse client info for CCS Header: " + e);
                                }
                            }
                            headers = this.createTokenRequestHeaders(ccsCredential || request.ccsCredential);
                            endpoint = StringUtils.isEmpty(queryParameters) ? authority.tokenEndpoint : authority.tokenEndpoint + "?" + queryParameters;
                            return [2 /*return*/, this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint)];
                    }
                });
            });
        };
        /**
         * Creates query string for the /token request
         * @param request
         */
        AuthorizationCodeClient.prototype.createTokenQueryParameters = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            if (request.tokenQueryParameters) {
                parameterBuilder.addExtraQueryParameters(request.tokenQueryParameters);
            }
            return parameterBuilder.createQueryString();
        };
        /**
         * Generates a map for all the params to be sent to the service
         * @param request
         */
        AuthorizationCodeClient.prototype.createTokenRequestBody = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var parameterBuilder, clientAssertion, popTokenGenerator, reqCnfData, correlationId, ccsCred, clientInfo, clientInfo;
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            parameterBuilder = new RequestParameterBuilder();
                            parameterBuilder.addClientId(this.config.authOptions.clientId);
                            /*
                             * For hybrid spa flow, there will be a code but no verifier
                             * In this scenario, don't include redirect uri as auth code will not be bound to redirect URI
                             */
                            if (!this.includeRedirectUri) {
                                // Just validate
                                RequestValidator.validateRedirectUri(request.redirectUri);
                            }
                            else {
                                // Validate and include redirect uri
                                parameterBuilder.addRedirectUri(request.redirectUri);
                            }
                            // Add scope array, parameter builder will add default scopes and dedupe
                            parameterBuilder.addScopes(request.scopes);
                            // add code: user set, not validated
                            parameterBuilder.addAuthorizationCode(request.code);
                            // Add library metadata
                            parameterBuilder.addLibraryInfo(this.config.libraryInfo);
                            parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
                            parameterBuilder.addThrottling();
                            if (this.serverTelemetryManager) {
                                parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
                            }
                            // add code_verifier if passed
                            if (request.codeVerifier) {
                                parameterBuilder.addCodeVerifier(request.codeVerifier);
                            }
                            if (this.config.clientCredentials.clientSecret) {
                                parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
                            }
                            if (this.config.clientCredentials.clientAssertion) {
                                clientAssertion = this.config.clientCredentials.clientAssertion;
                                parameterBuilder.addClientAssertion(clientAssertion.assertion);
                                parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
                            }
                            parameterBuilder.addGrantType(GrantType.AUTHORIZATION_CODE_GRANT);
                            parameterBuilder.addClientInfo();
                            if (!(request.authenticationScheme === AuthenticationScheme.POP)) return [3 /*break*/, 2];
                            popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
                            return [4 /*yield*/, popTokenGenerator.generateCnf(request)];
                        case 1:
                            reqCnfData = _b.sent();
                            // SPA PoP requires full Base64Url encoded req_cnf string (unhashed)
                            parameterBuilder.addPopToken(reqCnfData.reqCnfString);
                            return [3 /*break*/, 3];
                        case 2:
                            if (request.authenticationScheme === AuthenticationScheme.SSH) {
                                if (request.sshJwk) {
                                    parameterBuilder.addSshJwk(request.sshJwk);
                                }
                                else {
                                    throw ClientConfigurationError.createMissingSshJwkError();
                                }
                            }
                            _b.label = 3;
                        case 3:
                            correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
                            parameterBuilder.addCorrelationId(correlationId);
                            if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
                            }
                            ccsCred = undefined;
                            if (request.clientInfo) {
                                try {
                                    clientInfo = buildClientInfo(request.clientInfo, this.cryptoUtils);
                                    ccsCred = {
                                        credential: "" + clientInfo.uid + Separators.CLIENT_INFO_SEPARATOR + clientInfo.utid,
                                        type: CcsCredentialType.HOME_ACCOUNT_ID
                                    };
                                }
                                catch (e) {
                                    this.logger.verbose("Could not parse client info for CCS Header: " + e);
                                }
                            }
                            else {
                                ccsCred = request.ccsCredential;
                            }
                            // Adds these as parameters in the request instead of headers to prevent CORS preflight request
                            if (this.config.systemOptions.preventCorsPreflight && ccsCred) {
                                switch (ccsCred.type) {
                                    case CcsCredentialType.HOME_ACCOUNT_ID:
                                        try {
                                            clientInfo = buildClientInfoFromHomeAccountId(ccsCred.credential);
                                            parameterBuilder.addCcsOid(clientInfo);
                                        }
                                        catch (e) {
                                            this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                                        }
                                        break;
                                    case CcsCredentialType.UPN:
                                        parameterBuilder.addCcsUpn(ccsCred.credential);
                                        break;
                                }
                            }
                            if (request.tokenBodyParameters) {
                                parameterBuilder.addExtraQueryParameters(request.tokenBodyParameters);
                            }
                            // Add hybrid spa parameters if not already provided
                            if (request.enableSpaAuthorizationCode && (!request.tokenBodyParameters || !request.tokenBodyParameters[AADServerParamKeys.RETURN_SPA_CODE])) {
                                parameterBuilder.addExtraQueryParameters((_a = {},
                                    _a[AADServerParamKeys.RETURN_SPA_CODE] = "1",
                                    _a));
                            }
                            return [2 /*return*/, parameterBuilder.createQueryString()];
                    }
                });
            });
        };
        /**
         * This API validates the `AuthorizationCodeUrlRequest` and creates a URL
         * @param request
         */
        AuthorizationCodeClient.prototype.createAuthCodeUrlQueryString = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var parameterBuilder, requestScopes, correlationId, accountSid, clientInfo, clientInfo, popTokenGenerator, reqCnfData;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            parameterBuilder = new RequestParameterBuilder();
                            parameterBuilder.addClientId(this.config.authOptions.clientId);
                            requestScopes = __spreadArrays(request.scopes || [], request.extraScopesToConsent || []);
                            parameterBuilder.addScopes(requestScopes);
                            // validate the redirectUri (to be a non null value)
                            parameterBuilder.addRedirectUri(request.redirectUri);
                            correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
                            parameterBuilder.addCorrelationId(correlationId);
                            // add response_mode. If not passed in it defaults to query.
                            parameterBuilder.addResponseMode(request.responseMode);
                            // add response_type = code
                            parameterBuilder.addResponseTypeCode();
                            // add library info parameters
                            parameterBuilder.addLibraryInfo(this.config.libraryInfo);
                            parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
                            // add client_info=1
                            parameterBuilder.addClientInfo();
                            if (request.codeChallenge && request.codeChallengeMethod) {
                                parameterBuilder.addCodeChallengeParams(request.codeChallenge, request.codeChallengeMethod);
                            }
                            if (request.prompt) {
                                parameterBuilder.addPrompt(request.prompt);
                            }
                            if (request.domainHint) {
                                parameterBuilder.addDomainHint(request.domainHint);
                            }
                            // Add sid or loginHint with preference for sid -> loginHint -> username of AccountInfo object
                            if (request.prompt !== PromptValue.SELECT_ACCOUNT) {
                                // AAD will throw if prompt=select_account is passed with an account hint
                                if (request.sid && request.prompt === PromptValue.NONE) {
                                    // SessionID is only used in silent calls
                                    this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from request");
                                    parameterBuilder.addSid(request.sid);
                                }
                                else if (request.account) {
                                    accountSid = this.extractAccountSid(request.account);
                                    // If account and loginHint are provided, we will check account first for sid before adding loginHint
                                    if (accountSid && request.prompt === PromptValue.NONE) {
                                        // SessionId is only used in silent calls
                                        this.logger.verbose("createAuthCodeUrlQueryString: Prompt is none, adding sid from account");
                                        parameterBuilder.addSid(accountSid);
                                        try {
                                            clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
                                            parameterBuilder.addCcsOid(clientInfo);
                                        }
                                        catch (e) {
                                            this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                                        }
                                    }
                                    else if (request.loginHint) {
                                        this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from request");
                                        parameterBuilder.addLoginHint(request.loginHint);
                                        parameterBuilder.addCcsUpn(request.loginHint);
                                    }
                                    else if (request.account.username) {
                                        // Fallback to account username if provided
                                        this.logger.verbose("createAuthCodeUrlQueryString: Adding login_hint from account");
                                        parameterBuilder.addLoginHint(request.account.username);
                                        try {
                                            clientInfo = buildClientInfoFromHomeAccountId(request.account.homeAccountId);
                                            parameterBuilder.addCcsOid(clientInfo);
                                        }
                                        catch (e) {
                                            this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                                        }
                                    }
                                }
                                else if (request.loginHint) {
                                    this.logger.verbose("createAuthCodeUrlQueryString: No account, adding login_hint from request");
                                    parameterBuilder.addLoginHint(request.loginHint);
                                    parameterBuilder.addCcsUpn(request.loginHint);
                                }
                            }
                            else {
                                this.logger.verbose("createAuthCodeUrlQueryString: Prompt is select_account, ignoring account hints");
                            }
                            if (request.nonce) {
                                parameterBuilder.addNonce(request.nonce);
                            }
                            if (request.state) {
                                parameterBuilder.addState(request.state);
                            }
                            if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
                            }
                            if (request.extraQueryParameters) {
                                parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
                            }
                            if (!request.nativeBroker) return [3 /*break*/, 2];
                            // signal ests that this is a WAM call
                            parameterBuilder.addNativeBroker();
                            if (!(request.authenticationScheme === AuthenticationScheme.POP)) return [3 /*break*/, 2];
                            popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
                            return [4 /*yield*/, popTokenGenerator.generateCnf(request)];
                        case 1:
                            reqCnfData = _a.sent();
                            parameterBuilder.addPopToken(reqCnfData.reqCnfHash);
                            _a.label = 2;
                        case 2: return [2 /*return*/, parameterBuilder.createQueryString()];
                    }
                });
            });
        };
        /**
         * This API validates the `EndSessionRequest` and creates a URL
         * @param request
         */
        AuthorizationCodeClient.prototype.createLogoutUrlQueryString = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            if (request.postLogoutRedirectUri) {
                parameterBuilder.addPostLogoutRedirectUri(request.postLogoutRedirectUri);
            }
            if (request.correlationId) {
                parameterBuilder.addCorrelationId(request.correlationId);
            }
            if (request.idTokenHint) {
                parameterBuilder.addIdTokenHint(request.idTokenHint);
            }
            if (request.state) {
                parameterBuilder.addState(request.state);
            }
            if (request.logoutHint) {
                parameterBuilder.addLogoutHint(request.logoutHint);
            }
            if (request.extraQueryParameters) {
                parameterBuilder.addExtraQueryParameters(request.extraQueryParameters);
            }
            return parameterBuilder.createQueryString();
        };
        /**
         * Helper to get sid from account. Returns null if idTokenClaims are not present or sid is not present.
         * @param account
         */
        AuthorizationCodeClient.prototype.extractAccountSid = function (account) {
            if (account.idTokenClaims) {
                var tokenClaims = account.idTokenClaims;
                return tokenClaims.sid || null;
            }
            return null;
        };
        return AuthorizationCodeClient;
    }(BaseClient));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * OAuth2.0 Device code client
     */
    /** @class */ ((function (_super) {
        __extends(DeviceCodeClient, _super);
        function DeviceCodeClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Gets device code from device code endpoint, calls back to with device code response, and
         * polls token endpoint to exchange device code for tokens
         * @param request
         */
        DeviceCodeClient.prototype.acquireToken = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var deviceCodeResponse, reqTimestamp, response, responseHandler;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getDeviceCode(request)];
                        case 1:
                            deviceCodeResponse = _a.sent();
                            request.deviceCodeCallback(deviceCodeResponse);
                            reqTimestamp = TimeUtils.nowSeconds();
                            return [4 /*yield*/, this.acquireTokenWithDeviceCode(request, deviceCodeResponse)];
                        case 2:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                            // Validate response. This function throws a server error if an error is returned by the server.
                            responseHandler.validateTokenResponse(response);
                            return [4 /*yield*/, responseHandler.handleServerTokenResponse(response, this.authority, reqTimestamp, request)];
                        case 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Creates device code request and executes http GET
         * @param request
         */
        DeviceCodeClient.prototype.getDeviceCode = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var queryString, headers, thumbprint;
                return __generator(this, function (_a) {
                    queryString = this.createQueryString(request);
                    headers = this.createTokenRequestHeaders();
                    thumbprint = {
                        clientId: this.config.authOptions.clientId,
                        authority: request.authority,
                        scopes: request.scopes,
                        claims: request.claims,
                        authenticationScheme: request.authenticationScheme,
                        resourceRequestMethod: request.resourceRequestMethod,
                        resourceRequestUri: request.resourceRequestUri,
                        shrClaims: request.shrClaims,
                        sshKid: request.sshKid
                    };
                    return [2 /*return*/, this.executePostRequestToDeviceCodeEndpoint(this.authority.deviceCodeEndpoint, queryString, headers, thumbprint)];
                });
            });
        };
        /**
         * Executes POST request to device code endpoint
         * @param deviceCodeEndpoint
         * @param queryString
         * @param headers
         */
        DeviceCodeClient.prototype.executePostRequestToDeviceCodeEndpoint = function (deviceCodeEndpoint, queryString, headers, thumbprint) {
            return __awaiter(this, void 0, void 0, function () {
                var _a, userCode, deviceCode, verificationUri, expiresIn, interval, message;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0: return [4 /*yield*/, this.networkManager.sendPostRequest(thumbprint, deviceCodeEndpoint, {
                                body: queryString,
                                headers: headers,
                                proxyUrl: this.config.systemOptions.proxyUrl
                            })];
                        case 1:
                            _a = (_b.sent()).body, userCode = _a.user_code, deviceCode = _a.device_code, verificationUri = _a.verification_uri, expiresIn = _a.expires_in, interval = _a.interval, message = _a.message;
                            return [2 /*return*/, {
                                    userCode: userCode,
                                    deviceCode: deviceCode,
                                    verificationUri: verificationUri,
                                    expiresIn: expiresIn,
                                    interval: interval,
                                    message: message
                                }];
                    }
                });
            });
        };
        /**
         * Create device code endpoint query parameters and returns string
         */
        DeviceCodeClient.prototype.createQueryString = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addScopes(request.scopes);
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            if (!StringUtils.isEmpty(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
            }
            return parameterBuilder.createQueryString();
        };
        /**
         * Breaks the polling with specific conditions.
         * @param request CommonDeviceCodeRequest
         * @param deviceCodeResponse DeviceCodeResponse
         */
        DeviceCodeClient.prototype.continuePolling = function (deviceCodeExpirationTime, userSpecifiedTimeout, userSpecifiedCancelFlag) {
            if (userSpecifiedCancelFlag) {
                this.logger.error("Token request cancelled by setting DeviceCodeRequest.cancel = true");
                throw ClientAuthError.createDeviceCodeCancelledError();
            }
            else if (userSpecifiedTimeout && userSpecifiedTimeout < deviceCodeExpirationTime && TimeUtils.nowSeconds() > userSpecifiedTimeout) {
                this.logger.error("User defined timeout for device code polling reached. The timeout was set for " + userSpecifiedTimeout);
                throw ClientAuthError.createUserTimeoutReachedError();
            }
            else if (TimeUtils.nowSeconds() > deviceCodeExpirationTime) {
                if (userSpecifiedTimeout) {
                    this.logger.verbose("User specified timeout ignored as the device code has expired before the timeout elapsed. The user specified timeout was set for " + userSpecifiedTimeout);
                }
                this.logger.error("Device code expired. Expiration time of device code was " + deviceCodeExpirationTime);
                throw ClientAuthError.createDeviceCodeExpiredError();
            }
            return true;
        };
        /**
         * Creates token request with device code response and polls token endpoint at interval set by the device code
         * response
         * @param request
         * @param deviceCodeResponse
         */
        DeviceCodeClient.prototype.acquireTokenWithDeviceCode = function (request, deviceCodeResponse) {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, headers, userSpecifiedTimeout, deviceCodeExpirationTime, pollingIntervalMilli, thumbprint, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            requestBody = this.createTokenRequestBody(request, deviceCodeResponse);
                            headers = this.createTokenRequestHeaders();
                            userSpecifiedTimeout = request.timeout ? TimeUtils.nowSeconds() + request.timeout : undefined;
                            deviceCodeExpirationTime = TimeUtils.nowSeconds() + deviceCodeResponse.expiresIn;
                            pollingIntervalMilli = deviceCodeResponse.interval * 1000;
                            _a.label = 1;
                        case 1:
                            if (!this.continuePolling(deviceCodeExpirationTime, userSpecifiedTimeout, request.cancel)) return [3 /*break*/, 6];
                            thumbprint = {
                                clientId: this.config.authOptions.clientId,
                                authority: request.authority,
                                scopes: request.scopes,
                                claims: request.claims,
                                authenticationScheme: request.authenticationScheme,
                                resourceRequestMethod: request.resourceRequestMethod,
                                resourceRequestUri: request.resourceRequestUri,
                                shrClaims: request.shrClaims,
                                sshKid: request.sshKid
                            };
                            return [4 /*yield*/, this.executePostToTokenEndpoint(this.authority.tokenEndpoint, requestBody, headers, thumbprint)];
                        case 2:
                            response = _a.sent();
                            if (!(response.body && response.body.error === Constants.AUTHORIZATION_PENDING)) return [3 /*break*/, 4];
                            // user authorization is pending. Sleep for polling interval and try again
                            this.logger.info(response.body.error_description || "Authorization pending. Continue polling.");
                            return [4 /*yield*/, TimeUtils.delay(pollingIntervalMilli)];
                        case 3:
                            _a.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            this.logger.verbose("Authorization completed successfully. Polling stopped.");
                            return [2 /*return*/, response.body];
                        case 5: return [3 /*break*/, 1];
                        case 6:
                            /*
                             * The above code should've thrown by this point, but to satisfy TypeScript,
                             * and in the rare case the conditionals in continuePolling() may not catch everything...
                             */
                            this.logger.error("Polling stopped for unknown reasons.");
                            throw ClientAuthError.createDeviceCodeUnknownError();
                    }
                });
            });
        };
        /**
         * Creates query parameters and converts to string.
         * @param request
         * @param deviceCodeResponse
         */
        DeviceCodeClient.prototype.createTokenRequestBody = function (request, deviceCodeResponse) {
            var requestParameters = new RequestParameterBuilder();
            requestParameters.addScopes(request.scopes);
            requestParameters.addClientId(this.config.authOptions.clientId);
            requestParameters.addGrantType(GrantType.DEVICE_CODE_GRANT);
            requestParameters.addDeviceCode(deviceCodeResponse.deviceCode);
            var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            requestParameters.addCorrelationId(correlationId);
            requestParameters.addClientInfo();
            requestParameters.addLibraryInfo(this.config.libraryInfo);
            requestParameters.addApplicationTelemetry(this.config.telemetry.application);
            requestParameters.addThrottling();
            if (this.serverTelemetryManager) {
                requestParameters.addServerTelemetry(this.serverTelemetryManager);
            }
            if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                requestParameters.addClaims(request.claims, this.config.authOptions.clientCapabilities);
            }
            return requestParameters.createQueryString();
        };
        return DeviceCodeClient;
    })(BaseClient));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * OAuth2.0 refresh token client
     */
    var RefreshTokenClient = /** @class */ (function (_super) {
        __extends(RefreshTokenClient, _super);
        function RefreshTokenClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        RefreshTokenClient.prototype.acquireToken = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var reqTimestamp, response, responseHandler;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            reqTimestamp = TimeUtils.nowSeconds();
                            return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                        case 1:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                            responseHandler.validateTokenResponse(response.body);
                            return [2 /*return*/, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request, undefined, undefined, true)];
                    }
                });
            });
        };
        /**
         * Gets cached refresh token and attaches to request, then calls acquireToken API
         * @param request
         */
        RefreshTokenClient.prototype.acquireTokenByRefreshToken = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var isFOCI, noFamilyRTInCache, clientMismatchErrorWithFamilyRT;
                return __generator(this, function (_a) {
                    // Cannot renew token if no request object is given.
                    if (!request) {
                        throw ClientConfigurationError.createEmptyTokenRequestError();
                    }
                    // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
                    if (!request.account) {
                        throw ClientAuthError.createNoAccountInSilentRequestError();
                    }
                    isFOCI = this.cacheManager.isAppMetadataFOCI(request.account.environment, this.config.authOptions.clientId);
                    // if the app is part of the family, retrive a Family refresh token if present and make a refreshTokenRequest
                    if (isFOCI) {
                        try {
                            return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, true)];
                        }
                        catch (e) {
                            noFamilyRTInCache = e instanceof InteractionRequiredAuthError && e.errorCode === InteractionRequiredAuthErrorMessage.noTokensFoundError.code;
                            clientMismatchErrorWithFamilyRT = e instanceof ServerError && e.errorCode === Errors.INVALID_GRANT_ERROR && e.subError === Errors.CLIENT_MISMATCH_ERROR;
                            // if family Refresh Token (FRT) cache acquisition fails or if client_mismatch error is seen with FRT, reattempt with application Refresh Token (ART)
                            if (noFamilyRTInCache || clientMismatchErrorWithFamilyRT) {
                                return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, false)];
                                // throw in all other cases
                            }
                            else {
                                throw e;
                            }
                        }
                    }
                    // fall back to application refresh token acquisition
                    return [2 /*return*/, this.acquireTokenWithCachedRefreshToken(request, false)];
                });
            });
        };
        /**
         * makes a network call to acquire tokens by exchanging RefreshToken available in userCache; throws if refresh token is not cached
         * @param request
         */
        RefreshTokenClient.prototype.acquireTokenWithCachedRefreshToken = function (request, foci) {
            return __awaiter(this, void 0, void 0, function () {
                var refreshToken, refreshTokenRequest;
                return __generator(this, function (_a) {
                    refreshToken = this.cacheManager.readRefreshTokenFromCache(this.config.authOptions.clientId, request.account, foci);
                    // no refresh Token
                    if (!refreshToken) {
                        throw InteractionRequiredAuthError.createNoTokensFoundError();
                    }
                    refreshTokenRequest = __assign(__assign({}, request), { refreshToken: refreshToken.secret, authenticationScheme: request.authenticationScheme || AuthenticationScheme.BEARER, ccsCredential: {
                            credential: request.account.homeAccountId,
                            type: CcsCredentialType.HOME_ACCOUNT_ID
                        } });
                    return [2 /*return*/, this.acquireToken(refreshTokenRequest)];
                });
            });
        };
        /**
         * Constructs the network message and makes a NW call to the underlying secure token service
         * @param request
         * @param authority
         */
        RefreshTokenClient.prototype.executeTokenRequest = function (request, authority) {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, queryParameters, headers, thumbprint, endpoint;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.createTokenRequestBody(request)];
                        case 1:
                            requestBody = _a.sent();
                            queryParameters = this.createTokenQueryParameters(request);
                            headers = this.createTokenRequestHeaders(request.ccsCredential);
                            thumbprint = {
                                clientId: this.config.authOptions.clientId,
                                authority: authority.canonicalAuthority,
                                scopes: request.scopes,
                                claims: request.claims,
                                authenticationScheme: request.authenticationScheme,
                                resourceRequestMethod: request.resourceRequestMethod,
                                resourceRequestUri: request.resourceRequestUri,
                                shrClaims: request.shrClaims,
                                sshKid: request.sshKid
                            };
                            endpoint = UrlString.appendQueryString(authority.tokenEndpoint, queryParameters);
                            return [2 /*return*/, this.executePostToTokenEndpoint(endpoint, requestBody, headers, thumbprint)];
                    }
                });
            });
        };
        /**
         * Creates query string for the /token request
         * @param request
         */
        RefreshTokenClient.prototype.createTokenQueryParameters = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            if (request.tokenQueryParameters) {
                parameterBuilder.addExtraQueryParameters(request.tokenQueryParameters);
            }
            return parameterBuilder.createQueryString();
        };
        /**
         * Helper function to create the token request body
         * @param request
         */
        RefreshTokenClient.prototype.createTokenRequestBody = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var parameterBuilder, correlationId, clientAssertion, popTokenGenerator, reqCnfData, clientInfo;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            parameterBuilder = new RequestParameterBuilder();
                            parameterBuilder.addClientId(this.config.authOptions.clientId);
                            parameterBuilder.addScopes(request.scopes);
                            parameterBuilder.addGrantType(GrantType.REFRESH_TOKEN_GRANT);
                            parameterBuilder.addClientInfo();
                            parameterBuilder.addLibraryInfo(this.config.libraryInfo);
                            parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
                            parameterBuilder.addThrottling();
                            if (this.serverTelemetryManager) {
                                parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
                            }
                            correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
                            parameterBuilder.addCorrelationId(correlationId);
                            parameterBuilder.addRefreshToken(request.refreshToken);
                            if (this.config.clientCredentials.clientSecret) {
                                parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
                            }
                            if (this.config.clientCredentials.clientAssertion) {
                                clientAssertion = this.config.clientCredentials.clientAssertion;
                                parameterBuilder.addClientAssertion(clientAssertion.assertion);
                                parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
                            }
                            if (!(request.authenticationScheme === AuthenticationScheme.POP)) return [3 /*break*/, 2];
                            popTokenGenerator = new PopTokenGenerator(this.cryptoUtils);
                            return [4 /*yield*/, popTokenGenerator.generateCnf(request)];
                        case 1:
                            reqCnfData = _a.sent();
                            // SPA PoP requires full Base64Url encoded req_cnf string (unhashed)
                            parameterBuilder.addPopToken(reqCnfData.reqCnfString);
                            return [3 /*break*/, 3];
                        case 2:
                            if (request.authenticationScheme === AuthenticationScheme.SSH) {
                                if (request.sshJwk) {
                                    parameterBuilder.addSshJwk(request.sshJwk);
                                }
                                else {
                                    throw ClientConfigurationError.createMissingSshJwkError();
                                }
                            }
                            _a.label = 3;
                        case 3:
                            if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
                            }
                            if (this.config.systemOptions.preventCorsPreflight && request.ccsCredential) {
                                switch (request.ccsCredential.type) {
                                    case CcsCredentialType.HOME_ACCOUNT_ID:
                                        try {
                                            clientInfo = buildClientInfoFromHomeAccountId(request.ccsCredential.credential);
                                            parameterBuilder.addCcsOid(clientInfo);
                                        }
                                        catch (e) {
                                            this.logger.verbose("Could not parse home account ID for CCS Header: " + e);
                                        }
                                        break;
                                    case CcsCredentialType.UPN:
                                        parameterBuilder.addCcsUpn(request.ccsCredential.credential);
                                        break;
                                }
                            }
                            return [2 /*return*/, parameterBuilder.createQueryString()];
                    }
                });
            });
        };
        return RefreshTokenClient;
    }(BaseClient));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * OAuth2.0 client credential grant
     */
    /** @class */ ((function (_super) {
        __extends(ClientCredentialClient, _super);
        function ClientCredentialClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Public API to acquire a token with ClientCredential Flow for Confidential clients
         * @param request
         */
        ClientCredentialClient.prototype.acquireToken = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var cachedAuthenticationResult;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.scopeSet = new ScopeSet(request.scopes || []);
                            if (!request.skipCache) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [4 /*yield*/, this.getCachedAuthenticationResult(request)];
                        case 3:
                            cachedAuthenticationResult = _a.sent();
                            if (!cachedAuthenticationResult) return [3 /*break*/, 4];
                            return [2 /*return*/, cachedAuthenticationResult];
                        case 4: return [4 /*yield*/, this.executeTokenRequest(request, this.authority)];
                        case 5: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * looks up cache if the tokens are cached already
         */
        ClientCredentialClient.prototype.getCachedAuthenticationResult = function (request) {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var cachedAccessToken;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            cachedAccessToken = this.readAccessTokenFromCache();
                            if (!cachedAccessToken) {
                                (_a = this.serverTelemetryManager) === null || _a === void 0 ? void 0 : _a.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN);
                                return [2 /*return*/, null];
                            }
                            if (TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                                (_b = this.serverTelemetryManager) === null || _b === void 0 ? void 0 : _b.setCacheOutcome(CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED);
                                return [2 /*return*/, null];
                            }
                            return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, {
                                    account: null,
                                    idToken: null,
                                    accessToken: cachedAccessToken,
                                    refreshToken: null,
                                    appMetadata: null
                                }, true, request)];
                        case 1: return [2 /*return*/, _c.sent()];
                    }
                });
            });
        };
        /**
         * Reads access token from the cache
         * TODO: Move this call to cacheManager instead
         */
        ClientCredentialClient.prototype.readAccessTokenFromCache = function () {
            var accessTokenFilter = {
                homeAccountId: Constants.EMPTY_STRING,
                environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
                credentialType: CredentialType.ACCESS_TOKEN,
                clientId: this.config.authOptions.clientId,
                realm: this.authority.tenant,
                target: this.scopeSet.printScopesLowerCase()
            };
            var credentialCache = this.cacheManager.getCredentialsFilteredBy(accessTokenFilter);
            var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
            if (accessTokens.length < 1) {
                return null;
            }
            else if (accessTokens.length > 1) {
                throw ClientAuthError.createMultipleMatchingTokensInCacheError();
            }
            return accessTokens[0];
        };
        /**
         * Makes a network call to request the token from the service
         * @param request
         * @param authority
         */
        ClientCredentialClient.prototype.executeTokenRequest = function (request, authority) {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, headers, thumbprint, reqTimestamp, response, responseHandler, tokenResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            requestBody = this.createTokenRequestBody(request);
                            headers = this.createTokenRequestHeaders();
                            thumbprint = {
                                clientId: this.config.authOptions.clientId,
                                authority: request.authority,
                                scopes: request.scopes,
                                claims: request.claims,
                                authenticationScheme: request.authenticationScheme,
                                resourceRequestMethod: request.resourceRequestMethod,
                                resourceRequestUri: request.resourceRequestUri,
                                shrClaims: request.shrClaims,
                                sshKid: request.sshKid
                            };
                            reqTimestamp = TimeUtils.nowSeconds();
                            return [4 /*yield*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                        case 1:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                            responseHandler.validateTokenResponse(response.body);
                            return [4 /*yield*/, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request)];
                        case 2:
                            tokenResponse = _a.sent();
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        /**
         * generate the request to the server in the acceptable format
         * @param request
         */
        ClientCredentialClient.prototype.createTokenRequestBody = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            parameterBuilder.addScopes(request.scopes, false);
            parameterBuilder.addGrantType(GrantType.CLIENT_CREDENTIALS_GRANT);
            parameterBuilder.addLibraryInfo(this.config.libraryInfo);
            parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
            parameterBuilder.addThrottling();
            if (this.serverTelemetryManager) {
                parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
            }
            var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            parameterBuilder.addCorrelationId(correlationId);
            if (this.config.clientCredentials.clientSecret) {
                parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
            }
            // Use clientAssertion from request, fallback to client assertion in base configuration
            var clientAssertion = request.clientAssertion || this.config.clientCredentials.clientAssertion;
            if (clientAssertion) {
                parameterBuilder.addClientAssertion(clientAssertion.assertion);
                parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
            }
            if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
            }
            return parameterBuilder.createQueryString();
        };
        return ClientCredentialClient;
    })(BaseClient));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * On-Behalf-Of client
     */
    /** @class */ ((function (_super) {
        __extends(OnBehalfOfClient, _super);
        function OnBehalfOfClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Public API to acquire tokens with on behalf of flow
         * @param request
         */
        OnBehalfOfClient.prototype.acquireToken = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var _a;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.scopeSet = new ScopeSet(request.scopes || []);
                            // generate the user_assertion_hash for OBOAssertion
                            _a = this;
                            return [4 /*yield*/, this.cryptoUtils.hashString(request.oboAssertion)];
                        case 1:
                            // generate the user_assertion_hash for OBOAssertion
                            _a.userAssertionHash = _b.sent();
                            if (!request.skipCache) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.executeTokenRequest(request, this.authority, this.userAssertionHash)];
                        case 2: return [2 /*return*/, _b.sent()];
                        case 3:
                            _b.trys.push([3, 5, , 7]);
                            return [4 /*yield*/, this.getCachedAuthenticationResult(request)];
                        case 4: return [2 /*return*/, _b.sent()];
                        case 5:
                            _b.sent();
                            return [4 /*yield*/, this.executeTokenRequest(request, this.authority, this.userAssertionHash)];
                        case 6: 
                        // Any failure falls back to interactive request, once we implement distributed cache, we plan to handle `createRefreshRequiredError` to refresh using the RT
                        return [2 /*return*/, _b.sent()];
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * look up cache for tokens
         * Find idtoken in the cache
         * Find accessToken based on user assertion and account info in the cache
         * Please note we are not yet supported OBO tokens refreshed with long lived RT. User will have to send a new assertion if the current access token expires
         * This is to prevent security issues when the assertion changes over time, however, longlived RT helps retaining the session
         * @param request
         */
        OnBehalfOfClient.prototype.getCachedAuthenticationResult = function (request) {
            var _a, _b;
            return __awaiter(this, void 0, void 0, function () {
                var cachedAccessToken, cachedIdToken, idTokenObject, cachedAccount, localAccountId, accountInfo;
                return __generator(this, function (_c) {
                    switch (_c.label) {
                        case 0:
                            cachedAccessToken = this.readAccessTokenFromCacheForOBO(this.config.authOptions.clientId, request);
                            if (!cachedAccessToken) {
                                // Must refresh due to non-existent access_token.
                                (_a = this.serverTelemetryManager) === null || _a === void 0 ? void 0 : _a.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN);
                                this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties.");
                                throw ClientAuthError.createRefreshRequiredError();
                            }
                            else if (TimeUtils.isTokenExpired(cachedAccessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                                // Access token expired, will need to renewed
                                (_b = this.serverTelemetryManager) === null || _b === void 0 ? void 0 : _b.setCacheOutcome(CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED);
                                this.logger.info("OnbehalfofFlow:getCachedAuthenticationResult - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds.");
                                throw ClientAuthError.createRefreshRequiredError();
                            }
                            cachedIdToken = this.readIdTokenFromCacheForOBO(request, cachedAccessToken.homeAccountId);
                            cachedAccount = null;
                            if (cachedIdToken) {
                                idTokenObject = new AuthToken(cachedIdToken.secret, this.config.cryptoInterface);
                                localAccountId = idTokenObject.claims.oid ? idTokenObject.claims.oid : idTokenObject.claims.sub;
                                accountInfo = {
                                    homeAccountId: cachedIdToken.homeAccountId,
                                    environment: cachedIdToken.environment,
                                    tenantId: cachedIdToken.realm,
                                    username: Constants.EMPTY_STRING,
                                    localAccountId: localAccountId || Constants.EMPTY_STRING
                                };
                                cachedAccount = this.cacheManager.readAccountFromCache(accountInfo);
                            }
                            // increment telemetry cache hit counter
                            if (this.config.serverTelemetryManager) {
                                this.config.serverTelemetryManager.incrementCacheHits();
                            }
                            return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, {
                                    account: cachedAccount,
                                    accessToken: cachedAccessToken,
                                    idToken: cachedIdToken,
                                    refreshToken: null,
                                    appMetadata: null
                                }, true, request, idTokenObject)];
                        case 1: return [2 /*return*/, _c.sent()];
                    }
                });
            });
        };
        /**
         * read idtoken from cache, this is a specific implementation for OBO as the requirements differ from a generic lookup in the cacheManager
         * Certain use cases of OBO flow do not expect an idToken in the cache/or from the service
         * @param request
         */
        OnBehalfOfClient.prototype.readIdTokenFromCacheForOBO = function (request, atHomeAccountId) {
            var idTokenFilter = {
                homeAccountId: atHomeAccountId,
                environment: this.authority.canonicalAuthorityUrlComponents.HostNameAndPort,
                credentialType: CredentialType.ID_TOKEN,
                clientId: this.config.authOptions.clientId,
                realm: this.authority.tenant
            };
            var credentialCache = this.cacheManager.getCredentialsFilteredBy(idTokenFilter);
            var idTokens = Object.keys(credentialCache.idTokens).map(function (key) { return credentialCache.idTokens[key]; });
            // When acquiring a token on behalf of an application, there might not be an id token in the cache
            if (idTokens.length < 1) {
                return null;
            }
            return idTokens[0];
        };
        /**
         * Fetches the cached access token based on incoming assertion
         * @param clientId
         * @param request
         * @param userAssertionHash
         */
        OnBehalfOfClient.prototype.readAccessTokenFromCacheForOBO = function (clientId, request) {
            var authScheme = request.authenticationScheme || AuthenticationScheme.BEARER;
            /*
             * Distinguish between Bearer and PoP/SSH token cache types
             * Cast to lowercase to handle "bearer" from ADFS
             */
            var credentialType = (authScheme && authScheme.toLowerCase() !== AuthenticationScheme.BEARER.toLowerCase()) ? CredentialType.ACCESS_TOKEN_WITH_AUTH_SCHEME : CredentialType.ACCESS_TOKEN;
            var accessTokenFilter = {
                credentialType: credentialType,
                clientId: clientId,
                target: this.scopeSet.printScopesLowerCase(),
                tokenType: authScheme,
                keyId: request.sshKid,
                requestedClaimsHash: request.requestedClaimsHash,
                userAssertionHash: this.userAssertionHash
            };
            var credentialCache = this.cacheManager.getCredentialsFilteredBy(accessTokenFilter);
            var accessTokens = Object.keys(credentialCache.accessTokens).map(function (key) { return credentialCache.accessTokens[key]; });
            var numAccessTokens = accessTokens.length;
            if (numAccessTokens < 1) {
                return null;
            }
            else if (numAccessTokens > 1) {
                throw ClientAuthError.createMultipleMatchingTokensInCacheError();
            }
            return accessTokens[0];
        };
        /**
         * Make a network call to the server requesting credentials
         * @param request
         * @param authority
         */
        OnBehalfOfClient.prototype.executeTokenRequest = function (request, authority, userAssertionHash) {
            return __awaiter(this, void 0, void 0, function () {
                var requestBody, headers, thumbprint, reqTimestamp, response, responseHandler, tokenResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            requestBody = this.createTokenRequestBody(request);
                            headers = this.createTokenRequestHeaders();
                            thumbprint = {
                                clientId: this.config.authOptions.clientId,
                                authority: request.authority,
                                scopes: request.scopes,
                                claims: request.claims,
                                authenticationScheme: request.authenticationScheme,
                                resourceRequestMethod: request.resourceRequestMethod,
                                resourceRequestUri: request.resourceRequestUri,
                                shrClaims: request.shrClaims,
                                sshKid: request.sshKid
                            };
                            reqTimestamp = TimeUtils.nowSeconds();
                            return [4 /*yield*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                        case 1:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                            responseHandler.validateTokenResponse(response.body);
                            return [4 /*yield*/, responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request, undefined, userAssertionHash)];
                        case 2:
                            tokenResponse = _a.sent();
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        /**
         * generate a server request in accepable format
         * @param request
         */
        OnBehalfOfClient.prototype.createTokenRequestBody = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            parameterBuilder.addScopes(request.scopes);
            parameterBuilder.addGrantType(GrantType.JWT_BEARER);
            parameterBuilder.addClientInfo();
            parameterBuilder.addLibraryInfo(this.config.libraryInfo);
            parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
            parameterBuilder.addThrottling();
            if (this.serverTelemetryManager) {
                parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
            }
            var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            parameterBuilder.addCorrelationId(correlationId);
            parameterBuilder.addRequestTokenUse(AADServerParamKeys.ON_BEHALF_OF);
            parameterBuilder.addOboAssertion(request.oboAssertion);
            if (this.config.clientCredentials.clientSecret) {
                parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
            }
            if (this.config.clientCredentials.clientAssertion) {
                var clientAssertion = this.config.clientCredentials.clientAssertion;
                parameterBuilder.addClientAssertion(clientAssertion.assertion);
                parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
            }
            return parameterBuilder.createQueryString();
        };
        return OnBehalfOfClient;
    })(BaseClient));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var SilentFlowClient = /** @class */ (function (_super) {
        __extends(SilentFlowClient, _super);
        function SilentFlowClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * Retrieves a token from cache if it is still valid, or uses the cached refresh token to renew
         * the given token and returns the renewed token
         * @param request
         */
        SilentFlowClient.prototype.acquireToken = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var e_1, refreshTokenClient;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.acquireCachedToken(request)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            e_1 = _a.sent();
                            if (e_1 instanceof ClientAuthError && e_1.errorCode === ClientAuthErrorMessage.tokenRefreshRequired.code) {
                                refreshTokenClient = new RefreshTokenClient(this.config);
                                return [2 /*return*/, refreshTokenClient.acquireTokenByRefreshToken(request)];
                            }
                            else {
                                throw e_1;
                            }
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Retrieves token from cache or throws an error if it must be refreshed.
         * @param request
         */
        SilentFlowClient.prototype.acquireCachedToken = function (request) {
            var _a, _b, _c, _d;
            return __awaiter(this, void 0, void 0, function () {
                var environment, cacheRecord;
                return __generator(this, function (_e) {
                    switch (_e.label) {
                        case 0:
                            // Cannot renew token if no request object is given.
                            if (!request) {
                                throw ClientConfigurationError.createEmptyTokenRequestError();
                            }
                            if (request.forceRefresh) {
                                // Must refresh due to present force_refresh flag.
                                (_a = this.serverTelemetryManager) === null || _a === void 0 ? void 0 : _a.setCacheOutcome(CacheOutcome.FORCE_REFRESH);
                                this.logger.info("SilentFlowClient:acquireCachedToken - Skipping cache because forceRefresh is true.");
                                throw ClientAuthError.createRefreshRequiredError();
                            }
                            // We currently do not support silent flow for account === null use cases; This will be revisited for confidential flow usecases
                            if (!request.account) {
                                throw ClientAuthError.createNoAccountInSilentRequestError();
                            }
                            environment = request.authority || this.authority.getPreferredCache();
                            cacheRecord = this.cacheManager.readCacheRecord(request.account, this.config.authOptions.clientId, request, environment);
                            if (!cacheRecord.accessToken) {
                                // Must refresh due to non-existent access_token.
                                (_b = this.serverTelemetryManager) === null || _b === void 0 ? void 0 : _b.setCacheOutcome(CacheOutcome.NO_CACHED_ACCESS_TOKEN);
                                this.logger.info("SilentFlowClient:acquireCachedToken - No access token found in cache for the given properties.");
                                throw ClientAuthError.createRefreshRequiredError();
                            }
                            else if (TimeUtils.wasClockTurnedBack(cacheRecord.accessToken.cachedAt) ||
                                TimeUtils.isTokenExpired(cacheRecord.accessToken.expiresOn, this.config.systemOptions.tokenRenewalOffsetSeconds)) {
                                // Must refresh due to expired access_token.
                                (_c = this.serverTelemetryManager) === null || _c === void 0 ? void 0 : _c.setCacheOutcome(CacheOutcome.CACHED_ACCESS_TOKEN_EXPIRED);
                                this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token is expired or will expire within " + this.config.systemOptions.tokenRenewalOffsetSeconds + " seconds.");
                                throw ClientAuthError.createRefreshRequiredError();
                            }
                            else if (cacheRecord.accessToken.refreshOn && TimeUtils.isTokenExpired(cacheRecord.accessToken.refreshOn, 0)) {
                                // Must refresh due to the refresh_in value.
                                (_d = this.serverTelemetryManager) === null || _d === void 0 ? void 0 : _d.setCacheOutcome(CacheOutcome.REFRESH_CACHED_ACCESS_TOKEN);
                                this.logger.info("SilentFlowClient:acquireCachedToken - Cached access token's refreshOn property has been exceeded'.");
                                throw ClientAuthError.createRefreshRequiredError();
                            }
                            if (this.config.serverTelemetryManager) {
                                this.config.serverTelemetryManager.incrementCacheHits();
                            }
                            return [4 /*yield*/, this.generateResultFromCacheRecord(cacheRecord, request)];
                        case 1: return [2 /*return*/, _e.sent()];
                    }
                });
            });
        };
        /**
         * Helper function to build response object from the CacheRecord
         * @param cacheRecord
         */
        SilentFlowClient.prototype.generateResultFromCacheRecord = function (cacheRecord, request) {
            return __awaiter(this, void 0, void 0, function () {
                var idTokenObj;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (cacheRecord.idToken) {
                                idTokenObj = new AuthToken(cacheRecord.idToken.secret, this.config.cryptoInterface);
                            }
                            return [4 /*yield*/, ResponseHandler.generateAuthenticationResult(this.cryptoUtils, this.authority, cacheRecord, true, request, idTokenObj)];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return SilentFlowClient;
    }(BaseClient));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Oauth2.0 Password grant client
     * Note: We are only supporting public clients for password grant and for purely testing purposes
     */
    /** @class */ ((function (_super) {
        __extends(UsernamePasswordClient, _super);
        function UsernamePasswordClient(configuration) {
            return _super.call(this, configuration) || this;
        }
        /**
         * API to acquire a token by passing the username and password to the service in exchage of credentials
         * password_grant
         * @param request
         */
        UsernamePasswordClient.prototype.acquireToken = function (request) {
            return __awaiter(this, void 0, void 0, function () {
                var reqTimestamp, response, responseHandler, tokenResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.info("in acquireToken call");
                            reqTimestamp = TimeUtils.nowSeconds();
                            return [4 /*yield*/, this.executeTokenRequest(this.authority, request)];
                        case 1:
                            response = _a.sent();
                            responseHandler = new ResponseHandler(this.config.authOptions.clientId, this.cacheManager, this.cryptoUtils, this.logger, this.config.serializableCache, this.config.persistencePlugin);
                            // Validate response. This function throws a server error if an error is returned by the server.
                            responseHandler.validateTokenResponse(response.body);
                            tokenResponse = responseHandler.handleServerTokenResponse(response.body, this.authority, reqTimestamp, request);
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        /**
         * Executes POST request to token endpoint
         * @param authority
         * @param request
         */
        UsernamePasswordClient.prototype.executeTokenRequest = function (authority, request) {
            return __awaiter(this, void 0, void 0, function () {
                var thumbprint, requestBody, headers;
                return __generator(this, function (_a) {
                    thumbprint = {
                        clientId: this.config.authOptions.clientId,
                        authority: authority.canonicalAuthority,
                        scopes: request.scopes,
                        claims: request.claims,
                        authenticationScheme: request.authenticationScheme,
                        resourceRequestMethod: request.resourceRequestMethod,
                        resourceRequestUri: request.resourceRequestUri,
                        shrClaims: request.shrClaims,
                        sshKid: request.sshKid
                    };
                    requestBody = this.createTokenRequestBody(request);
                    headers = this.createTokenRequestHeaders({
                        credential: request.username,
                        type: CcsCredentialType.UPN
                    });
                    return [2 /*return*/, this.executePostToTokenEndpoint(authority.tokenEndpoint, requestBody, headers, thumbprint)];
                });
            });
        };
        /**
         * Generates a map for all the params to be sent to the service
         * @param request
         */
        UsernamePasswordClient.prototype.createTokenRequestBody = function (request) {
            var parameterBuilder = new RequestParameterBuilder();
            parameterBuilder.addClientId(this.config.authOptions.clientId);
            parameterBuilder.addUsername(request.username);
            parameterBuilder.addPassword(request.password);
            parameterBuilder.addScopes(request.scopes);
            parameterBuilder.addResponseTypeForTokenAndIdToken();
            parameterBuilder.addGrantType(GrantType.RESOURCE_OWNER_PASSWORD_GRANT);
            parameterBuilder.addClientInfo();
            parameterBuilder.addLibraryInfo(this.config.libraryInfo);
            parameterBuilder.addApplicationTelemetry(this.config.telemetry.application);
            parameterBuilder.addThrottling();
            if (this.serverTelemetryManager) {
                parameterBuilder.addServerTelemetry(this.serverTelemetryManager);
            }
            var correlationId = request.correlationId || this.config.cryptoInterface.createNewGuid();
            parameterBuilder.addCorrelationId(correlationId);
            if (this.config.clientCredentials.clientSecret) {
                parameterBuilder.addClientSecret(this.config.clientCredentials.clientSecret);
            }
            if (this.config.clientCredentials.clientAssertion) {
                var clientAssertion = this.config.clientCredentials.clientAssertion;
                parameterBuilder.addClientAssertion(clientAssertion.assertion);
                parameterBuilder.addClientAssertionType(clientAssertion.assertionType);
            }
            if (!StringUtils.isEmptyObj(request.claims) || this.config.authOptions.clientCapabilities && this.config.authOptions.clientCapabilities.length > 0) {
                parameterBuilder.addClaims(request.claims, this.config.authOptions.clientCapabilities);
            }
            if (this.config.systemOptions.preventCorsPreflight && request.username) {
                parameterBuilder.addCcsUpn(request.username);
            }
            return parameterBuilder.createQueryString();
        };
        return UsernamePasswordClient;
    })(BaseClient));

    /*! @azure/msal-common v7.0.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    function isOpenIdConfigResponse(response) {
        return (response.hasOwnProperty("authorization_endpoint") &&
            response.hasOwnProperty("token_endpoint") &&
            response.hasOwnProperty("issuer"));
    }

    /*! @azure/msal-common v7.0.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Protocol modes supported by MSAL.
     */
    var ProtocolMode;
    (function (ProtocolMode) {
        ProtocolMode["AAD"] = "AAD";
        ProtocolMode["OIDC"] = "OIDC";
    })(ProtocolMode || (ProtocolMode = {}));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var AuthorityMetadataEntity = /** @class */ (function () {
        function AuthorityMetadataEntity() {
            this.expiresAt = TimeUtils.nowSeconds() + AUTHORITY_METADATA_CONSTANTS.REFRESH_TIME_SECONDS;
        }
        /**
         * Update the entity with new aliases, preferred_cache and preferred_network values
         * @param metadata
         * @param fromNetwork
         */
        AuthorityMetadataEntity.prototype.updateCloudDiscoveryMetadata = function (metadata, fromNetwork) {
            this.aliases = metadata.aliases;
            this.preferred_cache = metadata.preferred_cache;
            this.preferred_network = metadata.preferred_network;
            this.aliasesFromNetwork = fromNetwork;
        };
        /**
         * Update the entity with new endpoints
         * @param metadata
         * @param fromNetwork
         */
        AuthorityMetadataEntity.prototype.updateEndpointMetadata = function (metadata, fromNetwork) {
            this.authorization_endpoint = metadata.authorization_endpoint;
            this.token_endpoint = metadata.token_endpoint;
            this.end_session_endpoint = metadata.end_session_endpoint;
            this.issuer = metadata.issuer;
            this.endpointsFromNetwork = fromNetwork;
        };
        /**
         * Save the authority that was used to create this cache entry
         * @param authority
         */
        AuthorityMetadataEntity.prototype.updateCanonicalAuthority = function (authority) {
            this.canonical_authority = authority;
        };
        /**
         * Reset the exiresAt value
         */
        AuthorityMetadataEntity.prototype.resetExpiresAt = function () {
            this.expiresAt = TimeUtils.nowSeconds() + AUTHORITY_METADATA_CONSTANTS.REFRESH_TIME_SECONDS;
        };
        /**
         * Returns whether or not the data needs to be refreshed
         */
        AuthorityMetadataEntity.prototype.isExpired = function () {
            return this.expiresAt <= TimeUtils.nowSeconds();
        };
        /**
         * Validates an entity: checks for all expected params
         * @param entity
         */
        AuthorityMetadataEntity.isAuthorityMetadataEntity = function (key, entity) {
            if (!entity) {
                return false;
            }
            return (key.indexOf(AUTHORITY_METADATA_CONSTANTS.CACHE_KEY) === 0 &&
                entity.hasOwnProperty("aliases") &&
                entity.hasOwnProperty("preferred_cache") &&
                entity.hasOwnProperty("preferred_network") &&
                entity.hasOwnProperty("canonical_authority") &&
                entity.hasOwnProperty("authorization_endpoint") &&
                entity.hasOwnProperty("token_endpoint") &&
                entity.hasOwnProperty("issuer") &&
                entity.hasOwnProperty("aliasesFromNetwork") &&
                entity.hasOwnProperty("endpointsFromNetwork") &&
                entity.hasOwnProperty("expiresAt"));
        };
        return AuthorityMetadataEntity;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    function isCloudInstanceDiscoveryResponse(response) {
        return (response.hasOwnProperty("tenant_discovery_endpoint") &&
            response.hasOwnProperty("metadata"));
    }

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var RegionDiscovery = /** @class */ (function () {
        function RegionDiscovery(networkInterface) {
            this.networkInterface = networkInterface;
        }
        /**
         * Detect the region from the application's environment.
         *
         * @returns Promise<string | null>
         */
        RegionDiscovery.prototype.detectRegion = function (environmentRegion, regionDiscoveryMetadata, proxyUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var autodetectedRegionName, options, localIMDSVersionResponse, currentIMDSVersion, currentIMDSVersionResponse;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            autodetectedRegionName = environmentRegion;
                            if (!!autodetectedRegionName) return [3 /*break*/, 8];
                            options = RegionDiscovery.IMDS_OPTIONS;
                            if (proxyUrl) {
                                options.proxyUrl = proxyUrl;
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 6, , 7]);
                            return [4 /*yield*/, this.getRegionFromIMDS(Constants.IMDS_VERSION, options)];
                        case 2:
                            localIMDSVersionResponse = _a.sent();
                            if (localIMDSVersionResponse.status === ResponseCodes.httpSuccess) {
                                autodetectedRegionName = localIMDSVersionResponse.body;
                                regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
                            }
                            if (!(localIMDSVersionResponse.status === ResponseCodes.httpBadRequest)) return [3 /*break*/, 5];
                            return [4 /*yield*/, this.getCurrentVersion(options)];
                        case 3:
                            currentIMDSVersion = _a.sent();
                            if (!currentIMDSVersion) {
                                regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
                                return [2 /*return*/, null];
                            }
                            return [4 /*yield*/, this.getRegionFromIMDS(currentIMDSVersion, options)];
                        case 4:
                            currentIMDSVersionResponse = _a.sent();
                            if (currentIMDSVersionResponse.status === ResponseCodes.httpSuccess) {
                                autodetectedRegionName = currentIMDSVersionResponse.body;
                                regionDiscoveryMetadata.region_source = RegionDiscoverySources.IMDS;
                            }
                            _a.label = 5;
                        case 5: return [3 /*break*/, 7];
                        case 6:
                            _a.sent();
                            regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
                            return [2 /*return*/, null];
                        case 7: return [3 /*break*/, 9];
                        case 8:
                            regionDiscoveryMetadata.region_source = RegionDiscoverySources.ENVIRONMENT_VARIABLE;
                            _a.label = 9;
                        case 9:
                            // If no region was auto detected from the environment or from the IMDS endpoint, mark the attempt as a FAILED_AUTO_DETECTION
                            if (!autodetectedRegionName) {
                                regionDiscoveryMetadata.region_source = RegionDiscoverySources.FAILED_AUTO_DETECTION;
                            }
                            return [2 /*return*/, autodetectedRegionName || null];
                    }
                });
            });
        };
        /**
         * Make the call to the IMDS endpoint
         *
         * @param imdsEndpointUrl
         * @returns Promise<NetworkResponse<string>>
         */
        RegionDiscovery.prototype.getRegionFromIMDS = function (version, options) {
            return __awaiter(this, void 0, void 0, function () {
                return __generator(this, function (_a) {
                    return [2 /*return*/, this.networkInterface.sendGetRequestAsync(Constants.IMDS_ENDPOINT + "?api-version=" + version + "&format=text", options, Constants.IMDS_TIMEOUT)];
                });
            });
        };
        /**
         * Get the most recent version of the IMDS endpoint available
         *
         * @returns Promise<string | null>
         */
        RegionDiscovery.prototype.getCurrentVersion = function (options) {
            return __awaiter(this, void 0, void 0, function () {
                var response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.networkInterface.sendGetRequestAsync(Constants.IMDS_ENDPOINT + "?format=json", options)];
                        case 1:
                            response = _a.sent();
                            // When IMDS endpoint is called without the api version query param, bad request response comes back with latest version.
                            if (response.status === ResponseCodes.httpBadRequest && response.body && response.body["newest-versions"] && response.body["newest-versions"].length > 0) {
                                return [2 /*return*/, response.body["newest-versions"][0]];
                            }
                            return [2 /*return*/, null];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, null];
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        // Options for the IMDS endpoint request
        RegionDiscovery.IMDS_OPTIONS = {
            headers: {
                Metadata: "true",
            },
        };
        return RegionDiscovery;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * The authority class validates the authority URIs used by the user, and retrieves the OpenID Configuration Data from the
     * endpoint. It will store the pertinent config data in this object for use during token calls.
     */
    var Authority = /** @class */ (function () {
        function Authority(authority, networkInterface, cacheManager, authorityOptions, proxyUrl) {
            this.canonicalAuthority = authority;
            this._canonicalAuthority.validateAsUri();
            this.networkInterface = networkInterface;
            this.cacheManager = cacheManager;
            this.authorityOptions = authorityOptions;
            this.regionDiscovery = new RegionDiscovery(networkInterface);
            this.regionDiscoveryMetadata = { region_used: undefined, region_source: undefined, region_outcome: undefined };
            this.proxyUrl = proxyUrl || Constants.EMPTY_STRING;
        }
        Object.defineProperty(Authority.prototype, "authorityType", {
            // See above for AuthorityType
            get: function () {
                var pathSegments = this.canonicalAuthorityUrlComponents.PathSegments;
                if (pathSegments.length && pathSegments[0].toLowerCase() === Constants.ADFS) {
                    return AuthorityType.Adfs;
                }
                return AuthorityType.Default;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "protocolMode", {
            /**
             * ProtocolMode enum representing the way endpoints are constructed.
             */
            get: function () {
                return this.authorityOptions.protocolMode;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "options", {
            /**
             * Returns authorityOptions which can be used to reinstantiate a new authority instance
             */
            get: function () {
                return this.authorityOptions;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "canonicalAuthority", {
            /**
             * A URL that is the authority set by the developer
             */
            get: function () {
                return this._canonicalAuthority.urlString;
            },
            /**
             * Sets canonical authority.
             */
            set: function (url) {
                this._canonicalAuthority = new UrlString(url);
                this._canonicalAuthority.validateAsUri();
                this._canonicalAuthorityUrlComponents = null;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "canonicalAuthorityUrlComponents", {
            /**
             * Get authority components.
             */
            get: function () {
                if (!this._canonicalAuthorityUrlComponents) {
                    this._canonicalAuthorityUrlComponents = this._canonicalAuthority.getUrlComponents();
                }
                return this._canonicalAuthorityUrlComponents;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "hostnameAndPort", {
            /**
             * Get hostname and port i.e. login.microsoftonline.com
             */
            get: function () {
                return this.canonicalAuthorityUrlComponents.HostNameAndPort.toLowerCase();
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "tenant", {
            /**
             * Get tenant for authority.
             */
            get: function () {
                return this.canonicalAuthorityUrlComponents.PathSegments[0];
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "authorizationEndpoint", {
            /**
             * OAuth /authorize endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    var endpoint = this.replacePath(this.metadata.authorization_endpoint);
                    return this.replaceTenant(endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "tokenEndpoint", {
            /**
             * OAuth /token endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    var endpoint = this.replacePath(this.metadata.token_endpoint);
                    return this.replaceTenant(endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "deviceCodeEndpoint", {
            get: function () {
                if (this.discoveryComplete()) {
                    var endpoint = this.replacePath(this.metadata.token_endpoint.replace("/token", "/devicecode"));
                    return this.replaceTenant(endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "endSessionEndpoint", {
            /**
             * OAuth logout endpoint for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    // ROPC policies may not have end_session_endpoint set
                    if (!this.metadata.end_session_endpoint) {
                        throw ClientAuthError.createLogoutNotSupportedError();
                    }
                    var endpoint = this.replacePath(this.metadata.end_session_endpoint);
                    return this.replaceTenant(endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(Authority.prototype, "selfSignedJwtAudience", {
            /**
             * OAuth issuer for requests
             */
            get: function () {
                if (this.discoveryComplete()) {
                    var endpoint = this.replacePath(this.metadata.issuer);
                    return this.replaceTenant(endpoint);
                }
                else {
                    throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
                }
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Replaces tenant in url path with current tenant. Defaults to common.
         * @param urlString
         */
        Authority.prototype.replaceTenant = function (urlString) {
            return urlString.replace(/{tenant}|{tenantid}/g, this.tenant);
        };
        /**
         * Replaces path such as tenant or policy with the current tenant or policy.
         * @param urlString
         */
        Authority.prototype.replacePath = function (urlString) {
            var endpoint = urlString;
            var cachedAuthorityUrl = new UrlString(this.metadata.canonical_authority);
            var cachedAuthorityParts = cachedAuthorityUrl.getUrlComponents().PathSegments;
            var currentAuthorityParts = this.canonicalAuthorityUrlComponents.PathSegments;
            currentAuthorityParts.forEach(function (currentPart, index) {
                var cachedPart = cachedAuthorityParts[index];
                if (currentPart !== cachedPart) {
                    endpoint = endpoint.replace("/" + cachedPart + "/", "/" + currentPart + "/");
                }
            });
            return endpoint;
        };
        Object.defineProperty(Authority.prototype, "defaultOpenIdConfigurationEndpoint", {
            /**
             * The default open id configuration endpoint for any canonical authority.
             */
            get: function () {
                if (this.authorityType === AuthorityType.Adfs || this.protocolMode === ProtocolMode.OIDC) {
                    return this.canonicalAuthority + ".well-known/openid-configuration";
                }
                return this.canonicalAuthority + "v2.0/.well-known/openid-configuration";
            },
            enumerable: false,
            configurable: true
        });
        /**
         * Boolean that returns whethr or not tenant discovery has been completed.
         */
        Authority.prototype.discoveryComplete = function () {
            return !!this.metadata;
        };
        /**
         * Perform endpoint discovery to discover aliases, preferred_cache, preferred_network
         * and the /authorize, /token and logout endpoints.
         */
        Authority.prototype.resolveEndpointsAsync = function () {
            return __awaiter(this, void 0, void 0, function () {
                var metadataEntity, cloudDiscoverySource, endpointSource, cacheKey;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            metadataEntity = this.cacheManager.getAuthorityMetadataByAlias(this.hostnameAndPort);
                            if (!metadataEntity) {
                                metadataEntity = new AuthorityMetadataEntity();
                                metadataEntity.updateCanonicalAuthority(this.canonicalAuthority);
                            }
                            return [4 /*yield*/, this.updateCloudDiscoveryMetadata(metadataEntity)];
                        case 1:
                            cloudDiscoverySource = _a.sent();
                            this.canonicalAuthority = this.canonicalAuthority.replace(this.hostnameAndPort, metadataEntity.preferred_network);
                            return [4 /*yield*/, this.updateEndpointMetadata(metadataEntity)];
                        case 2:
                            endpointSource = _a.sent();
                            if (cloudDiscoverySource !== AuthorityMetadataSource.CACHE && endpointSource !== AuthorityMetadataSource.CACHE) {
                                // Reset the expiration time unless both values came from a successful cache lookup
                                metadataEntity.resetExpiresAt();
                                metadataEntity.updateCanonicalAuthority(this.canonicalAuthority);
                            }
                            cacheKey = this.cacheManager.generateAuthorityMetadataCacheKey(metadataEntity.preferred_cache);
                            this.cacheManager.setAuthorityMetadata(cacheKey, metadataEntity);
                            this.metadata = metadataEntity;
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Update AuthorityMetadataEntity with new endpoints and return where the information came from
         * @param metadataEntity
         */
        Authority.prototype.updateEndpointMetadata = function (metadataEntity) {
            var _a;
            return __awaiter(this, void 0, void 0, function () {
                var metadata, autodetectedRegionName, azureRegion;
                return __generator(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            metadata = this.getEndpointMetadataFromConfig();
                            if (metadata) {
                                metadataEntity.updateEndpointMetadata(metadata, false);
                                return [2 /*return*/, AuthorityMetadataSource.CONFIG];
                            }
                            if (this.isAuthoritySameType(metadataEntity) && metadataEntity.endpointsFromNetwork && !metadataEntity.isExpired()) {
                                // No need to update
                                return [2 /*return*/, AuthorityMetadataSource.CACHE];
                            }
                            return [4 /*yield*/, this.getEndpointMetadataFromNetwork()];
                        case 1:
                            metadata = _b.sent();
                            if (!metadata) return [3 /*break*/, 4];
                            if (!((_a = this.authorityOptions.azureRegionConfiguration) === null || _a === void 0 ? void 0 : _a.azureRegion)) return [3 /*break*/, 3];
                            return [4 /*yield*/, this.regionDiscovery.detectRegion(this.authorityOptions.azureRegionConfiguration.environmentRegion, this.regionDiscoveryMetadata, this.proxyUrl)];
                        case 2:
                            autodetectedRegionName = _b.sent();
                            azureRegion = this.authorityOptions.azureRegionConfiguration.azureRegion === Constants.AZURE_REGION_AUTO_DISCOVER_FLAG
                                ? autodetectedRegionName
                                : this.authorityOptions.azureRegionConfiguration.azureRegion;
                            if (this.authorityOptions.azureRegionConfiguration.azureRegion === Constants.AZURE_REGION_AUTO_DISCOVER_FLAG) {
                                this.regionDiscoveryMetadata.region_outcome = autodetectedRegionName ?
                                    RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_SUCCESSFUL :
                                    RegionDiscoveryOutcomes.AUTO_DETECTION_REQUESTED_FAILED;
                            }
                            else {
                                if (autodetectedRegionName) {
                                    this.regionDiscoveryMetadata.region_outcome = (this.authorityOptions.azureRegionConfiguration.azureRegion === autodetectedRegionName) ?
                                        RegionDiscoveryOutcomes.CONFIGURED_MATCHES_DETECTED :
                                        RegionDiscoveryOutcomes.CONFIGURED_NOT_DETECTED;
                                }
                                else {
                                    this.regionDiscoveryMetadata.region_outcome = RegionDiscoveryOutcomes.CONFIGURED_NO_AUTO_DETECTION;
                                }
                            }
                            if (azureRegion) {
                                this.regionDiscoveryMetadata.region_used = azureRegion;
                                metadata = Authority.replaceWithRegionalInformation(metadata, azureRegion);
                            }
                            _b.label = 3;
                        case 3:
                            metadataEntity.updateEndpointMetadata(metadata, true);
                            return [2 /*return*/, AuthorityMetadataSource.NETWORK];
                        case 4: throw ClientAuthError.createUnableToGetOpenidConfigError(this.defaultOpenIdConfigurationEndpoint);
                    }
                });
            });
        };
        /**
         * Compares the number of url components after the domain to determine if the cached authority metadata can be used for the requested authority
         * Protects against same domain different authority such as login.microsoftonline.com/tenant and login.microsoftonline.com/tfp/tenant/policy
         * @param metadataEntity
         */
        Authority.prototype.isAuthoritySameType = function (metadataEntity) {
            var cachedAuthorityUrl = new UrlString(metadataEntity.canonical_authority);
            var cachedParts = cachedAuthorityUrl.getUrlComponents().PathSegments;
            return cachedParts.length === this.canonicalAuthorityUrlComponents.PathSegments.length;
        };
        /**
         * Parse authorityMetadata config option
         */
        Authority.prototype.getEndpointMetadataFromConfig = function () {
            if (this.authorityOptions.authorityMetadata) {
                try {
                    return JSON.parse(this.authorityOptions.authorityMetadata);
                }
                catch (e) {
                    throw ClientConfigurationError.createInvalidAuthorityMetadataError();
                }
            }
            return null;
        };
        /**
         * Gets OAuth endpoints from the given OpenID configuration endpoint.
         */
        Authority.prototype.getEndpointMetadataFromNetwork = function () {
            return __awaiter(this, void 0, void 0, function () {
                var options, response;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            options = {};
                            if (this.proxyUrl) {
                                options.proxyUrl = this.proxyUrl;
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.networkInterface.sendGetRequestAsync(this.defaultOpenIdConfigurationEndpoint, options)];
                        case 2:
                            response = _a.sent();
                            return [2 /*return*/, isOpenIdConfigResponse(response.body) ? response.body : null];
                        case 3:
                            _a.sent();
                            return [2 /*return*/, null];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Updates the AuthorityMetadataEntity with new aliases, preferred_network and preferred_cache and returns where the information was retrived from
         * @param cachedMetadata
         * @param newMetadata
         */
        Authority.prototype.updateCloudDiscoveryMetadata = function (metadataEntity) {
            return __awaiter(this, void 0, void 0, function () {
                var metadata;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            metadata = this.getCloudDiscoveryMetadataFromConfig();
                            if (metadata) {
                                metadataEntity.updateCloudDiscoveryMetadata(metadata, false);
                                return [2 /*return*/, AuthorityMetadataSource.CONFIG];
                            }
                            // If The cached metadata came from config but that config was not passed to this instance, we must go to the network
                            if (this.isAuthoritySameType(metadataEntity) && metadataEntity.aliasesFromNetwork && !metadataEntity.isExpired()) {
                                // No need to update
                                return [2 /*return*/, AuthorityMetadataSource.CACHE];
                            }
                            return [4 /*yield*/, this.getCloudDiscoveryMetadataFromNetwork()];
                        case 1:
                            metadata = _a.sent();
                            if (metadata) {
                                metadataEntity.updateCloudDiscoveryMetadata(metadata, true);
                                return [2 /*return*/, AuthorityMetadataSource.NETWORK];
                            }
                            else {
                                // Metadata could not be obtained from config, cache or network
                                throw ClientConfigurationError.createUntrustedAuthorityError();
                            }
                    }
                });
            });
        };
        /**
         * Parse cloudDiscoveryMetadata config or check knownAuthorities
         */
        Authority.prototype.getCloudDiscoveryMetadataFromConfig = function () {
            // Check if network response was provided in config
            if (this.authorityOptions.cloudDiscoveryMetadata) {
                try {
                    var parsedResponse = JSON.parse(this.authorityOptions.cloudDiscoveryMetadata);
                    var metadata = Authority.getCloudDiscoveryMetadataFromNetworkResponse(parsedResponse.metadata, this.hostnameAndPort);
                    if (metadata) {
                        return metadata;
                    }
                }
                catch (e) {
                    throw ClientConfigurationError.createInvalidCloudDiscoveryMetadataError();
                }
            }
            // If cloudDiscoveryMetadata is empty or does not contain the host, check knownAuthorities
            if (this.isInKnownAuthorities()) {
                return Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
            }
            return null;
        };
        /**
         * Called to get metadata from network if CloudDiscoveryMetadata was not populated by config
         * @param networkInterface
         */
        Authority.prototype.getCloudDiscoveryMetadataFromNetwork = function () {
            return __awaiter(this, void 0, void 0, function () {
                var instanceDiscoveryEndpoint, options, match, response, metadata;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            instanceDiscoveryEndpoint = "" + Constants.AAD_INSTANCE_DISCOVERY_ENDPT + this.canonicalAuthority + "oauth2/v2.0/authorize";
                            options = {};
                            if (this.proxyUrl) {
                                options.proxyUrl = this.proxyUrl;
                            }
                            match = null;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.networkInterface.sendGetRequestAsync(instanceDiscoveryEndpoint, options)];
                        case 2:
                            response = _a.sent();
                            metadata = isCloudInstanceDiscoveryResponse(response.body) ? response.body.metadata : [];
                            if (metadata.length === 0) {
                                // If no metadata is returned, authority is untrusted
                                return [2 /*return*/, null];
                            }
                            match = Authority.getCloudDiscoveryMetadataFromNetworkResponse(metadata, this.hostnameAndPort);
                            return [3 /*break*/, 4];
                        case 3:
                            _a.sent();
                            return [2 /*return*/, null];
                        case 4:
                            if (!match) {
                                // Custom Domain scenario, host is trusted because Instance Discovery call succeeded
                                match = Authority.createCloudDiscoveryMetadataFromHost(this.hostnameAndPort);
                            }
                            return [2 /*return*/, match];
                    }
                });
            });
        };
        /**
         * Helper function to determine if this host is included in the knownAuthorities config option
         */
        Authority.prototype.isInKnownAuthorities = function () {
            var _this = this;
            var matches = this.authorityOptions.knownAuthorities.filter(function (authority) {
                return UrlString.getDomainFromUrl(authority).toLowerCase() === _this.hostnameAndPort;
            });
            return matches.length > 0;
        };
        /**
         * helper function to populate the authority based on azureCloudOptions
         * @param authorityString
         * @param azureCloudOptions
         */
        Authority.generateAuthority = function (authorityString, azureCloudOptions) {
            var authorityAzureCloudInstance;
            if (azureCloudOptions && azureCloudOptions.azureCloudInstance !== AzureCloudInstance.None) {
                var tenant = azureCloudOptions.tenant ? azureCloudOptions.tenant : Constants.DEFAULT_COMMON_TENANT;
                authorityAzureCloudInstance = azureCloudOptions.azureCloudInstance + "/" + tenant + "/";
            }
            return authorityAzureCloudInstance ? authorityAzureCloudInstance : authorityString;
        };
        /**
         * Creates cloud discovery metadata object from a given host
         * @param host
         */
        Authority.createCloudDiscoveryMetadataFromHost = function (host) {
            return {
                preferred_network: host,
                preferred_cache: host,
                aliases: [host]
            };
        };
        /**
         * Searches instance discovery network response for the entry that contains the host in the aliases list
         * @param response
         * @param authority
         */
        Authority.getCloudDiscoveryMetadataFromNetworkResponse = function (response, authority) {
            for (var i = 0; i < response.length; i++) {
                var metadata = response[i];
                if (metadata.aliases.indexOf(authority) > -1) {
                    return metadata;
                }
            }
            return null;
        };
        /**
         * helper function to generate environment from authority object
         */
        Authority.prototype.getPreferredCache = function () {
            if (this.discoveryComplete()) {
                return this.metadata.preferred_cache;
            }
            else {
                throw ClientAuthError.createEndpointDiscoveryIncompleteError("Discovery incomplete.");
            }
        };
        /**
         * Returns whether or not the provided host is an alias of this authority instance
         * @param host
         */
        Authority.prototype.isAlias = function (host) {
            return this.metadata.aliases.indexOf(host) > -1;
        };
        /**
         * Checks whether the provided host is that of a public cloud authority
         *
         * @param authority string
         * @returns bool
         */
        Authority.isPublicCloudAuthority = function (host) {
            return Constants.KNOWN_PUBLIC_CLOUDS.indexOf(host) >= 0;
        };
        /**
         * Rebuild the authority string with the region
         *
         * @param host string
         * @param region string
         */
        Authority.buildRegionalAuthorityString = function (host, region, queryString) {
            // Create and validate a Url string object with the initial authority string
            var authorityUrlInstance = new UrlString(host);
            authorityUrlInstance.validateAsUri();
            var authorityUrlParts = authorityUrlInstance.getUrlComponents();
            var hostNameAndPort = region + "." + authorityUrlParts.HostNameAndPort;
            if (this.isPublicCloudAuthority(authorityUrlParts.HostNameAndPort)) {
                hostNameAndPort = region + "." + Constants.REGIONAL_AUTH_PUBLIC_CLOUD_SUFFIX;
            }
            // Include the query string portion of the url
            var url = UrlString.constructAuthorityUriFromObject(__assign(__assign({}, authorityUrlInstance.getUrlComponents()), { HostNameAndPort: hostNameAndPort })).urlString;
            // Add the query string if a query string was provided
            if (queryString)
                return url + "?" + queryString;
            return url;
        };
        /**
         * Replace the endpoints in the metadata object with their regional equivalents.
         *
         * @param metadata OpenIdConfigResponse
         * @param azureRegion string
         */
        Authority.replaceWithRegionalInformation = function (metadata, azureRegion) {
            metadata.authorization_endpoint = Authority.buildRegionalAuthorityString(metadata.authorization_endpoint, azureRegion);
            // TODO: Enquire on whether we should leave the query string or remove it before releasing the feature
            metadata.token_endpoint = Authority.buildRegionalAuthorityString(metadata.token_endpoint, azureRegion, "allowestsrnonmsi=true");
            if (metadata.end_session_endpoint) {
                metadata.end_session_endpoint = Authority.buildRegionalAuthorityString(metadata.end_session_endpoint, azureRegion);
            }
            return metadata;
        };
        return Authority;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var AuthorityFactory = /** @class */ (function () {
        function AuthorityFactory() {
        }
        /**
         * Create an authority object of the correct type based on the url
         * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
         *
         * Also performs endpoint discovery.
         *
         * @param authorityUri
         * @param networkClient
         * @param protocolMode
         */
        AuthorityFactory.createDiscoveredInstance = function (authorityUri, networkClient, cacheManager, authorityOptions, proxyUrl) {
            return __awaiter(this, void 0, void 0, function () {
                var acquireTokenAuthority, e_1;
                return __generator(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            acquireTokenAuthority = AuthorityFactory.createInstance(authorityUri, networkClient, cacheManager, authorityOptions, proxyUrl);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, acquireTokenAuthority.resolveEndpointsAsync()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, acquireTokenAuthority];
                        case 3:
                            e_1 = _a.sent();
                            throw ClientAuthError.createEndpointDiscoveryIncompleteError(e_1);
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Create an authority object of the correct type based on the url
         * Performs basic authority validation - checks to see if the authority is of a valid type (i.e. aad, b2c, adfs)
         *
         * Does not perform endpoint discovery.
         *
         * @param authorityUrl
         * @param networkInterface
         * @param protocolMode
         */
        AuthorityFactory.createInstance = function (authorityUrl, networkInterface, cacheManager, authorityOptions, proxyUrl) {
            // Throw error if authority url is empty
            if (StringUtils.isEmpty(authorityUrl)) {
                throw ClientConfigurationError.createUrlEmptyError();
            }
            return new Authority(authorityUrl, networkInterface, cacheManager, authorityOptions, proxyUrl);
        };
        return AuthorityFactory;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var ServerTelemetryEntity = /** @class */ (function () {
        function ServerTelemetryEntity() {
            this.failedRequests = [];
            this.errors = [];
            this.cacheHits = 0;
        }
        /**
         * validates if a given cache entry is "Telemetry", parses <key,value>
         * @param key
         * @param entity
         */
        ServerTelemetryEntity.isServerTelemetryEntity = function (key, entity) {
            var validateKey = key.indexOf(SERVER_TELEM_CONSTANTS.CACHE_KEY) === 0;
            var validateEntity = true;
            if (entity) {
                validateEntity =
                    entity.hasOwnProperty("failedRequests") &&
                        entity.hasOwnProperty("errors") &&
                        entity.hasOwnProperty("cacheHits");
            }
            return validateKey && validateEntity;
        };
        return ServerTelemetryEntity;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var ThrottlingEntity = /** @class */ (function () {
        function ThrottlingEntity() {
        }
        /**
         * validates if a given cache entry is "Throttling", parses <key,value>
         * @param key
         * @param entity
         */
        ThrottlingEntity.isThrottlingEntity = function (key, entity) {
            var validateKey = false;
            if (key) {
                validateKey = key.indexOf(ThrottlingConstants.THROTTLING_PREFIX) === 0;
            }
            var validateEntity = true;
            if (entity) {
                validateEntity = entity.hasOwnProperty("throttleTime");
            }
            return validateKey && validateEntity;
        };
        return ThrottlingEntity;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var StubbedNetworkModule = {
        sendGetRequestAsync: function () {
            var notImplErr = "Network interface - sendGetRequestAsync() has not been implemented for the Network interface.";
            return Promise.reject(AuthError.createUnexpectedError(notImplErr));
        },
        sendPostRequestAsync: function () {
            var notImplErr = "Network interface - sendPostRequestAsync() has not been implemented for the Network interface.";
            return Promise.reject(AuthError.createUnexpectedError(notImplErr));
        }
    };

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * ClientAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var JoseHeaderErrorMessage = {
        missingKidError: {
            code: "missing_kid_error",
            desc: "The JOSE Header for the requested JWT, JWS or JWK object requires a keyId to be configured as the 'kid' header claim. No 'kid' value was provided."
        },
        missingAlgError: {
            code: "missing_alg_error",
            desc: "The JOSE Header for the requested JWT, JWS or JWK object requires an algorithm to be specified as the 'alg' header claim. No 'alg' value was provided."
        },
    };
    /**
     * Error thrown when there is an error in the client code running on the browser.
     */
    var JoseHeaderError = /** @class */ (function (_super) {
        __extends(JoseHeaderError, _super);
        function JoseHeaderError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "JoseHeaderError";
            Object.setPrototypeOf(_this, JoseHeaderError.prototype);
            return _this;
        }
        /**
         * Creates an error thrown when keyId isn't set on JOSE header.
         */
        JoseHeaderError.createMissingKidError = function () {
            return new JoseHeaderError(JoseHeaderErrorMessage.missingKidError.code, JoseHeaderErrorMessage.missingKidError.desc);
        };
        /**
         * Creates an error thrown when algorithm isn't set on JOSE header.
         */
        JoseHeaderError.createMissingAlgError = function () {
            return new JoseHeaderError(JoseHeaderErrorMessage.missingAlgError.code, JoseHeaderErrorMessage.missingAlgError.desc);
        };
        return JoseHeaderError;
    }(AuthError));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var JoseHeader = /** @class */ (function () {
        function JoseHeader(options) {
            this.typ = options.typ;
            this.alg = options.alg;
            this.kid = options.kid;
        }
        /**
         * Builds SignedHttpRequest formatted JOSE Header from the
         * JOSE Header options provided or previously set on the object and returns
         * the stringified header object.
         * Throws if keyId or algorithm aren't provided since they are required for Access Token Binding.
         * @param shrHeaderOptions
         * @returns
         */
        JoseHeader.getShrHeaderString = function (shrHeaderOptions) {
            // KeyID is required on the SHR header
            if (!shrHeaderOptions.kid) {
                throw JoseHeaderError.createMissingKidError();
            }
            // Alg is required on the SHR header
            if (!shrHeaderOptions.alg) {
                throw JoseHeaderError.createMissingAlgError();
            }
            var shrHeader = new JoseHeader({
                // Access Token PoP headers must have type JWT, but the type header can be overriden for special cases
                typ: shrHeaderOptions.typ || JsonTypes.Jwt,
                kid: shrHeaderOptions.kid,
                alg: shrHeaderOptions.alg
            });
            return JSON.stringify(shrHeader);
        };
        return JoseHeader;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var ServerTelemetryManager = /** @class */ (function () {
        function ServerTelemetryManager(telemetryRequest, cacheManager) {
            this.cacheOutcome = CacheOutcome.NO_CACHE_HIT;
            this.cacheManager = cacheManager;
            this.apiId = telemetryRequest.apiId;
            this.correlationId = telemetryRequest.correlationId;
            this.wrapperSKU = telemetryRequest.wrapperSKU || Constants.EMPTY_STRING;
            this.wrapperVer = telemetryRequest.wrapperVer || Constants.EMPTY_STRING;
            this.telemetryCacheKey = SERVER_TELEM_CONSTANTS.CACHE_KEY + Separators.CACHE_KEY_SEPARATOR + telemetryRequest.clientId;
        }
        /**
         * API to add MSER Telemetry to request
         */
        ServerTelemetryManager.prototype.generateCurrentRequestHeaderValue = function () {
            var request = "" + this.apiId + SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR + this.cacheOutcome;
            var platformFields = [this.wrapperSKU, this.wrapperVer].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
            var regionDiscoveryFields = this.getRegionDiscoveryFields();
            var requestWithRegionDiscoveryFields = [request, regionDiscoveryFields].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
            return [SERVER_TELEM_CONSTANTS.SCHEMA_VERSION, requestWithRegionDiscoveryFields, platformFields].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
        };
        /**
         * API to add MSER Telemetry for the last failed request
         */
        ServerTelemetryManager.prototype.generateLastRequestHeaderValue = function () {
            var lastRequests = this.getLastRequests();
            var maxErrors = ServerTelemetryManager.maxErrorsToSend(lastRequests);
            var failedRequests = lastRequests.failedRequests.slice(0, 2 * maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
            var errors = lastRequests.errors.slice(0, maxErrors).join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
            var errorCount = lastRequests.errors.length;
            // Indicate whether this header contains all data or partial data
            var overflow = maxErrors < errorCount ? SERVER_TELEM_CONSTANTS.OVERFLOW_TRUE : SERVER_TELEM_CONSTANTS.OVERFLOW_FALSE;
            var platformFields = [errorCount, overflow].join(SERVER_TELEM_CONSTANTS.VALUE_SEPARATOR);
            return [SERVER_TELEM_CONSTANTS.SCHEMA_VERSION, lastRequests.cacheHits, failedRequests, errors, platformFields].join(SERVER_TELEM_CONSTANTS.CATEGORY_SEPARATOR);
        };
        /**
         * API to cache token failures for MSER data capture
         * @param error
         */
        ServerTelemetryManager.prototype.cacheFailedRequest = function (error) {
            var lastRequests = this.getLastRequests();
            if (lastRequests.errors.length >= SERVER_TELEM_CONSTANTS.MAX_CACHED_ERRORS) {
                // Remove a cached error to make room, first in first out
                lastRequests.failedRequests.shift(); // apiId
                lastRequests.failedRequests.shift(); // correlationId
                lastRequests.errors.shift();
            }
            lastRequests.failedRequests.push(this.apiId, this.correlationId);
            if (!StringUtils.isEmpty(error.subError)) {
                lastRequests.errors.push(error.subError);
            }
            else if (!StringUtils.isEmpty(error.errorCode)) {
                lastRequests.errors.push(error.errorCode);
            }
            else if (!!error && error.toString()) {
                lastRequests.errors.push(error.toString());
            }
            else {
                lastRequests.errors.push(SERVER_TELEM_CONSTANTS.UNKNOWN_ERROR);
            }
            this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
            return;
        };
        /**
         * Update server telemetry cache entry by incrementing cache hit counter
         */
        ServerTelemetryManager.prototype.incrementCacheHits = function () {
            var lastRequests = this.getLastRequests();
            lastRequests.cacheHits += 1;
            this.cacheManager.setServerTelemetry(this.telemetryCacheKey, lastRequests);
            return lastRequests.cacheHits;
        };
        /**
         * Get the server telemetry entity from cache or initialize a new one
         */
        ServerTelemetryManager.prototype.getLastRequests = function () {
            var initialValue = new ServerTelemetryEntity();
            var lastRequests = this.cacheManager.getServerTelemetry(this.telemetryCacheKey);
            return lastRequests || initialValue;
        };
        /**
         * Remove server telemetry cache entry
         */
        ServerTelemetryManager.prototype.clearTelemetryCache = function () {
            var lastRequests = this.getLastRequests();
            var numErrorsFlushed = ServerTelemetryManager.maxErrorsToSend(lastRequests);
            var errorCount = lastRequests.errors.length;
            if (numErrorsFlushed === errorCount) {
                // All errors were sent on last request, clear Telemetry cache
                this.cacheManager.removeItem(this.telemetryCacheKey);
            }
            else {
                // Partial data was flushed to server, construct a new telemetry cache item with errors that were not flushed
                var serverTelemEntity = new ServerTelemetryEntity();
                serverTelemEntity.failedRequests = lastRequests.failedRequests.slice(numErrorsFlushed * 2); // failedRequests contains 2 items for each error
                serverTelemEntity.errors = lastRequests.errors.slice(numErrorsFlushed);
                this.cacheManager.setServerTelemetry(this.telemetryCacheKey, serverTelemEntity);
            }
        };
        /**
         * Returns the maximum number of errors that can be flushed to the server in the next network request
         * @param serverTelemetryEntity
         */
        ServerTelemetryManager.maxErrorsToSend = function (serverTelemetryEntity) {
            var i;
            var maxErrors = 0;
            var dataSize = 0;
            var errorCount = serverTelemetryEntity.errors.length;
            for (i = 0; i < errorCount; i++) {
                // failedRequests parameter contains pairs of apiId and correlationId, multiply index by 2 to preserve pairs
                var apiId = serverTelemetryEntity.failedRequests[2 * i] || Constants.EMPTY_STRING;
                var correlationId = serverTelemetryEntity.failedRequests[2 * i + 1] || Constants.EMPTY_STRING;
                var errorCode = serverTelemetryEntity.errors[i] || Constants.EMPTY_STRING;
                // Count number of characters that would be added to header, each character is 1 byte. Add 3 at the end to account for separators
                dataSize += apiId.toString().length + correlationId.toString().length + errorCode.length + 3;
                if (dataSize < SERVER_TELEM_CONSTANTS.MAX_LAST_HEADER_BYTES) {
                    // Adding this entry to the header would still keep header size below the limit
                    maxErrors += 1;
                }
                else {
                    break;
                }
            }
            return maxErrors;
        };
        /**
         * Get the region discovery fields
         *
         * @returns string
         */
        ServerTelemetryManager.prototype.getRegionDiscoveryFields = function () {
            var regionDiscoveryFields = [];
            regionDiscoveryFields.push(this.regionUsed || Constants.EMPTY_STRING);
            regionDiscoveryFields.push(this.regionSource || Constants.EMPTY_STRING);
            regionDiscoveryFields.push(this.regionOutcome || Constants.EMPTY_STRING);
            return regionDiscoveryFields.join(",");
        };
        /**
         * Update the region discovery metadata
         *
         * @param regionDiscoveryMetadata
         * @returns void
         */
        ServerTelemetryManager.prototype.updateRegionDiscoveryMetadata = function (regionDiscoveryMetadata) {
            this.regionUsed = regionDiscoveryMetadata.region_used;
            this.regionSource = regionDiscoveryMetadata.region_source;
            this.regionOutcome = regionDiscoveryMetadata.region_outcome;
        };
        /**
         * Set cache outcome
         */
        ServerTelemetryManager.prototype.setCacheOutcome = function (cacheOutcome) {
            this.cacheOutcome = cacheOutcome;
        };
        return ServerTelemetryManager;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Enumeration of operations that are instrumented by have their performance measured by the PerformanceClient.
     *
     * @export
     * @enum {number}
     */
    var PerformanceEvents;
    (function (PerformanceEvents) {
        /**
         * acquireTokenByCode API (msal-browser and msal-node).
         * Used to acquire tokens by trading an authorization code against the token endpoint.
         */
        PerformanceEvents["AcquireTokenByCode"] = "acquireTokenByCode";
        /**
         * acquireTokenByRefreshToken API (msal-browser and msal-node).
         * Used to renew an access token using a refresh token against the token endpoint.
         */
        PerformanceEvents["AcquireTokenByRefreshToken"] = "acquireTokenByRefreshToken";
        /**
         * acquireTokenSilent API (msal-browser and msal-node).
         * Used to silently acquire a new access token (from the cache or the network).
         */
        PerformanceEvents["AcquireTokenSilent"] = "acquireTokenSilent";
        /**
         * acquireTokenSilentAsync (msal-browser).
         * Internal API for acquireTokenSilent.
         */
        PerformanceEvents["AcquireTokenSilentAsync"] = "acquireTokenSilentAsync";
        /**
         * acquireTokenPopup (msal-browser).
         * Used to acquire a new access token interactively through pop ups
         */
        PerformanceEvents["AcquireTokenPopup"] = "acquireTokenPopup";
        /**
         * getPublicKeyThumbprint API in CryptoOpts class (msal-browser).
         * Used to generate a public/private keypair and generate a public key thumbprint for pop requests.
         */
        PerformanceEvents["CryptoOptsGetPublicKeyThumbprint"] = "cryptoOptsGetPublicKeyThumbprint";
        /**
         * signJwt API in CryptoOpts class (msal-browser).
         * Used to signed a pop token.
         */
        PerformanceEvents["CryptoOptsSignJwt"] = "cryptoOptsSignJwt";
        /**
         * acquireToken API in the SilentCacheClient class (msal-browser).
         * Used to read access tokens from the cache.
         */
        PerformanceEvents["SilentCacheClientAcquireToken"] = "silentCacheClientAcquireToken";
        /**
         * acquireToken API in the SilentIframeClient class (msal-browser).
         * Used to acquire a new set of tokens from the authorize endpoint in a hidden iframe.
         */
        PerformanceEvents["SilentIframeClientAcquireToken"] = "silentIframeClientAcquireToken";
        /**
         * acquireToken API in SilentRereshClient (msal-browser).
         * Used to acquire a new set of tokens from the token endpoint using a refresh token.
         */
        PerformanceEvents["SilentRefreshClientAcquireToken"] = "silentRefreshClientAcquireToken";
        /**
         * ssoSilent API (msal-browser).
         * Used to silently acquire an authorization code and set of tokens using a hidden iframe.
         */
        PerformanceEvents["SsoSilent"] = "ssoSilent";
        /**
         * getDiscoveredAuthority API in StandardInteractionClient class (msal-browser).
         * Used to load authority metadata for a request.
         */
        PerformanceEvents["StandardInteractionClientGetDiscoveredAuthority"] = "standardInteractionClientGetDiscoveredAuthority";
        /**
         * acquireToken APIs in msal-browser.
         * Used to make an /authorize endpoint call with native brokering enabled.
         */
        PerformanceEvents["FetchAccountIdWithNativeBroker"] = "fetchAccountIdWithNativeBroker";
        /**
         * acquireToken API in NativeInteractionClient class (msal-browser).
         * Used to acquire a token from Native component when native brokering is enabled.
         */
        PerformanceEvents["NativeInteractionClientAcquireToken"] = "nativeInteractionClientAcquireToken";
    })(PerformanceEvents || (PerformanceEvents = {}));
    /**
     * State of the performance event.
     *
     * @export
     * @enum {number}
     */
    var PerformanceEventStatus;
    (function (PerformanceEventStatus) {
        PerformanceEventStatus[PerformanceEventStatus["NotStarted"] = 0] = "NotStarted";
        PerformanceEventStatus[PerformanceEventStatus["InProgress"] = 1] = "InProgress";
        PerformanceEventStatus[PerformanceEventStatus["Completed"] = 2] = "Completed";
    })(PerformanceEventStatus || (PerformanceEventStatus = {}));

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var PerformanceClient = /** @class */ (function () {
        /**
         * Creates an instance of PerformanceClient,
         * an abstract class containing core performance telemetry logic.
         *
         * @constructor
         * @param {string} clientId Client ID of the application
         * @param {string} authority Authority used by the application
         * @param {Logger} logger Logger used by the application
         * @param {string} libraryName Name of the library
         * @param {string} libraryVersion Version of the library
         */
        function PerformanceClient(clientId, authority, logger, libraryName, libraryVersion, applicationTelemetry) {
            this.authority = authority;
            this.libraryName = libraryName;
            this.libraryVersion = libraryVersion;
            this.applicationTelemetry = applicationTelemetry;
            this.clientId = clientId;
            this.logger = logger;
            this.callbacks = new Map();
            this.eventsByCorrelationId = new Map();
            this.measurementsById = new Map();
        }
        /**
         * Starts measuring performance for a given operation. Returns a function that should be used to end the measurement.
         *
         * @param {PerformanceEvents} measureName
         * @param {?string} [correlationId]
         * @returns {InProgressPerformanceEvent}
         */
        PerformanceClient.prototype.startMeasurement = function (measureName, correlationId) {
            var _this = this;
            var _a, _b;
            // Generate a placeholder correlation if the request does not provide one
            var eventCorrelationId = correlationId || this.generateId();
            if (!correlationId) {
                this.logger.info("PerformanceClient: No correlation id provided for " + measureName + ", generating", eventCorrelationId);
            }
            this.logger.trace("PerformanceClient: Performance measurement started for " + measureName, eventCorrelationId);
            var performanceMeasurement = this.startPerformanceMeasuremeant(measureName, eventCorrelationId);
            performanceMeasurement.startMeasurement();
            var inProgressEvent = {
                eventId: this.generateId(),
                status: PerformanceEventStatus.InProgress,
                authority: this.authority,
                libraryName: this.libraryName,
                libraryVersion: this.libraryVersion,
                appName: (_a = this.applicationTelemetry) === null || _a === void 0 ? void 0 : _a.appName,
                appVersion: (_b = this.applicationTelemetry) === null || _b === void 0 ? void 0 : _b.appVersion,
                clientId: this.clientId,
                name: measureName,
                startTimeMs: Date.now(),
                correlationId: eventCorrelationId
            };
            // Store in progress events so they can be discarded if not ended properly
            this.cacheEventByCorrelationId(inProgressEvent);
            this.cacheMeasurement(inProgressEvent, performanceMeasurement);
            // Return the event and functions the caller can use to properly end/flush the measurement
            return {
                endMeasurement: function (event) {
                    var completedEvent = _this.endMeasurement(__assign(__assign({}, inProgressEvent), event));
                    if (completedEvent) {
                        // Cache event so that submeasurements can be added downstream
                        _this.cacheEventByCorrelationId(completedEvent);
                    }
                    return completedEvent;
                },
                flushMeasurement: function () {
                    return _this.flushMeasurements(inProgressEvent.name, inProgressEvent.correlationId);
                },
                discardMeasurement: function () {
                    return _this.discardMeasurements(inProgressEvent.correlationId);
                },
                measurement: performanceMeasurement,
                event: inProgressEvent
            };
        };
        /**
         * Stops measuring the performance for an operation. Should only be called directly by PerformanceClient classes,
         * as consumers should instead use the function returned by startMeasurement.
         *
         * @param {PerformanceEvent} event
         * @returns {(PerformanceEvent | null)}
         */
        PerformanceClient.prototype.endMeasurement = function (event) {
            var performanceMeasurement = this.measurementsById.get(event.eventId);
            if (performanceMeasurement) {
                // Immediately delete so that the same event isnt ended twice
                this.measurementsById.delete(event.eventId);
                performanceMeasurement.endMeasurement();
                var durationMs = performanceMeasurement.flushMeasurement();
                // null indicates no measurement was taken (e.g. needed performance APIs not present)
                if (durationMs !== null) {
                    this.logger.trace("PerformanceClient: Performance measurement ended for " + event.name + ": " + durationMs + " ms", event.correlationId);
                    var completedEvent = __assign(__assign({ 
                        // Allow duration to be overwritten when event ends (e.g. testing), but not status
                        durationMs: Math.round(durationMs) }, event), { status: PerformanceEventStatus.Completed });
                    return completedEvent;
                }
                else {
                    this.logger.trace("PerformanceClient: Performance measurement not taken", event.correlationId);
                }
            }
            else {
                this.logger.trace("PerformanceClient: Measurement not found for " + event.eventId, event.correlationId);
            }
            return null;
        };
        /**
         * Upserts event into event cache.
         * First key is the correlation id, second key is the event id.
         * Allows for events to be grouped by correlation id,
         * and to easily allow for properties on them to be updated.
         *
         * @private
         * @param {PerformanceEvent} event
         */
        PerformanceClient.prototype.cacheEventByCorrelationId = function (event) {
            var existingEvents = this.eventsByCorrelationId.get(event.correlationId);
            if (existingEvents) {
                this.logger.trace("PerformanceClient: Performance measurement for " + event.name + " added/updated", event.correlationId);
                existingEvents.set(event.eventId, event);
            }
            else {
                this.logger.trace("PerformanceClient: Performance measurement for " + event.name + " started", event.correlationId);
                this.eventsByCorrelationId.set(event.correlationId, new Map().set(event.eventId, event));
            }
        };
        /**
         * Cache measurements by their id.
         *
         * @private
         * @param {PerformanceEvent} event
         * @param {IPerformanceMeasurement} measurement
         */
        PerformanceClient.prototype.cacheMeasurement = function (event, measurement) {
            this.measurementsById.set(event.eventId, measurement);
        };
        /**
         * Gathers and emits performance events for measurements taked for the given top-level API and correlation ID.
         *
         * @param {PerformanceEvents} measureName
         * @param {string} correlationId
         */
        PerformanceClient.prototype.flushMeasurements = function (measureName, correlationId) {
            var _this = this;
            this.logger.trace("PerformanceClient: Performance measurements flushed for " + measureName, correlationId);
            var eventsForCorrelationId = this.eventsByCorrelationId.get(correlationId);
            if (eventsForCorrelationId) {
                this.discardMeasurements(correlationId);
                /*
                 * Manually end incomplete submeasurements to ensure there arent orphaned/never ending events.
                 * Incomplete submeasurements are likely an instrumentation bug that should be fixed.
                 * IE only supports Map.forEach.
                 */
                var completedEvents_1 = [];
                eventsForCorrelationId.forEach(function (event) {
                    if (event.name !== measureName && event.status !== PerformanceEventStatus.Completed) {
                        _this.logger.trace("PerformanceClient: Incomplete submeasurement " + event.name + " found for " + measureName, correlationId);
                        var completedEvent = _this.endMeasurement(event);
                        if (completedEvent) {
                            completedEvents_1.push(completedEvent);
                        }
                    }
                    completedEvents_1.push(event);
                });
                // Sort events by start time (earliest first)
                var sortedCompletedEvents = completedEvents_1.sort(function (eventA, eventB) { return eventA.startTimeMs - eventB.startTimeMs; });
                // Take completed top level event and add completed submeasurements durations as properties
                var topLevelEvents = sortedCompletedEvents.filter(function (event) { return event.name === measureName && event.status === PerformanceEventStatus.Completed; });
                if (topLevelEvents.length > 0) {
                    /*
                     * Only take the first top-level event if there are multiple events with the same correlation id.
                     * This greatly simplifies logic for submeasurements.
                     */
                    if (topLevelEvents.length > 1) {
                        this.logger.verbose("PerformanceClient: Multiple distinct top-level performance events found, using the first", correlationId);
                    }
                    var topLevelEvent = topLevelEvents[0];
                    this.logger.verbose("PerformanceClient: Measurement found for " + measureName, correlationId);
                    // Build event object with top level and sub measurements
                    var eventToEmit = sortedCompletedEvents.reduce(function (previous, current) {
                        if (current.name !== measureName) {
                            _this.logger.trace("PerformanceClient: Complete submeasurement found for " + current.name, correlationId);
                            // TODO: Emit additional properties for each subMeasurement
                            var subMeasurementName = current.name + "DurationMs";
                            /*
                             * Some code paths, such as resolving an authority, can occur multiple times.
                             * Only take the first measurement, since the second could be read from the cache,
                             * or due to the same correlation id being used for two distinct requests.
                             */
                            if (!previous[subMeasurementName]) {
                                previous[subMeasurementName] = current.durationMs;
                            }
                            else {
                                _this.logger.verbose("PerformanceClient: Submeasurement for " + measureName + " already exists for " + current.name + ", ignoring", correlationId);
                            }
                        }
                        return previous;
                    }, topLevelEvent);
                    this.emitEvents([eventToEmit], eventToEmit.correlationId);
                }
                else {
                    this.logger.verbose("PerformanceClient: No completed top-level measurements found for " + measureName, correlationId);
                }
            }
            else {
                this.logger.verbose("PerformanceClient: No measurements found", correlationId);
            }
        };
        /**
         * Removes measurements for a given correlation id.
         *
         * @param {string} correlationId
         */
        PerformanceClient.prototype.discardMeasurements = function (correlationId) {
            this.logger.trace("PerformanceClient: Performance measurements discarded", correlationId);
            this.eventsByCorrelationId.delete(correlationId);
        };
        /**
         * Registers a callback function to receive performance events.
         *
         * @param {PerformanceCallbackFunction} callback
         * @returns {string}
         */
        PerformanceClient.prototype.addPerformanceCallback = function (callback) {
            var callbackId = this.generateId();
            this.callbacks.set(callbackId, callback);
            this.logger.verbose("PerformanceClient: Performance callback registered with id: " + callbackId);
            return callbackId;
        };
        /**
         * Removes a callback registered with addPerformanceCallback.
         *
         * @param {string} callbackId
         * @returns {boolean}
         */
        PerformanceClient.prototype.removePerformanceCallback = function (callbackId) {
            var result = this.callbacks.delete(callbackId);
            if (result) {
                this.logger.verbose("PerformanceClient: Performance callback " + callbackId + " removed.");
            }
            else {
                this.logger.verbose("PerformanceClient: Performance callback " + callbackId + " not removed.");
            }
            return result;
        };
        /**
         * Emits events to all registered callbacks.
         *
         * @param {PerformanceEvent[]} events
         * @param {?string} [correlationId]
         */
        PerformanceClient.prototype.emitEvents = function (events, correlationId) {
            var _this = this;
            this.logger.verbose("PerformanceClient: Emitting performance events", correlationId);
            this.callbacks.forEach(function (callback, callbackId) {
                _this.logger.trace("PerformanceClient: Emitting event to callback " + callbackId, correlationId);
                callback.apply(null, [events]);
            });
        };
        return PerformanceClient;
    }());

    /*! @azure/msal-common v7.0.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var StubPerformanceMeasurement = /** @class */ (function () {
        function StubPerformanceMeasurement() {
        }
        /* eslint-disable-next-line @typescript-eslint/no-empty-function */
        StubPerformanceMeasurement.prototype.startMeasurement = function () { };
        /* eslint-disable-next-line @typescript-eslint/no-empty-function */
        StubPerformanceMeasurement.prototype.endMeasurement = function () { };
        StubPerformanceMeasurement.prototype.flushMeasurement = function () {
            return null;
        };
        return StubPerformanceMeasurement;
    }());
    var StubPerformanceClient = /** @class */ (function (_super) {
        __extends(StubPerformanceClient, _super);
        function StubPerformanceClient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        StubPerformanceClient.prototype.generateId = function () {
            return "callback-id";
        };
        StubPerformanceClient.prototype.startPerformanceMeasuremeant = function () {
            return new StubPerformanceMeasurement();
        };
        return StubPerformanceClient;
    }(PerformanceClient));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var BrowserAuthErrorMessage = {
        pkceNotGenerated: {
            code: "pkce_not_created",
            desc: "The PKCE code challenge and verifier could not be generated."
        },
        cryptoDoesNotExist: {
            code: "crypto_nonexistent",
            desc: "The crypto object or function is not available."
        },
        httpMethodNotImplementedError: {
            code: "http_method_not_implemented",
            desc: "The HTTP method given has not been implemented in this library."
        },
        emptyNavigateUriError: {
            code: "empty_navigate_uri",
            desc: "Navigation URI is empty. Please check stack trace for more info."
        },
        hashEmptyError: {
            code: "hash_empty_error",
            desc: "Hash value cannot be processed because it is empty. Please verify that your redirectUri is not clearing the hash. For more visit: aka.ms/msaljs/browser-errors."
        },
        hashDoesNotContainStateError: {
            code: "no_state_in_hash",
            desc: "Hash does not contain state. Please verify that the request originated from msal."
        },
        hashDoesNotContainKnownPropertiesError: {
            code: "hash_does_not_contain_known_properties",
            desc: "Hash does not contain known properites. Please verify that your redirectUri is not changing the hash. For more visit: aka.ms/msaljs/browser-errors."
        },
        unableToParseStateError: {
            code: "unable_to_parse_state",
            desc: "Unable to parse state. Please verify that the request originated from msal."
        },
        stateInteractionTypeMismatchError: {
            code: "state_interaction_type_mismatch",
            desc: "Hash contains state but the interaction type does not match the caller."
        },
        interactionInProgress: {
            code: "interaction_in_progress",
            desc: "Interaction is currently in progress. Please ensure that this interaction has been completed before calling an interactive API.  For more visit: aka.ms/msaljs/browser-errors."
        },
        popupWindowError: {
            code: "popup_window_error",
            desc: "Error opening popup window. This can happen if you are using IE or if popups are blocked in the browser."
        },
        emptyWindowError: {
            code: "empty_window_error",
            desc: "window.open returned null or undefined window object."
        },
        userCancelledError: {
            code: "user_cancelled",
            desc: "User cancelled the flow."
        },
        monitorPopupTimeoutError: {
            code: "monitor_window_timeout",
            desc: "Token acquisition in popup failed due to timeout. For more visit: aka.ms/msaljs/browser-errors."
        },
        monitorIframeTimeoutError: {
            code: "monitor_window_timeout",
            desc: "Token acquisition in iframe failed due to timeout. For more visit: aka.ms/msaljs/browser-errors."
        },
        redirectInIframeError: {
            code: "redirect_in_iframe",
            desc: "Redirects are not supported for iframed or brokered applications. Please ensure you are using MSAL.js in a top frame of the window if using the redirect APIs, or use the popup APIs."
        },
        blockTokenRequestsInHiddenIframeError: {
            code: "block_iframe_reload",
            desc: "Request was blocked inside an iframe because MSAL detected an authentication response. For more visit: aka.ms/msaljs/browser-errors"
        },
        blockAcquireTokenInPopupsError: {
            code: "block_nested_popups",
            desc: "Request was blocked inside a popup because MSAL detected it was running in a popup."
        },
        iframeClosedPrematurelyError: {
            code: "iframe_closed_prematurely",
            desc: "The iframe being monitored was closed prematurely."
        },
        silentLogoutUnsupportedError: {
            code: "silent_logout_unsupported",
            desc: "Silent logout not supported. Please call logoutRedirect or logoutPopup instead."
        },
        noAccountError: {
            code: "no_account_error",
            desc: "No account object provided to acquireTokenSilent and no active account has been set. Please call setActiveAccount or provide an account on the request."
        },
        silentPromptValueError: {
            code: "silent_prompt_value_error",
            desc: "The value given for the prompt value is not valid for silent requests - must be set to 'none'."
        },
        noTokenRequestCacheError: {
            code: "no_token_request_cache_error",
            desc: "No token request found in cache."
        },
        unableToParseTokenRequestCacheError: {
            code: "unable_to_parse_token_request_cache_error",
            desc: "The cached token request could not be parsed."
        },
        noCachedAuthorityError: {
            code: "no_cached_authority_error",
            desc: "No cached authority found."
        },
        authRequestNotSet: {
            code: "auth_request_not_set_error",
            desc: "Auth Request not set. Please ensure initiateAuthRequest was called from the InteractionHandler"
        },
        invalidCacheType: {
            code: "invalid_cache_type",
            desc: "Invalid cache type"
        },
        notInBrowserEnvironment: {
            code: "non_browser_environment",
            desc: "Login and token requests are not supported in non-browser environments."
        },
        databaseNotOpen: {
            code: "database_not_open",
            desc: "Database is not open!"
        },
        noNetworkConnectivity: {
            code: "no_network_connectivity",
            desc: "No network connectivity. Check your internet connection."
        },
        postRequestFailed: {
            code: "post_request_failed",
            desc: "Network request failed: If the browser threw a CORS error, check that the redirectUri is registered in the Azure App Portal as type 'SPA'"
        },
        getRequestFailed: {
            code: "get_request_failed",
            desc: "Network request failed. Please check the network trace to determine root cause."
        },
        failedToParseNetworkResponse: {
            code: "failed_to_parse_response",
            desc: "Failed to parse network response. Check network trace."
        },
        unableToLoadTokenError: {
            code: "unable_to_load_token",
            desc: "Error loading token to cache."
        },
        signingKeyNotFoundInStorage: {
            code: "crypto_key_not_found",
            desc: "Cryptographic Key or Keypair not found in browser storage."
        },
        authCodeRequired: {
            code: "auth_code_required",
            desc: "An authorization code must be provided (as the `code` property on the request) to this flow."
        },
        authCodeOrNativeAccountRequired: {
            code: "auth_code_or_nativeAccountId_required",
            desc: "An authorization code or nativeAccountId must be provided to this flow."
        },
        databaseUnavailable: {
            code: "database_unavailable",
            desc: "IndexedDB, which is required for persistent cryptographic key storage, is unavailable. This may be caused by browser privacy features which block persistent storage in third-party contexts."
        },
        unableToAcquireTokenFromNativePlatform: {
            code: "unable_to_acquire_token_from_native_platform",
            desc: "Unable to acquire token from native platform. For a list of possible reasons visit aka.ms/msaljs/browser-errors."
        },
        nativeHandshakeTimeout: {
            code: "native_handshake_timeout",
            desc: "Timed out while attempting to establish connection to browser extension"
        },
        nativeExtensionNotInstalled: {
            code: "native_extension_not_installed",
            desc: "Native extension is not installed. If you think this is a mistake call the initialize function."
        },
        nativeConnectionNotEstablished: {
            code: "native_connection_not_established",
            desc: "Connection to native platform has not been established. Please install a compatible browser extension and run initialize(). For more please visit aka.ms/msaljs/browser-errors."
        },
        nativeBrokerCalledBeforeInitialize: {
            code: "native_broker_called_before_initialize",
            desc: "You must call and await the initialize function before attempting to call any other MSAL API when native brokering is enabled. For more please visit aka.ms/msaljs/browser-errors."
        },
        nativePromptNotSupported: {
            code: "native_prompt_not_supported",
            desc: "The provided prompt is not supported by the native platform. This request should be routed to the web based flow."
        }
    };
    /**
     * Browser library error class thrown by the MSAL.js library for SPAs
     */
    var BrowserAuthError = /** @class */ (function (_super) {
        __extends$1(BrowserAuthError, _super);
        function BrowserAuthError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            Object.setPrototypeOf(_this, BrowserAuthError.prototype);
            _this.name = "BrowserAuthError";
            return _this;
        }
        /**
         * Creates an error thrown when PKCE is not implemented.
         * @param errDetail
         */
        BrowserAuthError.createPkceNotGeneratedError = function (errDetail) {
            return new BrowserAuthError(BrowserAuthErrorMessage.pkceNotGenerated.code, BrowserAuthErrorMessage.pkceNotGenerated.desc + " Detail:" + errDetail);
        };
        /**
         * Creates an error thrown when the crypto object is unavailable.
         * @param errDetail
         */
        BrowserAuthError.createCryptoNotAvailableError = function (errDetail) {
            return new BrowserAuthError(BrowserAuthErrorMessage.cryptoDoesNotExist.code, BrowserAuthErrorMessage.cryptoDoesNotExist.desc + " Detail:" + errDetail);
        };
        /**
         * Creates an error thrown when an HTTP method hasn't been implemented by the browser class.
         * @param method
         */
        BrowserAuthError.createHttpMethodNotImplementedError = function (method) {
            return new BrowserAuthError(BrowserAuthErrorMessage.httpMethodNotImplementedError.code, BrowserAuthErrorMessage.httpMethodNotImplementedError.desc + " Given Method: " + method);
        };
        /**
         * Creates an error thrown when the navigation URI is empty.
         */
        BrowserAuthError.createEmptyNavigationUriError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.emptyNavigateUriError.code, BrowserAuthErrorMessage.emptyNavigateUriError.desc);
        };
        /**
         * Creates an error thrown when the hash string value is unexpectedly empty.
         * @param hashValue
         */
        BrowserAuthError.createEmptyHashError = function (hashValue) {
            return new BrowserAuthError(BrowserAuthErrorMessage.hashEmptyError.code, BrowserAuthErrorMessage.hashEmptyError.desc + " Given Url: " + hashValue);
        };
        /**
         * Creates an error thrown when the hash string value is unexpectedly empty.
         */
        BrowserAuthError.createHashDoesNotContainStateError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.hashDoesNotContainStateError.code, BrowserAuthErrorMessage.hashDoesNotContainStateError.desc);
        };
        /**
         * Creates an error thrown when the hash string value does not contain known properties
         */
        BrowserAuthError.createHashDoesNotContainKnownPropertiesError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.hashDoesNotContainKnownPropertiesError.code, BrowserAuthErrorMessage.hashDoesNotContainKnownPropertiesError.desc);
        };
        /**
         * Creates an error thrown when the hash string value is unexpectedly empty.
         */
        BrowserAuthError.createUnableToParseStateError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.unableToParseStateError.code, BrowserAuthErrorMessage.unableToParseStateError.desc);
        };
        /**
         * Creates an error thrown when the state value in the hash does not match the interaction type of the API attempting to consume it.
         */
        BrowserAuthError.createStateInteractionTypeMismatchError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.stateInteractionTypeMismatchError.code, BrowserAuthErrorMessage.stateInteractionTypeMismatchError.desc);
        };
        /**
         * Creates an error thrown when a browser interaction (redirect or popup) is in progress.
         */
        BrowserAuthError.createInteractionInProgressError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.interactionInProgress.code, BrowserAuthErrorMessage.interactionInProgress.desc);
        };
        /**
         * Creates an error thrown when the popup window could not be opened.
         * @param errDetail
         */
        BrowserAuthError.createPopupWindowError = function (errDetail) {
            var errorMessage = BrowserAuthErrorMessage.popupWindowError.desc;
            errorMessage = !StringUtils.isEmpty(errDetail) ? errorMessage + " Details: " + errDetail : errorMessage;
            return new BrowserAuthError(BrowserAuthErrorMessage.popupWindowError.code, errorMessage);
        };
        /**
         * Creates an error thrown when window.open returns an empty window object.
         * @param errDetail
         */
        BrowserAuthError.createEmptyWindowCreatedError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.emptyWindowError.code, BrowserAuthErrorMessage.emptyWindowError.desc);
        };
        /**
         * Creates an error thrown when the user closes a popup.
         */
        BrowserAuthError.createUserCancelledError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.userCancelledError.code, BrowserAuthErrorMessage.userCancelledError.desc);
        };
        /**
         * Creates an error thrown when monitorPopupFromHash times out for a given popup.
         */
        BrowserAuthError.createMonitorPopupTimeoutError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.monitorPopupTimeoutError.code, BrowserAuthErrorMessage.monitorPopupTimeoutError.desc);
        };
        /**
         * Creates an error thrown when monitorIframeFromHash times out for a given iframe.
         */
        BrowserAuthError.createMonitorIframeTimeoutError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.monitorIframeTimeoutError.code, BrowserAuthErrorMessage.monitorIframeTimeoutError.desc);
        };
        /**
         * Creates an error thrown when navigateWindow is called inside an iframe or brokered applications.
         * @param windowParentCheck
         */
        BrowserAuthError.createRedirectInIframeError = function (windowParentCheck) {
            return new BrowserAuthError(BrowserAuthErrorMessage.redirectInIframeError.code, BrowserAuthErrorMessage.redirectInIframeError.desc + " (window.parent !== window) => " + windowParentCheck);
        };
        /**
         * Creates an error thrown when an auth reload is done inside an iframe.
         */
        BrowserAuthError.createBlockReloadInHiddenIframeError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.blockTokenRequestsInHiddenIframeError.code, BrowserAuthErrorMessage.blockTokenRequestsInHiddenIframeError.desc);
        };
        /**
         * Creates an error thrown when a popup attempts to call an acquireToken API
         * @returns
         */
        BrowserAuthError.createBlockAcquireTokenInPopupsError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.blockAcquireTokenInPopupsError.code, BrowserAuthErrorMessage.blockAcquireTokenInPopupsError.desc);
        };
        /**
         * Creates an error thrown when an iframe is found to be closed before the timeout is reached.
         */
        BrowserAuthError.createIframeClosedPrematurelyError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.iframeClosedPrematurelyError.code, BrowserAuthErrorMessage.iframeClosedPrematurelyError.desc);
        };
        /**
         * Creates an error thrown when the logout API is called on any of the silent interaction clients
         */
        BrowserAuthError.createSilentLogoutUnsupportedError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.silentLogoutUnsupportedError.code, BrowserAuthErrorMessage.silentLogoutUnsupportedError.desc);
        };
        /**
         * Creates an error thrown when the account object is not provided in the acquireTokenSilent API.
         */
        BrowserAuthError.createNoAccountError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.noAccountError.code, BrowserAuthErrorMessage.noAccountError.desc);
        };
        /**
         * Creates an error thrown when a given prompt value is invalid for silent requests.
         */
        BrowserAuthError.createSilentPromptValueError = function (givenPrompt) {
            return new BrowserAuthError(BrowserAuthErrorMessage.silentPromptValueError.code, BrowserAuthErrorMessage.silentPromptValueError.desc + " Given value: " + givenPrompt);
        };
        /**
         * Creates an error thrown when the cached token request could not be retrieved from the cache
         */
        BrowserAuthError.createUnableToParseTokenRequestCacheError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.unableToParseTokenRequestCacheError.code, BrowserAuthErrorMessage.unableToParseTokenRequestCacheError.desc);
        };
        /**
         * Creates an error thrown when the token request could not be retrieved from the cache
         */
        BrowserAuthError.createNoTokenRequestCacheError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.noTokenRequestCacheError.code, BrowserAuthErrorMessage.noTokenRequestCacheError.desc);
        };
        /**
         * Creates an error thrown when handleCodeResponse is called before initiateAuthRequest (InteractionHandler)
         */
        BrowserAuthError.createAuthRequestNotSetError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.authRequestNotSet.code, BrowserAuthErrorMessage.authRequestNotSet.desc);
        };
        /**
         * Creates an error thrown when the authority could not be retrieved from the cache
         */
        BrowserAuthError.createNoCachedAuthorityError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.noCachedAuthorityError.code, BrowserAuthErrorMessage.noCachedAuthorityError.desc);
        };
        /**
         * Creates an error thrown if cache type is invalid.
         */
        BrowserAuthError.createInvalidCacheTypeError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.invalidCacheType.code, "" + BrowserAuthErrorMessage.invalidCacheType.desc);
        };
        /**
         * Create an error thrown when login and token requests are made from a non-browser environment
         */
        BrowserAuthError.createNonBrowserEnvironmentError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.notInBrowserEnvironment.code, BrowserAuthErrorMessage.notInBrowserEnvironment.desc);
        };
        /**
         * Create an error thrown when indexDB database is not open
         */
        BrowserAuthError.createDatabaseNotOpenError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.databaseNotOpen.code, BrowserAuthErrorMessage.databaseNotOpen.desc);
        };
        /**
         * Create an error thrown when token fetch fails due to no internet
         */
        BrowserAuthError.createNoNetworkConnectivityError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.noNetworkConnectivity.code, BrowserAuthErrorMessage.noNetworkConnectivity.desc);
        };
        /**
         * Create an error thrown when token fetch fails due to reasons other than internet connectivity
         */
        BrowserAuthError.createPostRequestFailedError = function (errorDesc, endpoint) {
            return new BrowserAuthError(BrowserAuthErrorMessage.postRequestFailed.code, BrowserAuthErrorMessage.postRequestFailed.desc + " | Network client threw: " + errorDesc + " | Attempted to reach: " + endpoint.split("?")[0]);
        };
        /**
         * Create an error thrown when get request fails due to reasons other than internet connectivity
         */
        BrowserAuthError.createGetRequestFailedError = function (errorDesc, endpoint) {
            return new BrowserAuthError(BrowserAuthErrorMessage.getRequestFailed.code, BrowserAuthErrorMessage.getRequestFailed.desc + " | Network client threw: " + errorDesc + " | Attempted to reach: " + endpoint.split("?")[0]);
        };
        /**
         * Create an error thrown when network client fails to parse network response
         */
        BrowserAuthError.createFailedToParseNetworkResponseError = function (endpoint) {
            return new BrowserAuthError(BrowserAuthErrorMessage.failedToParseNetworkResponse.code, BrowserAuthErrorMessage.failedToParseNetworkResponse.desc + " | Attempted to reach: " + endpoint.split("?")[0]);
        };
        /**
         * Create an error thrown when the necessary information is not available to sideload tokens
         */
        BrowserAuthError.createUnableToLoadTokenError = function (errorDetail) {
            return new BrowserAuthError(BrowserAuthErrorMessage.unableToLoadTokenError.code, BrowserAuthErrorMessage.unableToLoadTokenError.desc + " | " + errorDetail);
        };
        /**
         * Create an error thrown when the queried cryptographic key is not found in IndexedDB
         */
        BrowserAuthError.createSigningKeyNotFoundInStorageError = function (keyId) {
            return new BrowserAuthError(BrowserAuthErrorMessage.signingKeyNotFoundInStorage.code, BrowserAuthErrorMessage.signingKeyNotFoundInStorage.desc + " | No match found for KeyId: " + keyId);
        };
        /**
         * Create an error when an authorization code is required but not provided
         */
        BrowserAuthError.createAuthCodeRequiredError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.authCodeRequired.code, BrowserAuthErrorMessage.authCodeRequired.desc);
        };
        /**
         * Create an error when an authorization code or native account ID is required but not provided
         */
        BrowserAuthError.createAuthCodeOrNativeAccountIdRequiredError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.authCodeOrNativeAccountRequired.code, BrowserAuthErrorMessage.authCodeOrNativeAccountRequired.desc);
        };
        /**
         * Create an error when IndexedDB is unavailable
         */
        BrowserAuthError.createDatabaseUnavailableError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.databaseUnavailable.code, BrowserAuthErrorMessage.databaseUnavailable.desc);
        };
        /**
         * Create an error when native token acquisition is not possible
         */
        BrowserAuthError.createUnableToAcquireTokenFromNativePlatformError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.unableToAcquireTokenFromNativePlatform.code, BrowserAuthErrorMessage.unableToAcquireTokenFromNativePlatform.desc);
        };
        /**
         * Create an error thrown when Handshake with browser extension times out
         */
        BrowserAuthError.createNativeHandshakeTimeoutError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.nativeHandshakeTimeout.code, BrowserAuthErrorMessage.nativeHandshakeTimeout.desc);
        };
        /**
         * Create an error thrown when browser extension is not installed
         */
        BrowserAuthError.createNativeExtensionNotInstalledError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.nativeExtensionNotInstalled.code, BrowserAuthErrorMessage.nativeExtensionNotInstalled.desc);
        };
        /**
         * Create an error when native connection has not been established
         * @returns
         */
        BrowserAuthError.createNativeConnectionNotEstablishedError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.nativeConnectionNotEstablished.code, BrowserAuthErrorMessage.nativeConnectionNotEstablished.desc);
        };
        /**
         * Create an error thrown when the initialize function hasn't been called
         */
        BrowserAuthError.createNativeBrokerCalledBeforeInitialize = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.nativeBrokerCalledBeforeInitialize.code, BrowserAuthErrorMessage.nativeBrokerCalledBeforeInitialize.desc);
        };
        /**
         * Create an error thrown when requesting a token directly from the native platform with an unsupported prompt parameter e.g. select_account, login or create
         * These requests must go through eSTS to ensure eSTS is aware of the new account
         */
        BrowserAuthError.createNativePromptParameterNotSupportedError = function () {
            return new BrowserAuthError(BrowserAuthErrorMessage.nativePromptNotSupported.code, BrowserAuthErrorMessage.nativePromptNotSupported.desc);
        };
        return BrowserAuthError;
    }(AuthError));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Constants
     */
    var BrowserConstants = {
        /**
         * Interaction in progress cache value
         */
        INTERACTION_IN_PROGRESS_VALUE: "interaction_in_progress",
        /**
         * Invalid grant error code
         */
        INVALID_GRANT_ERROR: "invalid_grant",
        /**
         * Default popup window width
         */
        POPUP_WIDTH: 483,
        /**
         * Default popup window height
         */
        POPUP_HEIGHT: 600,
        /**
         * Name of the popup window starts with
         */
        POPUP_NAME_PREFIX: "msal",
        /**
         * Default popup monitor poll interval in milliseconds
         */
        POLL_INTERVAL_MS: 50,
        /**
         * Msal-browser SKU
         */
        MSAL_SKU: "msal.js.browser",
    };
    var NativeConstants = {
        CHANNEL_ID: "53ee284d-920a-4b59-9d30-a60315b26836",
        PREFERRED_EXTENSION_ID: "ppnbnpeolgkicgegkbkbjmhlideopiji",
        MATS_TELEMETRY: "MATS"
    };
    var NativeExtensionMethod;
    (function (NativeExtensionMethod) {
        NativeExtensionMethod["HandshakeRequest"] = "Handshake";
        NativeExtensionMethod["HandshakeResponse"] = "HandshakeResponse";
        NativeExtensionMethod["GetToken"] = "GetToken";
        NativeExtensionMethod["Response"] = "Response";
    })(NativeExtensionMethod || (NativeExtensionMethod = {}));
    var BrowserCacheLocation;
    (function (BrowserCacheLocation) {
        BrowserCacheLocation["LocalStorage"] = "localStorage";
        BrowserCacheLocation["SessionStorage"] = "sessionStorage";
        BrowserCacheLocation["MemoryStorage"] = "memoryStorage";
    })(BrowserCacheLocation || (BrowserCacheLocation = {}));
    /**
     * HTTP Request types supported by MSAL.
     */
    var HTTP_REQUEST_TYPE;
    (function (HTTP_REQUEST_TYPE) {
        HTTP_REQUEST_TYPE["GET"] = "GET";
        HTTP_REQUEST_TYPE["POST"] = "POST";
    })(HTTP_REQUEST_TYPE || (HTTP_REQUEST_TYPE = {}));
    /**
     * Temporary cache keys for MSAL, deleted after any request.
     */
    var TemporaryCacheKeys;
    (function (TemporaryCacheKeys) {
        TemporaryCacheKeys["AUTHORITY"] = "authority";
        TemporaryCacheKeys["ACQUIRE_TOKEN_ACCOUNT"] = "acquireToken.account";
        TemporaryCacheKeys["SESSION_STATE"] = "session.state";
        TemporaryCacheKeys["REQUEST_STATE"] = "request.state";
        TemporaryCacheKeys["NONCE_IDTOKEN"] = "nonce.id_token";
        TemporaryCacheKeys["ORIGIN_URI"] = "request.origin";
        TemporaryCacheKeys["RENEW_STATUS"] = "token.renew.status";
        TemporaryCacheKeys["URL_HASH"] = "urlHash";
        TemporaryCacheKeys["REQUEST_PARAMS"] = "request.params";
        TemporaryCacheKeys["SCOPES"] = "scopes";
        TemporaryCacheKeys["INTERACTION_STATUS_KEY"] = "interaction.status";
        TemporaryCacheKeys["CCS_CREDENTIAL"] = "ccs.credential";
        TemporaryCacheKeys["CORRELATION_ID"] = "request.correlationId";
        TemporaryCacheKeys["NATIVE_REQUEST"] = "request.native";
    })(TemporaryCacheKeys || (TemporaryCacheKeys = {}));
    /**
     * Cache keys stored in-memory
     */
    var InMemoryCacheKeys;
    (function (InMemoryCacheKeys) {
        InMemoryCacheKeys["WRAPPER_SKU"] = "wrapper.sku";
        InMemoryCacheKeys["WRAPPER_VER"] = "wrapper.version";
    })(InMemoryCacheKeys || (InMemoryCacheKeys = {}));
    /**
     * API Codes for Telemetry purposes.
     * Before adding a new code you must claim it in the MSAL Telemetry tracker as these number spaces are shared across all MSALs
     * 0-99 Silent Flow
     * 800-899 Auth Code Flow
     */
    var ApiId;
    (function (ApiId) {
        ApiId[ApiId["acquireTokenRedirect"] = 861] = "acquireTokenRedirect";
        ApiId[ApiId["acquireTokenPopup"] = 862] = "acquireTokenPopup";
        ApiId[ApiId["ssoSilent"] = 863] = "ssoSilent";
        ApiId[ApiId["acquireTokenSilent_authCode"] = 864] = "acquireTokenSilent_authCode";
        ApiId[ApiId["handleRedirectPromise"] = 865] = "handleRedirectPromise";
        ApiId[ApiId["acquireTokenByCode"] = 866] = "acquireTokenByCode";
        ApiId[ApiId["acquireTokenSilent_silentFlow"] = 61] = "acquireTokenSilent_silentFlow";
        ApiId[ApiId["logout"] = 961] = "logout";
        ApiId[ApiId["logoutPopup"] = 962] = "logoutPopup";
    })(ApiId || (ApiId = {}));
    /*
     * Interaction type of the API - used for state and telemetry
     */
    var InteractionType;
    (function (InteractionType) {
        InteractionType["Redirect"] = "redirect";
        InteractionType["Popup"] = "popup";
        InteractionType["Silent"] = "silent";
        InteractionType["None"] = "none";
    })(InteractionType || (InteractionType = {}));
    /**
     * Types of interaction currently in progress.
     * Used in events in wrapper libraries to invoke functions when certain interaction is in progress or all interactions are complete.
     */
    var InteractionStatus;
    (function (InteractionStatus) {
        /**
         * Initial status before interaction occurs
         */
        InteractionStatus["Startup"] = "startup";
        /**
         * Status set when all login calls occuring
         */
        InteractionStatus["Login"] = "login";
        /**
         * Status set when logout call occuring
         */
        InteractionStatus["Logout"] = "logout";
        /**
         * Status set for acquireToken calls
         */
        InteractionStatus["AcquireToken"] = "acquireToken";
        /**
         * Status set for ssoSilent calls
         */
        InteractionStatus["SsoSilent"] = "ssoSilent";
        /**
         * Status set when handleRedirect in progress
         */
        InteractionStatus["HandleRedirect"] = "handleRedirect";
        /**
         * Status set when interaction is complete
         */
        InteractionStatus["None"] = "none";
    })(InteractionStatus || (InteractionStatus = {}));
    var DEFAULT_REQUEST = {
        scopes: OIDC_DEFAULT_SCOPES
    };
    /**
     * JWK Key Format string (Type MUST be defined for window crypto APIs)
     */
    var KEY_FORMAT_JWK = "jwk";
    // Supported wrapper SKUs
    var WrapperSKU;
    (function (WrapperSKU) {
        WrapperSKU["React"] = "@azure/msal-react";
        WrapperSKU["Angular"] = "@azure/msal-angular";
    })(WrapperSKU || (WrapperSKU = {}));
    // DatabaseStorage Constants
    var DB_NAME = "msal.db";
    var DB_VERSION = 1;
    var DB_TABLE_NAME = DB_NAME + ".keys";

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * BrowserAuthErrorMessage class containing string constants used by error codes and messages.
     */
    var BrowserConfigurationAuthErrorMessage = {
        redirectUriNotSet: {
            code: "redirect_uri_empty",
            desc: "A redirect URI is required for all calls, and none has been set."
        },
        postLogoutUriNotSet: {
            code: "post_logout_uri_empty",
            desc: "A post logout redirect has not been set."
        },
        storageNotSupportedError: {
            code: "storage_not_supported",
            desc: "Given storage configuration option was not supported."
        },
        noRedirectCallbacksSet: {
            code: "no_redirect_callbacks",
            desc: "No redirect callbacks have been set. Please call setRedirectCallbacks() with the appropriate function arguments before continuing. " +
                "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
        },
        invalidCallbackObject: {
            code: "invalid_callback_object",
            desc: "The object passed for the callback was invalid. " +
                "More information is available here: https://github.com/AzureAD/microsoft-authentication-library-for-js/wiki/MSAL-basics."
        },
        stubPcaInstanceCalled: {
            code: "stubbed_public_client_application_called",
            desc: "Stub instance of Public Client Application was called. If using msal-react, please ensure context is not used without a provider. For more visit: aka.ms/msaljs/browser-errors"
        },
        inMemRedirectUnavailable: {
            code: "in_mem_redirect_unavailable",
            desc: "Redirect cannot be supported. In-memory storage was selected and storeAuthStateInCookie=false, which would cause the library to be unable to handle the incoming hash. If you would like to use the redirect API, please use session/localStorage or set storeAuthStateInCookie=true."
        }
    };
    /**
     * Browser library error class thrown by the MSAL.js library for SPAs
     */
    var BrowserConfigurationAuthError = /** @class */ (function (_super) {
        __extends$1(BrowserConfigurationAuthError, _super);
        function BrowserConfigurationAuthError(errorCode, errorMessage) {
            var _this = _super.call(this, errorCode, errorMessage) || this;
            _this.name = "BrowserConfigurationAuthError";
            Object.setPrototypeOf(_this, BrowserConfigurationAuthError.prototype);
            return _this;
        }
        /**
         * Creates an error thrown when the redirect uri is empty (not set by caller)
         */
        BrowserConfigurationAuthError.createRedirectUriEmptyError = function () {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.redirectUriNotSet.code, BrowserConfigurationAuthErrorMessage.redirectUriNotSet.desc);
        };
        /**
         * Creates an error thrown when the post-logout redirect uri is empty (not set by caller)
         */
        BrowserConfigurationAuthError.createPostLogoutRedirectUriEmptyError = function () {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.postLogoutUriNotSet.code, BrowserConfigurationAuthErrorMessage.postLogoutUriNotSet.desc);
        };
        /**
         * Creates error thrown when given storage location is not supported.
         * @param givenStorageLocation
         */
        BrowserConfigurationAuthError.createStorageNotSupportedError = function (givenStorageLocation) {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.storageNotSupportedError.code, BrowserConfigurationAuthErrorMessage.storageNotSupportedError.desc + " Given Location: " + givenStorageLocation);
        };
        /**
         * Creates error thrown when redirect callbacks are not set before calling loginRedirect() or acquireTokenRedirect().
         */
        BrowserConfigurationAuthError.createRedirectCallbacksNotSetError = function () {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.code, BrowserConfigurationAuthErrorMessage.noRedirectCallbacksSet.desc);
        };
        /**
         * Creates error thrown when the stub instance of PublicClientApplication is called.
         */
        BrowserConfigurationAuthError.createStubPcaInstanceCalledError = function () {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.stubPcaInstanceCalled.code, BrowserConfigurationAuthErrorMessage.stubPcaInstanceCalled.desc);
        };
        /*
         * Create an error thrown when in-memory storage is used and storeAuthStateInCookie=false.
         */
        BrowserConfigurationAuthError.createInMemoryRedirectUnavailableError = function () {
            return new BrowserConfigurationAuthError(BrowserConfigurationAuthErrorMessage.inMemRedirectUnavailable.code, BrowserConfigurationAuthErrorMessage.inMemRedirectUnavailable.desc);
        };
        return BrowserConfigurationAuthError;
    }(AuthError));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var BrowserStorage = /** @class */ (function () {
        function BrowserStorage(cacheLocation) {
            this.validateWindowStorage(cacheLocation);
            this.windowStorage = window[cacheLocation];
        }
        BrowserStorage.prototype.validateWindowStorage = function (cacheLocation) {
            if (cacheLocation !== BrowserCacheLocation.LocalStorage && cacheLocation !== BrowserCacheLocation.SessionStorage) {
                throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
            }
            var storageSupported = !!window[cacheLocation];
            if (!storageSupported) {
                throw BrowserConfigurationAuthError.createStorageNotSupportedError(cacheLocation);
            }
        };
        BrowserStorage.prototype.getItem = function (key) {
            return this.windowStorage.getItem(key);
        };
        BrowserStorage.prototype.setItem = function (key, value) {
            this.windowStorage.setItem(key, value);
        };
        BrowserStorage.prototype.removeItem = function (key) {
            this.windowStorage.removeItem(key);
        };
        BrowserStorage.prototype.getKeys = function () {
            return Object.keys(this.windowStorage);
        };
        BrowserStorage.prototype.containsKey = function (key) {
            return this.windowStorage.hasOwnProperty(key);
        };
        return BrowserStorage;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var MemoryStorage = /** @class */ (function () {
        function MemoryStorage() {
            this.cache = new Map();
        }
        MemoryStorage.prototype.getItem = function (key) {
            return this.cache.get(key) || null;
        };
        MemoryStorage.prototype.setItem = function (key, value) {
            this.cache.set(key, value);
        };
        MemoryStorage.prototype.removeItem = function (key) {
            this.cache.delete(key);
        };
        MemoryStorage.prototype.getKeys = function () {
            var cacheKeys = [];
            this.cache.forEach(function (value, key) {
                cacheKeys.push(key);
            });
            return cacheKeys;
        };
        MemoryStorage.prototype.containsKey = function (key) {
            return this.cache.has(key);
        };
        MemoryStorage.prototype.clear = function () {
            this.cache.clear();
        };
        return MemoryStorage;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var BrowserProtocolUtils = /** @class */ (function () {
        function BrowserProtocolUtils() {
        }
        /**
         * Extracts the BrowserStateObject from the state string.
         * @param browserCrypto
         * @param state
         */
        BrowserProtocolUtils.extractBrowserRequestState = function (browserCrypto, state) {
            if (StringUtils.isEmpty(state)) {
                return null;
            }
            try {
                var requestStateObj = ProtocolUtils.parseRequestState(browserCrypto, state);
                return requestStateObj.libraryState.meta;
            }
            catch (e) {
                throw ClientAuthError.createInvalidStateError(state, e);
            }
        };
        /**
         * Parses properties of server response from url hash
         * @param locationHash Hash from url
         */
        BrowserProtocolUtils.parseServerResponseFromHash = function (locationHash) {
            if (!locationHash) {
                return {};
            }
            var hashUrlString = new UrlString(locationHash);
            return UrlString.getDeserializedHash(hashUrlString.getHash());
        };
        return BrowserProtocolUtils;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * This class implements the cache storage interface for MSAL through browser local or session storage.
     * Cookies are only used if storeAuthStateInCookie is true, and are only used for
     * parameters such as state and nonce, generally.
     */
    var BrowserCacheManager = /** @class */ (function (_super) {
        __extends$1(BrowserCacheManager, _super);
        function BrowserCacheManager(clientId, cacheConfig, cryptoImpl, logger) {
            var _this = _super.call(this, clientId, cryptoImpl) || this;
            // Cookie life calculation (hours * minutes * seconds * ms)
            _this.COOKIE_LIFE_MULTIPLIER = 24 * 60 * 60 * 1000;
            _this.cacheConfig = cacheConfig;
            _this.logger = logger;
            _this.internalStorage = new MemoryStorage();
            _this.browserStorage = _this.setupBrowserStorage(_this.cacheConfig.cacheLocation);
            _this.temporaryCacheStorage = _this.setupTemporaryCacheStorage(_this.cacheConfig.cacheLocation);
            // Migrate any cache entries from older versions of MSAL.
            _this.migrateCacheEntries();
            return _this;
        }
        /**
         * Returns a window storage class implementing the IWindowStorage interface that corresponds to the configured cacheLocation.
         * @param cacheLocation
         */
        BrowserCacheManager.prototype.setupBrowserStorage = function (cacheLocation) {
            switch (cacheLocation) {
                case BrowserCacheLocation.LocalStorage:
                case BrowserCacheLocation.SessionStorage:
                    try {
                        // Temporary cache items will always be stored in session storage to mitigate problems caused by multiple tabs
                        return new BrowserStorage(cacheLocation);
                    }
                    catch (e) {
                        this.logger.verbose(e);
                        break;
                    }
            }
            this.cacheConfig.cacheLocation = BrowserCacheLocation.MemoryStorage;
            return new MemoryStorage();
        };
        /**
         *
         * @param cacheLocation
         */
        BrowserCacheManager.prototype.setupTemporaryCacheStorage = function (cacheLocation) {
            switch (cacheLocation) {
                case BrowserCacheLocation.LocalStorage:
                case BrowserCacheLocation.SessionStorage:
                    try {
                        // Temporary cache items will always be stored in session storage to mitigate problems caused by multiple tabs
                        return new BrowserStorage(BrowserCacheLocation.SessionStorage);
                    }
                    catch (e) {
                        this.logger.verbose(e);
                        return this.internalStorage;
                    }
                case BrowserCacheLocation.MemoryStorage:
                default:
                    return this.internalStorage;
            }
        };
        /**
         * Migrate all old cache entries to new schema. No rollback supported.
         * @param storeAuthStateInCookie
         */
        BrowserCacheManager.prototype.migrateCacheEntries = function () {
            var _this = this;
            var idTokenKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ID_TOKEN;
            var clientInfoKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.CLIENT_INFO;
            var errorKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ERROR;
            var errorDescKey = Constants.CACHE_PREFIX + "." + PersistentCacheKeys.ERROR_DESC;
            var idTokenValue = this.browserStorage.getItem(idTokenKey);
            var clientInfoValue = this.browserStorage.getItem(clientInfoKey);
            var errorValue = this.browserStorage.getItem(errorKey);
            var errorDescValue = this.browserStorage.getItem(errorDescKey);
            var values = [idTokenValue, clientInfoValue, errorValue, errorDescValue];
            var keysToMigrate = [PersistentCacheKeys.ID_TOKEN, PersistentCacheKeys.CLIENT_INFO, PersistentCacheKeys.ERROR, PersistentCacheKeys.ERROR_DESC];
            keysToMigrate.forEach(function (cacheKey, index) { return _this.migrateCacheEntry(cacheKey, values[index]); });
        };
        /**
         * Utility function to help with migration.
         * @param newKey
         * @param value
         * @param storeAuthStateInCookie
         */
        BrowserCacheManager.prototype.migrateCacheEntry = function (newKey, value) {
            if (value) {
                this.setTemporaryCache(newKey, value, true);
            }
        };
        /**
         * Parses passed value as JSON object, JSON.parse() will throw an error.
         * @param input
         */
        BrowserCacheManager.prototype.validateAndParseJson = function (jsonValue) {
            try {
                var parsedJson = JSON.parse(jsonValue);
                /**
                 * There are edge cases in which JSON.parse will successfully parse a non-valid JSON object
                 * (e.g. JSON.parse will parse an escaped string into an unescaped string), so adding a type check
                 * of the parsed value is necessary in order to be certain that the string represents a valid JSON object.
                 *
                 */
                return (parsedJson && typeof parsedJson === "object") ? parsedJson : null;
            }
            catch (error) {
                return null;
            }
        };
        /**
         * fetches the entry from the browser storage based off the key
         * @param key
         */
        BrowserCacheManager.prototype.getItem = function (key) {
            return this.browserStorage.getItem(key);
        };
        /**
         * sets the entry in the browser storage
         * @param key
         * @param value
         */
        BrowserCacheManager.prototype.setItem = function (key, value) {
            this.browserStorage.setItem(key, value);
        };
        /**
         * fetch the account entity from the platform cache
         * @param accountKey
         */
        BrowserCacheManager.prototype.getAccount = function (accountKey) {
            var account = this.getItem(accountKey);
            if (!account) {
                return null;
            }
            var parsedAccount = this.validateAndParseJson(account);
            if (!parsedAccount || !AccountEntity.isAccountEntity(parsedAccount)) {
                return null;
            }
            return CacheManager.toObject(new AccountEntity(), parsedAccount);
        };
        /**
         * set account entity in the platform cache
         * @param key
         * @param value
         */
        BrowserCacheManager.prototype.setAccount = function (account) {
            this.logger.trace("BrowserCacheManager.setAccount called");
            var key = account.generateAccountKey();
            this.setItem(key, JSON.stringify(account));
        };
        /**
         * generates idToken entity from a string
         * @param idTokenKey
         */
        BrowserCacheManager.prototype.getIdTokenCredential = function (idTokenKey) {
            var value = this.getItem(idTokenKey);
            if (!value) {
                this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit");
                return null;
            }
            var parsedIdToken = this.validateAndParseJson(value);
            if (!parsedIdToken || !IdTokenEntity.isIdTokenEntity(parsedIdToken)) {
                this.logger.trace("BrowserCacheManager.getIdTokenCredential: called, no cache hit");
                return null;
            }
            this.logger.trace("BrowserCacheManager.getIdTokenCredential: cache hit");
            return CacheManager.toObject(new IdTokenEntity(), parsedIdToken);
        };
        /**
         * set IdToken credential to the platform cache
         * @param idToken
         */
        BrowserCacheManager.prototype.setIdTokenCredential = function (idToken) {
            this.logger.trace("BrowserCacheManager.setIdTokenCredential called");
            var idTokenKey = idToken.generateCredentialKey();
            this.setItem(idTokenKey, JSON.stringify(idToken));
        };
        /**
         * generates accessToken entity from a string
         * @param key
         */
        BrowserCacheManager.prototype.getAccessTokenCredential = function (accessTokenKey) {
            var value = this.getItem(accessTokenKey);
            if (!value) {
                this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit");
                return null;
            }
            var parsedAccessToken = this.validateAndParseJson(value);
            if (!parsedAccessToken || !AccessTokenEntity.isAccessTokenEntity(parsedAccessToken)) {
                this.logger.trace("BrowserCacheManager.getAccessTokenCredential: called, no cache hit");
                return null;
            }
            this.logger.trace("BrowserCacheManager.getAccessTokenCredential: cache hit");
            return CacheManager.toObject(new AccessTokenEntity(), parsedAccessToken);
        };
        /**
         * set accessToken credential to the platform cache
         * @param accessToken
         */
        BrowserCacheManager.prototype.setAccessTokenCredential = function (accessToken) {
            this.logger.trace("BrowserCacheManager.setAccessTokenCredential called");
            var accessTokenKey = accessToken.generateCredentialKey();
            this.setItem(accessTokenKey, JSON.stringify(accessToken));
        };
        /**
         * generates refreshToken entity from a string
         * @param refreshTokenKey
         */
        BrowserCacheManager.prototype.getRefreshTokenCredential = function (refreshTokenKey) {
            var value = this.getItem(refreshTokenKey);
            if (!value) {
                this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit");
                return null;
            }
            var parsedRefreshToken = this.validateAndParseJson(value);
            if (!parsedRefreshToken || !RefreshTokenEntity.isRefreshTokenEntity(parsedRefreshToken)) {
                this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: called, no cache hit");
                return null;
            }
            this.logger.trace("BrowserCacheManager.getRefreshTokenCredential: cache hit");
            return CacheManager.toObject(new RefreshTokenEntity(), parsedRefreshToken);
        };
        /**
         * set refreshToken credential to the platform cache
         * @param refreshToken
         */
        BrowserCacheManager.prototype.setRefreshTokenCredential = function (refreshToken) {
            this.logger.trace("BrowserCacheManager.setRefreshTokenCredential called");
            var refreshTokenKey = refreshToken.generateCredentialKey();
            this.setItem(refreshTokenKey, JSON.stringify(refreshToken));
        };
        /**
         * fetch appMetadata entity from the platform cache
         * @param appMetadataKey
         */
        BrowserCacheManager.prototype.getAppMetadata = function (appMetadataKey) {
            var value = this.getItem(appMetadataKey);
            if (!value) {
                this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit");
                return null;
            }
            var parsedMetadata = this.validateAndParseJson(value);
            if (!parsedMetadata || !AppMetadataEntity.isAppMetadataEntity(appMetadataKey, parsedMetadata)) {
                this.logger.trace("BrowserCacheManager.getAppMetadata: called, no cache hit");
                return null;
            }
            this.logger.trace("BrowserCacheManager.getAppMetadata: cache hit");
            return CacheManager.toObject(new AppMetadataEntity(), parsedMetadata);
        };
        /**
         * set appMetadata entity to the platform cache
         * @param appMetadata
         */
        BrowserCacheManager.prototype.setAppMetadata = function (appMetadata) {
            this.logger.trace("BrowserCacheManager.setAppMetadata called");
            var appMetadataKey = appMetadata.generateAppMetadataKey();
            this.setItem(appMetadataKey, JSON.stringify(appMetadata));
        };
        /**
         * fetch server telemetry entity from the platform cache
         * @param serverTelemetryKey
         */
        BrowserCacheManager.prototype.getServerTelemetry = function (serverTelemetryKey) {
            var value = this.getItem(serverTelemetryKey);
            if (!value) {
                this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit");
                return null;
            }
            var parsedMetadata = this.validateAndParseJson(value);
            if (!parsedMetadata || !ServerTelemetryEntity.isServerTelemetryEntity(serverTelemetryKey, parsedMetadata)) {
                this.logger.trace("BrowserCacheManager.getServerTelemetry: called, no cache hit");
                return null;
            }
            this.logger.trace("BrowserCacheManager.getServerTelemetry: cache hit");
            return CacheManager.toObject(new ServerTelemetryEntity(), parsedMetadata);
        };
        /**
         * set server telemetry entity to the platform cache
         * @param serverTelemetryKey
         * @param serverTelemetry
         */
        BrowserCacheManager.prototype.setServerTelemetry = function (serverTelemetryKey, serverTelemetry) {
            this.logger.trace("BrowserCacheManager.setServerTelemetry called");
            this.setItem(serverTelemetryKey, JSON.stringify(serverTelemetry));
        };
        /**
         *
         */
        BrowserCacheManager.prototype.getAuthorityMetadata = function (key) {
            var value = this.internalStorage.getItem(key);
            if (!value) {
                this.logger.trace("BrowserCacheManager.getAuthorityMetadata: called, no cache hit");
                return null;
            }
            var parsedMetadata = this.validateAndParseJson(value);
            if (parsedMetadata && AuthorityMetadataEntity.isAuthorityMetadataEntity(key, parsedMetadata)) {
                this.logger.trace("BrowserCacheManager.getAuthorityMetadata: cache hit");
                return CacheManager.toObject(new AuthorityMetadataEntity(), parsedMetadata);
            }
            return null;
        };
        /**
         *
         */
        BrowserCacheManager.prototype.getAuthorityMetadataKeys = function () {
            var _this = this;
            var allKeys = this.internalStorage.getKeys();
            return allKeys.filter(function (key) {
                return _this.isAuthorityMetadata(key);
            });
        };
        /**
         * Sets wrapper metadata in memory
         * @param wrapperSKU
         * @param wrapperVersion
         */
        BrowserCacheManager.prototype.setWrapperMetadata = function (wrapperSKU, wrapperVersion) {
            this.internalStorage.setItem(InMemoryCacheKeys.WRAPPER_SKU, wrapperSKU);
            this.internalStorage.setItem(InMemoryCacheKeys.WRAPPER_VER, wrapperVersion);
        };
        /**
         * Returns wrapper metadata from in-memory storage
         */
        BrowserCacheManager.prototype.getWrapperMetadata = function () {
            var sku = this.internalStorage.getItem(InMemoryCacheKeys.WRAPPER_SKU) || Constants.EMPTY_STRING;
            var version = this.internalStorage.getItem(InMemoryCacheKeys.WRAPPER_VER) || Constants.EMPTY_STRING;
            return [sku, version];
        };
        /**
         *
         * @param entity
         */
        BrowserCacheManager.prototype.setAuthorityMetadata = function (key, entity) {
            this.logger.trace("BrowserCacheManager.setAuthorityMetadata called");
            this.internalStorage.setItem(key, JSON.stringify(entity));
        };
        /**
         * Gets the active account
         */
        BrowserCacheManager.prototype.getActiveAccount = function () {
            var activeAccountIdKey = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT);
            var activeAccountId = this.browserStorage.getItem(activeAccountIdKey);
            if (!activeAccountId) {
                return null;
            }
            return this.getAccountInfoByFilter({ localAccountId: activeAccountId })[0] || null;
        };
        /**
         * Sets the active account's localAccountId in cache
         * @param account
         */
        BrowserCacheManager.prototype.setActiveAccount = function (account) {
            var activeAccountIdKey = this.generateCacheKey(PersistentCacheKeys.ACTIVE_ACCOUNT);
            if (account) {
                this.logger.verbose("setActiveAccount: Active account set");
                this.browserStorage.setItem(activeAccountIdKey, account.localAccountId);
            }
            else {
                this.logger.verbose("setActiveAccount: No account passed, active account not set");
                this.browserStorage.removeItem(activeAccountIdKey);
            }
        };
        /**
         * Gets a list of accounts that match all of the filters provided
         * @param account
         */
        BrowserCacheManager.prototype.getAccountInfoByFilter = function (accountFilter) {
            var allAccounts = this.getAllAccounts();
            return allAccounts.filter(function (accountObj) {
                if (accountFilter.username && accountFilter.username.toLowerCase() !== accountObj.username.toLowerCase()) {
                    return false;
                }
                if (accountFilter.homeAccountId && accountFilter.homeAccountId !== accountObj.homeAccountId) {
                    return false;
                }
                if (accountFilter.localAccountId && accountFilter.localAccountId !== accountObj.localAccountId) {
                    return false;
                }
                if (accountFilter.tenantId && accountFilter.tenantId !== accountObj.tenantId) {
                    return false;
                }
                if (accountFilter.environment && accountFilter.environment !== accountObj.environment) {
                    return false;
                }
                return true;
            });
        };
        /**
         * Checks the cache for accounts matching loginHint or SID
         * @param loginHint
         * @param sid
         */
        BrowserCacheManager.prototype.getAccountInfoByHints = function (loginHint, sid) {
            var matchingAccounts = this.getAllAccounts().filter(function (accountInfo) {
                if (sid) {
                    var accountSid = accountInfo.idTokenClaims && accountInfo.idTokenClaims["sid"];
                    return sid === accountSid;
                }
                if (loginHint) {
                    return loginHint === accountInfo.username;
                }
                return false;
            });
            if (matchingAccounts.length === 1) {
                return matchingAccounts[0];
            }
            else if (matchingAccounts.length > 1) {
                throw ClientAuthError.createMultipleMatchingAccountsInCacheError();
            }
            return null;
        };
        /**
         * fetch throttling entity from the platform cache
         * @param throttlingCacheKey
         */
        BrowserCacheManager.prototype.getThrottlingCache = function (throttlingCacheKey) {
            var value = this.getItem(throttlingCacheKey);
            if (!value) {
                this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit");
                return null;
            }
            var parsedThrottlingCache = this.validateAndParseJson(value);
            if (!parsedThrottlingCache || !ThrottlingEntity.isThrottlingEntity(throttlingCacheKey, parsedThrottlingCache)) {
                this.logger.trace("BrowserCacheManager.getThrottlingCache: called, no cache hit");
                return null;
            }
            this.logger.trace("BrowserCacheManager.getThrottlingCache: cache hit");
            return CacheManager.toObject(new ThrottlingEntity(), parsedThrottlingCache);
        };
        /**
         * set throttling entity to the platform cache
         * @param throttlingCacheKey
         * @param throttlingCache
         */
        BrowserCacheManager.prototype.setThrottlingCache = function (throttlingCacheKey, throttlingCache) {
            this.logger.trace("BrowserCacheManager.setThrottlingCache called");
            this.setItem(throttlingCacheKey, JSON.stringify(throttlingCache));
        };
        /**
         * Gets cache item with given key.
         * Will retrieve from cookies if storeAuthStateInCookie is set to true.
         * @param key
         */
        BrowserCacheManager.prototype.getTemporaryCache = function (cacheKey, generateKey) {
            var key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
            if (this.cacheConfig.storeAuthStateInCookie) {
                var itemCookie = this.getItemCookie(key);
                if (itemCookie) {
                    this.logger.trace("BrowserCacheManager.getTemporaryCache: storeAuthStateInCookies set to true, retrieving from cookies");
                    return itemCookie;
                }
            }
            var value = this.temporaryCacheStorage.getItem(key);
            if (!value) {
                // If temp cache item not found in session/memory, check local storage for items set by old versions
                if (this.cacheConfig.cacheLocation === BrowserCacheLocation.LocalStorage) {
                    var item = this.browserStorage.getItem(key);
                    if (item) {
                        this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item found in local storage");
                        return item;
                    }
                }
                this.logger.trace("BrowserCacheManager.getTemporaryCache: No cache item found in local storage");
                return null;
            }
            this.logger.trace("BrowserCacheManager.getTemporaryCache: Temporary cache item returned");
            return value;
        };
        /**
         * Sets the cache item with the key and value given.
         * Stores in cookie if storeAuthStateInCookie is set to true.
         * This can cause cookie overflow if used incorrectly.
         * @param key
         * @param value
         */
        BrowserCacheManager.prototype.setTemporaryCache = function (cacheKey, value, generateKey) {
            var key = generateKey ? this.generateCacheKey(cacheKey) : cacheKey;
            this.temporaryCacheStorage.setItem(key, value);
            if (this.cacheConfig.storeAuthStateInCookie) {
                this.logger.trace("BrowserCacheManager.setTemporaryCache: storeAuthStateInCookie set to true, setting item cookie");
                this.setItemCookie(key, value);
            }
        };
        /**
         * Removes the cache item with the given key.
         * Will also clear the cookie item if storeAuthStateInCookie is set to true.
         * @param key
         */
        BrowserCacheManager.prototype.removeItem = function (key) {
            this.browserStorage.removeItem(key);
            this.temporaryCacheStorage.removeItem(key);
            if (this.cacheConfig.storeAuthStateInCookie) {
                this.logger.trace("BrowserCacheManager.removeItem: storeAuthStateInCookie is true, clearing item cookie");
                this.clearItemCookie(key);
            }
            return true;
        };
        /**
         * Checks whether key is in cache.
         * @param key
         */
        BrowserCacheManager.prototype.containsKey = function (key) {
            return this.browserStorage.containsKey(key) || this.temporaryCacheStorage.containsKey(key);
        };
        /**
         * Gets all keys in window.
         */
        BrowserCacheManager.prototype.getKeys = function () {
            return __spread(this.browserStorage.getKeys(), this.temporaryCacheStorage.getKeys());
        };
        /**
         * Clears all cache entries created by MSAL.
         */
        BrowserCacheManager.prototype.clear = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: 
                        // Removes all accounts and their credentials
                        return [4 /*yield*/, this.removeAllAccounts()];
                        case 1:
                            // Removes all accounts and their credentials
                            _a.sent();
                            this.removeAppMetadata();
                            // Removes all remaining MSAL cache items
                            this.getKeys().forEach(function (cacheKey) {
                                // Check if key contains msal prefix; For now, we are clearing all the cache items created by MSAL.js
                                if ((_this.browserStorage.containsKey(cacheKey) || _this.temporaryCacheStorage.containsKey(cacheKey)) && ((cacheKey.indexOf(Constants.CACHE_PREFIX) !== -1) || (cacheKey.indexOf(_this.clientId) !== -1))) {
                                    _this.removeItem(cacheKey);
                                }
                            });
                            this.internalStorage.clear();
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Add value to cookies
         * @param cookieName
         * @param cookieValue
         * @param expires
         */
        BrowserCacheManager.prototype.setItemCookie = function (cookieName, cookieValue, expires) {
            var cookieStr = encodeURIComponent(cookieName) + "=" + encodeURIComponent(cookieValue) + ";path=/;";
            if (expires) {
                var expireTime = this.getCookieExpirationTime(expires);
                cookieStr += "expires=" + expireTime + ";";
            }
            if (this.cacheConfig.secureCookies) {
                cookieStr += "Secure;";
            }
            document.cookie = cookieStr;
        };
        /**
         * Get one item by key from cookies
         * @param cookieName
         */
        BrowserCacheManager.prototype.getItemCookie = function (cookieName) {
            var name = encodeURIComponent(cookieName) + "=";
            var cookieList = document.cookie.split(";");
            for (var i = 0; i < cookieList.length; i++) {
                var cookie = cookieList[i];
                while (cookie.charAt(0) === " ") {
                    cookie = cookie.substring(1);
                }
                if (cookie.indexOf(name) === 0) {
                    return decodeURIComponent(cookie.substring(name.length, cookie.length));
                }
            }
            return Constants.EMPTY_STRING;
        };
        /**
         * Clear all msal-related cookies currently set in the browser. Should only be used to clear temporary cache items.
         */
        BrowserCacheManager.prototype.clearMsalCookies = function () {
            var _this = this;
            var cookiePrefix = Constants.CACHE_PREFIX + "." + this.clientId;
            var cookieList = document.cookie.split(";");
            cookieList.forEach(function (cookie) {
                while (cookie.charAt(0) === " ") {
                    // eslint-disable-next-line no-param-reassign
                    cookie = cookie.substring(1);
                }
                if (cookie.indexOf(cookiePrefix) === 0) {
                    var cookieKey = cookie.split("=")[0];
                    _this.clearItemCookie(cookieKey);
                }
            });
        };
        /**
         * Clear an item in the cookies by key
         * @param cookieName
         */
        BrowserCacheManager.prototype.clearItemCookie = function (cookieName) {
            this.setItemCookie(cookieName, Constants.EMPTY_STRING, -1);
        };
        /**
         * Get cookie expiration time
         * @param cookieLifeDays
         */
        BrowserCacheManager.prototype.getCookieExpirationTime = function (cookieLifeDays) {
            var today = new Date();
            var expr = new Date(today.getTime() + cookieLifeDays * this.COOKIE_LIFE_MULTIPLIER);
            return expr.toUTCString();
        };
        /**
         * Gets the cache object referenced by the browser
         */
        BrowserCacheManager.prototype.getCache = function () {
            return this.browserStorage;
        };
        /**
         * interface compat, we cannot overwrite browser cache; Functionality is supported by individual entities in browser
         */
        BrowserCacheManager.prototype.setCache = function () {
            // sets nothing
        };
        /**
         * Prepend msal.<client-id> to each key; Skip for any JSON object as Key (defined schemas do not need the key appended: AccessToken Keys or the upcoming schema)
         * @param key
         * @param addInstanceId
         */
        BrowserCacheManager.prototype.generateCacheKey = function (key) {
            var generatedKey = this.validateAndParseJson(key);
            if (!generatedKey) {
                if (StringUtils.startsWith(key, Constants.CACHE_PREFIX) || StringUtils.startsWith(key, PersistentCacheKeys.ADAL_ID_TOKEN)) {
                    return key;
                }
                return Constants.CACHE_PREFIX + "." + this.clientId + "." + key;
            }
            return JSON.stringify(key);
        };
        /**
         * Create authorityKey to cache authority
         * @param state
         */
        BrowserCacheManager.prototype.generateAuthorityKey = function (stateString) {
            var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
            return this.generateCacheKey(TemporaryCacheKeys.AUTHORITY + "." + stateId);
        };
        /**
         * Create Nonce key to cache nonce
         * @param state
         */
        BrowserCacheManager.prototype.generateNonceKey = function (stateString) {
            var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
            return this.generateCacheKey(TemporaryCacheKeys.NONCE_IDTOKEN + "." + stateId);
        };
        /**
         * Creates full cache key for the request state
         * @param stateString State string for the request
         */
        BrowserCacheManager.prototype.generateStateKey = function (stateString) {
            // Use the library state id to key temp storage for uniqueness for multiple concurrent requests
            var stateId = ProtocolUtils.parseRequestState(this.cryptoImpl, stateString).libraryState.id;
            return this.generateCacheKey(TemporaryCacheKeys.REQUEST_STATE + "." + stateId);
        };
        /**
         * Gets the cached authority based on the cached state. Returns empty if no cached state found.
         */
        BrowserCacheManager.prototype.getCachedAuthority = function (cachedState) {
            var stateCacheKey = this.generateStateKey(cachedState);
            var state = this.getTemporaryCache(stateCacheKey);
            if (!state) {
                return null;
            }
            var authorityCacheKey = this.generateAuthorityKey(state);
            return this.getTemporaryCache(authorityCacheKey);
        };
        /**
         * Updates account, authority, and state in cache
         * @param serverAuthenticationRequest
         * @param account
         */
        BrowserCacheManager.prototype.updateCacheEntries = function (state, nonce, authorityInstance, loginHint, account) {
            this.logger.trace("BrowserCacheManager.updateCacheEntries called");
            // Cache the request state
            var stateCacheKey = this.generateStateKey(state);
            this.setTemporaryCache(stateCacheKey, state, false);
            // Cache the nonce
            var nonceCacheKey = this.generateNonceKey(state);
            this.setTemporaryCache(nonceCacheKey, nonce, false);
            // Cache authorityKey
            var authorityCacheKey = this.generateAuthorityKey(state);
            this.setTemporaryCache(authorityCacheKey, authorityInstance, false);
            if (account) {
                var ccsCredential = {
                    credential: account.homeAccountId,
                    type: CcsCredentialType.HOME_ACCOUNT_ID
                };
                this.setTemporaryCache(TemporaryCacheKeys.CCS_CREDENTIAL, JSON.stringify(ccsCredential), true);
            }
            else if (!StringUtils.isEmpty(loginHint)) {
                var ccsCredential = {
                    credential: loginHint,
                    type: CcsCredentialType.UPN
                };
                this.setTemporaryCache(TemporaryCacheKeys.CCS_CREDENTIAL, JSON.stringify(ccsCredential), true);
            }
        };
        /**
         * Reset all temporary cache items
         * @param state
         */
        BrowserCacheManager.prototype.resetRequestCache = function (state) {
            var _this = this;
            this.logger.trace("BrowserCacheManager.resetRequestCache called");
            // check state and remove associated cache items
            if (!StringUtils.isEmpty(state)) {
                this.getKeys().forEach(function (key) {
                    if (key.indexOf(state) !== -1) {
                        _this.removeItem(key);
                    }
                });
            }
            // delete generic interactive request parameters
            if (state) {
                this.removeItem(this.generateStateKey(state));
                this.removeItem(this.generateNonceKey(state));
                this.removeItem(this.generateAuthorityKey(state));
            }
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.ORIGIN_URI));
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.URL_HASH));
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.CORRELATION_ID));
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.CCS_CREDENTIAL));
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.NATIVE_REQUEST));
            this.setInteractionInProgress(false);
        };
        /**
         * Removes temporary cache for the provided state
         * @param stateString
         */
        BrowserCacheManager.prototype.cleanRequestByState = function (stateString) {
            this.logger.trace("BrowserCacheManager.cleanRequestByState called");
            // Interaction is completed - remove interaction status.
            if (stateString) {
                var stateKey = this.generateStateKey(stateString);
                var cachedState = this.temporaryCacheStorage.getItem(stateKey);
                this.logger.infoPii("BrowserCacheManager.cleanRequestByState: Removing temporary cache items for state: " + cachedState);
                this.resetRequestCache(cachedState || Constants.EMPTY_STRING);
            }
            this.clearMsalCookies();
        };
        /**
         * Looks in temporary cache for any state values with the provided interactionType and removes all temporary cache items for that state
         * Used in scenarios where temp cache needs to be cleaned but state is not known, such as clicking browser back button.
         * @param interactionType
         */
        BrowserCacheManager.prototype.cleanRequestByInteractionType = function (interactionType) {
            var _this = this;
            this.logger.trace("BrowserCacheManager.cleanRequestByInteractionType called");
            // Loop through all keys to find state key
            this.getKeys().forEach(function (key) {
                // If this key is not the state key, move on
                if (key.indexOf(TemporaryCacheKeys.REQUEST_STATE) === -1) {
                    return;
                }
                // Retrieve state value, return if not a valid value
                var stateValue = _this.temporaryCacheStorage.getItem(key);
                if (!stateValue) {
                    return;
                }
                // Extract state and ensure it matches given InteractionType, then clean request cache
                var parsedState = BrowserProtocolUtils.extractBrowserRequestState(_this.cryptoImpl, stateValue);
                if (parsedState && parsedState.interactionType === interactionType) {
                    _this.logger.infoPii("BrowserCacheManager.cleanRequestByInteractionType: Removing temporary cache items for state: " + stateValue);
                    _this.resetRequestCache(stateValue);
                }
            });
            this.clearMsalCookies();
            this.setInteractionInProgress(false);
        };
        BrowserCacheManager.prototype.cacheCodeRequest = function (authCodeRequest, browserCrypto) {
            this.logger.trace("BrowserCacheManager.cacheCodeRequest called");
            var encodedValue = browserCrypto.base64Encode(JSON.stringify(authCodeRequest));
            this.setTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, encodedValue, true);
        };
        /**
         * Gets the token exchange parameters from the cache. Throws an error if nothing is found.
         */
        BrowserCacheManager.prototype.getCachedRequest = function (state, browserCrypto) {
            this.logger.trace("BrowserCacheManager.getCachedRequest called");
            // Get token request from cache and parse as TokenExchangeParameters.
            var encodedTokenRequest = this.getTemporaryCache(TemporaryCacheKeys.REQUEST_PARAMS, true);
            if (!encodedTokenRequest) {
                throw BrowserAuthError.createNoTokenRequestCacheError();
            }
            var parsedRequest = this.validateAndParseJson(browserCrypto.base64Decode(encodedTokenRequest));
            if (!parsedRequest) {
                throw BrowserAuthError.createUnableToParseTokenRequestCacheError();
            }
            this.removeItem(this.generateCacheKey(TemporaryCacheKeys.REQUEST_PARAMS));
            // Get cached authority and use if no authority is cached with request.
            if (StringUtils.isEmpty(parsedRequest.authority)) {
                var authorityCacheKey = this.generateAuthorityKey(state);
                var cachedAuthority = this.getTemporaryCache(authorityCacheKey);
                if (!cachedAuthority) {
                    throw BrowserAuthError.createNoCachedAuthorityError();
                }
                parsedRequest.authority = cachedAuthority;
            }
            return parsedRequest;
        };
        /**
         * Gets cached native request for redirect flows
         */
        BrowserCacheManager.prototype.getCachedNativeRequest = function () {
            this.logger.trace("BrowserCacheManager.getCachedNativeRequest called");
            var cachedRequest = this.getTemporaryCache(TemporaryCacheKeys.NATIVE_REQUEST, true);
            if (!cachedRequest) {
                this.logger.trace("BrowserCacheManager.getCachedNativeRequest: No cached native request found");
                return null;
            }
            var parsedRequest = this.validateAndParseJson(cachedRequest);
            if (!parsedRequest) {
                this.logger.error("BrowserCacheManager.getCachedNativeRequest: Unable to parse native request");
                return null;
            }
            return parsedRequest;
        };
        BrowserCacheManager.prototype.isInteractionInProgress = function (matchClientId) {
            var clientId = this.getInteractionInProgress();
            if (matchClientId) {
                return clientId === this.clientId;
            }
            else {
                return !!clientId;
            }
        };
        BrowserCacheManager.prototype.getInteractionInProgress = function () {
            var key = Constants.CACHE_PREFIX + "." + TemporaryCacheKeys.INTERACTION_STATUS_KEY;
            return this.getTemporaryCache(key, false);
        };
        BrowserCacheManager.prototype.setInteractionInProgress = function (inProgress) {
            // Ensure we don't overwrite interaction in progress for a different clientId
            var key = Constants.CACHE_PREFIX + "." + TemporaryCacheKeys.INTERACTION_STATUS_KEY;
            if (inProgress) {
                if (this.getInteractionInProgress()) {
                    throw BrowserAuthError.createInteractionInProgressError();
                }
                else {
                    // No interaction is in progress
                    this.setTemporaryCache(key, this.clientId, false);
                }
            }
            else if (!inProgress && this.getInteractionInProgress() === this.clientId) {
                this.removeItem(key);
            }
        };
        /**
         * Returns username retrieved from ADAL or MSAL v1 idToken
         */
        BrowserCacheManager.prototype.getLegacyLoginHint = function () {
            // Only check for adal/msal token if no SSO params are being used
            var adalIdTokenString = this.getTemporaryCache(PersistentCacheKeys.ADAL_ID_TOKEN);
            if (adalIdTokenString) {
                this.browserStorage.removeItem(PersistentCacheKeys.ADAL_ID_TOKEN);
                this.logger.verbose("Cached ADAL id token retrieved.");
            }
            // Check for cached MSAL v1 id token
            var msalIdTokenString = this.getTemporaryCache(PersistentCacheKeys.ID_TOKEN, true);
            if (msalIdTokenString) {
                this.removeItem(this.generateCacheKey(PersistentCacheKeys.ID_TOKEN));
                this.logger.verbose("Cached MSAL.js v1 id token retrieved");
            }
            var cachedIdTokenString = msalIdTokenString || adalIdTokenString;
            if (cachedIdTokenString) {
                var cachedIdToken = new AuthToken(cachedIdTokenString, this.cryptoImpl);
                if (cachedIdToken.claims && cachedIdToken.claims.preferred_username) {
                    this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 preferred_username as loginHint");
                    return cachedIdToken.claims.preferred_username;
                }
                else if (cachedIdToken.claims && cachedIdToken.claims.upn) {
                    this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, setting ADAL/MSAL v1 upn as loginHint");
                    return cachedIdToken.claims.upn;
                }
                else {
                    this.logger.verbose("No SSO params used and ADAL/MSAL v1 token retrieved, however, no account hint claim found. Enable preferred_username or upn id token claim to get SSO.");
                }
            }
            return null;
        };
        /**
         * Updates a credential's cache key if the current cache key is outdated
         */
        BrowserCacheManager.prototype.updateCredentialCacheKey = function (currentCacheKey, credential) {
            var updatedCacheKey = credential.generateCredentialKey();
            if (currentCacheKey !== updatedCacheKey) {
                var cacheItem = this.getItem(currentCacheKey);
                if (cacheItem) {
                    this.removeItem(currentCacheKey);
                    this.setItem(updatedCacheKey, cacheItem);
                    this.logger.verbose("Updated an outdated " + credential.credentialType + " cache key");
                    return updatedCacheKey;
                }
                else {
                    this.logger.error("Attempted to update an outdated " + credential.credentialType + " cache key but no item matching the outdated key was found in storage");
                }
            }
            return currentCacheKey;
        };
        return BrowserCacheManager;
    }(CacheManager));
    var DEFAULT_BROWSER_CACHE_MANAGER = function (clientId, logger) {
        var cacheOptions = {
            cacheLocation: BrowserCacheLocation.MemoryStorage,
            storeAuthStateInCookie: false,
            secureCookies: false
        };
        return new BrowserCacheManager(clientId, cacheOptions, DEFAULT_CRYPTO_IMPLEMENTATION, logger);
    };

    /*! @azure/msal-browser v2.26.0 2022-06-13 */
    /* eslint-disable header/header */
    var name = "@azure/msal-browser";
    var version = "2.26.0";

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * This class implements the Fetch API for GET and POST requests. See more here: https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API
     */
    var FetchClient = /** @class */ (function () {
        function FetchClient() {
        }
        /**
         * Fetch Client for REST endpoints - Get request
         * @param url
         * @param headers
         * @param body
         */
        FetchClient.prototype.sendGetRequestAsync = function (url, options) {
            return __awaiter$1(this, void 0, void 0, function () {
                var response, e_1, _a;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _b.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, fetch(url, {
                                    method: HTTP_REQUEST_TYPE.GET,
                                    headers: this.getFetchHeaders(options)
                                })];
                        case 1:
                            response = _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            e_1 = _b.sent();
                            if (window.navigator.onLine) {
                                throw BrowserAuthError.createGetRequestFailedError(e_1, url);
                            }
                            else {
                                throw BrowserAuthError.createNoNetworkConnectivityError();
                            }
                        case 3:
                            _b.trys.push([3, 5, , 6]);
                            _a = {
                                headers: this.getHeaderDict(response.headers)
                            };
                            return [4 /*yield*/, response.json()];
                        case 4: return [2 /*return*/, (_a.body = (_b.sent()),
                                _a.status = response.status,
                                _a)];
                        case 5:
                            _b.sent();
                            throw BrowserAuthError.createFailedToParseNetworkResponseError(url);
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Fetch Client for REST endpoints - Post request
         * @param url
         * @param headers
         * @param body
         */
        FetchClient.prototype.sendPostRequestAsync = function (url, options) {
            return __awaiter$1(this, void 0, void 0, function () {
                var reqBody, response, e_3, _a;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            reqBody = (options && options.body) || Constants.EMPTY_STRING;
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, fetch(url, {
                                    method: HTTP_REQUEST_TYPE.POST,
                                    headers: this.getFetchHeaders(options),
                                    body: reqBody
                                })];
                        case 2:
                            response = _b.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_3 = _b.sent();
                            if (window.navigator.onLine) {
                                throw BrowserAuthError.createPostRequestFailedError(e_3, url);
                            }
                            else {
                                throw BrowserAuthError.createNoNetworkConnectivityError();
                            }
                        case 4:
                            _b.trys.push([4, 6, , 7]);
                            _a = {
                                headers: this.getHeaderDict(response.headers)
                            };
                            return [4 /*yield*/, response.json()];
                        case 5: return [2 /*return*/, (_a.body = (_b.sent()),
                                _a.status = response.status,
                                _a)];
                        case 6:
                            _b.sent();
                            throw BrowserAuthError.createFailedToParseNetworkResponseError(url);
                        case 7: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Get Fetch API Headers object from string map
         * @param inputHeaders
         */
        FetchClient.prototype.getFetchHeaders = function (options) {
            var headers = new Headers();
            if (!(options && options.headers)) {
                return headers;
            }
            var optionsHeaders = options.headers;
            Object.keys(optionsHeaders).forEach(function (key) {
                headers.append(key, optionsHeaders[key]);
            });
            return headers;
        };
        FetchClient.prototype.getHeaderDict = function (headers) {
            var headerDict = {};
            headers.forEach(function (value, key) {
                headerDict[key] = value;
            });
            return headerDict;
        };
        return FetchClient;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * This client implements the XMLHttpRequest class to send GET and POST requests.
     */
    var XhrClient = /** @class */ (function () {
        function XhrClient() {
        }
        /**
         * XhrClient for REST endpoints - Get request
         * @param url
         * @param headers
         * @param body
         */
        XhrClient.prototype.sendGetRequestAsync = function (url, options) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, this.sendRequestAsync(url, HTTP_REQUEST_TYPE.GET, options)];
                });
            });
        };
        /**
         * XhrClient for REST endpoints - Post request
         * @param url
         * @param headers
         * @param body
         */
        XhrClient.prototype.sendPostRequestAsync = function (url, options) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, this.sendRequestAsync(url, HTTP_REQUEST_TYPE.POST, options)];
                });
            });
        };
        /**
         * Helper for XhrClient requests.
         * @param url
         * @param method
         * @param options
         */
        XhrClient.prototype.sendRequestAsync = function (url, method, options) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                var xhr = new XMLHttpRequest();
                xhr.open(method, url, /* async: */ true);
                _this.setXhrHeaders(xhr, options);
                xhr.onload = function () {
                    if (xhr.status < 200 || xhr.status >= 300) {
                        if (method === HTTP_REQUEST_TYPE.POST) {
                            reject(BrowserAuthError.createPostRequestFailedError("Failed with status " + xhr.status, url));
                        }
                        else {
                            reject(BrowserAuthError.createGetRequestFailedError("Failed with status " + xhr.status, url));
                        }
                    }
                    try {
                        var jsonResponse = JSON.parse(xhr.responseText);
                        var networkResponse = {
                            headers: _this.getHeaderDict(xhr),
                            body: jsonResponse,
                            status: xhr.status
                        };
                        resolve(networkResponse);
                    }
                    catch (e) {
                        reject(BrowserAuthError.createFailedToParseNetworkResponseError(url));
                    }
                };
                xhr.onerror = function () {
                    if (window.navigator.onLine) {
                        if (method === HTTP_REQUEST_TYPE.POST) {
                            reject(BrowserAuthError.createPostRequestFailedError("Failed with status " + xhr.status, url));
                        }
                        else {
                            reject(BrowserAuthError.createGetRequestFailedError("Failed with status " + xhr.status, url));
                        }
                    }
                    else {
                        reject(BrowserAuthError.createNoNetworkConnectivityError());
                    }
                };
                if (method === HTTP_REQUEST_TYPE.POST && options && options.body) {
                    xhr.send(options.body);
                }
                else if (method === HTTP_REQUEST_TYPE.GET) {
                    xhr.send();
                }
                else {
                    throw BrowserAuthError.createHttpMethodNotImplementedError(method);
                }
            });
        };
        /**
         * Helper to set XHR headers for request.
         * @param xhr
         * @param options
         */
        XhrClient.prototype.setXhrHeaders = function (xhr, options) {
            if (options && options.headers) {
                var headers_1 = options.headers;
                Object.keys(headers_1).forEach(function (key) {
                    xhr.setRequestHeader(key, headers_1[key]);
                });
            }
        };
        /**
         * Gets a string map of the headers received in the response.
         *
         * Algorithm comes from https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders
         * @param xhr
         */
        XhrClient.prototype.getHeaderDict = function (xhr) {
            var headerString = xhr.getAllResponseHeaders();
            var headerArr = headerString.trim().split(/[\r\n]+/);
            var headerDict = {};
            headerArr.forEach(function (value) {
                var parts = value.split(": ");
                var headerName = parts.shift();
                var headerVal = parts.join(": ");
                if (headerName && headerVal) {
                    headerDict[headerName] = headerVal;
                }
            });
            return headerDict;
        };
        return XhrClient;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility class for browser specific functions
     */
    var BrowserUtils = /** @class */ (function () {
        function BrowserUtils() {
        }
        // #region Window Navigation and URL management
        /**
         * Clears hash from window url.
         */
        BrowserUtils.clearHash = function (contentWindow) {
            // Office.js sets history.replaceState to null
            contentWindow.location.hash = Constants.EMPTY_STRING;
            if (typeof contentWindow.history.replaceState === "function") {
                // Full removes "#" from url
                contentWindow.history.replaceState(null, Constants.EMPTY_STRING, "" + contentWindow.location.origin + contentWindow.location.pathname + contentWindow.location.search);
            }
        };
        /**
         * Replaces current hash with hash from provided url
         */
        BrowserUtils.replaceHash = function (url) {
            var urlParts = url.split("#");
            urlParts.shift(); // Remove part before the hash
            window.location.hash = urlParts.length > 0 ? urlParts.join("#") : Constants.EMPTY_STRING;
        };
        /**
         * Returns boolean of whether the current window is in an iframe or not.
         */
        BrowserUtils.isInIframe = function () {
            return window.parent !== window;
        };
        /**
         * Returns boolean of whether or not the current window is a popup opened by msal
         */
        BrowserUtils.isInPopup = function () {
            return typeof window !== "undefined" && !!window.opener &&
                window.opener !== window &&
                typeof window.name === "string" &&
                window.name.indexOf(BrowserConstants.POPUP_NAME_PREFIX + ".") === 0;
        };
        // #endregion
        /**
         * Returns current window URL as redirect uri
         */
        BrowserUtils.getCurrentUri = function () {
            return window.location.href.split("?")[0].split("#")[0];
        };
        /**
         * Gets the homepage url for the current window location.
         */
        BrowserUtils.getHomepage = function () {
            var currentUrl = new UrlString(window.location.href);
            var urlComponents = currentUrl.getUrlComponents();
            return urlComponents.Protocol + "//" + urlComponents.HostNameAndPort + "/";
        };
        /**
         * Returns best compatible network client object.
         */
        BrowserUtils.getBrowserNetworkClient = function () {
            if (window.fetch && window.Headers) {
                return new FetchClient();
            }
            else {
                return new XhrClient();
            }
        };
        /**
         * Throws error if we have completed an auth and are
         * attempting another auth request inside an iframe.
         */
        BrowserUtils.blockReloadInHiddenIframes = function () {
            var isResponseHash = UrlString.hashContainsKnownProperties(window.location.hash);
            // return an error if called from the hidden iframe created by the msal js silent calls
            if (isResponseHash && BrowserUtils.isInIframe()) {
                throw BrowserAuthError.createBlockReloadInHiddenIframeError();
            }
        };
        /**
         * Block redirect operations in iframes unless explicitly allowed
         * @param interactionType Interaction type for the request
         * @param allowRedirectInIframe Config value to allow redirects when app is inside an iframe
         */
        BrowserUtils.blockRedirectInIframe = function (interactionType, allowRedirectInIframe) {
            var isIframedApp = BrowserUtils.isInIframe();
            if (interactionType === InteractionType.Redirect && isIframedApp && !allowRedirectInIframe) {
                // If we are not in top frame, we shouldn't redirect. This is also handled by the service.
                throw BrowserAuthError.createRedirectInIframeError(isIframedApp);
            }
        };
        /**
         * Block redirectUri loaded in popup from calling AcquireToken APIs
         */
        BrowserUtils.blockAcquireTokenInPopups = function () {
            // Popups opened by msal popup APIs are given a name that starts with "msal."
            if (BrowserUtils.isInPopup()) {
                throw BrowserAuthError.createBlockAcquireTokenInPopupsError();
            }
        };
        /**
         * Throws error if token requests are made in non-browser environment
         * @param isBrowserEnvironment Flag indicating if environment is a browser.
         */
        BrowserUtils.blockNonBrowserEnvironment = function (isBrowserEnvironment) {
            if (!isBrowserEnvironment) {
                throw BrowserAuthError.createNonBrowserEnvironmentError();
            }
        };
        /**
         * Throws error if native brokering is enabled but initialize hasn't been called
         * @param allowNativeBroker
         * @param initialized
         */
        BrowserUtils.blockNativeBrokerCalledBeforeInitialized = function (allowNativeBroker, initialized) {
            if (allowNativeBroker && !initialized) {
                throw BrowserAuthError.createNativeBrokerCalledBeforeInitialize();
            }
        };
        /**
         * Returns boolean of whether current browser is an Internet Explorer or Edge browser.
         */
        BrowserUtils.detectIEOrEdge = function () {
            var ua = window.navigator.userAgent;
            var msie = ua.indexOf("MSIE ");
            var msie11 = ua.indexOf("Trident/");
            var msedge = ua.indexOf("Edge/");
            var isIE = msie > 0 || msie11 > 0;
            var isEdge = msedge > 0;
            return isIE || isEdge;
        };
        return BrowserUtils;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var BaseInteractionClient = /** @class */ (function () {
        function BaseInteractionClient(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) {
            this.config = config;
            this.browserStorage = storageImpl;
            this.browserCrypto = browserCrypto;
            this.networkClient = this.config.system.networkClient;
            this.eventHandler = eventHandler;
            this.navigationClient = navigationClient;
            this.nativeMessageHandler = nativeMessageHandler;
            this.correlationId = correlationId || this.browserCrypto.createNewGuid();
            this.logger = logger.clone(BrowserConstants.MSAL_SKU, version, this.correlationId);
            this.performanceClient = performanceClient;
        }
        BaseInteractionClient.prototype.clearCacheOnLogout = function (account) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!account) return [3 /*break*/, 5];
                            if (AccountEntity.accountInfoIsEqual(account, this.browserStorage.getActiveAccount(), false)) {
                                this.logger.verbose("Setting active account to null");
                                this.browserStorage.setActiveAccount(null);
                            }
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.browserStorage.removeAccount(AccountEntity.generateAccountCacheKey(account))];
                        case 2:
                            _a.sent();
                            this.logger.verbose("Cleared cache items belonging to the account provided in the logout request.");
                            return [3 /*break*/, 4];
                        case 3:
                            _a.sent();
                            this.logger.error("Account provided in logout request was not found. Local cache unchanged.");
                            return [3 /*break*/, 4];
                        case 4: return [3 /*break*/, 9];
                        case 5:
                            _a.trys.push([5, 8, , 9]);
                            this.logger.verbose("No account provided in logout request, clearing all cache items.", this.correlationId);
                            // Clear all accounts and tokens
                            return [4 /*yield*/, this.browserStorage.clear()];
                        case 6:
                            // Clear all accounts and tokens
                            _a.sent();
                            // Clear any stray keys from IndexedDB
                            return [4 /*yield*/, this.browserCrypto.clearKeystore()];
                        case 7:
                            // Clear any stray keys from IndexedDB
                            _a.sent();
                            return [3 /*break*/, 9];
                        case 8:
                            _a.sent();
                            this.logger.error("Attempted to clear all MSAL cache items and failed. Local cache unchanged.");
                            return [3 /*break*/, 9];
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Initializer function for all request APIs
         * @param request
         */
        BaseInteractionClient.prototype.initializeBaseRequest = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var authority, scopes, validatedRequest, _a;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.verbose("Initializing BaseAuthRequest");
                            authority = request.authority || this.config.auth.authority;
                            scopes = __spread(((request && request.scopes) || []));
                            validatedRequest = __assign$1(__assign$1({}, request), { correlationId: this.correlationId, authority: authority,
                                scopes: scopes });
                            // Set authenticationScheme to BEARER if not explicitly set in the request
                            if (!validatedRequest.authenticationScheme) {
                                validatedRequest.authenticationScheme = AuthenticationScheme.BEARER;
                                this.logger.verbose("Authentication Scheme wasn't explicitly set in request, defaulting to \"Bearer\" request");
                            }
                            else {
                                if (validatedRequest.authenticationScheme === AuthenticationScheme.SSH) {
                                    if (!request.sshJwk) {
                                        throw ClientConfigurationError.createMissingSshJwkError();
                                    }
                                    if (!request.sshKid) {
                                        throw ClientConfigurationError.createMissingSshKidError();
                                    }
                                }
                                this.logger.verbose("Authentication Scheme set to \"" + validatedRequest.authenticationScheme + "\" as configured in Auth request");
                            }
                            if (!(request.claims && !StringUtils.isEmpty(request.claims))) return [3 /*break*/, 2];
                            _a = validatedRequest;
                            return [4 /*yield*/, this.browserCrypto.hashString(request.claims)];
                        case 1:
                            _a.requestedClaimsHash = _b.sent();
                            _b.label = 2;
                        case 2: return [2 /*return*/, validatedRequest];
                    }
                });
            });
        };
        /**
         *
         * Use to get the redirect uri configured in MSAL or null.
         * @param requestRedirectUri
         * @returns Redirect URL
         *
         */
        BaseInteractionClient.prototype.getRedirectUri = function (requestRedirectUri) {
            this.logger.verbose("getRedirectUri called");
            var redirectUri = requestRedirectUri || this.config.auth.redirectUri || BrowserUtils.getCurrentUri();
            return UrlString.getAbsoluteUrl(redirectUri, BrowserUtils.getCurrentUri());
        };
        /**
         *
         * @param apiId
         * @param correlationId
         * @param forceRefresh
         */
        BaseInteractionClient.prototype.initializeServerTelemetryManager = function (apiId, forceRefresh) {
            this.logger.verbose("initializeServerTelemetryManager called");
            var telemetryPayload = {
                clientId: this.config.auth.clientId,
                correlationId: this.correlationId,
                apiId: apiId,
                forceRefresh: forceRefresh || false,
                wrapperSKU: this.browserStorage.getWrapperMetadata()[0],
                wrapperVer: this.browserStorage.getWrapperMetadata()[1]
            };
            return new ServerTelemetryManager(telemetryPayload, this.browserStorage);
        };
        /**
         * Used to get a discovered version of the default authority.
         * @param requestAuthority
         * @param requestCorrelationId
         */
        BaseInteractionClient.prototype.getDiscoveredAuthority = function (requestAuthority) {
            return __awaiter$1(this, void 0, void 0, function () {
                var authorityOptions;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("getDiscoveredAuthority called");
                            authorityOptions = {
                                protocolMode: this.config.auth.protocolMode,
                                knownAuthorities: this.config.auth.knownAuthorities,
                                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                                authorityMetadata: this.config.auth.authorityMetadata
                            };
                            if (!requestAuthority) return [3 /*break*/, 2];
                            this.logger.verbose("Creating discovered authority with request authority");
                            return [4 /*yield*/, AuthorityFactory.createDiscoveredInstance(requestAuthority, this.config.system.networkClient, this.browserStorage, authorityOptions)];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2:
                            this.logger.verbose("Creating discovered authority with configured authority");
                            return [4 /*yield*/, AuthorityFactory.createDiscoveredInstance(this.config.auth.authority, this.config.system.networkClient, this.browserStorage, authorityOptions)];
                        case 3: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        return BaseInteractionClient;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Defines the class structure and helper functions used by the "standard", non-brokered auth flows (popup, redirect, silent (RT), silent (iframe))
     */
    var StandardInteractionClient = /** @class */ (function (_super) {
        __extends$1(StandardInteractionClient, _super);
        function StandardInteractionClient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Generates an auth code request tied to the url request.
         * @param request
         */
        StandardInteractionClient.prototype.initializeAuthorizationCodeRequest = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var generatedPkceParams, authCodeRequest;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("initializeAuthorizationRequest called", request.correlationId);
                            return [4 /*yield*/, this.browserCrypto.generatePkceCodes()];
                        case 1:
                            generatedPkceParams = _a.sent();
                            authCodeRequest = __assign$1(__assign$1({}, request), { redirectUri: request.redirectUri, code: Constants.EMPTY_STRING, codeVerifier: generatedPkceParams.verifier });
                            request.codeChallenge = generatedPkceParams.challenge;
                            request.codeChallengeMethod = Constants.S256_CODE_CHALLENGE_METHOD;
                            return [2 /*return*/, authCodeRequest];
                    }
                });
            });
        };
        /**
         * Initializer for the logout request.
         * @param logoutRequest
         */
        StandardInteractionClient.prototype.initializeLogoutRequest = function (logoutRequest) {
            this.logger.verbose("initializeLogoutRequest called", logoutRequest === null || logoutRequest === void 0 ? void 0 : logoutRequest.correlationId);
            var validLogoutRequest = __assign$1({ correlationId: this.correlationId || this.browserCrypto.createNewGuid() }, logoutRequest);
            /**
             * Set logout_hint to be login_hint from ID Token Claims if present
             * and logoutHint attribute wasn't manually set in logout request
             */
            if (logoutRequest) {
                // If logoutHint isn't set and an account was passed in, try to extract logoutHint from ID Token Claims
                if (!logoutRequest.logoutHint) {
                    if (logoutRequest.account) {
                        var logoutHint = this.getLogoutHintFromIdTokenClaims(logoutRequest.account);
                        if (logoutHint) {
                            this.logger.verbose("Setting logoutHint to login_hint ID Token Claim value for the account provided");
                            validLogoutRequest.logoutHint = logoutHint;
                        }
                    }
                    else {
                        this.logger.verbose("logoutHint was not set and account was not passed into logout request, logoutHint will not be set");
                    }
                }
                else {
                    this.logger.verbose("logoutHint has already been set in logoutRequest");
                }
            }
            else {
                this.logger.verbose("logoutHint will not be set since no logout request was configured");
            }
            /*
             * Only set redirect uri if logout request isn't provided or the set uri isn't null.
             * Otherwise, use passed uri, config, or current page.
             */
            if (!logoutRequest || logoutRequest.postLogoutRedirectUri !== null) {
                if (logoutRequest && logoutRequest.postLogoutRedirectUri) {
                    this.logger.verbose("Setting postLogoutRedirectUri to uri set on logout request", validLogoutRequest.correlationId);
                    validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(logoutRequest.postLogoutRedirectUri, BrowserUtils.getCurrentUri());
                }
                else if (this.config.auth.postLogoutRedirectUri === null) {
                    this.logger.verbose("postLogoutRedirectUri configured as null and no uri set on request, not passing post logout redirect", validLogoutRequest.correlationId);
                }
                else if (this.config.auth.postLogoutRedirectUri) {
                    this.logger.verbose("Setting postLogoutRedirectUri to configured uri", validLogoutRequest.correlationId);
                    validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(this.config.auth.postLogoutRedirectUri, BrowserUtils.getCurrentUri());
                }
                else {
                    this.logger.verbose("Setting postLogoutRedirectUri to current page", validLogoutRequest.correlationId);
                    validLogoutRequest.postLogoutRedirectUri = UrlString.getAbsoluteUrl(BrowserUtils.getCurrentUri(), BrowserUtils.getCurrentUri());
                }
            }
            else {
                this.logger.verbose("postLogoutRedirectUri passed as null, not setting post logout redirect uri", validLogoutRequest.correlationId);
            }
            return validLogoutRequest;
        };
        /**
         * Parses login_hint ID Token Claim out of AccountInfo object to be used as
         * logout_hint in end session request.
         * @param account
         */
        StandardInteractionClient.prototype.getLogoutHintFromIdTokenClaims = function (account) {
            var idTokenClaims = account.idTokenClaims;
            if (idTokenClaims) {
                if (idTokenClaims.login_hint) {
                    return idTokenClaims.login_hint;
                }
                else {
                    this.logger.verbose("The ID Token Claims tied to the provided account do not contain a login_hint claim, logoutHint will not be added to logout request");
                }
            }
            else {
                this.logger.verbose("The provided account does not contain ID Token Claims, logoutHint will not be added to logout request");
            }
            return null;
        };
        /**
         * Creates an Authorization Code Client with the given authority, or the default authority.
         * @param serverTelemetryManager
         * @param authorityUrl
         */
        StandardInteractionClient.prototype.createAuthCodeClient = function (serverTelemetryManager, authorityUrl, requestAzureCloudOptions) {
            return __awaiter$1(this, void 0, void 0, function () {
                var clientConfig;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getClientConfiguration(serverTelemetryManager, authorityUrl, requestAzureCloudOptions)];
                        case 1:
                            clientConfig = _a.sent();
                            return [2 /*return*/, new AuthorizationCodeClient(clientConfig)];
                    }
                });
            });
        };
        /**
         * Creates a Client Configuration object with the given request authority, or the default authority.
         * @param serverTelemetryManager
         * @param requestAuthority
         * @param requestCorrelationId
         */
        StandardInteractionClient.prototype.getClientConfiguration = function (serverTelemetryManager, requestAuthority, requestAzureCloudOptions) {
            return __awaiter$1(this, void 0, void 0, function () {
                var discoveredAuthority;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("getClientConfiguration called", this.correlationId);
                            return [4 /*yield*/, this.getDiscoveredAuthority(requestAuthority, requestAzureCloudOptions)];
                        case 1:
                            discoveredAuthority = _a.sent();
                            return [2 /*return*/, {
                                    authOptions: {
                                        clientId: this.config.auth.clientId,
                                        authority: discoveredAuthority,
                                        clientCapabilities: this.config.auth.clientCapabilities
                                    },
                                    systemOptions: {
                                        tokenRenewalOffsetSeconds: this.config.system.tokenRenewalOffsetSeconds,
                                        preventCorsPreflight: true
                                    },
                                    loggerOptions: {
                                        loggerCallback: this.config.system.loggerOptions.loggerCallback,
                                        piiLoggingEnabled: this.config.system.loggerOptions.piiLoggingEnabled,
                                        logLevel: this.config.system.loggerOptions.logLevel,
                                        correlationId: this.correlationId
                                    },
                                    cryptoInterface: this.browserCrypto,
                                    networkInterface: this.networkClient,
                                    storageInterface: this.browserStorage,
                                    serverTelemetryManager: serverTelemetryManager,
                                    libraryInfo: {
                                        sku: BrowserConstants.MSAL_SKU,
                                        version: version,
                                        cpu: Constants.EMPTY_STRING,
                                        os: Constants.EMPTY_STRING
                                    },
                                    telemetry: this.config.telemetry
                                }];
                    }
                });
            });
        };
        /**
         * @param hash
         * @param interactionType
         */
        StandardInteractionClient.prototype.validateAndExtractStateFromHash = function (serverParams, interactionType, requestCorrelationId) {
            this.logger.verbose("validateAndExtractStateFromHash called", requestCorrelationId);
            if (!serverParams.state) {
                throw BrowserAuthError.createHashDoesNotContainStateError();
            }
            var platformStateObj = BrowserProtocolUtils.extractBrowserRequestState(this.browserCrypto, serverParams.state);
            if (!platformStateObj) {
                throw BrowserAuthError.createUnableToParseStateError();
            }
            if (platformStateObj.interactionType !== interactionType) {
                throw BrowserAuthError.createStateInteractionTypeMismatchError();
            }
            this.logger.verbose("Returning state from hash", requestCorrelationId);
            return serverParams.state;
        };
        /**
         * Used to get a discovered version of the default authority.
         * @param requestAuthority
         * @param requestCorrelationId
         */
        StandardInteractionClient.prototype.getDiscoveredAuthority = function (requestAuthority, requestAzureCloudOptions) {
            return __awaiter$1(this, void 0, void 0, function () {
                var getAuthorityMeasurement, authorityOptions, userAuthority, builtAuthority;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("getDiscoveredAuthority called", this.correlationId);
                            getAuthorityMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.StandardInteractionClientGetDiscoveredAuthority, this.correlationId);
                            authorityOptions = {
                                protocolMode: this.config.auth.protocolMode,
                                knownAuthorities: this.config.auth.knownAuthorities,
                                cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                                authorityMetadata: this.config.auth.authorityMetadata,
                            };
                            userAuthority = requestAuthority ? requestAuthority : this.config.auth.authority;
                            builtAuthority = Authority.generateAuthority(userAuthority, requestAzureCloudOptions || this.config.auth.azureCloudOptions);
                            this.logger.verbose("Creating discovered authority with configured authority", this.correlationId);
                            return [4 /*yield*/, AuthorityFactory.createDiscoveredInstance(builtAuthority, this.config.system.networkClient, this.browserStorage, authorityOptions)
                                    .then(function (result) {
                                    getAuthorityMeasurement.endMeasurement({
                                        success: true
                                    });
                                    return result;
                                })
                                    .catch(function (error) {
                                    getAuthorityMeasurement.endMeasurement({
                                        errorCode: error.errorCode,
                                        subErrorCode: error.subError,
                                        success: false
                                    });
                                    throw error;
                                })];
                        case 1: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Helper to initialize required request parameters for interactive APIs and ssoSilent()
         * @param request
         * @param interactionType
         */
        StandardInteractionClient.prototype.initializeAuthorizationRequest = function (request, interactionType) {
            return __awaiter$1(this, void 0, void 0, function () {
                var redirectUri, browserState, state, validatedRequest, _a, account, legacyLoginHint;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.verbose("initializeAuthorizationRequest called", this.correlationId);
                            redirectUri = this.getRedirectUri(request.redirectUri);
                            browserState = {
                                interactionType: interactionType
                            };
                            state = ProtocolUtils.setRequestState(this.browserCrypto, (request && request.state) || Constants.EMPTY_STRING, browserState);
                            _a = [{}];
                            return [4 /*yield*/, this.initializeBaseRequest(request)];
                        case 1:
                            validatedRequest = __assign$1.apply(void 0, [__assign$1.apply(void 0, _a.concat([_b.sent()])), { redirectUri: redirectUri, state: state, nonce: request.nonce || this.browserCrypto.createNewGuid(), responseMode: ResponseMode.FRAGMENT }]);
                            account = request.account || this.browserStorage.getActiveAccount();
                            if (account) {
                                this.logger.verbose("Setting validated request account", this.correlationId);
                                this.logger.verbosePii("Setting validated request account: " + account.homeAccountId, this.correlationId);
                                validatedRequest.account = account;
                            }
                            // Check for ADAL/MSAL v1 SSO
                            if (StringUtils.isEmpty(validatedRequest.loginHint) && !account) {
                                legacyLoginHint = this.browserStorage.getLegacyLoginHint();
                                if (legacyLoginHint) {
                                    validatedRequest.loginHint = legacyLoginHint;
                                }
                            }
                            return [2 /*return*/, validatedRequest];
                    }
                });
            });
        };
        return StandardInteractionClient;
    }(BaseInteractionClient));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Abstract class which defines operations for a browser interaction handling class.
     */
    var InteractionHandler = /** @class */ (function () {
        function InteractionHandler(authCodeModule, storageImpl, authCodeRequest, logger) {
            this.authModule = authCodeModule;
            this.browserStorage = storageImpl;
            this.authCodeRequest = authCodeRequest;
            this.logger = logger;
        }
        /**
         * Function to handle response parameters from hash.
         * @param locationHash
         */
        InteractionHandler.prototype.handleCodeResponseFromHash = function (locationHash, state, authority, networkModule) {
            return __awaiter$1(this, void 0, void 0, function () {
                var stateKey, requestState, authCodeResponse;
                return __generator$1(this, function (_a) {
                    this.logger.verbose("InteractionHandler.handleCodeResponse called");
                    // Check that location hash isn't empty.
                    if (StringUtils.isEmpty(locationHash)) {
                        throw BrowserAuthError.createEmptyHashError(locationHash);
                    }
                    stateKey = this.browserStorage.generateStateKey(state);
                    requestState = this.browserStorage.getTemporaryCache(stateKey);
                    if (!requestState) {
                        throw ClientAuthError.createStateNotFoundError("Cached State");
                    }
                    try {
                        authCodeResponse = this.authModule.handleFragmentResponse(locationHash, requestState);
                    }
                    catch (e) {
                        if (e instanceof ServerError && e.subError === BrowserAuthErrorMessage.userCancelledError.code) {
                            // Translate server error caused by user closing native prompt to corresponding first class MSAL error
                            throw BrowserAuthError.createUserCancelledError();
                        }
                        else {
                            throw e;
                        }
                    }
                    return [2 /*return*/, this.handleCodeResponseFromServer(authCodeResponse, state, authority, networkModule)];
                });
            });
        };
        /**
         * Process auth code response from AAD
         * @param authCodeResponse
         * @param state
         * @param authority
         * @param networkModule
         * @returns
         */
        InteractionHandler.prototype.handleCodeResponseFromServer = function (authCodeResponse, state, authority, networkModule, validateNonce) {
            if (validateNonce === void 0) { validateNonce = true; }
            return __awaiter$1(this, void 0, void 0, function () {
                var stateKey, requestState, nonceKey, cachedNonce, cachedCcsCred, tokenResponse;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.trace("InteractionHandler.handleCodeResponseFromServer called");
                            stateKey = this.browserStorage.generateStateKey(state);
                            requestState = this.browserStorage.getTemporaryCache(stateKey);
                            if (!requestState) {
                                throw ClientAuthError.createStateNotFoundError("Cached State");
                            }
                            nonceKey = this.browserStorage.generateNonceKey(requestState);
                            cachedNonce = this.browserStorage.getTemporaryCache(nonceKey);
                            // Assign code to request
                            this.authCodeRequest.code = authCodeResponse.code;
                            if (!authCodeResponse.cloud_instance_host_name) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.updateTokenEndpointAuthority(authCodeResponse.cloud_instance_host_name, authority, networkModule)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            // Nonce validation not needed when redirect not involved (e.g. hybrid spa, renewing token via rt)
                            if (validateNonce) {
                                authCodeResponse.nonce = cachedNonce || undefined;
                            }
                            authCodeResponse.state = requestState;
                            // Add CCS parameters if available
                            if (authCodeResponse.client_info) {
                                this.authCodeRequest.clientInfo = authCodeResponse.client_info;
                            }
                            else {
                                cachedCcsCred = this.checkCcsCredentials();
                                if (cachedCcsCred) {
                                    this.authCodeRequest.ccsCredential = cachedCcsCred;
                                }
                            }
                            return [4 /*yield*/, this.authModule.acquireToken(this.authCodeRequest, authCodeResponse)];
                        case 3:
                            tokenResponse = _a.sent();
                            this.browserStorage.cleanRequestByState(state);
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        /**
         * Updates authority based on cloudInstanceHostname
         * @param cloudInstanceHostname
         * @param authority
         * @param networkModule
         */
        InteractionHandler.prototype.updateTokenEndpointAuthority = function (cloudInstanceHostname, authority, networkModule) {
            return __awaiter$1(this, void 0, void 0, function () {
                var cloudInstanceAuthorityUri, cloudInstanceAuthority;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cloudInstanceAuthorityUri = "https://" + cloudInstanceHostname + "/" + authority.tenant + "/";
                            return [4 /*yield*/, AuthorityFactory.createDiscoveredInstance(cloudInstanceAuthorityUri, networkModule, this.browserStorage, authority.options)];
                        case 1:
                            cloudInstanceAuthority = _a.sent();
                            this.authModule.updateAuthority(cloudInstanceAuthority);
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Looks up ccs creds in the cache
         */
        InteractionHandler.prototype.checkCcsCredentials = function () {
            // Look up ccs credential in temp cache
            var cachedCcsCred = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.CCS_CREDENTIAL, true);
            if (cachedCcsCred) {
                try {
                    return JSON.parse(cachedCcsCred);
                }
                catch (e) {
                    this.authModule.logger.error("Cache credential could not be parsed");
                    this.authModule.logger.errorPii("Cache credential could not be parsed: " + cachedCcsCred);
                }
            }
            return null;
        };
        return InteractionHandler;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var RedirectHandler = /** @class */ (function (_super) {
        __extends$1(RedirectHandler, _super);
        function RedirectHandler(authCodeModule, storageImpl, authCodeRequest, logger, browserCrypto) {
            var _this = _super.call(this, authCodeModule, storageImpl, authCodeRequest, logger) || this;
            _this.browserCrypto = browserCrypto;
            return _this;
        }
        /**
         * Redirects window to given URL.
         * @param urlNavigate
         */
        RedirectHandler.prototype.initiateAuthRequest = function (requestUrl, params) {
            return __awaiter$1(this, void 0, void 0, function () {
                var navigationOptions, navigate;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("RedirectHandler.initiateAuthRequest called");
                            if (!!StringUtils.isEmpty(requestUrl)) return [3 /*break*/, 7];
                            // Cache start page, returns to this page after redirectUri if navigateToLoginRequestUrl is true
                            if (params.redirectStartPage) {
                                this.logger.verbose("RedirectHandler.initiateAuthRequest: redirectStartPage set, caching start page");
                                this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, params.redirectStartPage, true);
                            }
                            // Set interaction status in the library.
                            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.CORRELATION_ID, this.authCodeRequest.correlationId, true);
                            this.browserStorage.cacheCodeRequest(this.authCodeRequest, this.browserCrypto);
                            this.logger.infoPii("RedirectHandler.initiateAuthRequest: Navigate to: " + requestUrl);
                            navigationOptions = {
                                apiId: ApiId.acquireTokenRedirect,
                                timeout: params.redirectTimeout,
                                noHistory: false
                            };
                            if (!(typeof params.onRedirectNavigate === "function")) return [3 /*break*/, 4];
                            this.logger.verbose("RedirectHandler.initiateAuthRequest: Invoking onRedirectNavigate callback");
                            navigate = params.onRedirectNavigate(requestUrl);
                            if (!(navigate !== false)) return [3 /*break*/, 2];
                            this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate did not return false, navigating");
                            return [4 /*yield*/, params.navigationClient.navigateExternal(requestUrl, navigationOptions)];
                        case 1:
                            _a.sent();
                            return [2 /*return*/];
                        case 2:
                            this.logger.verbose("RedirectHandler.initiateAuthRequest: onRedirectNavigate returned false, stopping navigation");
                            return [2 /*return*/];
                        case 3: return [3 /*break*/, 6];
                        case 4:
                            // Navigate window to request URL
                            this.logger.verbose("RedirectHandler.initiateAuthRequest: Navigating window to navigate url");
                            return [4 /*yield*/, params.navigationClient.navigateExternal(requestUrl, navigationOptions)];
                        case 5:
                            _a.sent();
                            return [2 /*return*/];
                        case 6: return [3 /*break*/, 8];
                        case 7:
                            // Throw error if request URL is empty.
                            this.logger.info("RedirectHandler.initiateAuthRequest: Navigate url is empty");
                            throw BrowserAuthError.createEmptyNavigationUriError();
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Handle authorization code response in the window.
         * @param hash
         */
        RedirectHandler.prototype.handleCodeResponseFromHash = function (locationHash, state, authority, networkModule) {
            return __awaiter$1(this, void 0, void 0, function () {
                var stateKey, requestState, authCodeResponse, nonceKey, cachedNonce, cachedCcsCred, tokenResponse;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("RedirectHandler.handleCodeResponse called");
                            // Check that location hash isn't empty.
                            if (StringUtils.isEmpty(locationHash)) {
                                throw BrowserAuthError.createEmptyHashError(locationHash);
                            }
                            // Interaction is completed - remove interaction status.
                            this.browserStorage.setInteractionInProgress(false);
                            stateKey = this.browserStorage.generateStateKey(state);
                            requestState = this.browserStorage.getTemporaryCache(stateKey);
                            if (!requestState) {
                                throw ClientAuthError.createStateNotFoundError("Cached State");
                            }
                            try {
                                authCodeResponse = this.authModule.handleFragmentResponse(locationHash, requestState);
                            }
                            catch (e) {
                                if (e instanceof ServerError && e.subError === BrowserAuthErrorMessage.userCancelledError.code) {
                                    // Translate server error caused by user closing native prompt to corresponding first class MSAL error
                                    throw BrowserAuthError.createUserCancelledError();
                                }
                                else {
                                    throw e;
                                }
                            }
                            nonceKey = this.browserStorage.generateNonceKey(requestState);
                            cachedNonce = this.browserStorage.getTemporaryCache(nonceKey);
                            // Assign code to request
                            this.authCodeRequest.code = authCodeResponse.code;
                            if (!authCodeResponse.cloud_instance_host_name) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.updateTokenEndpointAuthority(authCodeResponse.cloud_instance_host_name, authority, networkModule)];
                        case 1:
                            _a.sent();
                            _a.label = 2;
                        case 2:
                            authCodeResponse.nonce = cachedNonce || undefined;
                            authCodeResponse.state = requestState;
                            // Add CCS parameters if available
                            if (authCodeResponse.client_info) {
                                this.authCodeRequest.clientInfo = authCodeResponse.client_info;
                            }
                            else {
                                cachedCcsCred = this.checkCcsCredentials();
                                if (cachedCcsCred) {
                                    this.authCodeRequest.ccsCredential = cachedCcsCred;
                                }
                            }
                            return [4 /*yield*/, this.authModule.acquireToken(this.authCodeRequest, authCodeResponse)];
                        case 3:
                            tokenResponse = _a.sent();
                            this.browserStorage.cleanRequestByState(state);
                            return [2 /*return*/, tokenResponse];
                    }
                });
            });
        };
        return RedirectHandler;
    }(InteractionHandler));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var EventType;
    (function (EventType) {
        EventType["INITIALIZE_START"] = "msal:initializeStart";
        EventType["INITIALIZE_END"] = "msal:initializeEnd";
        EventType["ACCOUNT_ADDED"] = "msal:accountAdded";
        EventType["ACCOUNT_REMOVED"] = "msal:accountRemoved";
        EventType["LOGIN_START"] = "msal:loginStart";
        EventType["LOGIN_SUCCESS"] = "msal:loginSuccess";
        EventType["LOGIN_FAILURE"] = "msal:loginFailure";
        EventType["ACQUIRE_TOKEN_START"] = "msal:acquireTokenStart";
        EventType["ACQUIRE_TOKEN_SUCCESS"] = "msal:acquireTokenSuccess";
        EventType["ACQUIRE_TOKEN_FAILURE"] = "msal:acquireTokenFailure";
        EventType["ACQUIRE_TOKEN_NETWORK_START"] = "msal:acquireTokenFromNetworkStart";
        EventType["SSO_SILENT_START"] = "msal:ssoSilentStart";
        EventType["SSO_SILENT_SUCCESS"] = "msal:ssoSilentSuccess";
        EventType["SSO_SILENT_FAILURE"] = "msal:ssoSilentFailure";
        EventType["ACQUIRE_TOKEN_BY_CODE_START"] = "msal:acquireTokenByCodeStart";
        EventType["ACQUIRE_TOKEN_BY_CODE_SUCCESS"] = "msal:acquireTokenByCodeSuccess";
        EventType["ACQUIRE_TOKEN_BY_CODE_FAILURE"] = "msal:acquireTokenByCodeFailure";
        EventType["HANDLE_REDIRECT_START"] = "msal:handleRedirectStart";
        EventType["HANDLE_REDIRECT_END"] = "msal:handleRedirectEnd";
        EventType["POPUP_OPENED"] = "msal:popupOpened";
        EventType["LOGOUT_START"] = "msal:logoutStart";
        EventType["LOGOUT_SUCCESS"] = "msal:logoutSuccess";
        EventType["LOGOUT_FAILURE"] = "msal:logoutFailure";
        EventType["LOGOUT_END"] = "msal:logoutEnd";
    })(EventType || (EventType = {}));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var NativeStatusCode;
    (function (NativeStatusCode) {
        NativeStatusCode["USER_INTERACTION_REQUIRED"] = "USER_INTERACTION_REQUIRED";
        NativeStatusCode["USER_CANCEL"] = "USER_CANCEL";
        NativeStatusCode["NO_NETWORK"] = "NO_NETWORK";
        NativeStatusCode["TRANSIENT_ERROR"] = "TRANSIENT_ERROR";
        NativeStatusCode["PERSISTENT_ERROR"] = "PERSISTENT_ERROR";
        NativeStatusCode["DISABLED"] = "DISABLED";
    })(NativeStatusCode || (NativeStatusCode = {}));
    var NativeAuthErrorMessage = {
        extensionError: {
            code: "ContentError"
        },
        userSwitch: {
            code: "user_switch",
            desc: "User attempted to switch accounts in the native broker, which is not allowed. All new accounts must sign-in through the standard web flow first, please try again."
        }
    };
    var NativeAuthError = /** @class */ (function (_super) {
        __extends$1(NativeAuthError, _super);
        function NativeAuthError(errorCode, description, ext) {
            var _this = _super.call(this, errorCode, description) || this;
            Object.setPrototypeOf(_this, NativeAuthError.prototype);
            _this.name = "NativeAuthError";
            _this.ext = ext;
            return _this;
        }
        /**
         * These errors should result in a fallback to the 'standard' browser based auth flow.
         */
        NativeAuthError.prototype.isFatal = function () {
            if (this.ext && this.ext.status && (this.ext.status === NativeStatusCode.PERSISTENT_ERROR || this.ext.status === NativeStatusCode.DISABLED)) {
                return true;
            }
            switch (this.errorCode) {
                case NativeAuthErrorMessage.extensionError.code:
                    return true;
                default:
                    return false;
            }
        };
        /**
         * Create the appropriate error object based on the WAM status code.
         * @param code
         * @param description
         * @param ext
         * @returns
         */
        NativeAuthError.createError = function (code, description, ext) {
            if (ext && ext.status) {
                switch (ext.status) {
                    case NativeStatusCode.USER_INTERACTION_REQUIRED:
                        return new InteractionRequiredAuthError(code, description);
                    case NativeStatusCode.USER_CANCEL:
                        return BrowserAuthError.createUserCancelledError();
                    case NativeStatusCode.NO_NETWORK:
                        return BrowserAuthError.createNoNetworkConnectivityError();
                }
            }
            return new NativeAuthError(code, description, ext);
        };
        /**
         * Creates user switch error when the user chooses a different account in the native broker prompt
         * @returns
         */
        NativeAuthError.createUserSwitchError = function () {
            return new NativeAuthError(NativeAuthErrorMessage.userSwitch.code, NativeAuthErrorMessage.userSwitch.desc);
        };
        return NativeAuthError;
    }(AuthError));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var NativeInteractionClient = /** @class */ (function (_super) {
        __extends$1(NativeInteractionClient, _super);
        function NativeInteractionClient(config, browserStorage, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, provider, accountId, correlationId) {
            var _this = _super.call(this, config, browserStorage, browserCrypto, logger, eventHandler, navigationClient, performanceClient, provider, correlationId) || this;
            _this.apiId = apiId;
            _this.accountId = accountId;
            _this.nativeMessageHandler = provider;
            return _this;
        }
        /**
         * Acquire token from native platform via browser extension
         * @param request
         */
        NativeInteractionClient.prototype.acquireToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var nativeATMeasurement, nativeRequest, messageBody, reqTimestamp, response, validatedResponse;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.trace("NativeInteractionClient - acquireToken called.");
                            nativeATMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.NativeInteractionClientAcquireToken, request.correlationId);
                            return [4 /*yield*/, this.initializeNativeRequest(request)];
                        case 1:
                            nativeRequest = _a.sent();
                            messageBody = {
                                method: NativeExtensionMethod.GetToken,
                                request: nativeRequest
                            };
                            reqTimestamp = TimeUtils.nowSeconds();
                            return [4 /*yield*/, this.nativeMessageHandler.sendMessage(messageBody)];
                        case 2:
                            response = _a.sent();
                            validatedResponse = this.validateNativeResponse(response);
                            return [2 /*return*/, this.handleNativeResponse(validatedResponse, nativeRequest, reqTimestamp)
                                    .then(function (result) {
                                    nativeATMeasurement.endMeasurement({
                                        success: true,
                                        isNativeBroker: true
                                    });
                                    return result;
                                })
                                    .catch(function (error) {
                                    nativeATMeasurement.endMeasurement({
                                        success: false,
                                        errorCode: error.errorCode,
                                        subErrorCode: error.subError,
                                        isNativeBroker: true
                                    });
                                    throw error;
                                })];
                    }
                });
            });
        };
        /**
         * Acquires a token from native platform then redirects to the redirectUri instead of returning the response
         * @param request
         */
        NativeInteractionClient.prototype.acquireTokenRedirect = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var nativeRequest, messageBody, response, e_1, navigationOptions, redirectUri;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.trace("NativeInteractionClient - acquireTokenRedirect called.");
                            return [4 /*yield*/, this.initializeNativeRequest(request)];
                        case 1:
                            nativeRequest = _a.sent();
                            messageBody = {
                                method: NativeExtensionMethod.GetToken,
                                request: nativeRequest
                            };
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, this.nativeMessageHandler.sendMessage(messageBody)];
                        case 3:
                            response = _a.sent();
                            this.validateNativeResponse(response);
                            return [3 /*break*/, 5];
                        case 4:
                            e_1 = _a.sent();
                            // Only throw fatal errors here to allow application to fallback to regular redirect. Otherwise proceed and the error will be thrown in handleRedirectPromise
                            if (e_1 instanceof NativeAuthError && e_1.isFatal()) {
                                throw e_1;
                            }
                            return [3 /*break*/, 5];
                        case 5:
                            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.NATIVE_REQUEST, JSON.stringify(nativeRequest), true);
                            navigationOptions = {
                                apiId: ApiId.acquireTokenRedirect,
                                timeout: this.config.system.redirectNavigationTimeout,
                                noHistory: false
                            };
                            redirectUri = this.config.auth.navigateToLoginRequestUrl ? window.location.href : this.getRedirectUri(request.redirectUri);
                            return [4 /*yield*/, this.navigationClient.navigateExternal(redirectUri, navigationOptions)];
                        case 6:
                            _a.sent(); // Need to treat this as external to ensure handleRedirectPromise is run again
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * If the previous page called native platform for a token using redirect APIs, send the same request again and return the response
         */
        NativeInteractionClient.prototype.handleRedirectPromise = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var cachedRequest, messageBody, reqTimestamp, response, result, e_2;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.trace("NativeInteractionClient - handleRedirectPromise called.");
                            if (!this.browserStorage.isInteractionInProgress(true)) {
                                this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null.");
                                return [2 /*return*/, null];
                            }
                            cachedRequest = this.browserStorage.getCachedNativeRequest();
                            if (!cachedRequest) {
                                this.logger.verbose("NativeInteractionClient - handleRedirectPromise called but there is no cached request, returning null.");
                                return [2 /*return*/, null];
                            }
                            this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.NATIVE_REQUEST));
                            messageBody = {
                                method: NativeExtensionMethod.GetToken,
                                request: cachedRequest
                            };
                            reqTimestamp = TimeUtils.nowSeconds();
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            this.logger.verbose("NativeInteractionClient - handleRedirectPromise sending message to native broker.");
                            return [4 /*yield*/, this.nativeMessageHandler.sendMessage(messageBody)];
                        case 2:
                            response = _a.sent();
                            this.validateNativeResponse(response);
                            result = this.handleNativeResponse(response, cachedRequest, reqTimestamp);
                            this.browserStorage.setInteractionInProgress(false);
                            return [2 /*return*/, result];
                        case 3:
                            e_2 = _a.sent();
                            this.browserStorage.setInteractionInProgress(false);
                            throw e_2;
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Logout from native platform via browser extension
         * @param request
         */
        NativeInteractionClient.prototype.logout = function () {
            this.logger.trace("NativeInteractionClient - logout called.");
            return Promise.reject("Logout not implemented yet");
        };
        /**
         * Transform response from native platform into AuthenticationResult object which will be returned to the end user
         * @param response
         * @param request
         * @param reqTimestamp
         */
        NativeInteractionClient.prototype.handleNativeResponse = function (response, request, reqTimestamp) {
            return __awaiter$1(this, void 0, void 0, function () {
                var idTokenObj, authority, authorityPreferredCache, homeAccountIdentifier, accountEntity, responseScopes, accountProperties, uid, tid, responseAccessToken, responseTokenType, _a, popTokenGenerator, shrParameters, mats, result;
                var _this = this;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.trace("NativeInteractionClient - handleNativeResponse called.");
                            if (response.account.id !== request.accountId) {
                                // User switch in native broker prompt is not supported. All users must first sign in through web flow to ensure server state is in sync
                                throw NativeAuthError.createUserSwitchError();
                            }
                            idTokenObj = new AuthToken(response.id_token || Constants.EMPTY_STRING, this.browserCrypto);
                            return [4 /*yield*/, this.getDiscoveredAuthority(request.authority)];
                        case 1:
                            authority = _b.sent();
                            authorityPreferredCache = authority.getPreferredCache();
                            homeAccountIdentifier = AccountEntity.generateHomeAccountId(response.client_info || Constants.EMPTY_STRING, AuthorityType.Default, this.logger, this.browserCrypto, idTokenObj);
                            accountEntity = AccountEntity.createAccount(response.client_info, homeAccountIdentifier, idTokenObj, undefined, undefined, undefined, authorityPreferredCache, response.account.id);
                            this.browserStorage.setAccount(accountEntity);
                            responseScopes = response.scopes ? ScopeSet.fromString(response.scopes) : ScopeSet.fromString(request.scopes);
                            accountProperties = response.account.properties || {};
                            uid = accountProperties["UID"] || idTokenObj.claims.oid || idTokenObj.claims.sub || Constants.EMPTY_STRING;
                            tid = accountProperties["TenantId"] || idTokenObj.claims.tid || Constants.EMPTY_STRING;
                            responseTokenType = AuthenticationScheme.BEARER;
                            _a = request.tokenType;
                            switch (_a) {
                                case AuthenticationScheme.POP: return [3 /*break*/, 2];
                            }
                            return [3 /*break*/, 4];
                        case 2:
                            // Set the token type to POP in the response
                            responseTokenType = AuthenticationScheme.POP;
                            // Check if native layer returned an SHR token
                            if (response.shr) {
                                this.logger.trace("handleNativeServerResponse: SHR is enabled in native layer");
                                responseAccessToken = response.shr;
                                return [3 /*break*/, 5];
                            }
                            popTokenGenerator = new PopTokenGenerator(this.browserCrypto);
                            shrParameters = {
                                resourceRequestMethod: request.resourceRequestMethod,
                                resourceRequestUri: request.resourceRequestUri,
                                shrClaims: request.shrClaims,
                                shrNonce: request.shrNonce
                            };
                            /**
                             * KeyID must be present in the native request from when the PoP key was generated in order for
                             * PopTokenGenerator to query the full key for signing
                             */
                            if (!request.keyId) {
                                throw ClientAuthError.createKeyIdMissingError();
                            }
                            return [4 /*yield*/, popTokenGenerator.signPopToken(response.access_token, request.keyId, shrParameters)];
                        case 3:
                            responseAccessToken = _b.sent();
                            return [3 /*break*/, 5];
                        case 4:
                            {
                                responseAccessToken = response.access_token;
                            }
                            _b.label = 5;
                        case 5:
                            mats = this.getMATSFromResponse(response);
                            result = {
                                authority: authority.canonicalAuthority,
                                uniqueId: uid,
                                tenantId: tid,
                                scopes: responseScopes.asArray(),
                                account: accountEntity.getAccountInfo(),
                                idToken: response.id_token,
                                idTokenClaims: idTokenObj.claims,
                                accessToken: responseAccessToken,
                                fromCache: mats ? this.isResponseFromCache(mats) : false,
                                expiresOn: new Date(Number(reqTimestamp + response.expires_in) * 1000),
                                tokenType: responseTokenType,
                                correlationId: this.correlationId,
                                state: response.state,
                                fromNativeBroker: true
                            };
                            // Remove any existing cached tokens for this account
                            this.browserStorage.removeAccountContext(accountEntity).catch(function (e) {
                                _this.logger.error("Error occurred while removing account context from browser storage. " + e);
                            });
                            return [2 /*return*/, result];
                    }
                });
            });
        };
        /**
         * Validates native platform response before processing
         * @param response
         */
        NativeInteractionClient.prototype.validateNativeResponse = function (response) {
            if (response.hasOwnProperty("access_token") &&
                response.hasOwnProperty("id_token") &&
                response.hasOwnProperty("client_info") &&
                response.hasOwnProperty("account") &&
                response.hasOwnProperty("scopes") &&
                response.hasOwnProperty("expires_in")) {
                return response;
            }
            else {
                throw NativeAuthError.createUnexpectedError("Response missing expected properties.");
            }
        };
        /**
         * Gets MATS telemetry from native response
         * @param response
         * @returns
         */
        NativeInteractionClient.prototype.getMATSFromResponse = function (response) {
            if (response.properties.MATS) {
                try {
                    return JSON.parse(response.properties.MATS);
                }
                catch (e) {
                    this.logger.error("NativeInteractionClient - Error parsing MATS telemetry, returning null instead");
                }
            }
            return null;
        };
        /**
         * Returns whether or not response came from native cache
         * @param response
         * @returns
         */
        NativeInteractionClient.prototype.isResponseFromCache = function (mats) {
            if (typeof mats.is_cached === "undefined") {
                this.logger.verbose("NativeInteractionClient - MATS telemetry does not contain field indicating if response was served from cache. Returning false.");
                return false;
            }
            return !!mats.is_cached;
        };
        /**
         * Translates developer provided request object into NativeRequest object
         * @param request
         */
        NativeInteractionClient.prototype.initializeNativeRequest = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var authority, canonicalAuthority, scopes, scopeSet, validatedRequest, shrParameters, popTokenGenerator, reqCnfData;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.trace("NativeInteractionClient - initializeNativeRequest called");
                            authority = request.authority || this.config.auth.authority;
                            canonicalAuthority = new UrlString(authority);
                            canonicalAuthority.validateAsUri();
                            scopes = request && request.scopes || [];
                            scopeSet = new ScopeSet(scopes);
                            scopeSet.appendScopes(OIDC_DEFAULT_SCOPES);
                            if (request.prompt) {
                                switch (request.prompt) {
                                    case PromptValue.NONE:
                                    case PromptValue.CONSENT:
                                        this.logger.trace("initializeNativeRequest: prompt is compatible with native flow");
                                        break;
                                    default:
                                        this.logger.trace("initializeNativeRequest: prompt = " + request.prompt + " is not compatible with native flow");
                                        throw BrowserAuthError.createNativePromptParameterNotSupportedError();
                                }
                            }
                            validatedRequest = __assign$1(__assign$1({}, request), { accountId: this.accountId, clientId: this.config.auth.clientId, authority: canonicalAuthority.urlString, scopes: scopeSet.printScopes(), redirectUri: this.getRedirectUri(request.redirectUri), correlationId: this.correlationId, tokenType: request.authenticationScheme, windowTitleSubstring: document.title, extraParameters: __assign$1(__assign$1(__assign$1({}, request.extraQueryParameters), request.tokenQueryParameters), { telemetry: NativeConstants.MATS_TELEMETRY }), extendedExpiryToken: false // Make this configurable?
                             });
                            if (!(request.authenticationScheme === AuthenticationScheme.POP)) return [3 /*break*/, 2];
                            shrParameters = {
                                resourceRequestUri: request.resourceRequestUri,
                                resourceRequestMethod: request.resourceRequestMethod,
                                shrClaims: request.shrClaims,
                                shrNonce: request.shrNonce
                            };
                            popTokenGenerator = new PopTokenGenerator(this.browserCrypto);
                            return [4 /*yield*/, popTokenGenerator.generateCnf(shrParameters)];
                        case 1:
                            reqCnfData = _a.sent();
                            // to reduce the URL length, it is recommended to send the hash of the req_cnf instead of the whole string
                            validatedRequest.reqCnf = reqCnfData.reqCnfHash;
                            validatedRequest.keyId = reqCnfData.kid;
                            _a.label = 2;
                        case 2:
                            if (this.apiId === ApiId.ssoSilent || this.apiId === ApiId.acquireTokenSilent_silentFlow) {
                                validatedRequest.prompt = PromptValue.NONE;
                            }
                            return [2 /*return*/, validatedRequest];
                    }
                });
            });
        };
        return NativeInteractionClient;
    }(BaseInteractionClient));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var NativeMessageHandler = /** @class */ (function () {
        function NativeMessageHandler(logger, handshakeTimeoutMs, extensionId) {
            this.logger = logger;
            this.handshakeTimeoutMs = handshakeTimeoutMs;
            this.extensionId = extensionId;
            this.resolvers = new Map(); // Used for non-handshake messages
            this.handshakeResolvers = new Map(); // Used for handshake messages
            this.responseId = 0;
            this.messageChannel = new MessageChannel();
            this.windowListener = this.onWindowMessage.bind(this); // Window event callback doesn't have access to 'this' unless it's bound
        }
        /**
         * Sends a given message to the extension and resolves with the extension response
         * @param body
         */
        NativeMessageHandler.prototype.sendMessage = function (body) {
            return __awaiter$1(this, void 0, void 0, function () {
                var req;
                var _this = this;
                return __generator$1(this, function (_a) {
                    this.logger.trace("NativeMessageHandler - sendMessage called.");
                    req = {
                        channel: NativeConstants.CHANNEL_ID,
                        extensionId: this.extensionId,
                        responseId: this.responseId++,
                        body: body
                    };
                    this.logger.trace("NativeMessageHandler - Sending request to browser extension");
                    this.logger.tracePii("NativeMessageHandler - Sending request to browser extension: " + JSON.stringify(req));
                    this.messageChannel.port1.postMessage(req);
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            _this.resolvers.set(req.responseId, { resolve: resolve, reject: reject });
                        })];
                });
            });
        };
        /**
         * Returns an instance of the MessageHandler that has successfully established a connection with an extension
         * @param logger
         * @param handshakeTimeoutMs
         */
        NativeMessageHandler.createProvider = function (logger, handshakeTimeoutMs) {
            return __awaiter$1(this, void 0, void 0, function () {
                var preferredProvider, backupProvider;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            logger.trace("NativeMessageHandler - createProvider called.");
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 5]);
                            preferredProvider = new NativeMessageHandler(logger, handshakeTimeoutMs, NativeConstants.PREFERRED_EXTENSION_ID);
                            return [4 /*yield*/, preferredProvider.sendHandshakeRequest()];
                        case 2:
                            _a.sent();
                            return [2 /*return*/, preferredProvider];
                        case 3:
                            _a.sent();
                            backupProvider = new NativeMessageHandler(logger, handshakeTimeoutMs);
                            return [4 /*yield*/, backupProvider.sendHandshakeRequest()];
                        case 4:
                            _a.sent();
                            return [2 /*return*/, backupProvider];
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Send handshake request helper.
         */
        NativeMessageHandler.prototype.sendHandshakeRequest = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var req;
                var _this = this;
                return __generator$1(this, function (_a) {
                    this.logger.trace("NativeMessageHandler - sendHandshakeRequest called.");
                    // Register this event listener before sending handshake
                    window.addEventListener("message", this.windowListener, false); // false is important, because content script message processing should work first
                    req = {
                        channel: NativeConstants.CHANNEL_ID,
                        extensionId: this.extensionId,
                        responseId: this.responseId++,
                        body: {
                            method: NativeExtensionMethod.HandshakeRequest
                        }
                    };
                    this.messageChannel.port1.onmessage = function (event) {
                        _this.onChannelMessage(event);
                    };
                    window.postMessage(req, window.origin, [this.messageChannel.port2]);
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            _this.handshakeResolvers.set(req.responseId, { resolve: resolve, reject: reject });
                            _this.timeoutId = window.setTimeout(function () {
                                /*
                                 * Throw an error if neither HandshakeResponse nor original Handshake request are received in a reasonable timeframe.
                                 * This typically suggests an event handler stopped propagation of the Handshake request but did not respond to it on the MessageChannel port
                                 */
                                window.removeEventListener("message", _this.windowListener, false);
                                _this.messageChannel.port1.close();
                                _this.messageChannel.port2.close();
                                reject(BrowserAuthError.createNativeHandshakeTimeoutError());
                                _this.handshakeResolvers.delete(req.responseId);
                            }, _this.handshakeTimeoutMs); // Use a reasonable timeout in milliseconds here
                        })];
                });
            });
        };
        /**
         * Invoked when a message is posted to the window. If a handshake request is received it means the extension is not installed.
         * @param event
         */
        NativeMessageHandler.prototype.onWindowMessage = function (event) {
            this.logger.trace("NativeMessageHandler - onWindowMessage called");
            // We only accept messages from ourselves
            if (event.source !== window) {
                return;
            }
            var request = event.data;
            if (!request.channel || request.channel !== NativeConstants.CHANNEL_ID) {
                return;
            }
            if (request.extensionId && request.extensionId !== this.extensionId) {
                return;
            }
            if (request.body.method === NativeExtensionMethod.HandshakeRequest) {
                // If we receive this message back it means no extension intercepted the request, meaning no extension supporting handshake protocol is installed
                this.logger.verbose(request.extensionId ? "Extension with id: " + request.extensionId + " not installed" : "No extension installed");
                clearTimeout(this.timeoutId);
                this.messageChannel.port1.close();
                this.messageChannel.port2.close();
                window.removeEventListener("message", this.windowListener, false);
                var handshakeResolver = this.handshakeResolvers.get(request.responseId);
                if (handshakeResolver) {
                    handshakeResolver.reject(BrowserAuthError.createNativeExtensionNotInstalledError());
                }
            }
        };
        /**
         * Invoked when a message is received from the extension on the MessageChannel port
         * @param event
         */
        NativeMessageHandler.prototype.onChannelMessage = function (event) {
            this.logger.trace("NativeMessageHandler - onChannelMessage called.");
            var request = event.data;
            var resolver = this.resolvers.get(request.responseId);
            var handshakeResolver = this.handshakeResolvers.get(request.responseId);
            try {
                var method = request.body.method;
                if (method === NativeExtensionMethod.Response) {
                    if (!resolver) {
                        return;
                    }
                    var response = request.body.response;
                    this.logger.trace("NativeMessageHandler - Received response from browser extension");
                    this.logger.tracePii("NativeMessageHandler - Received response from browser extension: " + JSON.stringify(response));
                    if (response.status !== "Success") {
                        resolver.reject(NativeAuthError.createError(response.code, response.description, response.ext));
                    }
                    else if (response.result) {
                        if (response.result["code"] && response.result["description"]) {
                            resolver.reject(NativeAuthError.createError(response.result["code"], response.result["description"], response.result["ext"]));
                        }
                        else {
                            resolver.resolve(response.result);
                        }
                    }
                    else {
                        throw AuthError.createUnexpectedError("Event does not contain result.");
                    }
                    this.resolvers.delete(request.responseId);
                }
                else if (method === NativeExtensionMethod.HandshakeResponse) {
                    if (!handshakeResolver) {
                        return;
                    }
                    clearTimeout(this.timeoutId); // Clear setTimeout
                    window.removeEventListener("message", this.windowListener, false); // Remove 'No extension' listener
                    this.extensionId = request.extensionId;
                    this.logger.verbose("NativeMessageHandler - Received HandshakeResponse from extension: " + this.extensionId);
                    handshakeResolver.resolve();
                    this.handshakeResolvers.delete(request.responseId);
                }
                // Do nothing if method is not Response or HandshakeResponse
            }
            catch (err) {
                this.logger.error("Error parsing response from WAM Extension");
                this.logger.errorPii("Error parsing response from WAM Extension: " + err.toString());
                this.logger.errorPii("Unable to parse " + event);
                if (resolver) {
                    resolver.reject(err);
                }
                else if (handshakeResolver) {
                    handshakeResolver.reject(err);
                }
            }
        };
        /**
         * Returns boolean indicating whether or not the request should attempt to use native broker
         * @param logger
         * @param config
         * @param nativeExtensionProvider
         * @param authenticationScheme
         */
        NativeMessageHandler.isNativeAvailable = function (config, logger, nativeExtensionProvider, authenticationScheme) {
            logger.trace("isNativeAvailable called");
            if (!config.system.allowNativeBroker) {
                logger.trace("isNativeAvailable: allowNativeBroker is not enabled, returning false");
                // Developer disabled WAM
                return false;
            }
            if (!nativeExtensionProvider) {
                logger.trace("isNativeAvailable: WAM extension provider is not initialized, returning false");
                // Extension is not available
                return false;
            }
            if (authenticationScheme) {
                switch (authenticationScheme) {
                    case AuthenticationScheme.BEARER:
                    case AuthenticationScheme.POP:
                        logger.trace("isNativeAvailable: authenticationScheme is supported, returning true");
                        return true;
                    default:
                        logger.trace("isNativeAvailable: authenticationScheme is not supported, returning false");
                        return false;
                }
            }
            return true;
        };
        return NativeMessageHandler;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var RedirectClient = /** @class */ (function (_super) {
        __extends$1(RedirectClient, _super);
        function RedirectClient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Redirects the page to the /authorize endpoint of the IDP
         * @param request
         */
        RedirectClient.prototype.acquireToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var validRequest, serverTelemetryManager, handleBackButton, authCodeRequest, authClient, interactionHandler, navigateUrl, redirectStartPage, e_1;
                var _this = this;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.initializeAuthorizationRequest(request, InteractionType.Redirect)];
                        case 1:
                            validRequest = _a.sent();
                            this.browserStorage.updateCacheEntries(validRequest.state, validRequest.nonce, validRequest.authority, validRequest.loginHint || Constants.EMPTY_STRING, validRequest.account || null);
                            serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenRedirect);
                            handleBackButton = function (event) {
                                // Clear temporary cache if the back button is clicked during the redirect flow.
                                if (event.persisted) {
                                    _this.logger.verbose("Page was restored from back/forward cache. Clearing temporary cache.");
                                    _this.browserStorage.cleanRequestByState(validRequest.state);
                                }
                            };
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 7, , 8]);
                            return [4 /*yield*/, this.initializeAuthorizationCodeRequest(validRequest)];
                        case 3:
                            authCodeRequest = _a.sent();
                            return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, validRequest.authority, validRequest.azureCloudOptions)];
                        case 4:
                            authClient = _a.sent();
                            this.logger.verbose("Auth code client created");
                            interactionHandler = new RedirectHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.browserCrypto);
                            return [4 /*yield*/, authClient.getAuthCodeUrl(__assign$1(__assign$1({}, validRequest), { nativeBroker: NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, request.authenticationScheme) }))];
                        case 5:
                            navigateUrl = _a.sent();
                            redirectStartPage = this.getRedirectStartPage(request.redirectStartPage);
                            this.logger.verbosePii("Redirect start page: " + redirectStartPage);
                            // Clear temporary cache if the back button is clicked during the redirect flow.
                            window.addEventListener("pageshow", handleBackButton);
                            return [4 /*yield*/, interactionHandler.initiateAuthRequest(navigateUrl, {
                                    navigationClient: this.navigationClient,
                                    redirectTimeout: this.config.system.redirectNavigationTimeout,
                                    redirectStartPage: redirectStartPage,
                                    onRedirectNavigate: request.onRedirectNavigate
                                })];
                        case 6: 
                        // Show the UI once the url has been created. Response will come back in the hash, which will be handled in the handleRedirectCallback function.
                        return [2 /*return*/, _a.sent()];
                        case 7:
                            e_1 = _a.sent();
                            if (e_1 instanceof AuthError) {
                                e_1.setCorrelationId(this.correlationId);
                            }
                            window.removeEventListener("pageshow", handleBackButton);
                            serverTelemetryManager.cacheFailedRequest(e_1);
                            this.browserStorage.cleanRequestByState(validRequest.state);
                            throw e_1;
                        case 8: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Checks if navigateToLoginRequestUrl is set, and:
         * - if true, performs logic to cache and navigate
         * - if false, handles hash string and parses response
         * @param hash
         */
        RedirectClient.prototype.handleRedirectPromise = function (hash) {
            return __awaiter$1(this, void 0, void 0, function () {
                var serverTelemetryManager, responseHash, state, serverParams, loginRequestUrl, loginRequestUrlNormalized, currentUrlNormalized, handleHashResult, navigationOptions, processHashOnRedirect, homepage, e_2;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.handleRedirectPromise);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 10, , 11]);
                            if (!this.browserStorage.isInteractionInProgress(true)) {
                                this.logger.info("handleRedirectPromise called but there is no interaction in progress, returning null.");
                                return [2 /*return*/, null];
                            }
                            responseHash = this.getRedirectResponseHash(hash || window.location.hash);
                            if (!responseHash) {
                                // Not a recognized server response hash or hash not associated with a redirect request
                                this.logger.info("handleRedirectPromise did not detect a response hash as a result of a redirect. Cleaning temporary cache.");
                                this.browserStorage.cleanRequestByInteractionType(InteractionType.Redirect);
                                return [2 /*return*/, null];
                            }
                            state = void 0;
                            try {
                                serverParams = UrlString.getDeserializedHash(responseHash);
                                state = this.validateAndExtractStateFromHash(serverParams, InteractionType.Redirect);
                                this.logger.verbose("State extracted from hash");
                            }
                            catch (e) {
                                this.logger.info("handleRedirectPromise was unable to extract state due to: " + e);
                                this.browserStorage.cleanRequestByInteractionType(InteractionType.Redirect);
                                return [2 /*return*/, null];
                            }
                            loginRequestUrl = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, true) || Constants.EMPTY_STRING;
                            loginRequestUrlNormalized = UrlString.removeHashFromUrl(loginRequestUrl);
                            currentUrlNormalized = UrlString.removeHashFromUrl(window.location.href);
                            if (!(loginRequestUrlNormalized === currentUrlNormalized && this.config.auth.navigateToLoginRequestUrl)) return [3 /*break*/, 3];
                            // We are on the page we need to navigate to - handle hash
                            this.logger.verbose("Current page is loginRequestUrl, handling hash");
                            return [4 /*yield*/, this.handleHash(responseHash, state, serverTelemetryManager)];
                        case 2:
                            handleHashResult = _a.sent();
                            if (loginRequestUrl.indexOf("#") > -1) {
                                // Replace current hash with non-msal hash, if present
                                BrowserUtils.replaceHash(loginRequestUrl);
                            }
                            return [2 /*return*/, handleHashResult];
                        case 3:
                            if (!!this.config.auth.navigateToLoginRequestUrl) return [3 /*break*/, 4];
                            this.logger.verbose("NavigateToLoginRequestUrl set to false, handling hash");
                            return [2 /*return*/, this.handleHash(responseHash, state, serverTelemetryManager)];
                        case 4:
                            if (!(!BrowserUtils.isInIframe() || this.config.system.allowRedirectInIframe)) return [3 /*break*/, 9];
                            /*
                             * Returned from authority using redirect - need to perform navigation before processing response
                             * Cache the hash to be retrieved after the next redirect
                             */
                            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.URL_HASH, responseHash, true);
                            navigationOptions = {
                                apiId: ApiId.handleRedirectPromise,
                                timeout: this.config.system.redirectNavigationTimeout,
                                noHistory: true
                            };
                            processHashOnRedirect = true;
                            if (!(!loginRequestUrl || loginRequestUrl === "null")) return [3 /*break*/, 6];
                            homepage = BrowserUtils.getHomepage();
                            // Cache the homepage under ORIGIN_URI to ensure cached hash is processed on homepage
                            this.browserStorage.setTemporaryCache(TemporaryCacheKeys.ORIGIN_URI, homepage, true);
                            this.logger.warning("Unable to get valid login request url from cache, redirecting to home page");
                            return [4 /*yield*/, this.navigationClient.navigateInternal(homepage, navigationOptions)];
                        case 5:
                            processHashOnRedirect = _a.sent();
                            return [3 /*break*/, 8];
                        case 6:
                            // Navigate to page that initiated the redirect request
                            this.logger.verbose("Navigating to loginRequestUrl: " + loginRequestUrl);
                            return [4 /*yield*/, this.navigationClient.navigateInternal(loginRequestUrl, navigationOptions)];
                        case 7:
                            processHashOnRedirect = _a.sent();
                            _a.label = 8;
                        case 8:
                            // If navigateInternal implementation returns false, handle the hash now
                            if (!processHashOnRedirect) {
                                return [2 /*return*/, this.handleHash(responseHash, state, serverTelemetryManager)];
                            }
                            _a.label = 9;
                        case 9: return [2 /*return*/, null];
                        case 10:
                            e_2 = _a.sent();
                            if (e_2 instanceof AuthError) {
                                e_2.setCorrelationId(this.correlationId);
                            }
                            serverTelemetryManager.cacheFailedRequest(e_2);
                            this.browserStorage.cleanRequestByInteractionType(InteractionType.Redirect);
                            throw e_2;
                        case 11: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Gets the response hash for a redirect request
         * Returns null if interactionType in the state value is not "redirect" or the hash does not contain known properties
         * @param hash
         */
        RedirectClient.prototype.getRedirectResponseHash = function (hash) {
            this.logger.verbose("getRedirectResponseHash called");
            // Get current location hash from window or cache.
            var isResponseHash = UrlString.hashContainsKnownProperties(hash);
            if (isResponseHash) {
                BrowserUtils.clearHash(window);
                this.logger.verbose("Hash contains known properties, returning response hash");
                return hash;
            }
            var cachedHash = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.URL_HASH, true);
            this.browserStorage.removeItem(this.browserStorage.generateCacheKey(TemporaryCacheKeys.URL_HASH));
            this.logger.verbose("Hash does not contain known properties, returning cached hash");
            return cachedHash;
        };
        /**
         * Checks if hash exists and handles in window.
         * @param hash
         * @param state
         */
        RedirectClient.prototype.handleHash = function (hash, state, serverTelemetryManager) {
            return __awaiter$1(this, void 0, void 0, function () {
                var cachedRequest, serverParams, nativeInteractionClient, userRequestState, currentAuthority, authClient, interactionHandler;
                var _this = this;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cachedRequest = this.browserStorage.getCachedRequest(state, this.browserCrypto);
                            this.logger.verbose("handleHash called, retrieved cached request");
                            serverParams = UrlString.getDeserializedHash(hash);
                            if (serverParams.accountId) {
                                this.logger.verbose("Account id found in hash, calling WAM for token");
                                if (!this.nativeMessageHandler) {
                                    throw BrowserAuthError.createNativeConnectionNotEstablishedError();
                                }
                                nativeInteractionClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, cachedRequest.correlationId);
                                userRequestState = ProtocolUtils.parseRequestState(this.browserCrypto, state).userRequestState;
                                return [2 /*return*/, nativeInteractionClient.acquireToken(__assign$1(__assign$1({}, cachedRequest), { state: userRequestState, prompt: undefined // Server should handle the prompt, ideally native broker can do this part silently
                                     })).finally(function () {
                                        _this.browserStorage.cleanRequestByState(state);
                                    })];
                            }
                            currentAuthority = this.browserStorage.getCachedAuthority(state);
                            if (!currentAuthority) {
                                throw BrowserAuthError.createNoCachedAuthorityError();
                            }
                            return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, currentAuthority)];
                        case 1:
                            authClient = _a.sent();
                            this.logger.verbose("Auth code client created");
                            ThrottlingUtils.removeThrottle(this.browserStorage, this.config.auth.clientId, cachedRequest);
                            interactionHandler = new RedirectHandler(authClient, this.browserStorage, cachedRequest, this.logger, this.browserCrypto);
                            return [4 /*yield*/, interactionHandler.handleCodeResponseFromHash(hash, state, authClient.authority, this.networkClient)];
                        case 2: return [2 /*return*/, _a.sent()];
                    }
                });
            });
        };
        /**
         * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
         * Default behaviour is to redirect the user to `window.location.href`.
         * @param logoutRequest
         */
        RedirectClient.prototype.logout = function (logoutRequest) {
            return __awaiter$1(this, void 0, void 0, function () {
                var validLogoutRequest, serverTelemetryManager, navigationOptions, authClient, logoutUri, navigate, e_3;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("logoutRedirect called");
                            validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
                            serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.logout);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 10, , 11]);
                            this.eventHandler.emitEvent(EventType.LOGOUT_START, InteractionType.Redirect, logoutRequest);
                            // Clear cache on logout
                            return [4 /*yield*/, this.clearCacheOnLogout(validLogoutRequest.account)];
                        case 2:
                            // Clear cache on logout
                            _a.sent();
                            navigationOptions = {
                                apiId: ApiId.logout,
                                timeout: this.config.system.redirectNavigationTimeout,
                                noHistory: false
                            };
                            return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, logoutRequest && logoutRequest.authority)];
                        case 3:
                            authClient = _a.sent();
                            this.logger.verbose("Auth code client created");
                            logoutUri = authClient.getLogoutUri(validLogoutRequest);
                            this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Redirect, validLogoutRequest);
                            if (!(logoutRequest && typeof logoutRequest.onRedirectNavigate === "function")) return [3 /*break*/, 7];
                            navigate = logoutRequest.onRedirectNavigate(logoutUri);
                            if (!(navigate !== false)) return [3 /*break*/, 5];
                            this.logger.verbose("Logout onRedirectNavigate did not return false, navigating");
                            // Ensure interaction is in progress
                            if (!this.browserStorage.getInteractionInProgress()) {
                                this.browserStorage.setInteractionInProgress(true);
                            }
                            return [4 /*yield*/, this.navigationClient.navigateExternal(logoutUri, navigationOptions)];
                        case 4:
                            _a.sent();
                            return [2 /*return*/];
                        case 5:
                            // Ensure interaction is not in progress
                            this.browserStorage.setInteractionInProgress(false);
                            this.logger.verbose("Logout onRedirectNavigate returned false, stopping navigation");
                            _a.label = 6;
                        case 6: return [3 /*break*/, 9];
                        case 7:
                            // Ensure interaction is in progress
                            if (!this.browserStorage.getInteractionInProgress()) {
                                this.browserStorage.setInteractionInProgress(true);
                            }
                            return [4 /*yield*/, this.navigationClient.navigateExternal(logoutUri, navigationOptions)];
                        case 8:
                            _a.sent();
                            return [2 /*return*/];
                        case 9: return [3 /*break*/, 11];
                        case 10:
                            e_3 = _a.sent();
                            if (e_3 instanceof AuthError) {
                                e_3.setCorrelationId(this.correlationId);
                            }
                            serverTelemetryManager.cacheFailedRequest(e_3);
                            this.eventHandler.emitEvent(EventType.LOGOUT_FAILURE, InteractionType.Redirect, null, e_3);
                            this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Redirect);
                            throw e_3;
                        case 11:
                            this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Redirect);
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Use to get the redirectStartPage either from request or use current window
         * @param requestStartPage
         */
        RedirectClient.prototype.getRedirectStartPage = function (requestStartPage) {
            var redirectStartPage = requestStartPage || window.location.href;
            return UrlString.getAbsoluteUrl(redirectStartPage, BrowserUtils.getCurrentUri());
        };
        return RedirectClient;
    }(StandardInteractionClient));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var PopupClient = /** @class */ (function (_super) {
        __extends$1(PopupClient, _super);
        function PopupClient(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) {
            var _this = _super.call(this, config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) || this;
            // Properly sets this reference for the unload event.
            _this.unloadWindow = _this.unloadWindow.bind(_this);
            return _this;
        }
        /**
         * Acquires tokens by opening a popup window to the /authorize endpoint of the authority
         * @param request
         */
        PopupClient.prototype.acquireToken = function (request) {
            try {
                var popupName = this.generatePopupName(request.scopes || OIDC_DEFAULT_SCOPES, request.authority || this.config.auth.authority);
                var popupWindowAttributes = request.popupWindowAttributes || {};
                // asyncPopups flag is true. Acquires token without first opening popup. Popup will be opened later asynchronously.
                if (this.config.system.asyncPopups) {
                    this.logger.verbose("asyncPopups set to true, acquiring token");
                    // Passes on popup position and dimensions if in request
                    return this.acquireTokenPopupAsync(request, popupName, popupWindowAttributes);
                }
                else {
                    // asyncPopups flag is set to false. Opens popup before acquiring token.
                    this.logger.verbose("asyncPopup set to false, opening popup before acquiring token");
                    var popup = this.openSizedPopup("about:blank", popupName, popupWindowAttributes);
                    return this.acquireTokenPopupAsync(request, popupName, popupWindowAttributes, popup);
                }
            }
            catch (e) {
                return Promise.reject(e);
            }
        };
        /**
         * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
         * @param logoutRequest
         */
        PopupClient.prototype.logout = function (logoutRequest) {
            try {
                this.logger.verbose("logoutPopup called");
                var validLogoutRequest = this.initializeLogoutRequest(logoutRequest);
                var popupName = this.generateLogoutPopupName(validLogoutRequest);
                var authority = logoutRequest && logoutRequest.authority;
                var mainWindowRedirectUri = logoutRequest && logoutRequest.mainWindowRedirectUri;
                var popupWindowAttributes = (logoutRequest === null || logoutRequest === void 0 ? void 0 : logoutRequest.popupWindowAttributes) || {};
                // asyncPopups flag is true. Acquires token without first opening popup. Popup will be opened later asynchronously.
                if (this.config.system.asyncPopups) {
                    this.logger.verbose("asyncPopups set to true");
                    // Passes on popup position and dimensions if in request
                    return this.logoutPopupAsync(validLogoutRequest, popupName, popupWindowAttributes, authority, undefined, mainWindowRedirectUri);
                }
                else {
                    // asyncPopups flag is set to false. Opens popup before logging out.
                    this.logger.verbose("asyncPopup set to false, opening popup");
                    var popup = this.openSizedPopup("about:blank", popupName, popupWindowAttributes);
                    return this.logoutPopupAsync(validLogoutRequest, popupName, popupWindowAttributes, authority, popup, mainWindowRedirectUri);
                }
            }
            catch (e) {
                // Since this function is synchronous we need to reject
                return Promise.reject(e);
            }
        };
        /**
         * Helper which obtains an access_token for your API via opening a popup window in the user's browser
         * @param validRequest
         * @param popupName
         * @param popup
         * @param popupWindowAttributes
         *
         * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
         */
        PopupClient.prototype.acquireTokenPopupAsync = function (request, popupName, popupWindowAttributes, popup) {
            return __awaiter$1(this, void 0, void 0, function () {
                var serverTelemetryManager, validRequest, authCodeRequest, authClient, isNativeBroker, fetchNativeAccountIdMeasurement, navigateUrl, interactionHandler, popupParameters, popupWindow, hash, serverParams, state_1, nativeInteractionClient, userRequestState, result, e_1;
                var _this = this;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("acquireTokenPopupAsync called");
                            serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenPopup);
                            return [4 /*yield*/, this.initializeAuthorizationRequest(request, InteractionType.Popup)];
                        case 1:
                            validRequest = _a.sent();
                            this.browserStorage.updateCacheEntries(validRequest.state, validRequest.nonce, validRequest.authority, validRequest.loginHint || Constants.EMPTY_STRING, validRequest.account || null);
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 8, , 9]);
                            return [4 /*yield*/, this.initializeAuthorizationCodeRequest(validRequest)];
                        case 3:
                            authCodeRequest = _a.sent();
                            return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, validRequest.authority, validRequest.azureCloudOptions)];
                        case 4:
                            authClient = _a.sent();
                            this.logger.verbose("Auth code client created");
                            isNativeBroker = NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, request.authenticationScheme);
                            fetchNativeAccountIdMeasurement = void 0;
                            if (isNativeBroker) {
                                fetchNativeAccountIdMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.FetchAccountIdWithNativeBroker, request.correlationId);
                            }
                            return [4 /*yield*/, authClient.getAuthCodeUrl(__assign$1(__assign$1({}, validRequest), { nativeBroker: isNativeBroker }))];
                        case 5:
                            navigateUrl = _a.sent();
                            interactionHandler = new InteractionHandler(authClient, this.browserStorage, authCodeRequest, this.logger);
                            popupParameters = {
                                popup: popup,
                                popupName: popupName,
                                popupWindowAttributes: popupWindowAttributes
                            };
                            popupWindow = this.initiateAuthRequest(navigateUrl, popupParameters);
                            this.eventHandler.emitEvent(EventType.POPUP_OPENED, InteractionType.Popup, { popupWindow: popupWindow }, null);
                            return [4 /*yield*/, this.monitorPopupForHash(popupWindow)];
                        case 6:
                            hash = _a.sent();
                            serverParams = UrlString.getDeserializedHash(hash);
                            state_1 = this.validateAndExtractStateFromHash(serverParams, InteractionType.Popup, validRequest.correlationId);
                            // Remove throttle if it exists
                            ThrottlingUtils.removeThrottle(this.browserStorage, this.config.auth.clientId, authCodeRequest);
                            if (serverParams.accountId) {
                                this.logger.verbose("Account id found in hash, calling WAM for token");
                                // end measurement for server call with native brokering enabled
                                if (fetchNativeAccountIdMeasurement) {
                                    fetchNativeAccountIdMeasurement.endMeasurement({
                                        success: true,
                                        isNativeBroker: true
                                    });
                                }
                                if (!this.nativeMessageHandler) {
                                    throw BrowserAuthError.createNativeConnectionNotEstablishedError();
                                }
                                nativeInteractionClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenPopup, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, validRequest.correlationId);
                                userRequestState = ProtocolUtils.parseRequestState(this.browserCrypto, state_1).userRequestState;
                                return [2 /*return*/, nativeInteractionClient.acquireToken(__assign$1(__assign$1({}, validRequest), { state: userRequestState, prompt: undefined // Server should handle the prompt, ideally native broker can do this part silently
                                     })).finally(function () {
                                        _this.browserStorage.cleanRequestByState(state_1);
                                    })];
                            }
                            return [4 /*yield*/, interactionHandler.handleCodeResponseFromHash(hash, state_1, authClient.authority, this.networkClient)];
                        case 7:
                            result = _a.sent();
                            return [2 /*return*/, result];
                        case 8:
                            e_1 = _a.sent();
                            if (popup) {
                                // Close the synchronous popup if an error is thrown before the window unload event is registered
                                popup.close();
                            }
                            if (e_1 instanceof AuthError) {
                                e_1.setCorrelationId(this.correlationId);
                            }
                            serverTelemetryManager.cacheFailedRequest(e_1);
                            this.browserStorage.cleanRequestByState(validRequest.state);
                            throw e_1;
                        case 9: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         *
         * @param validRequest
         * @param popupName
         * @param requestAuthority
         * @param popup
         * @param mainWindowRedirectUri
         * @param popupWindowAttributes
         */
        PopupClient.prototype.logoutPopupAsync = function (validRequest, popupName, popupWindowAttributes, requestAuthority, popup, mainWindowRedirectUri) {
            return __awaiter$1(this, void 0, void 0, function () {
                var serverTelemetryManager, authClient, logoutUri, popupWindow, navigationOptions, absoluteUrl, e_2;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("logoutPopupAsync called");
                            this.eventHandler.emitEvent(EventType.LOGOUT_START, InteractionType.Popup, validRequest);
                            serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.logoutPopup);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 5, , 6]);
                            // Clear cache on logout
                            return [4 /*yield*/, this.clearCacheOnLogout(validRequest.account)];
                        case 2:
                            // Clear cache on logout
                            _a.sent();
                            return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, requestAuthority)];
                        case 3:
                            authClient = _a.sent();
                            this.logger.verbose("Auth code client created");
                            logoutUri = authClient.getLogoutUri(validRequest);
                            this.eventHandler.emitEvent(EventType.LOGOUT_SUCCESS, InteractionType.Popup, validRequest);
                            popupWindow = this.openPopup(logoutUri, { popupName: popupName, popupWindowAttributes: popupWindowAttributes, popup: popup });
                            this.eventHandler.emitEvent(EventType.POPUP_OPENED, InteractionType.Popup, { popupWindow: popupWindow }, null);
                            return [4 /*yield*/, this.waitForLogoutPopup(popupWindow)];
                        case 4:
                            _a.sent();
                            if (mainWindowRedirectUri) {
                                navigationOptions = {
                                    apiId: ApiId.logoutPopup,
                                    timeout: this.config.system.redirectNavigationTimeout,
                                    noHistory: false
                                };
                                absoluteUrl = UrlString.getAbsoluteUrl(mainWindowRedirectUri, BrowserUtils.getCurrentUri());
                                this.logger.verbose("Redirecting main window to url specified in the request");
                                this.logger.verbosePii("Redirecting main window to: " + absoluteUrl);
                                this.navigationClient.navigateInternal(absoluteUrl, navigationOptions);
                            }
                            else {
                                this.logger.verbose("No main window navigation requested");
                            }
                            return [3 /*break*/, 6];
                        case 5:
                            e_2 = _a.sent();
                            if (popup) {
                                // Close the synchronous popup if an error is thrown before the window unload event is registered
                                popup.close();
                            }
                            if (e_2 instanceof AuthError) {
                                e_2.setCorrelationId(this.correlationId);
                            }
                            this.browserStorage.setInteractionInProgress(false);
                            this.eventHandler.emitEvent(EventType.LOGOUT_FAILURE, InteractionType.Popup, null, e_2);
                            this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Popup);
                            serverTelemetryManager.cacheFailedRequest(e_2);
                            throw e_2;
                        case 6:
                            this.eventHandler.emitEvent(EventType.LOGOUT_END, InteractionType.Popup);
                            return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Opens a popup window with given request Url.
         * @param requestUrl
         */
        PopupClient.prototype.initiateAuthRequest = function (requestUrl, params) {
            // Check that request url is not empty.
            if (!StringUtils.isEmpty(requestUrl)) {
                this.logger.infoPii("Navigate to: " + requestUrl);
                // Open the popup window to requestUrl.
                return this.openPopup(requestUrl, params);
            }
            else {
                // Throw error if request URL is empty.
                this.logger.error("Navigate url is empty");
                throw BrowserAuthError.createEmptyNavigationUriError();
            }
        };
        /**
         * Monitors a window until it loads a url with the same origin.
         * @param popupWindow - window that is being monitored
         * @param timeout - timeout for processing hash once popup is redirected back to application
         */
        PopupClient.prototype.monitorPopupForHash = function (popupWindow) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                /*
                 * Polling for popups needs to be tick-based,
                 * since a non-trivial amount of time can be spent on interaction (which should not count against the timeout).
                 */
                var maxTicks = _this.config.system.windowHashTimeout / BrowserConstants.POLL_INTERVAL_MS;
                var ticks = 0;
                _this.logger.verbose("PopupHandler.monitorPopupForHash - polling started");
                var intervalId = setInterval(function () {
                    // Window is closed
                    if (popupWindow.closed) {
                        _this.logger.error("PopupHandler.monitorPopupForHash - window closed");
                        _this.cleanPopup();
                        clearInterval(intervalId);
                        reject(BrowserAuthError.createUserCancelledError());
                        return;
                    }
                    var href = Constants.EMPTY_STRING;
                    var hash = Constants.EMPTY_STRING;
                    try {
                        /*
                         * Will throw if cross origin,
                         * which should be caught and ignored
                         * since we need the interval to keep running while on STS UI.
                         */
                        href = popupWindow.location.href;
                        hash = popupWindow.location.hash;
                    }
                    catch (e) { }
                    // Don't process blank pages or cross domain
                    if (StringUtils.isEmpty(href) || href === "about:blank") {
                        return;
                    }
                    _this.logger.verbose("PopupHandler.monitorPopupForHash - popup window is on same origin as caller");
                    /*
                     * Only run clock when we are on same domain for popups
                     * as popup operations can take a long time.
                     */
                    ticks++;
                    if (hash) {
                        _this.logger.verbose("PopupHandler.monitorPopupForHash - found hash in url");
                        clearInterval(intervalId);
                        _this.cleanPopup(popupWindow);
                        if (UrlString.hashContainsKnownProperties(hash)) {
                            _this.logger.verbose("PopupHandler.monitorPopupForHash - hash contains known properties, returning.");
                            resolve(hash);
                        }
                        else {
                            _this.logger.error("PopupHandler.monitorPopupForHash - found hash in url but it does not contain known properties. Check that your router is not changing the hash prematurely.");
                            _this.logger.errorPii("PopupHandler.monitorPopupForHash - hash found: " + hash);
                            reject(BrowserAuthError.createHashDoesNotContainKnownPropertiesError());
                        }
                    }
                    else if (ticks > maxTicks) {
                        _this.logger.error("PopupHandler.monitorPopupForHash - unable to find hash in url, timing out");
                        clearInterval(intervalId);
                        reject(BrowserAuthError.createMonitorPopupTimeoutError());
                    }
                }, BrowserConstants.POLL_INTERVAL_MS);
            });
        };
        /**
         * Waits for user interaction in logout popup window
         * @param popupWindow
         * @returns
         */
        PopupClient.prototype.waitForLogoutPopup = function (popupWindow) {
            var _this = this;
            return new Promise(function (resolve) {
                _this.logger.verbose("PopupHandler.waitForLogoutPopup - polling started");
                var intervalId = setInterval(function () {
                    // Window is closed
                    if (popupWindow.closed) {
                        _this.logger.error("PopupHandler.waitForLogoutPopup - window closed");
                        _this.cleanPopup();
                        clearInterval(intervalId);
                        resolve();
                    }
                    var href = Constants.EMPTY_STRING;
                    try {
                        /*
                         * Will throw if cross origin,
                         * which should be caught and ignored
                         * since we need the interval to keep running while on STS UI.
                         */
                        href = popupWindow.location.href;
                    }
                    catch (e) { }
                    // Don't process blank pages or cross domain
                    if (StringUtils.isEmpty(href) || href === "about:blank") {
                        return;
                    }
                    _this.logger.verbose("PopupHandler.waitForLogoutPopup - popup window is on same origin as caller, closing.");
                    clearInterval(intervalId);
                    _this.cleanPopup(popupWindow);
                    resolve();
                }, BrowserConstants.POLL_INTERVAL_MS);
            });
        };
        /**
         * @hidden
         *
         * Configures popup window for login.
         *
         * @param urlNavigate
         * @param title
         * @param popUpWidth
         * @param popUpHeight
         * @param popupWindowAttributes
         * @ignore
         * @hidden
         */
        PopupClient.prototype.openPopup = function (urlNavigate, popupParams) {
            try {
                var popupWindow = void 0;
                // Popup window passed in, setting url to navigate to
                if (popupParams.popup) {
                    popupWindow = popupParams.popup;
                    this.logger.verbosePii("Navigating popup window to: " + urlNavigate);
                    popupWindow.location.assign(urlNavigate);
                }
                else if (typeof popupParams.popup === "undefined") {
                    // Popup will be undefined if it was not passed in
                    this.logger.verbosePii("Opening popup window to: " + urlNavigate);
                    popupWindow = this.openSizedPopup(urlNavigate, popupParams.popupName, popupParams.popupWindowAttributes);
                }
                // Popup will be null if popups are blocked
                if (!popupWindow) {
                    throw BrowserAuthError.createEmptyWindowCreatedError();
                }
                if (popupWindow.focus) {
                    popupWindow.focus();
                }
                this.currentWindow = popupWindow;
                window.addEventListener("beforeunload", this.unloadWindow);
                return popupWindow;
            }
            catch (e) {
                this.logger.error("error opening popup " + e.message);
                this.browserStorage.setInteractionInProgress(false);
                throw BrowserAuthError.createPopupWindowError(e.toString());
            }
        };
        /**
         * Helper function to set popup window dimensions and position
         * @param urlNavigate
         * @param popupName
         * @param popupWindowAttributes
         * @returns
         */
        PopupClient.prototype.openSizedPopup = function (urlNavigate, popupName, popupWindowAttributes) {
            var _a, _b, _c, _d;
            /**
             * adding winLeft and winTop to account for dual monitor
             * using screenLeft and screenTop for IE8 and earlier
             */
            var winLeft = window.screenLeft ? window.screenLeft : window.screenX;
            var winTop = window.screenTop ? window.screenTop : window.screenY;
            /**
             * window.innerWidth displays browser window"s height and width excluding toolbars
             * using document.documentElement.clientWidth for IE8 and earlier
             */
            var winWidth = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth;
            var winHeight = window.innerHeight || document.documentElement.clientHeight || document.body.clientHeight;
            var width = (_a = popupWindowAttributes.popupSize) === null || _a === void 0 ? void 0 : _a.width;
            var height = (_b = popupWindowAttributes.popupSize) === null || _b === void 0 ? void 0 : _b.height;
            var top = (_c = popupWindowAttributes.popupPosition) === null || _c === void 0 ? void 0 : _c.top;
            var left = (_d = popupWindowAttributes.popupPosition) === null || _d === void 0 ? void 0 : _d.left;
            if (!width || width < 0 || width > winWidth) {
                this.logger.verbose("Default popup window width used. Window width not configured or invalid.");
                width = BrowserConstants.POPUP_WIDTH;
            }
            if (!height || height < 0 || height > winHeight) {
                this.logger.verbose("Default popup window height used. Window height not configured or invalid.");
                height = BrowserConstants.POPUP_HEIGHT;
            }
            if (!top || top < 0 || top > winHeight) {
                this.logger.verbose("Default popup window top position used. Window top not configured or invalid.");
                top = Math.max(0, ((winHeight / 2) - (BrowserConstants.POPUP_HEIGHT / 2)) + winTop);
            }
            if (!left || left < 0 || left > winWidth) {
                this.logger.verbose("Default popup window left position used. Window left not configured or invalid.");
                left = Math.max(0, ((winWidth / 2) - (BrowserConstants.POPUP_WIDTH / 2)) + winLeft);
            }
            return window.open(urlNavigate, popupName, "width=" + width + ", height=" + height + ", top=" + top + ", left=" + left + ", scrollbars=yes");
        };
        /**
         * Event callback to unload main window.
         */
        PopupClient.prototype.unloadWindow = function (e) {
            this.browserStorage.cleanRequestByInteractionType(InteractionType.Popup);
            if (this.currentWindow) {
                this.currentWindow.close();
            }
            // Guarantees browser unload will happen, so no other errors will be thrown.
            e.preventDefault();
        };
        /**
         * Closes popup, removes any state vars created during popup calls.
         * @param popupWindow
         */
        PopupClient.prototype.cleanPopup = function (popupWindow) {
            if (popupWindow) {
                // Close window.
                popupWindow.close();
            }
            // Remove window unload function
            window.removeEventListener("beforeunload", this.unloadWindow);
            // Interaction is completed - remove interaction status.
            this.browserStorage.setInteractionInProgress(false);
        };
        /**
         * Generates the name for the popup based on the client id and request
         * @param clientId
         * @param request
         */
        PopupClient.prototype.generatePopupName = function (scopes, authority) {
            return BrowserConstants.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + scopes.join("-") + "." + authority + "." + this.correlationId;
        };
        /**
         * Generates the name for the popup based on the client id and request for logouts
         * @param clientId
         * @param request
         */
        PopupClient.prototype.generateLogoutPopupName = function (request) {
            var homeAccountId = request.account && request.account.homeAccountId;
            return BrowserConstants.POPUP_NAME_PREFIX + "." + this.config.auth.clientId + "." + homeAccountId + "." + this.correlationId;
        };
        return PopupClient;
    }(StandardInteractionClient));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var NavigationClient = /** @class */ (function () {
        function NavigationClient() {
        }
        /**
         * Navigates to other pages within the same web application
         * @param url
         * @param options
         */
        NavigationClient.prototype.navigateInternal = function (url, options) {
            return NavigationClient.defaultNavigateWindow(url, options);
        };
        /**
         * Navigates to other pages outside the web application i.e. the Identity Provider
         * @param url
         * @param options
         */
        NavigationClient.prototype.navigateExternal = function (url, options) {
            return NavigationClient.defaultNavigateWindow(url, options);
        };
        /**
         * Default navigation implementation invoked by the internal and external functions
         * @param url
         * @param options
         */
        NavigationClient.defaultNavigateWindow = function (url, options) {
            if (options.noHistory) {
                window.location.replace(url);
            }
            else {
                window.location.assign(url);
            }
            return new Promise(function (resolve) {
                setTimeout(function () {
                    resolve(true);
                }, options.timeout);
            });
        };
        return NavigationClient;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    // Default timeout for popup windows and iframes in milliseconds
    var DEFAULT_POPUP_TIMEOUT_MS = 60000;
    var DEFAULT_IFRAME_TIMEOUT_MS = 6000;
    var DEFAULT_REDIRECT_TIMEOUT_MS = 30000;
    var DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS = 2000;
    /**
     * MSAL function that sets the default options when not explicitly configured from app developer
     *
     * @param auth
     * @param cache
     * @param system
     *
     * @returns Configuration object
     */
    function buildConfiguration(_a, isBrowserEnvironment) {
        var userInputAuth = _a.auth, userInputCache = _a.cache, userInputSystem = _a.system, userInputTelemetry = _a.telemetry;
        // Default auth options for browser
        var DEFAULT_AUTH_OPTIONS = {
            clientId: Constants.EMPTY_STRING,
            authority: "" + Constants.DEFAULT_AUTHORITY,
            knownAuthorities: [],
            cloudDiscoveryMetadata: Constants.EMPTY_STRING,
            authorityMetadata: Constants.EMPTY_STRING,
            redirectUri: Constants.EMPTY_STRING,
            postLogoutRedirectUri: Constants.EMPTY_STRING,
            navigateToLoginRequestUrl: true,
            clientCapabilities: [],
            protocolMode: ProtocolMode.AAD,
            azureCloudOptions: {
                azureCloudInstance: AzureCloudInstance.None,
                tenant: Constants.EMPTY_STRING
            },
        };
        // Default cache options for browser
        var DEFAULT_CACHE_OPTIONS = {
            cacheLocation: BrowserCacheLocation.SessionStorage,
            storeAuthStateInCookie: false,
            secureCookies: false
        };
        // Default logger options for browser
        var DEFAULT_LOGGER_OPTIONS = {
            // eslint-disable-next-line @typescript-eslint/no-empty-function
            loggerCallback: function () { },
            logLevel: LogLevel.Info,
            piiLoggingEnabled: false
        };
        // Default system options for browser
        var DEFAULT_BROWSER_SYSTEM_OPTIONS = __assign$1(__assign$1({}, DEFAULT_SYSTEM_OPTIONS), { loggerOptions: DEFAULT_LOGGER_OPTIONS, networkClient: isBrowserEnvironment ? BrowserUtils.getBrowserNetworkClient() : StubbedNetworkModule, navigationClient: new NavigationClient(), loadFrameTimeout: 0, 
            // If loadFrameTimeout is provided, use that as default.
            windowHashTimeout: (userInputSystem === null || userInputSystem === void 0 ? void 0 : userInputSystem.loadFrameTimeout) || DEFAULT_POPUP_TIMEOUT_MS, iframeHashTimeout: (userInputSystem === null || userInputSystem === void 0 ? void 0 : userInputSystem.loadFrameTimeout) || DEFAULT_IFRAME_TIMEOUT_MS, navigateFrameWait: isBrowserEnvironment && BrowserUtils.detectIEOrEdge() ? 500 : 0, redirectNavigationTimeout: DEFAULT_REDIRECT_TIMEOUT_MS, asyncPopups: false, allowRedirectInIframe: false, allowNativeBroker: false, nativeBrokerHandshakeTimeout: (userInputSystem === null || userInputSystem === void 0 ? void 0 : userInputSystem.nativeBrokerHandshakeTimeout) || DEFAULT_NATIVE_BROKER_HANDSHAKE_TIMEOUT_MS });
        var DEFAULT_TELEMETRY_OPTIONS = {
            application: {
                appName: Constants.EMPTY_STRING,
                appVersion: Constants.EMPTY_STRING
            }
        };
        var overlayedConfig = {
            auth: __assign$1(__assign$1({}, DEFAULT_AUTH_OPTIONS), userInputAuth),
            cache: __assign$1(__assign$1({}, DEFAULT_CACHE_OPTIONS), userInputCache),
            system: __assign$1(__assign$1({}, DEFAULT_BROWSER_SYSTEM_OPTIONS), userInputSystem),
            telemetry: __assign$1(__assign$1({}, DEFAULT_TELEMETRY_OPTIONS), userInputTelemetry)
        };
        return overlayedConfig;
    }

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var SilentHandler = /** @class */ (function (_super) {
        __extends$1(SilentHandler, _super);
        function SilentHandler(authCodeModule, storageImpl, authCodeRequest, logger, navigateFrameWait) {
            var _this = _super.call(this, authCodeModule, storageImpl, authCodeRequest, logger) || this;
            _this.navigateFrameWait = navigateFrameWait;
            return _this;
        }
        /**
         * Creates a hidden iframe to given URL using user-requested scopes as an id.
         * @param urlNavigate
         * @param userRequestScopes
         */
        SilentHandler.prototype.initiateAuthRequest = function (requestUrl) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _a;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            if (StringUtils.isEmpty(requestUrl)) {
                                // Throw error if request URL is empty.
                                this.logger.info("Navigate url is empty");
                                throw BrowserAuthError.createEmptyNavigationUriError();
                            }
                            if (!this.navigateFrameWait) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.loadFrame(requestUrl)];
                        case 1:
                            _a = _b.sent();
                            return [3 /*break*/, 3];
                        case 2:
                            _a = this.loadFrameSync(requestUrl);
                            _b.label = 3;
                        case 3: return [2 /*return*/, _a];
                    }
                });
            });
        };
        /**
         * Monitors an iframe content window until it loads a url with a known hash, or hits a specified timeout.
         * @param iframe
         * @param timeout
         */
        SilentHandler.prototype.monitorIframeForHash = function (iframe, timeout) {
            var _this = this;
            return new Promise(function (resolve, reject) {
                if (timeout < DEFAULT_IFRAME_TIMEOUT_MS) {
                    _this.logger.warning("system.loadFrameTimeout or system.iframeHashTimeout set to lower (" + timeout + "ms) than the default (" + DEFAULT_IFRAME_TIMEOUT_MS + "ms). This may result in timeouts.");
                }
                /*
                 * Polling for iframes can be purely timing based,
                 * since we don't need to account for interaction.
                 */
                var nowMark = window.performance.now();
                var timeoutMark = nowMark + timeout;
                var intervalId = setInterval(function () {
                    if (window.performance.now() > timeoutMark) {
                        _this.removeHiddenIframe(iframe);
                        clearInterval(intervalId);
                        reject(BrowserAuthError.createMonitorIframeTimeoutError());
                        return;
                    }
                    var href = Constants.EMPTY_STRING;
                    var contentWindow = iframe.contentWindow;
                    try {
                        /*
                         * Will throw if cross origin,
                         * which should be caught and ignored
                         * since we need the interval to keep running while on STS UI.
                         */
                        href = contentWindow ? contentWindow.location.href : Constants.EMPTY_STRING;
                    }
                    catch (e) { }
                    if (StringUtils.isEmpty(href)) {
                        return;
                    }
                    var contentHash = contentWindow ? contentWindow.location.hash : Constants.EMPTY_STRING;
                    if (UrlString.hashContainsKnownProperties(contentHash)) {
                        // Success case
                        _this.removeHiddenIframe(iframe);
                        clearInterval(intervalId);
                        resolve(contentHash);
                        return;
                    }
                }, BrowserConstants.POLL_INTERVAL_MS);
            });
        };
        /**
         * @hidden
         * Loads iframe with authorization endpoint URL
         * @ignore
         */
        SilentHandler.prototype.loadFrame = function (urlNavigate) {
            /*
             * This trick overcomes iframe navigation in IE
             * IE does not load the page consistently in iframe
             */
            var _this = this;
            return new Promise(function (resolve, reject) {
                var frameHandle = _this.createHiddenIframe();
                setTimeout(function () {
                    if (!frameHandle) {
                        reject("Unable to load iframe");
                        return;
                    }
                    frameHandle.src = urlNavigate;
                    resolve(frameHandle);
                }, _this.navigateFrameWait);
            });
        };
        /**
         * @hidden
         * Loads the iframe synchronously when the navigateTimeFrame is set to `0`
         * @param urlNavigate
         * @param frameName
         * @param logger
         */
        SilentHandler.prototype.loadFrameSync = function (urlNavigate) {
            var frameHandle = this.createHiddenIframe();
            frameHandle.src = urlNavigate;
            return frameHandle;
        };
        /**
         * @hidden
         * Creates a new hidden iframe or gets an existing one for silent token renewal.
         * @ignore
         */
        SilentHandler.prototype.createHiddenIframe = function () {
            var authFrame = document.createElement("iframe");
            authFrame.style.visibility = "hidden";
            authFrame.style.position = "absolute";
            authFrame.style.width = authFrame.style.height = "0";
            authFrame.style.border = "0";
            authFrame.setAttribute("sandbox", "allow-scripts allow-same-origin allow-forms");
            document.getElementsByTagName("body")[0].appendChild(authFrame);
            return authFrame;
        };
        /**
         * @hidden
         * Removes a hidden iframe from the page.
         * @ignore
         */
        SilentHandler.prototype.removeHiddenIframe = function (iframe) {
            if (document.body === iframe.parentNode) {
                document.body.removeChild(iframe);
            }
        };
        return SilentHandler;
    }(InteractionHandler));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var SilentIframeClient = /** @class */ (function (_super) {
        __extends$1(SilentIframeClient, _super);
        function SilentIframeClient(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, nativeMessageHandler, correlationId) {
            var _this = _super.call(this, config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) || this;
            _this.apiId = apiId;
            return _this;
        }
        /**
         * Acquires a token silently by opening a hidden iframe to the /authorize endpoint with prompt=none
         * @param request
         */
        SilentIframeClient.prototype.acquireToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var acquireTokenMeasurement, silentRequest, serverTelemetryManager, authClient, e_1;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.verbose("acquireTokenByIframe called");
                            acquireTokenMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SilentIframeClientAcquireToken, request.correlationId);
                            // Check that we have some SSO data
                            if (StringUtils.isEmpty(request.loginHint) && StringUtils.isEmpty(request.sid) && (!request.account || StringUtils.isEmpty(request.account.username))) {
                                this.logger.warning("No user hint provided. The authorization server may need more information to complete this request.");
                            }
                            // Check that prompt is set to none, throw error if it is set to anything else.
                            if (request.prompt && request.prompt !== PromptValue.NONE) {
                                acquireTokenMeasurement.endMeasurement({
                                    success: false
                                });
                                throw BrowserAuthError.createSilentPromptValueError(request.prompt);
                            }
                            return [4 /*yield*/, this.initializeAuthorizationRequest(__assign$1(__assign$1({}, request), { prompt: PromptValue.NONE }), InteractionType.Silent)];
                        case 1:
                            silentRequest = _a.sent();
                            this.browserStorage.updateCacheEntries(silentRequest.state, silentRequest.nonce, silentRequest.authority, silentRequest.loginHint || Constants.EMPTY_STRING, silentRequest.account || null);
                            serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 5, , 6]);
                            return [4 /*yield*/, this.createAuthCodeClient(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions)];
                        case 3:
                            authClient = _a.sent();
                            this.logger.verbose("Auth code client created");
                            return [4 /*yield*/, this.silentTokenHelper(authClient, silentRequest).then(function (result) {
                                    acquireTokenMeasurement.endMeasurement({
                                        success: true,
                                        fromCache: false
                                    });
                                    return result;
                                })];
                        case 4: return [2 /*return*/, _a.sent()];
                        case 5:
                            e_1 = _a.sent();
                            if (e_1 instanceof AuthError) {
                                e_1.setCorrelationId(this.correlationId);
                            }
                            serverTelemetryManager.cacheFailedRequest(e_1);
                            this.browserStorage.cleanRequestByState(silentRequest.state);
                            acquireTokenMeasurement.endMeasurement({
                                errorCode: e_1 instanceof AuthError && e_1.errorCode || undefined,
                                subErrorCode: e_1 instanceof AuthError && e_1.subError || undefined,
                                success: false
                            });
                            throw e_1;
                        case 6: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Currently Unsupported
         */
        SilentIframeClient.prototype.logout = function () {
            // Synchronous so we must reject
            return Promise.reject(BrowserAuthError.createSilentLogoutUnsupportedError());
        };
        /**
         * Helper which acquires an authorization code silently using a hidden iframe from given url
         * using the scopes requested as part of the id, and exchanges the code for a set of OAuth tokens.
         * @param navigateUrl
         * @param userRequestScopes
         */
        SilentIframeClient.prototype.silentTokenHelper = function (authClient, silentRequest) {
            return __awaiter$1(this, void 0, void 0, function () {
                var authCodeRequest, navigateUrl, silentHandler, msalFrame, hash, serverParams, state, nativeInteractionClient, userRequestState;
                var _this = this;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.initializeAuthorizationCodeRequest(silentRequest)];
                        case 1:
                            authCodeRequest = _a.sent();
                            return [4 /*yield*/, authClient.getAuthCodeUrl(__assign$1(__assign$1({}, silentRequest), { nativeBroker: NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeMessageHandler, silentRequest.authenticationScheme) }))];
                        case 2:
                            navigateUrl = _a.sent();
                            silentHandler = new SilentHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.config.system.navigateFrameWait);
                            return [4 /*yield*/, silentHandler.initiateAuthRequest(navigateUrl)];
                        case 3:
                            msalFrame = _a.sent();
                            return [4 /*yield*/, silentHandler.monitorIframeForHash(msalFrame, this.config.system.iframeHashTimeout)];
                        case 4:
                            hash = _a.sent();
                            serverParams = UrlString.getDeserializedHash(hash);
                            state = this.validateAndExtractStateFromHash(serverParams, InteractionType.Silent, authCodeRequest.correlationId);
                            if (serverParams.accountId) {
                                this.logger.verbose("Account id found in hash, calling WAM for token");
                                if (!this.nativeMessageHandler) {
                                    throw BrowserAuthError.createNativeConnectionNotEstablishedError();
                                }
                                nativeInteractionClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.apiId, this.performanceClient, this.nativeMessageHandler, serverParams.accountId, this.correlationId);
                                userRequestState = ProtocolUtils.parseRequestState(this.browserCrypto, state).userRequestState;
                                return [2 /*return*/, nativeInteractionClient.acquireToken(__assign$1(__assign$1({}, silentRequest), { state: userRequestState, prompt: PromptValue.NONE })).finally(function () {
                                        _this.browserStorage.cleanRequestByState(state);
                                    })];
                            }
                            // Handle response from hash string
                            return [2 /*return*/, silentHandler.handleCodeResponseFromHash(hash, state, authClient.authority, this.networkClient)];
                    }
                });
            });
        };
        return SilentIframeClient;
    }(StandardInteractionClient));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var SilentCacheClient = /** @class */ (function (_super) {
        __extends$1(SilentCacheClient, _super);
        function SilentCacheClient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Returns unexpired tokens from the cache, if available
         * @param silentRequest
         */
        SilentCacheClient.prototype.acquireToken = function (silentRequest) {
            return __awaiter$1(this, void 0, void 0, function () {
                var acquireTokenMeasurement, serverTelemetryManager, silentAuthClient, cachedToken, error_1;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            acquireTokenMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SilentCacheClientAcquireToken, silentRequest.correlationId);
                            serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenSilent_silentFlow);
                            return [4 /*yield*/, this.createSilentFlowClient(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions)];
                        case 1:
                            silentAuthClient = _a.sent();
                            this.logger.verbose("Silent auth client created");
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/, silentAuthClient.acquireCachedToken(silentRequest)];
                        case 3:
                            cachedToken = _a.sent();
                            acquireTokenMeasurement.endMeasurement({
                                success: true,
                                fromCache: true
                            });
                            return [2 /*return*/, cachedToken];
                        case 4:
                            error_1 = _a.sent();
                            if (error_1 instanceof BrowserAuthError && error_1.errorCode === BrowserAuthErrorMessage.signingKeyNotFoundInStorage.code) {
                                this.logger.verbose("Signing keypair for bound access token not found. Refreshing bound access token and generating a new crypto keypair.");
                            }
                            acquireTokenMeasurement.endMeasurement({
                                errorCode: error_1 instanceof AuthError && error_1.errorCode || undefined,
                                subErrorCode: error_1 instanceof AuthError && error_1.subError || undefined,
                                success: false
                            });
                            throw error_1;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Currently Unsupported
         */
        SilentCacheClient.prototype.logout = function () {
            // Synchronous so we must reject
            return Promise.reject(BrowserAuthError.createSilentLogoutUnsupportedError());
        };
        /**
         * Creates an Silent Flow Client with the given authority, or the default authority.
         * @param serverTelemetryManager
         * @param authorityUrl
         */
        SilentCacheClient.prototype.createSilentFlowClient = function (serverTelemetryManager, authorityUrl, azureCloudOptions) {
            return __awaiter$1(this, void 0, void 0, function () {
                var clientConfig;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getClientConfiguration(serverTelemetryManager, authorityUrl, azureCloudOptions)];
                        case 1:
                            clientConfig = _a.sent();
                            return [2 /*return*/, new SilentFlowClient(clientConfig)];
                    }
                });
            });
        };
        SilentCacheClient.prototype.initializeSilentRequest = function (request, account) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _a;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = [__assign$1({}, request)];
                            return [4 /*yield*/, this.initializeBaseRequest(request)];
                        case 1: return [2 /*return*/, __assign$1.apply(void 0, [__assign$1.apply(void 0, _a.concat([_b.sent()])), { account: account, forceRefresh: request.forceRefresh || false }])];
                    }
                });
            });
        };
        return SilentCacheClient;
    }(StandardInteractionClient));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var SilentRefreshClient = /** @class */ (function (_super) {
        __extends$1(SilentRefreshClient, _super);
        function SilentRefreshClient() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        /**
         * Exchanges the refresh token for new tokens
         * @param request
         */
        SilentRefreshClient.prototype.acquireToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var silentRequest, _a, acquireTokenMeasurement, serverTelemetryManager, refreshTokenClient;
                var _this = this;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            _a = [__assign$1({}, request)];
                            return [4 /*yield*/, this.initializeBaseRequest(request)];
                        case 1:
                            silentRequest = __assign$1.apply(void 0, _a.concat([_b.sent()]));
                            acquireTokenMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SilentRefreshClientAcquireToken, silentRequest.correlationId);
                            serverTelemetryManager = this.initializeServerTelemetryManager(ApiId.acquireTokenSilent_silentFlow);
                            return [4 /*yield*/, this.createRefreshTokenClient(serverTelemetryManager, silentRequest.authority, silentRequest.azureCloudOptions)];
                        case 2:
                            refreshTokenClient = _b.sent();
                            this.logger.verbose("Refresh token client created");
                            // Send request to renew token. Auth module will throw errors if token cannot be renewed.
                            return [2 /*return*/, refreshTokenClient.acquireTokenByRefreshToken(silentRequest)
                                    .then(function (result) {
                                    acquireTokenMeasurement.endMeasurement({
                                        success: true,
                                        fromCache: result.fromCache
                                    });
                                    return result;
                                })
                                    .catch(function (e) {
                                    if (e instanceof AuthError) {
                                        e.setCorrelationId(_this.correlationId);
                                    }
                                    serverTelemetryManager.cacheFailedRequest(e);
                                    acquireTokenMeasurement.endMeasurement({
                                        errorCode: e.errorCode,
                                        subErrorCode: e.subError,
                                        success: false
                                    });
                                    throw e;
                                })];
                    }
                });
            });
        };
        /**
         * Currently Unsupported
         */
        SilentRefreshClient.prototype.logout = function () {
            // Synchronous so we must reject
            return Promise.reject(BrowserAuthError.createSilentLogoutUnsupportedError());
        };
        /**
         * Creates a Refresh Client with the given authority, or the default authority.
         * @param serverTelemetryManager
         * @param authorityUrl
         */
        SilentRefreshClient.prototype.createRefreshTokenClient = function (serverTelemetryManager, authorityUrl, azureCloudOptions) {
            return __awaiter$1(this, void 0, void 0, function () {
                var clientConfig;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.getClientConfiguration(serverTelemetryManager, authorityUrl, azureCloudOptions)];
                        case 1:
                            clientConfig = _a.sent();
                            return [2 /*return*/, new RefreshTokenClient(clientConfig)];
                    }
                });
            });
        };
        return SilentRefreshClient;
    }(StandardInteractionClient));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var EventHandler = /** @class */ (function () {
        function EventHandler(logger, browserCrypto) {
            this.eventCallbacks = new Map();
            this.logger = logger;
            this.browserCrypto = browserCrypto;
            this.listeningToStorageEvents = false;
            this.handleAccountCacheChange = this.handleAccountCacheChange.bind(this);
        }
        /**
         * Adds event callbacks to array
         * @param callback
         */
        EventHandler.prototype.addEventCallback = function (callback) {
            if (typeof window !== "undefined") {
                var callbackId = this.browserCrypto.createNewGuid();
                this.eventCallbacks.set(callbackId, callback);
                this.logger.verbose("Event callback registered with id: " + callbackId);
                return callbackId;
            }
            return null;
        };
        /**
         * Removes callback with provided id from callback array
         * @param callbackId
         */
        EventHandler.prototype.removeEventCallback = function (callbackId) {
            this.eventCallbacks.delete(callbackId);
            this.logger.verbose("Event callback " + callbackId + " removed.");
        };
        /**
         * Adds event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
         */
        EventHandler.prototype.enableAccountStorageEvents = function () {
            if (typeof window === "undefined") {
                return;
            }
            if (!this.listeningToStorageEvents) {
                this.logger.verbose("Adding account storage listener.");
                this.listeningToStorageEvents = true;
                window.addEventListener("storage", this.handleAccountCacheChange);
            }
            else {
                this.logger.verbose("Account storage listener already registered.");
            }
        };
        /**
         * Removes event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
         */
        EventHandler.prototype.disableAccountStorageEvents = function () {
            if (typeof window === "undefined") {
                return;
            }
            if (this.listeningToStorageEvents) {
                this.logger.verbose("Removing account storage listener.");
                window.removeEventListener("storage", this.handleAccountCacheChange);
                this.listeningToStorageEvents = false;
            }
            else {
                this.logger.verbose("No account storage listener registered.");
            }
        };
        /**
         * Emits events by calling callback with event message
         * @param eventType
         * @param interactionType
         * @param payload
         * @param error
         */
        EventHandler.prototype.emitEvent = function (eventType, interactionType, payload, error) {
            var _this = this;
            if (typeof window !== "undefined") {
                var message_1 = {
                    eventType: eventType,
                    interactionType: interactionType || null,
                    payload: payload || null,
                    error: error || null,
                    timestamp: Date.now()
                };
                this.logger.info("Emitting event: " + eventType);
                this.eventCallbacks.forEach(function (callback, callbackId) {
                    _this.logger.verbose("Emitting event to callback " + callbackId + ": " + eventType);
                    callback.apply(null, [message_1]);
                });
            }
        };
        /**
         * Emit account added/removed events when cached accounts are changed in a different tab or frame
         */
        EventHandler.prototype.handleAccountCacheChange = function (e) {
            try {
                var cacheValue = e.newValue || e.oldValue;
                if (!cacheValue) {
                    return;
                }
                var parsedValue = JSON.parse(cacheValue);
                if (typeof parsedValue !== "object" || !AccountEntity.isAccountEntity(parsedValue)) {
                    return;
                }
                var accountEntity = CacheManager.toObject(new AccountEntity(), parsedValue);
                var accountInfo = accountEntity.getAccountInfo();
                if (!e.oldValue && e.newValue) {
                    this.logger.info("Account was added to cache in a different window");
                    this.emitEvent(EventType.ACCOUNT_ADDED, undefined, accountInfo);
                }
                else if (!e.newValue && e.oldValue) {
                    this.logger.info("Account was removed from cache in a different window");
                    this.emitEvent(EventType.ACCOUNT_REMOVED, undefined, accountInfo);
                }
            }
            catch (e) {
                return;
            }
        };
        return EventHandler;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility class for math specific functions in browser.
     */
    var MathUtils = /** @class */ (function () {
        function MathUtils() {
        }
        /**
         * Decimal to Hex
         *
         * @param num
         */
        MathUtils.decimalToHex = function (num) {
            var hex = num.toString(16);
            while (hex.length < 2) {
                hex = "0" + hex;
            }
            return hex;
        };
        return MathUtils;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var GuidGenerator = /** @class */ (function () {
        function GuidGenerator(cryptoObj) {
            this.cryptoObj = cryptoObj;
        }
        /*
         * RFC4122: The version 4 UUID is meant for generating UUIDs from truly-random or
         * pseudo-random numbers.
         * The algorithm is as follows:
         *     Set the two most significant bits (bits 6 and 7) of the
         *        clock_seq_hi_and_reserved to zero and one, respectively.
         *     Set the four most significant bits (bits 12 through 15) of the
         *        time_hi_and_version field to the 4-bit version number from
         *        Section 4.1.3. Version4
         *     Set all the other bits to randomly (or pseudo-randomly) chosen
         *     values.
         * UUID                   = time-low "-" time-mid "-"time-high-and-version "-"clock-seq-reserved and low(2hexOctet)"-" node
         * time-low               = 4hexOctet
         * time-mid               = 2hexOctet
         * time-high-and-version  = 2hexOctet
         * clock-seq-and-reserved = hexOctet:
         * clock-seq-low          = hexOctet
         * node                   = 6hexOctet
         * Format: xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx
         * y could be 1000, 1001, 1010, 1011 since most significant two bits needs to be 10
         * y values are 8, 9, A, B
         */
        GuidGenerator.prototype.generateGuid = function () {
            try {
                var buffer = new Uint8Array(16);
                this.cryptoObj.getRandomValues(buffer);
                // buffer[6] and buffer[7] represents the time_hi_and_version field. We will set the four most significant bits (4 through 7) of buffer[6] to represent decimal number 4 (UUID version number).
                buffer[6] |= 0x40; // buffer[6] | 01000000 will set the 6 bit to 1.
                buffer[6] &= 0x4f; // buffer[6] & 01001111 will set the 4, 5, and 7 bit to 0 such that bits 4-7 == 0100 = "4".
                // buffer[8] represents the clock_seq_hi_and_reserved field. We will set the two most significant bits (6 and 7) of the clock_seq_hi_and_reserved to zero and one, respectively.
                buffer[8] |= 0x80; // buffer[8] | 10000000 will set the 7 bit to 1.
                buffer[8] &= 0xbf; // buffer[8] & 10111111 will set the 6 bit to 0.
                return MathUtils.decimalToHex(buffer[0]) + MathUtils.decimalToHex(buffer[1])
                    + MathUtils.decimalToHex(buffer[2]) + MathUtils.decimalToHex(buffer[3])
                    + "-" + MathUtils.decimalToHex(buffer[4]) + MathUtils.decimalToHex(buffer[5])
                    + "-" + MathUtils.decimalToHex(buffer[6]) + MathUtils.decimalToHex(buffer[7])
                    + "-" + MathUtils.decimalToHex(buffer[8]) + MathUtils.decimalToHex(buffer[9])
                    + "-" + MathUtils.decimalToHex(buffer[10]) + MathUtils.decimalToHex(buffer[11])
                    + MathUtils.decimalToHex(buffer[12]) + MathUtils.decimalToHex(buffer[13])
                    + MathUtils.decimalToHex(buffer[14]) + MathUtils.decimalToHex(buffer[15]);
            }
            catch (err) {
                var guidHolder = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx";
                var hex = "0123456789abcdef";
                var r = 0;
                var guidResponse = Constants.EMPTY_STRING;
                for (var i = 0; i < 36; i++) {
                    if (guidHolder[i] !== "-" && guidHolder[i] !== "4") {
                        // each x and y needs to be random
                        r = Math.random() * 16 | 0;
                    }
                    if (guidHolder[i] === "x") {
                        guidResponse += hex[r];
                    }
                    else if (guidHolder[i] === "y") {
                        // clock-seq-and-reserved first hex is filtered and remaining hex values are random
                        r &= 0x3; // bit and with 0011 to set pos 2 to zero ?0??
                        r |= 0x8; // set pos 3 to 1 as 1???
                        guidResponse += hex[r];
                    }
                    else {
                        guidResponse += guidHolder[i];
                    }
                }
                return guidResponse;
            }
        };
        /**
         * verifies if a string is  GUID
         * @param guid
         */
        GuidGenerator.prototype.isGuid = function (guid) {
            var regexGuid = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
            return regexGuid.test(guid);
        };
        return GuidGenerator;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Utility functions for strings in a browser. See here for implementation details:
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
     */
    var BrowserStringUtils = /** @class */ (function () {
        function BrowserStringUtils() {
        }
        /**
         * Converts string to Uint8Array
         * @param sDOMStr
         */
        BrowserStringUtils.stringToUtf8Arr = function (sDOMStr) {
            var nChr;
            var nArrLen = 0;
            var nStrLen = sDOMStr.length;
            /* mapping... */
            for (var nMapIdx = 0; nMapIdx < nStrLen; nMapIdx++) {
                nChr = sDOMStr.charCodeAt(nMapIdx);
                nArrLen += nChr < 0x80 ? 1 : nChr < 0x800 ? 2 : nChr < 0x10000 ? 3 : nChr < 0x200000 ? 4 : nChr < 0x4000000 ? 5 : 6;
            }
            var aBytes = new Uint8Array(nArrLen);
            /* transcription... */
            for (var nIdx = 0, nChrIdx = 0; nIdx < nArrLen; nChrIdx++) {
                nChr = sDOMStr.charCodeAt(nChrIdx);
                if (nChr < 128) {
                    /* one byte */
                    aBytes[nIdx++] = nChr;
                }
                else if (nChr < 0x800) {
                    /* two bytes */
                    aBytes[nIdx++] = 192 + (nChr >>> 6);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else if (nChr < 0x10000) {
                    /* three bytes */
                    aBytes[nIdx++] = 224 + (nChr >>> 12);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else if (nChr < 0x200000) {
                    /* four bytes */
                    aBytes[nIdx++] = 240 + (nChr >>> 18);
                    aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else if (nChr < 0x4000000) {
                    /* five bytes */
                    aBytes[nIdx++] = 248 + (nChr >>> 24);
                    aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
                else /* if (nChr <= 0x7fffffff) */ {
                    /* six bytes */
                    aBytes[nIdx++] = 252 + (nChr >>> 30);
                    aBytes[nIdx++] = 128 + (nChr >>> 24 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 18 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 12 & 63);
                    aBytes[nIdx++] = 128 + (nChr >>> 6 & 63);
                    aBytes[nIdx++] = 128 + (nChr & 63);
                }
            }
            return aBytes;
        };
        /**
         * Converst string to ArrayBuffer
         * @param dataString
         */
        BrowserStringUtils.stringToArrayBuffer = function (dataString) {
            var data = new ArrayBuffer(dataString.length);
            var dataView = new Uint8Array(data);
            for (var i = 0; i < dataString.length; i++) {
                dataView[i] = dataString.charCodeAt(i);
            }
            return data;
        };
        /**
         * Converts Uint8Array to a string
         * @param aBytes
         */
        BrowserStringUtils.utf8ArrToString = function (aBytes) {
            var sView = Constants.EMPTY_STRING;
            for (var nPart = void 0, nLen = aBytes.length, nIdx = 0; nIdx < nLen; nIdx++) {
                nPart = aBytes[nIdx];
                sView += String.fromCharCode(nPart > 251 && nPart < 254 && nIdx + 5 < nLen ? /* six bytes */
                    /* (nPart - 252 << 30) may be not so safe in ECMAScript! So...: */
                    (nPart - 252) * 1073741824 + (aBytes[++nIdx] - 128 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                    : nPart > 247 && nPart < 252 && nIdx + 4 < nLen ? /* five bytes */
                        (nPart - 248 << 24) + (aBytes[++nIdx] - 128 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                        : nPart > 239 && nPart < 248 && nIdx + 3 < nLen ? /* four bytes */
                            (nPart - 240 << 18) + (aBytes[++nIdx] - 128 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                            : nPart > 223 && nPart < 240 && nIdx + 2 < nLen ? /* three bytes */
                                (nPart - 224 << 12) + (aBytes[++nIdx] - 128 << 6) + aBytes[++nIdx] - 128
                                : nPart > 191 && nPart < 224 && nIdx + 1 < nLen ? /* two bytes */
                                    (nPart - 192 << 6) + aBytes[++nIdx] - 128
                                    : /* nPart < 127 ? */ /* one byte */
                                        nPart);
            }
            return sView;
        };
        return BrowserStringUtils;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class which exposes APIs to encode plaintext to base64 encoded string. See here for implementation details:
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
     */
    var Base64Encode = /** @class */ (function () {
        function Base64Encode() {
        }
        /**
         * Returns URL Safe b64 encoded string from a plaintext string.
         * @param input
         */
        Base64Encode.prototype.urlEncode = function (input) {
            return encodeURIComponent(this.encode(input)
                .replace(/=/g, Constants.EMPTY_STRING)
                .replace(/\+/g, "-")
                .replace(/\//g, "_"));
        };
        /**
         * Returns URL Safe b64 encoded string from an int8Array.
         * @param inputArr
         */
        Base64Encode.prototype.urlEncodeArr = function (inputArr) {
            return this.base64EncArr(inputArr)
                .replace(/=/g, Constants.EMPTY_STRING)
                .replace(/\+/g, "-")
                .replace(/\//g, "_");
        };
        /**
         * Returns b64 encoded string from plaintext string.
         * @param input
         */
        Base64Encode.prototype.encode = function (input) {
            var inputUtf8Arr = BrowserStringUtils.stringToUtf8Arr(input);
            return this.base64EncArr(inputUtf8Arr);
        };
        /**
         * Base64 encode byte array
         * @param aBytes
         */
        Base64Encode.prototype.base64EncArr = function (aBytes) {
            var eqLen = (3 - (aBytes.length % 3)) % 3;
            var sB64Enc = Constants.EMPTY_STRING;
            for (var nMod3 = void 0, nLen = aBytes.length, nUint24 = 0, nIdx = 0; nIdx < nLen; nIdx++) {
                nMod3 = nIdx % 3;
                /* Uncomment the following line in order to split the output in lines 76-character long: */
                /*
                 *if (nIdx > 0 && (nIdx * 4 / 3) % 76 === 0) { sB64Enc += "\r\n"; }
                 */
                nUint24 |= aBytes[nIdx] << (16 >>> nMod3 & 24);
                if (nMod3 === 2 || aBytes.length - nIdx === 1) {
                    sB64Enc += String.fromCharCode(this.uint6ToB64(nUint24 >>> 18 & 63), this.uint6ToB64(nUint24 >>> 12 & 63), this.uint6ToB64(nUint24 >>> 6 & 63), this.uint6ToB64(nUint24 & 63));
                    nUint24 = 0;
                }
            }
            return eqLen === 0 ? sB64Enc : sB64Enc.substring(0, sB64Enc.length - eqLen) + (eqLen === 1 ? "=" : "==");
        };
        /**
         * Base64 string to array encoding helper
         * @param nUint6
         */
        Base64Encode.prototype.uint6ToB64 = function (nUint6) {
            return nUint6 < 26 ?
                nUint6 + 65
                : nUint6 < 52 ?
                    nUint6 + 71
                    : nUint6 < 62 ?
                        nUint6 - 4
                        : nUint6 === 62 ?
                            43
                            : nUint6 === 63 ?
                                47
                                :
                                    65;
        };
        return Base64Encode;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Class which exposes APIs to decode base64 strings to plaintext. See here for implementation details:
     * https://developer.mozilla.org/en-US/docs/Web/API/WindowBase64/Base64_encoding_and_decoding#Solution_2_%E2%80%93_JavaScript's_UTF-16_%3E_UTF-8_%3E_base64
     */
    var Base64Decode = /** @class */ (function () {
        function Base64Decode() {
        }
        /**
         * Returns a URL-safe plaintext decoded string from b64 encoded input.
         * @param input
         */
        Base64Decode.prototype.decode = function (input) {
            var encodedString = input.replace(/-/g, "+").replace(/_/g, "/");
            switch (encodedString.length % 4) {
                case 0:
                    break;
                case 2:
                    encodedString += "==";
                    break;
                case 3:
                    encodedString += "=";
                    break;
                default:
                    throw new Error("Invalid base64 string");
            }
            var inputUtf8Arr = this.base64DecToArr(encodedString);
            return BrowserStringUtils.utf8ArrToString(inputUtf8Arr);
        };
        /**
         * Decodes base64 into Uint8Array
         * @param base64String
         * @param nBlockSize
         */
        Base64Decode.prototype.base64DecToArr = function (base64String, nBlockSize) {
            var sB64Enc = base64String.replace(/[^A-Za-z0-9\+\/]/g, Constants.EMPTY_STRING);
            var nInLen = sB64Enc.length;
            var nOutLen = nBlockSize ? Math.ceil((nInLen * 3 + 1 >>> 2) / nBlockSize) * nBlockSize : nInLen * 3 + 1 >>> 2;
            var aBytes = new Uint8Array(nOutLen);
            for (var nMod3 = void 0, nMod4 = void 0, nUint24 = 0, nOutIdx = 0, nInIdx = 0; nInIdx < nInLen; nInIdx++) {
                nMod4 = nInIdx & 3;
                nUint24 |= this.b64ToUint6(sB64Enc.charCodeAt(nInIdx)) << 18 - 6 * nMod4;
                if (nMod4 === 3 || nInLen - nInIdx === 1) {
                    for (nMod3 = 0; nMod3 < 3 && nOutIdx < nOutLen; nMod3++, nOutIdx++) {
                        aBytes[nOutIdx] = nUint24 >>> (16 >>> nMod3 & 24) & 255;
                    }
                    nUint24 = 0;
                }
            }
            return aBytes;
        };
        /**
         * Base64 string to array decoding helper
         * @param charNum
         */
        Base64Decode.prototype.b64ToUint6 = function (charNum) {
            return charNum > 64 && charNum < 91 ?
                charNum - 65
                : charNum > 96 && charNum < 123 ?
                    charNum - 71
                    : charNum > 47 && charNum < 58 ?
                        charNum + 4
                        : charNum === 43 ?
                            62
                            : charNum === 47 ?
                                63
                                :
                                    0;
        };
        return Base64Decode;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    // Constant byte array length
    var RANDOM_BYTE_ARR_LENGTH = 32;
    /**
     * Class which exposes APIs to generate PKCE codes and code verifiers.
     */
    var PkceGenerator = /** @class */ (function () {
        function PkceGenerator(cryptoObj) {
            this.base64Encode = new Base64Encode();
            this.cryptoObj = cryptoObj;
        }
        /**
         * Generates PKCE Codes. See the RFC for more information: https://tools.ietf.org/html/rfc7636
         */
        PkceGenerator.prototype.generateCodes = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var codeVerifier, codeChallenge;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            codeVerifier = this.generateCodeVerifier();
                            return [4 /*yield*/, this.generateCodeChallengeFromVerifier(codeVerifier)];
                        case 1:
                            codeChallenge = _a.sent();
                            return [2 /*return*/, {
                                    verifier: codeVerifier,
                                    challenge: codeChallenge
                                }];
                    }
                });
            });
        };
        /**
         * Generates a random 32 byte buffer and returns the base64
         * encoded string to be used as a PKCE Code Verifier
         */
        PkceGenerator.prototype.generateCodeVerifier = function () {
            try {
                // Generate random values as utf-8
                var buffer = new Uint8Array(RANDOM_BYTE_ARR_LENGTH);
                this.cryptoObj.getRandomValues(buffer);
                // encode verifier as base64
                var pkceCodeVerifierB64 = this.base64Encode.urlEncodeArr(buffer);
                return pkceCodeVerifierB64;
            }
            catch (e) {
                throw BrowserAuthError.createPkceNotGeneratedError(e);
            }
        };
        /**
         * Creates a base64 encoded PKCE Code Challenge string from the
         * hash created from the PKCE Code Verifier supplied
         */
        PkceGenerator.prototype.generateCodeChallengeFromVerifier = function (pkceCodeVerifier) {
            return __awaiter$1(this, void 0, void 0, function () {
                var pkceHashedCodeVerifier, e_1;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 2, , 3]);
                            return [4 /*yield*/, this.cryptoObj.sha256Digest(pkceCodeVerifier)];
                        case 1:
                            pkceHashedCodeVerifier = _a.sent();
                            // encode hash as base64
                            return [2 /*return*/, this.base64Encode.urlEncodeArr(new Uint8Array(pkceHashedCodeVerifier))];
                        case 2:
                            e_1 = _a.sent();
                            throw BrowserAuthError.createPkceNotGeneratedError(e_1);
                        case 3: return [2 /*return*/];
                    }
                });
            });
        };
        return PkceGenerator;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * See here for more info on RsaHashedKeyGenParams: https://developer.mozilla.org/en-US/docs/Web/API/RsaHashedKeyGenParams
     */
    // RSA KeyGen Algorithm
    var PKCS1_V15_KEYGEN_ALG = "RSASSA-PKCS1-v1_5";
    // SHA-256 hashing algorithm
    var S256_HASH_ALG = "SHA-256";
    // MOD length for PoP tokens
    var MODULUS_LENGTH = 2048;
    // Public Exponent
    var PUBLIC_EXPONENT = new Uint8Array([0x01, 0x00, 0x01]);
    /**
     * This class implements functions used by the browser library to perform cryptography operations such as
     * hashing and encoding. It also has helper functions to validate the availability of specific APIs.
     */
    var BrowserCrypto = /** @class */ (function () {
        function BrowserCrypto(logger) {
            this.logger = logger;
            if (!(this.hasCryptoAPI())) {
                throw BrowserAuthError.createCryptoNotAvailableError("Browser crypto or msCrypto object not available.");
            }
            this._keygenAlgorithmOptions = {
                name: PKCS1_V15_KEYGEN_ALG,
                hash: S256_HASH_ALG,
                modulusLength: MODULUS_LENGTH,
                publicExponent: PUBLIC_EXPONENT
            };
        }
        /**
         * Returns a sha-256 hash of the given dataString as an ArrayBuffer.
         * @param dataString
         */
        BrowserCrypto.prototype.sha256Digest = function (dataString) {
            return __awaiter$1(this, void 0, void 0, function () {
                var data;
                return __generator$1(this, function (_a) {
                    data = BrowserStringUtils.stringToUtf8Arr(dataString);
                    return [2 /*return*/, this.hasIECrypto() ? this.getMSCryptoDigest(S256_HASH_ALG, data) : this.getSubtleCryptoDigest(S256_HASH_ALG, data)];
                });
            });
        };
        /**
         * Populates buffer with cryptographically random values.
         * @param dataBuffer
         */
        BrowserCrypto.prototype.getRandomValues = function (dataBuffer) {
            var cryptoObj = window["msCrypto"] || window.crypto;
            if (!cryptoObj.getRandomValues) {
                throw BrowserAuthError.createCryptoNotAvailableError("getRandomValues does not exist.");
            }
            cryptoObj.getRandomValues(dataBuffer);
        };
        /**
         * Generates a keypair based on current keygen algorithm config.
         * @param extractable
         * @param usages
         */
        BrowserCrypto.prototype.generateKeyPair = function (extractable, usages) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, (this.hasIECrypto() ?
                            this.msCryptoGenerateKey(extractable, usages)
                            : window.crypto.subtle.generateKey(this._keygenAlgorithmOptions, extractable, usages))];
                });
            });
        };
        /**
         * Export key as Json Web Key (JWK)
         * @param key
         * @param format
         */
        BrowserCrypto.prototype.exportJwk = function (key) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, this.hasIECrypto() ? this.msCryptoExportJwk(key) : window.crypto.subtle.exportKey(KEY_FORMAT_JWK, key)];
                });
            });
        };
        /**
         * Imports key as Json Web Key (JWK), can set extractable and usages.
         * @param key
         * @param format
         * @param extractable
         * @param usages
         */
        BrowserCrypto.prototype.importJwk = function (key, extractable, usages) {
            return __awaiter$1(this, void 0, void 0, function () {
                var keyString, keyBuffer;
                return __generator$1(this, function (_a) {
                    keyString = BrowserCrypto.getJwkString(key);
                    keyBuffer = BrowserStringUtils.stringToArrayBuffer(keyString);
                    return [2 /*return*/, this.hasIECrypto() ?
                            this.msCryptoImportKey(keyBuffer, extractable, usages)
                            : window.crypto.subtle.importKey(KEY_FORMAT_JWK, key, this._keygenAlgorithmOptions, extractable, usages)];
                });
            });
        };
        /**
         * Signs given data with given key
         * @param key
         * @param data
         */
        BrowserCrypto.prototype.sign = function (key, data) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, this.hasIECrypto() ?
                            this.msCryptoSign(key, data)
                            : window.crypto.subtle.sign(this._keygenAlgorithmOptions, key, data)];
                });
            });
        };
        /**
         * Check whether IE crypto or other browser cryptography is available.
         */
        BrowserCrypto.prototype.hasCryptoAPI = function () {
            return this.hasIECrypto() || this.hasBrowserCrypto();
        };
        /**
         * Checks whether IE crypto (AKA msCrypto) is available.
         */
        BrowserCrypto.prototype.hasIECrypto = function () {
            return "msCrypto" in window;
        };
        /**
         * Check whether browser crypto is available.
         */
        BrowserCrypto.prototype.hasBrowserCrypto = function () {
            return "crypto" in window;
        };
        /**
         * Helper function for SHA digest.
         * @param algorithm
         * @param data
         */
        BrowserCrypto.prototype.getSubtleCryptoDigest = function (algorithm, data) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, window.crypto.subtle.digest(algorithm, data)];
                });
            });
        };
        /**
         * IE Helper function for SHA digest.
         * @param algorithm
         * @param data
         */
        BrowserCrypto.prototype.getMSCryptoDigest = function (algorithm, data) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var digestOperation = window["msCrypto"].subtle.digest(algorithm, data.buffer);
                            digestOperation.addEventListener("complete", function (e) {
                                resolve(e.target.result);
                            });
                            digestOperation.addEventListener("error", function (error) {
                                reject(error);
                            });
                        })];
                });
            });
        };
        /**
         * IE Helper function for generating a keypair
         * @param extractable
         * @param usages
         */
        BrowserCrypto.prototype.msCryptoGenerateKey = function (extractable, usages) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var msGenerateKey = window["msCrypto"].subtle.generateKey(_this._keygenAlgorithmOptions, extractable, usages);
                            msGenerateKey.addEventListener("complete", function (e) {
                                resolve(e.target.result);
                            });
                            msGenerateKey.addEventListener("error", function (error) {
                                reject(error);
                            });
                        })];
                });
            });
        };
        /**
         * IE Helper function for exportKey
         * @param key
         * @param format
         */
        BrowserCrypto.prototype.msCryptoExportJwk = function (key) {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var msExportKey = window["msCrypto"].subtle.exportKey(KEY_FORMAT_JWK, key);
                            msExportKey.addEventListener("complete", function (e) {
                                var resultBuffer = e.target.result;
                                var resultString = BrowserStringUtils.utf8ArrToString(new Uint8Array(resultBuffer))
                                    .replace(/\r/g, Constants.EMPTY_STRING)
                                    .replace(/\n/g, Constants.EMPTY_STRING)
                                    .replace(/\t/g, Constants.EMPTY_STRING)
                                    .split(" ").join(Constants.EMPTY_STRING)
                                    .replace("\u0000", Constants.EMPTY_STRING);
                                try {
                                    resolve(JSON.parse(resultString));
                                }
                                catch (e) {
                                    reject(e);
                                }
                            });
                            msExportKey.addEventListener("error", function (error) {
                                reject(error);
                            });
                        })];
                });
            });
        };
        /**
         * IE Helper function for importKey
         * @param key
         * @param format
         * @param extractable
         * @param usages
         */
        BrowserCrypto.prototype.msCryptoImportKey = function (keyBuffer, extractable, usages) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var msImportKey = window["msCrypto"].subtle.importKey(KEY_FORMAT_JWK, keyBuffer, _this._keygenAlgorithmOptions, extractable, usages);
                            msImportKey.addEventListener("complete", function (e) {
                                resolve(e.target.result);
                            });
                            msImportKey.addEventListener("error", function (error) {
                                reject(error);
                            });
                        })];
                });
            });
        };
        /**
         * IE Helper function for sign JWT
         * @param key
         * @param data
         */
        BrowserCrypto.prototype.msCryptoSign = function (key, data) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var msSign = window["msCrypto"].subtle.sign(_this._keygenAlgorithmOptions, key, data);
                            msSign.addEventListener("complete", function (e) {
                                resolve(e.target.result);
                            });
                            msSign.addEventListener("error", function (error) {
                                reject(error);
                            });
                        })];
                });
            });
        };
        /**
         * Returns stringified jwk.
         * @param jwk
         */
        BrowserCrypto.getJwkString = function (jwk) {
            return JSON.stringify(jwk, Object.keys(jwk).sort());
        };
        return BrowserCrypto;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Storage wrapper for IndexedDB storage in browsers: https://developer.mozilla.org/en-US/docs/Web/API/IndexedDB_API
     */
    var DatabaseStorage = /** @class */ (function () {
        function DatabaseStorage() {
            this.dbName = DB_NAME;
            this.version = DB_VERSION;
            this.tableName = DB_TABLE_NAME;
            this.dbOpen = false;
        }
        /**
         * Opens IndexedDB instance.
         */
        DatabaseStorage.prototype.open = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, new Promise(function (resolve, reject) {
                            var openDB = window.indexedDB.open(_this.dbName, _this.version);
                            openDB.addEventListener("upgradeneeded", function (e) {
                                var event = e;
                                event.target.result.createObjectStore(_this.tableName);
                            });
                            openDB.addEventListener("success", function (e) {
                                var event = e;
                                _this.db = event.target.result;
                                _this.dbOpen = true;
                                resolve();
                            });
                            openDB.addEventListener("error", function () { return reject(BrowserAuthError.createDatabaseUnavailableError()); });
                        })];
                });
            });
        };
        /**
         * Closes the connection to IndexedDB database when all pending transactions
         * complete.
         */
        DatabaseStorage.prototype.closeConnection = function () {
            var db = this.db;
            if (db && this.dbOpen) {
                db.close();
                this.dbOpen = false;
            }
        };
        /**
         * Opens database if it's not already open
         */
        DatabaseStorage.prototype.validateDbIsOpen = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            if (!!this.dbOpen) return [3 /*break*/, 2];
                            return [4 /*yield*/, this.open()];
                        case 1: return [2 /*return*/, _a.sent()];
                        case 2: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Retrieves item from IndexedDB instance.
         * @param key
         */
        DatabaseStorage.prototype.getItem = function (key) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validateDbIsOpen()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    // TODO: Add timeouts?
                                    if (!_this.db) {
                                        return reject(BrowserAuthError.createDatabaseNotOpenError());
                                    }
                                    var transaction = _this.db.transaction([_this.tableName], "readonly");
                                    var objectStore = transaction.objectStore(_this.tableName);
                                    var dbGet = objectStore.get(key);
                                    dbGet.addEventListener("success", function (e) {
                                        var event = e;
                                        _this.closeConnection();
                                        resolve(event.target.result);
                                    });
                                    dbGet.addEventListener("error", function (e) {
                                        _this.closeConnection();
                                        reject(e);
                                    });
                                })];
                    }
                });
            });
        };
        /**
         * Adds item to IndexedDB under given key
         * @param key
         * @param payload
         */
        DatabaseStorage.prototype.setItem = function (key, payload) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validateDbIsOpen()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    // TODO: Add timeouts?
                                    if (!_this.db) {
                                        return reject(BrowserAuthError.createDatabaseNotOpenError());
                                    }
                                    var transaction = _this.db.transaction([_this.tableName], "readwrite");
                                    var objectStore = transaction.objectStore(_this.tableName);
                                    var dbPut = objectStore.put(payload, key);
                                    dbPut.addEventListener("success", function () {
                                        _this.closeConnection();
                                        resolve();
                                    });
                                    dbPut.addEventListener("error", function (e) {
                                        _this.closeConnection();
                                        reject(e);
                                    });
                                })];
                    }
                });
            });
        };
        /**
         * Removes item from IndexedDB under given key
         * @param key
         */
        DatabaseStorage.prototype.removeItem = function (key) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validateDbIsOpen()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    if (!_this.db) {
                                        return reject(BrowserAuthError.createDatabaseNotOpenError());
                                    }
                                    var transaction = _this.db.transaction([_this.tableName], "readwrite");
                                    var objectStore = transaction.objectStore(_this.tableName);
                                    var dbDelete = objectStore.delete(key);
                                    dbDelete.addEventListener("success", function () {
                                        _this.closeConnection();
                                        resolve();
                                    });
                                    dbDelete.addEventListener("error", function (e) {
                                        _this.closeConnection();
                                        reject(e);
                                    });
                                })];
                    }
                });
            });
        };
        /**
         * Get all the keys from the storage object as an iterable array of strings.
         */
        DatabaseStorage.prototype.getKeys = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validateDbIsOpen()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    if (!_this.db) {
                                        return reject(BrowserAuthError.createDatabaseNotOpenError());
                                    }
                                    var transaction = _this.db.transaction([_this.tableName], "readonly");
                                    var objectStore = transaction.objectStore(_this.tableName);
                                    var dbGetKeys = objectStore.getAllKeys();
                                    dbGetKeys.addEventListener("success", function (e) {
                                        var event = e;
                                        _this.closeConnection();
                                        resolve(event.target.result);
                                    });
                                    dbGetKeys.addEventListener("error", function (e) {
                                        _this.closeConnection();
                                        reject(e);
                                    });
                                })];
                    }
                });
            });
        };
        /**
         *
         * Checks whether there is an object under the search key in the object store
         */
        DatabaseStorage.prototype.containsKey = function (key) {
            return __awaiter$1(this, void 0, void 0, function () {
                var _this = this;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.validateDbIsOpen()];
                        case 1:
                            _a.sent();
                            return [2 /*return*/, new Promise(function (resolve, reject) {
                                    if (!_this.db) {
                                        return reject(BrowserAuthError.createDatabaseNotOpenError());
                                    }
                                    var transaction = _this.db.transaction([_this.tableName], "readonly");
                                    var objectStore = transaction.objectStore(_this.tableName);
                                    var dbContainsKey = objectStore.count(key);
                                    dbContainsKey.addEventListener("success", function (e) {
                                        var event = e;
                                        _this.closeConnection();
                                        resolve(event.target.result === 1);
                                    });
                                    dbContainsKey.addEventListener("error", function (e) {
                                        _this.closeConnection();
                                        reject(e);
                                    });
                                })];
                    }
                });
            });
        };
        /**
         * Deletes the MSAL database. The database is deleted rather than cleared to make it possible
         * for client applications to downgrade to a previous MSAL version without worrying about forward compatibility issues
         * with IndexedDB database versions.
         */
        DatabaseStorage.prototype.deleteDatabase = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var existingDatabases, database;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // Check if database being deleted exists
                            if (this.db && this.dbOpen) {
                                this.closeConnection();
                            }
                            return [4 /*yield*/, window.indexedDB.databases()];
                        case 1:
                            existingDatabases = _a.sent();
                            database = existingDatabases.find(function (database) { return database.name === DB_NAME; });
                            // If database exists, delete it
                            if (database) {
                                return [2 /*return*/, new Promise(function (resolve, reject) {
                                        var deleteDbRequest = window.indexedDB.deleteDatabase(DB_NAME);
                                        deleteDbRequest.addEventListener("success", function () { return resolve(true); });
                                        deleteDbRequest.addEventListener("error", function () { return reject(false); });
                                    })];
                            }
                            // Database doesn't exist, return true
                            return [2 /*return*/, true];
                    }
                });
            });
        };
        return DatabaseStorage;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * This class allows MSAL to store artifacts asynchronously using the DatabaseStorage IndexedDB wrapper,
     * backed up with the more volatile MemoryStorage object for cases in which IndexedDB may be unavailable.
     */
    var AsyncMemoryStorage = /** @class */ (function () {
        function AsyncMemoryStorage(logger, storeName) {
            this.inMemoryCache = new MemoryStorage();
            this.indexedDBCache = new DatabaseStorage();
            this.logger = logger;
            this.storeName = storeName;
        }
        AsyncMemoryStorage.prototype.handleDatabaseAccessError = function (error) {
            if (error instanceof BrowserAuthError && error.errorCode === BrowserAuthErrorMessage.databaseUnavailable.code) {
                this.logger.error("Could not access persistent storage. This may be caused by browser privacy features which block persistent storage in third-party contexts.");
            }
            else {
                throw error;
            }
        };
        /**
         * Get the item matching the given key. Tries in-memory cache first, then in the asynchronous
         * storage object if item isn't found in-memory.
         * @param key
         */
        AsyncMemoryStorage.prototype.getItem = function (key) {
            return __awaiter$1(this, void 0, void 0, function () {
                var item, e_1;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            item = this.inMemoryCache.getItem(key);
                            if (!!item) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            this.logger.verbose("Queried item not found in in-memory cache, now querying persistent storage.");
                            return [4 /*yield*/, this.indexedDBCache.getItem(key)];
                        case 2: return [2 /*return*/, _a.sent()];
                        case 3:
                            e_1 = _a.sent();
                            this.handleDatabaseAccessError(e_1);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/, item];
                    }
                });
            });
        };
        /**
         * Sets the item in the in-memory cache and then tries to set it in the asynchronous
         * storage object with the given key.
         * @param key
         * @param value
         */
        AsyncMemoryStorage.prototype.setItem = function (key, value) {
            return __awaiter$1(this, void 0, void 0, function () {
                var e_2;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.inMemoryCache.setItem(key, value);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.indexedDBCache.setItem(key, value)];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_2 = _a.sent();
                            this.handleDatabaseAccessError(e_2);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Removes the item matching the key from the in-memory cache, then tries to remove it from the asynchronous storage object.
         * @param key
         */
        AsyncMemoryStorage.prototype.removeItem = function (key) {
            return __awaiter$1(this, void 0, void 0, function () {
                var e_3;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.inMemoryCache.removeItem(key);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.indexedDBCache.removeItem(key)];
                        case 2:
                            _a.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_3 = _a.sent();
                            this.handleDatabaseAccessError(e_3);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Get all the keys from the in-memory cache as an iterable array of strings. If no keys are found, query the keys in the
         * asynchronous storage object.
         */
        AsyncMemoryStorage.prototype.getKeys = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var cacheKeys, e_4;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            cacheKeys = this.inMemoryCache.getKeys();
                            if (!(cacheKeys.length === 0)) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            this.logger.verbose("In-memory cache is empty, now querying persistent storage.");
                            return [4 /*yield*/, this.indexedDBCache.getKeys()];
                        case 2: return [2 /*return*/, _a.sent()];
                        case 3:
                            e_4 = _a.sent();
                            this.handleDatabaseAccessError(e_4);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/, cacheKeys];
                    }
                });
            });
        };
        /**
         * Returns true or false if the given key is present in the cache.
         * @param key
         */
        AsyncMemoryStorage.prototype.containsKey = function (key) {
            return __awaiter$1(this, void 0, void 0, function () {
                var containsKey, e_5;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            containsKey = this.inMemoryCache.containsKey(key);
                            if (!!containsKey) return [3 /*break*/, 4];
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            this.logger.verbose("Key not found in in-memory cache, now querying persistent storage.");
                            return [4 /*yield*/, this.indexedDBCache.containsKey(key)];
                        case 2: return [2 /*return*/, _a.sent()];
                        case 3:
                            e_5 = _a.sent();
                            this.handleDatabaseAccessError(e_5);
                            return [3 /*break*/, 4];
                        case 4: return [2 /*return*/, containsKey];
                    }
                });
            });
        };
        /**
         * Clears in-memory Map and tries to delete the IndexedDB database.
         */
        AsyncMemoryStorage.prototype.clear = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var dbDeleted, e_6;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            // InMemory cache is a Map instance, clear is straightforward
                            this.logger.verbose("Deleting in-memory keystore " + this.storeName);
                            this.inMemoryCache.clear();
                            this.logger.verbose("In-memory keystore " + this.storeName + " deleted");
                            this.logger.verbose("Deleting persistent keystore " + this.storeName);
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/, this.indexedDBCache.deleteDatabase()];
                        case 2:
                            dbDeleted = _a.sent();
                            if (dbDeleted) {
                                this.logger.verbose("Persistent keystore " + this.storeName + " deleted");
                            }
                            return [2 /*return*/, dbDeleted];
                        case 3:
                            e_6 = _a.sent();
                            this.handleDatabaseAccessError(e_6);
                            return [2 /*return*/, false];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        return AsyncMemoryStorage;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var CryptoKeyStoreNames;
    (function (CryptoKeyStoreNames) {
        CryptoKeyStoreNames["asymmetricKeys"] = "asymmetricKeys";
        CryptoKeyStoreNames["symmetricKeys"] = "symmetricKeys";
    })(CryptoKeyStoreNames || (CryptoKeyStoreNames = {}));
    /**
     * This class implements MSAL's crypto interface, which allows it to perform base64 encoding and decoding, generating cryptographically random GUIDs and
     * implementing Proof Key for Code Exchange specs for the OAuth Authorization Code Flow using PKCE (rfc here: https://tools.ietf.org/html/rfc7636).
     */
    var CryptoOps = /** @class */ (function () {
        function CryptoOps(logger, performanceClient) {
            this.logger = logger;
            // Browser crypto needs to be validated first before any other classes can be set.
            this.browserCrypto = new BrowserCrypto(this.logger);
            this.b64Encode = new Base64Encode();
            this.b64Decode = new Base64Decode();
            this.guidGenerator = new GuidGenerator(this.browserCrypto);
            this.pkceGenerator = new PkceGenerator(this.browserCrypto);
            this.cache = {
                asymmetricKeys: new AsyncMemoryStorage(this.logger, CryptoKeyStoreNames.asymmetricKeys),
                symmetricKeys: new AsyncMemoryStorage(this.logger, CryptoKeyStoreNames.symmetricKeys)
            };
            this.performanceClient = performanceClient;
        }
        /**
         * Creates a new random GUID - used to populate state and nonce.
         * @returns string (GUID)
         */
        CryptoOps.prototype.createNewGuid = function () {
            return this.guidGenerator.generateGuid();
        };
        /**
         * Encodes input string to base64.
         * @param input
         */
        CryptoOps.prototype.base64Encode = function (input) {
            return this.b64Encode.encode(input);
        };
        /**
         * Decodes input string from base64.
         * @param input
         */
        CryptoOps.prototype.base64Decode = function (input) {
            return this.b64Decode.decode(input);
        };
        /**
         * Generates PKCE codes used in Authorization Code Flow.
         */
        CryptoOps.prototype.generatePkceCodes = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                return __generator$1(this, function (_a) {
                    return [2 /*return*/, this.pkceGenerator.generateCodes()];
                });
            });
        };
        /**
         * Generates a keypair, stores it and returns a thumbprint
         * @param request
         */
        CryptoOps.prototype.getPublicKeyThumbprint = function (request) {
            var _a;
            return __awaiter$1(this, void 0, void 0, function () {
                var publicKeyThumbMeasurement, keyPair, publicKeyJwk, pubKeyThumprintObj, publicJwkString, publicJwkHash, privateKeyJwk, unextractablePrivateKey;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            publicKeyThumbMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.CryptoOptsGetPublicKeyThumbprint, request.correlationId);
                            return [4 /*yield*/, this.browserCrypto.generateKeyPair(CryptoOps.EXTRACTABLE, CryptoOps.POP_KEY_USAGES)];
                        case 1:
                            keyPair = _b.sent();
                            return [4 /*yield*/, this.browserCrypto.exportJwk(keyPair.publicKey)];
                        case 2:
                            publicKeyJwk = _b.sent();
                            pubKeyThumprintObj = {
                                e: publicKeyJwk.e,
                                kty: publicKeyJwk.kty,
                                n: publicKeyJwk.n
                            };
                            publicJwkString = BrowserCrypto.getJwkString(pubKeyThumprintObj);
                            return [4 /*yield*/, this.hashString(publicJwkString)];
                        case 3:
                            publicJwkHash = _b.sent();
                            return [4 /*yield*/, this.browserCrypto.exportJwk(keyPair.privateKey)];
                        case 4:
                            privateKeyJwk = _b.sent();
                            return [4 /*yield*/, this.browserCrypto.importJwk(privateKeyJwk, false, ["sign"])];
                        case 5:
                            unextractablePrivateKey = _b.sent();
                            // Store Keypair data in keystore
                            return [4 /*yield*/, this.cache.asymmetricKeys.setItem(publicJwkHash, {
                                    privateKey: unextractablePrivateKey,
                                    publicKey: keyPair.publicKey,
                                    requestMethod: request.resourceRequestMethod,
                                    requestUri: request.resourceRequestUri
                                })];
                        case 6:
                            // Store Keypair data in keystore
                            _b.sent();
                            if (publicKeyThumbMeasurement) {
                                publicKeyThumbMeasurement.endMeasurement({
                                    success: true
                                });
                            }
                            return [2 /*return*/, publicJwkHash];
                    }
                });
            });
        };
        /**
         * Removes cryptographic keypair from key store matching the keyId passed in
         * @param kid
         */
        CryptoOps.prototype.removeTokenBindingKey = function (kid) {
            return __awaiter$1(this, void 0, void 0, function () {
                var keyFound;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.cache.asymmetricKeys.removeItem(kid)];
                        case 1:
                            _a.sent();
                            return [4 /*yield*/, this.cache.asymmetricKeys.containsKey(kid)];
                        case 2:
                            keyFound = _a.sent();
                            return [2 /*return*/, !keyFound];
                    }
                });
            });
        };
        /**
         * Removes all cryptographic keys from IndexedDB storage
         */
        CryptoOps.prototype.clearKeystore = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var e_1;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 3, , 4]);
                            this.logger.verbose("Deleting in-memory and persistent asymmetric key stores");
                            return [4 /*yield*/, this.cache.asymmetricKeys.clear()];
                        case 1:
                            _a.sent();
                            this.logger.verbose("Successfully deleted asymmetric key stores");
                            this.logger.verbose("Deleting in-memory and persistent symmetric key stores");
                            return [4 /*yield*/, this.cache.symmetricKeys.clear()];
                        case 2:
                            _a.sent();
                            this.logger.verbose("Successfully deleted symmetric key stores");
                            return [2 /*return*/, true];
                        case 3:
                            e_1 = _a.sent();
                            if (e_1 instanceof Error) {
                                this.logger.error("Clearing keystore failed with error: " + e_1.message);
                            }
                            else {
                                this.logger.error("Clearing keystore failed with unknown error");
                            }
                            return [2 /*return*/, false];
                        case 4: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Signs the given object as a jwt payload with private key retrieved by given kid.
         * @param payload
         * @param kid
         */
        CryptoOps.prototype.signJwt = function (payload, kid, correlationId) {
            var _a;
            return __awaiter$1(this, void 0, void 0, function () {
                var signJwtMeasurement, cachedKeyPair, publicKeyJwk, publicKeyJwkString, encodedKeyIdThumbprint, shrHeader, encodedShrHeader, encodedPayload, tokenString, tokenBuffer, signatureBuffer, encodedSignature, signedJwt;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            signJwtMeasurement = (_a = this.performanceClient) === null || _a === void 0 ? void 0 : _a.startMeasurement(PerformanceEvents.CryptoOptsSignJwt, correlationId);
                            return [4 /*yield*/, this.cache.asymmetricKeys.getItem(kid)];
                        case 1:
                            cachedKeyPair = _b.sent();
                            if (!cachedKeyPair) {
                                throw BrowserAuthError.createSigningKeyNotFoundInStorageError(kid);
                            }
                            return [4 /*yield*/, this.browserCrypto.exportJwk(cachedKeyPair.publicKey)];
                        case 2:
                            publicKeyJwk = _b.sent();
                            publicKeyJwkString = BrowserCrypto.getJwkString(publicKeyJwk);
                            encodedKeyIdThumbprint = this.b64Encode.urlEncode(JSON.stringify({ kid: kid }));
                            shrHeader = JoseHeader.getShrHeaderString({ kid: encodedKeyIdThumbprint, alg: publicKeyJwk.alg });
                            encodedShrHeader = this.b64Encode.urlEncode(shrHeader);
                            // Generate payload
                            payload.cnf = {
                                jwk: JSON.parse(publicKeyJwkString)
                            };
                            encodedPayload = this.b64Encode.urlEncode(JSON.stringify(payload));
                            tokenString = encodedShrHeader + "." + encodedPayload;
                            tokenBuffer = BrowserStringUtils.stringToArrayBuffer(tokenString);
                            return [4 /*yield*/, this.browserCrypto.sign(cachedKeyPair.privateKey, tokenBuffer)];
                        case 3:
                            signatureBuffer = _b.sent();
                            encodedSignature = this.b64Encode.urlEncodeArr(new Uint8Array(signatureBuffer));
                            signedJwt = tokenString + "." + encodedSignature;
                            if (signJwtMeasurement) {
                                signJwtMeasurement.endMeasurement({
                                    success: true
                                });
                            }
                            return [2 /*return*/, signedJwt];
                    }
                });
            });
        };
        /**
         * Returns the SHA-256 hash of an input string
         * @param plainText
         */
        CryptoOps.prototype.hashString = function (plainText) {
            return __awaiter$1(this, void 0, void 0, function () {
                var hashBuffer, hashBytes;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0: return [4 /*yield*/, this.browserCrypto.sha256Digest(plainText)];
                        case 1:
                            hashBuffer = _a.sent();
                            hashBytes = new Uint8Array(hashBuffer);
                            return [2 /*return*/, this.b64Encode.urlEncodeArr(hashBytes)];
                    }
                });
            });
        };
        CryptoOps.POP_KEY_USAGES = ["sign", "verify"];
        CryptoOps.EXTRACTABLE = true;
        return CryptoOps;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * Token cache manager
     */
    var TokenCache = /** @class */ (function () {
        function TokenCache(configuration, storage, logger, cryptoObj) {
            this.isBrowserEnvironment = typeof window !== "undefined";
            this.config = configuration;
            this.storage = storage;
            this.logger = logger;
            this.cryptoObj = cryptoObj;
        }
        // Move getAllAccounts here and cache utility APIs
        /**
         * API to load tokens to msal-browser cache.
         * @param request
         * @param response
         * @param options
         */
        TokenCache.prototype.loadExternalTokens = function (request, response, options) {
            this.logger.info("TokenCache - loadExternalTokens called");
            if (!response.id_token) {
                throw BrowserAuthError.createUnableToLoadTokenError("Please ensure server response includes id token.");
            }
            if (request.account) {
                this.loadIdToken(response.id_token, request.account.homeAccountId, request.account.environment, request.account.tenantId, options);
                this.loadAccessToken(request, response, request.account.homeAccountId, request.account.environment, request.account.tenantId, options);
            }
            else if (request.authority) {
                var authorityUrl = Authority.generateAuthority(request.authority, request.azureCloudOptions);
                var authorityOptions = {
                    protocolMode: this.config.auth.protocolMode,
                    knownAuthorities: this.config.auth.knownAuthorities,
                    cloudDiscoveryMetadata: this.config.auth.cloudDiscoveryMetadata,
                    authorityMetadata: this.config.auth.authorityMetadata,
                };
                var authority = new Authority(authorityUrl, this.config.system.networkClient, this.storage, authorityOptions);
                // "clientInfo" from options takes precedence over "clientInfo" in response
                if (options.clientInfo) {
                    this.logger.trace("TokenCache - homeAccountId from options");
                    this.loadIdToken(response.id_token, options.clientInfo, authority.hostnameAndPort, authority.tenant, options);
                    this.loadAccessToken(request, response, options.clientInfo, authority.hostnameAndPort, authority.tenant, options);
                }
                else if (response.client_info) {
                    this.logger.trace("TokenCache - homeAccountId from response");
                    this.loadIdToken(response.id_token, response.client_info, authority.hostnameAndPort, authority.tenant, options);
                    this.loadAccessToken(request, response, response.client_info, authority.hostnameAndPort, authority.tenant, options);
                }
                else {
                    throw BrowserAuthError.createUnableToLoadTokenError("Please provide clientInfo in the response or options.");
                }
            }
            else {
                throw BrowserAuthError.createUnableToLoadTokenError("Please provide a request with an account or a request with authority.");
            }
        };
        /**
         * Helper function to load id tokens to msal-browser cache
         * @param idToken
         * @param homeAccountId
         * @param environment
         * @param tenantId
         * @param options
         */
        TokenCache.prototype.loadIdToken = function (idToken, homeAccountId, environment, tenantId, options) {
            var idTokenEntity = IdTokenEntity.createIdTokenEntity(homeAccountId, environment, idToken, this.config.auth.clientId, tenantId);
            var idAuthToken = new AuthToken(idToken, this.cryptoObj);
            var accountEntity = options.clientInfo ?
                AccountEntity.createAccount(options.clientInfo, homeAccountId, idAuthToken, undefined, undefined, undefined, environment) :
                AccountEntity.createGenericAccount(homeAccountId, idAuthToken, undefined, undefined, undefined, environment);
            if (this.isBrowserEnvironment) {
                this.logger.verbose("TokenCache - loading id token");
                this.storage.setAccount(accountEntity);
                this.storage.setIdTokenCredential(idTokenEntity);
            }
            else {
                throw BrowserAuthError.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
            }
        };
        /**
         * Helper function to load access tokens to msal-browser cache
         * @param request
         * @param response
         * @param options
         * @param homeAccountId
         * @param environment
         * @param tenantId
         * @returns
         */
        TokenCache.prototype.loadAccessToken = function (request, response, homeAccountId, environment, tenantId, options) {
            if (!response.access_token) {
                this.logger.verbose("TokenCache - No access token provided for caching");
                return;
            }
            if (!response.expires_in) {
                throw BrowserAuthError.createUnableToLoadTokenError("Please ensure server response includes expires_in value.");
            }
            if (!options.extendedExpiresOn) {
                throw BrowserAuthError.createUnableToLoadTokenError("Please provide an extendedExpiresOn value in the options.");
            }
            var scopes = new ScopeSet(request.scopes).printScopes();
            var expiresOn = options.expiresOn || (response.expires_in + new Date().getTime() / 1000);
            var extendedExpiresOn = options.extendedExpiresOn;
            var accessTokenEntity = AccessTokenEntity.createAccessTokenEntity(homeAccountId, environment, response.access_token, this.config.auth.clientId, tenantId, scopes, expiresOn, extendedExpiresOn, this.cryptoObj);
            if (this.isBrowserEnvironment) {
                this.logger.verbose("TokenCache - loading access token");
                this.storage.setAccessTokenCredential(accessTokenEntity);
            }
            else {
                throw BrowserAuthError.createUnableToLoadTokenError("loadExternalTokens is designed to work in browser environments only.");
            }
        };
        return TokenCache;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var HybridSpaAuthorizationCodeClient = /** @class */ (function (_super) {
        __extends$1(HybridSpaAuthorizationCodeClient, _super);
        function HybridSpaAuthorizationCodeClient(config) {
            var _this = _super.call(this, config) || this;
            _this.includeRedirectUri = false;
            return _this;
        }
        return HybridSpaAuthorizationCodeClient;
    }(AuthorizationCodeClient));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var SilentAuthCodeClient = /** @class */ (function (_super) {
        __extends$1(SilentAuthCodeClient, _super);
        function SilentAuthCodeClient(config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, apiId, performanceClient, nativeMessageHandler, correlationId) {
            var _this = _super.call(this, config, storageImpl, browserCrypto, logger, eventHandler, navigationClient, performanceClient, nativeMessageHandler, correlationId) || this;
            _this.apiId = apiId;
            return _this;
        }
        /**
         * Acquires a token silently by redeeming an authorization code against the /token endpoint
         * @param request
         */
        SilentAuthCodeClient.prototype.acquireToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var silentRequest, serverTelemetryManager, authCodeRequest, clientConfig, authClient, silentHandler, e_1;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.trace("SilentAuthCodeClient.acquireToken called");
                            // Auth code payload is required
                            if (!request.code) {
                                throw BrowserAuthError.createAuthCodeRequiredError();
                            }
                            return [4 /*yield*/, this.initializeAuthorizationRequest(request, InteractionType.Silent)];
                        case 1:
                            silentRequest = _a.sent();
                            this.browserStorage.updateCacheEntries(silentRequest.state, silentRequest.nonce, silentRequest.authority, silentRequest.loginHint || Constants.EMPTY_STRING, silentRequest.account || null);
                            serverTelemetryManager = this.initializeServerTelemetryManager(this.apiId);
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            authCodeRequest = __assign$1(__assign$1({}, silentRequest), { code: request.code });
                            return [4 /*yield*/, this.getClientConfiguration(serverTelemetryManager, silentRequest.authority)];
                        case 3:
                            clientConfig = _a.sent();
                            authClient = new HybridSpaAuthorizationCodeClient(clientConfig);
                            this.logger.verbose("Auth code client created");
                            silentHandler = new SilentHandler(authClient, this.browserStorage, authCodeRequest, this.logger, this.config.system.navigateFrameWait);
                            // Handle auth code parameters from request
                            return [2 /*return*/, silentHandler.handleCodeResponseFromServer({
                                    code: request.code,
                                    msgraph_host: request.msGraphHost,
                                    cloud_graph_host_name: request.cloudGraphHostName,
                                    cloud_instance_host_name: request.cloudInstanceHostName
                                }, silentRequest.state, authClient.authority, this.networkClient, false)];
                        case 4:
                            e_1 = _a.sent();
                            if (e_1 instanceof AuthError) {
                                e_1.setCorrelationId(this.correlationId);
                            }
                            serverTelemetryManager.cacheFailedRequest(e_1);
                            this.browserStorage.cleanRequestByState(silentRequest.state);
                            throw e_1;
                        case 5: return [2 /*return*/];
                    }
                });
            });
        };
        /**
         * Currently Unsupported
         */
        SilentAuthCodeClient.prototype.logout = function () {
            // Synchronous so we must reject
            return Promise.reject(BrowserAuthError.createSilentLogoutUnsupportedError());
        };
        return SilentAuthCodeClient;
    }(StandardInteractionClient));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */
    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var BrowserPerformanceMeasurement = /** @class */ (function () {
        function BrowserPerformanceMeasurement(name, correlationId) {
            this.correlationId = correlationId;
            this.measureName = "msal.measure." + name + "." + this.correlationId;
            this.startMark = "msal.start." + name + "." + this.correlationId;
            this.endMark = "msal.end." + name + "." + this.correlationId;
        }
        BrowserPerformanceMeasurement.supportsBrowserPerformance = function () {
            return typeof window !== "undefined" &&
                typeof window.performance !== "undefined" &&
                typeof window.performance.mark === "function" &&
                typeof window.performance.measure === "function" &&
                typeof window.performance.clearMarks === "function" &&
                typeof window.performance.clearMeasures === "function" &&
                typeof window.performance.getEntriesByName === "function";
        };
        BrowserPerformanceMeasurement.prototype.startMeasurement = function () {
            if (BrowserPerformanceMeasurement.supportsBrowserPerformance()) {
                try {
                    window.performance.mark(this.startMark);
                }
                catch (e) {
                    // Silently catch
                }
            }
        };
        BrowserPerformanceMeasurement.prototype.endMeasurement = function () {
            if (BrowserPerformanceMeasurement.supportsBrowserPerformance()) {
                try {
                    window.performance.mark(this.endMark);
                    window.performance.measure(this.measureName, this.startMark, this.endMark);
                }
                catch (e) {
                    // Silently catch
                }
            }
        };
        BrowserPerformanceMeasurement.prototype.flushMeasurement = function () {
            if (BrowserPerformanceMeasurement.supportsBrowserPerformance()) {
                try {
                    var entriesForMeasurement = window.performance.getEntriesByName(this.measureName, "measure");
                    if (entriesForMeasurement.length > 0) {
                        var durationMs = entriesForMeasurement[0].duration;
                        window.performance.clearMeasures(this.measureName);
                        window.performance.clearMarks(this.startMark);
                        window.performance.clearMarks(this.endMark);
                        return durationMs;
                    }
                }
                catch (e) {
                    // Silently catch and return null
                }
            }
            return null;
        };
        return BrowserPerformanceMeasurement;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var BrowserPerformanceClient = /** @class */ (function (_super) {
        __extends$1(BrowserPerformanceClient, _super);
        function BrowserPerformanceClient(clientId, authority, logger, libraryName, libraryVersion, applicationTelemetry) {
            var _this = _super.call(this, clientId, authority, logger, libraryName, libraryVersion, applicationTelemetry) || this;
            _this.browserCrypto = new BrowserCrypto(_this.logger);
            _this.guidGenerator = new GuidGenerator(_this.browserCrypto);
            return _this;
        }
        BrowserPerformanceClient.prototype.startPerformanceMeasuremeant = function (measureName, correlationId) {
            return new BrowserPerformanceMeasurement(measureName, correlationId);
        };
        BrowserPerformanceClient.prototype.generateId = function () {
            return this.guidGenerator.generateGuid();
        };
        BrowserPerformanceClient.prototype.getPageVisibility = function () {
            var _a;
            return ((_a = document.visibilityState) === null || _a === void 0 ? void 0 : _a.toString()) || null;
        };
        /**
         * Starts measuring performance for a given operation. Returns a function that should be used to end the measurement.
         * Also captures browser page visibilityState.
         *
         * @param {PerformanceEvents} measureName
         * @param {?string} [correlationId]
         * @returns {((event?: Partial<PerformanceEvent>) => PerformanceEvent| null)}
         */
        BrowserPerformanceClient.prototype.startMeasurement = function (measureName, correlationId) {
            var _this = this;
            // Capture page visibilityState and then invoke start/end measurement
            var startPageVisibility = this.getPageVisibility();
            var inProgressEvent = _super.prototype.startMeasurement.call(this, measureName, correlationId);
            return __assign$1(__assign$1({}, inProgressEvent), { endMeasurement: function (event) {
                    return inProgressEvent.endMeasurement(__assign$1({ startPageVisibility: startPageVisibility, endPageVisibility: _this.getPageVisibility() }, event));
                } });
        };
        return BrowserPerformanceClient;
    }(PerformanceClient));

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    var ClientApplication = /** @class */ (function () {
        /**
         * @constructor
         * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
         *
         * Important attributes in the Configuration object for auth are:
         * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
         * - authority: the authority URL for your application.
         * - redirect_uri: the uri of your application registered in the portal.
         *
         * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
         * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
         * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
         * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
         * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
         * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
         *
         * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
         * Full B2C functionality will be available in this library in future versions.
         *
         * @param configuration Object for the MSAL PublicClientApplication instance
         */
        function ClientApplication(configuration) {
            /*
             * If loaded in an environment where window is not available,
             * set internal flag to false so that further requests fail.
             * This is to support server-side rendering environments.
             */
            this.isBrowserEnvironment = typeof window !== "undefined";
            // Set the configuration.
            this.config = buildConfiguration(configuration, this.isBrowserEnvironment);
            this.initialized = false;
            // Initialize logger
            this.logger = new Logger(this.config.system.loggerOptions, name, version);
            // Initialize the network module class.
            this.networkClient = this.config.system.networkClient;
            // Initialize the navigation client class.
            this.navigationClient = this.config.system.navigationClient;
            // Initialize redirectResponse Map
            this.redirectResponse = new Map();
            // Initial hybrid spa map
            this.hybridAuthCodeResponses = new Map();
            // Initialize performance client
            this.performanceClient = this.isBrowserEnvironment ?
                new BrowserPerformanceClient(this.config.auth.clientId, this.config.auth.authority, this.logger, name, version, this.config.telemetry.application) :
                new StubPerformanceClient(this.config.auth.clientId, this.config.auth.authority, this.logger, name, version, this.config.telemetry.application);
            // Initialize the crypto class.
            this.browserCrypto = this.isBrowserEnvironment ? new CryptoOps(this.logger, this.performanceClient) : DEFAULT_CRYPTO_IMPLEMENTATION;
            this.eventHandler = new EventHandler(this.logger, this.browserCrypto);
            // Initialize the browser storage class.
            this.browserStorage = this.isBrowserEnvironment ?
                new BrowserCacheManager(this.config.auth.clientId, this.config.cache, this.browserCrypto, this.logger) :
                DEFAULT_BROWSER_CACHE_MANAGER(this.config.auth.clientId, this.logger);
            // Initialize the token cache
            this.tokenCache = new TokenCache(this.config, this.browserStorage, this.logger, this.browserCrypto);
        }
        /**
         * Initializer function to perform async startup tasks such as connecting to WAM extension
         */
        ClientApplication.prototype.initialize = function () {
            return __awaiter$1(this, void 0, void 0, function () {
                var _a, e_1;
                return __generator$1(this, function (_b) {
                    switch (_b.label) {
                        case 0:
                            this.logger.trace("initialize called");
                            if (this.initialized) {
                                this.logger.info("initialize has already been called, exiting early.");
                                return [2 /*return*/];
                            }
                            this.eventHandler.emitEvent(EventType.INITIALIZE_START);
                            if (!this.config.system.allowNativeBroker) return [3 /*break*/, 4];
                            _b.label = 1;
                        case 1:
                            _b.trys.push([1, 3, , 4]);
                            _a = this;
                            return [4 /*yield*/, NativeMessageHandler.createProvider(this.logger, this.config.system.nativeBrokerHandshakeTimeout)];
                        case 2:
                            _a.nativeExtensionProvider = _b.sent();
                            return [3 /*break*/, 4];
                        case 3:
                            e_1 = _b.sent();
                            this.logger.verbose(e_1);
                            return [3 /*break*/, 4];
                        case 4:
                            this.initialized = true;
                            this.eventHandler.emitEvent(EventType.INITIALIZE_END);
                            return [2 /*return*/];
                    }
                });
            });
        };
        // #region Redirect Flow
        /**
         * Event handler function which allows users to fire events after the PublicClientApplication object
         * has loaded during redirect flows. This should be invoked on all page loads involved in redirect
         * auth flows.
         * @param hash Hash to process. Defaults to the current value of window.location.hash. Only needs to be provided explicitly if the response to be handled is not contained in the current value.
         * @returns Token response or null. If the return value is null, then no auth redirect was detected.
         */
        ClientApplication.prototype.handleRedirectPromise = function (hash) {
            return __awaiter$1(this, void 0, void 0, function () {
                var loggedInAccounts, redirectResponseKey, response, request, redirectResponse, nativeClient, correlationId, redirectClient;
                var _this = this;
                return __generator$1(this, function (_a) {
                    this.logger.verbose("handleRedirectPromise called");
                    // Block token acquisition before initialize has been called if native brokering is enabled
                    BrowserUtils.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized);
                    loggedInAccounts = this.getAllAccounts();
                    if (this.isBrowserEnvironment) {
                        redirectResponseKey = hash || Constants.EMPTY_STRING;
                        response = this.redirectResponse.get(redirectResponseKey);
                        if (typeof response === "undefined") {
                            this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_START, InteractionType.Redirect);
                            this.logger.verbose("handleRedirectPromise has been called for the first time, storing the promise");
                            request = this.browserStorage.getCachedNativeRequest();
                            redirectResponse = void 0;
                            if (request && NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider) && this.nativeExtensionProvider && !hash) {
                                this.logger.trace("handleRedirectPromise - acquiring token from native platform");
                                nativeClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.handleRedirectPromise, this.performanceClient, this.nativeExtensionProvider, request.accountId, request.correlationId);
                                redirectResponse = nativeClient.handleRedirectPromise();
                            }
                            else {
                                this.logger.trace("handleRedirectPromise - acquiring token from web flow");
                                correlationId = this.browserStorage.getTemporaryCache(TemporaryCacheKeys.CORRELATION_ID, true) || Constants.EMPTY_STRING;
                                redirectClient = this.createRedirectClient(correlationId);
                                redirectResponse = redirectClient.handleRedirectPromise(hash);
                            }
                            response = redirectResponse.then(function (result) {
                                if (result) {
                                    // Emit login event if number of accounts change
                                    var isLoggingIn = loggedInAccounts.length < _this.getAllAccounts().length;
                                    if (isLoggingIn) {
                                        _this.eventHandler.emitEvent(EventType.LOGIN_SUCCESS, InteractionType.Redirect, result);
                                        _this.logger.verbose("handleRedirectResponse returned result, login success");
                                    }
                                    else {
                                        _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Redirect, result);
                                        _this.logger.verbose("handleRedirectResponse returned result, acquire token success");
                                    }
                                }
                                _this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_END, InteractionType.Redirect);
                                return result;
                            }).catch(function (e) {
                                // Emit login event if there is an account
                                if (loggedInAccounts.length > 0) {
                                    _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Redirect, null, e);
                                }
                                else {
                                    _this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Redirect, null, e);
                                }
                                _this.eventHandler.emitEvent(EventType.HANDLE_REDIRECT_END, InteractionType.Redirect);
                                throw e;
                            });
                            this.redirectResponse.set(redirectResponseKey, response);
                        }
                        else {
                            this.logger.verbose("handleRedirectPromise has been called previously, returning the result from the first call");
                        }
                        return [2 /*return*/, response];
                    }
                    this.logger.verbose("handleRedirectPromise returns null, not browser environment");
                    return [2 /*return*/, null];
                });
            });
        };
        /**
         * Use when you want to obtain an access_token for your API by redirecting the user's browser window to the authorization endpoint. This function redirects
         * the page, so any code that follows this function will not execute.
         *
         * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
         * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
         *
         * @param request
         */
        ClientApplication.prototype.acquireTokenRedirect = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var correlationId, isLoggedIn, result, nativeClient, redirectClient;
                var _this = this;
                return __generator$1(this, function (_a) {
                    correlationId = this.getRequestCorrelationId(request);
                    this.logger.verbose("acquireTokenRedirect called", correlationId);
                    this.preflightBrowserEnvironmentCheck(InteractionType.Redirect);
                    isLoggedIn = this.getAllAccounts().length > 0;
                    if (isLoggedIn) {
                        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Redirect, request);
                    }
                    else {
                        this.eventHandler.emitEvent(EventType.LOGIN_START, InteractionType.Redirect, request);
                    }
                    if (this.nativeExtensionProvider && this.canUseNative(request)) {
                        nativeClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenRedirect, this.performanceClient, this.nativeExtensionProvider, this.getNativeAccountId(request), request.correlationId);
                        result = nativeClient.acquireTokenRedirect(request).catch(function (e) {
                            if (e instanceof NativeAuthError && e.isFatal()) {
                                _this.nativeExtensionProvider = undefined; // If extension gets uninstalled during session prevent future requests from continuing to attempt
                                var redirectClient = _this.createRedirectClient(request.correlationId);
                                return redirectClient.acquireToken(request);
                            }
                            throw e;
                        });
                    }
                    else {
                        redirectClient = this.createRedirectClient(request.correlationId);
                        result = redirectClient.acquireToken(request);
                    }
                    return [2 /*return*/, result.catch(function (e) {
                            // If logged in, emit acquire token events
                            if (isLoggedIn) {
                                _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Redirect, null, e);
                            }
                            else {
                                _this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Redirect, null, e);
                            }
                            throw e;
                        })];
                });
            });
        };
        // #endregion
        // #region Popup Flow
        /**
         * Use when you want to obtain an access_token for your API via opening a popup window in the user's browser
         *
         * @param request
         *
         * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
         */
        ClientApplication.prototype.acquireTokenPopup = function (request) {
            var _this = this;
            var correlationId = this.getRequestCorrelationId(request);
            var atPopupMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenPopup, correlationId);
            try {
                this.logger.verbose("acquireTokenPopup called", correlationId);
                this.preflightBrowserEnvironmentCheck(InteractionType.Popup);
            }
            catch (e) {
                // Since this function is syncronous we need to reject
                return Promise.reject(e);
            }
            // If logged in, emit acquire token events
            var loggedInAccounts = this.getAllAccounts();
            if (loggedInAccounts.length > 0) {
                this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Popup, request);
            }
            else {
                this.eventHandler.emitEvent(EventType.LOGIN_START, InteractionType.Popup, request);
            }
            var result;
            if (this.canUseNative(request)) {
                result = this.acquireTokenNative(request, ApiId.acquireTokenPopup).then(function (response) {
                    _this.browserStorage.setInteractionInProgress(false);
                    atPopupMeasurement.endMeasurement({
                        success: true,
                        isNativeBroker: true
                    });
                    atPopupMeasurement.flushMeasurement();
                    return response;
                }).catch(function (e) {
                    if (e instanceof NativeAuthError && e.isFatal()) {
                        _this.nativeExtensionProvider = undefined; // If extension gets uninstalled during session prevent future requests from continuing to attempt
                        var popupClient = _this.createPopupClient(request.correlationId);
                        return popupClient.acquireToken(request);
                    }
                    throw e;
                });
            }
            else {
                var popupClient = this.createPopupClient(request.correlationId);
                result = popupClient.acquireToken(request);
            }
            return result.then(function (result) {
                // If logged in, emit acquire token events
                var isLoggingIn = loggedInAccounts.length < _this.getAllAccounts().length;
                if (isLoggingIn) {
                    _this.eventHandler.emitEvent(EventType.LOGIN_SUCCESS, InteractionType.Popup, result);
                }
                else {
                    _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Popup, result);
                }
                atPopupMeasurement.endMeasurement({
                    success: true
                });
                atPopupMeasurement.flushMeasurement();
                return result;
            }).catch(function (e) {
                if (loggedInAccounts.length > 0) {
                    _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Popup, null, e);
                }
                else {
                    _this.eventHandler.emitEvent(EventType.LOGIN_FAILURE, InteractionType.Popup, null, e);
                }
                atPopupMeasurement.endMeasurement({
                    errorCode: e.errorCode,
                    subErrorCode: e.subError,
                    success: false
                });
                atPopupMeasurement.flushMeasurement();
                // Since this function is syncronous we need to reject
                return Promise.reject(e);
            });
        };
        // #endregion
        // #region Silent Flow
        /**
         * This function uses a hidden iframe to fetch an authorization code from the eSTS. There are cases where this may not work:
         * - Any browser using a form of Intelligent Tracking Prevention
         * - If there is not an established session with the service
         *
         * In these cases, the request must be done inside a popup or full frame redirect.
         *
         * For the cases where interaction is required, you cannot send a request with prompt=none.
         *
         * If your refresh token has expired, you can use this function to fetch a new set of tokens silently as long as
         * you session on the server still exists.
         * @param request {@link SsoSilentRequest}
         *
         * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
         */
        ClientApplication.prototype.ssoSilent = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var correlationId, validRequest, ssoSilentMeasurement, result, silentIframeClient;
                var _this = this;
                return __generator$1(this, function (_a) {
                    correlationId = this.getRequestCorrelationId(request);
                    validRequest = __assign$1(__assign$1({}, request), { prompt: PromptValue.NONE, correlationId: correlationId });
                    this.preflightBrowserEnvironmentCheck(InteractionType.Silent);
                    ssoSilentMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.SsoSilent, correlationId);
                    this.logger.verbose("ssoSilent called", correlationId);
                    this.eventHandler.emitEvent(EventType.SSO_SILENT_START, InteractionType.Silent, validRequest);
                    if (this.canUseNative(validRequest)) {
                        result = this.acquireTokenNative(validRequest, ApiId.ssoSilent).catch(function (e) {
                            // If native token acquisition fails for availability reasons fallback to standard flow
                            if (e instanceof NativeAuthError && e.isFatal()) {
                                _this.nativeExtensionProvider = undefined; // If extension gets uninstalled during session prevent future requests from continuing to attempt
                                var silentIframeClient = _this.createSilentIframeClient(validRequest.correlationId);
                                return silentIframeClient.acquireToken(validRequest);
                            }
                            throw e;
                        });
                    }
                    else {
                        silentIframeClient = this.createSilentIframeClient(validRequest.correlationId);
                        result = silentIframeClient.acquireToken(validRequest);
                    }
                    return [2 /*return*/, result.then(function (response) {
                            _this.eventHandler.emitEvent(EventType.SSO_SILENT_SUCCESS, InteractionType.Silent, response);
                            ssoSilentMeasurement.endMeasurement({
                                success: true,
                                isNativeBroker: response.fromNativeBroker
                            });
                            ssoSilentMeasurement.flushMeasurement();
                            return response;
                        }).catch(function (e) {
                            _this.eventHandler.emitEvent(EventType.SSO_SILENT_FAILURE, InteractionType.Silent, null, e);
                            ssoSilentMeasurement.endMeasurement({
                                errorCode: e.errorCode,
                                subErrorCode: e.subError,
                                success: false
                            });
                            ssoSilentMeasurement.flushMeasurement();
                            throw e;
                        })];
                });
            });
        };
        /**
         * This function redeems an authorization code (passed as code) from the eSTS token endpoint.
         * This authorization code should be acquired server-side using a confidential client to acquire a spa_code.
         * This API is not indended for normal authorization code acquisition and redemption.
         *
         * Redemption of this authorization code will not require PKCE, as it was acquired by a confidential client.
         *
         * @param request {@link AuthorizationCodeRequest}
         * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
         */
        ClientApplication.prototype.acquireTokenByCode = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var correlationId, atbcMeasurement, hybridAuthCode_1, response;
                var _this = this;
                return __generator$1(this, function (_a) {
                    correlationId = this.getRequestCorrelationId(request);
                    this.preflightBrowserEnvironmentCheck(InteractionType.Silent);
                    this.logger.trace("acquireTokenByCode called", correlationId);
                    this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_START, InteractionType.Silent, request);
                    atbcMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenByCode, request.correlationId);
                    try {
                        if (request.code) {
                            hybridAuthCode_1 = request.code;
                            response = this.hybridAuthCodeResponses.get(hybridAuthCode_1);
                            if (!response) {
                                this.logger.verbose("Initiating new acquireTokenByCode request", correlationId);
                                response = this.acquireTokenByCodeAsync(__assign$1(__assign$1({}, request), { correlationId: correlationId }))
                                    .then(function (result) {
                                    _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_SUCCESS, InteractionType.Silent, result);
                                    _this.hybridAuthCodeResponses.delete(hybridAuthCode_1);
                                    atbcMeasurement.endMeasurement({
                                        success: true,
                                        isNativeBroker: result.fromNativeBroker
                                    });
                                    atbcMeasurement.flushMeasurement();
                                    return result;
                                })
                                    .catch(function (error) {
                                    _this.hybridAuthCodeResponses.delete(hybridAuthCode_1);
                                    _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_FAILURE, InteractionType.Silent, null, error);
                                    atbcMeasurement.endMeasurement({
                                        errorCode: error.errorCode,
                                        subErrorCode: error.subError,
                                        success: false
                                    });
                                    atbcMeasurement.flushMeasurement();
                                    throw error;
                                });
                                this.hybridAuthCodeResponses.set(hybridAuthCode_1, response);
                            }
                            else {
                                this.logger.verbose("Existing acquireTokenByCode request found", request.correlationId);
                                atbcMeasurement.endMeasurement({
                                    success: true
                                });
                                atbcMeasurement.discardMeasurement();
                            }
                            return [2 /*return*/, response];
                        }
                        else if (request.nativeAccountId) {
                            if (this.canUseNative(request, request.nativeAccountId)) {
                                return [2 /*return*/, this.acquireTokenNative(request, ApiId.acquireTokenByCode, request.nativeAccountId).catch(function (e) {
                                        // If native token acquisition fails for availability reasons fallback to standard flow
                                        if (e instanceof NativeAuthError && e.isFatal()) {
                                            _this.nativeExtensionProvider = undefined; // If extension gets uninstalled during session prevent future requests from continuing to attempt
                                        }
                                        throw e;
                                    })];
                            }
                            else {
                                throw BrowserAuthError.createUnableToAcquireTokenFromNativePlatformError();
                            }
                        }
                        else {
                            throw BrowserAuthError.createAuthCodeOrNativeAccountIdRequiredError();
                        }
                    }
                    catch (e) {
                        this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_BY_CODE_FAILURE, InteractionType.Silent, null, e);
                        atbcMeasurement.endMeasurement({
                            errorCode: e instanceof AuthError && e.errorCode || undefined,
                            subErrorCode: e instanceof AuthError && e.subError || undefined,
                            success: false
                        });
                        throw e;
                    }
                    return [2 /*return*/];
                });
            });
        };
        /**
         * Creates a SilentAuthCodeClient to redeem an authorization code.
         * @param request
         * @returns Result of the operation to redeem the authorization code
         */
        ClientApplication.prototype.acquireTokenByCodeAsync = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var silentAuthCodeClient, silentTokenResult;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.logger.trace("acquireTokenByCodeAsync called", request.correlationId);
                            silentAuthCodeClient = this.createSilentAuthCodeClient(request.correlationId);
                            return [4 /*yield*/, silentAuthCodeClient.acquireToken(request)];
                        case 1:
                            silentTokenResult = _a.sent();
                            return [2 /*return*/, silentTokenResult];
                    }
                });
            });
        };
        /**
         * Use this function to obtain a token before every call to the API / resource provider
         *
         * MSAL return's a cached token when available
         * Or it send's a request to the STS to obtain a new token using a refresh token.
         *
         * @param {@link SilentRequest}
         *
         * To renew idToken, please pass clientId as the only scope in the Authentication Parameters
         * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
         */
        ClientApplication.prototype.acquireTokenByRefreshToken = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var atbrtMeasurement, silentRefreshClient;
                var _this = this;
                return __generator$1(this, function (_a) {
                    // block the reload if it occurred inside a hidden iframe
                    BrowserUtils.blockReloadInHiddenIframes();
                    atbrtMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenByRefreshToken, request.correlationId);
                    this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_NETWORK_START, InteractionType.Silent, request);
                    silentRefreshClient = this.createSilentRefreshClient(request.correlationId);
                    return [2 /*return*/, silentRefreshClient.acquireToken(request)
                            .then(function (result) {
                            atbrtMeasurement.endMeasurement({
                                success: true,
                                fromCache: result.fromCache
                            });
                            return result;
                        })
                            .catch(function (e) {
                            var isServerError = e instanceof ServerError;
                            var isInteractionRequiredError = e instanceof InteractionRequiredAuthError;
                            var isInvalidGrantError = (e.errorCode === BrowserConstants.INVALID_GRANT_ERROR);
                            if (isServerError && isInvalidGrantError && !isInteractionRequiredError) {
                                _this.logger.verbose("Refresh token expired or invalid, attempting acquire token by iframe", request.correlationId);
                                var silentIframeClient = _this.createSilentIframeClient(request.correlationId);
                                return silentIframeClient.acquireToken(request)
                                    .then(function (result) {
                                    atbrtMeasurement.endMeasurement({
                                        success: true,
                                        fromCache: result.fromCache
                                    });
                                    return result;
                                })
                                    .catch(function (error) {
                                    atbrtMeasurement.endMeasurement({
                                        errorCode: error.errorCode,
                                        subErrorCode: error.subError,
                                        success: false
                                    });
                                    throw error;
                                });
                            }
                            atbrtMeasurement.endMeasurement({
                                success: false
                            });
                            throw e;
                        })];
                });
            });
        };
        // #endregion
        // #region Logout
        /**
         * Deprecated logout function. Use logoutRedirect or logoutPopup instead
         * @param logoutRequest
         * @deprecated
         */
        ClientApplication.prototype.logout = function (logoutRequest) {
            return __awaiter$1(this, void 0, void 0, function () {
                var correlationId;
                return __generator$1(this, function (_a) {
                    correlationId = this.getRequestCorrelationId(logoutRequest);
                    this.logger.warning("logout API is deprecated and will be removed in msal-browser v3.0.0. Use logoutRedirect instead.", correlationId);
                    return [2 /*return*/, this.logoutRedirect(__assign$1({ correlationId: correlationId }, logoutRequest))];
                });
            });
        };
        /**
         * Use to log out the current user, and redirect the user to the postLogoutRedirectUri.
         * Default behaviour is to redirect the user to `window.location.href`.
         * @param logoutRequest
         */
        ClientApplication.prototype.logoutRedirect = function (logoutRequest) {
            return __awaiter$1(this, void 0, void 0, function () {
                var correlationId, redirectClient;
                return __generator$1(this, function (_a) {
                    correlationId = this.getRequestCorrelationId(logoutRequest);
                    this.preflightBrowserEnvironmentCheck(InteractionType.Redirect);
                    redirectClient = this.createRedirectClient(correlationId);
                    return [2 /*return*/, redirectClient.logout(logoutRequest)];
                });
            });
        };
        /**
         * Clears local cache for the current user then opens a popup window prompting the user to sign-out of the server
         * @param logoutRequest
         */
        ClientApplication.prototype.logoutPopup = function (logoutRequest) {
            try {
                var correlationId = this.getRequestCorrelationId(logoutRequest);
                this.preflightBrowserEnvironmentCheck(InteractionType.Popup);
                var popupClient = this.createPopupClient(correlationId);
                return popupClient.logout(logoutRequest);
            }
            catch (e) {
                // Since this function is syncronous we need to reject
                return Promise.reject(e);
            }
        };
        // #endregion
        // #region Account APIs
        /**
         * Returns all accounts that MSAL currently has data for.
         * (the account object is created at the time of successful login)
         * or empty array when no accounts are found
         * @returns Array of account objects in cache
         */
        ClientApplication.prototype.getAllAccounts = function () {
            this.logger.verbose("getAllAccounts called");
            return this.isBrowserEnvironment ? this.browserStorage.getAllAccounts() : [];
        };
        /**
         * Returns the signed in account matching username.
         * (the account object is created at the time of successful login)
         * or null when no matching account is found.
         * This API is provided for convenience but getAccountById should be used for best reliability
         * @param userName
         * @returns The account object stored in MSAL
         */
        ClientApplication.prototype.getAccountByUsername = function (userName) {
            var allAccounts = this.getAllAccounts();
            if (!StringUtils.isEmpty(userName) && allAccounts && allAccounts.length) {
                this.logger.verbose("Account matching username found, returning");
                this.logger.verbosePii("Returning signed-in accounts matching username: " + userName);
                return allAccounts.filter(function (accountObj) { return accountObj.username.toLowerCase() === userName.toLowerCase(); })[0] || null;
            }
            else {
                this.logger.verbose("getAccountByUsername: No matching account found, returning null");
                return null;
            }
        };
        /**
         * Returns the signed in account matching homeAccountId.
         * (the account object is created at the time of successful login)
         * or null when no matching account is found
         * @param homeAccountId
         * @returns The account object stored in MSAL
         */
        ClientApplication.prototype.getAccountByHomeId = function (homeAccountId) {
            var allAccounts = this.getAllAccounts();
            if (!StringUtils.isEmpty(homeAccountId) && allAccounts && allAccounts.length) {
                this.logger.verbose("Account matching homeAccountId found, returning");
                this.logger.verbosePii("Returning signed-in accounts matching homeAccountId: " + homeAccountId);
                return allAccounts.filter(function (accountObj) { return accountObj.homeAccountId === homeAccountId; })[0] || null;
            }
            else {
                this.logger.verbose("getAccountByHomeId: No matching account found, returning null");
                return null;
            }
        };
        /**
         * Returns the signed in account matching localAccountId.
         * (the account object is created at the time of successful login)
         * or null when no matching account is found
         * @param localAccountId
         * @returns The account object stored in MSAL
         */
        ClientApplication.prototype.getAccountByLocalId = function (localAccountId) {
            var allAccounts = this.getAllAccounts();
            if (!StringUtils.isEmpty(localAccountId) && allAccounts && allAccounts.length) {
                this.logger.verbose("Account matching localAccountId found, returning");
                this.logger.verbosePii("Returning signed-in accounts matching localAccountId: " + localAccountId);
                return allAccounts.filter(function (accountObj) { return accountObj.localAccountId === localAccountId; })[0] || null;
            }
            else {
                this.logger.verbose("getAccountByLocalId: No matching account found, returning null");
                return null;
            }
        };
        /**
         * Sets the account to use as the active account. If no account is passed to the acquireToken APIs, then MSAL will use this active account.
         * @param account
         */
        ClientApplication.prototype.setActiveAccount = function (account) {
            this.browserStorage.setActiveAccount(account);
        };
        /**
         * Gets the currently active account
         */
        ClientApplication.prototype.getActiveAccount = function () {
            return this.browserStorage.getActiveAccount();
        };
        // #endregion
        // #region Helpers
        /**
         * Helper to validate app environment before making an auth request
         *
         * @protected
         * @param {InteractionType} interactionType What kind of interaction is being used
         * @param {boolean} [setInteractionInProgress=true] Whether to set interaction in progress temp cache flag
         */
        ClientApplication.prototype.preflightBrowserEnvironmentCheck = function (interactionType, setInteractionInProgress) {
            if (setInteractionInProgress === void 0) { setInteractionInProgress = true; }
            this.logger.verbose("preflightBrowserEnvironmentCheck started");
            // Block request if not in browser environment
            BrowserUtils.blockNonBrowserEnvironment(this.isBrowserEnvironment);
            // Block redirects if in an iframe
            BrowserUtils.blockRedirectInIframe(interactionType, this.config.system.allowRedirectInIframe);
            // Block auth requests inside a hidden iframe
            BrowserUtils.blockReloadInHiddenIframes();
            // Block redirectUri opened in a popup from calling MSAL APIs
            BrowserUtils.blockAcquireTokenInPopups();
            // Block token acquisition before initialize has been called if native brokering is enabled
            BrowserUtils.blockNativeBrokerCalledBeforeInitialized(this.config.system.allowNativeBroker, this.initialized);
            // Block redirects if memory storage is enabled but storeAuthStateInCookie is not
            if (interactionType === InteractionType.Redirect &&
                this.config.cache.cacheLocation === BrowserCacheLocation.MemoryStorage &&
                !this.config.cache.storeAuthStateInCookie) {
                throw BrowserConfigurationAuthError.createInMemoryRedirectUnavailableError();
            }
            if (interactionType === InteractionType.Redirect || interactionType === InteractionType.Popup) {
                this.preflightInteractiveRequest(setInteractionInProgress);
            }
        };
        /**
         * Preflight check for interactive requests
         *
         * @protected
         * @param {boolean} setInteractionInProgress Whether to set interaction in progress temp cache flag
         */
        ClientApplication.prototype.preflightInteractiveRequest = function (setInteractionInProgress) {
            this.logger.verbose("preflightInteractiveRequest called, validating app environment");
            // block the reload if it occurred inside a hidden iframe
            BrowserUtils.blockReloadInHiddenIframes();
            // Set interaction in progress temporary cache or throw if alread set.
            if (setInteractionInProgress) {
                this.browserStorage.setInteractionInProgress(true);
            }
        };
        /**
         * Acquire a token from native device (e.g. WAM)
         * @param request
         */
        ClientApplication.prototype.acquireTokenNative = function (request, apiId, accountId) {
            return __awaiter$1(this, void 0, void 0, function () {
                var nativeClient;
                return __generator$1(this, function (_a) {
                    this.logger.trace("acquireTokenNative called");
                    if (!this.nativeExtensionProvider) {
                        throw BrowserAuthError.createNativeConnectionNotEstablishedError();
                    }
                    nativeClient = new NativeInteractionClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, apiId, this.performanceClient, this.nativeExtensionProvider, accountId || this.getNativeAccountId(request), request.correlationId);
                    return [2 /*return*/, nativeClient.acquireToken(request)];
                });
            });
        };
        /**
         * Returns boolean indicating if this request can use the native broker
         * @param request
         */
        ClientApplication.prototype.canUseNative = function (request, accountId) {
            this.logger.trace("canUseNative called");
            if (!NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, request.authenticationScheme)) {
                this.logger.trace("canUseNative: isNativeAvailable returned false, returning false");
                return false;
            }
            if (request.prompt) {
                switch (request.prompt) {
                    case PromptValue.NONE:
                    case PromptValue.CONSENT:
                        this.logger.trace("canUseNative: prompt is compatible with native flow");
                        break;
                    default:
                        this.logger.trace("canUseNative: prompt = " + request.prompt + " is not compatible with native flow, returning false");
                        return false;
                }
            }
            if (!accountId && !this.getNativeAccountId(request)) {
                this.logger.trace("canUseNative: nativeAccountId is not available, returning false");
                return false;
            }
            return true;
        };
        /**
         * Get the native accountId from the account
         * @param request
         * @returns
         */
        ClientApplication.prototype.getNativeAccountId = function (request) {
            var account = request.account || this.browserStorage.getAccountInfoByHints(request.loginHint, request.sid) || this.getActiveAccount();
            return account && account.nativeAccountId || "";
        };
        /**
         * Returns new instance of the Popup Interaction Client
         * @param correlationId
         */
        ClientApplication.prototype.createPopupClient = function (correlationId) {
            return new PopupClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, correlationId);
        };
        /**
         * Returns new instance of the Popup Interaction Client
         * @param correlationId
         */
        ClientApplication.prototype.createRedirectClient = function (correlationId) {
            return new RedirectClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, correlationId);
        };
        /**
         * Returns new instance of the Silent Iframe Interaction Client
         * @param correlationId
         */
        ClientApplication.prototype.createSilentIframeClient = function (correlationId) {
            return new SilentIframeClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.ssoSilent, this.performanceClient, this.nativeExtensionProvider, correlationId);
        };
        /**
         * Returns new instance of the Silent Cache Interaction Client
         */
        ClientApplication.prototype.createSilentCacheClient = function (correlationId) {
            return new SilentCacheClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, correlationId);
        };
        /**
         * Returns new instance of the Silent Refresh Interaction Client
         */
        ClientApplication.prototype.createSilentRefreshClient = function (correlationId) {
            return new SilentRefreshClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, this.performanceClient, this.nativeExtensionProvider, correlationId);
        };
        /**
         * Returns new instance of the Silent AuthCode Interaction Client
         */
        ClientApplication.prototype.createSilentAuthCodeClient = function (correlationId) {
            return new SilentAuthCodeClient(this.config, this.browserStorage, this.browserCrypto, this.logger, this.eventHandler, this.navigationClient, ApiId.acquireTokenByCode, this.performanceClient, this.nativeExtensionProvider, correlationId);
        };
        /**
         * Adds event callbacks to array
         * @param callback
         */
        ClientApplication.prototype.addEventCallback = function (callback) {
            return this.eventHandler.addEventCallback(callback);
        };
        /**
         * Removes callback with provided id from callback array
         * @param callbackId
         */
        ClientApplication.prototype.removeEventCallback = function (callbackId) {
            this.eventHandler.removeEventCallback(callbackId);
        };
        /**
         * Registers a callback to receive performance events.
         *
         * @param {PerformanceCallbackFunction} callback
         * @returns {string}
         */
        ClientApplication.prototype.addPerformanceCallback = function (callback) {
            return this.performanceClient.addPerformanceCallback(callback);
        };
        /**
         * Removes a callback registered with addPerformanceCallback.
         *
         * @param {string} callbackId
         * @returns {boolean}
         */
        ClientApplication.prototype.removePerformanceCallback = function (callbackId) {
            return this.performanceClient.removePerformanceCallback(callbackId);
        };
        /**
         * Adds event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
         */
        ClientApplication.prototype.enableAccountStorageEvents = function () {
            this.eventHandler.enableAccountStorageEvents();
        };
        /**
         * Removes event listener that emits an event when a user account is added or removed from localstorage in a different browser tab or window
         */
        ClientApplication.prototype.disableAccountStorageEvents = function () {
            this.eventHandler.disableAccountStorageEvents();
        };
        /**
         * Gets the token cache for the application.
         */
        ClientApplication.prototype.getTokenCache = function () {
            return this.tokenCache;
        };
        /**
         * Returns the logger instance
         */
        ClientApplication.prototype.getLogger = function () {
            return this.logger;
        };
        /**
         * Replaces the default logger set in configurations with new Logger with new configurations
         * @param logger Logger instance
         */
        ClientApplication.prototype.setLogger = function (logger) {
            this.logger = logger;
        };
        /**
         * Called by wrapper libraries (Angular & React) to set SKU and Version passed down to telemetry, logger, etc.
         * @param sku
         * @param version
         */
        ClientApplication.prototype.initializeWrapperLibrary = function (sku, version) {
            // Validate the SKU passed in is one we expect
            this.browserStorage.setWrapperMetadata(sku, version);
        };
        /**
         * Sets navigation client
         * @param navigationClient
         */
        ClientApplication.prototype.setNavigationClient = function (navigationClient) {
            this.navigationClient = navigationClient;
        };
        /**
         * Returns the configuration object
         */
        ClientApplication.prototype.getConfiguration = function () {
            return this.config;
        };
        /**
         * Generates a correlation id for a request if none is provided.
         *
         * @protected
         * @param {?Partial<BaseAuthRequest>} [request]
         * @returns {string}
         */
        ClientApplication.prototype.getRequestCorrelationId = function (request) {
            if (request === null || request === void 0 ? void 0 : request.correlationId) {
                return request.correlationId;
            }
            if (this.isBrowserEnvironment) {
                return this.browserCrypto.createNewGuid();
            }
            /*
             * Included for fallback for non-browser environments,
             * and to ensure this method always returns a string.
             */
            return Constants.EMPTY_STRING;
        };
        return ClientApplication;
    }());

    /*! @azure/msal-browser v2.26.0 2022-06-13 */

    /*
     * Copyright (c) Microsoft Corporation. All rights reserved.
     * Licensed under the MIT License.
     */
    /**
     * The PublicClientApplication class is the object exposed by the library to perform authentication and authorization functions in Single Page Applications
     * to obtain JWT tokens as described in the OAuth 2.0 Authorization Code Flow with PKCE specification.
     */
    var PublicClientApplication = /** @class */ (function (_super) {
        __extends$1(PublicClientApplication, _super);
        /**
         * @constructor
         * Constructor for the PublicClientApplication used to instantiate the PublicClientApplication object
         *
         * Important attributes in the Configuration object for auth are:
         * - clientID: the application ID of your application. You can obtain one by registering your application with our Application registration portal : https://portal.azure.com/#blade/Microsoft_AAD_IAM/ActiveDirectoryMenuBlade/RegisteredAppsPreview
         * - authority: the authority URL for your application.
         * - redirect_uri: the uri of your application registered in the portal.
         *
         * In Azure AD, authority is a URL indicating the Azure active directory that MSAL uses to obtain tokens.
         * It is of the form https://login.microsoftonline.com/{Enter_the_Tenant_Info_Here}
         * If your application supports Accounts in one organizational directory, replace "Enter_the_Tenant_Info_Here" value with the Tenant Id or Tenant name (for example, contoso.microsoft.com).
         * If your application supports Accounts in any organizational directory, replace "Enter_the_Tenant_Info_Here" value with organizations.
         * If your application supports Accounts in any organizational directory and personal Microsoft accounts, replace "Enter_the_Tenant_Info_Here" value with common.
         * To restrict support to Personal Microsoft accounts only, replace "Enter_the_Tenant_Info_Here" value with consumers.
         *
         * In Azure B2C, authority is of the form https://{instance}/tfp/{tenant}/{policyName}/
         * Full B2C functionality will be available in this library in future versions.
         *
         * @param configuration object for the MSAL PublicClientApplication instance
         */
        function PublicClientApplication(configuration) {
            var _this = _super.call(this, configuration) || this;
            _this.activeSilentTokenRequests = new Map();
            return _this;
        }
        /**
         * Use when initiating the login process by redirecting the user's browser to the authorization endpoint. This function redirects the page, so
         * any code that follows this function will not execute.
         *
         * IMPORTANT: It is NOT recommended to have code that is dependent on the resolution of the Promise. This function will navigate away from the current
         * browser window. It currently returns a Promise in order to reflect the asynchronous nature of the code running in this function.
         *
         * @param request
         */
        PublicClientApplication.prototype.loginRedirect = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var correlationId;
                return __generator$1(this, function (_a) {
                    correlationId = this.getRequestCorrelationId(request);
                    this.logger.verbose("loginRedirect called", correlationId);
                    return [2 /*return*/, this.acquireTokenRedirect(__assign$1({ correlationId: correlationId }, (request || DEFAULT_REQUEST)))];
                });
            });
        };
        /**
         * Use when initiating the login process via opening a popup window in the user's browser
         *
         * @param request
         *
         * @returns A promise that is fulfilled when this function has completed, or rejected if an error was raised.
         */
        PublicClientApplication.prototype.loginPopup = function (request) {
            var correlationId = this.getRequestCorrelationId(request);
            this.logger.verbose("loginPopup called", correlationId);
            return this.acquireTokenPopup(__assign$1({ correlationId: correlationId }, (request || DEFAULT_REQUEST)));
        };
        /**
         * Silently acquire an access token for a given set of scopes. Returns currently processing promise if parallel requests are made.
         *
         * @param {@link (SilentRequest:type)}
         * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse} object
         */
        PublicClientApplication.prototype.acquireTokenSilent = function (request) {
            return __awaiter$1(this, void 0, void 0, function () {
                var correlationId, atsMeasurement, account, thumbprint, silentRequestKey, cachedResponse, response;
                var _this = this;
                return __generator$1(this, function (_a) {
                    correlationId = this.getRequestCorrelationId(request);
                    atsMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenSilent, correlationId);
                    this.preflightBrowserEnvironmentCheck(InteractionType.Silent);
                    this.logger.verbose("acquireTokenSilent called", correlationId);
                    account = request.account || this.getActiveAccount();
                    if (!account) {
                        throw BrowserAuthError.createNoAccountError();
                    }
                    thumbprint = {
                        clientId: this.config.auth.clientId,
                        authority: request.authority || Constants.EMPTY_STRING,
                        scopes: request.scopes,
                        homeAccountIdentifier: account.homeAccountId,
                        claims: request.claims,
                        authenticationScheme: request.authenticationScheme,
                        resourceRequestMethod: request.resourceRequestMethod,
                        resourceRequestUri: request.resourceRequestUri,
                        shrClaims: request.shrClaims,
                        sshKid: request.sshKid
                    };
                    silentRequestKey = JSON.stringify(thumbprint);
                    cachedResponse = this.activeSilentTokenRequests.get(silentRequestKey);
                    if (typeof cachedResponse === "undefined") {
                        this.logger.verbose("acquireTokenSilent called for the first time, storing active request", correlationId);
                        response = this.acquireTokenSilentAsync(__assign$1(__assign$1({}, request), { correlationId: correlationId }), account)
                            .then(function (result) {
                            _this.activeSilentTokenRequests.delete(silentRequestKey);
                            atsMeasurement.endMeasurement({
                                success: true,
                                fromCache: result.fromCache,
                                isNativeBroker: result.fromNativeBroker
                            });
                            atsMeasurement.flushMeasurement();
                            return result;
                        })
                            .catch(function (error) {
                            _this.activeSilentTokenRequests.delete(silentRequestKey);
                            atsMeasurement.endMeasurement({
                                errorCode: error.errorCode,
                                subErrorCode: error.subError,
                                success: false
                            });
                            atsMeasurement.flushMeasurement();
                            throw error;
                        });
                        this.activeSilentTokenRequests.set(silentRequestKey, response);
                        return [2 /*return*/, response];
                    }
                    else {
                        this.logger.verbose("acquireTokenSilent has been called previously, returning the result from the first call", correlationId);
                        atsMeasurement.endMeasurement({
                            success: true
                        });
                        // Discard measurements for memoized calls, as they are usually only a couple of ms and will artificially deflate metrics
                        atsMeasurement.discardMeasurement();
                        return [2 /*return*/, cachedResponse];
                    }
                });
            });
        };
        /**
         * Silently acquire an access token for a given set of scopes. Will use cached token if available, otherwise will attempt to acquire a new token from the network via refresh token.
         * @param {@link (SilentRequest:type)}
         * @param {@link (AccountInfo:type)}
         * @returns {Promise.<AuthenticationResult>} - a promise that is fulfilled when this function has completed, or rejected if an error was raised. Returns the {@link AuthResponse}
         */
        PublicClientApplication.prototype.acquireTokenSilentAsync = function (request, account) {
            return __awaiter$1(this, void 0, void 0, function () {
                var astsAsyncMeasurement, result, silentRequest, silentCacheClient, silentRequest_1;
                var _this = this;
                return __generator$1(this, function (_a) {
                    switch (_a.label) {
                        case 0:
                            this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_START, InteractionType.Silent, request);
                            astsAsyncMeasurement = this.performanceClient.startMeasurement(PerformanceEvents.AcquireTokenSilentAsync, request.correlationId);
                            if (!(NativeMessageHandler.isNativeAvailable(this.config, this.logger, this.nativeExtensionProvider, request.authenticationScheme) && account.nativeAccountId)) return [3 /*break*/, 1];
                            this.logger.verbose("acquireTokenSilent - attempting to acquire token from native platform");
                            silentRequest = __assign$1(__assign$1({}, request), { account: account });
                            result = this.acquireTokenNative(silentRequest, ApiId.acquireTokenSilent_silentFlow).catch(function (e) { return __awaiter$1(_this, void 0, void 0, function () {
                                var silentIframeClient;
                                return __generator$1(this, function (_a) {
                                    // If native token acquisition fails for availability reasons fallback to web flow
                                    if (e instanceof NativeAuthError && e.isFatal()) {
                                        this.logger.verbose("acquireTokenSilent - native platform unavailable, falling back to web flow");
                                        this.nativeExtensionProvider = undefined; // Prevent future requests from continuing to attempt 
                                        silentIframeClient = this.createSilentIframeClient(request.correlationId);
                                        return [2 /*return*/, silentIframeClient.acquireToken(request)];
                                    }
                                    throw e;
                                });
                            }); });
                            return [3 /*break*/, 3];
                        case 1:
                            this.logger.verbose("acquireTokenSilent - attempting to acquire token from web flow");
                            silentCacheClient = this.createSilentCacheClient(request.correlationId);
                            return [4 /*yield*/, silentCacheClient.initializeSilentRequest(request, account)];
                        case 2:
                            silentRequest_1 = _a.sent();
                            result = silentCacheClient.acquireToken(silentRequest_1).catch(function () { return __awaiter$1(_this, void 0, void 0, function () {
                                return __generator$1(this, function (_a) {
                                    return [2 /*return*/, this.acquireTokenByRefreshToken(silentRequest_1)];
                                });
                            }); });
                            _a.label = 3;
                        case 3: return [2 /*return*/, result.then(function (response) {
                                _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_SUCCESS, InteractionType.Silent, response);
                                astsAsyncMeasurement.endMeasurement({
                                    success: true,
                                    fromCache: response.fromCache,
                                    isNativeBroker: response.fromNativeBroker
                                });
                                return response;
                            }).catch(function (tokenRenewalError) {
                                _this.eventHandler.emitEvent(EventType.ACQUIRE_TOKEN_FAILURE, InteractionType.Silent, null, tokenRenewalError);
                                astsAsyncMeasurement.endMeasurement({
                                    errorCode: tokenRenewalError.errorCode,
                                    subErrorCode: tokenRenewalError.subError,
                                    success: false
                                });
                                throw tokenRenewalError;
                            })];
                    }
                });
            });
        };
        return PublicClientApplication;
    }(ClientApplication));

    const isDelegatedAuthentictionOptions = (options) => {
        return "getToken" in options;
    };

    let settings;
    const configureSettings = (options) => {
        var _a, _b, _c;
        const authOptions = isDelegatedAuthentictionOptions(options.authentication)
            ? options.authentication
            : Object.assign(Object.assign({}, options.authentication), { appIdURI: (_a = options.authentication.appIdURI) !== null && _a !== void 0 ? _a : "api://rpaforms.com/b782e2e8-9682-4898-b211-a304714f4f6b" });
        settings = Object.assign(Object.assign({}, options), { authentication: authOptions, serviceUrl: (_b = options.serviceUrl) !== null && _b !== void 0 ? _b : "https://app.rpaforms.com/api", publicFillUrl: (_c = options.publicFillUrl) !== null && _c !== void 0 ? _c : "https://app.rpaforms.com/public/fill" });
    };
    const getAppSettings = () => {
        if (!settings)
            throw new Error("app settings not configured");
        return settings;
    };
    const getAuthSettings = () => {
        if (!settings)
            throw new Error("app settings not configured");
        return settings.authentication;
    };

    class AccountNotFoundError extends Error {
        get isAccountNotFound() {
            return true;
        }
    }

    const msalConfig = {
        cache: {
            cacheLocation: "sessionStorage",
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

    // common configuration parameters are located at msalConfig.js
    let myMSALObj;
    const tokenRequest = {
        scopes: [],
    };
    let authMode = undefined;
    const configureAuth = () => {
        const { authentication: options } = getAppSettings();
        if (isDelegatedAuthentictionOptions(options)) {
            authMode = "delegated";
            return;
        }
        authMode = "sdk";
        const authConfig = Object.assign(Object.assign({}, msalConfig), { auth: {
                clientId: options.clientId,
                authority: options.authority,
                redirectUri: options.redirectUri,
            } });
        try {
            myMSALObj = new PublicClientApplication(authConfig);
        }
        catch (e) {
            console.error("Error initializing MSAL. Please verify it's loaded before calling the sdk.", e);
            throw new Error("Unable to configure authentication.");
        }
        let tokenScope = `${options.appIdURI}/access_as_user`;
        if (!tokenScope.endsWith("")) {
            tokenScope = tokenScope + "/access_as_user";
        }
        tokenRequest.scopes.push(tokenScope);
    };

    // common configuration parameters are located at msalConfig.js
    let username = "";
    let forceLogin = false;
    const selectAccount = () => {
        if (authMode === "delegated") {
            throw new Error("Cannot call selectAccount when authentication method is delegated.");
        }
        const currentAccounts = myMSALObj.getAllAccounts();
        if (currentAccounts.length === 0) {
            username = "";
            return;
        }
        else if (currentAccounts.length > 1) {
            // Add choose account code here
            username = "";
            console.warn("Multiple accounts detected.");
        }
        else if (currentAccounts.length === 1) {
            username = currentAccounts[0].username;
        }
    };
    const isAutenticated = () => {
        if (authMode === "delegated") {
            throw new Error("Cannot call isAutenticated when authentication method is delegated.");
        }
        return !!username;
    };
    const needsExplicitLogin = () => {
        if (authMode === "delegated") {
            throw new Error("Cannot call needsExplicitLogin when authentication method is delegated.");
        }
        return forceLogin;
    };
    const signIn = () => __awaiter$2(void 0, void 0, void 0, function* () {
        var _a;
        if (authMode === "delegated") {
            throw new Error("Cannot call signIn when authentication method is delegated.");
        }
        if (!myMSALObj)
            throw new Error("Authorization not configured. Please call configureAuth before signIn.");
        const request = forceLogin
            ? Object.assign(Object.assign({}, tokenRequest), { prompt: "login" }) : tokenRequest;
        try {
            const result = yield myMSALObj.loginPopup(request);
            if (!result.account)
                throw new Error("No account info after login"); //this shouldn't happen
            forceLogin = false;
            username = (_a = result.account) === null || _a === void 0 ? void 0 : _a.username;
        }
        catch (e) {
            forceLogin = true;
            throw e;
        }
    });
    const signOut = () => __awaiter$2(void 0, void 0, void 0, function* () {
        if (authMode === "delegated") {
            throw new Error("Cannot call signOut when authentication method is delegated.");
        }
        const logoutRequest = {
            account: myMSALObj.getAccountByUsername(username),
        };
        yield myMSALObj.logoutPopup(logoutRequest);
        username = "";
        forceLogin = false;
    });
    const getTokenPopup = () => __awaiter$2(void 0, void 0, void 0, function* () {
        var _b, _c;
        if (authMode === "delegated") {
            const authSettings = getAuthSettings();
            const token = yield authSettings.getToken();
            return token;
        }
        /**
         * See here for more info on account retrieval:
         * https://github.com/AzureAD/microsoft-authentication-library-for-js/blob/dev/lib/msal-common/docs/Accounts.md
         */
        if (!username) {
            throw new Error("Not autenticated.");
        }
        const account = myMSALObj.getAccountByUsername(username);
        if (!account) {
            throw new AccountNotFoundError("Account not found.");
        }
        const request = Object.assign({ account }, tokenRequest);
        try {
            return (_b = (yield myMSALObj.acquireTokenSilent(request))) === null || _b === void 0 ? void 0 : _b.accessToken;
        }
        catch (e) {
            console.warn("silent token acquisition fails. acquiring token using popup");
            if (!(e instanceof InteractionRequiredAuthError)) {
                console.warn(e);
                return;
            }
        }
        // fallback to interaction when silent call fails
        try {
            return (_c = (yield myMSALObj.acquireTokenPopup(request))) === null || _c === void 0 ? void 0 : _c.accessToken;
        }
        catch (error) {
            console.error(error);
        }
    });
    const withAuthentication = (func) => {
        if (authMode === "delegated") {
            throw new Error("Cannot call withAuthentication when authentication method is delegated.");
        }
        return () => __awaiter$2(void 0, void 0, void 0, function* () {
            if (!isAutenticated()) {
                yield signIn();
            }
            yield func();
        });
    };

    function getDefaultExportFromCjs (x) {
    	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
    }

    var axios$3 = {exports: {}};

    var axios$2 = {exports: {}};

    var bind$2 = function bind(fn, thisArg) {
      return function wrap() {
        var args = new Array(arguments.length);
        for (var i = 0; i < args.length; i++) {
          args[i] = arguments[i];
        }
        return fn.apply(thisArg, args);
      };
    };

    var bind$1 = bind$2;

    // utils is a library of generic helper functions non-specific to axios

    var toString = Object.prototype.toString;

    /**
     * Determine if a value is an Array
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Array, otherwise false
     */
    function isArray(val) {
      return Array.isArray(val);
    }

    /**
     * Determine if a value is undefined
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if the value is undefined, otherwise false
     */
    function isUndefined(val) {
      return typeof val === 'undefined';
    }

    /**
     * Determine if a value is a Buffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Buffer, otherwise false
     */
    function isBuffer(val) {
      return val !== null && !isUndefined(val) && val.constructor !== null && !isUndefined(val.constructor)
        && typeof val.constructor.isBuffer === 'function' && val.constructor.isBuffer(val);
    }

    /**
     * Determine if a value is an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an ArrayBuffer, otherwise false
     */
    function isArrayBuffer(val) {
      return toString.call(val) === '[object ArrayBuffer]';
    }

    /**
     * Determine if a value is a FormData
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an FormData, otherwise false
     */
    function isFormData(val) {
      return toString.call(val) === '[object FormData]';
    }

    /**
     * Determine if a value is a view on an ArrayBuffer
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a view on an ArrayBuffer, otherwise false
     */
    function isArrayBufferView(val) {
      var result;
      if ((typeof ArrayBuffer !== 'undefined') && (ArrayBuffer.isView)) {
        result = ArrayBuffer.isView(val);
      } else {
        result = (val) && (val.buffer) && (isArrayBuffer(val.buffer));
      }
      return result;
    }

    /**
     * Determine if a value is a String
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a String, otherwise false
     */
    function isString(val) {
      return typeof val === 'string';
    }

    /**
     * Determine if a value is a Number
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Number, otherwise false
     */
    function isNumber(val) {
      return typeof val === 'number';
    }

    /**
     * Determine if a value is an Object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is an Object, otherwise false
     */
    function isObject(val) {
      return val !== null && typeof val === 'object';
    }

    /**
     * Determine if a value is a plain Object
     *
     * @param {Object} val The value to test
     * @return {boolean} True if value is a plain Object, otherwise false
     */
    function isPlainObject(val) {
      if (toString.call(val) !== '[object Object]') {
        return false;
      }

      var prototype = Object.getPrototypeOf(val);
      return prototype === null || prototype === Object.prototype;
    }

    /**
     * Determine if a value is a Date
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Date, otherwise false
     */
    function isDate(val) {
      return toString.call(val) === '[object Date]';
    }

    /**
     * Determine if a value is a File
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a File, otherwise false
     */
    function isFile(val) {
      return toString.call(val) === '[object File]';
    }

    /**
     * Determine if a value is a Blob
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Blob, otherwise false
     */
    function isBlob(val) {
      return toString.call(val) === '[object Blob]';
    }

    /**
     * Determine if a value is a Function
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Function, otherwise false
     */
    function isFunction(val) {
      return toString.call(val) === '[object Function]';
    }

    /**
     * Determine if a value is a Stream
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a Stream, otherwise false
     */
    function isStream(val) {
      return isObject(val) && isFunction(val.pipe);
    }

    /**
     * Determine if a value is a URLSearchParams object
     *
     * @param {Object} val The value to test
     * @returns {boolean} True if value is a URLSearchParams object, otherwise false
     */
    function isURLSearchParams(val) {
      return toString.call(val) === '[object URLSearchParams]';
    }

    /**
     * Trim excess whitespace off the beginning and end of a string
     *
     * @param {String} str The String to trim
     * @returns {String} The String freed of excess whitespace
     */
    function trim(str) {
      return str.trim ? str.trim() : str.replace(/^\s+|\s+$/g, '');
    }

    /**
     * Determine if we're running in a standard browser environment
     *
     * This allows axios to run in a web worker, and react-native.
     * Both environments support XMLHttpRequest, but not fully standard globals.
     *
     * web workers:
     *  typeof window -> undefined
     *  typeof document -> undefined
     *
     * react-native:
     *  navigator.product -> 'ReactNative'
     * nativescript
     *  navigator.product -> 'NativeScript' or 'NS'
     */
    function isStandardBrowserEnv() {
      if (typeof navigator !== 'undefined' && (navigator.product === 'ReactNative' ||
                                               navigator.product === 'NativeScript' ||
                                               navigator.product === 'NS')) {
        return false;
      }
      return (
        typeof window !== 'undefined' &&
        typeof document !== 'undefined'
      );
    }

    /**
     * Iterate over an Array or an Object invoking a function for each item.
     *
     * If `obj` is an Array callback will be called passing
     * the value, index, and complete array for each item.
     *
     * If 'obj' is an Object callback will be called passing
     * the value, key, and complete object for each property.
     *
     * @param {Object|Array} obj The object to iterate
     * @param {Function} fn The callback to invoke for each item
     */
    function forEach(obj, fn) {
      // Don't bother if no value provided
      if (obj === null || typeof obj === 'undefined') {
        return;
      }

      // Force an array if not already something iterable
      if (typeof obj !== 'object') {
        /*eslint no-param-reassign:0*/
        obj = [obj];
      }

      if (isArray(obj)) {
        // Iterate over array values
        for (var i = 0, l = obj.length; i < l; i++) {
          fn.call(null, obj[i], i, obj);
        }
      } else {
        // Iterate over object keys
        for (var key in obj) {
          if (Object.prototype.hasOwnProperty.call(obj, key)) {
            fn.call(null, obj[key], key, obj);
          }
        }
      }
    }

    /**
     * Accepts varargs expecting each argument to be an object, then
     * immutably merges the properties of each object and returns result.
     *
     * When multiple objects contain the same key the later object in
     * the arguments list will take precedence.
     *
     * Example:
     *
     * ```js
     * var result = merge({foo: 123}, {foo: 456});
     * console.log(result.foo); // outputs 456
     * ```
     *
     * @param {Object} obj1 Object to merge
     * @returns {Object} Result of all merge properties
     */
    function merge(/* obj1, obj2, obj3, ... */) {
      var result = {};
      function assignValue(val, key) {
        if (isPlainObject(result[key]) && isPlainObject(val)) {
          result[key] = merge(result[key], val);
        } else if (isPlainObject(val)) {
          result[key] = merge({}, val);
        } else if (isArray(val)) {
          result[key] = val.slice();
        } else {
          result[key] = val;
        }
      }

      for (var i = 0, l = arguments.length; i < l; i++) {
        forEach(arguments[i], assignValue);
      }
      return result;
    }

    /**
     * Extends object a by mutably adding to it the properties of object b.
     *
     * @param {Object} a The object to be extended
     * @param {Object} b The object to copy properties from
     * @param {Object} thisArg The object to bind function to
     * @return {Object} The resulting value of object a
     */
    function extend(a, b, thisArg) {
      forEach(b, function assignValue(val, key) {
        if (thisArg && typeof val === 'function') {
          a[key] = bind$1(val, thisArg);
        } else {
          a[key] = val;
        }
      });
      return a;
    }

    /**
     * Remove byte order marker. This catches EF BB BF (the UTF-8 BOM)
     *
     * @param {string} content with BOM
     * @return {string} content value without BOM
     */
    function stripBOM(content) {
      if (content.charCodeAt(0) === 0xFEFF) {
        content = content.slice(1);
      }
      return content;
    }

    var utils$9 = {
      isArray: isArray,
      isArrayBuffer: isArrayBuffer,
      isBuffer: isBuffer,
      isFormData: isFormData,
      isArrayBufferView: isArrayBufferView,
      isString: isString,
      isNumber: isNumber,
      isObject: isObject,
      isPlainObject: isPlainObject,
      isUndefined: isUndefined,
      isDate: isDate,
      isFile: isFile,
      isBlob: isBlob,
      isFunction: isFunction,
      isStream: isStream,
      isURLSearchParams: isURLSearchParams,
      isStandardBrowserEnv: isStandardBrowserEnv,
      forEach: forEach,
      merge: merge,
      extend: extend,
      trim: trim,
      stripBOM: stripBOM
    };

    var utils$8 = utils$9;

    function encode(val) {
      return encodeURIComponent(val).
        replace(/%3A/gi, ':').
        replace(/%24/g, '$').
        replace(/%2C/gi, ',').
        replace(/%20/g, '+').
        replace(/%5B/gi, '[').
        replace(/%5D/gi, ']');
    }

    /**
     * Build a URL by appending params to the end
     *
     * @param {string} url The base of the url (e.g., http://www.google.com)
     * @param {object} [params] The params to be appended
     * @returns {string} The formatted url
     */
    var buildURL$1 = function buildURL(url, params, paramsSerializer) {
      /*eslint no-param-reassign:0*/
      if (!params) {
        return url;
      }

      var serializedParams;
      if (paramsSerializer) {
        serializedParams = paramsSerializer(params);
      } else if (utils$8.isURLSearchParams(params)) {
        serializedParams = params.toString();
      } else {
        var parts = [];

        utils$8.forEach(params, function serialize(val, key) {
          if (val === null || typeof val === 'undefined') {
            return;
          }

          if (utils$8.isArray(val)) {
            key = key + '[]';
          } else {
            val = [val];
          }

          utils$8.forEach(val, function parseValue(v) {
            if (utils$8.isDate(v)) {
              v = v.toISOString();
            } else if (utils$8.isObject(v)) {
              v = JSON.stringify(v);
            }
            parts.push(encode(key) + '=' + encode(v));
          });
        });

        serializedParams = parts.join('&');
      }

      if (serializedParams) {
        var hashmarkIndex = url.indexOf('#');
        if (hashmarkIndex !== -1) {
          url = url.slice(0, hashmarkIndex);
        }

        url += (url.indexOf('?') === -1 ? '?' : '&') + serializedParams;
      }

      return url;
    };

    var utils$7 = utils$9;

    function InterceptorManager$1() {
      this.handlers = [];
    }

    /**
     * Add a new interceptor to the stack
     *
     * @param {Function} fulfilled The function to handle `then` for a `Promise`
     * @param {Function} rejected The function to handle `reject` for a `Promise`
     *
     * @return {Number} An ID used to remove interceptor later
     */
    InterceptorManager$1.prototype.use = function use(fulfilled, rejected, options) {
      this.handlers.push({
        fulfilled: fulfilled,
        rejected: rejected,
        synchronous: options ? options.synchronous : false,
        runWhen: options ? options.runWhen : null
      });
      return this.handlers.length - 1;
    };

    /**
     * Remove an interceptor from the stack
     *
     * @param {Number} id The ID that was returned by `use`
     */
    InterceptorManager$1.prototype.eject = function eject(id) {
      if (this.handlers[id]) {
        this.handlers[id] = null;
      }
    };

    /**
     * Iterate over all the registered interceptors
     *
     * This method is particularly useful for skipping over any
     * interceptors that may have become `null` calling `eject`.
     *
     * @param {Function} fn The function to call for each interceptor
     */
    InterceptorManager$1.prototype.forEach = function forEach(fn) {
      utils$7.forEach(this.handlers, function forEachHandler(h) {
        if (h !== null) {
          fn(h);
        }
      });
    };

    var InterceptorManager_1 = InterceptorManager$1;

    var utils$6 = utils$9;

    var normalizeHeaderName$1 = function normalizeHeaderName(headers, normalizedName) {
      utils$6.forEach(headers, function processHeader(value, name) {
        if (name !== normalizedName && name.toUpperCase() === normalizedName.toUpperCase()) {
          headers[normalizedName] = value;
          delete headers[name];
        }
      });
    };

    /**
     * Update an Error with the specified config, error code, and response.
     *
     * @param {Error} error The error to update.
     * @param {Object} config The config.
     * @param {string} [code] The error code (for example, 'ECONNABORTED').
     * @param {Object} [request] The request.
     * @param {Object} [response] The response.
     * @returns {Error} The error.
     */
    var enhanceError$1 = function enhanceError(error, config, code, request, response) {
      error.config = config;
      if (code) {
        error.code = code;
      }

      error.request = request;
      error.response = response;
      error.isAxiosError = true;

      error.toJSON = function toJSON() {
        return {
          // Standard
          message: this.message,
          name: this.name,
          // Microsoft
          description: this.description,
          number: this.number,
          // Mozilla
          fileName: this.fileName,
          lineNumber: this.lineNumber,
          columnNumber: this.columnNumber,
          stack: this.stack,
          // Axios
          config: this.config,
          code: this.code,
          status: this.response && this.response.status ? this.response.status : null
        };
      };
      return error;
    };

    var transitional = {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false
    };

    var createError;
    var hasRequiredCreateError;

    function requireCreateError () {
    	if (hasRequiredCreateError) return createError;
    	hasRequiredCreateError = 1;

    	var enhanceError = enhanceError$1;

    	/**
    	 * Create an Error with the specified message, config, error code, request and response.
    	 *
    	 * @param {string} message The error message.
    	 * @param {Object} config The config.
    	 * @param {string} [code] The error code (for example, 'ECONNABORTED').
    	 * @param {Object} [request] The request.
    	 * @param {Object} [response] The response.
    	 * @returns {Error} The created error.
    	 */
    	createError = function createError(message, config, code, request, response) {
    	  var error = new Error(message);
    	  return enhanceError(error, config, code, request, response);
    	};
    	return createError;
    }

    var settle;
    var hasRequiredSettle;

    function requireSettle () {
    	if (hasRequiredSettle) return settle;
    	hasRequiredSettle = 1;

    	var createError = requireCreateError();

    	/**
    	 * Resolve or reject a Promise based on response status.
    	 *
    	 * @param {Function} resolve A function that resolves the promise.
    	 * @param {Function} reject A function that rejects the promise.
    	 * @param {object} response The response.
    	 */
    	settle = function settle(resolve, reject, response) {
    	  var validateStatus = response.config.validateStatus;
    	  if (!response.status || !validateStatus || validateStatus(response.status)) {
    	    resolve(response);
    	  } else {
    	    reject(createError(
    	      'Request failed with status code ' + response.status,
    	      response.config,
    	      null,
    	      response.request,
    	      response
    	    ));
    	  }
    	};
    	return settle;
    }

    var cookies;
    var hasRequiredCookies;

    function requireCookies () {
    	if (hasRequiredCookies) return cookies;
    	hasRequiredCookies = 1;

    	var utils = utils$9;

    	cookies = (
    	  utils.isStandardBrowserEnv() ?

    	  // Standard browser envs support document.cookie
    	    (function standardBrowserEnv() {
    	      return {
    	        write: function write(name, value, expires, path, domain, secure) {
    	          var cookie = [];
    	          cookie.push(name + '=' + encodeURIComponent(value));

    	          if (utils.isNumber(expires)) {
    	            cookie.push('expires=' + new Date(expires).toGMTString());
    	          }

    	          if (utils.isString(path)) {
    	            cookie.push('path=' + path);
    	          }

    	          if (utils.isString(domain)) {
    	            cookie.push('domain=' + domain);
    	          }

    	          if (secure === true) {
    	            cookie.push('secure');
    	          }

    	          document.cookie = cookie.join('; ');
    	        },

    	        read: function read(name) {
    	          var match = document.cookie.match(new RegExp('(^|;\\s*)(' + name + ')=([^;]*)'));
    	          return (match ? decodeURIComponent(match[3]) : null);
    	        },

    	        remove: function remove(name) {
    	          this.write(name, '', Date.now() - 86400000);
    	        }
    	      };
    	    })() :

    	  // Non standard browser env (web workers, react-native) lack needed support.
    	    (function nonStandardBrowserEnv() {
    	      return {
    	        write: function write() {},
    	        read: function read() { return null; },
    	        remove: function remove() {}
    	      };
    	    })()
    	);
    	return cookies;
    }

    var isAbsoluteURL;
    var hasRequiredIsAbsoluteURL;

    function requireIsAbsoluteURL () {
    	if (hasRequiredIsAbsoluteURL) return isAbsoluteURL;
    	hasRequiredIsAbsoluteURL = 1;

    	/**
    	 * Determines whether the specified URL is absolute
    	 *
    	 * @param {string} url The URL to test
    	 * @returns {boolean} True if the specified URL is absolute, otherwise false
    	 */
    	isAbsoluteURL = function isAbsoluteURL(url) {
    	  // A URL is considered absolute if it begins with "<scheme>://" or "//" (protocol-relative URL).
    	  // RFC 3986 defines scheme name as a sequence of characters beginning with a letter and followed
    	  // by any combination of letters, digits, plus, period, or hyphen.
    	  return /^([a-z][a-z\d+\-.]*:)?\/\//i.test(url);
    	};
    	return isAbsoluteURL;
    }

    var combineURLs;
    var hasRequiredCombineURLs;

    function requireCombineURLs () {
    	if (hasRequiredCombineURLs) return combineURLs;
    	hasRequiredCombineURLs = 1;

    	/**
    	 * Creates a new URL by combining the specified URLs
    	 *
    	 * @param {string} baseURL The base URL
    	 * @param {string} relativeURL The relative URL
    	 * @returns {string} The combined URL
    	 */
    	combineURLs = function combineURLs(baseURL, relativeURL) {
    	  return relativeURL
    	    ? baseURL.replace(/\/+$/, '') + '/' + relativeURL.replace(/^\/+/, '')
    	    : baseURL;
    	};
    	return combineURLs;
    }

    var buildFullPath;
    var hasRequiredBuildFullPath;

    function requireBuildFullPath () {
    	if (hasRequiredBuildFullPath) return buildFullPath;
    	hasRequiredBuildFullPath = 1;

    	var isAbsoluteURL = requireIsAbsoluteURL();
    	var combineURLs = requireCombineURLs();

    	/**
    	 * Creates a new URL by combining the baseURL with the requestedURL,
    	 * only when the requestedURL is not already an absolute URL.
    	 * If the requestURL is absolute, this function returns the requestedURL untouched.
    	 *
    	 * @param {string} baseURL The base URL
    	 * @param {string} requestedURL Absolute or relative URL to combine
    	 * @returns {string} The combined full path
    	 */
    	buildFullPath = function buildFullPath(baseURL, requestedURL) {
    	  if (baseURL && !isAbsoluteURL(requestedURL)) {
    	    return combineURLs(baseURL, requestedURL);
    	  }
    	  return requestedURL;
    	};
    	return buildFullPath;
    }

    var parseHeaders;
    var hasRequiredParseHeaders;

    function requireParseHeaders () {
    	if (hasRequiredParseHeaders) return parseHeaders;
    	hasRequiredParseHeaders = 1;

    	var utils = utils$9;

    	// Headers whose duplicates are ignored by node
    	// c.f. https://nodejs.org/api/http.html#http_message_headers
    	var ignoreDuplicateOf = [
    	  'age', 'authorization', 'content-length', 'content-type', 'etag',
    	  'expires', 'from', 'host', 'if-modified-since', 'if-unmodified-since',
    	  'last-modified', 'location', 'max-forwards', 'proxy-authorization',
    	  'referer', 'retry-after', 'user-agent'
    	];

    	/**
    	 * Parse headers into an object
    	 *
    	 * ```
    	 * Date: Wed, 27 Aug 2014 08:58:49 GMT
    	 * Content-Type: application/json
    	 * Connection: keep-alive
    	 * Transfer-Encoding: chunked
    	 * ```
    	 *
    	 * @param {String} headers Headers needing to be parsed
    	 * @returns {Object} Headers parsed into an object
    	 */
    	parseHeaders = function parseHeaders(headers) {
    	  var parsed = {};
    	  var key;
    	  var val;
    	  var i;

    	  if (!headers) { return parsed; }

    	  utils.forEach(headers.split('\n'), function parser(line) {
    	    i = line.indexOf(':');
    	    key = utils.trim(line.substr(0, i)).toLowerCase();
    	    val = utils.trim(line.substr(i + 1));

    	    if (key) {
    	      if (parsed[key] && ignoreDuplicateOf.indexOf(key) >= 0) {
    	        return;
    	      }
    	      if (key === 'set-cookie') {
    	        parsed[key] = (parsed[key] ? parsed[key] : []).concat([val]);
    	      } else {
    	        parsed[key] = parsed[key] ? parsed[key] + ', ' + val : val;
    	      }
    	    }
    	  });

    	  return parsed;
    	};
    	return parseHeaders;
    }

    var isURLSameOrigin;
    var hasRequiredIsURLSameOrigin;

    function requireIsURLSameOrigin () {
    	if (hasRequiredIsURLSameOrigin) return isURLSameOrigin;
    	hasRequiredIsURLSameOrigin = 1;

    	var utils = utils$9;

    	isURLSameOrigin = (
    	  utils.isStandardBrowserEnv() ?

    	  // Standard browser envs have full support of the APIs needed to test
    	  // whether the request URL is of the same origin as current location.
    	    (function standardBrowserEnv() {
    	      var msie = /(msie|trident)/i.test(navigator.userAgent);
    	      var urlParsingNode = document.createElement('a');
    	      var originURL;

    	      /**
    	    * Parse a URL to discover it's components
    	    *
    	    * @param {String} url The URL to be parsed
    	    * @returns {Object}
    	    */
    	      function resolveURL(url) {
    	        var href = url;

    	        if (msie) {
    	        // IE needs attribute set twice to normalize properties
    	          urlParsingNode.setAttribute('href', href);
    	          href = urlParsingNode.href;
    	        }

    	        urlParsingNode.setAttribute('href', href);

    	        // urlParsingNode provides the UrlUtils interface - http://url.spec.whatwg.org/#urlutils
    	        return {
    	          href: urlParsingNode.href,
    	          protocol: urlParsingNode.protocol ? urlParsingNode.protocol.replace(/:$/, '') : '',
    	          host: urlParsingNode.host,
    	          search: urlParsingNode.search ? urlParsingNode.search.replace(/^\?/, '') : '',
    	          hash: urlParsingNode.hash ? urlParsingNode.hash.replace(/^#/, '') : '',
    	          hostname: urlParsingNode.hostname,
    	          port: urlParsingNode.port,
    	          pathname: (urlParsingNode.pathname.charAt(0) === '/') ?
    	            urlParsingNode.pathname :
    	            '/' + urlParsingNode.pathname
    	        };
    	      }

    	      originURL = resolveURL(window.location.href);

    	      /**
    	    * Determine if a URL shares the same origin as the current location
    	    *
    	    * @param {String} requestURL The URL to test
    	    * @returns {boolean} True if URL shares the same origin, otherwise false
    	    */
    	      return function isURLSameOrigin(requestURL) {
    	        var parsed = (utils.isString(requestURL)) ? resolveURL(requestURL) : requestURL;
    	        return (parsed.protocol === originURL.protocol &&
    	            parsed.host === originURL.host);
    	      };
    	    })() :

    	  // Non standard browser envs (web workers, react-native) lack needed support.
    	    (function nonStandardBrowserEnv() {
    	      return function isURLSameOrigin() {
    	        return true;
    	      };
    	    })()
    	);
    	return isURLSameOrigin;
    }

    var Cancel_1;
    var hasRequiredCancel;

    function requireCancel () {
    	if (hasRequiredCancel) return Cancel_1;
    	hasRequiredCancel = 1;

    	/**
    	 * A `Cancel` is an object that is thrown when an operation is canceled.
    	 *
    	 * @class
    	 * @param {string=} message The message.
    	 */
    	function Cancel(message) {
    	  this.message = message;
    	}

    	Cancel.prototype.toString = function toString() {
    	  return 'Cancel' + (this.message ? ': ' + this.message : '');
    	};

    	Cancel.prototype.__CANCEL__ = true;

    	Cancel_1 = Cancel;
    	return Cancel_1;
    }

    var xhr;
    var hasRequiredXhr;

    function requireXhr () {
    	if (hasRequiredXhr) return xhr;
    	hasRequiredXhr = 1;

    	var utils = utils$9;
    	var settle = requireSettle();
    	var cookies = requireCookies();
    	var buildURL = buildURL$1;
    	var buildFullPath = requireBuildFullPath();
    	var parseHeaders = requireParseHeaders();
    	var isURLSameOrigin = requireIsURLSameOrigin();
    	var createError = requireCreateError();
    	var transitionalDefaults = transitional;
    	var Cancel = requireCancel();

    	xhr = function xhrAdapter(config) {
    	  return new Promise(function dispatchXhrRequest(resolve, reject) {
    	    var requestData = config.data;
    	    var requestHeaders = config.headers;
    	    var responseType = config.responseType;
    	    var onCanceled;
    	    function done() {
    	      if (config.cancelToken) {
    	        config.cancelToken.unsubscribe(onCanceled);
    	      }

    	      if (config.signal) {
    	        config.signal.removeEventListener('abort', onCanceled);
    	      }
    	    }

    	    if (utils.isFormData(requestData)) {
    	      delete requestHeaders['Content-Type']; // Let the browser set it
    	    }

    	    var request = new XMLHttpRequest();

    	    // HTTP basic authentication
    	    if (config.auth) {
    	      var username = config.auth.username || '';
    	      var password = config.auth.password ? unescape(encodeURIComponent(config.auth.password)) : '';
    	      requestHeaders.Authorization = 'Basic ' + btoa(username + ':' + password);
    	    }

    	    var fullPath = buildFullPath(config.baseURL, config.url);
    	    request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.paramsSerializer), true);

    	    // Set the request timeout in MS
    	    request.timeout = config.timeout;

    	    function onloadend() {
    	      if (!request) {
    	        return;
    	      }
    	      // Prepare the response
    	      var responseHeaders = 'getAllResponseHeaders' in request ? parseHeaders(request.getAllResponseHeaders()) : null;
    	      var responseData = !responseType || responseType === 'text' ||  responseType === 'json' ?
    	        request.responseText : request.response;
    	      var response = {
    	        data: responseData,
    	        status: request.status,
    	        statusText: request.statusText,
    	        headers: responseHeaders,
    	        config: config,
    	        request: request
    	      };

    	      settle(function _resolve(value) {
    	        resolve(value);
    	        done();
    	      }, function _reject(err) {
    	        reject(err);
    	        done();
    	      }, response);

    	      // Clean up request
    	      request = null;
    	    }

    	    if ('onloadend' in request) {
    	      // Use onloadend if available
    	      request.onloadend = onloadend;
    	    } else {
    	      // Listen for ready state to emulate onloadend
    	      request.onreadystatechange = function handleLoad() {
    	        if (!request || request.readyState !== 4) {
    	          return;
    	        }

    	        // The request errored out and we didn't get a response, this will be
    	        // handled by onerror instead
    	        // With one exception: request that using file: protocol, most browsers
    	        // will return status as 0 even though it's a successful request
    	        if (request.status === 0 && !(request.responseURL && request.responseURL.indexOf('file:') === 0)) {
    	          return;
    	        }
    	        // readystate handler is calling before onerror or ontimeout handlers,
    	        // so we should call onloadend on the next 'tick'
    	        setTimeout(onloadend);
    	      };
    	    }

    	    // Handle browser request cancellation (as opposed to a manual cancellation)
    	    request.onabort = function handleAbort() {
    	      if (!request) {
    	        return;
    	      }

    	      reject(createError('Request aborted', config, 'ECONNABORTED', request));

    	      // Clean up request
    	      request = null;
    	    };

    	    // Handle low level network errors
    	    request.onerror = function handleError() {
    	      // Real errors are hidden from us by the browser
    	      // onerror should only fire if it's a network error
    	      reject(createError('Network Error', config, null, request));

    	      // Clean up request
    	      request = null;
    	    };

    	    // Handle timeout
    	    request.ontimeout = function handleTimeout() {
    	      var timeoutErrorMessage = config.timeout ? 'timeout of ' + config.timeout + 'ms exceeded' : 'timeout exceeded';
    	      var transitional = config.transitional || transitionalDefaults;
    	      if (config.timeoutErrorMessage) {
    	        timeoutErrorMessage = config.timeoutErrorMessage;
    	      }
    	      reject(createError(
    	        timeoutErrorMessage,
    	        config,
    	        transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
    	        request));

    	      // Clean up request
    	      request = null;
    	    };

    	    // Add xsrf header
    	    // This is only done if running in a standard browser environment.
    	    // Specifically not if we're in a web worker, or react-native.
    	    if (utils.isStandardBrowserEnv()) {
    	      // Add xsrf header
    	      var xsrfValue = (config.withCredentials || isURLSameOrigin(fullPath)) && config.xsrfCookieName ?
    	        cookies.read(config.xsrfCookieName) :
    	        undefined;

    	      if (xsrfValue) {
    	        requestHeaders[config.xsrfHeaderName] = xsrfValue;
    	      }
    	    }

    	    // Add headers to the request
    	    if ('setRequestHeader' in request) {
    	      utils.forEach(requestHeaders, function setRequestHeader(val, key) {
    	        if (typeof requestData === 'undefined' && key.toLowerCase() === 'content-type') {
    	          // Remove Content-Type if data is undefined
    	          delete requestHeaders[key];
    	        } else {
    	          // Otherwise add header to the request
    	          request.setRequestHeader(key, val);
    	        }
    	      });
    	    }

    	    // Add withCredentials to request if needed
    	    if (!utils.isUndefined(config.withCredentials)) {
    	      request.withCredentials = !!config.withCredentials;
    	    }

    	    // Add responseType to request if needed
    	    if (responseType && responseType !== 'json') {
    	      request.responseType = config.responseType;
    	    }

    	    // Handle progress if needed
    	    if (typeof config.onDownloadProgress === 'function') {
    	      request.addEventListener('progress', config.onDownloadProgress);
    	    }

    	    // Not all browsers support upload events
    	    if (typeof config.onUploadProgress === 'function' && request.upload) {
    	      request.upload.addEventListener('progress', config.onUploadProgress);
    	    }

    	    if (config.cancelToken || config.signal) {
    	      // Handle cancellation
    	      // eslint-disable-next-line func-names
    	      onCanceled = function(cancel) {
    	        if (!request) {
    	          return;
    	        }
    	        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
    	        request.abort();
    	        request = null;
    	      };

    	      config.cancelToken && config.cancelToken.subscribe(onCanceled);
    	      if (config.signal) {
    	        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
    	      }
    	    }

    	    if (!requestData) {
    	      requestData = null;
    	    }

    	    // Send the request
    	    request.send(requestData);
    	  });
    	};
    	return xhr;
    }

    var followRedirects = {exports: {}};

    var src = {exports: {}};

    var browser = {exports: {}};

    /**
     * Helpers.
     */

    var ms;
    var hasRequiredMs;

    function requireMs () {
    	if (hasRequiredMs) return ms;
    	hasRequiredMs = 1;
    	var s = 1000;
    	var m = s * 60;
    	var h = m * 60;
    	var d = h * 24;
    	var w = d * 7;
    	var y = d * 365.25;

    	/**
    	 * Parse or format the given `val`.
    	 *
    	 * Options:
    	 *
    	 *  - `long` verbose formatting [false]
    	 *
    	 * @param {String|Number} val
    	 * @param {Object} [options]
    	 * @throws {Error} throw an error if val is not a non-empty string or a number
    	 * @return {String|Number}
    	 * @api public
    	 */

    	ms = function(val, options) {
    	  options = options || {};
    	  var type = typeof val;
    	  if (type === 'string' && val.length > 0) {
    	    return parse(val);
    	  } else if (type === 'number' && isFinite(val)) {
    	    return options.long ? fmtLong(val) : fmtShort(val);
    	  }
    	  throw new Error(
    	    'val is not a non-empty string or a valid number. val=' +
    	      JSON.stringify(val)
    	  );
    	};

    	/**
    	 * Parse the given `str` and return milliseconds.
    	 *
    	 * @param {String} str
    	 * @return {Number}
    	 * @api private
    	 */

    	function parse(str) {
    	  str = String(str);
    	  if (str.length > 100) {
    	    return;
    	  }
    	  var match = /^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(
    	    str
    	  );
    	  if (!match) {
    	    return;
    	  }
    	  var n = parseFloat(match[1]);
    	  var type = (match[2] || 'ms').toLowerCase();
    	  switch (type) {
    	    case 'years':
    	    case 'year':
    	    case 'yrs':
    	    case 'yr':
    	    case 'y':
    	      return n * y;
    	    case 'weeks':
    	    case 'week':
    	    case 'w':
    	      return n * w;
    	    case 'days':
    	    case 'day':
    	    case 'd':
    	      return n * d;
    	    case 'hours':
    	    case 'hour':
    	    case 'hrs':
    	    case 'hr':
    	    case 'h':
    	      return n * h;
    	    case 'minutes':
    	    case 'minute':
    	    case 'mins':
    	    case 'min':
    	    case 'm':
    	      return n * m;
    	    case 'seconds':
    	    case 'second':
    	    case 'secs':
    	    case 'sec':
    	    case 's':
    	      return n * s;
    	    case 'milliseconds':
    	    case 'millisecond':
    	    case 'msecs':
    	    case 'msec':
    	    case 'ms':
    	      return n;
    	    default:
    	      return undefined;
    	  }
    	}

    	/**
    	 * Short format for `ms`.
    	 *
    	 * @param {Number} ms
    	 * @return {String}
    	 * @api private
    	 */

    	function fmtShort(ms) {
    	  var msAbs = Math.abs(ms);
    	  if (msAbs >= d) {
    	    return Math.round(ms / d) + 'd';
    	  }
    	  if (msAbs >= h) {
    	    return Math.round(ms / h) + 'h';
    	  }
    	  if (msAbs >= m) {
    	    return Math.round(ms / m) + 'm';
    	  }
    	  if (msAbs >= s) {
    	    return Math.round(ms / s) + 's';
    	  }
    	  return ms + 'ms';
    	}

    	/**
    	 * Long format for `ms`.
    	 *
    	 * @param {Number} ms
    	 * @return {String}
    	 * @api private
    	 */

    	function fmtLong(ms) {
    	  var msAbs = Math.abs(ms);
    	  if (msAbs >= d) {
    	    return plural(ms, msAbs, d, 'day');
    	  }
    	  if (msAbs >= h) {
    	    return plural(ms, msAbs, h, 'hour');
    	  }
    	  if (msAbs >= m) {
    	    return plural(ms, msAbs, m, 'minute');
    	  }
    	  if (msAbs >= s) {
    	    return plural(ms, msAbs, s, 'second');
    	  }
    	  return ms + ' ms';
    	}

    	/**
    	 * Pluralization helper.
    	 */

    	function plural(ms, msAbs, n, name) {
    	  var isPlural = msAbs >= n * 1.5;
    	  return Math.round(ms / n) + ' ' + name + (isPlural ? 's' : '');
    	}
    	return ms;
    }

    var common;
    var hasRequiredCommon;

    function requireCommon () {
    	if (hasRequiredCommon) return common;
    	hasRequiredCommon = 1;
    	/**
    	 * This is the common logic for both the Node.js and web browser
    	 * implementations of `debug()`.
    	 */

    	function setup(env) {
    		createDebug.debug = createDebug;
    		createDebug.default = createDebug;
    		createDebug.coerce = coerce;
    		createDebug.disable = disable;
    		createDebug.enable = enable;
    		createDebug.enabled = enabled;
    		createDebug.humanize = requireMs();
    		createDebug.destroy = destroy;

    		Object.keys(env).forEach(key => {
    			createDebug[key] = env[key];
    		});

    		/**
    		* The currently active debug mode names, and names to skip.
    		*/

    		createDebug.names = [];
    		createDebug.skips = [];

    		/**
    		* Map of special "%n" handling functions, for the debug "format" argument.
    		*
    		* Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
    		*/
    		createDebug.formatters = {};

    		/**
    		* Selects a color for a debug namespace
    		* @param {String} namespace The namespace string for the debug instance to be colored
    		* @return {Number|String} An ANSI color code for the given namespace
    		* @api private
    		*/
    		function selectColor(namespace) {
    			let hash = 0;

    			for (let i = 0; i < namespace.length; i++) {
    				hash = ((hash << 5) - hash) + namespace.charCodeAt(i);
    				hash |= 0; // Convert to 32bit integer
    			}

    			return createDebug.colors[Math.abs(hash) % createDebug.colors.length];
    		}
    		createDebug.selectColor = selectColor;

    		/**
    		* Create a debugger with the given `namespace`.
    		*
    		* @param {String} namespace
    		* @return {Function}
    		* @api public
    		*/
    		function createDebug(namespace) {
    			let prevTime;
    			let enableOverride = null;
    			let namespacesCache;
    			let enabledCache;

    			function debug(...args) {
    				// Disabled?
    				if (!debug.enabled) {
    					return;
    				}

    				const self = debug;

    				// Set `diff` timestamp
    				const curr = Number(new Date());
    				const ms = curr - (prevTime || curr);
    				self.diff = ms;
    				self.prev = prevTime;
    				self.curr = curr;
    				prevTime = curr;

    				args[0] = createDebug.coerce(args[0]);

    				if (typeof args[0] !== 'string') {
    					// Anything else let's inspect with %O
    					args.unshift('%O');
    				}

    				// Apply any `formatters` transformations
    				let index = 0;
    				args[0] = args[0].replace(/%([a-zA-Z%])/g, (match, format) => {
    					// If we encounter an escaped % then don't increase the array index
    					if (match === '%%') {
    						return '%';
    					}
    					index++;
    					const formatter = createDebug.formatters[format];
    					if (typeof formatter === 'function') {
    						const val = args[index];
    						match = formatter.call(self, val);

    						// Now we need to remove `args[index]` since it's inlined in the `format`
    						args.splice(index, 1);
    						index--;
    					}
    					return match;
    				});

    				// Apply env-specific formatting (colors, etc.)
    				createDebug.formatArgs.call(self, args);

    				const logFn = self.log || createDebug.log;
    				logFn.apply(self, args);
    			}

    			debug.namespace = namespace;
    			debug.useColors = createDebug.useColors();
    			debug.color = createDebug.selectColor(namespace);
    			debug.extend = extend;
    			debug.destroy = createDebug.destroy; // XXX Temporary. Will be removed in the next major release.

    			Object.defineProperty(debug, 'enabled', {
    				enumerable: true,
    				configurable: false,
    				get: () => {
    					if (enableOverride !== null) {
    						return enableOverride;
    					}
    					if (namespacesCache !== createDebug.namespaces) {
    						namespacesCache = createDebug.namespaces;
    						enabledCache = createDebug.enabled(namespace);
    					}

    					return enabledCache;
    				},
    				set: v => {
    					enableOverride = v;
    				}
    			});

    			// Env-specific initialization logic for debug instances
    			if (typeof createDebug.init === 'function') {
    				createDebug.init(debug);
    			}

    			return debug;
    		}

    		function extend(namespace, delimiter) {
    			const newDebug = createDebug(this.namespace + (typeof delimiter === 'undefined' ? ':' : delimiter) + namespace);
    			newDebug.log = this.log;
    			return newDebug;
    		}

    		/**
    		* Enables a debug mode by namespaces. This can include modes
    		* separated by a colon and wildcards.
    		*
    		* @param {String} namespaces
    		* @api public
    		*/
    		function enable(namespaces) {
    			createDebug.save(namespaces);
    			createDebug.namespaces = namespaces;

    			createDebug.names = [];
    			createDebug.skips = [];

    			let i;
    			const split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
    			const len = split.length;

    			for (i = 0; i < len; i++) {
    				if (!split[i]) {
    					// ignore empty strings
    					continue;
    				}

    				namespaces = split[i].replace(/\*/g, '.*?');

    				if (namespaces[0] === '-') {
    					createDebug.skips.push(new RegExp('^' + namespaces.slice(1) + '$'));
    				} else {
    					createDebug.names.push(new RegExp('^' + namespaces + '$'));
    				}
    			}
    		}

    		/**
    		* Disable debug output.
    		*
    		* @return {String} namespaces
    		* @api public
    		*/
    		function disable() {
    			const namespaces = [
    				...createDebug.names.map(toNamespace),
    				...createDebug.skips.map(toNamespace).map(namespace => '-' + namespace)
    			].join(',');
    			createDebug.enable('');
    			return namespaces;
    		}

    		/**
    		* Returns true if the given mode name is enabled, false otherwise.
    		*
    		* @param {String} name
    		* @return {Boolean}
    		* @api public
    		*/
    		function enabled(name) {
    			if (name[name.length - 1] === '*') {
    				return true;
    			}

    			let i;
    			let len;

    			for (i = 0, len = createDebug.skips.length; i < len; i++) {
    				if (createDebug.skips[i].test(name)) {
    					return false;
    				}
    			}

    			for (i = 0, len = createDebug.names.length; i < len; i++) {
    				if (createDebug.names[i].test(name)) {
    					return true;
    				}
    			}

    			return false;
    		}

    		/**
    		* Convert regexp to namespace
    		*
    		* @param {RegExp} regxep
    		* @return {String} namespace
    		* @api private
    		*/
    		function toNamespace(regexp) {
    			return regexp.toString()
    				.substring(2, regexp.toString().length - 2)
    				.replace(/\.\*\?$/, '*');
    		}

    		/**
    		* Coerce `val`.
    		*
    		* @param {Mixed} val
    		* @return {Mixed}
    		* @api private
    		*/
    		function coerce(val) {
    			if (val instanceof Error) {
    				return val.stack || val.message;
    			}
    			return val;
    		}

    		/**
    		* XXX DO NOT USE. This is a temporary stub function.
    		* XXX It WILL be removed in the next major release.
    		*/
    		function destroy() {
    			console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    		}

    		createDebug.enable(createDebug.load());

    		return createDebug;
    	}

    	common = setup;
    	return common;
    }

    /* eslint-env browser */

    var hasRequiredBrowser;

    function requireBrowser () {
    	if (hasRequiredBrowser) return browser.exports;
    	hasRequiredBrowser = 1;
    	(function (module, exports) {
    		/**
    		 * This is the web browser implementation of `debug()`.
    		 */

    		exports.formatArgs = formatArgs;
    		exports.save = save;
    		exports.load = load;
    		exports.useColors = useColors;
    		exports.storage = localstorage();
    		exports.destroy = (() => {
    			let warned = false;

    			return () => {
    				if (!warned) {
    					warned = true;
    					console.warn('Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.');
    				}
    			};
    		})();

    		/**
    		 * Colors.
    		 */

    		exports.colors = [
    			'#0000CC',
    			'#0000FF',
    			'#0033CC',
    			'#0033FF',
    			'#0066CC',
    			'#0066FF',
    			'#0099CC',
    			'#0099FF',
    			'#00CC00',
    			'#00CC33',
    			'#00CC66',
    			'#00CC99',
    			'#00CCCC',
    			'#00CCFF',
    			'#3300CC',
    			'#3300FF',
    			'#3333CC',
    			'#3333FF',
    			'#3366CC',
    			'#3366FF',
    			'#3399CC',
    			'#3399FF',
    			'#33CC00',
    			'#33CC33',
    			'#33CC66',
    			'#33CC99',
    			'#33CCCC',
    			'#33CCFF',
    			'#6600CC',
    			'#6600FF',
    			'#6633CC',
    			'#6633FF',
    			'#66CC00',
    			'#66CC33',
    			'#9900CC',
    			'#9900FF',
    			'#9933CC',
    			'#9933FF',
    			'#99CC00',
    			'#99CC33',
    			'#CC0000',
    			'#CC0033',
    			'#CC0066',
    			'#CC0099',
    			'#CC00CC',
    			'#CC00FF',
    			'#CC3300',
    			'#CC3333',
    			'#CC3366',
    			'#CC3399',
    			'#CC33CC',
    			'#CC33FF',
    			'#CC6600',
    			'#CC6633',
    			'#CC9900',
    			'#CC9933',
    			'#CCCC00',
    			'#CCCC33',
    			'#FF0000',
    			'#FF0033',
    			'#FF0066',
    			'#FF0099',
    			'#FF00CC',
    			'#FF00FF',
    			'#FF3300',
    			'#FF3333',
    			'#FF3366',
    			'#FF3399',
    			'#FF33CC',
    			'#FF33FF',
    			'#FF6600',
    			'#FF6633',
    			'#FF9900',
    			'#FF9933',
    			'#FFCC00',
    			'#FFCC33'
    		];

    		/**
    		 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
    		 * and the Firebug extension (any Firefox version) are known
    		 * to support "%c" CSS customizations.
    		 *
    		 * TODO: add a `localStorage` variable to explicitly enable/disable colors
    		 */

    		// eslint-disable-next-line complexity
    		function useColors() {
    			// NB: In an Electron preload script, document will be defined but not fully
    			// initialized. Since we know we're in Chrome, we'll just detect this case
    			// explicitly
    			if (typeof window !== 'undefined' && window.process && (window.process.type === 'renderer' || window.process.__nwjs)) {
    				return true;
    			}

    			// Internet Explorer and Edge do not support colors.
    			if (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/)) {
    				return false;
    			}

    			// Is webkit? http://stackoverflow.com/a/16459606/376773
    			// document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
    			return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    				// Is firebug? http://stackoverflow.com/a/398120/376773
    				(typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    				// Is firefox >= v31?
    				// https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    				(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    				// Double check webkit in userAgent just in case we are in a worker
    				(typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
    		}

    		/**
    		 * Colorize log arguments if enabled.
    		 *
    		 * @api public
    		 */

    		function formatArgs(args) {
    			args[0] = (this.useColors ? '%c' : '') +
    				this.namespace +
    				(this.useColors ? ' %c' : ' ') +
    				args[0] +
    				(this.useColors ? '%c ' : ' ') +
    				'+' + module.exports.humanize(this.diff);

    			if (!this.useColors) {
    				return;
    			}

    			const c = 'color: ' + this.color;
    			args.splice(1, 0, c, 'color: inherit');

    			// The final "%c" is somewhat tricky, because there could be other
    			// arguments passed either before or after the %c, so we need to
    			// figure out the correct index to insert the CSS into
    			let index = 0;
    			let lastC = 0;
    			args[0].replace(/%[a-zA-Z%]/g, match => {
    				if (match === '%%') {
    					return;
    				}
    				index++;
    				if (match === '%c') {
    					// We only are interested in the *last* %c
    					// (the user may have provided their own)
    					lastC = index;
    				}
    			});

    			args.splice(lastC, 0, c);
    		}

    		/**
    		 * Invokes `console.debug()` when available.
    		 * No-op when `console.debug` is not a "function".
    		 * If `console.debug` is not available, falls back
    		 * to `console.log`.
    		 *
    		 * @api public
    		 */
    		exports.log = console.debug || console.log || (() => {});

    		/**
    		 * Save `namespaces`.
    		 *
    		 * @param {String} namespaces
    		 * @api private
    		 */
    		function save(namespaces) {
    			try {
    				if (namespaces) {
    					exports.storage.setItem('debug', namespaces);
    				} else {
    					exports.storage.removeItem('debug');
    				}
    			} catch (error) {
    				// Swallow
    				// XXX (@Qix-) should we be logging these?
    			}
    		}

    		/**
    		 * Load `namespaces`.
    		 *
    		 * @return {String} returns the previously persisted debug modes
    		 * @api private
    		 */
    		function load() {
    			let r;
    			try {
    				r = exports.storage.getItem('debug');
    			} catch (error) {
    				// Swallow
    				// XXX (@Qix-) should we be logging these?
    			}

    			// If debug isn't set in LS, and we're in Electron, try to load $DEBUG
    			if (!r && typeof process !== 'undefined' && 'env' in process) {
    				r = process.env.DEBUG;
    			}

    			return r;
    		}

    		/**
    		 * Localstorage attempts to return the localstorage.
    		 *
    		 * This is necessary because safari throws
    		 * when a user disables cookies/localstorage
    		 * and you attempt to access it.
    		 *
    		 * @return {LocalStorage}
    		 * @api private
    		 */

    		function localstorage() {
    			try {
    				// TVMLKit (Apple TV JS Runtime) does not have a window object, just localStorage in the global context
    				// The Browser also has localStorage in the global context.
    				return localStorage;
    			} catch (error) {
    				// Swallow
    				// XXX (@Qix-) should we be logging these?
    			}
    		}

    		module.exports = requireCommon()(exports);

    		const {formatters} = module.exports;

    		/**
    		 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
    		 */

    		formatters.j = function (v) {
    			try {
    				return JSON.stringify(v);
    			} catch (error) {
    				return '[UnexpectedJSONParseError]: ' + error.message;
    			}
    		};
    } (browser, browser.exports));
    	return browser.exports;
    }

    var node = {exports: {}};

    var hasFlag;
    var hasRequiredHasFlag;

    function requireHasFlag () {
    	if (hasRequiredHasFlag) return hasFlag;
    	hasRequiredHasFlag = 1;

    	hasFlag = (flag, argv = process.argv) => {
    		const prefix = flag.startsWith('-') ? '' : (flag.length === 1 ? '-' : '--');
    		const position = argv.indexOf(prefix + flag);
    		const terminatorPosition = argv.indexOf('--');
    		return position !== -1 && (terminatorPosition === -1 || position < terminatorPosition);
    	};
    	return hasFlag;
    }

    var supportsColor_1;
    var hasRequiredSupportsColor;

    function requireSupportsColor () {
    	if (hasRequiredSupportsColor) return supportsColor_1;
    	hasRequiredSupportsColor = 1;
    	const os = require$$0__default["default"];
    	const tty = require$$1__default["default"];
    	const hasFlag = requireHasFlag();

    	const {env} = process;

    	let forceColor;
    	if (hasFlag('no-color') ||
    		hasFlag('no-colors') ||
    		hasFlag('color=false') ||
    		hasFlag('color=never')) {
    		forceColor = 0;
    	} else if (hasFlag('color') ||
    		hasFlag('colors') ||
    		hasFlag('color=true') ||
    		hasFlag('color=always')) {
    		forceColor = 1;
    	}

    	if ('FORCE_COLOR' in env) {
    		if (env.FORCE_COLOR === 'true') {
    			forceColor = 1;
    		} else if (env.FORCE_COLOR === 'false') {
    			forceColor = 0;
    		} else {
    			forceColor = env.FORCE_COLOR.length === 0 ? 1 : Math.min(parseInt(env.FORCE_COLOR, 10), 3);
    		}
    	}

    	function translateLevel(level) {
    		if (level === 0) {
    			return false;
    		}

    		return {
    			level,
    			hasBasic: true,
    			has256: level >= 2,
    			has16m: level >= 3
    		};
    	}

    	function supportsColor(haveStream, streamIsTTY) {
    		if (forceColor === 0) {
    			return 0;
    		}

    		if (hasFlag('color=16m') ||
    			hasFlag('color=full') ||
    			hasFlag('color=truecolor')) {
    			return 3;
    		}

    		if (hasFlag('color=256')) {
    			return 2;
    		}

    		if (haveStream && !streamIsTTY && forceColor === undefined) {
    			return 0;
    		}

    		const min = forceColor || 0;

    		if (env.TERM === 'dumb') {
    			return min;
    		}

    		if (process.platform === 'win32') {
    			// Windows 10 build 10586 is the first Windows release that supports 256 colors.
    			// Windows 10 build 14931 is the first release that supports 16m/TrueColor.
    			const osRelease = os.release().split('.');
    			if (
    				Number(osRelease[0]) >= 10 &&
    				Number(osRelease[2]) >= 10586
    			) {
    				return Number(osRelease[2]) >= 14931 ? 3 : 2;
    			}

    			return 1;
    		}

    		if ('CI' in env) {
    			if (['TRAVIS', 'CIRCLECI', 'APPVEYOR', 'GITLAB_CI', 'GITHUB_ACTIONS', 'BUILDKITE'].some(sign => sign in env) || env.CI_NAME === 'codeship') {
    				return 1;
    			}

    			return min;
    		}

    		if ('TEAMCITY_VERSION' in env) {
    			return /^(9\.(0*[1-9]\d*)\.|\d{2,}\.)/.test(env.TEAMCITY_VERSION) ? 1 : 0;
    		}

    		if (env.COLORTERM === 'truecolor') {
    			return 3;
    		}

    		if ('TERM_PROGRAM' in env) {
    			const version = parseInt((env.TERM_PROGRAM_VERSION || '').split('.')[0], 10);

    			switch (env.TERM_PROGRAM) {
    				case 'iTerm.app':
    					return version >= 3 ? 3 : 2;
    				case 'Apple_Terminal':
    					return 2;
    				// No default
    			}
    		}

    		if (/-256(color)?$/i.test(env.TERM)) {
    			return 2;
    		}

    		if (/^screen|^xterm|^vt100|^vt220|^rxvt|color|ansi|cygwin|linux/i.test(env.TERM)) {
    			return 1;
    		}

    		if ('COLORTERM' in env) {
    			return 1;
    		}

    		return min;
    	}

    	function getSupportLevel(stream) {
    		const level = supportsColor(stream, stream && stream.isTTY);
    		return translateLevel(level);
    	}

    	supportsColor_1 = {
    		supportsColor: getSupportLevel,
    		stdout: translateLevel(supportsColor(true, tty.isatty(1))),
    		stderr: translateLevel(supportsColor(true, tty.isatty(2)))
    	};
    	return supportsColor_1;
    }

    /**
     * Module dependencies.
     */

    var hasRequiredNode;

    function requireNode () {
    	if (hasRequiredNode) return node.exports;
    	hasRequiredNode = 1;
    	(function (module, exports) {
    		const tty = require$$1__default["default"];
    		const util = require$$1__default$1["default"];

    		/**
    		 * This is the Node.js implementation of `debug()`.
    		 */

    		exports.init = init;
    		exports.log = log;
    		exports.formatArgs = formatArgs;
    		exports.save = save;
    		exports.load = load;
    		exports.useColors = useColors;
    		exports.destroy = util.deprecate(
    			() => {},
    			'Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.'
    		);

    		/**
    		 * Colors.
    		 */

    		exports.colors = [6, 2, 3, 4, 5, 1];

    		try {
    			// Optional dependency (as in, doesn't need to be installed, NOT like optionalDependencies in package.json)
    			// eslint-disable-next-line import/no-extraneous-dependencies
    			const supportsColor = requireSupportsColor();

    			if (supportsColor && (supportsColor.stderr || supportsColor).level >= 2) {
    				exports.colors = [
    					20,
    					21,
    					26,
    					27,
    					32,
    					33,
    					38,
    					39,
    					40,
    					41,
    					42,
    					43,
    					44,
    					45,
    					56,
    					57,
    					62,
    					63,
    					68,
    					69,
    					74,
    					75,
    					76,
    					77,
    					78,
    					79,
    					80,
    					81,
    					92,
    					93,
    					98,
    					99,
    					112,
    					113,
    					128,
    					129,
    					134,
    					135,
    					148,
    					149,
    					160,
    					161,
    					162,
    					163,
    					164,
    					165,
    					166,
    					167,
    					168,
    					169,
    					170,
    					171,
    					172,
    					173,
    					178,
    					179,
    					184,
    					185,
    					196,
    					197,
    					198,
    					199,
    					200,
    					201,
    					202,
    					203,
    					204,
    					205,
    					206,
    					207,
    					208,
    					209,
    					214,
    					215,
    					220,
    					221
    				];
    			}
    		} catch (error) {
    			// Swallow - we only care if `supports-color` is available; it doesn't have to be.
    		}

    		/**
    		 * Build up the default `inspectOpts` object from the environment variables.
    		 *
    		 *   $ DEBUG_COLORS=no DEBUG_DEPTH=10 DEBUG_SHOW_HIDDEN=enabled node script.js
    		 */

    		exports.inspectOpts = Object.keys(process.env).filter(key => {
    			return /^debug_/i.test(key);
    		}).reduce((obj, key) => {
    			// Camel-case
    			const prop = key
    				.substring(6)
    				.toLowerCase()
    				.replace(/_([a-z])/g, (_, k) => {
    					return k.toUpperCase();
    				});

    			// Coerce string value into JS value
    			let val = process.env[key];
    			if (/^(yes|on|true|enabled)$/i.test(val)) {
    				val = true;
    			} else if (/^(no|off|false|disabled)$/i.test(val)) {
    				val = false;
    			} else if (val === 'null') {
    				val = null;
    			} else {
    				val = Number(val);
    			}

    			obj[prop] = val;
    			return obj;
    		}, {});

    		/**
    		 * Is stdout a TTY? Colored output is enabled when `true`.
    		 */

    		function useColors() {
    			return 'colors' in exports.inspectOpts ?
    				Boolean(exports.inspectOpts.colors) :
    				tty.isatty(process.stderr.fd);
    		}

    		/**
    		 * Adds ANSI color escape codes if enabled.
    		 *
    		 * @api public
    		 */

    		function formatArgs(args) {
    			const {namespace: name, useColors} = this;

    			if (useColors) {
    				const c = this.color;
    				const colorCode = '\u001B[3' + (c < 8 ? c : '8;5;' + c);
    				const prefix = `  ${colorCode};1m${name} \u001B[0m`;

    				args[0] = prefix + args[0].split('\n').join('\n' + prefix);
    				args.push(colorCode + 'm+' + module.exports.humanize(this.diff) + '\u001B[0m');
    			} else {
    				args[0] = getDate() + name + ' ' + args[0];
    			}
    		}

    		function getDate() {
    			if (exports.inspectOpts.hideDate) {
    				return '';
    			}
    			return new Date().toISOString() + ' ';
    		}

    		/**
    		 * Invokes `util.format()` with the specified arguments and writes to stderr.
    		 */

    		function log(...args) {
    			return process.stderr.write(util.format(...args) + '\n');
    		}

    		/**
    		 * Save `namespaces`.
    		 *
    		 * @param {String} namespaces
    		 * @api private
    		 */
    		function save(namespaces) {
    			if (namespaces) {
    				process.env.DEBUG = namespaces;
    			} else {
    				// If you set a process.env field to null or undefined, it gets cast to the
    				// string 'null' or 'undefined'. Just delete instead.
    				delete process.env.DEBUG;
    			}
    		}

    		/**
    		 * Load `namespaces`.
    		 *
    		 * @return {String} returns the previously persisted debug modes
    		 * @api private
    		 */

    		function load() {
    			return process.env.DEBUG;
    		}

    		/**
    		 * Init logic for `debug` instances.
    		 *
    		 * Create a new `inspectOpts` object in case `useColors` is set
    		 * differently for a particular `debug` instance.
    		 */

    		function init(debug) {
    			debug.inspectOpts = {};

    			const keys = Object.keys(exports.inspectOpts);
    			for (let i = 0; i < keys.length; i++) {
    				debug.inspectOpts[keys[i]] = exports.inspectOpts[keys[i]];
    			}
    		}

    		module.exports = requireCommon()(exports);

    		const {formatters} = module.exports;

    		/**
    		 * Map %o to `util.inspect()`, all on a single line.
    		 */

    		formatters.o = function (v) {
    			this.inspectOpts.colors = this.useColors;
    			return util.inspect(v, this.inspectOpts)
    				.split('\n')
    				.map(str => str.trim())
    				.join(' ');
    		};

    		/**
    		 * Map %O to `util.inspect()`, allowing multiple lines if needed.
    		 */

    		formatters.O = function (v) {
    			this.inspectOpts.colors = this.useColors;
    			return util.inspect(v, this.inspectOpts);
    		};
    } (node, node.exports));
    	return node.exports;
    }

    /**
     * Detect Electron renderer / nwjs process, which is node, but we should
     * treat as a browser.
     */

    var hasRequiredSrc;

    function requireSrc () {
    	if (hasRequiredSrc) return src.exports;
    	hasRequiredSrc = 1;
    	(function (module) {
    		if (typeof process === 'undefined' || process.type === 'renderer' || process.browser === true || process.__nwjs) {
    			module.exports = requireBrowser();
    		} else {
    			module.exports = requireNode();
    		}
    } (src));
    	return src.exports;
    }

    var debug_1;
    var hasRequiredDebug;

    function requireDebug () {
    	if (hasRequiredDebug) return debug_1;
    	hasRequiredDebug = 1;
    	var debug;

    	debug_1 = function () {
    	  if (!debug) {
    	    try {
    	      /* eslint global-require: off */
    	      debug = requireSrc()("follow-redirects");
    	    }
    	    catch (error) { /* */ }
    	    if (typeof debug !== "function") {
    	      debug = function () { /* */ };
    	    }
    	  }
    	  debug.apply(null, arguments);
    	};
    	return debug_1;
    }

    var hasRequiredFollowRedirects;

    function requireFollowRedirects () {
    	if (hasRequiredFollowRedirects) return followRedirects.exports;
    	hasRequiredFollowRedirects = 1;
    	var url = require$$0__default$1["default"];
    	var URL = url.URL;
    	var http = require$$1__default$2["default"];
    	var https = require$$2__default["default"];
    	var Writable = require$$3__default["default"].Writable;
    	var assert = require$$4__default["default"];
    	var debug = requireDebug();

    	// Create handlers that pass events from native requests
    	var events = ["abort", "aborted", "connect", "error", "socket", "timeout"];
    	var eventHandlers = Object.create(null);
    	events.forEach(function (event) {
    	  eventHandlers[event] = function (arg1, arg2, arg3) {
    	    this._redirectable.emit(event, arg1, arg2, arg3);
    	  };
    	});

    	// Error types with codes
    	var RedirectionError = createErrorType(
    	  "ERR_FR_REDIRECTION_FAILURE",
    	  "Redirected request failed"
    	);
    	var TooManyRedirectsError = createErrorType(
    	  "ERR_FR_TOO_MANY_REDIRECTS",
    	  "Maximum number of redirects exceeded"
    	);
    	var MaxBodyLengthExceededError = createErrorType(
    	  "ERR_FR_MAX_BODY_LENGTH_EXCEEDED",
    	  "Request body larger than maxBodyLength limit"
    	);
    	var WriteAfterEndError = createErrorType(
    	  "ERR_STREAM_WRITE_AFTER_END",
    	  "write after end"
    	);

    	// An HTTP(S) request that can be redirected
    	function RedirectableRequest(options, responseCallback) {
    	  // Initialize the request
    	  Writable.call(this);
    	  this._sanitizeOptions(options);
    	  this._options = options;
    	  this._ended = false;
    	  this._ending = false;
    	  this._redirectCount = 0;
    	  this._redirects = [];
    	  this._requestBodyLength = 0;
    	  this._requestBodyBuffers = [];

    	  // Attach a callback if passed
    	  if (responseCallback) {
    	    this.on("response", responseCallback);
    	  }

    	  // React to responses of native requests
    	  var self = this;
    	  this._onNativeResponse = function (response) {
    	    self._processResponse(response);
    	  };

    	  // Perform the first request
    	  this._performRequest();
    	}
    	RedirectableRequest.prototype = Object.create(Writable.prototype);

    	RedirectableRequest.prototype.abort = function () {
    	  abortRequest(this._currentRequest);
    	  this.emit("abort");
    	};

    	// Writes buffered data to the current native request
    	RedirectableRequest.prototype.write = function (data, encoding, callback) {
    	  // Writing is not allowed if end has been called
    	  if (this._ending) {
    	    throw new WriteAfterEndError();
    	  }

    	  // Validate input and shift parameters if necessary
    	  if (!(typeof data === "string" || typeof data === "object" && ("length" in data))) {
    	    throw new TypeError("data should be a string, Buffer or Uint8Array");
    	  }
    	  if (typeof encoding === "function") {
    	    callback = encoding;
    	    encoding = null;
    	  }

    	  // Ignore empty buffers, since writing them doesn't invoke the callback
    	  // https://github.com/nodejs/node/issues/22066
    	  if (data.length === 0) {
    	    if (callback) {
    	      callback();
    	    }
    	    return;
    	  }
    	  // Only write when we don't exceed the maximum body length
    	  if (this._requestBodyLength + data.length <= this._options.maxBodyLength) {
    	    this._requestBodyLength += data.length;
    	    this._requestBodyBuffers.push({ data: data, encoding: encoding });
    	    this._currentRequest.write(data, encoding, callback);
    	  }
    	  // Error when we exceed the maximum body length
    	  else {
    	    this.emit("error", new MaxBodyLengthExceededError());
    	    this.abort();
    	  }
    	};

    	// Ends the current native request
    	RedirectableRequest.prototype.end = function (data, encoding, callback) {
    	  // Shift parameters if necessary
    	  if (typeof data === "function") {
    	    callback = data;
    	    data = encoding = null;
    	  }
    	  else if (typeof encoding === "function") {
    	    callback = encoding;
    	    encoding = null;
    	  }

    	  // Write data if needed and end
    	  if (!data) {
    	    this._ended = this._ending = true;
    	    this._currentRequest.end(null, null, callback);
    	  }
    	  else {
    	    var self = this;
    	    var currentRequest = this._currentRequest;
    	    this.write(data, encoding, function () {
    	      self._ended = true;
    	      currentRequest.end(null, null, callback);
    	    });
    	    this._ending = true;
    	  }
    	};

    	// Sets a header value on the current native request
    	RedirectableRequest.prototype.setHeader = function (name, value) {
    	  this._options.headers[name] = value;
    	  this._currentRequest.setHeader(name, value);
    	};

    	// Clears a header value on the current native request
    	RedirectableRequest.prototype.removeHeader = function (name) {
    	  delete this._options.headers[name];
    	  this._currentRequest.removeHeader(name);
    	};

    	// Global timeout for all underlying requests
    	RedirectableRequest.prototype.setTimeout = function (msecs, callback) {
    	  var self = this;

    	  // Destroys the socket on timeout
    	  function destroyOnTimeout(socket) {
    	    socket.setTimeout(msecs);
    	    socket.removeListener("timeout", socket.destroy);
    	    socket.addListener("timeout", socket.destroy);
    	  }

    	  // Sets up a timer to trigger a timeout event
    	  function startTimer(socket) {
    	    if (self._timeout) {
    	      clearTimeout(self._timeout);
    	    }
    	    self._timeout = setTimeout(function () {
    	      self.emit("timeout");
    	      clearTimer();
    	    }, msecs);
    	    destroyOnTimeout(socket);
    	  }

    	  // Stops a timeout from triggering
    	  function clearTimer() {
    	    // Clear the timeout
    	    if (self._timeout) {
    	      clearTimeout(self._timeout);
    	      self._timeout = null;
    	    }

    	    // Clean up all attached listeners
    	    self.removeListener("abort", clearTimer);
    	    self.removeListener("error", clearTimer);
    	    self.removeListener("response", clearTimer);
    	    if (callback) {
    	      self.removeListener("timeout", callback);
    	    }
    	    if (!self.socket) {
    	      self._currentRequest.removeListener("socket", startTimer);
    	    }
    	  }

    	  // Attach callback if passed
    	  if (callback) {
    	    this.on("timeout", callback);
    	  }

    	  // Start the timer if or when the socket is opened
    	  if (this.socket) {
    	    startTimer(this.socket);
    	  }
    	  else {
    	    this._currentRequest.once("socket", startTimer);
    	  }

    	  // Clean up on events
    	  this.on("socket", destroyOnTimeout);
    	  this.on("abort", clearTimer);
    	  this.on("error", clearTimer);
    	  this.on("response", clearTimer);

    	  return this;
    	};

    	// Proxy all other public ClientRequest methods
    	[
    	  "flushHeaders", "getHeader",
    	  "setNoDelay", "setSocketKeepAlive",
    	].forEach(function (method) {
    	  RedirectableRequest.prototype[method] = function (a, b) {
    	    return this._currentRequest[method](a, b);
    	  };
    	});

    	// Proxy all public ClientRequest properties
    	["aborted", "connection", "socket"].forEach(function (property) {
    	  Object.defineProperty(RedirectableRequest.prototype, property, {
    	    get: function () { return this._currentRequest[property]; },
    	  });
    	});

    	RedirectableRequest.prototype._sanitizeOptions = function (options) {
    	  // Ensure headers are always present
    	  if (!options.headers) {
    	    options.headers = {};
    	  }

    	  // Since http.request treats host as an alias of hostname,
    	  // but the url module interprets host as hostname plus port,
    	  // eliminate the host property to avoid confusion.
    	  if (options.host) {
    	    // Use hostname if set, because it has precedence
    	    if (!options.hostname) {
    	      options.hostname = options.host;
    	    }
    	    delete options.host;
    	  }

    	  // Complete the URL object when necessary
    	  if (!options.pathname && options.path) {
    	    var searchPos = options.path.indexOf("?");
    	    if (searchPos < 0) {
    	      options.pathname = options.path;
    	    }
    	    else {
    	      options.pathname = options.path.substring(0, searchPos);
    	      options.search = options.path.substring(searchPos);
    	    }
    	  }
    	};


    	// Executes the next native request (initial or redirect)
    	RedirectableRequest.prototype._performRequest = function () {
    	  // Load the native protocol
    	  var protocol = this._options.protocol;
    	  var nativeProtocol = this._options.nativeProtocols[protocol];
    	  if (!nativeProtocol) {
    	    this.emit("error", new TypeError("Unsupported protocol " + protocol));
    	    return;
    	  }

    	  // If specified, use the agent corresponding to the protocol
    	  // (HTTP and HTTPS use different types of agents)
    	  if (this._options.agents) {
    	    var scheme = protocol.substr(0, protocol.length - 1);
    	    this._options.agent = this._options.agents[scheme];
    	  }

    	  // Create the native request
    	  var request = this._currentRequest =
    	        nativeProtocol.request(this._options, this._onNativeResponse);
    	  this._currentUrl = url.format(this._options);

    	  // Set up event handlers
    	  request._redirectable = this;
    	  for (var e = 0; e < events.length; e++) {
    	    request.on(events[e], eventHandlers[events[e]]);
    	  }

    	  // End a redirected request
    	  // (The first request must be ended explicitly with RedirectableRequest#end)
    	  if (this._isRedirect) {
    	    // Write the request entity and end.
    	    var i = 0;
    	    var self = this;
    	    var buffers = this._requestBodyBuffers;
    	    (function writeNext(error) {
    	      // Only write if this request has not been redirected yet
    	      /* istanbul ignore else */
    	      if (request === self._currentRequest) {
    	        // Report any write errors
    	        /* istanbul ignore if */
    	        if (error) {
    	          self.emit("error", error);
    	        }
    	        // Write the next buffer if there are still left
    	        else if (i < buffers.length) {
    	          var buffer = buffers[i++];
    	          /* istanbul ignore else */
    	          if (!request.finished) {
    	            request.write(buffer.data, buffer.encoding, writeNext);
    	          }
    	        }
    	        // End the request if `end` has been called on us
    	        else if (self._ended) {
    	          request.end();
    	        }
    	      }
    	    }());
    	  }
    	};

    	// Processes a response from the current native request
    	RedirectableRequest.prototype._processResponse = function (response) {
    	  // Store the redirected response
    	  var statusCode = response.statusCode;
    	  if (this._options.trackRedirects) {
    	    this._redirects.push({
    	      url: this._currentUrl,
    	      headers: response.headers,
    	      statusCode: statusCode,
    	    });
    	  }

    	  // RFC7231§6.4: The 3xx (Redirection) class of status code indicates
    	  // that further action needs to be taken by the user agent in order to
    	  // fulfill the request. If a Location header field is provided,
    	  // the user agent MAY automatically redirect its request to the URI
    	  // referenced by the Location field value,
    	  // even if the specific status code is not understood.

    	  // If the response is not a redirect; return it as-is
    	  var location = response.headers.location;
    	  if (!location || this._options.followRedirects === false ||
    	      statusCode < 300 || statusCode >= 400) {
    	    response.responseUrl = this._currentUrl;
    	    response.redirects = this._redirects;
    	    this.emit("response", response);

    	    // Clean up
    	    this._requestBodyBuffers = [];
    	    return;
    	  }

    	  // The response is a redirect, so abort the current request
    	  abortRequest(this._currentRequest);
    	  // Discard the remainder of the response to avoid waiting for data
    	  response.destroy();

    	  // RFC7231§6.4: A client SHOULD detect and intervene
    	  // in cyclical redirections (i.e., "infinite" redirection loops).
    	  if (++this._redirectCount > this._options.maxRedirects) {
    	    this.emit("error", new TooManyRedirectsError());
    	    return;
    	  }

    	  // RFC7231§6.4: Automatic redirection needs to done with
    	  // care for methods not known to be safe, […]
    	  // RFC7231§6.4.2–3: For historical reasons, a user agent MAY change
    	  // the request method from POST to GET for the subsequent request.
    	  if ((statusCode === 301 || statusCode === 302) && this._options.method === "POST" ||
    	      // RFC7231§6.4.4: The 303 (See Other) status code indicates that
    	      // the server is redirecting the user agent to a different resource […]
    	      // A user agent can perform a retrieval request targeting that URI
    	      // (a GET or HEAD request if using HTTP) […]
    	      (statusCode === 303) && !/^(?:GET|HEAD)$/.test(this._options.method)) {
    	    this._options.method = "GET";
    	    // Drop a possible entity and headers related to it
    	    this._requestBodyBuffers = [];
    	    removeMatchingHeaders(/^content-/i, this._options.headers);
    	  }

    	  // Drop the Host header, as the redirect might lead to a different host
    	  var currentHostHeader = removeMatchingHeaders(/^host$/i, this._options.headers);

    	  // If the redirect is relative, carry over the host of the last request
    	  var currentUrlParts = url.parse(this._currentUrl);
    	  var currentHost = currentHostHeader || currentUrlParts.host;
    	  var currentUrl = /^\w+:/.test(location) ? this._currentUrl :
    	    url.format(Object.assign(currentUrlParts, { host: currentHost }));

    	  // Determine the URL of the redirection
    	  var redirectUrl;
    	  try {
    	    redirectUrl = url.resolve(currentUrl, location);
    	  }
    	  catch (cause) {
    	    this.emit("error", new RedirectionError(cause));
    	    return;
    	  }

    	  // Create the redirected request
    	  debug("redirecting to", redirectUrl);
    	  this._isRedirect = true;
    	  var redirectUrlParts = url.parse(redirectUrl);
    	  Object.assign(this._options, redirectUrlParts);

    	  // Drop confidential headers when redirecting to a less secure protocol
    	  // or to a different domain that is not a superdomain
    	  if (redirectUrlParts.protocol !== currentUrlParts.protocol &&
    	     redirectUrlParts.protocol !== "https:" ||
    	     redirectUrlParts.host !== currentHost &&
    	     !isSubdomain(redirectUrlParts.host, currentHost)) {
    	    removeMatchingHeaders(/^(?:authorization|cookie)$/i, this._options.headers);
    	  }

    	  // Evaluate the beforeRedirect callback
    	  if (typeof this._options.beforeRedirect === "function") {
    	    var responseDetails = { headers: response.headers };
    	    try {
    	      this._options.beforeRedirect.call(null, this._options, responseDetails);
    	    }
    	    catch (err) {
    	      this.emit("error", err);
    	      return;
    	    }
    	    this._sanitizeOptions(this._options);
    	  }

    	  // Perform the redirected request
    	  try {
    	    this._performRequest();
    	  }
    	  catch (cause) {
    	    this.emit("error", new RedirectionError(cause));
    	  }
    	};

    	// Wraps the key/value object of protocols with redirect functionality
    	function wrap(protocols) {
    	  // Default settings
    	  var exports = {
    	    maxRedirects: 21,
    	    maxBodyLength: 10 * 1024 * 1024,
    	  };

    	  // Wrap each protocol
    	  var nativeProtocols = {};
    	  Object.keys(protocols).forEach(function (scheme) {
    	    var protocol = scheme + ":";
    	    var nativeProtocol = nativeProtocols[protocol] = protocols[scheme];
    	    var wrappedProtocol = exports[scheme] = Object.create(nativeProtocol);

    	    // Executes a request, following redirects
    	    function request(input, options, callback) {
    	      // Parse parameters
    	      if (typeof input === "string") {
    	        var urlStr = input;
    	        try {
    	          input = urlToOptions(new URL(urlStr));
    	        }
    	        catch (err) {
    	          /* istanbul ignore next */
    	          input = url.parse(urlStr);
    	        }
    	      }
    	      else if (URL && (input instanceof URL)) {
    	        input = urlToOptions(input);
    	      }
    	      else {
    	        callback = options;
    	        options = input;
    	        input = { protocol: protocol };
    	      }
    	      if (typeof options === "function") {
    	        callback = options;
    	        options = null;
    	      }

    	      // Set defaults
    	      options = Object.assign({
    	        maxRedirects: exports.maxRedirects,
    	        maxBodyLength: exports.maxBodyLength,
    	      }, input, options);
    	      options.nativeProtocols = nativeProtocols;

    	      assert.equal(options.protocol, protocol, "protocol mismatch");
    	      debug("options", options);
    	      return new RedirectableRequest(options, callback);
    	    }

    	    // Executes a GET request, following redirects
    	    function get(input, options, callback) {
    	      var wrappedRequest = wrappedProtocol.request(input, options, callback);
    	      wrappedRequest.end();
    	      return wrappedRequest;
    	    }

    	    // Expose the properties on the wrapped protocol
    	    Object.defineProperties(wrappedProtocol, {
    	      request: { value: request, configurable: true, enumerable: true, writable: true },
    	      get: { value: get, configurable: true, enumerable: true, writable: true },
    	    });
    	  });
    	  return exports;
    	}

    	/* istanbul ignore next */
    	function noop() { /* empty */ }

    	// from https://github.com/nodejs/node/blob/master/lib/internal/url.js
    	function urlToOptions(urlObject) {
    	  var options = {
    	    protocol: urlObject.protocol,
    	    hostname: urlObject.hostname.startsWith("[") ?
    	      /* istanbul ignore next */
    	      urlObject.hostname.slice(1, -1) :
    	      urlObject.hostname,
    	    hash: urlObject.hash,
    	    search: urlObject.search,
    	    pathname: urlObject.pathname,
    	    path: urlObject.pathname + urlObject.search,
    	    href: urlObject.href,
    	  };
    	  if (urlObject.port !== "") {
    	    options.port = Number(urlObject.port);
    	  }
    	  return options;
    	}

    	function removeMatchingHeaders(regex, headers) {
    	  var lastValue;
    	  for (var header in headers) {
    	    if (regex.test(header)) {
    	      lastValue = headers[header];
    	      delete headers[header];
    	    }
    	  }
    	  return (lastValue === null || typeof lastValue === "undefined") ?
    	    undefined : String(lastValue).trim();
    	}

    	function createErrorType(code, defaultMessage) {
    	  function CustomError(cause) {
    	    Error.captureStackTrace(this, this.constructor);
    	    if (!cause) {
    	      this.message = defaultMessage;
    	    }
    	    else {
    	      this.message = defaultMessage + ": " + cause.message;
    	      this.cause = cause;
    	    }
    	  }
    	  CustomError.prototype = new Error();
    	  CustomError.prototype.constructor = CustomError;
    	  CustomError.prototype.name = "Error [" + code + "]";
    	  CustomError.prototype.code = code;
    	  return CustomError;
    	}

    	function abortRequest(request) {
    	  for (var e = 0; e < events.length; e++) {
    	    request.removeListener(events[e], eventHandlers[events[e]]);
    	  }
    	  request.on("error", noop);
    	  request.abort();
    	}

    	function isSubdomain(subdomain, domain) {
    	  const dot = subdomain.length - domain.length - 1;
    	  return dot > 0 && subdomain[dot] === "." && subdomain.endsWith(domain);
    	}

    	// Exports
    	followRedirects.exports = wrap({ http: http, https: https });
    	followRedirects.exports.wrap = wrap;
    	return followRedirects.exports;
    }

    var data;
    var hasRequiredData;

    function requireData () {
    	if (hasRequiredData) return data;
    	hasRequiredData = 1;
    	data = {
    	  "version": "0.26.1"
    	};
    	return data;
    }

    var http_1;
    var hasRequiredHttp;

    function requireHttp () {
    	if (hasRequiredHttp) return http_1;
    	hasRequiredHttp = 1;

    	var utils = utils$9;
    	var settle = requireSettle();
    	var buildFullPath = requireBuildFullPath();
    	var buildURL = buildURL$1;
    	var http = require$$1__default$2["default"];
    	var https = require$$2__default["default"];
    	var httpFollow = requireFollowRedirects().http;
    	var httpsFollow = requireFollowRedirects().https;
    	var url = require$$0__default$1["default"];
    	var zlib = require$$8__default["default"];
    	var VERSION = requireData().version;
    	var createError = requireCreateError();
    	var enhanceError = enhanceError$1;
    	var transitionalDefaults = transitional;
    	var Cancel = requireCancel();

    	var isHttps = /https:?/;

    	/**
    	 *
    	 * @param {http.ClientRequestArgs} options
    	 * @param {AxiosProxyConfig} proxy
    	 * @param {string} location
    	 */
    	function setProxy(options, proxy, location) {
    	  options.hostname = proxy.host;
    	  options.host = proxy.host;
    	  options.port = proxy.port;
    	  options.path = location;

    	  // Basic proxy authorization
    	  if (proxy.auth) {
    	    var base64 = Buffer.from(proxy.auth.username + ':' + proxy.auth.password, 'utf8').toString('base64');
    	    options.headers['Proxy-Authorization'] = 'Basic ' + base64;
    	  }

    	  // If a proxy is used, any redirects must also pass through the proxy
    	  options.beforeRedirect = function beforeRedirect(redirection) {
    	    redirection.headers.host = redirection.host;
    	    setProxy(redirection, proxy, redirection.href);
    	  };
    	}

    	/*eslint consistent-return:0*/
    	http_1 = function httpAdapter(config) {
    	  return new Promise(function dispatchHttpRequest(resolvePromise, rejectPromise) {
    	    var onCanceled;
    	    function done() {
    	      if (config.cancelToken) {
    	        config.cancelToken.unsubscribe(onCanceled);
    	      }

    	      if (config.signal) {
    	        config.signal.removeEventListener('abort', onCanceled);
    	      }
    	    }
    	    var resolve = function resolve(value) {
    	      done();
    	      resolvePromise(value);
    	    };
    	    var rejected = false;
    	    var reject = function reject(value) {
    	      done();
    	      rejected = true;
    	      rejectPromise(value);
    	    };
    	    var data = config.data;
    	    var headers = config.headers;
    	    var headerNames = {};

    	    Object.keys(headers).forEach(function storeLowerName(name) {
    	      headerNames[name.toLowerCase()] = name;
    	    });

    	    // Set User-Agent (required by some servers)
    	    // See https://github.com/axios/axios/issues/69
    	    if ('user-agent' in headerNames) {
    	      // User-Agent is specified; handle case where no UA header is desired
    	      if (!headers[headerNames['user-agent']]) {
    	        delete headers[headerNames['user-agent']];
    	      }
    	      // Otherwise, use specified value
    	    } else {
    	      // Only set header if it hasn't been set in config
    	      headers['User-Agent'] = 'axios/' + VERSION;
    	    }

    	    if (data && !utils.isStream(data)) {
    	      if (Buffer.isBuffer(data)) ; else if (utils.isArrayBuffer(data)) {
    	        data = Buffer.from(new Uint8Array(data));
    	      } else if (utils.isString(data)) {
    	        data = Buffer.from(data, 'utf-8');
    	      } else {
    	        return reject(createError(
    	          'Data after transformation must be a string, an ArrayBuffer, a Buffer, or a Stream',
    	          config
    	        ));
    	      }

    	      if (config.maxBodyLength > -1 && data.length > config.maxBodyLength) {
    	        return reject(createError('Request body larger than maxBodyLength limit', config));
    	      }

    	      // Add Content-Length header if data exists
    	      if (!headerNames['content-length']) {
    	        headers['Content-Length'] = data.length;
    	      }
    	    }

    	    // HTTP basic authentication
    	    var auth = undefined;
    	    if (config.auth) {
    	      var username = config.auth.username || '';
    	      var password = config.auth.password || '';
    	      auth = username + ':' + password;
    	    }

    	    // Parse url
    	    var fullPath = buildFullPath(config.baseURL, config.url);
    	    var parsed = url.parse(fullPath);
    	    var protocol = parsed.protocol || 'http:';

    	    if (!auth && parsed.auth) {
    	      var urlAuth = parsed.auth.split(':');
    	      var urlUsername = urlAuth[0] || '';
    	      var urlPassword = urlAuth[1] || '';
    	      auth = urlUsername + ':' + urlPassword;
    	    }

    	    if (auth && headerNames.authorization) {
    	      delete headers[headerNames.authorization];
    	    }

    	    var isHttpsRequest = isHttps.test(protocol);
    	    var agent = isHttpsRequest ? config.httpsAgent : config.httpAgent;

    	    try {
    	      buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, '');
    	    } catch (err) {
    	      var customErr = new Error(err.message);
    	      customErr.config = config;
    	      customErr.url = config.url;
    	      customErr.exists = true;
    	      reject(customErr);
    	    }

    	    var options = {
    	      path: buildURL(parsed.path, config.params, config.paramsSerializer).replace(/^\?/, ''),
    	      method: config.method.toUpperCase(),
    	      headers: headers,
    	      agent: agent,
    	      agents: { http: config.httpAgent, https: config.httpsAgent },
    	      auth: auth
    	    };

    	    if (config.socketPath) {
    	      options.socketPath = config.socketPath;
    	    } else {
    	      options.hostname = parsed.hostname;
    	      options.port = parsed.port;
    	    }

    	    var proxy = config.proxy;
    	    if (!proxy && proxy !== false) {
    	      var proxyEnv = protocol.slice(0, -1) + '_proxy';
    	      var proxyUrl = process.env[proxyEnv] || process.env[proxyEnv.toUpperCase()];
    	      if (proxyUrl) {
    	        var parsedProxyUrl = url.parse(proxyUrl);
    	        var noProxyEnv = process.env.no_proxy || process.env.NO_PROXY;
    	        var shouldProxy = true;

    	        if (noProxyEnv) {
    	          var noProxy = noProxyEnv.split(',').map(function trim(s) {
    	            return s.trim();
    	          });

    	          shouldProxy = !noProxy.some(function proxyMatch(proxyElement) {
    	            if (!proxyElement) {
    	              return false;
    	            }
    	            if (proxyElement === '*') {
    	              return true;
    	            }
    	            if (proxyElement[0] === '.' &&
    	                parsed.hostname.substr(parsed.hostname.length - proxyElement.length) === proxyElement) {
    	              return true;
    	            }

    	            return parsed.hostname === proxyElement;
    	          });
    	        }

    	        if (shouldProxy) {
    	          proxy = {
    	            host: parsedProxyUrl.hostname,
    	            port: parsedProxyUrl.port,
    	            protocol: parsedProxyUrl.protocol
    	          };

    	          if (parsedProxyUrl.auth) {
    	            var proxyUrlAuth = parsedProxyUrl.auth.split(':');
    	            proxy.auth = {
    	              username: proxyUrlAuth[0],
    	              password: proxyUrlAuth[1]
    	            };
    	          }
    	        }
    	      }
    	    }

    	    if (proxy) {
    	      options.headers.host = parsed.hostname + (parsed.port ? ':' + parsed.port : '');
    	      setProxy(options, proxy, protocol + '//' + parsed.hostname + (parsed.port ? ':' + parsed.port : '') + options.path);
    	    }

    	    var transport;
    	    var isHttpsProxy = isHttpsRequest && (proxy ? isHttps.test(proxy.protocol) : true);
    	    if (config.transport) {
    	      transport = config.transport;
    	    } else if (config.maxRedirects === 0) {
    	      transport = isHttpsProxy ? https : http;
    	    } else {
    	      if (config.maxRedirects) {
    	        options.maxRedirects = config.maxRedirects;
    	      }
    	      transport = isHttpsProxy ? httpsFollow : httpFollow;
    	    }

    	    if (config.maxBodyLength > -1) {
    	      options.maxBodyLength = config.maxBodyLength;
    	    }

    	    if (config.insecureHTTPParser) {
    	      options.insecureHTTPParser = config.insecureHTTPParser;
    	    }

    	    // Create the request
    	    var req = transport.request(options, function handleResponse(res) {
    	      if (req.aborted) return;

    	      // uncompress the response body transparently if required
    	      var stream = res;

    	      // return the last request in case of redirects
    	      var lastRequest = res.req || req;


    	      // if no content, is HEAD request or decompress disabled we should not decompress
    	      if (res.statusCode !== 204 && lastRequest.method !== 'HEAD' && config.decompress !== false) {
    	        switch (res.headers['content-encoding']) {
    	        /*eslint default-case:0*/
    	        case 'gzip':
    	        case 'compress':
    	        case 'deflate':
    	        // add the unzipper to the body stream processing pipeline
    	          stream = stream.pipe(zlib.createUnzip());

    	          // remove the content-encoding in order to not confuse downstream operations
    	          delete res.headers['content-encoding'];
    	          break;
    	        }
    	      }

    	      var response = {
    	        status: res.statusCode,
    	        statusText: res.statusMessage,
    	        headers: res.headers,
    	        config: config,
    	        request: lastRequest
    	      };

    	      if (config.responseType === 'stream') {
    	        response.data = stream;
    	        settle(resolve, reject, response);
    	      } else {
    	        var responseBuffer = [];
    	        var totalResponseBytes = 0;
    	        stream.on('data', function handleStreamData(chunk) {
    	          responseBuffer.push(chunk);
    	          totalResponseBytes += chunk.length;

    	          // make sure the content length is not over the maxContentLength if specified
    	          if (config.maxContentLength > -1 && totalResponseBytes > config.maxContentLength) {
    	            // stream.destoy() emit aborted event before calling reject() on Node.js v16
    	            rejected = true;
    	            stream.destroy();
    	            reject(createError('maxContentLength size of ' + config.maxContentLength + ' exceeded',
    	              config, null, lastRequest));
    	          }
    	        });

    	        stream.on('aborted', function handlerStreamAborted() {
    	          if (rejected) {
    	            return;
    	          }
    	          stream.destroy();
    	          reject(createError('error request aborted', config, 'ERR_REQUEST_ABORTED', lastRequest));
    	        });

    	        stream.on('error', function handleStreamError(err) {
    	          if (req.aborted) return;
    	          reject(enhanceError(err, config, null, lastRequest));
    	        });

    	        stream.on('end', function handleStreamEnd() {
    	          try {
    	            var responseData = responseBuffer.length === 1 ? responseBuffer[0] : Buffer.concat(responseBuffer);
    	            if (config.responseType !== 'arraybuffer') {
    	              responseData = responseData.toString(config.responseEncoding);
    	              if (!config.responseEncoding || config.responseEncoding === 'utf8') {
    	                responseData = utils.stripBOM(responseData);
    	              }
    	            }
    	            response.data = responseData;
    	          } catch (err) {
    	            reject(enhanceError(err, config, err.code, response.request, response));
    	          }
    	          settle(resolve, reject, response);
    	        });
    	      }
    	    });

    	    // Handle errors
    	    req.on('error', function handleRequestError(err) {
    	      if (req.aborted && err.code !== 'ERR_FR_TOO_MANY_REDIRECTS') return;
    	      reject(enhanceError(err, config, null, req));
    	    });

    	    // set tcp keep alive to prevent drop connection by peer
    	    req.on('socket', function handleRequestSocket(socket) {
    	      // default interval of sending ack packet is 1 minute
    	      socket.setKeepAlive(true, 1000 * 60);
    	    });

    	    // Handle request timeout
    	    if (config.timeout) {
    	      // This is forcing a int timeout to avoid problems if the `req` interface doesn't handle other types.
    	      var timeout = parseInt(config.timeout, 10);

    	      if (isNaN(timeout)) {
    	        reject(createError(
    	          'error trying to parse `config.timeout` to int',
    	          config,
    	          'ERR_PARSE_TIMEOUT',
    	          req
    	        ));

    	        return;
    	      }

    	      // Sometime, the response will be very slow, and does not respond, the connect event will be block by event loop system.
    	      // And timer callback will be fired, and abort() will be invoked before connection, then get "socket hang up" and code ECONNRESET.
    	      // At this time, if we have a large number of request, nodejs will hang up some socket on background. and the number will up and up.
    	      // And then these socket which be hang up will devoring CPU little by little.
    	      // ClientRequest.setTimeout will be fired on the specify milliseconds, and can make sure that abort() will be fired after connect.
    	      req.setTimeout(timeout, function handleRequestTimeout() {
    	        req.abort();
    	        var timeoutErrorMessage = '';
    	        if (config.timeoutErrorMessage) {
    	          timeoutErrorMessage = config.timeoutErrorMessage;
    	        } else {
    	          timeoutErrorMessage = 'timeout of ' + config.timeout + 'ms exceeded';
    	        }
    	        var transitional = config.transitional || transitionalDefaults;
    	        reject(createError(
    	          timeoutErrorMessage,
    	          config,
    	          transitional.clarifyTimeoutError ? 'ETIMEDOUT' : 'ECONNABORTED',
    	          req
    	        ));
    	      });
    	    }

    	    if (config.cancelToken || config.signal) {
    	      // Handle cancellation
    	      // eslint-disable-next-line func-names
    	      onCanceled = function(cancel) {
    	        if (req.aborted) return;

    	        req.abort();
    	        reject(!cancel || (cancel && cancel.type) ? new Cancel('canceled') : cancel);
    	      };

    	      config.cancelToken && config.cancelToken.subscribe(onCanceled);
    	      if (config.signal) {
    	        config.signal.aborted ? onCanceled() : config.signal.addEventListener('abort', onCanceled);
    	      }
    	    }


    	    // Send the request
    	    if (utils.isStream(data)) {
    	      data.on('error', function handleStreamError(err) {
    	        reject(enhanceError(err, config, null, req));
    	      }).pipe(req);
    	    } else {
    	      req.end(data);
    	    }
    	  });
    	};
    	return http_1;
    }

    var utils$5 = utils$9;
    var normalizeHeaderName = normalizeHeaderName$1;
    var enhanceError = enhanceError$1;
    var transitionalDefaults = transitional;

    var DEFAULT_CONTENT_TYPE = {
      'Content-Type': 'application/x-www-form-urlencoded'
    };

    function setContentTypeIfUnset(headers, value) {
      if (!utils$5.isUndefined(headers) && utils$5.isUndefined(headers['Content-Type'])) {
        headers['Content-Type'] = value;
      }
    }

    function getDefaultAdapter() {
      var adapter;
      if (typeof XMLHttpRequest !== 'undefined') {
        // For browsers use XHR adapter
        adapter = requireXhr();
      } else if (typeof process !== 'undefined' && Object.prototype.toString.call(process) === '[object process]') {
        // For node use HTTP adapter
        adapter = requireHttp();
      }
      return adapter;
    }

    function stringifySafely(rawValue, parser, encoder) {
      if (utils$5.isString(rawValue)) {
        try {
          (parser || JSON.parse)(rawValue);
          return utils$5.trim(rawValue);
        } catch (e) {
          if (e.name !== 'SyntaxError') {
            throw e;
          }
        }
      }

      return (encoder || JSON.stringify)(rawValue);
    }

    var defaults$3 = {

      transitional: transitionalDefaults,

      adapter: getDefaultAdapter(),

      transformRequest: [function transformRequest(data, headers) {
        normalizeHeaderName(headers, 'Accept');
        normalizeHeaderName(headers, 'Content-Type');

        if (utils$5.isFormData(data) ||
          utils$5.isArrayBuffer(data) ||
          utils$5.isBuffer(data) ||
          utils$5.isStream(data) ||
          utils$5.isFile(data) ||
          utils$5.isBlob(data)
        ) {
          return data;
        }
        if (utils$5.isArrayBufferView(data)) {
          return data.buffer;
        }
        if (utils$5.isURLSearchParams(data)) {
          setContentTypeIfUnset(headers, 'application/x-www-form-urlencoded;charset=utf-8');
          return data.toString();
        }
        if (utils$5.isObject(data) || (headers && headers['Content-Type'] === 'application/json')) {
          setContentTypeIfUnset(headers, 'application/json');
          return stringifySafely(data);
        }
        return data;
      }],

      transformResponse: [function transformResponse(data) {
        var transitional = this.transitional || defaults$3.transitional;
        var silentJSONParsing = transitional && transitional.silentJSONParsing;
        var forcedJSONParsing = transitional && transitional.forcedJSONParsing;
        var strictJSONParsing = !silentJSONParsing && this.responseType === 'json';

        if (strictJSONParsing || (forcedJSONParsing && utils$5.isString(data) && data.length)) {
          try {
            return JSON.parse(data);
          } catch (e) {
            if (strictJSONParsing) {
              if (e.name === 'SyntaxError') {
                throw enhanceError(e, this, 'E_JSON_PARSE');
              }
              throw e;
            }
          }
        }

        return data;
      }],

      /**
       * A timeout in milliseconds to abort a request. If set to 0 (default) a
       * timeout is not created.
       */
      timeout: 0,

      xsrfCookieName: 'XSRF-TOKEN',
      xsrfHeaderName: 'X-XSRF-TOKEN',

      maxContentLength: -1,
      maxBodyLength: -1,

      validateStatus: function validateStatus(status) {
        return status >= 200 && status < 300;
      },

      headers: {
        common: {
          'Accept': 'application/json, text/plain, */*'
        }
      }
    };

    utils$5.forEach(['delete', 'get', 'head'], function forEachMethodNoData(method) {
      defaults$3.headers[method] = {};
    });

    utils$5.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      defaults$3.headers[method] = utils$5.merge(DEFAULT_CONTENT_TYPE);
    });

    var defaults_1 = defaults$3;

    var utils$4 = utils$9;
    var defaults$2 = defaults_1;

    /**
     * Transform the data for a request or a response
     *
     * @param {Object|String} data The data to be transformed
     * @param {Array} headers The headers for the request or response
     * @param {Array|Function} fns A single function or Array of functions
     * @returns {*} The resulting transformed data
     */
    var transformData$1 = function transformData(data, headers, fns) {
      var context = this || defaults$2;
      /*eslint no-param-reassign:0*/
      utils$4.forEach(fns, function transform(fn) {
        data = fn.call(context, data, headers);
      });

      return data;
    };

    var isCancel$1;
    var hasRequiredIsCancel;

    function requireIsCancel () {
    	if (hasRequiredIsCancel) return isCancel$1;
    	hasRequiredIsCancel = 1;

    	isCancel$1 = function isCancel(value) {
    	  return !!(value && value.__CANCEL__);
    	};
    	return isCancel$1;
    }

    var utils$3 = utils$9;
    var transformData = transformData$1;
    var isCancel = requireIsCancel();
    var defaults$1 = defaults_1;
    var Cancel = requireCancel();

    /**
     * Throws a `Cancel` if cancellation has been requested.
     */
    function throwIfCancellationRequested(config) {
      if (config.cancelToken) {
        config.cancelToken.throwIfRequested();
      }

      if (config.signal && config.signal.aborted) {
        throw new Cancel('canceled');
      }
    }

    /**
     * Dispatch a request to the server using the configured adapter.
     *
     * @param {object} config The config that is to be used for the request
     * @returns {Promise} The Promise to be fulfilled
     */
    var dispatchRequest$1 = function dispatchRequest(config) {
      throwIfCancellationRequested(config);

      // Ensure headers exist
      config.headers = config.headers || {};

      // Transform request data
      config.data = transformData.call(
        config,
        config.data,
        config.headers,
        config.transformRequest
      );

      // Flatten headers
      config.headers = utils$3.merge(
        config.headers.common || {},
        config.headers[config.method] || {},
        config.headers
      );

      utils$3.forEach(
        ['delete', 'get', 'head', 'post', 'put', 'patch', 'common'],
        function cleanHeaderConfig(method) {
          delete config.headers[method];
        }
      );

      var adapter = config.adapter || defaults$1.adapter;

      return adapter(config).then(function onAdapterResolution(response) {
        throwIfCancellationRequested(config);

        // Transform response data
        response.data = transformData.call(
          config,
          response.data,
          response.headers,
          config.transformResponse
        );

        return response;
      }, function onAdapterRejection(reason) {
        if (!isCancel(reason)) {
          throwIfCancellationRequested(config);

          // Transform response data
          if (reason && reason.response) {
            reason.response.data = transformData.call(
              config,
              reason.response.data,
              reason.response.headers,
              config.transformResponse
            );
          }
        }

        return Promise.reject(reason);
      });
    };

    var utils$2 = utils$9;

    /**
     * Config-specific merge-function which creates a new config-object
     * by merging two configuration objects together.
     *
     * @param {Object} config1
     * @param {Object} config2
     * @returns {Object} New object resulting from merging config2 to config1
     */
    var mergeConfig$2 = function mergeConfig(config1, config2) {
      // eslint-disable-next-line no-param-reassign
      config2 = config2 || {};
      var config = {};

      function getMergedValue(target, source) {
        if (utils$2.isPlainObject(target) && utils$2.isPlainObject(source)) {
          return utils$2.merge(target, source);
        } else if (utils$2.isPlainObject(source)) {
          return utils$2.merge({}, source);
        } else if (utils$2.isArray(source)) {
          return source.slice();
        }
        return source;
      }

      // eslint-disable-next-line consistent-return
      function mergeDeepProperties(prop) {
        if (!utils$2.isUndefined(config2[prop])) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (!utils$2.isUndefined(config1[prop])) {
          return getMergedValue(undefined, config1[prop]);
        }
      }

      // eslint-disable-next-line consistent-return
      function valueFromConfig2(prop) {
        if (!utils$2.isUndefined(config2[prop])) {
          return getMergedValue(undefined, config2[prop]);
        }
      }

      // eslint-disable-next-line consistent-return
      function defaultToConfig2(prop) {
        if (!utils$2.isUndefined(config2[prop])) {
          return getMergedValue(undefined, config2[prop]);
        } else if (!utils$2.isUndefined(config1[prop])) {
          return getMergedValue(undefined, config1[prop]);
        }
      }

      // eslint-disable-next-line consistent-return
      function mergeDirectKeys(prop) {
        if (prop in config2) {
          return getMergedValue(config1[prop], config2[prop]);
        } else if (prop in config1) {
          return getMergedValue(undefined, config1[prop]);
        }
      }

      var mergeMap = {
        'url': valueFromConfig2,
        'method': valueFromConfig2,
        'data': valueFromConfig2,
        'baseURL': defaultToConfig2,
        'transformRequest': defaultToConfig2,
        'transformResponse': defaultToConfig2,
        'paramsSerializer': defaultToConfig2,
        'timeout': defaultToConfig2,
        'timeoutMessage': defaultToConfig2,
        'withCredentials': defaultToConfig2,
        'adapter': defaultToConfig2,
        'responseType': defaultToConfig2,
        'xsrfCookieName': defaultToConfig2,
        'xsrfHeaderName': defaultToConfig2,
        'onUploadProgress': defaultToConfig2,
        'onDownloadProgress': defaultToConfig2,
        'decompress': defaultToConfig2,
        'maxContentLength': defaultToConfig2,
        'maxBodyLength': defaultToConfig2,
        'transport': defaultToConfig2,
        'httpAgent': defaultToConfig2,
        'httpsAgent': defaultToConfig2,
        'cancelToken': defaultToConfig2,
        'socketPath': defaultToConfig2,
        'responseEncoding': defaultToConfig2,
        'validateStatus': mergeDirectKeys
      };

      utils$2.forEach(Object.keys(config1).concat(Object.keys(config2)), function computeConfigValue(prop) {
        var merge = mergeMap[prop] || mergeDeepProperties;
        var configValue = merge(prop);
        (utils$2.isUndefined(configValue) && merge !== mergeDirectKeys) || (config[prop] = configValue);
      });

      return config;
    };

    var VERSION = requireData().version;

    var validators$1 = {};

    // eslint-disable-next-line func-names
    ['object', 'boolean', 'number', 'function', 'string', 'symbol'].forEach(function(type, i) {
      validators$1[type] = function validator(thing) {
        return typeof thing === type || 'a' + (i < 1 ? 'n ' : ' ') + type;
      };
    });

    var deprecatedWarnings = {};

    /**
     * Transitional option validator
     * @param {function|boolean?} validator - set to false if the transitional option has been removed
     * @param {string?} version - deprecated version / removed since version
     * @param {string?} message - some message with additional info
     * @returns {function}
     */
    validators$1.transitional = function transitional(validator, version, message) {
      function formatMessage(opt, desc) {
        return '[Axios v' + VERSION + '] Transitional option \'' + opt + '\'' + desc + (message ? '. ' + message : '');
      }

      // eslint-disable-next-line func-names
      return function(value, opt, opts) {
        if (validator === false) {
          throw new Error(formatMessage(opt, ' has been removed' + (version ? ' in ' + version : '')));
        }

        if (version && !deprecatedWarnings[opt]) {
          deprecatedWarnings[opt] = true;
          // eslint-disable-next-line no-console
          console.warn(
            formatMessage(
              opt,
              ' has been deprecated since v' + version + ' and will be removed in the near future'
            )
          );
        }

        return validator ? validator(value, opt, opts) : true;
      };
    };

    /**
     * Assert object's properties type
     * @param {object} options
     * @param {object} schema
     * @param {boolean?} allowUnknown
     */

    function assertOptions(options, schema, allowUnknown) {
      if (typeof options !== 'object') {
        throw new TypeError('options must be an object');
      }
      var keys = Object.keys(options);
      var i = keys.length;
      while (i-- > 0) {
        var opt = keys[i];
        var validator = schema[opt];
        if (validator) {
          var value = options[opt];
          var result = value === undefined || validator(value, opt, options);
          if (result !== true) {
            throw new TypeError('option ' + opt + ' must be ' + result);
          }
          continue;
        }
        if (allowUnknown !== true) {
          throw Error('Unknown option ' + opt);
        }
      }
    }

    var validator$1 = {
      assertOptions: assertOptions,
      validators: validators$1
    };

    var utils$1 = utils$9;
    var buildURL = buildURL$1;
    var InterceptorManager = InterceptorManager_1;
    var dispatchRequest = dispatchRequest$1;
    var mergeConfig$1 = mergeConfig$2;
    var validator = validator$1;

    var validators = validator.validators;
    /**
     * Create a new instance of Axios
     *
     * @param {Object} instanceConfig The default config for the instance
     */
    function Axios$1(instanceConfig) {
      this.defaults = instanceConfig;
      this.interceptors = {
        request: new InterceptorManager(),
        response: new InterceptorManager()
      };
    }

    /**
     * Dispatch a request
     *
     * @param {Object} config The config specific for this request (merged with this.defaults)
     */
    Axios$1.prototype.request = function request(configOrUrl, config) {
      /*eslint no-param-reassign:0*/
      // Allow for axios('example/url'[, config]) a la fetch API
      if (typeof configOrUrl === 'string') {
        config = config || {};
        config.url = configOrUrl;
      } else {
        config = configOrUrl || {};
      }

      config = mergeConfig$1(this.defaults, config);

      // Set config.method
      if (config.method) {
        config.method = config.method.toLowerCase();
      } else if (this.defaults.method) {
        config.method = this.defaults.method.toLowerCase();
      } else {
        config.method = 'get';
      }

      var transitional = config.transitional;

      if (transitional !== undefined) {
        validator.assertOptions(transitional, {
          silentJSONParsing: validators.transitional(validators.boolean),
          forcedJSONParsing: validators.transitional(validators.boolean),
          clarifyTimeoutError: validators.transitional(validators.boolean)
        }, false);
      }

      // filter out skipped interceptors
      var requestInterceptorChain = [];
      var synchronousRequestInterceptors = true;
      this.interceptors.request.forEach(function unshiftRequestInterceptors(interceptor) {
        if (typeof interceptor.runWhen === 'function' && interceptor.runWhen(config) === false) {
          return;
        }

        synchronousRequestInterceptors = synchronousRequestInterceptors && interceptor.synchronous;

        requestInterceptorChain.unshift(interceptor.fulfilled, interceptor.rejected);
      });

      var responseInterceptorChain = [];
      this.interceptors.response.forEach(function pushResponseInterceptors(interceptor) {
        responseInterceptorChain.push(interceptor.fulfilled, interceptor.rejected);
      });

      var promise;

      if (!synchronousRequestInterceptors) {
        var chain = [dispatchRequest, undefined];

        Array.prototype.unshift.apply(chain, requestInterceptorChain);
        chain = chain.concat(responseInterceptorChain);

        promise = Promise.resolve(config);
        while (chain.length) {
          promise = promise.then(chain.shift(), chain.shift());
        }

        return promise;
      }


      var newConfig = config;
      while (requestInterceptorChain.length) {
        var onFulfilled = requestInterceptorChain.shift();
        var onRejected = requestInterceptorChain.shift();
        try {
          newConfig = onFulfilled(newConfig);
        } catch (error) {
          onRejected(error);
          break;
        }
      }

      try {
        promise = dispatchRequest(newConfig);
      } catch (error) {
        return Promise.reject(error);
      }

      while (responseInterceptorChain.length) {
        promise = promise.then(responseInterceptorChain.shift(), responseInterceptorChain.shift());
      }

      return promise;
    };

    Axios$1.prototype.getUri = function getUri(config) {
      config = mergeConfig$1(this.defaults, config);
      return buildURL(config.url, config.params, config.paramsSerializer).replace(/^\?/, '');
    };

    // Provide aliases for supported request methods
    utils$1.forEach(['delete', 'get', 'head', 'options'], function forEachMethodNoData(method) {
      /*eslint func-names:0*/
      Axios$1.prototype[method] = function(url, config) {
        return this.request(mergeConfig$1(config || {}, {
          method: method,
          url: url,
          data: (config || {}).data
        }));
      };
    });

    utils$1.forEach(['post', 'put', 'patch'], function forEachMethodWithData(method) {
      /*eslint func-names:0*/
      Axios$1.prototype[method] = function(url, data, config) {
        return this.request(mergeConfig$1(config || {}, {
          method: method,
          url: url,
          data: data
        }));
      };
    });

    var Axios_1 = Axios$1;

    var CancelToken_1;
    var hasRequiredCancelToken;

    function requireCancelToken () {
    	if (hasRequiredCancelToken) return CancelToken_1;
    	hasRequiredCancelToken = 1;

    	var Cancel = requireCancel();

    	/**
    	 * A `CancelToken` is an object that can be used to request cancellation of an operation.
    	 *
    	 * @class
    	 * @param {Function} executor The executor function.
    	 */
    	function CancelToken(executor) {
    	  if (typeof executor !== 'function') {
    	    throw new TypeError('executor must be a function.');
    	  }

    	  var resolvePromise;

    	  this.promise = new Promise(function promiseExecutor(resolve) {
    	    resolvePromise = resolve;
    	  });

    	  var token = this;

    	  // eslint-disable-next-line func-names
    	  this.promise.then(function(cancel) {
    	    if (!token._listeners) return;

    	    var i;
    	    var l = token._listeners.length;

    	    for (i = 0; i < l; i++) {
    	      token._listeners[i](cancel);
    	    }
    	    token._listeners = null;
    	  });

    	  // eslint-disable-next-line func-names
    	  this.promise.then = function(onfulfilled) {
    	    var _resolve;
    	    // eslint-disable-next-line func-names
    	    var promise = new Promise(function(resolve) {
    	      token.subscribe(resolve);
    	      _resolve = resolve;
    	    }).then(onfulfilled);

    	    promise.cancel = function reject() {
    	      token.unsubscribe(_resolve);
    	    };

    	    return promise;
    	  };

    	  executor(function cancel(message) {
    	    if (token.reason) {
    	      // Cancellation has already been requested
    	      return;
    	    }

    	    token.reason = new Cancel(message);
    	    resolvePromise(token.reason);
    	  });
    	}

    	/**
    	 * Throws a `Cancel` if cancellation has been requested.
    	 */
    	CancelToken.prototype.throwIfRequested = function throwIfRequested() {
    	  if (this.reason) {
    	    throw this.reason;
    	  }
    	};

    	/**
    	 * Subscribe to the cancel signal
    	 */

    	CancelToken.prototype.subscribe = function subscribe(listener) {
    	  if (this.reason) {
    	    listener(this.reason);
    	    return;
    	  }

    	  if (this._listeners) {
    	    this._listeners.push(listener);
    	  } else {
    	    this._listeners = [listener];
    	  }
    	};

    	/**
    	 * Unsubscribe from the cancel signal
    	 */

    	CancelToken.prototype.unsubscribe = function unsubscribe(listener) {
    	  if (!this._listeners) {
    	    return;
    	  }
    	  var index = this._listeners.indexOf(listener);
    	  if (index !== -1) {
    	    this._listeners.splice(index, 1);
    	  }
    	};

    	/**
    	 * Returns an object that contains a new `CancelToken` and a function that, when called,
    	 * cancels the `CancelToken`.
    	 */
    	CancelToken.source = function source() {
    	  var cancel;
    	  var token = new CancelToken(function executor(c) {
    	    cancel = c;
    	  });
    	  return {
    	    token: token,
    	    cancel: cancel
    	  };
    	};

    	CancelToken_1 = CancelToken;
    	return CancelToken_1;
    }

    var spread;
    var hasRequiredSpread;

    function requireSpread () {
    	if (hasRequiredSpread) return spread;
    	hasRequiredSpread = 1;

    	/**
    	 * Syntactic sugar for invoking a function and expanding an array for arguments.
    	 *
    	 * Common use case would be to use `Function.prototype.apply`.
    	 *
    	 *  ```js
    	 *  function f(x, y, z) {}
    	 *  var args = [1, 2, 3];
    	 *  f.apply(null, args);
    	 *  ```
    	 *
    	 * With `spread` this example can be re-written.
    	 *
    	 *  ```js
    	 *  spread(function(x, y, z) {})([1, 2, 3]);
    	 *  ```
    	 *
    	 * @param {Function} callback
    	 * @returns {Function}
    	 */
    	spread = function spread(callback) {
    	  return function wrap(arr) {
    	    return callback.apply(null, arr);
    	  };
    	};
    	return spread;
    }

    var isAxiosError;
    var hasRequiredIsAxiosError;

    function requireIsAxiosError () {
    	if (hasRequiredIsAxiosError) return isAxiosError;
    	hasRequiredIsAxiosError = 1;

    	var utils = utils$9;

    	/**
    	 * Determines whether the payload is an error thrown by Axios
    	 *
    	 * @param {*} payload The value to test
    	 * @returns {boolean} True if the payload is an error thrown by Axios, otherwise false
    	 */
    	isAxiosError = function isAxiosError(payload) {
    	  return utils.isObject(payload) && (payload.isAxiosError === true);
    	};
    	return isAxiosError;
    }

    var utils = utils$9;
    var bind = bind$2;
    var Axios = Axios_1;
    var mergeConfig = mergeConfig$2;
    var defaults = defaults_1;

    /**
     * Create an instance of Axios
     *
     * @param {Object} defaultConfig The default config for the instance
     * @return {Axios} A new instance of Axios
     */
    function createInstance(defaultConfig) {
      var context = new Axios(defaultConfig);
      var instance = bind(Axios.prototype.request, context);

      // Copy axios.prototype to instance
      utils.extend(instance, Axios.prototype, context);

      // Copy context to instance
      utils.extend(instance, context);

      // Factory for creating new instances
      instance.create = function create(instanceConfig) {
        return createInstance(mergeConfig(defaultConfig, instanceConfig));
      };

      return instance;
    }

    // Create the default instance to be exported
    var axios$1 = createInstance(defaults);

    // Expose Axios class to allow class inheritance
    axios$1.Axios = Axios;

    // Expose Cancel & CancelToken
    axios$1.Cancel = requireCancel();
    axios$1.CancelToken = requireCancelToken();
    axios$1.isCancel = requireIsCancel();
    axios$1.VERSION = requireData().version;

    // Expose all/spread
    axios$1.all = function all(promises) {
      return Promise.all(promises);
    };
    axios$1.spread = requireSpread();

    // Expose isAxiosError
    axios$1.isAxiosError = requireIsAxiosError();

    axios$2.exports = axios$1;

    // Allow use of default import syntax in TypeScript
    axios$2.exports.default = axios$1;

    (function (module) {
    	module.exports = axios$2.exports;
    } (axios$3));

    var axios = /*@__PURE__*/getDefaultExportFromCjs(axios$3.exports);

    class ApiError extends Error {
        constructor(error) {
            super(error.detail);
            this._problemDetails = error;
        }
        get problemDetails() {
            return this._problemDetails;
        }
    }
    class ForbiddenResultError extends Error {
        constructor() {
            super("Forbidden");
        }
        get isForbiddenResult() {
            return true;
        }
    }
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    function isProblemDetails(error) {
        return "type" in error && "status" in error;
    }

    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    const buildResponseError = (err) => {
        var _a, _b, _c;
        if ("response" in err) {
            if (((_a = err === null || err === void 0 ? void 0 : err.response) === null || _a === void 0 ? void 0 : _a.status) === 404) {
                return new Error("There may be a problem with the backend. Resource not found.");
            }
            else if ((err === null || err === void 0 ? void 0 : err.response.status) === 403) {
                return new ForbiddenResultError();
            }
        }
        else if (err.message === "Network Error") {
            return new Error("Cannot call RPA Forms due to network error, please check your network connection status and try again");
        }
        else {
            let funcErrorMsg = err.message;
            if ((_c = (_b = err.response) === null || _b === void 0 ? void 0 : _b.data) === null || _c === void 0 ? void 0 : _c.error) {
                funcErrorMsg += ": " + err.response.data.error;
            }
            return new Error(funcErrorMsg);
        }
    };
    let httpRpaFormsClient;
    const configureHttpRpaFormsClient = () => {
        const { serviceUrl } = getAppSettings();
        httpRpaFormsClient = axios.create({
            baseURL: serviceUrl,
        });
        httpRpaFormsClient.interceptors.request.use((options) => __awaiter$2(void 0, void 0, void 0, function* () {
            const accessToken = yield getTokenPopup();
            options.headers = Object.assign(Object.assign({}, options.headers), { authorization: "Bearer " + accessToken });
            return options;
        }));
        httpRpaFormsClient.interceptors.response.use(undefined, (error) => {
            const processedError = isProblemDetails(error)
                ? new ApiError(error)
                : buildResponseError(error);
            return Promise.reject(processedError);
        });
    };
    const getHttpRpaFormsClient = () => {
        if (!httpRpaFormsClient)
            throw new Error("HttpRpaFormsClient not initialized.");
        return httpRpaFormsClient;
    };

    const formDefinitions = () => __awaiter$2(void 0, void 0, void 0, function* () {
        const endpoint = `ConnectDashboard/launchForms`;
        const response = yield getHttpRpaFormsClient().get(endpoint);
        return response.data;
    });

    const create = (formDefinitionId, expiresAt, useExistingDraft, initialValues) => __awaiter$2(void 0, void 0, void 0, function* () {
        const endpoint = "FormInstance";
        const response = yield getHttpRpaFormsClient().post(endpoint, {
            formId: formDefinitionId,
            initialValues,
            expiresAt,
            useExistingDraft,
        });
        return {
            formInstanceId: response.data.sharedFormId,
            formInstanceToken: response.data.sharedFormToken,
            formInstanceUri: buildFormInstanceUri(response.data.sharedFormToken),
        };
    });
    const listUserInstances = (options) => __awaiter$2(void 0, void 0, void 0, function* () {
        const { continuationToken = null } = options, queryOptions = __rest(options, ["continuationToken"]);
        const endpoint = "FormInstance";
        const headers = continuationToken
            ? { "x-form-continuation": continuationToken }
            : undefined;
        const response = yield getHttpRpaFormsClient().get(endpoint, {
            params: queryOptions,
            headers,
        });
        return response.data;
    });
    const getInstanceUri = (id, expiresAt) => __awaiter$2(void 0, void 0, void 0, function* () {
        const endpoint = `FormInstance/GetAccessToken/${id}`;
        const response = yield getHttpRpaFormsClient().get(endpoint, { params: { expiresAt } });
        return buildFormInstanceUri(response.data.sharedFormToken);
    });
    const deleteInstance = (id) => __awaiter$2(void 0, void 0, void 0, function* () {
        const endpoint = `FormInstance/${id}`;
        const response = yield getHttpRpaFormsClient().delete(endpoint);
        return response.data;
    });
    const buildFormInstanceUri = (token) => {
        const { publicFillUrl } = getAppSettings();
        return `${publicFillUrl}?token=${token}`;
    };

    const initialize = (options) => {
        configureSettings(options);
        configureAuth();
        if (!isDelegatedAuthentictionOptions(options.authentication)) {
            selectAccount();
        }
        configureHttpRpaFormsClient();
    };

    const rpaFormsConnectSdkConfig = {
        authentication: {
            clientId: "18db5397-4d46-4300-9e36-6d8c5c28a818",
            authority: "https://login.microsoftonline.com/organizations",
            redirectUri: "http://localhost:5500/samples/html-static/blank.html",
            appIdURI: "api://rpaforms-dev.azurewebsites.net/d3acdcda-130c-419a-b9d6-6ca1e0d2ceef",
        },
        serviceUrl: "https://rpaforms-dev.azurewebsites.net/api",
        publicFillUrl: "https://rpaforms-dev.azurewebsites.net/public/fill",
    };
    //mapeo de elementos de la página
    const signInButton = document.getElementById("SignIn");
    const signOutButton = document.getElementById("SignOut");
    const listFormDefinitionsButton = document.getElementById("ListFormDefinitions");
    const loadMoreButton = document.getElementById("ListFormInstancesMore");
    loadMoreButton.hidden = true;
    const listFormDefinitionsResult = document.getElementById("ListFormDefinitionsResult");
    let selectedFormDefinitionId = "";
    let currentContinuationToken = null;
    const listFormInstancesMessage = document.getElementById("ListFormInstancesMessage");
    const listFormInstancesResult = document.getElementById("ListFormInstancesResult");
    //listar los forms que el usuario puede crear
    const handleListFormDefinitions = () => {
        listFormDefinitionsResult.innerHTML = "Loading...";
        return formDefinitions()
            .then((result) => {
            buildFormDefinitionsList(result);
        })
            .catch((e) => {
            listFormDefinitionsResult.innerHTML = e.message;
        });
    };
    //listar las instancias de forms cargados por el usuario
    const handleListFormInstances = (addMore) => {
        if (!selectedFormDefinitionId) {
            listFormInstancesMessage.innerHTML = "Debe seleccionar un formDefinitionId";
            return;
        }
        listFormInstancesMessage.innerHTML = "Loading...";
        listUserInstances({
            formDefinitionId: selectedFormDefinitionId,
            maxItemCount: 2,
            continuationToken: currentContinuationToken,
        })
            .then((result) => {
            buildFormInstancesList(result, addMore);
            listFormInstancesMessage.innerHTML = "";
        })
            .catch((e) => {
            listFormInstancesMessage.innerHTML = e.message;
        });
    };
    //autenticación
    const setAccountInfo = () => {
        if (isAutenticated()) {
            signInButton.hidden = true;
            signOutButton.hidden = false;
        }
        else {
            signInButton.hidden = !needsExplicitLogin();
            signOutButton.hidden = true;
        }
    };
    const handleSignIn = () => {
        if (isAutenticated())
            return;
        signIn().then(() => {
            setAccountInfo();
        });
    };
    const handleSignOut = () => {
        if (!isAutenticated())
            return;
        signOut().then(() => {
            setAccountInfo();
        });
    };
    const createFormInstance = (id) => {
        create(id)
            .then((result) => {
            window.open(result.formInstanceUri, "RPA Forms");
        })
            .catch((e) => {
            alert(e ? e.message : "Error");
        });
    };
    const openFormInstance = (id) => {
        getInstanceUri(id)
            .then((result) => {
            window.open(result, "RPA Forms");
        })
            .catch((e) => {
            alert(e ? e.message : "Error");
        });
    };
    const deleteFormInstance = (id, tr) => {
        deleteInstance(id)
            .then(() => {
            const rowIndex = tr.rowIndex;
            // eslint-disable-next-line @typescript-eslint/no-non-null-assertion
            const table = tr.parentElement.parentElement;
            table.deleteRow(rowIndex);
        })
            .catch((e) => {
            alert(e ? e.message : "Error");
        });
    };
    const buildFormDefinitionsList = (formDefinitions) => {
        const table = document.createElement("table");
        table.className = "table table-bordered";
        const tBody = document.createElement("tbody");
        formDefinitions.forEach((formDef) => {
            var _a, _b;
            const tr = document.createElement("tr");
            const tdFormId = document.createElement("td");
            tdFormId.appendChild(document.createTextNode(formDef.formDefinitionId));
            const tdFormName = document.createElement("td");
            tdFormName.appendChild(document.createTextNode(formDef.name));
            const tdFormTags = document.createElement("td");
            tdFormTags.appendChild(document.createTextNode((_b = (_a = formDef.tags) === null || _a === void 0 ? void 0 : _a.join(",")) !== null && _b !== void 0 ? _b : "No hay tags definidos"));
            const tdCreate = document.createElement("td");
            const btnCreate = document.createElement("button");
            btnCreate.addEventListener("click", () => createFormInstance(formDef.formDefinitionId));
            btnCreate.innerHTML = "Iniciar";
            btnCreate.className = "btn btn-primary";
            tdCreate.appendChild(btnCreate);
            const tdList = document.createElement("td");
            const btnList = document.createElement("button");
            btnList.addEventListener("click", () => {
                selectedFormDefinitionId = formDef.formDefinitionId;
                currentContinuationToken = null;
                return handleListFormInstances(false);
            });
            btnList.innerHTML = "Listar";
            btnList.className = "btn btn-primary";
            tdList.appendChild(btnList);
            tr.appendChild(tdFormId);
            tr.appendChild(tdFormName);
            tr.appendChild(tdFormTags);
            tr.appendChild(tdCreate);
            tr.appendChild(tdList);
            tBody.appendChild(tr);
        });
        table.appendChild(tBody);
        listFormDefinitionsResult.replaceChildren(table);
    };
    const buildFormInstancesList = (formInstanceResult, addMore) => {
        let tBody;
        if (addMore) {
            let table = listFormInstancesResult.children[0];
            if (!table) {
                table = document.createElement("table");
                table.className = "table";
                listFormInstancesResult.replaceChildren(table);
            }
            tBody = table.children[0];
            if (!tBody) {
                tBody = document.createElement("tbody");
                table.appendChild(tBody);
            }
        }
        else {
            const table = document.createElement("table");
            table.className = "table";
            listFormInstancesResult.replaceChildren(table);
            tBody = document.createElement("tbody");
            table.appendChild(tBody);
        }
        formInstanceResult.result.forEach((instance) => {
            var _a;
            const tr = document.createElement("tr");
            const tdFormTitle = document.createElement("td");
            tdFormTitle.appendChild(document.createTextNode((_a = instance.title) !== null && _a !== void 0 ? _a : `${instance.name} (Nuevo)`));
            const tdState = document.createElement("td");
            tdState.appendChild(document.createTextNode(instance.state));
            const tdLastSaved = document.createElement("td");
            tdLastSaved.appendChild(document.createTextNode(instance.lastSaved
                ? new Date(instance.lastSaved).toLocaleString()
                : "---"));
            const tdOpen = document.createElement("td");
            const btnOpen = document.createElement("button");
            btnOpen.addEventListener("click", () => openFormInstance(instance.id));
            btnOpen.innerHTML = "Ver";
            btnOpen.className = "btn btn-primary";
            tdOpen.appendChild(btnOpen);
            const tdDelete = document.createElement("td");
            const btnDelete = document.createElement("button");
            btnDelete.addEventListener("click", () => deleteFormInstance(instance.id, tr));
            btnDelete.innerHTML = "Borrar";
            btnDelete.className = "btn btn-secondary";
            tdOpen.appendChild(btnDelete);
            tr.appendChild(tdFormTitle);
            tr.appendChild(tdState);
            tr.appendChild(tdLastSaved);
            tr.appendChild(tdOpen);
            tr.appendChild(tdDelete);
            tBody.appendChild(tr);
        });
        currentContinuationToken = formInstanceResult.continuationToken;
        loadMoreButton.hidden = !currentContinuationToken;
    };
    document.addEventListener("DOMContentLoaded", function () {
        initialize(rpaFormsConnectSdkConfig);
        signInButton.addEventListener("click", handleSignIn);
        signOutButton.addEventListener("click", handleSignOut);
        selectAccount();
        setAccountInfo();
        listFormDefinitionsButton.addEventListener("click", withAuthentication(handleListFormDefinitions));
        loadMoreButton.hidden = true;
        loadMoreButton.addEventListener("click", () => handleListFormInstances(true));
    }, false);

}));
//# sourceMappingURL=index.js.map
