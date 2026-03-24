import Link from "next/link";
import Container from "@/components/ui/Container";

const benefits = [
  {
    title: "Colegios y liceos",
    description:
      "Apoyo psicológico para estudiantes, equipos docentes y comunidades escolares. Derivación ágil y seguimiento del proceso.",
  },
  {
    title: "Empresas y organizaciones",
    description:
      "Programas de bienestar laboral, prevención del burnout y acompañamiento para tus trabajadores.",
  },
  {
    title: "Mutuales y seguros de salud",
    description:
      "Convenios de derivación con tarifas diferenciadas. Emitimos boletas para reembolso de isapre o seguro.",
  },
];

export default function ConveniosSection() {
  return (
    <section className="py-24 bg-(--color-surface)">
      <Container>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-20 items-start">

          {/* Texto */}
          <div className="flex flex-col gap-8">
            <div className="flex flex-col gap-4">
              <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
                Convenios Institucionales
              </span>
              <h2 className="text-4xl md:text-5xl font-normal leading-tight">
                ¿Tu institución cuida la salud mental de su comunidad?
              </h2>
              <p className="text-(--color-muted) leading-relaxed">
                Ofrecemos convenios especiales para colegios, empresas y organizaciones que priorizan
                el bienestar psicológico de sus alumnos y trabajadores. Acceso preferencial, precios
                diferenciados y acompañamiento continuo.
              </p>
            </div>

            <div className="flex flex-col gap-6">
              {benefits.map((benefit, i) => (
                <div key={benefit.title} className="flex gap-5">
                  <div className="flex flex-col items-center gap-1 shrink-0 pt-1">
                    <div className="w-8 h-8 rounded-full bg-(--color-primary) flex items-center justify-center">
                      <span className="text-white text-xs font-medium">{String(i + 1).padStart(2, "0")}</span>
                    </div>
                    {i < benefits.length - 1 && (
                      <div className="w-px flex-1 min-h-[2rem] bg-(--color-border)" />
                    )}
                  </div>
                  <div className="flex flex-col gap-1 pb-6">
                    <h3 className="text-base font-medium text-(--color-heading)">{benefit.title}</h3>
                    <p className="text-sm text-(--color-muted) leading-relaxed">{benefit.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row items-start gap-4 pt-2">
              <Link
                href="/contacto"
                className="inline-flex items-center gap-3 px-8 py-3.5 rounded-full bg-(--color-dark) text-white text-sm font-medium tracking-wide hover:bg-(--color-primary) transition-colors duration-300"
              >
                Solicitar información
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" aria-hidden="true">
                  <path d="M1 7h12M8 2l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
              <a
                href="https://api.whatsapp.com/send/?phone=56937600800&text=Hola.+Necesito+informaci%C3%B3n+sobre+convenios+institucionales&type=phone_number&app_absent=0"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full border border-(--color-border) text-(--color-text) text-sm font-medium hover:border-(--color-primary) hover:text-(--color-primary) transition-colors duration-200"
              >
                <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                </svg>
                WhatsApp
              </a>
            </div>
          </div>

          {/* Tarjeta destacada */}
          <div className="flex flex-col gap-4">
            <div className="rounded-2xl bg-(--color-dark) p-10 flex flex-col gap-8">
              <div className="flex flex-col gap-3">
                <div className="w-12 h-12 rounded-xl bg-(--color-primary)/20 flex items-center justify-center">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-(--color-primary)" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                    <path d="M23 21v-2a4 4 0 0 0-3-3.87"/>
                    <path d="M16 3.13a4 4 0 0 1 0 7.75"/>
                  </svg>
                </div>
                <h3 className="text-xl font-normal leading-snug" style={{ color: "#FFFFE6" }}>
                  Cuidado colectivo con impacto real
                </h3>
                <p className="text-(--color-text-on-dark) text-sm leading-relaxed opacity-80">
                  Un convenio institucional es la forma más efectiva de garantizar
                  acceso continuo a salud mental para toda tu comunidad.
                </p>
              </div>

              <ul className="flex flex-col gap-4">
                {[
                  "Tarifas preferenciales para grupos",
                  "Atención prioritaria con agenda reservada",
                  "Informes de seguimiento periódicos",
                  "Coordinación directa con el equipo",
                  "Modalidad presencial u online",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-(--color-text-on-dark)">
                    <span className="text-(--color-primary) shrink-0 mt-0.5">✓</span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Dato de apoyo */}
            <div className="rounded-2xl bg-(--color-border)/50 p-6 flex gap-4 items-start">
              <div className="w-1 self-stretch rounded-full bg-(--color-primary) shrink-0" />
              <p className="text-sm text-(--color-muted) leading-relaxed">
                <strong className="text-(--color-text) font-medium">Ya tenemos convenio</strong> con
                la Municipalidad de Pudahuel, lo que permite atención a tarifas accesibles ($18.000
                por sesión) para sus beneficiarios.
              </p>
            </div>
          </div>

        </div>
      </Container>
    </section>
  );
}
