export class AccountNotFoundError extends Error {
  public get isAccountNotFound(): boolean {
    return true;
  }
}
