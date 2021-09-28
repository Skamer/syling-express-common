import "reflect-metadata";
import { NextFunction, Request, Response } from "express";

import { classToPlain, plainToClass } from "class-transformer";
import { MetadataKeys } from "./metadata-keys";

export const serializeResponse = (type: any) => (target: any, key: string) => {
  const serialize = (req: Request, res: Response, next: NextFunction) => {
    const oldSend = res.send;

    res.send = (data: any) => {
      const classData = plainToClass(type, data);
      const jsonData = classToPlain(classData, { excludeExtraneousValues: true });

      return oldSend.call(res, jsonData);
    };

    next();
  };

  Reflect.defineMetadata(MetadataKeys.serialization, serialize, target, key);
};
