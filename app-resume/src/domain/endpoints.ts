import { TFunction } from "i18next";

export type ApiEndpoint = {
  method: string;
  url: string;
  description: string;
  parameters?: Parameter[];
};

interface Parameter {
  name: string;
  description: string;
  type: string;
}

export const methodColors: { [key: string]: string } = {
  GET: "bg-primary",
  POST: "bg-success",
};

export const METHODS = ["GET", "POST"];

export const getEndpoints = (t: TFunction): ApiEndpoint[] => {
  return [
    {
      method: "GET",
      url: "/api/resume",
      description: t("endpoints:resume.description"),
    },

    {
      method: "GET",
      url: "/api/projects",
      description: t("endpoints:projects.description"),
    },
    {
      method: "GET",
      url: "/api/tech-stack",
      description: t("endpoints:techStack.description"),
    },
    {
      method: "POST",
      url: "/api/contact",
      description: t("endpoints:contact.description"),
      parameters: [
        {
          name: "name",
          description: t("endpoints:contact.parameters.name"),
          type: "string",
        },
        {
          name: "email",
          description: t("endpoints:contact.parameters.email"),
          type: "string",
        },
        {
          name: "message",
          description: t("endpoints:contact.parameters.message"),
          type: "string",
        },
      ],
    },
  ];
};
