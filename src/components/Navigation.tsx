"use client";

import { useEffect, useState } from "react";

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className={`nav ${scrolled ? "nav--scrolled" : ""}`}>
      <a className="nav__brand" href="#top" aria-label="Harsha K home">HK</a>
      <nav className="nav__links" aria-label="Primary navigation">
        <a href="#work">Work</a>
        <a href="#expertise">Expertise</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
      </nav>
      <a className="nav__resume" href="/resume/Harsha_k.pdf" download>Resume <span>↗</span></a>
    </header>
  );
}
