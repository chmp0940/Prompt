import Container from "./Container.jsx";

function FeatureCard({ iconPath, title, desc }) {
  return (
    <div className="rounded-xl bg-white p-6 shadow">
      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-indigo-50 text-indigo-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
        >
          <path strokeLinecap="round" strokeLinejoin="round" d={iconPath} />
        </svg>
      </div>
      <h3 className="mt-5 text-xl font-semibold">{title}</h3>
      <p className="mt-2 text-slate-600">{desc}</p>
    </div>
  );
}

export default function Features() {
  const cards = [
    {
      iconPath: "M3 7h18M5 11h14M7 15h10",
      title: "Meta-Prompt Systems",
      desc: "Design robust meta-prompts that enforce structure, accessibility, and styling.",
    },
    {
      iconPath: "M12 3v18M3 12h18",
      title: "Responsive Components",
      desc: "Generate mobile-first layouts with consistent spacing and clean typography.",
    },
    {
      iconPath: "M5 13l4 4L19 7",
      title: "Accessible by Default",
      desc: "Add proper labels, roles, focus rings, and alt text for inclusivity.",
    },
    {
      iconPath: "M12 6v6l4 2",
      title: "Fast Iteration",
      desc: "Refine prompts to fix design issues quickly without manual code edits.",
    },
    {
      iconPath: "M15 7a3 3 0 11-6 0 3 3 0 016 0zm-9 12a6 6 0 1112 0H6z",
      title: "Consistent UI",
      desc: "Shared palette, spacing, and card patterns for visual harmony.",
    },
    {
      iconPath: "M9 12h6m-6 4h6M7 8h10",
      title: "Clear Documentation",
      desc: "Prompts and rationale documented for repeatable results across tools.",
    },
  ];
  return (
    <section id="services" className="bg-slate-50 scroll-mt-24">
      <Container className="py-16">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-slate-900">Services</h2>
          <p className="mt-3 text-slate-600">
            Clear, reusable prompts that produce great UI—consistently.
          </p>
        </div>
        <div className="mt-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((c) => (
            <FeatureCard key={c.title} {...c} />
          ))}
        </div>
      </Container>
    </section>
  );
}
