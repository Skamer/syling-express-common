import "reflect-metadata";
import { NextFunction, Request, Response } from "express";
import { instanceToPlain, plainToInstance } from "class-transformer";
import { MetadataKeys } from "./metadata-keys";

export const serializeResponse = (type: any) => (target: any, key: string) => {
  const serialize = (req: Request, res: Response, next: NextFunction) => {
    const oldSend = res.send;

    res.send = (data: any) => {
      const classData = plainToInstance(type, data);
      const jsonData = instanceToPlain(classData, { excludeExtraneousValues: true });

      return oldSend.call(res, jsonData);
    };

    next();
  };

  Reflect.defineMetadata(MetadataKeys.serialization, serialize, target, key);
};
