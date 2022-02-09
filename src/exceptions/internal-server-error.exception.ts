import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class InternalServerErrorException extends HttpException {
  constructor(responseOrReason?: string | object, code = "INTERNAL_SERVER_ERROR") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.INTERNAL_SERVER_ERROR),
      HttpStatus.INTERNAL_SERVER_ERROR
    );
  }
}
