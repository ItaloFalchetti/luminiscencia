import Container from "@/components/ui/Container";

const stats = [
  {
    value: "60'",
    label: "Duración de cada sesión",
    detail: "Tiempo completo dedicado a ti",
  },
  {
    value: "9",
    label: "Especialidades disponibles",
    detail: "Desde infanto-juvenil hasta adultos",
  },
  {
    value: "2",
    label: "Psicólogas certificadas",
    detail: "Con formación especializada",
  },
  {
    value: "$18K",
    label: "Precio con convenio",
    detail: "Convenio Municipalidad de Pudahuel",
  },
];

export default function StatsSection() {
  return (
    <section className="py-24 bg-(--color-dark)">
      <Container>
        <div className="flex flex-col gap-12">

          <div className="flex flex-col gap-3">
            <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
              El centro en números
            </span>
            <h2 className="text-4xl md:text-5xl font-normal text-white">
              Transparencia y compromiso
            </h2>
          </div>

          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col items-center text-center gap-4 p-8 rounded-2xl bg-white/5 hover:bg-white/8 transition-colors duration-300"
              >
                <span
                  className="font-normal leading-none"
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "clamp(3rem, 5vw, 4.5rem)",
                    color: "#F0E0A0",
                  }}
                >
                  {stat.value}
                </span>
                <div className="flex flex-col items-center gap-1 pt-3 border-t border-white/10 w-full">
                  <span className="text-sm text-white font-medium leading-snug">
                    {stat.label}
                  </span>
                  <span className="text-xs text-(--color-muted) leading-relaxed">
                    {stat.detail}
                  </span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
