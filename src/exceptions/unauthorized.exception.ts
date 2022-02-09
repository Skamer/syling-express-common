import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class UnauthorizedException extends HttpException {
  constructor(responseOrReason?: string | object, code = "UNAUTHORIZED") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.UNAUTHORIZED),
      HttpStatus.UNAUTHORIZED
    );
  }
}
