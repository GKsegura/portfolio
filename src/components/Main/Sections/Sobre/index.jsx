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
                        <p className={styles.description}>
                            <strong>Desenvolvedor Full-Stack</strong>.<br /><br />
                            Tenho experiência prática com <strong>JavaScript, React, Java, PHP (Laravel), PostgreSQL e MySQL</strong>. Ao longo da minha trajetória acadêmica, desenvolvi <strong>projetos como e-commerces, plataformas de investimentos e sistemas com dashboards interativos</strong>, lidando com integração de APIs e <strong>renderização de dados e gráficos em tempo real</strong>.<br />
                            Atualmente, atuo como Analista de Suporte Nível 1, oferecendo soluções técnicas, garantindo a eficiência dos processos e suporte aos usuários.<br /><br />

                            {showMore && (
                                <>
                                    Estou aprofundando meus conhecimentos em <strong>Java e MySQL</strong>, focando no desenvolvimento back-end para criar aplicações <strong>robustas, escaláveis e performáticas</strong>.<br /><br />
                                    Sou movido por <strong>resolver problemas, aprender constantemente e transformar desafios em soluções práticas</strong>. Para mim, tecnologia vai além de código — é a ponte entre ideias e resultados concretos.<br /><br />
                                    Tenho facilidade em <strong>trabalhar em equipe, encarar desafios complexos e aplicar criatividade em cada projeto</strong>. Prezo por <strong>código limpo, boas práticas e ver ideias saindo do papel e ganhando vida</strong>.<br /><br />
                                </>
                            )}

                            O que realmente me impulsiona é o <strong>desenvolvimento web</strong>. Se você tem um projeto, uma ideia ou quer turbinar seu sistema, <span className={styles.cta}><a href="#contato">me chama e vamos construir algo incrível juntos!</a></span>.<br /><br />
                            Além disso, você pode baixar o <span className={styles.cta}><a href="/CVJoseSegura.pdf" download>meu currículo</a></span>!
                        </p>

                        <button
                            className={styles.toggleButton}
                            onClick={toggleShowMore}
                        >
                            {showMore ? 'Ver menos ▲' : 'Ver mais ▼'}
                        </button>
                    </div>
                </div>
            </section>

            <section className={styles.tecnologias} id='tecnologias'>
                <h1>Tecnologias que mais uso</h1>
                <div className={styles.tecnologiasContainer}>
                    <img src={`${urlTechnologies}java/java-original.svg`} alt="Java" />
                    <img src={`${urlTechnologies}javascript/javascript-original.svg`} alt="JavaScript" />
                    <img src={`${urlTechnologies}react/react-original.svg`} alt="React" />
                    <img src={`${urlTechnologies}mysql/mysql-original.svg`} alt="MySQL" />
                </div>
            </section>
        </>
    );
};

export default Sobre;
