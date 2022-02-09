import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class GatewayTimeoutException extends HttpException {
  constructor(responseOrReason?: string | object, code = "GATEWAY_TIMEOUT") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.GATEWAY_TIMEOUT),
      HttpStatus.GATEWAY_TIMEOUT
    );
  }
}
