import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class BadRequestException extends HttpException {
  constructor(responseOrReason?: string | object, code = "BAD_REQUEST") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.BAD_REQUEST),
      HttpStatus.BAD_REQUEST
    );
  }
}
