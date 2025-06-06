import React from 'react';
import { FaGithub } from 'react-icons/fa';
import languages from '../../../../../data/languages.json';
import styles from './ProjetoCard.module.css';

const getStackEmoji = (stack) => {
    switch (stack.toLowerCase()) {
        case 'full stack': return '🌐';
        case 'front-end': return '💻';
        case 'back-end': return '⚙️';
        default: return '📦';
    }
};


const ProjetoCard = ({ projeto }) => {
    return (
        <div className={styles.projeto}>

            {/* {HEADER} */}

            <h3>{projeto.title}</h3>
            <div className={styles.projetoConteudo}>

                {/* LADO ESQUERDO */}

                <div className={styles.left}>
                    <img src={projeto.image} alt={projeto.title} id={styles.projetoImage} />
                    {projeto.year && <small className={styles.year}>Desenvolvido em: {projeto.year}</small>}
                    <ul className={styles.languages}>
                        {projeto.languages.map((tec, index) => {
                            const normalizedKey = tec.toLowerCase().replace(/\s+/g, '');
                            const iconUrl = languages[normalizedKey];
                            return (
                                <li key={index}>
                                    {iconUrl && (
                                        <img
                                            src={iconUrl}
                                            alt={tec}
                                            onError={(e) => (e.target.style.display = 'none')}
                                        />
                                    )}
                                    {tec}
                                </li>
                            );
                        })}
                    </ul>
                    {projeto.status && (
                        <span className={`${styles.status} ${styles[projeto.status.toLowerCase().replace(/\s/g, '')]}`}>
                            {projeto.status}
                        </span>
                    )}
                </div>

                {/* LADO DIREITO */}

                <div className={styles.right}>
                    <p>
                        {projeto.description.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    <div className={styles.stackContainer}>
                        {projeto.stack && (
                            <span className={styles.stack}>
                                <strong>{getStackEmoji(projeto.stack)} Stack:</strong>{' '}{projeto.stack}
                            </span>
                        )}
                    </div>
                    <div className={styles.linkContainer}>
                        <a
                            href={projeto.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                        >
                            <FaGithub className={styles.icon} />
                            Ver projeto
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjetoCard;
