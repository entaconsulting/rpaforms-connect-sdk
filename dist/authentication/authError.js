"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountNotFoundError = void 0;
class AccountNotFoundError extends Error {
    get isAccountNotFound() {
        return true;
    }
}
exports.AccountNotFoundError = AccountNotFoundError;
//# sourceMappingURL=authError.js.map