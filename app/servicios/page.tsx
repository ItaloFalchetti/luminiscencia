import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Especialidades | Centro Terapéutico Luminiscencia",
  description:
    "Conoce las 9 especialidades del Centro Terapéutico Luminiscencia: terapia infanto-juvenil, adultos, online, psicodiagnóstico, terapia familiar y más.",
};

const TUU_URL = "https://tuu.cl/agenda-centro-terapeutico-luminiscencia";

const services = [
  {
    name: "Terapia infanto-juvenil",
    description:
      "Apoyo psicológico para niños y adolescentes, abordando dificultades emocionales, conductuales y del desarrollo. Trabajamos de forma cercana con las familias para acompañar integralmente cada proceso.",
    audience: "Niños y adolescentes",
  },
  {
    name: "Terapia con adultos",
    description:
      "Espacio de acompañamiento para el bienestar emocional y mental en la adultez. Abordamos ansiedad, depresión, crisis vitales, autoestima y cualquier dificultad que afecte tu calidad de vida.",
    audience: "Adultos",
  },
  {
    name: "Terapia online",
    description:
      "Atención psicológica a distancia con la misma calidad y compromiso que la terapia presencial. Ideal para quienes tienen dificultades de traslado o prefieren la comodidad de su propio espacio.",
    audience: "Todas las edades",
  },
  {
    name: "Psicodiagnóstico",
    description:
      "Evaluaciones psicológicas para comprender mejor las necesidades individuales y orientar el tratamiento adecuado. Incluye informe diagnóstico inicial sin costo adicional.",
    audience: "Todas las edades",
  },
  {
    name: "Terapia familiar",
    description:
      "Intervención para mejorar la comunicación y fortalecer los vínculos familiares. Trabajamos con el sistema familiar como unidad, promoviendo dinámicas más saludables y colaborativas.",
    audience: "Familias",
  },
  {
    name: "Psicoterapia de juego",
    description:
      "Método terapéutico para niños donde, a través del juego, se expresan y procesan emociones difíciles. El juego es el lenguaje natural de la infancia y una herramienta terapéutica poderosa.",
    audience: "Niños",
  },
  {
    name: "Terapia cognitivo-conductual",
    description:
      "Enfoque basado en la modificación de pensamientos y conductas para mejorar el bienestar emocional. Especialmente efectiva para ansiedad, fobias, TOC y trastornos del estado de ánimo.",
    audience: "Adolescentes y adultos",
  },
  {
    name: "Terapia sistémica relacional",
    description:
      "Abordaje que trabaja las relaciones y dinámicas dentro de los sistemas familiares y sociales. Considera el contexto como parte fundamental del problema y de la solución.",
    audience: "Familias y adultos",
  },
  {
    name: "Terapia reparatoria",
    description:
      "Proceso terapéutico enfocado en la reparación emocional de experiencias traumáticas, promoviendo la resiliencia y el bienestar. Trabajamos con trauma complejo, abuso y experiencias de vulneración.",
    audience: "Niños, adolescentes y adultos",
  },
];

export default function ServiciosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Especialidades"
        title="Nuestras áreas de atención"
        description="Ofrecemos una amplia gama de terapias adaptadas a cada etapa de la vida. Todas las sesiones tienen una duración de 60 minutos."
      />

      {/* ── Stats row ── */}
      <section className="py-14 bg-(--color-bg) border-b border-(--color-border)">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3">
            {[
              {
                value: "60 min",
                detail:
                  "Duración de cada sesión, garantizando un trabajo terapéutico profundo.",
              },
              {
                value: "9",
                detail:
                  "Especialidades disponibles para atender las necesidades de cada persona.",
              },
              {
                value: "Presencial y online",
                detail: "Atendemos en nuestras salas en Maipú y también a distancia.",
              },
            ].map((item, i) => (
              <div
                key={item.value}
                className={[
                  "flex flex-col gap-3 py-8",
                  i > 0
                    ? "md:border-l border-(--color-border) md:pl-10"
                    : "md:pr-10",
                  i < 2 ? "border-b border-(--color-border) md:border-b-0" : "",
                ].join(" ")}
              >
                <span
                  className="font-normal leading-none text-(--color-primary)"
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "clamp(2rem, 4vw, 3rem)",
                  }}
                >
                  {item.value}
                </span>
                <p className="text-(--color-muted) text-sm leading-relaxed">
                  {item.detail}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Services catalog ── */}
      <section className="py-24 bg-(--color-bg)">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-(--color-border)">
            {services.map((service, i) => (
              <div
                key={service.name}
                className="relative flex flex-col gap-5 p-8 lg:p-10 bg-(--color-bg) overflow-hidden hover:bg-(--color-surface) transition-colors duration-300 group"
              >
                {/* Large decorative background number */}
                <span
                  className="absolute -top-4 -right-1 font-normal leading-none select-none pointer-events-none transition-opacity duration-300 opacity-60 group-hover:opacity-100"
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "7.5rem",
                    color: "var(--color-border)",
                  }}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Number + audience row */}
                <div className="relative flex items-start justify-between gap-3">
                  <span className="text-xs text-(--color-primary) font-medium tracking-widest tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-[9px] text-(--color-muted) uppercase tracking-widest border border-(--color-border) px-2.5 py-1 shrink-0">
                    {service.audience}
                  </span>
                </div>

                {/* Service name */}
                <h2
                  className="relative font-normal leading-snug text-(--color-heading)"
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "clamp(1.2rem, 2vw, 1.5rem)",
                  }}
                >
                  {service.name}
                </h2>

                {/* Gold accent rule */}
                <div
                  className="relative h-px bg-(--color-border) transition-all duration-500 group-hover:bg-(--color-primary)"
                  style={{ width: "36px" }}
                />

                {/* Description */}
                <p className="relative text-sm text-(--color-muted) leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* ── CTA ── */}
      <section className="py-20 bg-(--color-dark)">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-10 max-w-5xl">
            <div className="flex flex-col gap-4">
              <span className="text-[10px] text-(--color-primary) tracking-[0.4em] uppercase font-medium">
                ¿Tienes dudas?
              </span>
              <h2
                className="font-normal text-(--color-text-on-dark) leading-tight"
                style={{ fontSize: "clamp(1.8rem, 3.5vw, 2.8rem)" }}
              >
                ¿No sabes qué especialidad<br className="hidden md:block" />
                te corresponde?
              </h2>
              <p className="text-(--color-muted) leading-relaxed max-w-lg text-sm">
                No te preocupes. Escríbenos o agenda una primera sesión y
                evaluaremos juntos cuál es el mejor enfoque para ti.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href={TUU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-3.5 bg-(--color-primary) text-(--color-dark) text-xs font-medium tracking-[0.2em] uppercase hover:bg-(--color-primary-dark) hover:text-white transition-colors duration-200"
              >
                Agendar hora
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-3.5 border border-white/20 text-(--color-text-on-dark) text-xs font-medium tracking-[0.2em] uppercase hover:border-(--color-primary) hover:text-(--color-primary) transition-colors duration-200"
              >
                Escribirnos
              </a>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
