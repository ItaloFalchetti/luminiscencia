const IG_URL = "https://instagram.com/centro_luminiscencia";

const gradients = [
  "linear-gradient(135deg, #D4B87A 0%, #B89650 100%)",
  "linear-gradient(135deg, #EDEADF 0%, #C8B890 100%)",
  "linear-gradient(135deg, #C4A070 0%, #9A7840 100%)",
  "linear-gradient(135deg, #E8D8B8 0%, #D4C098 100%)",
  "linear-gradient(135deg, #B89650 0%, #8A7038 100%)",
  "linear-gradient(135deg, #F0E4C4 0%, #D4B87A 100%)",
];

export default function InstagramSection() {
  return (
    <section
      className="py-10 bg-(--color-bg)"
      style={{
        borderTop: "1px solid var(--color-border)",
        borderBottom: "1px solid var(--color-border)",
      }}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">

          {/* Left — text content */}
          <div className="flex items-start gap-4">
            {/* Instagram icon */}
            <div
              className="w-10 h-10 flex items-center justify-center shrink-0 mt-0.5"
              style={{ border: "1px solid var(--color-border)" }}
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
              >
                <rect
                  x="2" y="2" width="20" height="20" rx="5"
                  stroke="var(--color-primary)"
                  strokeWidth="1.5"
                />
                <circle
                  cx="12" cy="12" r="4"
                  stroke="var(--color-primary)"
                  strokeWidth="1.5"
                />
                <circle cx="17.5" cy="6.5" r="1.2" fill="var(--color-primary)" />
              </svg>
            </div>

            <div className="flex flex-col gap-1.5">
              <p
                className="font-normal text-(--color-heading) leading-snug"
                style={{
                  fontFamily: "var(--font-heading), Georgia, serif",
                  fontSize: "1.25rem",
                }}
              >
                Nuestro día a día,{" "}
                <em style={{ fontStyle: "italic" }}>síguenos</em>
              </p>
              <p className="text-xs text-(--color-muted) leading-relaxed max-w-xs">
                Recursos, reflexiones y momentos del centro. Estate atento a lo
                que compartimos.
              </p>
              <a
                href={IG_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-medium text-(--color-heading) group mt-1"
              >
                <span className="border-b border-(--color-border) pb-px group-hover:border-(--color-primary) group-hover:text-(--color-primary) transition-colors duration-200">
                  @centro_luminiscencia
                </span>
                <span className="text-(--color-primary) group-hover:translate-x-1 transition-transform duration-200">
                  →
                </span>
              </a>
            </div>
          </div>

          {/* Right — decorative grid suggesting Instagram feed */}
          <a
            href={IG_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="grid grid-cols-3 gap-1.5 shrink-0 opacity-80 hover:opacity-100 transition-opacity duration-300"
            aria-label="Ver Instagram @centro_luminiscencia"
          >
            {gradients.map((gradient, i) => (
              <div
                key={i}
                className="w-14 h-14 md:w-16 md:h-16"
                style={{ background: gradient }}
                aria-hidden="true"
              />
            ))}
          </a>

        </div>
      </div>
    </section>
  );
}
