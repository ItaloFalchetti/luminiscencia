import Container from "@/components/ui/Container";

const TUU_URL = "https://tuu.cl/agenda-centro-terapeutico-luminiscencia";
const MAPS_URL = "https://maps.google.com/?q=General+Ordo%C3%B1ez+155,+Maip%C3%BA,+Santiago,+Chile";

export default function CTASection() {
  return (
    <section className="py-32 bg-(--color-dark) relative overflow-hidden">

      {/* Decorative concentric rings — centered */}
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(184,150,80,0.06)" }}
        aria-hidden="true"
      />
      <div
        className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(184,150,80,0.08)" }}
        aria-hidden="true"
      />

      <Container>
        <div className="flex flex-col items-center text-center gap-10 max-w-2xl mx-auto relative">

          {/* Ornament */}
          <div className="flex items-center gap-4">
            <div className="w-12 h-px bg-(--color-primary)" style={{ opacity: 0.4 }} />
            <span className="text-[10px] text-(--color-primary) tracking-[0.45em] uppercase font-medium">
              Primer paso
            </span>
            <div className="w-12 h-px bg-(--color-primary)" style={{ opacity: 0.4 }} />
          </div>

          {/* Headline */}
          <h2
            className="font-normal text-white leading-[0.9] tracking-tight"
            style={{ fontSize: "clamp(2.8rem, 5.5vw, 4.5rem)" }}
          >
            <span style={{ color: "#FFFFE6" }}>Da el primer<br />
            paso hacia</span><br />
            <em
              style={{
                fontStyle: "italic",
                color: "var(--color-primary)",
              }}
            >
              tu bienestar
            </em>
          </h2>

          {/* Copy */}
          <p className="text-(--color-muted) text-lg leading-relaxed max-w-md">
            El camino comienza con una decisión. Agenda tu hora hoy y comienza
            tu proceso de acompañamiento terapéutico.
          </p>

          {/* CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={TUU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 bg-(--color-primary) text-(--color-dark) text-xs font-medium tracking-[0.2em] uppercase hover:bg-(--color-primary-dark) hover:text-white transition-colors duration-200 group"
            >
              Agendar hora
              <svg
                width="13"
                height="13"
                viewBox="0 0 14 14"
                fill="none"
                aria-hidden="true"
                className="group-hover:translate-x-1 transition-transform duration-200"
              >
                <path
                  d="M1 7h12M8 2l5 5-5 5"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-10 py-4 border border-white/20 text-(--color-text-on-dark) text-xs font-medium tracking-[0.2em] uppercase hover:border-(--color-primary) hover:text-(--color-primary) transition-colors duration-200"
            >
              Escribirnos
            </a>
          </div>

          {/* Footnote */}
          <p className="text-(--color-muted) text-xs tracking-wide">
            <a
              href={MAPS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--color-primary) transition-colors"
            >
              General Ordoñez 155, Oficina 905 · Maipú (Metro Plaza Maipú)
            </a>
            {" · "}
            <a
              href="https://instagram.com/centro_luminiscencia"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-(--color-primary) transition-colors"
            >
              @centro_luminiscencia
            </a>
          </p>

        </div>
      </Container>
    </section>
  );
}
