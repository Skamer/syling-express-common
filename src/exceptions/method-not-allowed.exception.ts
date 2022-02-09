import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class MethodNotAllowedException extends HttpException {
  constructor(responseOrReason?: string | object, code = "METHOD_NOT_ALLOWED") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.METHOD_NOT_ALLOWED),
      HttpStatus.METHOD_NOT_ALLOWED
    );
  }
}
