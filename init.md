# Centro Terapéutico Luminiscencia - Fuente de Verdad y Contexto

**Estado Actual:** Proyecto inicializado. Next.js 16 + Tailwind v4 + TypeScript + Framer Motion instalados. Design tokens y tipografías configurados.
**Última Actualización:** Marzo 2026.

Este documento es la fuente viva de conocimiento, contexto y estado del proyecto. Aquí registraremos cada decisión, avance arquitectónico y la hoja de ruta desde la Fase 1 hasta la Fase 2. Todo el desarrollo debe alinearse con este documento.

---

## 1. Visión General

El objetivo de esta arquitectura es construir una **Fase 1 potente, rápida y amigable con el SEO** (posicionamiento en Google), basada estrictamente en la estética y colores del logo original para inspirar "seguridad y tranquilidad". Este frontend actuará como los cimientos perfectos para la **Fase 2 (Portal de Pacientes)** sin tener que reescribir la aplicación desde cero.

### Principios guía
- **Confianza visual:** La estética debe transmitir calma, profesionalismo y calidez. El diseño sigue el sistema de color del logo (ver Sección 2).
- **Rendimiento primero:** El sitio debe cargar rápido en redes móviles chilenas. Meta: Lighthouse score > 90 en todas las categorías.
- **SEO desde el día 0:** Cada página se construye pensando en los términos que buscan los pacientes potenciales en Santiago y Chile.
- **Escalabilidad:** Cada decisión técnica de Fase 1 debe ser compatible con los requerimientos de Fase 2, evitando deuda técnica.

---

## 2. Branding y Diseño Visual

El logo es una **luciérnaga** con alas doradas sobre un círculo negro cálido, con la tipografía "Centro terapéutico / Luminiscencia" en serif dorado. Transmite la metáfora de "luz en la oscuridad" — ideal para un centro terapéutico. Este lenguaje visual guía todas las decisiones de diseño.

### Paleta de colores (extraída del logo)

| Token CSS                  | Hex         | Origen en logo                  | Uso en el sitio                                    |
|----------------------------|-------------|---------------------------------|----------------------------------------------------|
| `--color-bg`               | `#FAFAF7`   | —                               | Fondo general del sitio (blanco cálido)            |
| `--color-surface`          | `#F2F0E8`   | —                               | Fondo de tarjetas, secciones alternadas            |
| `--color-dark`             | `#1A1A18`   | Círculo negro del logo          | Hero oscuro, footer, secciones de contraste        |
| `--color-primary`          | `#C8A020`   | Alas exteriores (ámbar dorado)  | Botones CTA, acentos principales, links            |
| `--color-primary-light`    | `#E8D87A`   | Alas interiores (amarillo crema)| Hovers, badges, highlights suaves                 |
| `--color-primary-dark`     | `#7A6518`   | Alas interiores oscuras (oliva) | Estados activos, bordes en componentes dorados     |
| `--color-glow`             | `#F0E878`   | Abdomen / destello del insecto  | Efectos de brillo, animaciones de énfasis          |
| `--color-text`             | `#2C2820`   | —                               | Texto de cuerpo (marrón oscuro cálido)             |
| `--color-heading`          | `#1A1A18`   | Texto del logo                  | Títulos y encabezados                              |
| `--color-muted`            | `#7A7260`   | —                               | Texto secundario, placeholders, metadata           |
| `--color-border`           | `#E0D8C0`   | —                               | Bordes de tarjetas y separadores                   |
| `--color-text-on-dark`     | `#C8A828`   | Texto dorado del logo           | Texto sobre fondos oscuros (`--color-dark`)        |

> **Nota de aplicación:** El sitio usa fondos claros (`--color-bg`) como base principal, con el fondo oscuro (`--color-dark`) reservado para el Hero de inicio y el Footer — replicando el impacto visual del logo sin saturar la experiencia.

### Tipografías

| Rol        | Fuente               | Peso(s)      | Razón                                                                      |
|------------|----------------------|--------------|----------------------------------------------------------------------------|
| **Heading**| `Cormorant Garamond` | 400, 600     | Serif elegante con espaciado amplio. Coincide visualmente con la tipografía del logo. Evoca calma y seriedad. |
| **Body**   | `DM Sans`            | 400, 500     | Sans-serif moderna, muy legible en pantallas. Contrasta bien con Cormorant. |

- Fuente: Google Fonts, cargadas con `next/font/google` (sin bloqueo de render, sin FOUT).
- Escala tipográfica base: `16px` body, con ratio `1.25` para headings.

### Estilo visual general
- **Paleta oscuro/dorado** en secciones hero y footer; **blanco cálido/crema** en secciones de contenido.
- Espaciado generoso — el "aire" comunica calma y profesionalismo.
- Imágenes reales del centro y del equipo (no stock genérico). Tono cálido, desaturado.
- Iconografía de línea fina, monocromo dorado o gris.
- Microinteracciones suaves al hacer scroll: fade-in + slide-up con **Framer Motion**.
- El logo siempre se muestra sobre fondo oscuro para preservar su legibilidad e impacto.

---

## 3. Stack Tecnológico

### Frontend

| Tecnología         | Versión  | Razón                                                                                     |
|--------------------|----------|-------------------------------------------------------------------------------------------|
| **Next.js**        | 15 (App Router) | SSG para SEO, RSC, y rutas protegidas listas para Fase 2.                       |
| **TypeScript**     | 5.x      | Código robusto y escalable. Crítico para manejar datos clínicos en Fase 2.               |
| **Tailwind CSS**   | v4       | Solicitado explícitamente. Configuración CSS-first, compilación rápida, design tokens.   |
| **Framer Motion**  | 11.x     | Microinteracciones de scroll y transiciones de página que generan el "premium feel".     |

> **Decisión tomada:** Framer Motion se incluye desde Fase 1. Las animaciones son parte core de la experiencia, no un accesorio opcional.

### Backend y Datos

| Tecnología     | Fase    | Uso                                                                         |
|----------------|---------|-----------------------------------------------------------------------------|
| **Supabase**   | Fase 2  | Auth (email/Google), PostgreSQL, Storage de documentos.                     |
| **Resend**     | Fase 1  | Envío de emails transaccionales desde el formulario de contacto.            |

> **Nota Fase 1:** No se requiere base de datos. El formulario de contacto usa Resend (API de email) mediante un Route Handler de Next.js. Supabase se conecta en Fase 2.

### Infraestructura

| Servicio     | Uso                                                                                              |
|--------------|--------------------------------------------------------------------------------------------------|
| **Vercel**   | Deploy automático con cada push a `main`. SSL incluido. Red edge global. Tier gratuito suficiente para Fase 1. |
| **Dominio**  | `centroluminiscencia.cl` — migrar DNS a Vercel una vez completado el QA.                        |

---

## 4. Páginas y Estructura del Sitio (Fase 1)

| Ruta              | Página            | Prioridad | Contenido clave                                                             |
|-------------------|-------------------|-----------|-----------------------------------------------------------------------------|
| `/`               | Inicio (Home)     | Alta      | Hero, propuesta de valor, servicios resumidos, equipo, CTA agendar.        |
| `/nosotros`       | Nosotros / Equipo | Alta      | Historia del centro, valores, perfil de cada psicóloga.                    |
| `/servicios`      | Servicios         | Alta      | Descripción de cada tipo de terapia / atención ofrecida.                   |
| `/contacto`       | Contacto          | Alta      | Formulario de contacto, datos, ubicación, mapa (Google Maps embed).        |
| `/agendar`        | (Redirect externo)| Alta      | CTA que redirige a `tuu.cl/agenda-centro-terapeutico-luminiscencia`.       |
| `/blog` *(futuro)*| Blog / Artículos  | Media     | Artículos SEO sobre salud mental. Se puede agregar en iteración posterior. |

> **Acción requerida:** Confirmar si se requiere una página separada `/servicios/[slug]` por tipo de servicio, o si todo va en una sola página.

---

## 5. SEO y Analytics

### SEO Técnico (Fase 1)
- `metadata` por página con `title`, `description` y `openGraph` (Next.js Metadata API).
- `sitemap.xml` generado automáticamente con `next-sitemap`.
- `robots.txt` configurado para permitir indexación.
- Marcado estructurado (JSON-LD) para `LocalBusiness` y `MedicalOrganization` — mejora visibilidad en Google Maps y búsquedas locales.
- Imágenes optimizadas con `next/image` (WebP automático, lazy loading).
- URLs limpias y semánticas (sin parámetros innecesarios).

### Keywords objetivo (base)
- "psicólogo Santiago", "centro terapéutico Santiago", "terapia psicológica online Chile", "psicóloga [nombre especialidad]", "centro luminiscencia".

### Analytics y Monitoreo
- **Google Analytics 4 (GA4):** Instalado desde el primer deploy. Seguimiento de visitas, conversiones (clics en "Agendar") y comportamiento.
- **Google Search Console:** Verificación del dominio para monitorear indexación y palabras clave reales de búsqueda.
- **Vercel Analytics:** Métricas de Core Web Vitals en producción (integración nativa, sin costo adicional).

---

## 6. Formulario de Contacto

El formulario de contacto es el único punto de captura de datos en Fase 1.

**Campos:** Nombre, email, teléfono (opcional), mensaje, consentimiento RGPD/PDPA.
**Flujo:**
1. El usuario envía el formulario en `/contacto`.
2. Un **Route Handler** (`/api/contact`) en Next.js valida los datos con **Zod**.
3. Se envía un email de notificación al centro usando la API de **Resend**.
4. El usuario recibe confirmación visual (toast/mensaje de éxito).

**Anti-spam:** Rate limiting básico con los headers de Vercel + honeypot field oculto.

---

## 7. Accesibilidad y Calidad

- Contraste de color mínimo **WCAG AA** (ratio 4.5:1 para texto normal).
- Navegación completa por teclado.
- Atributos `aria-label` en elementos interactivos.
- Textos alternativos (`alt`) descriptivos en todas las imágenes.
- Meta viewport y diseño responsivo **Mobile First**.

**Metas de rendimiento (Lighthouse en producción):**
| Categoría        | Meta  |
|------------------|-------|
| Performance      | > 90  |
| Accessibility    | > 90  |
| Best Practices   | > 90  |
| SEO              | 100   |

---

## 8. Gestión de Agendamiento

- **Fase 1:** Botones CTA redirigen a `tuu.cl/agenda-centro-terapeutico-luminiscencia`. Sin integración técnica directa.
- **Fase 2:** Motor de reservas interno con API propia, sincronización con Google Calendar y sistema de pagos (Webpay Plus / Flow).

---

## 9. Arquitectura Fase 2 (Portal de Pacientes)

Elementos que se agregan sobre la base de Fase 1, sin reescribir.

| Módulo                | Tecnología          | Descripción                                                              |
|-----------------------|---------------------|--------------------------------------------------------------------------|
| **Autenticación**     | Supabase Auth       | Login con email/contraseña y Google OAuth.                               |
| **Dashboard Paciente**| Next.js `/portal`   | Vista de sesiones pasadas, próximas citas y documentos.                  |
| **Storage**           | Supabase Storage    | Los terapeutas suben informes/facturas; el paciente los descarga.        |
| **Booking interno**   | API Next.js + Supabase | Reemplaza TUU progresivamente. Integración con Google Calendar.      |
| **Notificaciones**    | Resend              | Recordatorios de cita por email (y futuro: WhatsApp via Twilio).        |

---

## 10. Cronograma Fase 1

| Etapa | Descripción                                                                                   | Entregable                              |
|-------|-----------------------------------------------------------------------------------------------|-----------------------------------------|
| 1     | **Setup:** Inicializar Next.js 15 + Tailwind v4 + TypeScript. Definir paleta y tipografías.  | Repositorio base + Design tokens CSS.   |
| 2     | **Componentes base:** Header, Footer, botones, tarjetas, layout responsivo.                  | Storybook o página `/ui` de referencia. |
| 3     | **Páginas:** Home, Nosotros, Servicios, Contacto. Contenido real del centro.                 | Sitio funcional en preview de Vercel.   |
| 4     | **SEO y Analytics:** Metadata, sitemap, JSON-LD, GA4, Search Console.                       | Score SEO 100 en Lighthouse.            |
| 5     | **Formulario de contacto:** Integración Resend + validación Zod.                            | Emails llegando al centro.              |
| 6     | **QA y lanzamiento:** Pruebas en móvil/desktop, velocidad, accesibilidad. Migración DNS.    | Sitio en vivo en `centroluminiscencia.cl`. |

---

## 11. Decisiones Pendientes

Estas decisiones deben resolverse antes o durante la Etapa 1:

- [x] ~~Compartir logo en alta resolución~~ — Logo.png agregado. Paleta y tipografía definidas en Sección 2.
- [ ] Confirmar lista completa de servicios ofrecidos y sus descripciones.
- [ ] Confirmar perfiles del equipo (nombres, fotos, especialidades, breve bio).
- [ ] Decidir si `/servicios` es una sola página o tiene subpáginas por especialidad.
- [ ] Definir el email de destino para el formulario de contacto.
- [ ] Confirmar si se incluye blog desde Fase 1 o se deja para iteración futura.
- [ ] Confirmar cuenta de Google Analytics / Google Search Console (o crear nuevas).
