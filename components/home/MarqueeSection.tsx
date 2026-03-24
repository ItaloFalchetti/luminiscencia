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
    <div className="bg-(--color-dark) py-4 overflow-hidden select-none border-y border-white/5">
      <div
        className="flex whitespace-nowrap will-change-transform"
        style={{ animation: "marquee 28s linear infinite" }}
      >
        {doubled.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-xs font-medium text-(--color-text-on-dark) tracking-[0.18em] uppercase"
          >
            <span className="px-7">{item}</span>
            <span style={{ color: "var(--color-primary)", opacity: 0.6 }}>◆</span>
          </span>
        ))}
      </div>
    </div>
  );
}
