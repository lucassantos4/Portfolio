import { useEffect, useRef } from 'react';

/**
 * Hook que adiciona a classe 'revealed' a elementos quando entram no viewport.
 * Usa IntersectionObserver como mecanismo primário e scroll listener como fallback
 * para compatibilidade com Chrome + React StrictMode.
 */
export function useScrollReveal({ threshold = 0, rootMargin = '0px 0px -50px 0px' } = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el || el.classList.contains('revealed')) return;

    let active = true;

    const reveal = () => {
      if (!active || el.classList.contains('revealed')) return;
      el.classList.add('revealed');
      active = false;
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };

    const checkVisibility = () => {
      if (!active || el.classList.contains('revealed')) return;
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        reveal();
      }
    };

    // Primário: IntersectionObserver
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) reveal();
      },
      { threshold, rootMargin }
    );
    observer.observe(el);

    // Fallback: scroll listener (resolve edge cases do Chrome + StrictMode)
    const handleScroll = () => checkVisibility();
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Verificação imediata para elementos já visíveis no viewport
    checkVisibility();

    return () => {
      active = false;
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [threshold, rootMargin]);

  return ref;
}
