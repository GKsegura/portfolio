import React from 'react';
import { FaGithub } from 'react-icons/fa';
import styles from './Projetos.module.css';

const languages = {
    javascript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/javascript/javascript-original.svg',
    react: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/react/react-original.svg',
    java: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/java/java-original.svg',
    php: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/php/php-original.svg',
    laravel: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/laravel/laravel-original.svg',
    csharp: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/csharp/csharp-original.svg',
    postgresql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/postgresql/postgresql-original.svg',
    mysql: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/mysql/mysql-original.svg',
    typescript: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/typescript/typescript-original.svg',
    css: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/css3/css3-original.svg',
    html: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/html5/html5-original.svg',
    node: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/nodejs/nodejs-original.svg',
    springboot: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/spring/spring-original.svg',
    maven: 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/maven/maven-original.svg',
};

const ProjetoCard = ({ projeto }) => {
    return (
        <div className={styles.projeto}>
            <h3>{projeto.title}</h3>
            <div className={styles.projetoConteudo}>
                <div className={styles.projetoImagem}>
                    <img src={projeto.image} alt={projeto.title} />
                </div>
                <div className={styles.projetoInfo}>
                    <p>
                        {projeto.description.split('\n').map((line, index) => (
                            <React.Fragment key={index}>
                                {line}
                                <br />
                            </React.Fragment>
                        ))}
                    </p>
                    {projeto.year && <small className={styles.year}>Desenvolvido em: {projeto.year}</small>}
                    {projeto.stack && (
                        <span className={styles.stack}>
                            <strong>
                                {projeto.stack.toLowerCase() === 'full stack'
                                    ? '🌐'
                                    : projeto.stack.toLowerCase() === 'front-end'
                                        ? '💻'
                                        : projeto.stack.toLowerCase() === 'back-end'
                                            ? '⚙️'
                                            : '📦'}
                                {' Stack:'}
                            </strong>{' '}
                            {projeto.stack}
                        </span>
                    )}
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
                </div>

            </div>
            <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.botao}
            >
                <FaGithub className={styles.icon} />
                Ver projeto
            </a>
        </div>
    );
};

export default ProjetoCard;
