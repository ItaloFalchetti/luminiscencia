import type { Metadata } from "next";
import Container from "@/components/ui/Container";
import PageHero from "@/components/ui/PageHero";

export const metadata: Metadata = {
  title: "Noticias | Centro Terapéutico Luminiscencia",
  description:
    "Novedades, comunicados y artículos del Centro Terapéutico Luminiscencia.",
};

const articles = [
  {
    slug: "comunicado-a-nuestra-comunidad",
    title: "Comunicado a nuestra comunidad del Centro Terapéutico Luminiscencia",
    date: "30 de abril, 2024",
    category: "Comunicados",
  },
  {
    slug: "nuevo-sistema-de-ingreso",
    title: "Nuevo Sistema de Ingreso al Edificio del Centro Terapéutico Luminiscencia",
    date: "16 de abril, 2024",
    category: "Novedades",
  },
  {
    slug: "cambio-de-hora",
    title: "Importante recordatorio sobre el cambio de hora en Chile",
    date: "5 de abril, 2024",
    category: "Avisos",
  },
  {
    slug: "resolvemos-dudas-whatsapp",
    title: "Resolvemos dudas por WhatsApp",
    date: "28 de junio, 2023",
    category: "Novedades",
  },
  {
    slug: "estamos-atendiendo",
    title: "Estamos atendiendo",
    date: "27 de junio, 2023",
    category: "Novedades",
  },
  {
    slug: "precios-accesibles",
    title: "Precios Accesibles y Valores de Compromiso en el Centro Terapéutico Luminiscencia",
    date: "27 de junio, 2023",
    category: "Información",
  },
  {
    slug: "alianza-con-proagenda",
    title: "Alianza con Proagenda",
    date: "27 de junio, 2023",
    category: "Novedades",
  },
  {
    slug: "apertura-del-centro",
    title: "¡Apertura del Centro Luminiscencia!",
    date: "27 de junio, 2023",
    category: "Novedades",
  },
];

export default function NoticiasPage() {
  return (
    <main>
      <PageHero
        eyebrow="Noticias"
        title="Novedades del centro"
        description="Comunicados, avisos y artículos sobre salud mental y el funcionamiento del centro."
      />

      <section className="py-20 bg-(--color-bg)">
        <Container>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-(--color-border)">
            {articles.map((article, i) => (
              <article
                key={article.slug}
                className="flex flex-col gap-4 p-8 bg-(--color-bg) hover:bg-(--color-surface) transition-colors duration-200"
              >
                <div className="flex items-center justify-between gap-4">
                  <span className="text-xs font-medium text-(--color-primary) uppercase tracking-wide">
                    {article.category}
                  </span>
                  <span className="text-xs text-(--color-muted) tabular-nums">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <h2 className="text-lg font-normal leading-snug text-(--color-heading)">
                  {article.title}
                </h2>
                <p className="text-xs text-(--color-muted) mt-auto pt-2">{article.date}</p>
              </article>
            ))}
          </div>

          {/* Nota */}
          <p className="text-center text-(--color-muted) text-sm mt-12 max-w-lg mx-auto leading-relaxed">
            Los artículos completos están en proceso de migración al nuevo sitio.
            Mientras tanto, síguenos en{" "}
            <a
              href="https://instagram.com/centro_luminiscencia"
              target="_blank"
              rel="noopener noreferrer"
              className="text-(--color-primary) hover:underline"
            >
              @centro_luminiscencia
            </a>{" "}
            para estar al día.
          </p>
        </Container>
      </section>
    </main>
  );
}
