import { useState } from 'react';
import styles from './Sobre.module.css';

const urlTechnologies = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

const Sobre = () => {
    const [showMore, setShowMore] = useState(false);

    const toggleShowMore = () => {
        setShowMore(!showMore);
    };

    return (
        <>
            <section className={styles.intro} id="sobre">
                <div className={styles.introContainer}>
                    <div className={styles.imgDev}>
                        <img src="https://github.com/GKsegura.png" alt="Foto de perfil do José Segura" />
                    </div>
                    <div className={styles.textContent}>
                        <h1>
                            Olá, eu sou o <span className={styles.highlight}>José Segura</span>
                        </h1>
                        <div className={styles.description}>
                            <p>
                                <strong>Desenvolvedor Full-Stack</strong> com experiência prática em
                                <strong> JavaScript, React, Java, PHP (Laravel), PostgreSQL e MySQL</strong>.
                            </p>
                            <p>
                                Já desenvolvi <strong>e-commerces, plataformas de investimentos e dashboards</strong>,
                                com integração de APIs e <strong>dados em tempo real</strong>.
                            </p>
                            {showMore && (
                                <>
                                    <p>
                                        Estou aprofundando meus conhecimentos em <strong>Java e MySQL</strong>, focando no desenvolvimento back-end para criar aplicações <strong>robustas, escaláveis e performáticas</strong>.
                                    </p>
                                    <p>
                                        Sou movido por <strong>resolver problemas, aprender constantemente e transformar desafios em soluções práticas</strong>. Para mim, tecnologia vai além de código — é a ponte entre ideias e resultados concretos.
                                    </p>
                                    <p>
                                        Tenho facilidade em <strong>trabalhar em equipe, encarar desafios complexos e aplicar criatividade em cada projeto</strong>. Prezo por <strong>código limpo, boas práticas e ver ideias saindo do papel e ganhando vida</strong>.
                                    </p>
                                </>
                            )}

                            <p>O que realmente me impulsiona é o <strong>desenvolvimento web</strong>. Se você tem um projeto, uma ideia ou quer turbinar seu sistema, <span className={styles.cta}><a href="#contato">me chama e vamos construir algo incrível juntos!</a></span>.</p>
                            <p>Além disso, você pode baixar o <span className={styles.cta}><a href="/CVJoseSegura.pdf" download>meu currículo</a></span>!</p>
                        </div>

                        <button
                            className={styles.toggleButton}
                            onClick={toggleShowMore}
                            aria-expanded={showMore}
                        >
                            {showMore ? 'Ver menos ▲' : 'Ver mais ▼'}
                        </button>

                    </div>
                </div>
            </section>

            <section className={styles.tecnologias} id='tecnologias'>
                <h1>Tecnologias que mais uso</h1>
                <ul className={styles.tecnologiasContainer}>
                    <li><img src={`${urlTechnologies}java/java-original.svg`} alt="Java" /></li>
                    <li><img src={`${urlTechnologies}javascript/javascript-original.svg`} alt="JavaScript" /></li>
                    <li><img src={`${urlTechnologies}react/react-original.svg`} alt="React" /></li>
                    <li><img src={`${urlTechnologies}mysql/mysql-original.svg`} alt="MySQL" /></li>
                </ul>
            </section>
        </>
    );
};

export default Sobre;
