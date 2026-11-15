
function Navbar() {
  return (
    <nav className="navbar">
      <a href="#home" className="navbar-logo">
        MonPortfolio<span>.</span>
      </a>

      <ul className="navbar-links">
        <li><a href="#home">Accueil</a></li>
        <li><a href="#about">À propos</a></li>
        <li><a href="#skills">Compétences</a></li>
        <li><a href="#projects">Projets</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
