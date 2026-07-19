# Julio Castro Alejos · Web Portfolio

Este es el repositorio oficial de mi portafolio web profesional, desarrollado para destacar mi perfil de **Full Stack Developer** con una sólida base técnica en **Backend Engineering**, **Software Architecture** y soluciones integradas de **IoT (Internet de las Cosas)**.

El proyecto está diseñado para servir no solo como mi carta de presentación, sino también como un ejemplo de mi forma de escribir código, estructurar proyectos y diseñar arquitecturas de software legibles, mantenibles y de alto rendimiento.

## 🚀 Características Principales

- **Arquitectura Basada en Datos:** Toda la información sobre mis proyectos está centralizada en un archivo único de datos (`src/data/projects.ts`). Agregar, modificar o desactivar proyectos es tan sencillo como actualizar un registro, eliminando la necesidad de reescribir lógica de componentes UI.
- **Enrutamiento Dinámico e Híbrido (`/projects/[slug]`):** La aplicación genera páginas detalladas dinámicamente para cada proyecto. Para mi proyecto estrella (**Restock**), el enrutamiento activa componentes a medida hiper-interactivos para explicar sistemas complejos.
- **Soporte Bilingüe Nativo (ES / EN):** Sistema de internacionalización ágil desarrollado mediante un React Context personalizado (`LanguageContext`), que detecta el idioma predeterminado del navegador y lo guarda localmente en el cliente sin redirecciones costosas de servidor.
- **Componentes Altamente Interactivos (Especiales para Restock):**
  - **Simulador de Stock IoT:** Un panel interactivo que simula celdas de carga y telemetría en tiempo real, permitiendo a los visitantes alterar pesos virtuales para observar cómo reacciona el filtro Edge y la consola de alertas Cloud en tiempo real.
  - **Diagrama de Arquitectura Interactivo:** Un mapa interactivo detallando las capas Físicas (ESP32), de Mensajería (MQTT Broker), de Procesamiento Edge (Python/Flask), de Núcleo Backend (Spring Boot con DDD & CQRS) y Aplicaciones de Cliente (Angular y Flutter).
- **Rendimiento e Integridad:** Optimización total con `next/font/google` para tipografía sin saltos de layout, y CSS Modules puros (Vanilla CSS) para maximizar la compatibilidad, velocidad LCP y puntaje Lighthouse (100/100).
- **Accesibilidad y SEO:** Estructura semántica completa en HTML5, etiquetas ARIA descriptivas para lectores de pantalla, navegación por teclado y metadatos SEO automatizados en cada ruta.

---

## 🛠️ Stack Tecnológico

- **Core:** Next.js 16 (App Router), React 19, TypeScript (Strict Mode)
- **Estilos:** Vanilla CSS (CSS Modules localmente escopados)
- **Iconografía:** Lucide React + BrandIcons personalizados
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
Este comando compila la aplicación y realiza un chequeo riguroso de tipos TypeScript y estilo ESLint, generando un bundle de producción optimizado listo para ser desplegado en Vercel.

---

## 🎨 Principios de Diseño y Buenas Prácticas

- **Principios SOLID:** Responsabilidad única aplicada en componentes independientes desacoplados de la lógica de renderizado principal.
- **RSC por Defecto:** Los componentes del servidor se utilizan por defecto para maximizar el SEO y velocidad inicial, habilitando `use client` únicamente en elementos de interacción directa (Navbar, toggles, simulador).
- **Cero Warnings de Compilación:** Compilación y validaciones de tipos estrictas que garantizan una base de código robusta y confiable.
