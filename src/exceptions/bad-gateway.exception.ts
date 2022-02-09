import { HttpStatus } from "./http-status";
import { HttpException } from "./http.exception";

export class BadGatewayException extends HttpException {
  constructor(responseOrReason?: string | object, code = "BAD_GATEWAY") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.BAD_GATEWAY),
      HttpStatus.BAD_GATEWAY
    );
  }
}
