import Container from "@/components/ui/Container";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="pt-40 pb-20 bg-(--color-dark) relative overflow-hidden">

      {/* Decorative arc */}
      <div
        className="absolute -bottom-32 -right-32 w-[500px] h-[500px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(184,150,80,0.07)" }}
        aria-hidden="true"
      />
      <div
        className="absolute -bottom-16 -right-16 w-[300px] h-[300px] rounded-full pointer-events-none"
        style={{ border: "1px solid rgba(184,150,80,0.06)" }}
        aria-hidden="true"
      />

      <Container>
        <div className="flex flex-col gap-6 max-w-3xl relative">
          {eyebrow && (
            <div className="flex items-center gap-4">
              <div className="w-8 h-px bg-(--color-primary)" style={{ opacity: 0.6 }} />
              <span className="text-[10px] text-(--color-primary) font-medium tracking-[0.45em] uppercase">
                {eyebrow}
              </span>
            </div>
          )}
          <h1
            className="font-normal text-white leading-[0.88] tracking-tight"
            style={{ fontSize: "clamp(3rem, 6vw, 5rem)" }}
          >
            {title}
          </h1>
          {description && (
            <p className="text-(--color-muted) text-lg leading-relaxed max-w-xl mt-2">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
