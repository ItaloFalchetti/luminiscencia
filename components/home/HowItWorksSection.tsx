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
    <section className="py-28 bg-(--color-surface)">
      <Container>
        <div className="flex flex-col gap-16">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-(--color-primary)" />
                <span className="text-[10px] text-(--color-primary) tracking-[0.45em] uppercase font-medium">
                  Proceso
                </span>
              </div>
              <h2
                className="font-normal leading-none tracking-tight text-(--color-dark)"
                style={{ fontSize: "clamp(2.8rem, 7vw, 4.5rem)" }}
              >
                Cómo{" "}
                <em style={{ fontStyle: "italic" }}>comenzar</em>
              </h2>
            </div>
            <p className="text-(--color-muted) text-sm leading-relaxed max-w-xs">
              Tres pasos simples para dar el primer paso hacia tu bienestar.
            </p>
          </div>

          {/* Steps */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-(--color-border)">
            {steps.map((step, i) => (
              <div
                key={step.number}
                className="relative flex flex-col gap-8 p-10 bg-(--color-surface)"
              >
                {/* Large faded step number */}
                <span
                  className="absolute top-6 right-7 font-normal leading-none select-none pointer-events-none"
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "6.5rem",
                    color: "var(--color-border)",
                  }}
                  aria-hidden="true"
                >
                  {step.number}
                </span>

                {/* Step indicator */}
                <div
                  className="w-8 h-8 flex items-center justify-center shrink-0"
                  style={{ border: "1px solid var(--color-primary)" }}
                >
                  <span
                    className="text-xs font-medium text-(--color-primary)"
                    style={{ fontVariantNumeric: "tabular-nums" }}
                  >
                    {i + 1}
                  </span>
                </div>

                {/* Content */}
                <div className="relative flex flex-col gap-3">
                  <h3
                    className="font-normal text-(--color-dark)"
                    style={{
                      fontFamily: "var(--font-heading), Georgia, serif",
                      fontSize: "1.4rem",
                    }}
                  >
                    {step.title}
                  </h3>
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
