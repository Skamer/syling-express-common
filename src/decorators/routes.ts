import "reflect-metadata";
import { HttpMethods } from "./http-methods";
import { MetadataKeys } from "./metadata-keys";

const routeBinder =
  (method: string) =>
  (path: string, executeHandler: boolean = true) =>
  (target: any, key: string) => {
    Reflect.defineMetadata(MetadataKeys.path, path, target, key);
    Reflect.defineMetadata(MetadataKeys.method, method, target, key);
    Reflect.defineMetadata(MetadataKeys.executeHandler, executeHandler, target, key);
  };

export const get = routeBinder(HttpMethods.get);
export const put = routeBinder(HttpMethods.put);
export const post = routeBinder(HttpMethods.post);
export const del = routeBinder(HttpMethods.del);
export const path = routeBinder(HttpMethods.patch);
