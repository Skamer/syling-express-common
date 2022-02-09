import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class NotAcceptableException extends HttpException {
  constructor(responseOrReason?: string | object, code = "NOT_ACCEPTABLE") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.NOT_ACCEPTABLE),
      HttpStatus.NOT_ACCEPTABLE
    );
  }
}
