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
];

export default function StatsSection() {
  return (
    <section className="py-28 bg-(--color-dark) relative overflow-hidden">

      {/* Decorative circles */}
      <div
        className="absolute -right-32 -top-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(184,150,80,0.08)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -right-16 -top-16 w-[320px] h-[320px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(184,150,80,0.06)" }}
        aria-hidden="true"
      />

      <Container>
        <div className="flex flex-col gap-14">

          {/* Header */}
          <div className="flex flex-col gap-4">
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-(--color-primary)" />
              <span className="text-[10px] text-(--color-primary) tracking-[0.45em] uppercase font-medium">
                El centro en números
              </span>
            </div>
            <h2
              className="font-normal leading-none tracking-tight"
              style={{ fontSize: "clamp(2.8rem, 4.5vw, 3.8rem)", color: "#FFFFE6" }}
            >
              Transparencia{" "}
              <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>
                y compromiso
              </em>
            </h2>
          </div>

          {/* Stats grid — 3 items */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-white/5">
            {stats.map((stat) => (
              <div
                key={stat.value}
                className="flex flex-col gap-5 p-8 lg:p-10 bg-(--color-dark) hover:bg-white/[0.03] transition-colors duration-300"
              >
                <span
                  className="font-normal leading-none"
                  style={{
                    fontFamily: "var(--font-heading), Georgia, serif",
                    fontSize: "clamp(3rem, 5vw, 4.5rem)",
                    color: "var(--color-text-on-dark)",
                  }}
                >
                  {stat.value}
                </span>
                <div className="flex flex-col gap-1 pt-5 border-t border-white/10">
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
