import { useState } from 'react';
import languages from '../../../../data/languages.json';
import projetosData from '../../../../data/projetos.json';
import { sortProjetos } from '../../../../utils/project';
import Modal from './Modal';
import ProjetoCard from './ProjetoCard';
import styles from './Projetos.module.css';




const Projetos = () => {
    const [selectedProjeto, setSelectedProjeto] = useState(null);

    const sortedProjetos = sortProjetos(projetosData);

    return (
        <section className={styles.projetos} id="projetos">
            <h2>Projetos</h2>

            <div className={styles.projetosContainer}>
                {sortedProjetos.map((projeto) => (
                    <ProjetoCard
                        key={projeto.id}
                        projeto={projeto}
                        onVerMais={() => setSelectedProjeto(projeto)}
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
    );
};


export default Projetos;
