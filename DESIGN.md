---
name: Julio Castro Portfolio
description: Portafolio Full Stack con una composición editorial, neutros cálidos y acentos de cobre.
colors:
  primary: "#c58d66"
  primary-hover: "#d6a881"
  primary-glow: "#c58d6614"
  bg-base: "#131514"
  bg-surface: "#1a1d1b"
  bg-surface-hover: "#202420"
  text-primary: "#f3f0e8"
  text-secondary: "#b7b8b3"
  text-muted: "#969b95"
  border: "#f3f0e826"
  border-hover: "#f3f0e849"
  border-accent: "#c58d6670"
  light-primary: "#8b532f"
  light-primary-glow: "#8b532f0e"
  light-bg-base: "#f3f0e8"
  light-bg-surface: "#eae7de"
  light-bg-surface-hover: "#e3dfd5"
  light-text-primary: "#171c1e"
  light-text-secondary: "#595e60"
  light-text-muted: "#666d6c"
  light-border: "#171c1e30"
  light-border-hover: "#171c1e55"
  light-border-accent: "#8b532f70"
  editorial-text-secondary: "#515a5d"
  editorial-text-muted: "#62696b"
  editorial-border: "#8b532f33"
  editorial-border-accent: "#8b532f66"
  editorial-surface-hover: "#e9e5db"
  primary-label-light: "#fffaf2"
typography:
  display:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(54px, 6.6vw, 96px)"
    fontWeight: 750
    lineHeight: 1.01
    letterSpacing: "-.045em"
  display-accent:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(54px, 6.6vw, 96px)"
    fontWeight: 600
    lineHeight: 1.01
    letterSpacing: "-.035em"
  headline:
    fontFamily: "Fraunces, Georgia, serif"
    fontSize: "clamp(36px, 4.2vw, 64px)"
    fontWeight: 600
    lineHeight: 1.15
    letterSpacing: "-.03em"
  title:
    fontFamily: "Manrope, Arial, sans-serif"
    fontSize: "clamp(26px, 2.1vw, 32px)"
    fontWeight: 650
    lineHeight: 1.2
    letterSpacing: "-.025em"
  body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "-.012em"
  project-body:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "16px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "0em"
  label:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 400
    lineHeight: 1.5
  hero-identity:
    fontFamily: "DM Sans, Arial, sans-serif"
    fontSize: "14px"
    fontWeight: 600
    lineHeight: 1.4
    letterSpacing: ".22em"
rounded:
  control: "4px"
  preview: "5px"
  portrait: "6px"
  circular: "50%"
spacing:
  field-label: "8px"
  inline: "12px"
  group: "16px"
  form: "20px"
  gutter-min: "24px"
  column-compact: "32px"
  column: "48px"
  gutter-max: "64px"
components:
  hero-primary:
    backgroundColor: "{colors.primary}"
    textColor: "{colors.bg-base}"
    rounded: "{rounded.control}"
    padding: "14px 30px"
    height: "58px"
  hero-primary-hover:
    backgroundColor: "{colors.primary-hover}"
  hero-primary-light:
    backgroundColor: "{colors.light-primary}"
    textColor: "{colors.primary-label-light}"
  hero-secondary:
    textColor: "{colors.text-primary}"
    rounded: "{rounded.control}"
    padding: "14px 30px"
    height: "58px"
  contact-input:
    backgroundColor: "{colors.bg-base}"
    textColor: "{colors.text-primary}"
    rounded: "{rounded.control}"
    padding: "14px 16px"
    height: "54px"
  project-card:
    padding: "20px 0 12px"
  project-filter:
    padding: "8px 6px 12px"
    height: "48px"
  navigation-link:
    textColor: "{colors.text-secondary}"
    height: "48px"
  project-status:
    textColor: "{colors.primary}"
    rounded: "{rounded.control}"
    padding: "4px 12px"
  freelance-tab:
    textColor: "{colors.text-secondary}"
    padding: "10px 0 18px"
    height: "64px"
---

# Design System: Julio Castro Portfolio

## Overview

**Creative North Star: "Software con acento editorial"**

Esta frase describe la implementación aprobada; no establece una nueva marca. El portafolio combina una presentación editorial con trabajos reales, controles discretos y un acento tipográfico reconocible. La composición del hero, el vídeo aportado por el usuario y la combinación Manrope / DM Sans / Fraunces son decisiones aceptadas en la sesión.

La documentación registra el estado de `bf8d58f`. Los valores del frontmatter proceden del código; no son una propuesta de rediseño. Los nombres semánticos permiten describir roles, pero no implican que existan variables CSS para cada medida. Las excepciones de componentes y de temas siguen siendo parte de la implementación.

**Key Characteristics:**
- Neutros cálidos, cobre y alternancia con superficies marfil.
- Titulares expresivos y texto de lectura sobrio.
- Tarjetas abiertas, divisores finos y radios pequeños.
- Capturas reales y un vídeo decorativo en el hero.
- Movimiento breve, interrumpible y vinculado a cambios de estado.

## Colors

### Primary

El **cobre cálido** (`colors.primary`) identifica las acciones principales, enlaces destacados y el acento del hero. El **cobre claro** (`colors.primary-hover`) expresa hover; `colors.primary-glow` es un tinte de apoyo, no una sombra luminosa. En tema claro, el acento cambia al **cobre tostado** (`colors.light-primary`); sus estados primario y secundario comparten valor.

### Neutral

El **carbón verdoso** (`colors.bg-base`) es la base del tema oscuro. Los niveles `bg-surface` y `bg-surface-hover` separan estados sin crear grandes elevaciones. El **marfil cálido** (`colors.text-primary`) sostiene el texto principal; los tonos `text-secondary` y `text-muted` reducen jerarquía. Los bordes conservan sus transparencias originales.

El tema claro usa `light-bg-*`, `light-text-*` y `light-border-*`. Las bandas editoriales claras mantienen su propio texto secundario, texto tenue y bordes (`editorial-*`), incluso cuando el tema global es oscuro. Las fotografías, capturas de clientes y marcas tecnológicas conservan sus colores originales.

**The Semantic Theme Rule.** Consumir las variables CSS semánticas existentes; no aplicar el cobre oscuro a todos los temas ni recolorear los activos de clientes.

Fuente normativa de temas: `src/app/globals.css`. `--bg-surface-solid` coincide con `--bg-surface`; `--color-accent` coincide con `--color-secondary` en la implementación actual.

## Typography

**Display Font:** Manrope, cargada mediante `next/font/google` (`--font-display`).

**Body Font:** DM Sans, cargada mediante `next/font/google` (`--font-primary`).

**Accent Font:** Fraunces SemiBold (peso 600, tamaño óptico 72), normal y cursiva, con archivos locales y licencia en `src/app/fonts/`. Se carga mediante `next/font/local` (`--font-accent`). Todas usan `display: swap`; Next añade sus fallbacks métricos.

### Hierarchy

| Rol | Aplicación actual |
| --- | --- |
| Display | Manrope en la primera parte del h1; escala y tracking en `typography.display`. |
| Display accent | Fraunces **cursiva** en «problemas reales.» / «real problems.», con tamaño y línea heredados del h1. |
| Headline | Fraunces **normal**, peso 600, en los h2 de las secciones de la portada. El h2 del footer y los títulos de páginas de proyecto conservan sus reglas locales Manrope. |
| Title | Manrope para títulos de tarjetas, paneles y controles destacados. |
| Body | DM Sans; el cuerpo global mantiene su tracking, mientras las descripciones de proyectos tienen tracking normal y medida máxima de 64ch. |
| Label | DM Sans; notas de contacto y contexto de proyectos a 14px. Las etiquetas de tecnologías de proyectos conservan 13px. |

La escala `headline` es la referencia común de Servicios, Proyectos, Experiencia y Herramientas, no una uniformidad inventada: Sobre mí llega a 56px, Webs a 72px y Contacto a 94px. Conservar esas excepciones hasta que se apruebe cambiarlas.

En móvil (hasta 760px), el h1 usa `clamp(31px,10.8vw,57px)`, línea 1.06; la cursiva conserva su tracking propio. La identidad baja a 11px, el párrafo a 15.5px y los CTA a 15px. Hasta 360px, la identidad y el párrafo tienen ajustes adicionales. En escritorio bajo (altura máxima 820px), existe una composición compacta específica.

**The Approved Accent Rule.** Fraunces cursiva corresponde al acento del hero; Fraunces normal corresponde a los títulos de sección. No extender la cursiva a párrafos o botones.

## Layout

El contenedor compartido tiene ancho máximo de 1600px y márgenes interiores fluidos `clamp(24px,3.9vw,64px)`. No existe una escala de espaciado universal en CSS: el frontmatter registra medidas reutilizadas y valores representativos, sin exigir normalizar todas las secciones.

| Superficie | Escritorio | Adaptación existente |
| --- | --- | --- |
| Navegación | Sticky, barra de 88px. | Hasta 1080px: barra de 80px y menú desplegable. Ajustes de densidad a 1120px. |
| Hero | Columnas 57% / 43%, vídeo a la derecha. | 761–1080px: 58% / 42%. Hasta 760px: texto, CTA y vídeo apilados. |
| Webs | Texto y captura en columnas .8fr / 1.7fr. | Hasta 1100px: 1fr / 1.4fr. Hasta 760px: captura primero dentro del caso; pestañas desplazables. |
| Proyectos | Dos columnas, separación horizontal 48px y vertical 16px. | Hasta 1100px: separación horizontal 32px. Hasta 760px: una columna y filtros desplazables. |
| Contacto | Dos columnas y divisor vertical del formulario. | Hasta 760px: una columna y divisor horizontal. |

**Estado observado, no regla para páginas nuevas:** la portada usa scroll snapping obligatorio y secciones de altura `calc(100dvh - var(--nav-height))` con scroll interno. El hero móvil es una excepción de altura natural. Este comportamiento sigue pendiente de una revisión `adapt`; documentarlo no certifica que resuelva todos los casos de zoom o lectura. Las páginas de proyecto tienen flujo propio y no deben copiar automáticamente el modelo de paneles.

Los breakpoints locales de 700px, 1000px y 1100px también existen. No sustituirlos por un conjunto convencional sin comprobar el componente afectado.

## Elevation & Depth

La mayor parte de la jerarquía se consigue con fondos, color, divisores y espacio, no con tarjetas elevadas. Las tarjetas compartidas denominadas glass son transparentes, sin borde, sombra ni blur. La barra de navegación desplazada sí usa una sombra sutil (`0 8px 32px #00000010`); no convertir esa excepción en sombra general de tarjetas.

El vídeo del hero aporta profundidad visual sin contener texto ni controles. El activo actual es `public/videos/hero-studio-loop.mp4`, con poster `public/images/hero/video-loop-poster.webp`. Conserva `muted`, `loop`, `playsInline` y el tratamiento decorativo. Su marco usa proporción 16:11 en escritorio y 16:9 en móvil, máscaras suaves en ambos ejes y mezcla `lighten` solo en tema oscuro.

## Shapes

Los controles rectangulares tienen esquinas discretas (`rounded.control`). La captura freelance usa el radio `preview` y el retrato usa `portrait`. Las tarjetas de proyectos son bloques abiertos con divisor superior, sin contenedor redondeado. El acceso flotante de WhatsApp y ciertos controles del footer son circulares.

Los inputs usan un borde fino, fondo semántico del tema y radio pequeño; el textarea permite redimensionamiento vertical. No confundir el recorte decorativo del vídeo con una regla para recortar capturas de clientes.

## Components

### Buttons and links

El CTA principal del hero tiene relleno cobre, texto oscuro, radio pequeño, padding indicado en el frontmatter y **altura mínima**, no fija, de 58px. En tema claro su texto es `primary-label-light`; en móvil la altura mínima pasa a 52px. El secundario usa borde del texto secundario, fondo transparente y las mismas dimensiones. Los botones de contacto mantienen su variante local de 56px mínimos; no forzar una geometría única a todos los contextos.

El foco global usa contorno cobre de 2px y offset de 5px. Inputs de contacto tienen offset de 3px; filtros y pestañas usan offset interior de -3px para mantenerlo visible en áreas desplazables. Botones deshabilitados usan opacidad .6. El feedback activo global aplica traslación de 1px y escala .985.

### Project cards and filters

Tarjetas sin fondo elevado, con divisor superior; contexto a 14px, descripción a 16px / 1.65 y ancho máximo 64ch. El pie usa margen superior automático, padding superior 20px y separación interna 10px (12px en móvil). Mantener tecnologías y acciones como grupos distintos.

Los filtros son botones de al menos 48px y estado `aria-pressed`; su selección usa color cobre y subrayado. El recuento se anuncia con `role=status`. El filtro actual opera sobre datos reales y respeta proyectos ocultos.

### Freelance tabs

Conservar `tablist`, `tab`, `tabpanel`, `aria-selected`, foco itinerante y teclas izquierda/derecha, Home y End. El indicador cobre sigue la pestaña seleccionada y se reajusta con cambios de tamaño o fuentes. La captura y sus enlaces se actualizan al mismo caso que la descripción.

### Contact fields

Inputs y select tienen altura mínima 54px y padding 14px / 16px; texto a 16px. Los placeholders usan el color tenue semántico, no reemplazan las etiquetas. Nombre y detalles son obligatorios; los servicios y sus nombres proceden de `src/data/services.ts`. El formulario prepara un borrador en una aplicación externa: sus textos deben conservar esa consecuencia sin afirmar que el mensaje ya fue enviado.

### Motion

| Interacción | Duración observada | Material |
| --- | --- | --- |
| Feedback global | 180ms; variantes 240ms y 450ms | Color, fondo, borde y transform. |
| Indicador de pestaña | 300ms | Traslación y escala horizontal del subrayado. |
| Detalle del trabajo | 180ms | Opacidad. |
| Nueva captura | 360ms, después de cargar | Recorte direccional limitado y opacidad. |
| Salida de proyecto filtrado | 120ms | Copia visual temporal, inerte y oculta para tecnologías de asistencia. |
| Reorganización de proyectos | 280ms | FLIP con transforms. |
| Entrada de proyecto | 220ms | Traslación de 6px y opacidad. |

Las interacciones nuevas usan `cubic-bezier(.16,1,.3,1)` y `src/hooks/useMotion.ts`: se cancelan al interrumpirse, al ocultar la página, al desmontarse o al activar movimiento reducido. El contenido final permanece visible sin depender de que termine una animación. Las entradas por scroll ya existentes (650–750ms) y la entrada del hero (650ms) son otras capas de la implementación; no multiplicarlas como efecto por defecto.

El vídeo se pausa fuera de vista o cuando la página está oculta. Con movimiento reducido no se reproduce automáticamente; en la carga inicial se muestra el poster. No añadir bucles, audio, parallax ni reproducción automática adicional sin aprobación.

## Do's and Don'ts

### Do
- Conservar la composición aprobada del hero, su vídeo y la etiqueta Full Stack.
- Reutilizar las variables semánticas de ambos temas y los overrides de bandas editoriales.
- Mantener los roles de Manrope, DM Sans y Fraunces y las excepciones documentadas.
- Usar capturas, logos y tecnologías vinculados a datos reales del portafolio.
- Probar textos en español e inglés, foco de teclado y movimiento reducido.
- Mostrar una propuesta revisable antes de aplicar cambios visuales, según la preferencia del usuario.

### Don't
- Recuperar la escultura JC, su interacción de exploración o un trazo SVG como hero vigente: corresponden a versiones anteriores.
- Tratar las maquetas rechazadas o el antiguo brief `.impeccable/hero-direction.md` como autoridad sobre el código y las decisiones posteriores aprobadas.
- Introducir una nueva paleta, familia tipográfica o composición mediante una tarea de polish.
- Presentar medidas observadas, scroll interno o problemas pendientes como requisitos universales.
- Usar animación para ocultar controles, retrasar acciones o ignorar movimiento reducido.
- Inventar métricas, capturas, experiencia o resultados de clientes para completar una composición.

Fuentes de implementación: `src/app/globals.css`, `src/app/layout.tsx`, `src/components/sections/*.module.css`, `src/components/common/*.module.css`, `src/hooks/useMotion.ts` y estilos locales de `src/app/projects/[slug]/`. La extensión de Impeccable está en `.impeccable/design.json`; las rampas de color de esa extensión son ayudas de visualización derivadas, no nuevos colores aprobados para la UI.
