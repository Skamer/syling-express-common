import "reflect-metadata";
import { NextFunction, Request, Response } from "express";
import { plainToClass } from "class-transformer";
import { validate } from "class-validator";
import { MetadataKeys } from "./metadata-keys";

export const validateRequest =
  (type: any) => (target: any, key: string, desc: PropertyDecorator) => {
    const validateMiddleware = async (req: Request, res: Response, next: NextFunction) => {
      if (!req.body) {
        // @TODO: add an exception here
        res.send("Error");
        return;
      }

      const oData = plainToClass(type, req.body);
      const errors = await validate(oData);

      if (errors) {
        // next(new RequestValidationError(error))
      } else {
        next();
      }
    };

    Reflect.defineMetadata(MetadataKeys.validation, validateMiddleware, target, key);
  };
