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
    <section className="py-28 bg-(--color-bg)">
      <Container>
        <div className="flex flex-col gap-16">

          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div className="flex flex-col gap-4">
              <div className="flex items-center gap-4">
                <div className="w-8 h-px bg-(--color-primary)" />
                <span className="text-[10px] text-(--color-primary) tracking-[0.45em] uppercase font-medium">
                  Equipo
                </span>
              </div>
              <h2
                className="font-normal leading-none tracking-tight text-(--color-dark)"
                style={{ fontSize: "clamp(2.8rem, 4.5vw, 3.8rem)" }}
              >
                Quiénes te{" "}
                <em style={{ fontStyle: "italic" }}>acompañan</em>
              </h2>
            </div>
            <p className="text-(--color-muted) text-sm leading-relaxed max-w-xs">
              Psicólogas con formación especializada, dedicadas a tu proceso
              terapéutico.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {team.map((member) => (
              <div
                key={member.name}
                className="group flex flex-col overflow-hidden bg-(--color-surface)"
                style={{ boxShadow: "0 2px 20px -6px rgba(26,26,24,0.10)" }}
              >
                {/* Photo */}
                <div
                  className="relative overflow-hidden"
                  style={{ aspectRatio: "4/3" }}
                >
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover object-top group-hover:scale-[1.03] transition-transform duration-700"
                  />
                  {/* Subtle overlay */}
                  <div
                    className="absolute inset-0 pointer-events-none"
                    style={{
                      background:
                        "linear-gradient(to bottom, transparent 60%, rgba(26,26,24,0.15) 100%)",
                    }}
                    aria-hidden="true"
                  />
                </div>

                {/* Gold accent line */}
                <div className="h-[2px] bg-(--color-primary)" />

                {/* Info */}
                <div className="flex flex-col gap-6 p-8 lg:p-10">
                  <div className="flex flex-col gap-1">
                    <h3
                      className="font-normal text-(--color-dark)"
                      style={{
                        fontFamily: "var(--font-heading), Georgia, serif",
                        fontSize: "1.7rem",
                      }}
                    >
                      {member.name}
                    </h3>
                    <span className="text-[10px] text-(--color-primary) font-medium tracking-[0.3em] uppercase mt-0.5">
                      {member.title}
                    </span>
                    <span className="text-(--color-muted) text-xs mt-1">
                      {member.university}
                    </span>
                  </div>

                  <p className="text-(--color-muted) text-sm leading-relaxed">
                    {member.bio}
                  </p>

                  <div className="flex flex-wrap gap-2">
                    {member.specialties.map((tag) => (
                      <span
                        key={tag}
                        className="text-[10px] px-3 py-1.5 text-(--color-muted) tracking-widest uppercase"
                        style={{ border: "1px solid var(--color-border)" }}
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
