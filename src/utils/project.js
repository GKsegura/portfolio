const statusPriority = {
    'Em uso ativo': 1,
    'Em desenvolvimento': 2,
    'Concluído': 3,
    'Em evolução': 4,
    'Pausado': 5
};

const getRelevantYear = (projeto) => {
    if (projeto.status === 'Concluído') {
        return projeto.period?.end ?? projeto.period?.start;
    }

    return projeto.period?.start;
};

const sortProjetos = (projetos) => {
    return [...projetos].sort((a, b) => {
        // prioridade por status
        const statusDiff =
            statusPriority[a.status] - statusPriority[b.status];

        if (statusDiff !== 0) return statusDiff;

        // ano mais recente primeiro
        const yearA = getRelevantYear(a) ?? 0;
        const yearB = getRelevantYear(b) ?? 0;

        if (yearB !== yearA) return yearB - yearA;

        // fallback alfabético
        return a.title.localeCompare(b.title);
    });
};

const getStackEmoji = (stack) => {
    switch (stack.toLowerCase()) {
        case 'full stack': return '🌐';
        case 'front-end': return '💻';
        case 'back-end': return '⚙️';
        default: return '📦';
    }
};

export { getStackEmoji, sortProjetos };
