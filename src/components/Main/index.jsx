import Contato from '@components/Main/Sections/Contato'
import Projetos from '@components/Main/Sections/Projetos'
import Sobre from '@components/Main/Sections/Sobre'
import styles from './Main.module.css'

export default function Main() {
    return (
        <main className={styles.main}>
            <Sobre />
            <Projetos />
            <Contato />
        </main>
    )
}