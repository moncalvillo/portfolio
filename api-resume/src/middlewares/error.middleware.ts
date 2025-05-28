import { NextFunction, Request, Response } from "express";
import { ErrorStatus } from "../utils/errorStatus";

export const errorHandler = (
  err: ErrorStatus,
  _req: Request,
  res: Response,
  _next: NextFunction
) => {
  if (err instanceof ErrorStatus) {
    res.status(err.status).json({ message: err.message });
  } else {
    res.status(500).json({ message: "Internal server error" });
  }
};
