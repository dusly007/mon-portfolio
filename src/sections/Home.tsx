function Home() {
    return (
        <section id="home" className="home">
            <div className="home-content">
                <p className="home-intro">Bonjour, je suis</p>

                <h1>
                    Dusly <span>Nestor</span>
                </h1>

                <h2>Étudiant en Techniques de l'informatique</h2>

                <p className="home-description">
                    Passionné par le développement Web et les technologies,
                    je construis des applications et j'aime relever de nouveaux défis.
                </p>

                <div className="home-buttons">
                    <a href="#projects" className="btn-primary">
                        Voir mes projets
                    </a>

                    <a href="#contact" className="btn-secondary">
                        Me contacter
                    </a>
                    <a
                        href="/documents/CV_Stage_Dusly_Nestor.pdf"
                        download="CV_Stage_Dusly_Nestor.pdf"
                        className="btn-cv"
                    >
                        Télécharger mon CV ↓
                    </a>
                </div>
            </div>
        </section>
    );
}

export default Home;