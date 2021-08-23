import { CustomError } from "./custom-error";

export class NotFoundError extends CustomError {
  statusCode = 404;
  name = "Not Found";

  constructor() {
    super("The route hasn't found");

    Object.setPrototypeOf(this, NotFoundError.prototype);
  }

  serializeErrors() {
    return this.name;
  }
}
