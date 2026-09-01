const credentials = [
  { org: "ORACLE", title: "Agentic AI Certified Foundations Associate", date: "Aug 23, 2026", file: "/certificates/oracle-agentic-ai.pdf", priority: true },
  { org: "ANTHROPIC", title: "Claude Code in Action", date: "Mar 15, 2026", file: "/certificates/claude-code-in-action.pdf" },
  { org: "AWS", title: "Foundations of Prompt Engineering", date: "Aug 26, 2026", file: "/certificates/prompt-engineering.pdf" },
  { org: "AWS", title: "Kiro Getting Started", date: "Mar 16, 2026", file: "/certificates/kiro-getting-started.pdf" },
  { org: "NPTEL", title: "Secure Systems Engineering", date: "Jan–Mar 2025", file: "/certificates/nptel-secure-systems.png" },
];

export default function Certifications() {
  return (
    <section className="certifications section" aria-labelledby="certifications-title">
      <div className="section-head">
        <p className="eyebrow">07 / CREDENTIALS</p>
        <h2 id="certifications-title">Evidence of continued learning.</h2>
      </div>
      <div className="credential-list">
        {credentials.map((credential) => (
          <article className={`credential ${credential.priority ? "credential--featured" : ""}`} key={credential.title}>
            <div className="credential__number">{credential.priority ? "PRIMARY" : ""}</div>
            <div className="credential__main"><p className="eyebrow">{credential.org}</p><h3>{credential.title}</h3></div>
            <div className="credential__date">{credential.date}</div>
            <a className="credential__link" href={credential.file} target="_blank" rel="noreferrer">View ↗</a>
          </article>
        ))}
      </div>
    </section>
  );
}
