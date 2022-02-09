import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class NotFoundException extends HttpException {
  constructor(responseOrReason?: string | object, code = "NOT_FOUND") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.NOT_FOUND),
      HttpStatus.NOT_FOUND
    );
  }
}
