import Container from "@/components/ui/Container";

const services = [
  {
    name: "Terapia infanto-juvenil",
    description:
      "Apoyo psicológico para niños y adolescentes, abordando dificultades emocionales, conductuales y del desarrollo.",
  },
  {
    name: "Terapia con adultos",
    description:
      "Espacio de acompañamiento para el bienestar emocional y mental en la adultez.",
  },
  {
    name: "Terapia online",
    description:
      "Atención psicológica a distancia, con la misma calidad y compromiso que la terapia presencial.",
  },
  {
    name: "Psicodiagnóstico",
    description:
      "Evaluaciones psicológicas para comprender mejor las necesidades individuales y orientar el tratamiento adecuado.",
  },
  {
    name: "Terapia familiar",
    description:
      "Intervención para mejorar la comunicación y fortalecer los vínculos familiares.",
  },
  {
    name: "Psicoterapia de juego",
    description:
      "Método terapéutico para niños, donde a través del juego se expresan y procesan sus emociones.",
  },
  {
    name: "Terapia cognitivo-conductual",
    description:
      "Enfoque basado en la modificación de pensamientos y conductas para mejorar el bienestar emocional.",
  },
  {
    name: "Terapia sistémica relacional",
    description:
      "Abordaje que trabaja las relaciones y dinámicas dentro de los sistemas familiares y sociales.",
  },
  {
    name: "Terapia reparatoria",
    description:
      "Proceso terapéutico enfocado en la reparación emocional de experiencias traumáticas, promoviendo la resiliencia.",
  },
];

export default function ServicesSection() {
  return (
    <section id="especialidades" className="py-24 bg-(--color-surface)">
      <Container>
        <div className="flex flex-col gap-14">

          {/* Encabezado */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
              Especialidades
            </span>
            <h2 className="text-4xl md:text-5xl font-normal">
              Nuestras áreas de atención
            </h2>
            <p className="text-(--color-muted) leading-relaxed">
              Ofrecemos una amplia gama de terapias adaptadas a cada etapa de la vida
              y a las necesidades particulares de cada persona.
            </p>
          </div>

          {/* Grid de servicios */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-(--color-border)">
            {services.map((service, i) => (
              <div
                key={service.name}
                className="flex flex-col gap-3 p-8 bg-(--color-bg)"
              >
                <span className="text-(--color-primary) text-sm font-medium tabular-nums">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <h3 className="text-lg font-normal leading-snug">{service.name}</h3>
                <p className="text-(--color-muted) text-sm leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
