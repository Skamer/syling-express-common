import "reflect-metadata";
import { NextFunction, Request, Response } from "express";
import { plainToInstance } from "class-transformer";
import { validate, ValidationError } from "class-validator";
import { MetadataKeys } from "./metadata-keys";
import { InvalidRequestBodyException } from "../exceptions/invalid-request-body.exception";

const serializeErrors = (errors: ValidationError[]) => {
  const serializedErrors: any[] = [];

  errors.forEach((err) => {
    if (err.constraints !== undefined) {
      for (const contraint in err.constraints) {
        serializedErrors.push({
          field: err.property,
          message: err.constraints[contraint],
        });
      }
    }
  });

  return serializedErrors;
};

export const validateRequest = (type: any) => (target: any, key: string) => {
  const validateMiddleware = async (req: Request, res: Response, next: NextFunction) => {
    if (!req.body) {
      next(new InvalidRequestBodyException("body is missing"));
    }

    const oData = plainToInstance(type, req.body);
    const errors = await validate(oData, { whitelist: true });

    if (errors && errors.length > 0) {
      next(new InvalidRequestBodyException(serializeErrors(errors)));
    } else {
      req.body = oData;
      next();
    }
  };

  Reflect.defineMetadata(MetadataKeys.validation, validateMiddleware, target, key);
};

export const validateBody = validateRequest;
