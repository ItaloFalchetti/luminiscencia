import Image from "next/image";
import Container from "@/components/ui/Container";

const spaces = [
  {
    src: "/images/waiting-room.webp",
    alt: "Sala de espera con sillas amarillas",
    label: "Sala de espera",
  },
  {
    src: "/images/playroom.jpeg",
    alt: "Sala de psicoterapia de juego",
    label: "Sala infanto-juvenil",
  },
  {
    src: "/images/toys.jpeg",
    alt: "Estantería de juguetes para psicoterapia de juego",
    label: "Espacio de juego",
  },
];

export default function SpacesSection() {
  return (
    <section className="py-24 bg-(--color-dark)">
      <Container>
        <div className="flex flex-col gap-12">

          {/* Encabezado */}
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
              Nuestro espacio
            </span>
            <h2 className="text-4xl md:text-5xl font-normal text-(--color-text-on-dark)">
              Un lugar pensado para ti
            </h2>
            <p className="text-(--color-muted) leading-relaxed">
              Cada detalle de nuestras salas fue diseñado para generar un ambiente
              de confianza, calma y privacidad.
            </p>
          </div>

          {/* Galería */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {spaces.map((space) => (
              <div key={space.label} className="flex flex-col gap-3">
                <div className="relative aspect-[4/3] rounded-sm overflow-hidden">
                  <Image
                    src={space.src}
                    alt={space.alt}
                    fill
                    className="object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <p className="text-(--color-muted) text-sm tracking-wide">{space.label}</p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
