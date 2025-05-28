export class ErrorStatus extends Error {
  status: ErrorCodes;
  message: string;

  constructor(status: ErrorCodes, message: string) {
    super(message);
    this.status = status;
    this.message = message;
  }
}

export enum ErrorCodes {
  BAD_REQUEST = 400,
  UNAUTHORIZED = 401,
  NOT_FOUND = 404,
  INTERNAL_SERVER_ERROR = 500,
  NOT_IMPLEMENTED = 501,
  SERVICE_UNAVAILABLE = 503,
}
