import styles from './Sobre.module.css';
const urlTechnologies = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/';

const Sobre = () => {
    return (
        <>
            <section className={styles.intro} id="sobre">
                <div className={styles.introContainer}>
                    <div className={styles.imgDev}>
                        <img src="https://github.com/GKsegura.png" alt="Foto de perfil do José Segura" />
                    </div>
                    <div className={styles.textContent}>
                        <h1>
                            Olá, eu sou o <span className={styles.highlight}>José Segura</span> 👨‍💻
                        </h1>
                        <p className={styles.description}>
                            <strong>Desenvolvedor full-stack</strong>.<br /><br />
                            Tenho experiência prática com <strong>JavaScript, React, Java, PHP (Laravel), C#, PostgreSQL e MySQL</strong>. Já desenvolvi <strong>e-commerces, plataformas de investimentos e sistemas com dashboards interativos</strong> consumindo APIs e renderizando gráficos em tempo real.<br /><br />
                            Gosto de <strong>trabalhar em equipe, resolver problemas complexos</strong> e aplicar criatividade em cada entrega. Curto desafios, curto código limpo e curto ver projetos ganhando vida!<br /><br />
                            Mas o que me move mesmo é o <strong>desenvolvimento web</strong>. Se você tem uma ideia ou precisa dar um gás no seu sistema, <span className={styles.cta}> <a href="#contato">me chama e bora construir algo incrível!</a></span>
                        </p>
                    </div>
                </div>
            </section>
            <section className={styles.tecnologias} id='tecnologias'>
                <h1>Tecnologias que uso</h1>
                <p className={styles.description}>
                    Aqui estão algumas das tecnologias que utilizo no meu dia a dia:
                </p>
                <div className={styles.tecnologiasContainer}>
                    <img src={`${urlTechnologies}javascript/javascript-original.svg`} alt="JavaScript" />
                    <img src={`${urlTechnologies}react/react-original.svg`} alt="React" />
                    <img src={`${urlTechnologies}java/java-original.svg`} alt="Java" />
                    <img src={`${urlTechnologies}php/php-original.svg`} alt="PHP" />
                    <img src={`${urlTechnologies}laravel/laravel-original.svg`} alt="Laravel" />
                    <img src={`${urlTechnologies}csharp/csharp-original.svg`} alt="C#" />
                    <img src={`${urlTechnologies}postgresql/postgresql-original.svg`} alt="PostgreSQL" />
                    <img src={`${urlTechnologies}mysql/mysql-original.svg`} alt="MySQL" />
                </div>
            </section>
        </>
    )
}

export default Sobre;