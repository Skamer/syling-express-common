import "reflect-metadata";
import express, { NextFunction, Request, Response, Router } from "express";
import { MetadataKeys } from "./metadata-keys";
import { HttpMethods } from "./http-methods";

const routers: Router[] = [];

export const controller =
  (routePrefix: string = "") =>
  (target: Function) => {
    const router = express.Router();
    routers.push(router);

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      const method: HttpMethods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
      const serialize = Reflect.getMetadata(MetadataKeys.serialization, target.prototype, key);
      const validate = Reflect.getMetadata(MetadataKeys.validation, target.prototype, key);

      if (validate) {
        middlewares.push(validate);
      }

      if (serialize) {
        middlewares.push(serialize);
      }

      if (path) {
        router[method](`${routePrefix}${path}`, ...middlewares, routeHandler);
      }
    }
  };

export { routers };
