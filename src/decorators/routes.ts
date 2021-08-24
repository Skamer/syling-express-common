import "reflect-metadata";
import { RequestHandler } from "express";
import { HttpMethods } from "./http-methods";
import { MetadataKeys } from "./metadata-keys";

interface RouteHandlerDescriptor extends PropertyDecorator {
  value?: RequestHandler;
}

const routeBinder =
  (method: string) =>
  (path: string) =>
  (target: any, key: string, desc: RouteHandlerDescriptor) => {
    Reflect.defineMetadata(MetadataKeys.path, path, target, key);
    Reflect.defineMetadata(MetadataKeys.method, method, target, key);
  };

export const get = routeBinder(HttpMethods.get);
export const put = routeBinder(HttpMethods.put);
export const post = routeBinder(HttpMethods.post);
export const del = routeBinder(HttpMethods.del);
export const path = routeBinder(HttpMethods.patch);
