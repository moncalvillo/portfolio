const en = {
  bioSummary: {
    title: "API Resume",
    role: "Full Stack Software Engineer",
    p1: `I am a Full Stack Software Engineer with experience in managing
    project development from conception to implementation, utilizing
    technologies such as TypeScript, React, and NodeJS. Focused on
    continuous improvement and the adoption of best practices to deliver
    effective solutions that enhance user experience and operational
    efficiency.`,
  },
  apiExplanation: {
    p1: `Welcome to the API Resume, a unique portfolio experience that allows
       users to access information about me in a structured format. This
        guide will walk you through the process of making API requests to fetch the desired information.
      `,
    p2: `Before making any requests, familiarize yourself with the available endpoints. Each endpoint 
      corresponds to a specific set of information or action. The list of endpoints
        provides details about the type of data or action associated with that endpoint.`,
    serverUrl:
      "The server is hosted in a cloud service called Render. This is the server URL:",
    makeRequest: {
      p1: `In order to make a request to the server:`,
      method: `Select the HTTP method you wish to use for the request. This could be GET, POST, PUT, DELETE, etc., depending on the action you want to perform.`,
      url: `Input the specific endpoint URL you wish to access. Ensure that the URL is correctly spelled to avoid any errors.`,
      parameters: `Some requests might require additional parameters to be passed in the body of the request.`,
    },
  },

  form: {
    requestBody: "Request Body",
    method: "Method",
    url: "URL",
    parameters: "Parameters",
    request: "Request",
    keyValue: "Key - Value",
    raw: "Raw",
    key: "Key",
    value: "Value",
  },

  response: {
    preview: "Preview",
    raw: "Raw",
  },
  endpoints: {
    resume: {
      title: "Resume",
      description: `This endpoint returns a PDF file with my resume.`,
    },
    projects: {
      title: "Projects",
      description: `This endpoint returns a list of projects I have worked on.`,
      goTo: "Go to",
      currently: "Currently",
    },
    techStack: {
      title: "Tech Stack",
      description: `This endpoint returns a list of technologies I have worked with.`,
    },
    workExperience: {
      title: "Work Experience",
      description: `This endpoint returns a list of companies I have worked for and the role I had in each one.`,
    },
    education: {
      title: "Education",
      description: `This endpoint returns a list of schools I have attended and the degree I obtained from each one.`,
    },
    contact: {
      title: "Contact",
      description: `This endpoint sends an email to my personal email address with the information provided in the request body.`,
      parameters: {
        name: `The name of the person sending the email.`,
        email: `The email address of the person sending the email.`,
        message: `The message the person wants to send.`,
      },
    },
  },
};

export default en;
