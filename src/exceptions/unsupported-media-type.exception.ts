import { HttpException } from "./http.exception";
import { HttpStatus } from "./http-status";

export class UnsupportedMediaTypeException extends HttpException {
  constructor(responseOrReason?: string | object, code = "UNSUPPORTED_MEDIA_TYPE") {
    super(
      HttpException.createBody(responseOrReason, code, HttpStatus.UNSUPPORTED_MEDIA_TYPE),
      HttpStatus.UNSUPPORTED_MEDIA_TYPE
    );
  }
}
