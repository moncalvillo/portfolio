export type ProjectsResponse = {
  projects: Project[];
};

export type Project = Partial<{
  title: string;
  description: string;
  startDate: Date;
  endDate: Date;
  technologies: Technology[];
  url: string;
  repository: string;
}>;

export type Technology = Partial<{
  name: string;
  description: string;
  logo: string;
  url: string;
  knowledge: number;
}>;

export type TechnologiesResponse = {
  technologies: Technology[];
};

export type ContactResponse = {
  message: string;
};

export type ResumeResponse = string;

export type ServerResponse =
  | ContactResponse
  | ProjectsResponse
  | TechnologiesResponse
  | ResumeResponse
  | null;
