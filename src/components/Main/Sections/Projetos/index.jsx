import languages from '@data/languages.json'
import projetosData from '@data/projetos.json'
import { useScrollAnimation } from '@hooks/useScrollAnimation'
import { sortProjetos } from '@utils/project'
import { useState } from 'react'
import Modal from './Modal'
import ProjetoCard from './ProjetoCard'
import styles from './Projetos.module.css'

const Projetos = () => {
    const [selectedProjeto, setSelectedProjeto] = useState(null)
    const sectionRef = useScrollAnimation({ threshold: 0.05 })

    const sortedProjetos = sortProjetos(projetosData)

    return (
        <section ref={sectionRef} className={`${styles.projetos} reveal`} id="projetos">
            <h2>Projetos</h2>

            <div className={styles.projetosContainer}>
                {sortedProjetos.map((projeto, index) => (
                    <ProjetoCard
                        key={projeto.id}
                        projeto={projeto}
                        onVerMais={() => setSelectedProjeto(projeto)}
                        animationDelay={index * 120}
                    />
                ))}
            </div>

            {selectedProjeto && (
                <Modal
                    projeto={selectedProjeto}
                    onClose={() => setSelectedProjeto(null)}
                    languages={languages}
                />
            )}
        </section>
    )
}

export default Projetos