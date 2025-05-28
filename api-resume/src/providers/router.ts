import { ControllerAPI } from "../controllers/api.controller";
import { Router } from "express";

export class RouterAPI {
  public router: Router;

  constructor() {
    this.router = Router();
    this.init();
  }

  private init() {
    this.router.get("/", ControllerAPI.fullInfo);
    this.router.get("/resume", ControllerAPI.resume);
    this.router.get("/tech-stack", ControllerAPI.techStack);
    this.router.get("/projects", ControllerAPI.projects);
    this.router.post("/contact", ControllerAPI.contact);
  }
}

export const routerAPI = new RouterAPI();
