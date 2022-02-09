import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class GoneException extends HttpException {
  constructor(responseOrReason?: string | object, code = "GONE") {
    super(HttpException.createBody(responseOrReason, code, HttpStatus.GONE), HttpStatus.GONE);
  }
}
