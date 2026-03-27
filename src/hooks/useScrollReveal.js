import { useEffect, useRef } from 'react';

/**
 * Hook que adiciona a classe 'revealed' a elementos quando entram no viewport.
 * @param {object} options - Opções do IntersectionObserver
 * @param {number} options.threshold - % visível para disparar (0 a 1)
 * @param {string} options.rootMargin - Margem do viewport
 */
export function useScrollReveal({ threshold = 0.15, rootMargin = '0px 0px -60px 0px' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add('revealed');
          observer.unobserve(el);
        }
      },
      { threshold, rootMargin }
    );

    observer.observe(el);

    return () => observer.disconnect();
  }, [threshold, rootMargin]);

  return ref;
}
