"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Container from "@/components/ui/Container";

type Service = {
  name: string;
  description: string;
  colSpan: 1 | 2;
  accent?: boolean;
};

const services: Service[] = [
  {
    name: "Terapia infanto-juvenil",
    description:
      "Apoyo psicológico para niños y adolescentes, abordando dificultades emocionales, conductuales y del desarrollo.",
    colSpan: 2,
    accent: true,
  },
  {
    name: "Terapia con adultos",
    description:
      "Espacio de acompañamiento para el bienestar emocional y mental en la adultez.",
    colSpan: 1,
  },
  {
    name: "Terapia online",
    description:
      "Atención psicológica a distancia, con la misma calidad y compromiso que la terapia presencial.",
    colSpan: 1,
  },
  {
    name: "Psicodiagnóstico",
    description:
      "Evaluaciones psicológicas para comprender mejor las necesidades individuales y orientar el tratamiento.",
    colSpan: 2,
  },
  {
    name: "Terapia familiar",
    description:
      "Intervención para mejorar la comunicación y fortalecer los vínculos familiares.",
    colSpan: 2,
  },
  {
    name: "Psicoterapia de juego",
    description:
      "Método terapéutico para niños donde, a través del juego, se expresan y procesan sus emociones.",
    colSpan: 1,
  },
  {
    name: "Terapia cognitivo-conductual",
    description:
      "Enfoque basado en la modificación de pensamientos y conductas para mejorar el bienestar emocional.",
    colSpan: 1,
  },
  {
    name: "Terapia sistémica relacional",
    description:
      "Abordaje que trabaja las relaciones y dinámicas dentro de los sistemas familiares y sociales.",
    colSpan: 1,
  },
  {
    name: "Terapia reparatoria",
    description:
      "Proceso terapéutico enfocado en la reparación emocional de experiencias traumáticas.",
    colSpan: 1,
  },
];

export default function ServicesSection() {
  // Mobile: track which rows have entered the viewport
  const [revealed, setRevealed] = useState<Set<number>>(new Set());
  const mobileRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = Number(entry.target.getAttribute("data-idx"));
            setRevealed((prev) => {
              if (prev.has(idx)) return prev;
              const next = new Set(prev);
              next.add(idx);
              return next;
            });
          }
        });
      },
      { threshold: 0.35, rootMargin: "0px 0px -40px 0px" }
    );

    mobileRefs.current.forEach((el) => el && observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="especialidades" className="py-28 bg-(--color-bg)">
      <Container>

        {/* ── Section header ── */}
        <div className="flex flex-col gap-4 mb-14">
          {/* Eyebrow */}
          <div className="flex items-center gap-4">
            <div className="w-8 h-px bg-(--color-primary)" />
            <span className="text-[10px] text-(--color-primary) tracking-[0.45em] uppercase font-medium">
              Especialidades
            </span>
          </div>

          {/* Heading + description side by side on md+ */}
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 pb-10 border-b border-(--color-border)">
            <h2
              className="font-normal leading-none tracking-tight text-(--color-dark)"
              style={{ fontSize: "clamp(2.8rem, 7vw, 4.5rem)" }}
            >
              Áreas de{" "}
              <em style={{ fontStyle: "italic" }}>atención</em>
            </h2>
            <p className="text-(--color-muted) text-sm leading-relaxed max-w-xs md:text-right shrink-0">
              Terapias adaptadas a cada etapa de la vida y a las necesidades de
              cada persona.
            </p>
          </div>
        </div>

        {/* ── Desktop: bento grid (lg+) ── */}
        <div className="hidden lg:grid lg:grid-cols-3 gap-3">
          {services.map((service, i) => (
            <div
              key={service.name}
              className={[
                "group flex flex-col justify-between gap-8 p-8 rounded-2xl transition-all duration-300",
                service.colSpan === 2 ? "lg:col-span-2" : "lg:col-span-1",
                service.accent
                  ? "bg-(--color-primary-dark)"
                  : "bg-(--color-surface) hover:bg-(--color-border)",
              ].join(" ")}
            >
              <div className="flex items-start justify-between gap-4">
                <h3
                  className={[
                    "text-xl font-normal leading-snug",
                    service.accent ? "text-white" : "text-(--color-heading)",
                  ].join(" ")}
                >
                  {service.name}
                </h3>
                <span
                  className={[
                    "text-xs font-medium tabular-nums shrink-0 mt-1",
                    service.accent
                      ? "text-(--color-text-on-dark)"
                      : "text-(--color-primary)",
                  ].join(" ")}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <p
                className={[
                  "text-sm leading-relaxed",
                  service.accent ? "text-white/60" : "text-(--color-muted)",
                ].join(" ")}
              >
                {service.description}
              </p>
            </div>
          ))}
        </div>

        {/* ── Mobile: numbered list with scroll-triggered description reveal ── */}
        <div className="lg:hidden border-t border-(--color-border)">
          {services.map((service, i) => (
            <div
              key={service.name}
              ref={(el) => {
                mobileRefs.current[i] = el;
              }}
              data-idx={i}
              className="border-b border-(--color-border) py-6"
            >
              <div className="flex items-start gap-5">
                {/* Number */}
                <span
                  className="text-xs text-(--color-primary) font-medium tracking-widest tabular-nums shrink-0 mt-1"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                {/* Name + description */}
                <div className="min-w-0">
                  <h3
                    className="font-normal leading-snug text-(--color-heading)"
                    style={{
                      fontFamily: "var(--font-heading), Georgia, serif",
                      fontSize: "clamp(1.1rem, 5vw, 1.4rem)",
                    }}
                  >
                    {service.name}
                  </h3>

                  {/* Description — reveals when row enters viewport */}
                  <div
                    className="overflow-hidden transition-all duration-700"
                    style={{
                      maxHeight: revealed.has(i) ? "120px" : "0px",
                      opacity: revealed.has(i) ? 1 : 0,
                      transform: revealed.has(i)
                        ? "translateY(0)"
                        : "translateY(6px)",
                      transitionProperty: "max-height, opacity, transform",
                    }}
                  >
                    <p className="text-sm text-(--color-muted) leading-relaxed pt-2">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* ── Footer CTA ── */}
        <div className="flex items-center justify-between pt-10">
          <span className="text-sm text-(--color-muted)">
            {services.length} especialidades disponibles
          </span>
          <Link
            href="/servicios"
            className="inline-flex items-center gap-2 text-sm font-medium text-(--color-heading) group"
          >
            <span className="border-b border-(--color-border) pb-px group-hover:border-(--color-primary) group-hover:text-(--color-primary) transition-colors duration-200">
              Ver catálogo completo
            </span>
            <span className="text-(--color-primary) group-hover:translate-x-1 transition-transform duration-200">
              →
            </span>
          </Link>
        </div>

      </Container>
    </section>
  );
}
