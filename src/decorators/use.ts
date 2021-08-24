import "reflect-metadata";
import { RequestHandler } from "express";
import { MetadataKeys } from "./metadata-keys";

export const use =
  (middleware: RequestHandler) => (target: any, key: string, desc: PropertyDescriptor) => {
    const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target, key) || [];

    Reflect.defineMetadata(MetadataKeys.middleware, [...middlewares, middleware], target, key);
  };
