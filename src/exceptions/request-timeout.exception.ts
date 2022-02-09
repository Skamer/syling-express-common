import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class RequestTimeoutException extends HttpException {
  constructor(responseOrReason?: string | object, code = "REQUEST_TIMEOUT") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.REQUEST_TIMEOUT),
      HttpStatus.REQUEST_TIMEOUT
    );
  }
}
