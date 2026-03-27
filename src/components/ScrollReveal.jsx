import { useScrollReveal } from '../hooks/useScrollReveal';

/**
 * Wrapper de animação ao scroll.
 * Direções: up | down | left | right | scale | wipe | diagonal | flip | spread
 */
export function ScrollReveal({ children, className = '', direction = 'up', delay = 0, threshold, rootMargin, as: Tag = 'div' }) {
  const ref = useScrollReveal({ threshold, rootMargin });

  const dirClass = `reveal-${direction}`;
  const delayClass = delay > 0 ? `reveal-delay-${delay}` : '';

  return (
    <Tag ref={ref} className={`reveal ${dirClass} ${delayClass} ${className}`}>
      {children}
    </Tag>
  );
}
