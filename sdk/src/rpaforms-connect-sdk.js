"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
exports.__esModule = true;
exports.initialize = exports.formInstance = exports.userProfile = exports.authentication = void 0;
exports.authentication = require("./authentication/authentication");
exports.userProfile = require("./api/userProfile/userProfile");
exports.formInstance = require("./api/formInstance/formInstance");
var initialize_1 = require("./configuration/initialize");
__createBinding(exports, initialize_1, "default", "initialize");
__exportStar(require("./api/userProfile/types"), exports);
__exportStar(require("./api/formInstance/types"), exports);
__exportStar(require("./configuration/types"), exports);
