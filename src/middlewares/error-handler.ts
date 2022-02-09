import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions/http.exception";
import { CustomError } from "../errors/custom-error";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {
  if (err instanceof CustomError) {
    return res.status(err.statusCode).send({
      statusCode: err.statusCode,
      message: err.serializeErrors(),
      error: err.name,
    });
  }

  if (err instanceof HttpException) {
    return res.status(err.getStatus()).send(err.getResponse());
  }

  console.log("Errror", err);
};
