@AGENTS.md

# Centro Terapéutico Luminiscencia — Instrucciones del proyecto

## Stack
- **Next.js 16** (App Router, Server Components por defecto)
- **Tailwind CSS 4** con PostCSS — sintaxis especial para CSS vars: `bg-(--color-primary)`, `text-(--color-muted)`, etc.
- **Framer Motion 12** disponible, pero preferir animaciones CSS para componentes Server
- **Fuentes**: Cormorant Garamond (`--font-heading`, cargada con `style: ["normal", "italic"]`) + DM Sans (`--font-body`)

## Paleta de colores (globals.css)
| Variable | Valor | Uso |
|---|---|---|
| `--color-bg` | `#F6F3EC` | Fondo principal (crema cálida) |
| `--color-surface` | `#EDEADF` | Fondo secundario / cards |
| `--color-dark` | `#1B2B24` | Fondo oscuro (verde bosque) |
| `--color-primary` | `#B89650` | Oro principal |
| `--color-primary-dark` | `#7A6230` | Oro oscuro / hover |
| `--color-text` | `#2C2820` | Texto cuerpo |
| `--color-muted` | `#7A7260` | Texto secundario |
| `--color-border` | `#DDD5BE` | Bordes y separadores |
| `--color-text-on-dark` | `#D4C090` | Texto sobre fondos oscuros |
| `--color-accent` | `#8FAF96` | Sage verde (toques de calma) |

## Convenciones de diseño — "Santuario Editorial"
- **Sin `rounded-full`** en CTAs principales — usar bordes rectos o `rounded-sm` para look editorial
- **Itálica de Cormorant** para énfasis emocional en titulares: `<em style={{ fontStyle: "italic" }}>`
- **Eyebrows**: siempre `text-[10px] tracking-[0.45em] uppercase` con línea `w-8 h-px bg-(--color-primary)` antes
- **Botones primarios**: `uppercase tracking-[0.2em] text-xs` (no `tracking-wide` + capitalize)
- **Secciones oscuras** (`bg-(--color-dark)`): añadir círculos decorativos concéntricos con `border border-primary/10`
- **Cards en catálogo**: número decorativo de fondo en serif grande con `color: var(--color-border)`
- Animaciones de entrada: clases CSS `.animate-slide-up`, `.animate-fade-in`, `.animate-slide-right` con `animationDelay` inline

## Arquitectura de componentes
```
app/
  layout.tsx          — fuentes, Header, Footer, FloatingActions
  globals.css         — paleta @theme, animaciones CSS
  page.tsx            — orquesta secciones home
  servicios/page.tsx  — catálogo completo
  nosotros/page.tsx   — equipo
  contacto/page.tsx   — formulario
components/
  home/               — secciones de la home (Server Components, excepto ServicesSection)
  layout/             — Header ("use client"), Footer
  ui/                 — Container, Button, PageHero, FloatingActions
```

## Patrones de código
- **URL de agenda** (TUU): definir como constante `const TUU_URL = "https://tuu.cl/agenda-centro-terapeutico-luminiscencia"` en el archivo que la use
- **Componentes interactivos** (hover state, scroll): agregar `"use client"` y usar `useState`/`useEffect`
- **Imágenes**: siempre usar `next/image` con `fill` + `className="object-cover"`
- **Tipografía display**: `style={{ fontFamily: "var(--font-heading), Georgia, serif" }}` en `<span>` o cuando se necesite fuera de h1-h6
- No usar `rounded-2xl` en imágenes principales — el estilo editorial prefiere sin radio o con radio mínimo

## Contenido del centro
- **Ubicación**: General Ordoñez 155, Oficina 905, Maipú (Metro Plaza Maipú)
- **Instagram**: @centro_luminiscencia
- **Equipo**: Tiare Dote (infanto-juvenil, LGBTIQANB+) · Mónica Soto (juego, TEA/ADOS-2, trauma)
- **Especialidades**: 9 en total (infanto-juvenil, adultos, online, psicodiagnóstico, familiar, psicoterapia de juego, TCC, sistémica, reparatoria)
- **Precios**: $25.000 particular · $18.000 convenio Municipalidad Pudahuel
- **Sesiones**: 60 minutos, presencial y online
