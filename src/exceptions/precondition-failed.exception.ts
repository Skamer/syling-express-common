import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class PreconditionFailedException extends HttpException {
  constructor(responseOrReason?: string | object, code = "PRECONDITION_FAILED") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.PRECONDITION_FAILED),
      HttpStatus.PRECONDITION_FAILED
    );
  }
}
