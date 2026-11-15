function Contact() {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">

        <h2>
          Me <span>contacter</span>
        </h2>

        <p className="contact-description">
          Je suis actuellement à la recherche d'un stage
          en développement Web ou en soutien informatique.

          N'hésitez pas à me contacter pour discuter
          d'une opportunité ou d'un projet.
        </p>

        <div className="contact-links">

          <a
            href="mailto:ton.email@example.com"
            className="contact-card"
          >
            <h3>📧 Courriel</h3>
            <p>dusly24@gmail.com</p>
          </a>

          <a
            href="https://github.com/dusly007"
            target="_blank"
            rel="noopener noreferrer"
            className="contact-card"
          >
            <h3>💻 GitHub</h3>
            <p>github.com/dusly007</p>
          </a>

        </div>

      </div>
    </section>
  );
}

export default Contact;