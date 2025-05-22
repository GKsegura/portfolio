import { FaGithub } from 'react-icons/fa';
import styles from './Projetos.module.css';

const ProjetoCard = ({ projeto }) => {
    return (
        <div className={styles.projeto}>
            <h3>{projeto.title}</h3>

            <div className={styles.projetoConteudo}>
                <div className={styles.projetoImagem}>
                    <img src={projeto.image} alt={projeto.title} />
                </div>

                <div className={styles.projetoInfo}>
                    <p>{projeto.description}</p>
                    <ul className={styles.languages}>
                        {projeto.languages.map((tec, index) => (
                            <li key={index}>{tec}</li>
                        ))}
                    </ul>
                </div>
            </div>

            <a
                href={projeto.link}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.botao}
            >
                <FaGithub className={styles.icon} />
                Ver projeto
            </a>
        </div>
    );
};

export default ProjetoCard;
