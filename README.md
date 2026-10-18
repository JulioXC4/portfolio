# Julio Castro Alejos · Web Portfolio

Este es el repositorio oficial de mi portafolio web profesional. Soy Julio Castro Alejos, estudiante de Ingeniería de Software (8.º ciclo) en la **Universidad Peruana de Ciencias Aplicadas (UPC)**, desarrollador Full Stack y consultor en 180 Degrees Consulting UPC. Mi enfoque es entender los problemas de personas y negocios y construir soluciones útiles de extremo a extremo.

El proyecto está diseñado para servir no solo como mi carta de presentación, sino también como un ejemplo de mi forma de escribir código, estructurar proyectos y diseñar arquitecturas de software legibles, mantenibles y de alto rendimiento.

## 🚀 Características Principales

- **Una sección por pantalla:** Cada sección ocupa el alto visible menos el encabezado fijo. El contenido se centra cuando cabe y conserva desplazamiento interno cuando necesita más espacio, también en móvil. La navegación restablece el inicio de cada panel y respeta las preferencias de movimiento reducido.
- **Identidad propia:** Paleta grafito, marfil y cobre, monograma JC, fotografía personal, logo de la UPC y SVG locales de las tecnologías. Las ilustraciones originales explican el proceso de resolución de problemas y los proyectos sin reemplazar controles o textos por imágenes.
- **Trabajo freelance:** Sección independiente para sitios de clientes con capturas reales y enlaces públicos: EEC Consultores (web original en WordPress y versión actual en Astro) y Rock Hunters (WordPress y Elementor). Los casos se mantienen en `src/data/freelance.ts`, separados de los proyectos de software existentes.
- **Casos y herramientas:** Selector accesible para explorar cada trabajo freelance; herramientas agrupadas por uso real, incluido Astro, WordPress y Elementor. Enlaces oficiales a UPC, 180DC y Devdatep, con sus marcas originales.
- **GitHub integrado:** Métricas públicas, lenguajes de repositorios propios, repositorios recientes y rachas dibujados con la paleta del sitio. `/api/github` consulta GitHub y GitHub Streak Stats con caché y tiempos de espera; si una fuente falla, conserva los datos disponibles y el acceso al perfil. Las cifras no se escriben manualmente.
- **Selección académica:** Restock es el caso principal y Citas Médicas aparece en desarrollo. Los demás registros se conservan con `hidden: true`, fuera de la selección pública y sus páginas de detalle. Se retiraron los enlaces de repositorio que no estaban disponibles públicamente.
- **Hero editorial:** «Creo software que resuelve problemas reales», con tipografía protagonista, énfasis en cobre y un trazo SVG animado. Presenta mi formación en la UPC y trabajo con clientes y equipos, con accesos directos a contacto y trabajos. Se adapta al idioma, tema y movimiento reducido, sin dependencias adicionales.
- **Tipografía y movimiento:** Manrope para títulos y DM Sans para textos, cargadas con `next/font`. Entradas escalonadas por sección, microinteracciones en botones, enlaces y tecnologías, e indicador de avance en el encabezado. El footer cuenta con su propio punto de ajuste de scroll para seguir siendo accesible al llegar al final de Contacto.
- **Arquitectura Basada en Datos:** Toda la información sobre mis proyectos está centralizada en un archivo único de datos (`src/data/projects.ts`). Agregar, modificar o desactivar proyectos es tan sencillo como actualizar un registro, eliminando la necesidad de reescribir lógica de componentes UI.
- **Enrutamiento Dinámico e Híbrido (`/projects/[slug]`):** La aplicación genera páginas detalladas dinámicamente para cada proyecto. Para mi proyecto estrella (**Restock**), el enrutamiento activa componentes a medida hiper-interactivos para explicar sistemas complejos.
- **Soporte Bilingüe Nativo (ES / EN):** Sistema de internacionalización ágil desarrollado mediante un React Context personalizado (`LanguageContext`), que detecta el idioma predeterminado del navegador y lo guarda localmente en el cliente sin redirecciones costosas de servidor.
- **Componentes Altamente Interactivos (Especiales para Restock):**
  - **Simulador de Stock IoT:** Un panel interactivo que simula celdas de carga y telemetría en tiempo real, permitiendo a los visitantes alterar pesos virtuales para observar cómo reacciona el filtro Edge y la consola de alertas Cloud en tiempo real.
  - **Diagrama de Arquitectura Interactivo:** Un mapa interactivo detallando las capas Físicas (ESP32), de Mensajería (MQTT Broker), de Procesamiento Edge (Python/Flask), de Núcleo Backend (Spring Boot con DDD & CQRS) y Aplicaciones de Cliente (Angular y Flutter).
- **Rendimiento e Integridad:** Tipografía mediante `next/font/google`, imágenes optimizadas con `next/image` y CSS Modules. Las ilustraciones, marcas y fotografía se sirven desde el propio proyecto.
- **Accesibilidad y SEO:** Estructura semántica completa en HTML5, etiquetas ARIA descriptivas para lectores de pantalla, navegación por teclado y metadatos SEO automatizados en cada ruta.

---

## 🛠️ Stack Tecnológico

- **Core:** Next.js 16 (App Router), React 19, TypeScript (Strict Mode)
- **Estilos:** Vanilla CSS (CSS Modules localmente escopados)
- **Iconografía:** Lucide React, monograma JC y SVG locales de Devicon / Simple Icons (fuentes en `public/images/brands/SOURCES.md`)
- **Calidad de Código:** ESLint estricto, Prettier

---

## 📁 Estructura del Proyecto

```text
portfolio/
├── public/                 # Recursos estáticos (currículum, diagramas de arquitectura)
├── src/
│   ├── app/                # App Router (layouts y páginas de Next.js)
│   │   ├── layout.tsx      # Configuración de meta-datos de SEO y proveedores de contexto
│   │   ├── page.tsx        # Página de inicio del portafolio (SPA)
│   │   └── projects/
│   │       └── [slug]/     # Ruta dinámica para detalles técnicos de proyectos
│   ├── components/         # Componentes de React
│   │   ├── common/         # Componentes transversales (Navbar, Toggles, BrandIcons)
│   │   ├── sections/       # Secciones modulares de la SPA (Hero, About, Tech, Goals, etc.)
│   │   └── ui/             # Componentes interactivos complejos (Diagrama, Simulador)
│   ├── context/            # Estado global (LanguageContext para i18n)
│   ├── data/               # Modelos de datos centralizados (projects.ts)
│   ├── i18n/               # Diccionarios JSON de traducción (es.json, en.json)
│   └── styles/             # Hojas de estilo globales (variables.css, globals.css)
```

---

## 💻 Configuración Local y Desarrollo

Sigue estos pasos para instalar y ejecutar el portafolio en tu entorno de desarrollo local:

### 1. Clonar el repositorio
```bash
git clone https://github.com/JulioXC4/portfolio.git
cd portfolio
```

### 2. Instalar dependencias
```bash
npm install
```

### 3. Iniciar el servidor de desarrollo
```bash
npm run dev
```
Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver el resultado.

### 4. Compilar para producción (Listo para Vercel)
```bash
npm run build
```
Este comando compila la aplicación y comprueba los tipos TypeScript. Ejecuta también `npm run lint` para verificar ESLint.

El formulario de contacto conserva una confirmación local simulada. Los enlaces de email, LinkedIn y GitHub son reales; el formulario no envía correos desde un backend.

---

## 🎨 Principios de Diseño y Buenas Prácticas

- **Principios SOLID:** Responsabilidad única aplicada en componentes independientes desacoplados de la lógica de renderizado principal.
- **App Router:** Layout de servidor y componentes de cliente para el estado de idioma, tema, navegación y demostraciones interactivas.
- **Cero Warnings de Compilación:** Compilación y validaciones de tipos estrictas que garantizan una base de código robusta y confiable.
