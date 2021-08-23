import { ValidationError } from "class-validator";
import { CustomError, ISerializationErrorInfo } from "./custom-error";

export class RequestValidationError extends CustomError {
  statusCode = 400;
  name = "Bad Request";

  constructor(public errors: ValidationError[]) {
    super("Invalid request parameters");

    Object.setPrototypeOf(this, RequestValidationError.prototype);
  }

  serializeErrors() {
    const errors: ISerializationErrorInfo[] = [];

    this.errors.forEach((err) => {
      if (err.constraints !== undefined) {
        for (const constraint in err.constraints) {
          errors.push({
            reason: err.constraints[constraint],
            field: err.property,
          });
        }
      }
    });

    return errors;
  }
}
