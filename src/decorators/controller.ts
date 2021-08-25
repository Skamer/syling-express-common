import "reflect-metadata";
import { MetadataKeys } from "./metadata-keys";
import { decorate, injectable } from "inversify";

export const controller =
  (routePrefix: string = "") =>
  (target: Function) => {
    decorate(injectable(), target);

    const controllerPrototypes = Reflect.getMetadata(MetadataKeys.controller, Reflect) || [];

    Reflect.defineMetadata(MetadataKeys.controller, [...controllerPrototypes, target], Reflect);
    Reflect.defineMetadata(MetadataKeys.routePrefix, routePrefix, target);
  };
