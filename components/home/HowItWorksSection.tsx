import Container from "@/components/ui/Container";

const steps = [
  {
    number: "01",
    title: "Contáctanos",
    description:
      "Escríbenos por el formulario de contacto o por Instagram. Cuéntanos brevemente lo que necesitas.",
  },
  {
    number: "02",
    title: "Agenda tu hora",
    description:
      "Elige la especialista y el horario que más te acomode. Pago previo online, sin trámites presenciales.",
  },
  {
    number: "03",
    title: "Comienza tu proceso",
    description:
      "Primera sesión de evaluación. Juntos definimos el plan terapéutico que mejor se adapta a ti.",
  },
];

export default function HowItWorksSection() {
  return (
    <section className="py-24 bg-(--color-surface)">
      <Container>
        <div className="flex flex-col gap-14">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
                Proceso
              </span>
              <h2 className="text-4xl md:text-5xl font-normal">
                Cómo comenzar
              </h2>
            </div>
            <p className="text-(--color-muted) text-sm leading-relaxed max-w-xs">
              Tres pasos simples para dar el primer paso hacia tu bienestar.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-(--color-border)">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative flex flex-col gap-6 p-10 bg-(--color-surface)"
              >
                {/* Número grande de fondo */}
                <span
                  className="absolute top-6 right-8 text-[5rem] font-normal leading-none select-none pointer-events-none"
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    color: "var(--color-border)",
                  }}
                >
                  {step.number}
                </span>

                {/* Círculo numerado */}
                <div className="relative w-10 h-10 rounded-full bg-(--color-primary) flex items-center justify-center shrink-0">
                  <span className="text-white text-sm font-medium">{i + 1}</span>
                </div>

                <div className="flex flex-col gap-3 relative">
                  <h3 className="text-xl font-normal">{step.title}</h3>
                  <p className="text-sm text-(--color-muted) leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
