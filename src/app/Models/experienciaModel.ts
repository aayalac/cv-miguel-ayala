export class ExperienciaModel {
  titulo = 'Experiencia';
  descripcion = 'A continuación se muestra un resumen de mi experiencia laboral y proyectos destacados.';
  proyectos: {nombre: string; descripcion: string}[] = [
    { nombre: 'Global Hitss Colombia',
       descripcion: 'Desarrollo de soluciones tecnológicas para una importante multinacional de telecomunicaciones de manera transversal, empleando diferentes herramientas de desarrollo y Frameworks como lo son Microsoft .NET, .NET Core, Angular, MSSQL, Oracle SQL (PL/SQL), manejo de Apis (WSDL, REST, Swagger), Control de versiones (Git, GitHub y Azure DevOps).'
    },
    { nombre: 'Infinitoo SAS', 
      descripcion: 'Soporte técnico Nivel I, II y III en mesa de ayuda para diferentes clientes (Outsourcing). Revisión física y lógica de 6 servidores, verificación de configuración, revisión de equipos de cómputo en software y hardware, supervisión y coordinación de 8 funcionarios, servicio al cliente interno - externo presencial, telefónico y virtual; elaboración de informes de gestión técnica, acompañamiento técnico, configuración de redes y virtualización para infraestructura en la nube.' 
    }    
  ];
}
