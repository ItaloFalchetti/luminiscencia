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
    specialties: ["Infanto-juvenil", "LGBTIQANB+", "Bienestar subjetivo"],
  },
  {
    name: "Mónica Soto",
    title: "Psicóloga",
    university: "Universidad Santo Tomás",
    image: "/images/monica.jpeg",
    alt: "Mónica Soto, psicóloga del Centro Terapéutico Luminiscencia",
    bio: "Especialista en psicoterapia de juego, terapia sistémica y evaluación del Trastorno del Espectro Autista (ADOS-2). Amplia formación en trauma relacional.",
    specialties: ["Psicoterapia de juego", "TEA · ADOS-2", "Trauma relacional"],
  },
];

export default function TeamSection() {
  return (
    <section className="py-24 bg-(--color-bg)">
      <Container>
        <div className="flex flex-col gap-14">

          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col gap-3">
              <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
                Equipo
              </span>
              <h2 className="text-4xl md:text-5xl font-normal">
                Quiénes te<br className="hidden md:block" /> acompañan
              </h2>
            </div>
            <p className="text-(--color-muted) text-sm leading-relaxed max-w-xs">
              Psicólogas con formación especializada, dedicadas a tu proceso terapéutico.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col overflow-hidden rounded-2xl bg-(--color-surface) ring-1 ring-(--color-border)"
              >
                {/* Foto */}
                <div className="relative overflow-hidden" style={{ aspectRatio: "4/3" }}>
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  />
                </div>

                {/* Línea salvia */}
                <div className="h-[3px] bg-(--color-primary)" />

                {/* Info */}
                <div className="flex flex-col gap-5 p-8">
                  <div className="flex flex-col gap-1">
                    <h3 className="text-2xl font-normal">{member.name}</h3>
                    <span className="text-(--color-primary) text-sm font-medium tracking-wide">
                      {member.title}
                    </span>
                    <span className="text-(--color-muted) text-xs">{member.university}</span>
                  </div>

                  <p className="text-(--color-muted) text-sm leading-relaxed">{member.bio}</p>

                  <div className="flex flex-wrap gap-2 pt-1">
                    {member.specialties.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs px-3 py-1 rounded-full border border-(--color-border) text-(--color-muted) tracking-wide bg-(--color-bg)"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </Container>
    </section>
  );
}
