const projects = [
  {
    number: "01",
    type: "NLP / PYTHON",
    title: "Sentiment Analysis of YouTube Comments",
    intro: "A Python-based NLP project focused on analyzing YouTube comments and classifying their sentiment.",
    steps: ["Cleaned and processed comment data", "Analyzed patterns in the dataset", "Classified comments based on sentiment"],
    stack: ["Python", "NLP"],
    github: "https://github.com/harshakarambar/-Sentiment_Analysis_of_YouTube_Comments",
  },
  {
    number: "02",
    type: "WEB APPLICATION",
    title: "Kitchen Order Ticket",
    intro: "A simple web application for adding, viewing, and tracking kitchen order tickets.",
    steps: ["Built the frontend interface", "Created a clear order-tracking flow", "Structured the interface for easy viewing of orders"],
    stack: ["HTML", "CSS"],
    github: "https://github.com/harshakarambar/kitchen_order_ticket",
  },
];

export default function Projects() {
  return (
    <section className="work section" id="work" aria-labelledby="work-title">
      <div className="section-head section-head--work">
        <p className="eyebrow">03 / SELECTED WORK</p>
        <h2 id="work-title">Built, not just listed.</h2>
        <p>Two projects that show the progression from application development into data and AI-focused work.</p>
      </div>

      <div className="project-list">
        {projects.map((project) => (
          <article className={`project project--${project.number}`} key={project.number}>
            <div className="project__top">
              <span className="project__number">{project.number}</span>
              <span className="eyebrow">{project.type}</span>
              <span className="project__arrow" aria-hidden="true">↗</span>
            </div>
            <div className="project__grid">
              <div>
                <h3>{project.title}</h3>
                <p className="project__intro">{project.intro}</p>
              </div>
              <div className="project__process">
                <p className="eyebrow">WHAT I WORKED ON</p>
                {project.steps.map((step, i) => (
                  <div className="process-step" key={step}><span>0{i + 1}</span><p>{step}</p></div>
                ))}
                <div className="tag-row">{project.stack.map((tag) => <span className="tag" key={tag}>{tag}</span>)}</div>
              </div>
            </div>
            <div className="project__bottom">
              <span>Project source</span>
              <a href={project.github} aria-label={`Add GitHub link for ${project.title}`}>GitHub link <span>↗</span></a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
