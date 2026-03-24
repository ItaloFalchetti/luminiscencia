import Container from "@/components/ui/Container";

const features = [
  {
    title: "60 minutos por sesión",
    description:
      "A diferencia de muchos centros, nuestras sesiones son de una hora completa, lo que permite un trabajo terapéutico más profundo y enfocado en tu progreso.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <circle cx="12" cy="12" r="10" />
        <polyline points="12 6 12 12 16 14" />
      </svg>
    ),
  },
  {
    title: "Boleta por cada sesión",
    description:
      "Emitimos boleta por cada atención para que puedas gestionar tu reembolso con tu isapre o seguro de salud sin trámites adicionales.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
        <line x1="9" y1="13" x2="15" y2="13" />
        <line x1="9" y1="17" x2="15" y2="17" />
      </svg>
    ),
  },
  {
    title: "Presencial y online",
    description:
      "Atendemos de forma presencial en nuestras salas en Santiago, y también a distancia con la misma calidad y compromiso de la terapia en persona.",
    icon: (
      <svg width="28" height="28" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
        <rect x="2" y="3" width="20" height="14" rx="2" />
        <line x1="8" y1="21" x2="16" y2="21" />
        <line x1="12" y1="17" x2="12" y2="21" />
      </svg>
    ),
  },
];

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-(--color-bg)">
      <Container>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((f) => (
            <div
              key={f.title}
              className="flex flex-col gap-4 p-8 bg-(--color-surface) rounded-sm border border-(--color-border)"
            >
              <div className="text-(--color-primary)">{f.icon}</div>
              <h3 className="text-xl font-normal">{f.title}</h3>
              <p className="text-(--color-muted) text-sm leading-relaxed">{f.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
