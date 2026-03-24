import Image from "next/image";
import Container from "@/components/ui/Container";

export default function SpacesSection() {
  return (
    <section className="py-24 bg-(--color-dark)">
      <Container>
        <div className="flex flex-col gap-10">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
                Nuestro espacio
              </span>
              <h2 className="text-4xl md:text-5xl font-normal text-white">
                Un lugar pensado<br className="hidden md:block" /> para ti
              </h2>
            </div>
            <p className="text-(--color-muted) text-sm leading-relaxed max-w-xs">
              Ambiente de confianza, calma y privacidad. Pensado para que puedas ser tú mismo.
            </p>
          </div>

          {/* Imagen principal — cinematic */}
          <div className="relative rounded-2xl overflow-hidden" style={{ aspectRatio: "16/7" }}>
            <Image
              src="/images/waiting-room.webp"
              alt="Sala de espera del Centro Terapéutico Luminiscencia"
              fill
              className="object-cover object-center"
            />
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(to right, rgba(26,26,24,0.75) 0%, rgba(26,26,24,0.15) 55%, transparent 80%)",
              }}
            />
            <div className="absolute inset-0 flex flex-col justify-end p-8 md:p-12">
              <p className="text-(--color-primary) text-xs tracking-[0.25em] uppercase mb-2">
                Sala de espera
              </p>
              <p className="text-white text-2xl md:text-3xl font-normal max-w-xs leading-snug">
                Amplia, acogedora y confidencial
              </p>
            </div>
          </div>

          {/* Galería 2-up */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              {
                src: "/images/playroom.jpeg",
                alt: "Sala de psicoterapia infanto-juvenil",
                label: "Sala infanto-juvenil",
                desc: "Diseñada para niños y adolescentes",
              },
              {
                src: "/images/toys.jpeg",
                alt: "Espacio de juguetes para psicoterapia de juego",
                label: "Espacio de juego",
                desc: "Psicoterapia a través del juego",
              },
            ].map((space) => (
              <div
                key={space.label}
                className="group relative rounded-2xl overflow-hidden"
                style={{ aspectRatio: "4/3" }}
              >
                <Image
                  src={space.src}
                  alt={space.alt}
                  fill
                  className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700"
                />
                <div
                  className="absolute inset-0"
                  style={{
                    background:
                      "linear-gradient(to top, rgba(26,26,24,0.8) 0%, transparent 55%)",
                  }}
                />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <p className="text-white font-medium text-base">{space.label}</p>
                  <p className="text-(--color-text-on-dark) text-xs mt-0.5 opacity-75">
                    {space.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
