import Container from "./Container.jsx";

export default function About() {
  return (
    <section id="about" className="bg-white scroll-mt-24">
      <Container className="py-16">
        <div className="grid gap-10 md:grid-cols-2 items-start">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">About Us</h2>
            <p className="mt-4 text-slate-600">
              We craft professional, responsive interfaces powered by reusable
              prompts and a robust design system. Our approach blends
              accessibility, performance, and modern tooling to help teams ship
              beautiful products faster.
            </p>
            <p className="mt-3 text-slate-600">
              From rapid prototyping to production-ready UI, we focus on
              clarity, consistency, and maintainability—so your app looks great
              and scales gracefully.
            </p>
          </div>
          <div className="rounded-xl bg-slate-50 p-6 shadow">
            <h3 className="text-xl font-semibold text-slate-900">
              Our Principles
            </h3>
            <ul className="mt-4 space-y-3 text-slate-700">
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-indigo-600"
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
                Reusable components and clean architecture
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-indigo-600"
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
                Accessibility-first, responsive design
              </li>
              <li className="flex items-start gap-3">
                <svg
                  className="h-5 w-5 text-indigo-600"
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
                Performance and maintainability at scale
              </li>
            </ul>
            <div className="mt-6 overflow-hidden rounded-lg ring-1 ring-slate-200">
              <div className="relative w-full aspect-[16/9] md:aspect-[4/3]">
                <img
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1556157382-97eda2d62296?q=80&w=1600&auto=format&fit=crop"
                  alt="Team collaborating on design and code"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
