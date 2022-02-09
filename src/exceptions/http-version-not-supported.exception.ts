import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class HttpVersionNotSupportedException extends HttpException {
  constructor(responseOrReason?: string | object, code = "HTTP_VERSION_NOT_SUPPORTED") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.HTTP_VERSION_NOT_SUPPORTED),
      HttpStatus.HTTP_VERSION_NOT_SUPPORTED
    );
  }
}
