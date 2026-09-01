export default function Experience() {
  return (
    <section className="experience section" aria-labelledby="experience-title">
      <div className="section-head">
        <p className="eyebrow">05 / EXPERIENCE</p>
        <h2 id="experience-title">Where I started building.</h2>
      </div>
      <div className="timeline">
        <article className="timeline__item">
          <div className="timeline__marker">01</div>
          <div className="timeline__body">
            <p className="eyebrow">INTERNSHIP</p>
            <h3>Cyber Security Intern</h3>
            <p className="timeline__company">TechCiti Software Consulting</p>
            <p>Worked with vulnerability identification, log review, cybersecurity concepts, and security best practices.</p>
          </div>
        </article>
        <article className="timeline__item">
          <div className="timeline__marker">02</div>
          <div className="timeline__body">
            <p className="eyebrow">INTERNSHIPS</p>
            <h3>Web Development Intern</h3>
            <p className="timeline__company">TechCiti Software Consulting</p>
            <p>Learned responsive design principles and basic accessibility to ensure mobile-friendly and inclusive websites.</p>
          </div>
        </article>

        <article className="timeline__item">
          <div className="timeline__marker">03</div>
          <div className="timeline__body">
            <p className="eyebrow">INTERNSHIPS</p>
            <h3>Backend Development  Intern</h3>
            <p className="timeline__company">Accelerlab Technologies Pvt. Ltd.</p>
            <p>Developed server-side programming skills with PHP, focusing on data handling, user authentication, and MySQL database
integration</p>
          </div>
        </article>

        <article className="timeline__item">
          <div className="timeline__marker">04</div>
          <div className="timeline__body">
            <p className="eyebrow">INTERNSHIPS</p>
            <h3>Front-End Development Intern</h3>
            <p className="timeline__company">Accelerlab Technologies Pvt. Ltd.</p>
            <p>Enhanced front-end development skills using JavaScript, focusing on DOM manipulation and ES6+ features. </p>
          </div>
        </article>
      </div>
    </section>
  );
}
