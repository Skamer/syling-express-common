import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class InvalidRequestBodyException extends HttpException {
  constructor(responseOrReason?: string | object, code = "INVALID_REQUEST_BODY") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.BAD_REQUEST),
      HttpStatus.BAD_REQUEST
    );
  }
}
