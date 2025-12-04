import Container from "./Container.jsx";

export default function Hero() {
  return (
    <section
      id="home"
      className="relative overflow-hidden bg-gradient-to-b from-indigo-50 to-white"
    >
      <Container className="py-16">
        <div className="grid items-center gap-10 md:grid-cols-2">
          <div>
            <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Design better with reusable prompts
            </h1>
            <p className="mt-4 max-w-prose text-lg text-slate-600">
              Generate consistent, responsive UI sections using robust,
              tool-agnostic prompts. Ship faster with cleaner code and a tighter
              design system.
            </p>
            <div className="mt-6 flex items-center gap-4">
              <a
                href="#services"
                className="rounded-md bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
              >
                Explore Services
              </a>
              <a
                href="#contact"
                className="text-indigo-600 hover:text-indigo-700"
              >
                Contact Us
              </a>
            </div>
          </div>
          <div>
            <div className="overflow-hidden rounded-xl ring-1 ring-slate-200">
              <div className="relative w-full aspect-[16/10] md:aspect-[4/3]">
                <img
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=1600&auto=format&fit=crop"
                  alt="Modern workspace with laptop and code on screen"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
