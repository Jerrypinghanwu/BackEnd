import { useRef, useState, useEffect } from 'react';

/**
 * Lightweight replacement for framer-motion's useInView + whileInView.
 * Uses native IntersectionObserver for zero-JS-animation overhead.
 * 
 * @param {Object} options
 * @param {boolean} options.once - Only trigger once (default: true)
 * @param {string} options.margin - Root margin (default: '-80px')
 * @returns {{ ref: React.RefObject, isInView: boolean }}
 */
export function useInViewAnimation({ once = true, margin = '-80px' } = {}) {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          if (once) observer.unobserve(el);
        } else if (!once) {
          setIsInView(false);
        }
      },
      { rootMargin: margin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [once, margin]);

  return { ref, isInView };
}
