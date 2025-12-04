import Container from "./Container.jsx";

export default function Pricing() {
  const tiers = [
    {
      name: "Starter",
      price: "$19/mo",
      features: ["1 project", "Basic support", "Community access"],
    },
    {
      name: "Growth",
      price: "$49/mo",
      features: ["5 projects", "Priority support", "Analytics"],
    },
    {
      name: "Pro",
      price: "$99/mo",
      features: [
        "Unlimited projects",
        "Dedicated support",
        "Advanced analytics",
      ],
    },
  ];
  return (
    <section id="pricing" className="bg-white scroll-mt-24">
      <Container className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Pricing</h2>
          <p className="mt-3 text-slate-600">
            Simple plans that grow with you.
          </p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div
              key={t.name}
              className="rounded-xl border border-slate-200 p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <h3 className="text-xl font-semibold">{t.name}</h3>
              <p className="mt-2 text-2xl font-bold text-indigo-600">
                {t.price}
              </p>
              <ul className="mt-4 space-y-2 text-slate-600">
                {t.features.map((f) => (
                  <li key={f} className="flex items-center gap-2">
                    <svg
                      className="h-4 w-4 text-emerald-600"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    {f}
                  </li>
                ))}
              </ul>
              <a
                href="#contact"
                className="mt-6 inline-block rounded-md bg-indigo-600 px-4 py-2 text-white hover:bg-indigo-700"
              >
                Choose {t.name}
              </a>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
