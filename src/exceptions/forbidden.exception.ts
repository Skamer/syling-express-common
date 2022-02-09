import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class ForbiddenException extends HttpException {
  constructor(responseOrReason?: string | object, code = "FORBIDDEN") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.FORBIDDEN),
      HttpStatus.FORBIDDEN
    );
  }
}
