import { Request } from "express";

export type ContactData = {
  name: string;
  email: string;
  message: string;
};

export type LanguageReq = { language?: string } & Request;

export type Project = Partial<{
  title: string;
  title_es: string;
  description: string;
  description_es: string;
  startDate: Date;
  endDate: Date;
  technologies: Technology[];
  url: string;
  repository: string;
}>;

export type Technology = Partial<{
  name: string;
  description: string;
  description_es: string;
  logo: string;
  url: string;
}>;
