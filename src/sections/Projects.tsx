function Projects() {
    return (
        <section id="projects" className="projects">
            <div className="projects-content">
                <h2>Mes <span>projets</span></h2>

                <p className="projects-description">
                    Voici quelques projets sur lesquels j'ai travaillé
                    durant mon parcours en informatique.
                </p>

                <div className="projects-grid">
                    {/* Projet BookMyCut */}
                    <div className="project-card">
                        <div className="project-info">
                            <h3>BookMyCut</h3>

                            <p className="project-type">
                                Application de réservation de services de coiffure
                            </p>

                            <p>
                                Projet d'équipe développé en C# avec WPF et .NET,
                                suivant l'architecture MVVM.
                                L'application permet aux clients de choisir un
                                coiffeur, consulter les disponibilités et réserver
                                des rendez-vous. Elle comprend également la gestion
                                des services, des utilisateurs et des réservations.
                            </p>

                            <div className="project-technologies">
                                <span>C#</span>
                                <span>WPF</span>
                                <span>.NET</span>
                                <span>MVVM</span>
                            </div>

                            <a
                                href="https://github.com/bookmycutDev/BookMyCut"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="project-link"
                            >
                                Voir le projet sur GitHub →
                            </a>
                        </div>
                    </div>

                    {/* Projet Schedulift */}
                    <div className="project-card">
                        <div className="project-info">
                            <h3>Schedulift</h3>

                            <p className="project-type">
                                Application Web de gestion de cours et de réservations
                            </p>

                            <p>
                                Projet d'équipe permettant de gérer des cours,
                                des services, des réservations et des listes d'attente.
                                J'ai contribué au développement frontend avec React
                                et TypeScript ainsi qu'au backend avec NestJS.
                            </p>

                            <div className="project-technologies">
                                <span>React</span>
                                <span>TypeScript</span>
                                <span>NestJS</span>
                                <span>Node.js</span>
                            </div>

                            <a
                                href="https://github.com/dusly007/schedulift-frontend"
                                target="_blank"
                                rel="noreferrer"
                                className="project-link"
                            >
                                Voir le projet sur GitHub →
                            </a>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default Projects;