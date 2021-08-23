import { Express } from "express";
import { routers } from "./decorators/controller";

export const enhanceApp = (app: Express) => {
  routers.forEach((router) => app.use(router));
};
