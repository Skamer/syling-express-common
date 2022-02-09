import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class NotImplementedException extends HttpException {
  constructor(responseOrReason?: string | object, code = "NOT_IMPLEMENTED") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.NOT_IMPLEMENTED),
      HttpStatus.NOT_IMPLEMENTED
    );
  }
}
