import { useEffect, useState } from "react";
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Features from "./components/Features.jsx";
import About from "./components/About.jsx";
import Pricing from "./components/Pricing.jsx";
import Contact from "./components/Contact.jsx";
import Footer from "./components/Footer.jsx";

export default function App() {
  const [activeId, setActiveId] = useState("home");

  useEffect(() => {
    const ids = ["home", "services", "about", "pricing", "contact"];
    const elements = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top);
        if (visible[0]) {
          setActiveId(visible[0].target.id);
        }
      },
      { rootMargin: "-64px 0px -60% 0px", threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <Navbar activeId={activeId} />
      <div className="pt-16">
        <Hero />
        <Features />
        <About />
        <Pricing />
        <Contact />
        <Footer />
      </div>
    </>
  );
}
