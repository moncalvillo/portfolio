const es = {
  bioSummary: {
    title: "API Resume",
    role: "Ingeniero de Software Full Stack",
    p1: `Soy un Ingeniero de Software Full Stack con experiencia en la gestión
   del desarrollo de proyectos desde su concepción hasta su implementación, utilizando
    tecnologías como TypeScript, React y NodeJS. Enfocado en la mejora continua y la adopción de
     mejores prácticas para entregar soluciones efectivas que mejoren la experiencia del usuario y
      la eficiencia operativa.`,
  },
  apiExplanation: {
    p1: `Bienvenido al Curriculum API, una experiencia de portafolio única que permite a los
     usuarios acceder a la información sobre mí en un formato estructurado. 
     Esta guía lo guiará a través del proceso de realizar solicitudes API para obtener la información deseada.`,
    p2: `Antes de realizar cualquier solicitud, familiarícese con los 'endpoints' disponibles. Cada 'endpoint' corresponde a un conjunto específico de información o acción. La lista de 'endpoints' proporciona detalles sobre el tipo de datos o acción asociada con ese 'endpoint'.`,
    serverUrl:
      "Este servidor esta alojado en un servicio en la nube llamado Render. Esta es la URL del servidor:",
    makeRequest: {
      p1: `Para hacer una solicitud al servidor:`,
      method: `Seleccione el método HTTP que desea usar para la solicitud. Esto podría ser GET, POST, PUT, DELETE, etc., dependiendo de la acción que desee realizar.`,
      url: `Ingrese la URL del 'endpoint' específico al que desea acceder. Asegúrese de que la URL esté escrita correctamente para evitar errores.`,
      parameters: `Algunas solicitudes pueden requerir parámetros adicionales que se pasen en el cuerpo de la solicitud.`,
    },
  },

  form: {
    requestBody: "Cuerpo de la solicitud",
    method: "Método",
    url: "URL",
    parameters: "Parámetros",
    request: "Solicitar",
    keyValue: "Clave - Valor",
    raw: "Raw",
    key: "Clave",
    value: "Valor",
    addField: "Agregar campo",
  },

  response: {
    preview: "Vista previa",
    raw: "Raw",
  },

  endpoints: {
    resume: {
      title: "Currículum",
      description: `Este endpoint devuelve un archivo PDF con mi currículum.`,
    },
    projects: {
      title: "Proyectos",
      description: `Este endpoint devuelve una lista de proyectos en los que he trabajado.`,
      goTo: "Ir a",
      currently: "Actualmente",
    },
    techStack: {
      title: "Stack tecnológico",
      description: `Este endpoint devuelve una lista de tecnologías con las que he trabajado.`,
    },
    workExperience: {
      title: "Experiencia laboral",
      description: `Este endpoint devuelve una lista de empresas para las que he trabajado y el rol que tuve en cada una.`,
    },
    education: {
      title: "Educación",
      description: `Este endpoint devuelve una lista de escuelas a las que he asistido y el título que obtuve en cada una.`,
    },
    contact: {
      title: "Contacto",
      description: `Este endpoint envía un correo electrónico a mi dirección de correo personal con la información proporcionada en el cuerpo de la solicitud.`,
      parameters: {
        name: `El nombre de la persona que envía el correo.`,
        email: `La dirección de correo electrónico de la persona que envía el correo.`,
        message: `El mensaje que la persona desea enviar.`,
      },
    },
  },
};
export default es;
