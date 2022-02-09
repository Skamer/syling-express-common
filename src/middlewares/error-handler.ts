import { NextFunction, Request, Response } from "express";
import { HttpException } from "../exceptions/http.exception";

export const errorHandler = (err: Error, req: Request, res: Response, next: NextFunction) => {

  if (err instanceof HttpException) {
    return res.status(err.getStatus()).send(err.getResponse());
  }

  console.log("Errror", err);
};
