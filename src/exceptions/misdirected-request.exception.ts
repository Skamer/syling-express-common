import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class MisdirectedRequestException extends HttpException {
  constructor(responseOrReason?: string | object, code = "MISDIRECTED_REQUEST") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.MISDIRECTED_REQUEST),
      HttpStatus.MISDIRECTED_REQUEST
    );
  }
}
