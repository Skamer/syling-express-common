import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions/http.exception";
import { InternalServerErrorException } from "../exceptions/internal-server-error.exception";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof HttpException) {
    return res.status(err.getStatus()).send(err.getResponse());
  }

  console.error(err)

  const internalServerError = new InternalServerErrorException()
  return res.status(internalServerError.getStatus()).send(internalServerError.getResponse())
};