import { useScrollAnimation } from '@/hooks/Usescrollanimation'
import { FaEnvelope, FaWhatsapp } from 'react-icons/fa'
import styles from './Contato.module.css'

const Contato = () => {
    const sectionRef = useScrollAnimation({ threshold: 0.1 })

    const phone = '5514988198485'
    const message = 'Olá, José! Vi seu portfólio e gostaria de conversar!'
    const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`

    return (
        <section ref={sectionRef} className={`${styles.contato} reveal`} id='contato'>
            <h1>Entre em contato</h1>
            <p className={styles.description}>
                Se você tem uma ideia ou precisa de ajuda com um projeto, entre em contato comigo! Estou sempre aberto a novas oportunidades e desafios.
            </p>

            <div className={styles.links}>
                <a href='mailto:jose.segura.ms@gmail.com' className={styles.cta}>
                    <FaEnvelope className={styles.icon} />
                    <span className={styles.ctaText}>Enviar e-mail</span>
                </a>

                <a href={whatsappLink} target="_blank" rel="noopener noreferrer" className={styles.cta}>
                    <FaWhatsapp className={styles.icon} />
                    <span className={styles.ctaText}>Falar no WhatsApp</span>
                </a>
            </div>
        </section>
    )
}

export default Contato