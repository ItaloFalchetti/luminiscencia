import Container from "@/components/ui/Container";

const featured = {
  quote:
    "Llegué con mucha desconfianza y me fui con herramientas reales. El proceso fue más transformador de lo que imaginé. Lo recomiendo sin dudarlo a cualquiera que esté pensando en dar este paso.",
  name: "M. González",
  detail: "Terapia de adultos",
};

const testimonials = [
  {
    quote:
      "Mi hijo cambió mucho luego de empezar la terapia de juego. Ahora puede expresar lo que siente sin bloquearse. El equipo es muy cercano y profesional.",
    name: "Familia C.",
    detail: "Terapia infanto-juvenil",
  },
  {
    quote:
      "La modalidad online fue perfecta para mí. Misma profundidad, mismo compromiso, sin necesidad de desplazarme. Muy recomendado.",
    name: "A. Vega",
    detail: "Terapia online",
  },
  {
    quote:
      "El diagnóstico fue claro y honesto. Me ayudó a entender qué estaba pasando y a tomar decisiones con mucha más información.",
    name: "R. Soto",
    detail: "Psicodiagnóstico",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-28 bg-(--color-dark) relative overflow-hidden">

      {/* Giant decorative background quote */}
      <div
        aria-hidden="true"
        className="absolute -top-10 -left-4 pointer-events-none select-none"
        style={{
          fontFamily: "var(--font-heading), Georgia, serif",
          fontSize: "30rem",
          lineHeight: "1",
          color: "var(--color-primary)",
          opacity: 0.03,
        }}
      >
        &#8220;
      </div>

      <Container>

        {/* ── Header ── */}
        <div className="flex flex-col items-center gap-4 mb-16 text-center">
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-(--color-primary)" style={{ opacity: 0.5 }} />
            <span className="text-[10px] text-(--color-primary) tracking-[0.45em] uppercase font-medium">
              Testimonios
            </span>
            <div className="w-8 h-px bg-(--color-primary)" style={{ opacity: 0.5 }} />
          </div>
          <h2
            className="font-normal text-white leading-tight"
            style={{ fontSize: "clamp(2rem, 4vw, 3.2rem)" }}
          >
            Lo que dicen quienes{" "}
            <em style={{ fontStyle: "italic", color: "var(--color-primary)" }}>
              nos eligieron
            </em>
          </h2>
        </div>

        {/* ── Featured testimonial ── */}
        <div className="max-w-3xl mx-auto text-center mb-16 pb-16"
          style={{ borderBottom: "1px solid rgba(255,255,255,0.08)" }}
        >
          <span
            aria-hidden="true"
            className="block"
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontSize: "5rem",
              lineHeight: "0.7",
              color: "var(--color-primary)",
              opacity: 0.55,
              marginBottom: "1.5rem",
            }}
          >
            &#8220;
          </span>

          <p
            style={{
              fontFamily: "var(--font-heading), Georgia, serif",
              fontSize: "clamp(1.2rem, 2.5vw, 1.65rem)",
              fontStyle: "italic",
              color: "rgba(255,255,255,0.9)",
              lineHeight: "1.65",
            }}
          >
            {featured.quote}
          </p>

          <div className="flex items-center justify-center gap-3 mt-8">
            <div className="w-8 h-px bg-(--color-primary)" style={{ opacity: 0.5 }} />
            <span className="text-[10px] text-(--color-primary) tracking-[0.35em] uppercase font-medium">
              {featured.name}
            </span>
            <span className="text-(--color-muted)" style={{ fontSize: "10px" }}>·</span>
            <span className="text-xs text-(--color-muted)">{featured.detail}</span>
            <div className="w-8 h-px bg-(--color-primary)" style={{ opacity: 0.5 }} />
          </div>
        </div>

        {/* ── Secondary testimonials ── */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-0">
          {testimonials.map((t) => (
            <div
              key={t.name}
              className="flex flex-col gap-5 pl-5 md:px-8 lg:px-10 border-l-2 md:border-l border-(--color-primary) md:border-(--color-primary)/30"
            >
              <p
                style={{
                  fontFamily: "var(--font-heading), Georgia, serif",
                  fontSize: "clamp(1rem, 1.5vw, 1.1rem)",
                  fontStyle: "italic",
                  color: "rgba(255,255,255,0.72)",
                  lineHeight: "1.75",
                }}
              >
                {t.quote}
              </p>
              <div className="flex flex-col gap-0.5">
                <span className="text-[10px] text-(--color-primary) tracking-[0.3em] uppercase font-medium">
                  {t.name}
                </span>
                <span className="text-xs text-(--color-muted)">{t.detail}</span>
              </div>
            </div>
          ))}
        </div>

        {/* ── Privacy disclaimer ── */}
        <p
          className="text-center text-xs text-(--color-muted) mt-14"
          style={{ opacity: 0.45 }}
        >
          Testimonios compartidos con autorización. Nombres abreviados para resguardar la privacidad.
        </p>

      </Container>
    </section>
  );
}
