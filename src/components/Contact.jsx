import { useState } from "react";
import Container from "./Container.jsx";

export default function Contact() {
  const [submitted, setSubmitted] = useState(false);
  const onSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    e.target.reset();
  };
  return (
    <section id="contact" className="relative scroll-mt-24">
      <Container className="py-16">
        <div className="grid gap-8 md:grid-cols-2">
          <div>
            <h2 className="text-3xl font-bold text-slate-900">Get in touch</h2>
            <p className="mt-3 text-slate-600">
              Fill out the form and we’ll respond shortly.
            </p>
            <form
              className="mt-6 space-y-4"
              aria-label="Contact form"
              onSubmit={onSubmit}
            >
              <div className="grid gap-4 md:grid-cols-2">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Name *
                  </label>
                  <input
                    id="name"
                    name="name"
                    type="text"
                    required
                    minLength={2}
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium text-slate-700"
                  >
                    Email *
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  />
                </div>
              </div>
              <div>
                <label
                  htmlFor="phone"
                  className="block text-sm font-medium text-slate-700"
                >
                  Phone (optional)
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                />
              </div>
              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-slate-700"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={4}
                  className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 shadow-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                ></textarea>
              </div>
              <div>
                <button
                  type="submit"
                  className="rounded-md bg-indigo-600 px-5 py-3 text-white shadow hover:bg-indigo-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500"
                >
                  Send Message
                </button>
              </div>
              {submitted && (
                <p className="text-emerald-600">Thanks! We’ll be in touch.</p>
              )}
            </form>
          </div>
          <div className="rounded-xl bg-slate-50 p-6 shadow">
            <h3 className="text-xl font-semibold">Contact Information</h3>
            <p className="mt-2 text-slate-600">
              Email: hello@example.com
              <br />
              Phone: +1 (555) 123-4567
            </p>
            <div className="mt-6 overflow-hidden rounded-lg ring-1 ring-slate-200">
              <div className="relative w-full aspect-[16/9] md:aspect-[4/3]">
                <img
                  className="absolute inset-0 h-full w-full object-cover object-center"
                  src="https://images.pexels.com/photos/3861964/pexels-photo-3861964.jpeg"
                  alt="Friendly team collaborating in modern office"
                />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
