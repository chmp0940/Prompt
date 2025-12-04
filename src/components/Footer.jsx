import Container from "./Container.jsx";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="bg-slate-900 text-slate-200">
      <Container className="py-12">
        <div className="grid gap-8 md:grid-cols-4">
          <div>
            <a href="#home" className="flex items-center gap-3">
              <span className="inline-grid h-9 w-9 place-items-center rounded-md bg-indigo-600">
                <svg
                  className="h-5 w-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <circle cx="12" cy="12" r="6" />
                  <path d="M12 2v4M12 18v4M2 12h4M18 12h4" />
                </svg>
              </span>
              <span className="text-lg font-semibold tracking-tight">
                PromptStudio
              </span>
            </a>
            <p className="mt-3 text-sm text-slate-400">
              Clean, responsive sections generated from strong prompts.
            </p>
            <div className="mt-4 overflow-hidden rounded-lg ring-1 ring-slate-800/50">
              <div className="relative w-full aspect-[16/9]">
                <img
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src="https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1600&auto=format&fit=crop"
                  alt="Abstract brand pattern"
                />
              </div>
            </div>
          </div>
          <div>
            <h5 className="text-sm font-semibold">Product</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                <a className="hover:text-white" href="#">
                  Features
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Pricing
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Integrations
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold">Company</h5>
            <ul className="mt-3 space-y-2 text-sm text-slate-300">
              <li>
                <a className="hover:text-white" href="#">
                  About
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Careers
                </a>
              </li>
              <li>
                <a className="hover:text-white" href="#">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h5 className="text-sm font-semibold">Follow</h5>
            <div className="mt-3 flex items-center gap-4">
              <a aria-label="Twitter" className="hover:text-white" href="#">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M22.46 6c-.77.35-1.6.58-2.46.69a4.29 4.29 0 0 0 1.88-2.37 8.6 8.6 0 0 1-2.72 1.05 4.27 4.27 0 0 0-7.3 3.9A12.12 12.12 0 0 1 3.15 4.9a4.26 4.26 0 0 0 1.32 5.69c-.66-.02-1.28-.2-1.82-.5v.05a4.27 4.27 0 0 0 3.42 4.18c-.31.08-.64.12-.98.12-.24 0-.48-.02-.7-.07a4.28 4.28 0 0 0 3.99 2.97A8.56 8.56 0 0 1 2 19.54a12.08 12.08 0 0 0 6.56 1.92c7.87 0 12.18-6.52 12.18-12.18l-.01-.56A8.7 8.7 0 0 0 24 5.3c-.85.38-1.76.64-2.72.7z" />
                </svg>
              </a>
              <a aria-label="LinkedIn" className="hover:text-white" href="#">
                <svg
                  className="h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  aria-hidden="true"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.98h5v15H0v-15zM8.98 8.98h4.79v2.05h.07c.67-1.28 2.3-2.63 4.73-2.63 5.05 0 5.98 3.33 5.98 7.66v8.92h-5v-7.91c0-1.89-.03-4.32-2.64-4.32-2.64 0-3.05 2.06-3.05 4.19v8.04h-4.88v-15z" />
                </svg>
              </a>
            </div>
            <p className="mt-4 text-sm text-slate-400">hello@example.com</p>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-800 pt-6 text-center text-sm text-slate-400">
          © {year} PromptStudio. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}
