import { NextFunction, Response } from "express";
import { LanguageReq } from "../shared/types";
export const detectLanguage = (
  req: LanguageReq,
  _res: Response,
  next: NextFunction
) => {
  const segments = req.path.split("/");
  if (segments[1] === "es") {
    req.language = "es";
    segments.splice(1, 1);
    req.url = segments.join("/");
  } else {
    req.language = "en";
  }
  next();
};
