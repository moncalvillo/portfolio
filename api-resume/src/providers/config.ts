import { configDotenv } from "dotenv";

configDotenv();

export const Config = {
  server: {
    url: process.env.SERVER_URL || "http://localhost",
    port: process.env.SERVER_PORT || 8080,
  },
  nodemailer: {
    user: process.env.NODEMAILER_USER || "",
    pass: process.env.NODEMAILER_PASS || "",
  },
};
