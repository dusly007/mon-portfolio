function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <a href="#home" className="footer-logo">
          MonPortfolio<span>.</span>
        </a>

        <p>
          © {currentYear} Dusly Nestor. Tous droits réservés.
        </p>

        <a href="#home" className="back-to-top">
          ↑ Retour en haut
        </a>
      </div>
    </footer>
  );
}

export default Footer;