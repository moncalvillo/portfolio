import { PROJECTS } from "../../data/projects";
import { TECHNOLOGIES } from "../../data/technologies";
import { ContactData, Project } from "../shared/types";
import { ErrorCodes, ErrorStatus } from "../utils/errorStatus";
import { Validator } from "../utils/validator";
import { NodemailerService } from "./nodemailer.service";

class ServiceAPI {
  contact(contactData: ContactData) {
    const { name, email, message } = contactData;

    if (Validator.checkNullOrEmpty([name, email, message])) {
      throw new ErrorStatus(
        ErrorCodes.BAD_REQUEST,
        "Name, email, and message are required fields."
      );
    }

    if (!Validator.isEmail(email)) {
      throw new ErrorStatus(ErrorCodes.BAD_REQUEST, "Invalid email format.");
    }

    NodemailerService.sendEmail(name, email, message);

    return "Email sent successfully.";
  }

  getProjects(lang?: string): Project[] {
    if (lang === "es") {
      return PROJECTS.map((project) => {
        const { title_es, description_es, ...rest } = project;
        return {
          ...rest,
          title: title_es,
          description: description_es,
          technologies: project.technologies?.map((tech) => {
            const { description_es, ...rest } = tech;
            return {
              ...rest,
              description: description_es,
            };
          }),
        };
      });
    }
    return PROJECTS;
  }

  getTechStack(lang?: string) {
    if (lang === "es") {
      return TECHNOLOGIES.map((tech) => {
        const { description_es, ...rest } = tech;
        return {
          ...rest,
          description: description_es,
        };
      });
    }
    return TECHNOLOGIES;
  }
}

export const serviceAPI = new ServiceAPI();
