import ProjetoCard from './ProjetoCard';
import styles from './Projetos.module.css';

const ProjetosData = [
    {
        id: 1,
        title: 'QInvest',
        description: 'Plataforma de educação financeira voltada para jovens. Inclui gráficos de ações em tempo real, questionário de perfil investidor e indicações de investimentos personalizadas. Trabalho de conclusão de curso (TCC) desenvolvido no terceiro ano do curso de técnico em informática.',
        link: 'https://github.com/GKsegura/qinvest-web',
        image: 'src/assets/QInvest.png',
        languages: ['Laravel', 'JavaScript', 'CSS', 'PostgreSQL', 'Node.js'],
    },
    {
        id: 2,
        title: 'EcoTube',
        description: 'E-commerce de canudos de vidro desenvolvido durante o segundo ano do curso de técnico em informática. Inclui funcionalidades como carrinho de compras, login de usuário e painel administrativo.',
        link: 'https://github.com/GKsegura/EcoTube',
        image: 'src/assets/ecotube.png',
        languages: ['PHP', 'CSS', 'JavaScript', 'PostgreSQL'],
    },
    {
        id: 3,
        title: 'ignite-timer',
        description: 'Aplicativo pomodoro. Inclui cronômetro, timer e histórico de atividades. Projeto desenvolvido durante o curso de ReactJS da Rocketseat.',
        link: 'https://github.com/GKsegura/ignite-timer',
        image: 'src/assets/ignite-timer.png',
        languages: ['React', 'TypeScript', 'JavaScript', 'CSS'],
    },
    {
        id: 4,
        title: 'todo-app-ts',
        description: 'Aplicativo de gerenciamento de tarefas, desenvolvido com React e TypeScript, com foco em produtividade e uma interface limpa. Funcionalidades: Adicionar e deletar tarefas. UI moderna e responsiva e com gerenciamento de estado React Hooks',
        link: 'https://github.com/GKsegura/todo-app-ts',
        image: 'src/assets/todo.png',
        languages: ['React', 'TypeScript', 'JavaScript', 'CSS'],
    },
    {
        id: 5,
        title: 'horta inteligente',
        description: 'Horta Inteligente com Arduino Projeto de automação para cultivo com sensor de umidade do solo, display LCD para monitoramento em tempo real e controle automático da irrigação via relé e bomba d’água.',
        link: 'https://github.com/GKsegura/horta-inteligente',
        image: '/src/assets/horta-inteligente.jpg',
        languages: ['Arduino', 'C++'],
    }
]

const Projetos = () => {
    return (
        <section className={styles.projetos} id="projetos">
            <h2>Projetos</h2>
            <div className={styles.projetosContainer}>
                {ProjetosData.map((projeto) => (
                    <ProjetoCard key={projeto.id} projeto={projeto} />
                ))}
            </div>
        </section>
    );
};

export default Projetos;