import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";
import ContactForm from "@/components/contact/ContactForm";

export const metadata: Metadata = {
  title: "Contacto | Centro Terapéutico Luminiscencia",
  description:
    "Contáctanos por correo, Instagram o agenda directamente tu hora en el Centro Terapéutico Luminiscencia, Maipú.",
};

const TUU_URL = "https://tuu.cl/agenda-centro-terapeutico-luminiscencia";

export default function ContactoPage() {
  return (
    <main>
      <PageHero
        eyebrow="Contacto"
        title="Estamos para escucharte"
        description="Escríbenos con cualquier consulta. Te responderemos a la brevedad."
      />

      <section className="py-20 bg-(--color-bg)">
        <Container>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24">

            {/* Formulario */}
            <div className="flex flex-col gap-8">
              <div className="flex flex-col gap-2">
                <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
                  Formulario
                </span>
                <h2 className="text-3xl font-normal">Envíanos un mensaje</h2>
              </div>
              <ContactForm />
            </div>

            {/* Información */}
            <div className="flex flex-col gap-10">
              <div className="flex flex-col gap-2">
                <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
                  Información
                </span>
                <h2 className="text-3xl font-normal">¿Cómo llegar?</h2>
              </div>

              <div className="flex flex-col gap-8">
                {/* Dirección */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-medium uppercase tracking-widest text-(--color-muted)">Dirección</h3>
                  <p className="text-(--color-text) leading-relaxed">
                    General Ordoñez 155, Oficina 905
                  </p>
                  <p className="text-(--color-muted) text-sm">Maipú · Metro Plaza Maipú</p>
                </div>

                {/* Instagram */}
                <div className="flex flex-col gap-2">
                  <h3 className="text-xs font-medium uppercase tracking-widest text-(--color-muted)">Instagram</h3>
                  <a
                    href="https://instagram.com/centro_luminiscencia"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-(--color-text) hover:text-(--color-primary) transition-colors"
                  >
                    @centro_luminiscencia
                  </a>
                </div>

                {/* Agendar */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-xs font-medium uppercase tracking-widest text-(--color-muted)">Agendamiento online</h3>
                  <p className="text-(--color-muted) text-sm leading-relaxed">
                    Para agendar tu hora directamente, usa nuestra plataforma de reservas. Las sesiones se pagan previamente a través de la plataforma.
                  </p>
                  <a
                    href={TUU_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center w-fit px-6 py-3 rounded-sm bg-(--color-primary) text-(--color-dark) text-sm font-medium tracking-wide hover:bg-(--color-primary-dark) hover:text-white transition-colors duration-200"
                  >
                    Agendar hora
                  </a>
                </div>

                {/* Políticas de cancelación */}
                <div className="flex flex-col gap-3 pt-4 border-t border-(--color-border)">
                  <h3 className="text-xs font-medium uppercase tracking-widest text-(--color-muted)">Cancelaciones</h3>
                  <ul className="flex flex-col gap-2">
                    {[
                      "Cancelaciones con 24 horas de anticipación: reembolso del 90%.",
                      "Emitimos boleta por cada sesión para gestionar reembolso con isapre o seguro.",
                      "Reagendamientos deben realizarse con al menos 24 horas de anticipación.",
                    ].map((item) => (
                      <li key={item} className="flex items-start gap-2 text-sm text-(--color-muted) leading-relaxed">
                        <span className="text-(--color-primary) shrink-0">✓</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </Container>
      </section>
    </main>
  );
}
