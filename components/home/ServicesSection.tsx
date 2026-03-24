import Container from "@/components/ui/Container";

type Service = {
  name: string;
  description: string;
  colSpan: 1 | 2;
  accent?: boolean;
};

const services: Service[] = [
  {
    name: "Terapia infanto-juvenil",
    description:
      "Apoyo psicológico para niños y adolescentes, abordando dificultades emocionales, conductuales y del desarrollo.",
    colSpan: 2,
    accent: true,
  },
  {
    name: "Terapia con adultos",
    description:
      "Espacio de acompañamiento para el bienestar emocional y mental en la adultez.",
    colSpan: 1,
  },
  {
    name: "Terapia online",
    description:
      "Atención psicológica a distancia, con la misma calidad y compromiso que la terapia presencial.",
    colSpan: 1,
  },
  {
    name: "Psicodiagnóstico",
    description:
      "Evaluaciones psicológicas para comprender mejor las necesidades individuales y orientar el tratamiento.",
    colSpan: 2,
  },
  {
    name: "Terapia familiar",
    description:
      "Intervención para mejorar la comunicación y fortalecer los vínculos familiares.",
    colSpan: 2,
  },
  {
    name: "Psicoterapia de juego",
    description:
      "Método terapéutico para niños donde, a través del juego, se expresan y procesan sus emociones.",
    colSpan: 1,
  },
  {
    name: "Terapia cognitivo-conductual",
    description:
      "Enfoque basado en la modificación de pensamientos y conductas para mejorar el bienestar emocional.",
    colSpan: 1,
  },
  {
    name: "Terapia sistémica relacional",
    description:
      "Abordaje que trabaja las relaciones y dinámicas dentro de los sistemas familiares y sociales.",
    colSpan: 1,
  },
  {
    name: "Terapia reparatoria",
    description:
      "Proceso terapéutico enfocado en la reparación emocional de experiencias traumáticas.",
    colSpan: 1,
  },
];

export default function ServicesSection() {
  return (
    <section id="especialidades" className="py-24 bg-(--color-bg)">
      <Container>
        <div className="flex flex-col gap-14">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
                Especialidades
              </span>
              <h2 className="text-4xl md:text-5xl font-normal">
                Nuestras áreas<br className="hidden md:block" /> de atención
              </h2>
            </div>
            <p className="text-(--color-muted) text-sm leading-relaxed max-w-xs">
              Terapias adaptadas a cada etapa de la vida y a las necesidades de cada persona.
            </p>
          </div>

          {/* Bento grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-3">
            {services.map((service, i) => (
              <div
                key={service.name}
                className={[
                  "group flex flex-col justify-between gap-8 p-8 rounded-2xl transition-all duration-300",
                  service.colSpan === 2 ? "lg:col-span-2" : "lg:col-span-1",
                  service.accent
                    ? "bg-(--color-primary-dark) hover:bg-(--color-primary-dark)"
                    : "bg-(--color-surface) hover:bg-(--color-border)",
                ].join(" ")}
              >
                <div className="flex items-start justify-between gap-4">
                  <h3
                    className={[
                      "text-xl font-normal leading-snug",
                      service.accent ? "text-white" : "text-(--color-heading)",
                    ].join(" ")}
                  >
                    {service.name}
                  </h3>
                  <span
                    className={[
                      "text-xs font-medium tabular-nums shrink-0 mt-1",
                      service.accent
                        ? "text-(--color-text-on-dark)"
                        : "text-(--color-primary)",
                    ].join(" ")}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <p
                  className={[
                    "text-sm leading-relaxed",
                    service.accent ? "text-white/60" : "text-(--color-muted)",
                  ].join(" ")}
                >
                  {service.description}
                </p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
