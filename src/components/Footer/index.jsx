import styles from './Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <p>Desenvolvido com 💻 e ☕ por José Segura © {new Date().getFullYear()}</p>
            <div className={styles.socials}>
                <a href="https://github.com/GKsegura" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="mailto:jose.segura.ms@gmail.com">Email</a>
                {/* Adicione outras redes se quiser, tipo LinkedIn */}
            </div>
        </footer>
    );
}
