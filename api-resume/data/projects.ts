import { Project } from "../src/shared/types";
import {
  API,
  AWS,
  CSS,
  Dart,
  Docker,
  Flutter,
  Git,
  GraphQL,
  HTML,
  HyperledgerFabric,
  Java,
  JavaScript,
  NodeJS,
  PostgreSQL,
  RabbitMQ,
  React,
  Redis,
  Sequelize,
  Spring,
  TypeScript,
  WebSockets,
} from "./technologies";

const Globalite: Project = {
  title: "Globalite",
  title_es: "Globalite",
  startDate: new Date("2022-04-01"),
  endDate: new Date("2023-08-01"),
  description_es:
    "El proyecto consistió en desarrollar una aplicación web pionera destinada a ofrecer una plataforma segura y fácil de usar para el alquiler de productos. Concebido y construido desde cero, el proyecto presentaba interfaces de usuario intuitivas y transacciones de datos eficientes. Las principales tecnologías empleadas incluyeron React para el frontend, NodeJS y GraphQL para las operaciones del backend, TypeScript para la seguridad y mantenibilidad del código, y PostgreSQL con Sequelize ORM para una gestión robusta de la base de datos. Se aprovechó Amazon Web Services (AWS) para desplegar la aplicación, garantizando un alojamiento escalable y fiable. Esta pila tecnológica completa proporcionó una aplicación equilibrada y de alto rendimiento, priorizando la experiencia del usuario, el rendimiento y la seguridad.",
  description:
    "The project involved developing a pioneering web application aimed at offering a secure and user-friendly platform for product rentals. Conceived and built from scratch, the project featured intuitive user interfaces and efficient data transactions. Key technologies employed included React for the frontend, NodeJS and GraphQL for backend operations, TypeScript for code safety and maintainability, and PostgreSQL with Sequelize ORM for robust database management. Amazon Web Services (AWS) was leveraged for deploying the application, ensuring scalable and reliable hosting. This comprehensive tech stack delivered a balanced, high-performing application, prioritizing user experience,performance, and security.",
  technologies: [
    JavaScript,
    NodeJS,
    TypeScript,
    GraphQL,
    PostgreSQL,
    AWS,
    React,
    Sequelize,
    Docker,
    Git,
    API,
    HTML,
    CSS,
  ],
  url: "https://globalite.app",
};

const SteChecker: Project = {
  title: "STE Checker",
  title_es: "STE Checker",
  startDate: new Date("2021-10-01"),
  endDate: new Date("2022-1-01"),
  description_es:
    "En ATEXIS, se desarrolló una aplicación web basada en Java para alinear documentos con los estándares STE. Utilizando Spring-MVC, JSPs y JavaScript, se creó una API REST para segregación principal de las tareas del backend.",
  description:
    "At ATEXIS, a Java-based web app was developed to align documents with STE standards. Using Spring-MVC, JSPs,and JavaScript, a REST API was created to mainly segregate backend tasks.",
  technologies: [Java, Spring, API, Git, HTML, CSS],
};

const CuatrolaClient: Project = {
  title: "4la - Client",
  title_es: "4la - Cliente",
  startDate: new Date("2023-09-01"),
  description_es:
    "Cliente para 4la, una aplicación web para jugar al juego de cartas español 'Cuatrola'. El cliente está desarrollado en Flutter, un marco multiplataforma para aplicaciones móviles y web. El cliente se comunica con el servidor a través de RabbitMQ y WebSockets. El proyecto se desarrolla como un pasatiempo y no está destinado a uso comercial.",
  description:
    "Client for 4la, a web application for playing spanish card game 'Cuatrola'. The client is developed in Flutter, a cross-platform framework for mobile and web applications. The client communicates with the server via RabbitMQ and WebSockets. The project is developed as a hobby and is not intended for commercial use.",
  technologies: [Flutter, Dart, RabbitMQ, WebSockets, Git],
  url: "https://github.com/devtremadura/client4la",
};

const CuatrolaServer: Project = {
  title: "4la - Server",
  title_es: "4la - Servidor",
  startDate: new Date("2023-09-01"),
  description_es:
    "Servidor para 4la, una aplicación web para jugar al juego de cartas español 'Cuatrola'. El servidor está desarrollado en Java utilizando el marco Spring. El servidor se comunica con el cliente a través de RabbitMQ y WebSockets. PostgreSQL se utiliza para la persistencia de datos y Redis para el caché, ambos desplegados en contenedores Docker, así como la instancia de RabbitMQ.",
  description:
    "Server for 4la, a web application for playing spanish card game 'Cuatrola'. The server is developed in Java using Spring framework. The server communicates with the client via RabbitMQ and WebSockets. PostgreSQL is used for data persistence and Redis for caching, both deployed in docker containers, as well as RabbitMQ instance.",
  technologies: [
    Java,
    Spring,
    RabbitMQ,
    WebSockets,
    Git,
    PostgreSQL,
    API,
    Redis,
    Docker,
  ],
  url: "https://github.com/devtremadura/server4la",
};

const AlocateClient: Project = {
  title: "aLocate - Client",
  title_es: "aLocate - Cliente",
  startDate: new Date("2025-02-01"),
  description_es:
    "Cliente para Alocate, red social para fiestas y eventos. El cliente esta desarrollado en React Native, un marco multiplataforma para aplicaciones móviles. El cliente se comunica con el servidor a través de una API REST. El proyecto se desarrolla como un pasatiempo y no está destinado a uso comercial.",
  description:
    "Client for Alocate, social network for parties and events. The client is developed in React Native, a cross-platform framework for mobile applications. The client communicates with the server via a REST API. The project is developed as a hobby and is not intended for commercial use.",
  technologies: [React, JavaScript, Git, API, HTML, CSS],
  url: "https://github.com/devtremadura/client-aLocate",
};

const AlocateServer: Project = {
  title: "aLocate - Server",
  title_es: "aLocate - Servidor",
  startDate: new Date("2025-02-01"),
  description_es:
    "Servidor para Alocate, red social para fiestas y eventos. El servidor está desarrollado en Java utilizando el framework de Spring. El servidor se comunica con el cliente a través de una API REST. PostgreSQL se utiliza para la persistencia de datos.",
  description:
    "Server for Alocate, social network for parties and events. The server is developed in Java using Spring framework. The server communicates with the client via a REST API. PostgreSQL is used for data persistence.",
  technologies: [Java, Spring, Git, PostgreSQL, API],
  url: "https://github.com/devtremadura/server-aLocate",
};

const TFGDapp: Project = {
  title: "Decentralized blockchain application",
  title_es: "Aplicación descentralizada de blockchain",
  startDate: new Date("2021-06-01"),
  endDate: new Date("2021-11-01"),
  description_es:
    "Se desarrolló una aplicación descentralizada que permite la interacción con una red blockchain de Hyperledger Fabric. El repositorio incluye scripts para la configuración de la red, un cliente basado en React para la interfaz de usuario, un servidor backend para la lógica empresarial y un servicio Oracle para conectar la blockchain con fuentes de datos externas. La aplicación está diseñada para el desarrollo y pruebas locales, con instrucciones detalladas para la instalación y el despliegue. Este proyecto fue desarrollado como proyecto final de grado para la Universidad de Sevilla.",
  description:
    "Developed a decentralized application that enables interaction with a Hyperledger Fabric blockchain network. The repository includes scripts for network setup, a React-based client for user interface, a backend server for business logic, and an Oracle service to bridge the blockchain with external data sources. The application is designed for local development and testing, with detailed instructions for installation and deployment. This project was developed as final degree project for University of Seville.",
  technologies: [
    NodeJS,
    HyperledgerFabric,
    Docker,
    TypeScript,
    Git,
    React,
    API,
    HTML,
    CSS,
  ],
  url: "https://github.com/moncalvillo/smartcontracts-tfg",
};

export const AuthMicroservice: Project = {
  title: "Authentication microservice",
  title_es: "Microservicio de autenticación",
  startDate: new Date("2023-09-01"),
  endDate: new Date("2023-09-05"),
  description_es:
    "Microservicio simple y fácil de usar para autenticar y gestionar usuarios dentro de un contexto de base de datos relacional que debe proporcionarse como variable de entorno al desplegar el servicio. Se recomienda usar Docker en el despliegue.",
  description:
    "Simple and easy microservice ready to use for authenticating and manage users within a relational database context which should be provided as env variable when deploying the service. Recommended to use Docker in deployment.",
  url: "https://github.com/moncalvillo/auth-ms",
  technologies: [NodeJS, TypeScript, Docker, Git, PostgreSQL, API],
};

export const PROJECTS: Project[] = [
  Globalite,
  SteChecker,
  CuatrolaClient,
  CuatrolaServer,
  TFGDapp,
  AuthMicroservice,
  AlocateClient,
  AlocateServer,
];
