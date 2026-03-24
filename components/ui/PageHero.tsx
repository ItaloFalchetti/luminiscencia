import Container from "@/components/ui/Container";

interface PageHeroProps {
  eyebrow?: string;
  title: string;
  description?: string;
}

export default function PageHero({ eyebrow, title, description }: PageHeroProps) {
  return (
    <section className="pt-36 pb-16 bg-(--color-dark)">
      <Container>
        <div className="flex flex-col gap-5 max-w-3xl">
          {eyebrow && (
            <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
              {eyebrow}
            </span>
          )}
          <h1 className="text-5xl md:text-6xl font-normal text-(--color-text-on-dark) leading-tight">
            {title}
          </h1>
          {description && (
            <p className="text-(--color-muted) text-lg leading-relaxed max-w-xl">
              {description}
            </p>
          )}
        </div>
      </Container>
    </section>
  );
}
