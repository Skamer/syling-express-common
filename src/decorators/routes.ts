import "reflect-metadata";
import { HttpMethods } from "./http-methods";
import { MetadataKeys } from "./metadata-keys";

const routeBinder = (method: string) => (target: any, key: string, desc: PropertyDecorator) => {
  Reflect.defineMetadata(MetadataKeys.path, path, target, key);
  Reflect.defineMetadata(MetadataKeys.method, method, target, key);
};

export const get = routeBinder(HttpMethods.get);
export const put = routeBinder(HttpMethods.put);
export const post = routeBinder(HttpMethods.post);
export const del = routeBinder(HttpMethods.del);
export const path = routeBinder(HttpMethods.patch);
