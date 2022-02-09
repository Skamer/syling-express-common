import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class ServiceUnavailableException extends HttpException {
  constructor(responseOrReason?: string | object, code = "SERVICE_UNAVAILABLE") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.SERVICE_UNAVAILABLE),
      HttpStatus.SERVICE_UNAVAILABLE
    );
  }
}
