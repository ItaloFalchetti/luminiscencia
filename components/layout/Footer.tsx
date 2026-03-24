import Image from "next/image";
import Link from "next/link";
import Container from "@/components/ui/Container";

const navLinks = [
  { href: "/", label: "Inicio" },
  { href: "/nosotros", label: "Equipo" },
  { href: "/servicios", label: "Especialidades" },
  { href: "/noticias", label: "Noticias" },
  { href: "/contacto", label: "Contacto" },
];

const TUU_URL = "https://tuu.cl/agenda-centro-terapeutico-luminiscencia";
const MAPS_URL = "https://maps.google.com/?q=General+Ordo%C3%B1ez+155,+Maip%C3%BA,+Santiago,+Chile";

export default function Footer() {
  return (
    <footer className="bg-(--color-dark) text-(--color-text-on-dark)">
      <Container>
        <div className="py-16 grid grid-cols-1 md:grid-cols-3 gap-12">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <Image
              src="/logo.png"
              alt="Centro Terapéutico Luminiscencia"
              width={64}
              height={64}
              style={{ clipPath: "circle(49% at 50% 50%)" }}
            />
            <p className="text-xs text-(--color-muted) leading-relaxed max-w-xs">
              Acompañamiento terapéutico profesional para tu bienestar en
              Maipú, Santiago.
            </p>
          </div>

          {/* Pages */}
          <div>
            <h3 className="text-[9px] font-medium uppercase tracking-[0.35em] text-(--color-text-on-dark) mb-6"
              style={{ opacity: 0.6 }}
            >
              Páginas
            </h3>
            <nav className="flex flex-col gap-3.5" aria-label="Navegación del pie de página">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-xs text-(--color-muted) hover:text-(--color-text-on-dark) tracking-wide transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3
              className="text-[9px] font-medium uppercase tracking-[0.35em] text-(--color-text-on-dark) mb-6"
              style={{ opacity: 0.6 }}
            >
              Contacto
            </h3>
            <div className="flex flex-col gap-3.5 text-xs text-(--color-muted)">
              <a
                href={MAPS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex flex-col gap-1 hover:text-(--color-text-on-dark) transition-colors"
              >
                <span>General Ordoñez 155, Of. 905</span>
                <span>Maipú · Metro Plaza Maipú</span>
              </a>
              <Link
                href="/contacto"
                className="hover:text-(--color-text-on-dark) transition-colors"
              >
                Escribirnos
              </Link>
              <a
                href={TUU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-(--color-text-on-dark) transition-colors"
              >
                Agendar hora online
              </a>
            </div>
          </div>
        </div>

        <div
          className="py-6 text-center text-[10px] text-(--color-muted) tracking-wide"
          style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
        >
          © 2026 Centro Terapéutico Luminiscencia. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
