export default function About() {
  return (
    <section className="about section" id="about" aria-labelledby="about-title">
      <div className="about__visual">
        <img src="/images/harsha_2.png" alt="Harsha K" loading="lazy" />
        <span className="about__caption">Building toward AI engineering.</span>
      </div>
      <div className="about__copy">
        <p className="eyebrow">06 / ABOUT</p>
        <h2 id="about-title">Building toward AI engineering.</h2>
        <p>I started my technical journey through software development, gaining experience in frontend and backend development before expanding into cybersecurity and AI.</p>
        <p>Today, my primary career focus is Generative AI and AI engineering. I’m particularly interested in building practical applications around LLMs, RAG, agentic systems, APIs, and Python.</p>
        <p>My goal is to contribute to teams building useful AI products while continuing to deepen my engineering skills.</p>
      </div>
    </section>
  );
}
