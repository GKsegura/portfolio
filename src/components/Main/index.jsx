import { useEffect, useState } from 'react';
import { fetchReposWithLanguages } from '../../utils/api';
import ProjectCard from '../ProjectCard';
import styles from './Main.module.css';

export default function Main() {
    const [repos, setRepos] = useState([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        const controller = new AbortController();
        const signal = controller.signal;
        fetchReposWithLanguages(signal)
            .then((reposData) => {
                const sortedRepos = reposData.sort((a, b) => {
                    if (a.name.toLowerCase() < b.name.toLowerCase()) return -1;
                    if (a.name.toLowerCase() > b.name.toLowerCase()) return 1;
                    return 0;
                });
                setRepos(sortedRepos);
                setLoading(false);
            })
            .catch((err) => {
                if (err.name !== 'AbortError') {
                    console.error('Erro ao carregar os projetos:', err);
                }
            });
        return () => controller.abort();
    }, []);

    return (
        <main className={styles.main}>
            <section className={styles.intro}>
                <h1>
                    Olá, eu sou o <span className={styles.highlight}>José Segura</span> 👨‍💻
                </h1>
                <p className={styles.description}>
                    <strong>Desenvolvedor full-stack e freelancer</strong>, apaixonado por transformar ideias em soluções web modernas, rápidas e funcionais.<br /><br />
                    Tenho experiência prática com <strong>PHP (Laravel), Java, C#, React, JavaScript, PostgreSQL e MySQL</strong>. Já desenvolvi <strong>e-commerces, plataformas de investimentos e sistemas com dashboards interativos</strong> consumindo APIs e renderizando gráficos em tempo real.<br /><br />
                    Gosto de <strong>trabalhar em equipe, resolver problemas complexos</strong> e aplicar criatividade em cada entrega. Curto desafios, curto código limpo e curto ver projetos ganhando vida!<br /><br />
                    Também já atuei em projetos com automação e robótica, e tenho vivência com processos BPM. Mas o que me move mesmo é o <strong>desenvolvimento web</strong>. Se você tem uma ideia ou precisa dar um gás no seu sistema, <span className={styles.cta}>me chama e bora construir algo incrível!</span>
                </p>
            </section>
            <section className={styles.projetos}>
                <h1>Todos projetos do GitHub</h1>
                {loading ? (
                    <p>Carregando projetos...</p>
                ) : (
                    <>
                        {repos.map((repo) => (
                            <ProjectCard
                                key={repo.id}
                                name={repo.name}
                                description={repo.description}
                                url={repo.html_url}
                                languages={repo.languages}
                            />
                        ))}
                    </>
                )}
            </section>
        </main>
    );
}
