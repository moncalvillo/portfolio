import nodemailer from "nodemailer";
import { Config } from "../providers/config";

export class NodemailerService {
  static sendEmail = (name: string, email: string, message: string): void => {
    const user = Config.nodemailer.user;
    console.log("user", user);
    console.log("pass", Config.nodemailer.pass);
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user,
        pass: Config.nodemailer.pass,
      },
    });

    const htmlContent = `
        <h1>Mensaje enviado desde portfolio</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
    `;

    const mailOptions = {
      from: user,
      to: user,
      subject: `Portfolio - ${name.toUpperCase()} te ha enviado un mensaje`,
      text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
      html: htmlContent,
    };

    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {
        console.error("Error sending email:", error);
      } else {
        console.log("Email sent:", info.response);
      }
    });
  };
}
