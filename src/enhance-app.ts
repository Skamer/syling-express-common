import express, { Express, Router } from "express";
import { Container } from "inversify";
import { MetadataKeys } from "./decorators/metadata-keys";
import { HttpMethods } from "./decorators/http-methods";

const registerControllers = (app: Express, container: Container, routers: Router[]) => {
  const controllerPrototypes = Reflect.getMetadata(MetadataKeys.controller, Reflect) || [];

  controllerPrototypes.forEach((target: Function) => {
    container.bind<typeof target>(target).toSelf();

    const controller = container.get<typeof target>(target);
    const routePrefix = Reflect.getMetadata(MetadataKeys.routePrefix, target) || "";
    const router = express.Router();
    routers.push(router);

    for (let key in target.prototype) {
      const routeHandler = target.prototype[key];

      const path = Reflect.getMetadata(MetadataKeys.path, target.prototype, key);
      const method: HttpMethods = Reflect.getMetadata(MetadataKeys.method, target.prototype, key);
      const middlewares = Reflect.getMetadata(MetadataKeys.middleware, target.prototype, key) || [];
      const serialize = Reflect.getMetadata(MetadataKeys.serialization, target.prototype, key);
      const validate = Reflect.getMetadata(MetadataKeys.validation, target.prototype, key);
      const executeHandler = Reflect.getMetadata(
        MetadataKeys.executeHandler,
        target.prototype,
        key
      );

      if (validate) {
        middlewares.push(validate);
      }

      if (serialize) {
        middlewares.push(serialize);
      }

      if (path) {
        if (routeHandler && executeHandler) {
          router[method](`${routePrefix}${path}`, ...middlewares, routeHandler.bind(controller));
        } else {
          router[method](`${routePrefix}${path}`, ...middlewares);
        }
      }
    }
  });
};

export const enhanceApp = (app: Express, container: Container) => {
  const routers: Router[] = [];

  registerControllers(app, container, routers);

  routers.forEach((router) => app.use(router));
};
