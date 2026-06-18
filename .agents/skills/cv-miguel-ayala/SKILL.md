---
name: cv-miguel-ayala
description: CV personal de Miguel Ayala - Angular 20, Material Design 3, standalone components
sasmp_version: "1.3.0"
---

# Skill: cv-miguel-ayala

## Descripción del Proyecto
CV (Curriculum Vitae) personal desarrollado con Angular 20 + Angular Material (Material Design 3). Muestra información profesional: presentación, experiencia laboral y estudios.

## Stack Tecnológico
- **Angular 20** con standalone components
- **Angular Material 20** con CDK
- **Theming**: Material Design 3 via `@use '@angular/material' as mat` con `mat.theme()`
- **Estilos**: CSS plano (no SCSS) para componentes, SCSS solo para el tema global
- **Routing**: Angular Router con `provideRouter`
- **Testing**: Jasmine + Karma

## Convenciones del Proyecto

### Estructura de Archivos
- Cada feature es una carpeta plana: `src/app/<feature>/<feature>.ts`
- Sin archivos `index.ts` ni barriles
- Archivos planos sin subcarpetas por tipo
- Modelos en `src/app/Models/` con sufijo `Model.ts`

### Nomenclatura
- **Componentes**: kebab-case para selectores (`app-presentacion`)
- **Archivos**: kebab-case (`presentacion.ts`, `presentacion.html`)
- **Clases**: PascalCase (`Presentacion`, `ExperienciaModel`)
- **Propiedades**: camelCase (`titulo`, `descripcion`)

### Estructura de un Componente
```typescript
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-<nombre>',
  imports: [CommonModule],
  templateUrl: './<nombre>.html',
  styleUrl: './<nombre>.css',
  standalone: true
})
export class <Nombre> {
  // propiedades
}
```

### Patrones de Código
- Componentes **standalone** con `imports: [...]`
- Uso de `CommonModule` para directivas estructurales (`*ngFor`, `*ngIf`)
- `styleUrl` (singular) en lugar de `styleUrls`
- Modelos como clases con valores por defecto en el constructor
- Signals: se usa `signal()` de Angular Core cuando hay estado reactivo

### Theming
- Tema global en `src/custom-theme.scss`
- Usa `mat.theme()` con paletas `mat.$azure-palette` y `mat.$blue-palette`
- Variables CSS del sistema: `--mat-sys-surface`, `--mat-sys-on-surface`, `--mat-sys-body-medium`
- Esquema de color: `light` (configurable a `dark` o `light dark`)

### Angular Material
- Importar módulos directamente en `imports: []` del componente (ej. `MatToolbarModule`)
- No hay módulo compartido de Material
- Uso actual: `MatToolbarModule` en el componente raíz

## Comandos
- `npm start` / `ng serve` - Servidor de desarrollo
- `npm run build` - Build producción
- `npm test`  / `ng test` - Tests con Karma
- `ng generate component <name>` - Generar componente

## Modelos de Datos
- `PresentacionModel`: habilidades (string[]) + descripcion (string)
- `ExperienciaModel`: titulo, descripcion, proyectos ({nombre, descripcion}[])
- `EstudiosModel`: estudios ({titulo, institucion, periodo}[])

## Assets/Recursos
- `src/custom-theme.scss` - Tema global Material Design 3
- `src/styles.css` - Estilos globales adicionales
- `public/` - Assets estáticos
