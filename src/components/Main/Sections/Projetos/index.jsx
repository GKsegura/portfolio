import projetosData from '../../../../data/projetos.json';
import ProjetoCard from './ProjetoCard';
import styles from './Projetos.module.css';


const Projetos = () => {
    return (
        <section className={styles.projetos} id="projetos">
            <h2>Projetos</h2>
            <div className={styles.projetosContainer}>
                {projetosData.map((projeto) => (
                    <ProjetoCard key={projeto.id} projeto={projeto} />
                ))}
            </div>
        </section>
    );
};

export default Projetos;