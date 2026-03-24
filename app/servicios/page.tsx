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

      {/* Intro sesiones */}
      <section className="py-16 bg-(--color-bg) border-b border-(--color-border)">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl">
            <div className="flex flex-col gap-2">
              <span className="text-(--color-primary) text-3xl font-normal" style={{ fontFamily: "var(--font-heading)" }}>60 min</span>
              <p className="text-(--color-muted) text-sm leading-relaxed">Duración de cada sesión, garantizando un trabajo terapéutico profundo.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-(--color-primary) text-3xl font-normal" style={{ fontFamily: "var(--font-heading)" }}>9</span>
              <p className="text-(--color-muted) text-sm leading-relaxed">Especialidades disponibles para atender las necesidades de cada persona.</p>
            </div>
            <div className="flex flex-col gap-2">
              <span className="text-(--color-primary) text-3xl font-normal" style={{ fontFamily: "var(--font-heading)" }}>Presencial y online</span>
              <p className="text-(--color-muted) text-sm leading-relaxed">Atendemos en nuestras salas en Maipú y también a distancia.</p>
            </div>
          </div>
        </Container>
      </section>

      {/* Grid de servicios */}
      <section className="py-20 bg-(--color-surface)">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-(--color-border)">
            {services.map((service, i) => (
              <div key={service.name} className="flex flex-col gap-4 p-8 bg-(--color-bg)">
                <div className="flex items-start justify-between gap-4">
                  <span className="text-(--color-primary) text-sm font-medium tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="text-xs text-(--color-muted) border border-(--color-border) rounded-sm px-2 py-0.5 shrink-0">
                    {service.audience}
                  </span>
                </div>
                <h2 className="text-xl font-normal leading-snug">{service.name}</h2>
                <p className="text-(--color-muted) text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-20 bg-(--color-dark)">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8 max-w-4xl">
            <div className="flex flex-col gap-3">
              <h2 className="text-3xl md:text-4xl font-normal text-(--color-text-on-dark)">
                ¿No sabes qué especialidad te corresponde?
              </h2>
              <p className="text-(--color-muted) leading-relaxed max-w-lg">
                No te preocupes. Escríbenos o agenda una primera sesión y evaluaremos juntos cuál es el mejor enfoque para ti.
              </p>
            </div>
            <div className="flex flex-col sm:flex-row gap-4 shrink-0">
              <a
                href={TUU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-(--color-primary) text-(--color-dark) font-medium tracking-wide hover:bg-(--color-primary-dark) hover:text-white transition-colors duration-200"
              >
                Agendar hora
              </a>
              <a
                href="/contacto"
                className="inline-flex items-center justify-center px-8 py-4 rounded-sm border border-white/20 text-(--color-text-on-dark) font-medium hover:border-(--color-primary) hover:text-(--color-primary) transition-colors duration-200"
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
