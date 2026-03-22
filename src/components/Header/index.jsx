import { useEffect, useState } from 'react'
import styles from './Header.module.css'

export default function Header() {
    const [isOpen, setIsOpen] = useState(false)

    useEffect(() => {
        if (!isOpen) return
        const handleClickOutside = (e) => {
            if (!e.target.closest('header')) setIsOpen(false)
        }
        document.addEventListener('click', handleClickOutside)
        return () => document.removeEventListener('click', handleClickOutside)
    }, [isOpen])

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 768) setIsOpen(false)
        }
        window.addEventListener('resize', handleResize)
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const handleNavClick = () => setIsOpen(false)

    return (
        <header className={styles.header}>
            <div className={styles.logo}>&lt;/&gt; José Segura<span className={styles.ponto}>.</span></div>

            <button
                className={`${styles.hamburger} ${isOpen ? styles.hamburgerOpen : ''}`}
                onClick={(e) => { e.stopPropagation(); setIsOpen(!isOpen) }}
                aria-label={isOpen ? 'Fechar menu' : 'Abrir menu'}
                aria-expanded={isOpen}
            >
                <span></span>
                <span></span>
                <span></span>
            </button>

            <nav className={`${styles.nav} ${isOpen ? styles.navOpen : ''}`}>
                <a href="#sobre" onClick={handleNavClick}>Sobre</a>
                <a href="#projetos" onClick={handleNavClick}>Projetos</a>
                <a href="#contato" onClick={handleNavClick}>Contato</a>
            </nav>
        </header>
    )
}