import { Request, Response } from "express";
import { serviceAPI } from "../services/api.service";
import { LanguageReq } from "../shared/types";

export class ControllerAPI {
  public static fullInfo = (_req: Request, res: Response) => {
    res.send("Hello world");
  };

  static resume = (_: Request, res: Response) => {
    res.download("src/assets/CV_GonzalezMoncalvilloPablo.pdf");
  };

  static projects = (req: LanguageReq, res: Response) => {
    const projects = serviceAPI.getProjects(req.language);
    return res.status(200).json({ projects });
  };

  static techStack = (req: LanguageReq, res: Response) => {
    const techStack = serviceAPI.getTechStack(req.language);
    return res.status(200).json({ technologies: techStack });
  };

  public static contact = (req: Request, res: Response) => {
    const { name, email, message } = req.body;
    const emailSent = serviceAPI.contact({ name, email, message });
    return res.status(200).json({ message: emailSent });
  };
}
