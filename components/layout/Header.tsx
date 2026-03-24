"use client";

import { useState, useEffect } from "react";
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

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-(--color-bg)/95 backdrop-blur-sm border-b border-(--color-border) shadow-sm"
          : "bg-(--color-bg)/95"
      }`}
    >
      <Container>
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" aria-label="Inicio">
            <Image
              src="/logo.png"
              alt="Centro Terapéutico Luminiscencia"
              width={60}
              height={60}
              priority
              style={{ clipPath: "circle(49% at 50% 50%)" }}
            />
          </Link>

          {/* Navegación desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-sm font-medium text-(--color-text) hover:text-(--color-primary) transition-colors duration-200"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA desktop */}
          <div className="hidden md:flex">
            <a
              href={TUU_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-6 py-2.5 rounded-full bg-(--color-primary) text-(--color-dark) text-sm font-medium tracking-wide hover:bg-(--color-primary-dark) hover:text-white transition-colors duration-200"
            >
              Agendar hora
            </a>
          </div>

          {/* Botón menú móvil */}
          <button
            className="md:hidden p-2 text-(--color-text) hover:text-(--color-primary) transition-colors"
            onClick={() => setMobileOpen(!mobileOpen)}
            aria-label={mobileOpen ? "Cerrar menú" : "Abrir menú"}
            aria-expanded={mobileOpen}
          >
            <svg
              width="24"
              height="24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              aria-hidden="true"
            >
              {mobileOpen ? (
                <>
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </>
              ) : (
                <>
                  <line x1="3" y1="6" x2="21" y2="6" />
                  <line x1="3" y1="12" x2="21" y2="12" />
                  <line x1="3" y1="18" x2="21" y2="18" />
                </>
              )}
            </svg>
          </button>
        </div>
      </Container>

      {/* Menú móvil */}
      {mobileOpen && (
        <div className="md:hidden bg-(--color-bg) border-t border-(--color-border)">
          <Container>
            <nav className="py-6 flex flex-col gap-5" aria-label="Navegación móvil">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-base font-medium text-(--color-text) hover:text-(--color-primary) transition-colors"
                  onClick={() => setMobileOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={TUU_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full bg-(--color-primary) text-(--color-dark) text-sm font-medium tracking-wide"
                onClick={() => setMobileOpen(false)}
              >
                Agendar hora
              </a>
            </nav>
          </Container>
        </div>
      )}
    </header>
  );
}
