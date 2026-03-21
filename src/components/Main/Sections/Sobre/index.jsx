import { useState } from 'react';
import sobreData from '../../../../data/sobre.json';
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
                            Olá, eu sou o <span className={styles.highlight}>{sobreData.intro.nome}</span>
                        </h1>

                        {sobreData.intro.subtitulo && (
                            <p className={styles.subtitulo}>{sobreData.intro.subtitulo}</p>
                        )}

                        <div className={styles.description}>
                            {sobreData.intro.paragrafos
                                .filter(p => p.visivel || showMore)
                                .map(paragrafo => (
                                    <p key={paragrafo.id} dangerouslySetInnerHTML={{ __html: paragrafo.texto }} />
                                ))}

                            <p>
                                {sobreData.intro.cta.texto}
                                {sobreData.intro.cta.destaque && <strong>{sobreData.intro.cta.destaque}</strong>}
                                {sobreData.intro.cta.textoContinuacao}
                                <span className={styles.cta}>
                                    <a href={sobreData.intro.cta.linkHref}>
                                        {sobreData.intro.cta.linkTexto}
                                    </a>
                                </span>
                            </p>

                            <p>
                                {sobreData.intro.curriculo.texto}
                                <span className={styles.cta}>
                                    <a href={sobreData.intro.curriculo.linkHref} download>
                                        {sobreData.intro.curriculo.linkTexto}
                                    </a>
                                </span>
                                !
                            </p>
                        </div>

                        <button
                            className={styles.toggleButton}
                            onClick={toggleShowMore}
                            aria-expanded={showMore}
                        >
                            {showMore ? sobreData.botoes.verMenos : sobreData.botoes.verMais}
                        </button>
                    </div>
                </div>
            </section>

            <section className={styles.tecnologias} id='tecnologias'>
                <h1>{sobreData.tecnologias.titulo}</h1>
                <ul className={styles.tecnologiasContainer}>
                    {sobreData.tecnologias.lista.map(tech => (
                        <li key={tech.nome}>
                            <img src={`${urlTechnologies}${tech.icone}`} alt={tech.nome} />
                            <span className={styles.techNome}>{tech.nome}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </>
    );
};

export default Sobre;