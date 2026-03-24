import Image from "next/image";
import Container from "@/components/ui/Container";

const team = [
  {
    name: "Tiare Dote",
    title: "Psicóloga",
    university: "Universidad Academia de Humanismo Cristiano",
    image: "/images/tiare.jpg",
    alt: "Tiare Dote, psicóloga del Centro Terapéutico Luminiscencia",
    bio: "Psicóloga con foco en bienestar subjetivo, intervención con niñas, niños y adolescentes, y atención a personas de la comunidad LGBTIQANB+.",
  },
  {
    name: "Mónica Soto",
    title: "Psicóloga",
    university: "Universidad Santo Tomás",
    image: "/images/monica.jpeg",
    alt: "Mónica Soto, psicóloga del Centro Terapéutico Luminiscencia",
    bio: "Especialista en psicoterapia de juego, terapia sistémica y evaluación del Trastorno del Espectro Autista (ADOS-2). Amplia formación en trauma relacional complejo.",
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-(--color-surface)">
      <Container>
        <div className="flex flex-col gap-14">

          {/* Encabezado */}
          <div className="flex flex-col gap-4 max-w-xl">
            <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
              Nuestro equipo
            </span>
            <h2 className="text-4xl md:text-5xl font-normal">
              Quiénes te acompañan
            </h2>
            <p className="text-(--color-muted) leading-relaxed">
              Psicólogas con formación y experiencia, dedicadas a construir contigo
              un proceso terapéutico significativo y efectivo.
            </p>
          </div>

          {/* Tarjetas del equipo */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {team.map((member) => (
              <div
                key={member.name}
                className="flex flex-col gap-6 p-8 bg-(--color-bg) rounded-sm border border-(--color-border)"
              >
                {/* Foto */}
                <div className="relative w-28 h-28 rounded-full overflow-hidden ring-2 ring-(--color-border)">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover object-center"
                  />
                </div>

                {/* Info */}
                <div className="flex flex-col gap-1">
                  <h3 className="text-xl font-normal">{member.name}</h3>
                  <span className="text-(--color-primary) text-sm font-medium tracking-wide">
                    {member.title}
                  </span>
                  <span className="text-(--color-muted) text-xs">{member.university}</span>
                </div>

                {/* Bio */}
                <p className="text-(--color-muted) text-sm leading-relaxed">{member.bio}</p>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
