import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class UnprocessableEntityException extends HttpException {
  constructor(responseOrReason?: string | object, code = "UNPROCESSABLE_ENTITY") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.UNPROCESSABLE_ENTITY),
      HttpStatus.UNPROCESSABLE_ENTITY
    );
  }
}
