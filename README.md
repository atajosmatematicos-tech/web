# La Guía Científica - Proyecto Educativo Interactivo

Este proyecto es una plataforma web educativa diseñada para apoyar a estudiantes de ingeniería, preuniversitarios y docentes en Perú. El objetivo es democratizar el acceso a una educación científica de calidad, ofreciendo contenidos claros, progresivos y rigurosos en áreas clave como Química, Física y Matemáticas.

La web busca ser una herramienta práctica para quienes desean comprender mejor los temas científicos y prepararse para su futuro académico, convirtiendo la ciencia en una fuente de oportunidades.

## ✨ Características

*   **Estructura Modular:** El contenido está organizado en "áreas" (como Química, Física, etc.), cada una con sus propias páginas, estilos y lógica.
*   **Estilos Centralizados:** Un sistema de variables CSS (`variables.css`) en cada módulo facilita la personalización y el mantenimiento de la paleta de colores y otros aspectos visuales.
*   **Diseño Reutilizable:** Incluye un conjunto de componentes de interfaz estandarizados que se pueden reutilizar en todas las áreas de contenido para mantener la consistencia visual.
*   **Fuentes Personalizadas:** El proyecto integra una amplia variedad de fuentes para garantizar una tipografía consistente y atractiva.

## 🧩 Componentes Reutilizables

Para asegurar una experiencia de usuario coherente en todo el sitio, se han diseñado varios componentes base que deben ser reutilizados al crear nuevas secciones. El diseño principal se encuentra en el módulo de `quimica`.

### 1. Barra de Navegación (`.nav-bar`)
La barra de navegación del módulo de química (`web/pages/areas/quimica/css/nav-bar.css`) es el diseño estándar para todas las áreas de contenido.
*   **Estructura:** Dividida en un lado izquierdo para el logo/título y un lado derecho para los enlaces y un botón de acción.
*   **Estilo:** Usa variables CSS para los colores, permitiendo una fácil adaptación a la paleta de cada área.
*   **Funcionalidad:** Incluye efectos `hover` para una mejor retroalimentación visual.

### 2. Panel de Contenido (`.panel`)
Es el contenedor principal para el contenido educativo de cada página (`web/pages/areas/quimica/css/main.css`).
*   **Diseño:** Un contenedor con fondo claro, bordes redondeados y una sombra sutil para darle profundidad.
*   **Estructura Interna:** Diseñado para alojar un título (`h1`), párrafos de texto (`p`) y el índice de navegación.

### 3. Índice de Temas (`.panel nav:not(.nav-bar)`)
Dentro del `.panel`, este componente organiza los temas del área en una lista de enlaces.
*   **Estilo:** Fondo contrastante, con enlaces estilizados que tienen un efecto `hover` para indicar la selección.
*   **Uso:** Permite a los usuarios navegar fácilmente entre los diferentes temas de una materia.

### 4. Migas de Pan (`.breadcrumb`)
Un pequeño componente de navegación que muestra la ubicación actual del usuario dentro de la jerarquía del sitio. Ayuda a la orientación y es una parte clave de la experiencia de usuario.

## 📂 Estructura del Proyecto

El proyecto está organizado de la siguiente manera para mantener el código limpio y escalable:

```
.
├── README.md
└── web/
    ├── index.html              # Página principal del proyecto
    ├── JS/
    │   └── main.js             # Scripts globales para la página principal
    ├── STYLES/                 # Estilos globales para la página principal
    │   ├── layout.css
    │   ├── header.css
    │   ├── main.css
    │   └── variables.css       # Variables CSS globales
    ├── public/                 # Archivos estáticos (imágenes, fuentes, etc.)
    │   ├── img/
    │   └── fonts/
    └── pages/
        └── areas/
            ├── quimica/        # Módulo del área de Química
            │   ├── index.html
            │   ├── temas.json
            │   ├── css/
            │   │   ├── main.css
            │   │   ├── nav-bar.css
            │   │   └── variables.css # Variables específicas para Química
            │   └── js/
            │       └── main.js
            ├── fisica/         # Módulo del área de Física
            └── matematicas/    # Módulo del área de Matemáticas
```

## 🚀 Cómo Empezar

Dado que es un proyecto basado en archivos estáticos (HTML, CSS, JS), no requiere un servidor complejo ni un proceso de compilación.

Simplemente abre el archivo `web/index.html` en tu navegador para ver la página principal.

## 🤝 Cómo Contribuir

Si deseas expandir el proyecto, sigue estas recomendaciones para mantener la consistencia:

1.  **Crear una Nueva Área:** Para añadir una nueva materia (ej. "Biología"), crea una nueva carpeta en `web/pages/areas/`.
2.  **Replicar la Estructura:** Dentro de la nueva carpeta, replica la estructura de los otros módulos (`index.html`, `css/`, `js/`).
3.  **Reutilizar Componentes:** Utiliza los componentes base como `.nav-bar` y `.panel` para la estructura visual. Copia los archivos CSS correspondientes y ajústalos según sea necesario.
4.  **Usar Variables CSS:** Define los colores y estilos específicos del nuevo módulo en su propio archivo `variables.css`. Esto asegura que los cambios no afecten a otras secciones.

---
*Esta documentación fue generada y actualizada por Gemini.*
