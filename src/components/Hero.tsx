export default function Hero() {
  return (
    <section className="hero section" id="top" aria-labelledby="hero-title">
      <div className="hero__meta eyebrow"><span className="status-dot" /> Open to GenAI / AI opportunities</div>
      <div className="hero__grid">
        <div className="hero__copy">
          <p className="eyebrow">01 / POSITIONING</p>
          <h1 id="hero-title">GENAI<br /><span>DEVELOPER</span></h1>
          <p className="hero__lead">Building AI-powered applications with Python, LLMs, RAG &amp; agentic AI technologies.</p>
          <div className="hero__actions">
            <a className="button button--primary" href="#work">Explore work <span>↓</span></a>
            <a className="button button--secondary" href="/resume/Harsha_k.pdf" download>Download resume <span>↗</span></a>
          </div>
        </div>
        <figure className="hero__portrait">
          <img src="/images/harsha-portrait.png" alt="Portrait of Harsha K" />
          <figcaption>Harsha K / AI engineering</figcaption>
        </figure>
      </div>
      <div className="hero__footer">
        <span>Python · LLMs · RAG · Agents</span>
        <span>Scroll to explore ↓</span>
      </div>
    </section>
  );
}
