import { formatPeriod } from '@utils/date'
import { getStackEmoji } from '@utils/project'
import React, { useEffect } from 'react'
import ReactDOM from 'react-dom'
import { FaGithub, FaTimes } from 'react-icons/fa'
import styles from './Modal.module.css'

const Modal = ({ projeto, onClose, languages }) => {
    // Fecha com Escape
    useEffect(() => {
        const handleKeyDown = (e) => { if (e.key === 'Escape') onClose() }
        document.addEventListener('keydown', handleKeyDown)
        return () => document.removeEventListener('keydown', handleKeyDown)
    }, [onClose])

    // Trava scroll do body
    useEffect(() => {
        document.body.style.overflow = 'hidden'
        return () => { document.body.style.overflow = '' }
    }, [])

    const content = (
        <div className={styles.overlay} onClick={onClose}>
            <div className={styles.modal} onClick={e => e.stopPropagation()}>

                {/* Cabeçalho: título centralizado + botão fechar */}
                <div className={styles.header}>
                    <h3>{projeto.title}</h3>
                    <button
                        className={styles.closeButton}
                        onClick={onClose}
                        aria-label="Fechar modal"
                    >
                        <FaTimes size={18} />
                    </button>
                </div>

                {/* Corpo em duas colunas */}
                <div className={styles.conteudo}>

                    {/* Coluna esquerda */}
                    <div className={styles.left}>
                        <img
                            src={projeto.image}
                            alt={projeto.title}
                            className={styles.imagem}
                        />

                        {projeto.period && (
                            <small className={styles.period}>
                                {formatPeriod(projeto.period, projeto.status)}
                            </small>
                        )}

                        <ul className={styles.languages}>
                            {projeto.languages.map((tec, index) => {
                                const key = tec.toLowerCase().replace(/\s+/g, '')
                                const iconUrl = languages[key]
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

                    {/* Coluna direita */}
                    <div className={styles.right}>
                        <p>
                            {projeto.description.split('\n').map((line, i) => (
                                <React.Fragment key={i}>{line}<br /></React.Fragment>
                            ))}
                        </p>

                        {projeto.stack && (
                            <div className={styles.stackContainer}>
                                <span className={styles.stack}>
                                    <strong>{getStackEmoji(projeto.stack)} Stack:</strong> {projeto.stack}
                                </span>
                            </div>
                        )}

                        <div className={styles.linkContainer}>
                            <a
                                href={projeto.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={styles.link}
                            >
                                <FaGithub size={16} />
                                Ver projeto no GitHub
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )

    return ReactDOM.createPortal(content, document.body)
}

export default Modal