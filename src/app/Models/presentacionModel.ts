export class PresentacionModel {
    constructor(
        public habilidades: Array<string> = [
            'Desarrollo Web',
            'ASP .NET',
            '.NET Core',
            'SQL',
            'PL/SQL',
            'Angular',
            'JavaScript',
            'HTML',
            'CSS',
            'TypeScript'],
        public descripcion: string = 'Ingeniero de sistemas con más de 2 años de experiencia en desarrollo Full Stack con .NET Core, Angular y React. Experto en integración de servicios RESTful, bases de datos SQL Server y Oracle, y despliegue de aplicaciones en Azure. Enfocado en buenas prácticas, arquitectura limpia y metodologías ágiles.'
    ) {}
}