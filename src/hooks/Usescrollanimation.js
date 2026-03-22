import { useEffect, useRef } from 'react';

/**
 * Hook que observa quando o elemento entra na viewport e adiciona
 * a classe CSS 'visible' para disparar a animação de reveal.
 *
 * @param {IntersectionObserverInit} options - Opções do IntersectionObserver
 * @returns {React.RefObject} ref - Attach this ref to the element to animate
 */
export function useScrollAnimation(options = {}) {
    const ref = useRef(null);

    useEffect(() => {
        const element = ref.current;
        if (!element) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    element.classList.add('visible');
                    observer.unobserve(element);
                }
            },
            { threshold: 0.1, ...options }
        );

        observer.observe(element);
        return () => observer.disconnect();
    }, []);

    return ref;
}