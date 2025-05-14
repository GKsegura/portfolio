import styles from './Contato.module.css';

const Contato = () => {
    return (<>
        <section className={styles.contato} id='contato'>
            <h1>Entre em contato</h1>
            <p className={styles.description}>
                Se você tem uma ideia ou precisa de ajuda com um projeto, entre em contato comigo! Estou sempre aberto a novas oportunidades e desafios.
            </p>
            <a href='mailto:josehsegura2004@gmail.com' className={styles.cta}>
                <span className={styles.ctaText}>Enviar e-mail</span>
            </a>
        </section>
    </>)
}

export default Contato;