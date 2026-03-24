import Image from "next/image";
import Container from "@/components/ui/Container";

const TUU_URL = "https://tuu.cl/agenda-centro-terapeutico-luminiscencia";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-(--color-bg) flex items-center pt-20 overflow-hidden relative">

      {/* Dot-grid texture — right panel */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none select-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, rgba(184,150,80,0.13) 1.2px, transparent 1.2px)",
          backgroundSize: "26px 26px",
        }}
        aria-hidden="true"
      />
      {/* Fade the dot grid out toward center */}
      <div
        className="absolute right-0 top-0 bottom-0 w-[55%] pointer-events-none"
        style={{
          background:
            "linear-gradient(to right, var(--color-bg) 0%, transparent 35%, transparent 100%)",
        }}
        aria-hidden="true"
      />

      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-12 xl:gap-24 items-center min-h-[calc(100vh-80px)] py-16">

          {/* ── Text column ── */}
          <div className="flex flex-col gap-8">

            {/* Eyebrow */}
            <div
              className="flex items-center gap-4 animate-fade-in"
              style={{ animationDelay: "0ms" }}
            >
              <div className="w-8 h-px bg-(--color-primary)" />
              <span className="text-(--color-primary) text-[10px] font-medium tracking-[0.45em] uppercase">
                Centro Terapéutico · Maipú
              </span>
            </div>

            {/* Headline */}
            <h1
              className="font-normal leading-[0.88] tracking-tight text-(--color-dark) animate-slide-up"
              style={{
                fontSize: "clamp(3.2rem, 5.5vw, 5.2rem)",
                animationDelay: "100ms",
              }}
            >
              Psicología<br />
              <em
                style={{
                  fontStyle: "italic",
                  color: "var(--color-primary)",
                }}
              >
                profesional,
              </em>
              <br />
              cuidado<br />
              real.
            </h1>

            {/* Decorative rule */}
            <div
              className="flex items-center gap-3 animate-fade-in"
              style={{ animationDelay: "200ms" }}
            >
              <div className="h-px w-12 bg-(--color-primary)" />
              <div
                className="w-1.5 h-1.5 rounded-full bg-(--color-primary)"
                style={{ opacity: 0.55 }}
              />
            </div>

            {/* Lead copy */}
            <p
              className="text-(--color-muted) text-lg leading-relaxed max-w-sm animate-slide-up"
              style={{ animationDelay: "250ms" }}
            >
              Atención psicológica para niños, adolescentes y adultos en un
              espacio seguro, cálido y confidencial.
            </p>

            {/* CTAs */}
            <div
              className="flex flex-col sm:flex-row items-start sm:items-center gap-5 animate-slide-up"
              style={{ animationDelay: "360ms" }}
            >
              <a
                href={TUU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 bg-(--color-dark) text-white text-xs font-medium tracking-[0.2em] uppercase hover:bg-(--color-primary) transition-colors duration-300 group"
              >
                Agendar hora
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 14 14"
                  fill="none"
                  aria-hidden="true"
                  className="group-hover:translate-x-1 transition-transform duration-300"
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
                href="#especialidades"
                className="text-sm text-(--color-text) font-medium flex items-center gap-2 group"
              >
                <span className="border-b border-(--color-border) pb-px group-hover:border-(--color-primary) group-hover:text-(--color-primary) transition-colors duration-200">
                  Ver especialidades
                </span>
                <span className="text-(--color-primary) group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>
            </div>

            {/* Stats */}
            <div
              className="grid grid-cols-3 pt-8 border-t border-(--color-border) animate-fade-in"
              style={{ animationDelay: "460ms" }}
            >
              {[
                { value: "60'", label: "por sesión" },
                { value: "9", label: "especialidades" },
                { value: "2", label: "psicólogas" },
              ].map((stat, i) => (
                <div
                  key={stat.label}
                  className={[
                    "flex flex-col gap-1.5",
                    i > 0 ? "border-l border-(--color-border) pl-6" : "pr-6",
                  ].join(" ")}
                >
                  <span
                    className="font-normal text-(--color-dark) leading-none"
                    style={{
                      fontFamily: "var(--font-heading), Georgia, serif",
                      fontSize: "clamp(1.75rem, 3vw, 2.5rem)",
                    }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-[10px] text-(--color-muted) uppercase tracking-[0.2em]">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* ── Image column ── */}
          <div
            className="relative lg:pl-8 animate-slide-right"
            style={{ animationDelay: "200ms" }}
          >
            {/* Decorative circles */}
            <div
              className="absolute -top-16 -right-16 w-80 h-80 rounded-full pointer-events-none"
              style={{ border: "1px solid var(--color-border)", opacity: 0.5 }}
              aria-hidden="true"
            />
            <div
              className="absolute -top-8 -right-8 w-56 h-56 rounded-full pointer-events-none"
              style={{ border: "1px solid var(--color-primary)", opacity: 0.14 }}
              aria-hidden="true"
            />

            {/* Offset shadow block */}
            <div
              className="absolute inset-0 bg-(--color-primary) pointer-events-none"
              style={{ transform: "translate(10px, 10px)", opacity: 0.14 }}
              aria-hidden="true"
            />

            <div
              className="relative aspect-[3/4] overflow-hidden"
              style={{ boxShadow: "0 32px 80px -20px rgba(26,26,24,0.22)" }}
            >
              <Image
                src="/images/hero-office.webp"
                alt="Sala de atención — Centro Terapéutico Luminiscencia"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Subtle bottom vignette */}
              <div
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(to bottom, transparent 55%, rgba(26,26,24,0.28) 100%)",
                }}
                aria-hidden="true"
              />
              {/* Badge */}
              <div
                className="absolute bottom-6 left-6 right-6 flex items-center gap-4 bg-white/90 backdrop-blur-md px-5 py-3.5"
                style={{ borderLeft: "3px solid var(--color-primary)" }}
              >
                <span className="text-xs font-medium text-(--color-dark) leading-tight tracking-wide">
                  Presencial · Online · 60 minutos
                </span>
              </div>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
