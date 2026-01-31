import languages from '../../../../../data/languages.json';
import { formatPeriod } from '../../../../../utils/date';
import styles from './ProjetoCard.module.css';

const getStackEmoji = (stack) => {
    switch (stack.toLowerCase()) {
        case 'full stack': return '🌐';
        case 'front-end': return '💻';
        case 'back-end': return '⚙️';
        default: return '📦';
    }
};

const ProjetoCard = ({ projeto, onVerMais }) => {
    return (
        <div className={styles.projeto}>
            <h3>{projeto.title}</h3>
            <div className={styles.projetoConteudo}>
                <div className={styles.mediaSection}>
                    <img src={projeto.image} alt={projeto.title} className={styles.projetoImage} />
                    {projeto.period && (
                        <small className={styles.year}>
                            {formatPeriod(projeto.period, projeto.status)}
                        </small>
                    )}
                    <ul className={styles.languages}>
                        {projeto.languages.map((tec, index) => {
                            const normalizedKey = tec.toLowerCase().replace(/\s+/g, '');
                            const iconUrl = languages[normalizedKey];
                            return (
                                <li key={index}>
                                    {iconUrl && <img src={iconUrl} alt={tec} onError={(e) => (e.target.style.display = 'none')} />}
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
                <div className={styles.contentSection}>
                    <div className={styles.stackContainer}>
                        {projeto.stack && (
                            <span className={styles.stack}>
                                <strong>{getStackEmoji(projeto.stack)} Stack:</strong> {projeto.stack}
                            </span>
                        )}
                    </div>
                    <div className={styles.linkContainer}>
                        <button
                            className={styles.link}
                            onClick={(e) => {
                                e.stopPropagation();
                                onVerMais();
                            }}
                        >
                            Ver mais
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProjetoCard;
