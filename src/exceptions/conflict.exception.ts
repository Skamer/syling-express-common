import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class ConflictException extends HttpException {
  constructor(responseOrReason?: string | object, code = "CONFLICT") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.CONFLICT),
      HttpStatus.CONFLICT
    );
  }
}
