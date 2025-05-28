import { Application } from "express";
import express from "express";
import cors from "cors";
import { routerAPI } from "./router";
import { Config } from "./config";
import { errorHandler } from "../middlewares/error.middleware";
import { detectLanguage } from "../middlewares/detectLang.middleware";

class ServerAPI {
  private app: Application;

  constructor() {
    this.app = express();
  }

  public init(): void {
    console.log("API Server starting...");

    this.app.use(express.json());
    this.app.use(
      cors({
        origin: "*",
        credentials: false,
        methods: ["GET", "POST"],
      })
    );

    this.app.use("/api", detectLanguage, routerAPI.router);
    this.app.use(errorHandler);

    this.app.listen(Config.server.port, () => {
      console.log(
        `Server started at ${Config.server.url}:${Config.server.port}`
      );
    });
  }
}

export default new ServerAPI();
