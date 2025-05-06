import Language from '../Languages';
import styles from './ProjectCard.module.css';

export default function ProjectCard({ name, description, url, languages }) {
    return (
        <div className={styles.card}>
            <div className={styles.header}>
                <h2 className={styles.title}>{name}</h2>
                <p className={styles.description}>
                    {description || 'Sem descrição'}
                </p>
            </div>
            <div className={styles.languages}>
                {languages.length > 0 ? (
                    languages.map(([lang]) => (
                        <Language key={lang} lang={lang} />
                    ))
                ) : (
                    <span className={styles.language}>Sem linguagens</span>
                )}
            </div>
            <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.button}
            >
                Ver no GitHub →
            </a>
        </div>
    );
}
