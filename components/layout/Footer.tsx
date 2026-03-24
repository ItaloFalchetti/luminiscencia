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

export default function Footer() {
  return (
    <footer className="bg-(--color-dark) text-(--color-text-on-dark)">
      <Container>
        <div className="py-14 grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Marca */}
          <div className="flex flex-col gap-4">
            <Image
              src="/logo.png"
              alt="Centro Terapéutico Luminiscencia"
              width={72}
              height={72}
              style={{ clipPath: "circle(49% at 50% 50%)" }}
            />
            <p className="text-sm text-(--color-muted) leading-relaxed max-w-xs">
              Acompañamiento terapéutico profesional para tu bienestar.
            </p>
          </div>

          {/* Páginas */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-(--color-text-on-dark) mb-5">
              Páginas
            </h3>
            <nav className="flex flex-col gap-3" aria-label="Navegación del pie de página">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-(--color-muted) hover:text-(--color-text-on-dark) transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xs font-medium uppercase tracking-widest text-(--color-text-on-dark) mb-5">
              Contacto
            </h3>
            <div className="flex flex-col gap-3 text-sm text-(--color-muted)">
              <span>General Ordoñez 155, Of. 905</span>
              <span className="text-xs">Maipú · Metro Plaza Maipú</span>
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

        <div className="border-t border-white/10 py-6 text-center text-xs text-(--color-muted)">
          © 2026 Centro Terapéutico Luminiscencia. Todos los derechos reservados.
        </div>
      </Container>
    </footer>
  );
}
