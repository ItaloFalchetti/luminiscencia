import Image from "next/image";
import Container from "@/components/ui/Container";

const TUU_URL = "https://tuu.cl/agenda-centro-terapeutico-luminiscencia";

export default function HeroSection() {
  return (
    <section className="min-h-screen bg-(--color-dark) flex items-center pt-20">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-center py-16 lg:min-h-[calc(100vh-80px)]">

          {/* Contenido */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-5">
              <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
                Centro Terapéutico · Santiago
              </span>
              <h1 className="text-5xl md:text-6xl xl:text-7xl text-(--color-text-on-dark) font-normal leading-[1.1]">
                Un espacio donde encontrarás tu luz
              </h1>
            </div>
            <p className="text-(--color-muted) text-lg leading-relaxed max-w-md">
              Atención psicológica profesional para niños, adolescentes y adultos.
              Sesiones de 60 minutos, presenciales y online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 pt-2">
              <a
                href={TUU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-(--color-primary) text-(--color-dark) font-medium tracking-wide hover:bg-(--color-primary-dark) hover:text-white transition-colors duration-200"
              >
                Agendar hora
              </a>
              <a
                href="#especialidades"
                className="inline-flex items-center justify-center px-8 py-4 rounded-sm border border-white/20 text-(--color-text-on-dark) font-medium hover:border-(--color-primary) hover:text-(--color-primary) transition-colors duration-200"
              >
                Ver especialidades
              </a>
            </div>
          </div>

          {/* Imagen */}
          <div className="relative h-[420px] lg:h-[640px] rounded-sm overflow-hidden order-last">
            <Image
              src="/images/hero-office.webp"
              alt="Sala de atención con vista al atardecer — Centro Terapéutico Luminiscencia"
              fill
              className="object-cover object-center"
              priority
            />
            <div
              className="absolute inset-0"
              style={{ background: "linear-gradient(to top, rgba(26,26,24,0.4) 0%, transparent 60%)" }}
            />
          </div>

        </div>
      </Container>
    </section>
  );
}
