const items = [
  "Centro Terapéutico Luminiscencia",
  "Maipú · Metro Plaza Maipú",
  "Sesiones de 60 min",
  "Presencial y Online",
  "Infanto-Juvenil",
  "Adultos",
  "Psicodiagnóstico",
  "Terapia Familiar",
  "Agenda Online",
];

const doubled = [...items, ...items];

export default function MarqueeSection() {
  return (
    <div
      className="bg-(--color-dark) py-3.5 overflow-hidden select-none"
      style={{ borderTop: "1px solid rgba(255,255,255,0.04)", borderBottom: "1px solid rgba(255,255,255,0.04)" }}
    >
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{ animation: "marquee 32s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-[9px] font-medium text-(--color-text-on-dark) tracking-[0.35em] uppercase"
            style={{ opacity: 0.65 }}
          >
            <span className="px-8">{item}</span>
            <span style={{ color: "var(--color-primary)", opacity: 0.5 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
