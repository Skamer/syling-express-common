import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class PayloadTooLargeException extends HttpException {
  constructor(responseOrReason?: string | object, code = "PAYLOAD_TOO_LARGE") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.PAYLOAD_TOO_LARGE),
      HttpStatus.PAYLOAD_TOO_LARGE
    );
  }
}
