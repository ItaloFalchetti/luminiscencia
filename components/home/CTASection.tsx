import Container from "@/components/ui/Container";

const TUU_URL = "https://tuu.cl/agenda-centro-terapeutico-luminiscencia";

export default function CTASection() {
  return (
    <section className="py-28 bg-(--color-dark)">
      <Container>
        <div className="flex flex-col items-center text-center gap-8 max-w-2xl mx-auto">

          <div className="flex flex-col gap-4">
            <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
              Primer paso
            </span>
            <h2 className="text-4xl md:text-5xl font-normal text-white leading-tight">
              Da el primer paso hacia<br className="hidden md:block" /> tu bienestar
            </h2>
          </div>

          <p className="text-(--color-muted) text-lg leading-relaxed max-w-md">
            El camino comienza con una decisión. Agenda tu hora hoy y comienza
            tu proceso de acompañamiento terapéutico.
          </p>

          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href={TUU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-3 px-10 py-4 rounded-full bg-(--color-primary) text-white font-medium tracking-wide hover:bg-(--color-primary-dark) transition-colors duration-200"
            >
              Agendar hora
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a
              href="/contacto"
              className="inline-flex items-center justify-center px-10 py-4 rounded-full border border-white/20 text-(--color-text-on-dark) font-medium hover:border-(--color-primary) hover:text-(--color-primary) transition-colors duration-200"
            >
              Escribirnos
            </a>
          </div>

          <p className="text-(--color-muted) text-xs">
            General Ordoñez 155, Oficina 905 · Maipú (Metro Plaza Maipú) ·{" "}
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
