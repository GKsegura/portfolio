import languages from '@data/languages.json'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { formatPeriod } from '@utils/date'
import { getStackEmoji } from '@utils/project'
import { FaGithub } from 'react-icons/fa'
import styles from './ProjetoCard.module.css'

const ProjetoCard = ({ projeto, onVerMais, animationDelay = 0 }) => {
    const cardRef = useScrollAnimation({ threshold: 0.08 })

    return (
        <div
            ref={cardRef}
            className={`${styles.projeto} reveal`}
            style={{ transitionDelay: `${animationDelay}ms` }}
            onClick={onVerMais}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') onVerMais() }}
            aria-label={`Ver detalhes do projeto ${projeto.title}`}
        >
            <h3>{projeto.title}</h3>

            <div className={styles.projetoConteudo}>
                <div className={styles.mediaSection}>
                    <img
                        src={projeto.image || DEFAULT_IMAGE}
                        alt={projeto.title}
                        className={styles.projetoImage}
                        onError={(e) => { e.target.src = DEFAULT_IMAGE; }}
                    />

                    {projeto.period && (
                        <small className={styles.year}>
                            {formatPeriod(projeto.period, projeto.status)}
                        </small>
                    )}

                    <ul className={styles.languages}>
                        {projeto.languages.map((tec, index) => {
                            const normalizedKey = tec.toLowerCase().replace(/\s+/g, '')
                            const iconUrl = languages[normalizedKey]
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
                            )
                        })}
                    </ul>

                    {projeto.status && (
                        <span className={`${styles.status} ${styles[projeto.status.toLowerCase().replace(/\s/g, '')]}`}>
                            {projeto.status}
                        </span>
                    )}
                </div>

                <div className={styles.contentSection}>
                    {projeto.shortDescription && (
                        <p className={styles.shortDescription}>{projeto.shortDescription}</p>
                    )}

                    <div className={styles.stackContainer}>
                        {projeto.stack && (
                            <span className={styles.stack}>
                                <strong>{getStackEmoji(projeto.stack)} Stack:</strong> {projeto.stack}
                            </span>
                        )}
                    </div>

                    <div className={styles.linkContainer}>
                        <a
                            href={projeto.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={styles.link}
                            onClick={(e) => e.stopPropagation()}
                            aria-label={`Abrir ${projeto.title} no GitHub`}
                        >
                            <FaGithub size={14} />
                            GitHub
                        </a>

                        <button
                            className={styles.verMaisButton}
                            onClick={(e) => { e.stopPropagation(); onVerMais() }}
                        >
                            Ver mais
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProjetoCard