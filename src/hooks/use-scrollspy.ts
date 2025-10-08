import { useState, useEffect } from 'react';

export function useScrollspy(
  ids: string[],
  options: { offset?: number } = {}
) {
  const [activeId, setActiveId] = useState<string | null>(null);

  useEffect(() => {
    const listener = () => {
      const scroll = window.scrollY;
      const offset = options.offset || 0;

      const position = ids
        .map((id) => {
          const element = document.getElementById(id);
          if (!element) return null;
          return { id, top: element.offsetTop - offset, bottom: element.offsetTop + element.offsetHeight - offset };
        })
        .filter(item => item !== null) as { id: string; top: number, bottom: number }[];
      
      const active = position.find((p) => scroll >= p.top && scroll < p.bottom);
      
      if (active) {
        setActiveId(active.id);
      } else {
        // If no section is active in the main view (e.g. at the very top or bottom),
        // determine the closest one.
        if (position.length > 0 && scroll < position[0].top) {
            setActiveId(null);
        } else if (position.length > 0 && scroll > position[position.length - 1].bottom) {
            setActiveId(position[position.length - 1].id);
        } else {
             setActiveId(null);
        }
      }
    };

    listener();
    window.addEventListener('resize', listener);
    window.addEventListener('scroll', listener, { passive: true });

    return () => {
      window.removeEventListener('resize', listener);
      window.removeEventListener('scroll', listener);
    };
  }, [ids, options.offset]);

  return activeId;
}
