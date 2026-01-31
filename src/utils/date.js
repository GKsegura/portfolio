const formatPeriod = (period, status) => {
    if (!period?.start) return null;

    if (status === 'Concluído' && period.end) {
        return `Período: ${period.start} - ${period.end}`;
    }

    return `Em andamento desde ${period.start}`;
};

export { formatPeriod };
