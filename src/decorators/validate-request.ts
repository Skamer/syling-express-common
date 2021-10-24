import "reflect-metadata";
import { NextFunction, Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { MetadataKeys } from "./metadata-keys";
import { RequestValidationError } from "../errors/request-validation-error";

export const validateRequest = (type: any) => (target: any, key: string) => {
  const validateMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) {
      // @TODO: add an exception here
      res.send("Error");
      return;
    }

    const oData = plainToClass(type, req.body, { excludeExtraneousValues: true });
    const errors = await validate(oData);

    if (errors && errors.length > 0) {
      next(new RequestValidationError(errors));
    } else {
      next();
    }
  };

  Reflect.defineMetadata(MetadataKeys.validation, validateMiddleware, target, key);
};

export const validateBody = validateRequest;
