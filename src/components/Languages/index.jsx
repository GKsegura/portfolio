import styles from './Languages.module.css';

const colors = {
    PHP: 'rgba(120, 124, 181, 0.5)',
    Blade: 'rgba(240, 82, 64, 0.5)',
    CSS: 'rgba(41, 101, 241 , 0.5)',
    JavaScript: 'rgba(247, 223, 30, 0.5)',
    TypeScript: 'rgba(0, 122, 204, 0.5)',
    CSharp: 'rgba(23, 134, 0 , 0.5)',
    HTML: 'rgba(227, 79, 38, 0.5)',
    CPlusPlus: 'rgba(0, 89, 156, 0.5)',
    SCSS: 'rgba(205, 103, 153, 0.5)',
};

const languageMapping = {
    'C++': 'CPlusPlus',
    'C#': 'CSharp',
};

export default function Language({ lang }) {
    const normalizedLang = languageMapping[lang] || lang;
    const color = colors[normalizedLang] || '#ccc';
    return (
        <span
            className={styles.language}
            style={{ backgroundColor: color }}
        >
            {lang}
        </span>
    );
}
