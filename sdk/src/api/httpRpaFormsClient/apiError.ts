interface ProblemDetails {
  type: string;
  status: number;
  detail: string;
}

export class ApiError extends Error {
  constructor(error: ProblemDetails) {
    super(error.detail);
    this._problemDetails = error;
  }

  private _problemDetails: ProblemDetails;
  public get problemDetails(): ProblemDetails {
    return this._problemDetails;
  }
}

export class ForbiddenResultError extends Error {
  constructor() {
    super("Forbidden");
  }

  public get isForbiddenResult(): boolean {
    return true;
  }
}

export class UnauthorizedResultError extends Error {
  constructor() {
    super("Unauthorized");
  }

  public get isUnauthorizedResult(): boolean {
    return true;
  }
}
export function isApiError(error: Error): error is ApiError {
  return "problemDetails" in error;
}
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function isProblemDetails(error: any): error is ProblemDetails {
  return "type" in error && "status" in error;
}

export function isForbiddenResultError(error: Error) {
  return "isForbiddenResult" in error;
}
