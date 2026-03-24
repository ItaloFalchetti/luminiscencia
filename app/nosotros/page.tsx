import type { Metadata } from "next";
import Image from "next/image";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Nuestro Equipo | Centro Terapéutico Luminiscencia",
  description:
    "Conoce a Tiare Dote y Mónica Soto, psicólogas del Centro Terapéutico Luminiscencia. Formación clínica, especialidades y enfoque terapéutico.",
};

const TUU_URL = "https://tuu.cl/agenda-centro-terapeutico-luminiscencia";

const team = [
  {
    name: "Tiare Dote",
    title: "Psicóloga",
    university: "Universidad Academia de Humanismo Cristiano",
    image: "/images/tiare.jpg",
    alt: "Tiare Dote, psicóloga del Centro Terapéutico Luminiscencia",
    bio: "Psicóloga con foco en bienestar subjetivo, intervención con niñas, niños y adolescentes, y atención a la comunidad LGBTIQANB+. Trabaja desde un enfoque de curso de vida y metodologías participativas, brindando un acompañamiento cercano y contextualizado a las necesidades de cada persona.",
    formation: [
      "Psicóloga — Universidad Academia de Humanismo Cristiano",
      "Diplomado de Formación-Acción: Perspectivas y Prácticas del Enfoque de Bienestar Subjetivo — Universidad Adolfo Ibáñez",
      "Técnicas de Gestión de Metodologías de Intervención Participativas en NNA con Experiencias de Vulneración — Universidad de las Américas",
      "Técnicas de Gestión del Enfoque de Curso de Vida en Intervención en Maltrato y Abuso Sexual — Universidad de las Américas",
      "Técnicas de Gestión de Buenas Prácticas de Probidad y Transparencia — Universidad de las Américas",
      "Estrategias Clínicas para trabajar con la Comunidad LGBTIQANB+ — ADIPA",
    ],
  },
  {
    name: "Mónica Soto",
    title: "Psicóloga",
    university: "Universidad Santo Tomás",
    image: "/images/monica.jpeg",
    alt: "Mónica Soto, psicóloga del Centro Terapéutico Luminiscencia",
    bio: "Psicóloga especializada en psicoterapia de juego, terapia sistémica relacional y evaluación del Trastorno del Espectro Autista mediante la escala ADOS-2. Con amplia formación en trauma relacional complejo y técnicas narrativas, acompaña procesos terapéuticos de niñas, niños, adolescentes y adultos.",
    formation: [
      "Psicóloga — Universidad Santo Tomás",
      "Diplomado en Psicoterapia de Juego \"El Arte de Crear(nos) Jugando\" — Centro Metáfora",
      "Diplomado en Aplicaciones de Terapia Breve: Aportes desde Latinoamérica — Centro de Estudios Sistémicos",
      "Certificación clínica en infancia: Herramientas terapéuticas — Academia Digital de Psicología y Aprendizaje",
      "Clínica del Trauma — Fundación América por la Infancia",
      "Curso práctico en psicoterapia sistémica — Universidad de Chile",
      "Diplomado en evaluación e intervención en el Trastorno del Espectro Autista — Consultorio Médico Neurociencia Cognitiva y Clínica",
      "Formación en ADOS-2, escala de observación para el diagnóstico del autismo",
      "Diplomado en abordaje del trauma relacional complejo — Equilibrium Consultora y Centro Psicológico",
      "Diplomado en técnicas narrativas — Equilibrium Consultora y Centro Psicológico",
    ],
  },
];

export default function NosotrosPage() {
  return (
    <main>
      <PageHero
        eyebrow="Nuestro equipo"
        title="Las profesionales que te acompañan"
        description="Psicólogas con sólida formación clínica y vocación de servicio, comprometidas con el bienestar de cada persona que atienden."
      />

      {/* Perfiles */}
      {team.map((member, i) => (
        <section
          key={member.name}
          className={`py-20 ${i % 2 === 0 ? "bg-(--color-bg)" : "bg-(--color-surface)"}`}
        >
          <Container>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">
              {/* Foto */}
              <div className={i % 2 === 1 ? "lg:order-2" : ""}>
                <div className="relative aspect-[4/5] rounded-sm overflow-hidden max-w-sm w-full">
                  <Image
                    src={member.image}
                    alt={member.alt}
                    fill
                    className="object-cover object-center"
                  />
                </div>
              </div>

              {/* Contenido */}
              <div className={`flex flex-col gap-8 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <div className="flex flex-col gap-2">
                  <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
                    {member.title}
                  </span>
                  <h2 className="text-4xl md:text-5xl font-normal">{member.name}</h2>
                  <span className="text-(--color-muted) text-sm">{member.university}</span>
                </div>

                <p className="text-(--color-text) leading-relaxed">{member.bio}</p>

                <div className="flex flex-col gap-4">
                  <h3 className="text-xs font-medium uppercase tracking-[0.15em] text-(--color-muted)">
                    Formación clínica
                  </h3>
                  <ul className="flex flex-col gap-3">
                    {member.formation.map((item) => (
                      <li
                        key={item}
                        className="flex items-start gap-3 text-sm text-(--color-muted) leading-relaxed"
                      >
                        <span className="text-(--color-primary) shrink-0 mt-0.5 select-none">–</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={TUU_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center w-fit px-6 py-3 rounded-sm bg-(--color-primary) text-(--color-dark) text-sm font-medium tracking-wide hover:bg-(--color-primary-dark) hover:text-white transition-colors duration-200"
                >
                  Agendar con {member.name.split(" ")[0]}
                </a>
              </div>
            </div>
          </Container>
        </section>
      ))}

      {/* Ubicación */}
      <section className="py-16 bg-(--color-dark)">
        <Container>
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
            <div className="flex flex-col gap-2">
              <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
                Encuéntranos
              </span>
              <p className="text-(--color-text-on-dark) text-lg font-normal">
                General Ordoñez 155, Oficina 905
              </p>
              <p className="text-(--color-muted)">Maipú · Metro Plaza Maipú</p>
            </div>
            <a
              href={TUU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-8 py-4 rounded-sm bg-(--color-primary) text-(--color-dark) font-medium tracking-wide hover:bg-(--color-primary-dark) hover:text-white transition-colors duration-200"
            >
              Agendar hora
            </a>
          </div>
        </Container>
      </section>
    </main>
  );
}
