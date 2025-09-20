import { useState } from 'react';
import languages from '../../../../data/languages.json'; // 👈 importa aqui
import projetosData from '../../../../data/projetos.json';
import Modal from './Modal';
import ProjetoCard from './ProjetoCard';
import styles from './Projetos.module.css';

const getStackEmoji = (stack) => {
    switch (stack.toLowerCase()) {
        case 'full stack': return '🌐';
        case 'front-end': return '💻';
        case 'back-end': return '⚙️';
        default: return '📦';
    }
};

const Projetos = () => {
    const [selectedProjeto, setSelectedProjeto] = useState(null);

    const openModal = (projeto) => setSelectedProjeto(projeto);
    const closeModal = () => setSelectedProjeto(null);

    const sortedProjetos = [...projetosData].sort((a, b) => {
        if (b.year !== a.year) {
            return b.year - a.year;
        }

        if (a.status === "Em desenvolvimento" && b.status !== "Em desenvolvimento") {
            return -1;
        }
        if (b.status === "Em desenvolvimento" && a.status !== "Em desenvolvimento") {
            return 1;
        }

        return a.title.localeCompare(b.title);
    });

    return (
        <section className={styles.projetos} id="projetos">
            <h2>Projetos</h2>
            <div className={styles.projetosContainer}>
                {sortedProjetos.map((projeto) => (
                    <div key={projeto.id}>
                        <ProjetoCard projeto={projeto} onVerMais={() => openModal(projeto)} />
                    </div>
                ))}
            </div>
            {selectedProjeto && (
                <Modal
                    projeto={selectedProjeto}
                    onClose={closeModal}
                    getStackEmoji={getStackEmoji}
                    languages={languages}
                />
            )}
        </section>
    );
};

export default Projetos;
