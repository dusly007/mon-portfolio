function Skills() {
  return (
    <section id="skills" className="skills">
      <div className="skills-content">
        <h2>Mes <span>compétences</span></h2>

        <p className="skills-description">
          Voici les technologies et outils que j'utilise
          dans mes projets et mes apprentissages.
        </p>

        <div className="skills-grid">
          <div className="skill-card">
            <h3>Langages de programmation</h3>
            <ul>
              <li>Java</li>
              <li>JavaScript</li>
              <li>Python</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Développement Web</h3>
            <ul>
              <li>HTML</li>
              <li>CSS</li>
              <li>React</li>
              <li>TypeScript</li>
            </ul>
          </div>

          <div className="skill-card">
            <h3>Backend et outils</h3>
            <ul>
              <li>Node.js</li>
              <li>NestJS</li>
              <li>Git et GitHub</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Skills;