import Image from "next/image";
import Container from "@/components/ui/Container";

const TUU_URL = "https://tuu.cl/agenda-centro-terapeutico-luminiscencia";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-(--color-bg) flex items-center pt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-[55%_1fr] gap-12 xl:gap-20 items-center min-h-[calc(100vh-80px)] py-16">

          {/* Texto */}
          <div className="flex flex-col gap-8">
            <span className="text-(--color-primary) text-xs font-medium tracking-[0.3em] uppercase">
              Centro Terapéutico · Maipú
            </span>

            <h1
              className="font-normal leading-[0.88] tracking-tight text-(--color-dark)"
              style={{ fontSize: "clamp(3.2rem, 5.5vw, 5rem)" }}
            >
              Psicología<br />
              profesional,<br />
              cuidado<br />
              real.
            </h1>

            <div className="w-14 h-0.5 bg-(--color-primary)" />

            <p className="text-(--color-muted) text-lg leading-relaxed max-w-sm">
              Atención psicológica para niños, adolescentes y adultos en un
              espacio seguro, cálido y confidencial.
            </p>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5">
              <a
                href={TUU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-(--color-dark) text-white text-sm font-medium tracking-wide hover:bg-(--color-primary) transition-colors duration-300"
              >
                Agendar hora
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </a>
              <a
                href="#especialidades"
                className="text-sm text-(--color-text) font-medium underline-offset-4 hover:underline hover:text-(--color-primary) transition-colors"
              >
                Ver especialidades
              </a>
            </div>

            {/* Métricas */}
            <div className="flex gap-8 pt-6 border-t border-(--color-border)">
              {[
                { value: "60'", label: "por sesión" },
                { value: "9", label: "especialidades" },
                { value: "2", label: "psicólogas" },
              ].map((stat) => (
                <div key={stat.label} className="flex flex-col gap-0.5">
                  <span
                    className="text-[1.75rem] font-normal text-(--color-dark) leading-none"
                    style={{ fontFamily: "var(--font-heading), Georgia, serif" }}
                  >
                    {stat.value}
                  </span>
                  <span className="text-xs text-(--color-muted) uppercase tracking-widest">
                    {stat.label}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Imagen */}
          <div className="relative lg:pl-6">
            {/* Sombra decorativa desplazada */}
            <div className="absolute inset-0 rounded-2xl bg-(--color-surface)" style={{ transform: "translate(14px, 14px)" }} />
            <div
              className="relative aspect-[3/4] rounded-2xl overflow-hidden"
              style={{ boxShadow: "0 24px 60px -12px rgba(27,45,35,0.18)" }}
            >
              <Image
                src="/images/hero-office.webp"
                alt="Sala de atención — Centro Terapéutico Luminiscencia"
                fill
                className="object-cover object-center"
                priority
              />
              {/* Badge flotante */}
              <div className="absolute bottom-6 left-6 right-6 flex items-center gap-3 bg-white/90 backdrop-blur-sm rounded-xl px-4 py-3">
                <div className="w-2.5 h-2.5 rounded-full bg-(--color-primary) shrink-0" />
                <span className="text-xs font-medium text-(--color-dark) leading-tight">
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
