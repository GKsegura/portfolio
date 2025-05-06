// src/api.js
const TOKEN = import.meta.env.VITE_GITHUB_TOKEN;

export async function fetchReposWithLanguages(signal) {
    try {
        const res = await fetch('https://api.github.com/users/gksegura/repos', {
            headers: {
                Authorization: `Bearer ${TOKEN}`,
            },
            signal,
        });

        const data = await res.json();
        const filtered = data.filter((repo) => !repo.fork);

        const reposWithLang = await Promise.all(
            filtered.map(async (repo) => {
                try {
                    const langRes = await fetch(repo.languages_url, {
                        headers: {
                            Authorization: `Bearer ${TOKEN}`,
                        },
                        signal,
                    });
                    const langData = await langRes.json();
                    const languages = Object.entries(langData); // Retorna todas as linguagens

                    return {
                        ...repo,
                        languages,
                    };
                } catch (err) {
                    if (err.name !== 'AbortError') {
                        console.error(`Erro ao buscar linguagens do repo ${repo.name}:`, err);
                    }
                    return {
                        ...repo,
                        languages: [],
                    };
                }
            })
        );

        return reposWithLang;
    } catch (err) {
        if (err.name !== 'AbortError') {
            console.error('Erro na requisição principal:', err);
        }
        throw err;
    }
}
