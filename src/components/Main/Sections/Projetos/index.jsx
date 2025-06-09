import { useState } from 'react';
import projetosData from '../../../../data/projetos.json';
import Modal from './Modal';
import ProjetoCard from './ProjetoCard';
import styles from './Projetos.module.css';

const Projetos = () => {
    const [selectedProjeto, setSelectedProjeto] = useState(null);

    const openModal = (projeto) => setSelectedProjeto(projeto);
    const closeModal = () => setSelectedProjeto(null);

    return (
        <section className={styles.projetos} id="projetos">
            <h2>Projetos</h2>
            <div className={styles.projetosContainer}>
                {projetosData.map((projeto) => (
                    <div key={projeto.id} onClick={() => openModal(projeto)} style={{ cursor: 'pointer' }}>
                        <ProjetoCard projeto={projeto} />
                    </div>
                ))}
            </div>

            {selectedProjeto && (
                <Modal onClose={closeModal}>
                    <h2>{selectedProjeto.title}</h2>
                    <p>{selectedProjeto.description}</p>
                    <button onClick={closeModal}>Fechar</button>
                </Modal>
            )}
        </section>
    );
};

export default Projetos;
