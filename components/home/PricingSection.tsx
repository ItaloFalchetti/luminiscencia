import Container from "@/components/ui/Container";

const plans = [
  {
    type: "Terapia particular",
    price: "$25.000",
    unit: "por sesión",
    highlight: false,
  },
  {
    type: "Terapia por convenio",
    price: "$18.000",
    unit: "por sesión",
    highlight: true,
    note: "Convenio Municipalidad de Pudahuel",
  },
];

const policies = [
  "Todas las sesiones se pagan previamente a través de nuestra página web.",
  "Emitimos boleta por cada sesión para gestionar reembolso con isapre o seguro de salud.",
  "Cancelaciones con al menos 24 horas de anticipación reciben reembolso del 90%.",
  "Los pacientes que iniciaron tratamiento en años anteriores mantienen el valor pactado.",
];

const reports = [
  { label: "Informe adicional", price: "$5.000" },
  { label: "Informe para tribunal", price: "$50.000", note: "Requiere 3–5 sesiones previas" },
];

export default function PricingSection() {
  return (
    <section className="py-24 bg-(--color-bg)">
      <Container>
        <div className="flex flex-col gap-14">

          <div className="flex flex-col gap-3 max-w-xl">
            <span className="text-(--color-primary) text-xs font-medium tracking-[0.2em] uppercase">
              Tarifas 2025
            </span>
            <h2 className="text-4xl md:text-5xl font-normal">
              Valores de sesión
            </h2>
            <p className="text-(--color-muted) leading-relaxed">
              Precios transparentes y accesibles. Cada sesión tiene una duración de{" "}
              <strong className="text-(--color-text) font-medium">60 minutos</strong>.
            </p>
          </div>

          {/* Cards de precios */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-2xl">
            {plans.map((plan) => (
              <div
                key={plan.type}
                className={`flex flex-col gap-4 p-8 rounded-2xl ring-1 ${
                  plan.highlight
                    ? "bg-(--color-dark) ring-(--color-primary)"
                    : "bg-(--color-bg) ring-(--color-border)"
                }`}
              >
                <span
                  className={`text-sm font-medium tracking-wide ${
                    plan.highlight ? "text-(--color-primary)" : "text-(--color-muted)"
                  }`}
                >
                  {plan.type}
                </span>
                <div className="flex items-baseline gap-2">
                  <span
                    className={`text-4xl font-normal ${
                      plan.highlight ? "text-(--color-text-on-dark)" : "text-(--color-heading)"
                    }`}
                    style={{ fontFamily: "var(--font-heading)" }}
                  >
                    {plan.price}
                  </span>
                  <span className="text-sm text-(--color-muted)">{plan.unit}</span>
                </div>
                {plan.note && (
                  <span className="text-(--color-primary) text-xs font-medium border border-(--color-primary)/40 rounded-full px-3 py-1 w-fit">
                    {plan.note}
                  </span>
                )}
              </div>
            ))}
          </div>

          {/* Informes */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <h3 className="text-lg font-normal text-(--color-heading)">Informes psicológicos</h3>
            <div className="flex flex-col gap-3">
              {reports.map((r) => (
                <div
                  key={r.label}
                  className="flex items-center justify-between py-3 border-b border-(--color-border)"
                >
                  <div className="flex flex-col gap-0.5">
                    <span className="text-sm text-(--color-text)">{r.label}</span>
                    {r.note && (
                      <span className="text-xs text-(--color-muted)">{r.note}</span>
                    )}
                  </div>
                  <span className="text-sm font-medium text-(--color-primary)">{r.price}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Políticas */}
          <div className="flex flex-col gap-4 max-w-2xl">
            <h3 className="text-lg font-normal text-(--color-heading)">Información importante</h3>
            <ul className="flex flex-col gap-3">
              {policies.map((policy) => (
                <li key={policy} className="flex items-start gap-3 text-sm text-(--color-muted) leading-relaxed">
                  <span className="text-(--color-primary) mt-0.5 shrink-0">✓</span>
                  {policy}
                </li>
              ))}
            </ul>
          </div>

        </div>
      </Container>
    </section>
  );
}
