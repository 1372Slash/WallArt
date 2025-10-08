'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const [isClient, setIsClient] = useState(false);
  
  useEffect(() => {
    setIsClient(true);
  }, []);

  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 500 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  const lastHoveredElement = useRef<Element | null>(null);

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;
      cursorX.set(x - 8);
      cursorY.set(y - 8);

      const interactiveElements = document.querySelectorAll('.cursor-interactive');
      let currentlyHovered = null;

      interactiveElements.forEach(el => {
        const rect = el.getBoundingClientRect();
        if (x >= rect.left && x <= rect.right && y >= rect.top && y <= rect.bottom) {
          currentlyHovered = el;
        }
      });
      
      if (currentlyHovered) {
        if(lastHoveredElement.current !== currentlyHovered) {
            lastHoveredElement.current?.classList.remove('is-hovered');
            currentlyHovered.classList.add('is-hovered');
            lastHoveredElement.current = currentlyHovered;
        }
      } else if(lastHoveredElement.current) {
        lastHoveredElement.current.classList.remove('is-hovered');
        lastHoveredElement.current = null;
      }

    };

    window.addEventListener('mousemove', moveCursor);
    return () => {
      window.removeEventListener('mousemove', moveCursor);
      // Clean up class on unmount
      lastHoveredElement.current?.classList.remove('is-hovered');
    };
  }, [cursorX, cursorY]);

  if (!isClient) return null;

  return (
    <motion.div
      className="hidden md:block fixed w-4 h-4 bg-primary rounded-full pointer-events-none z-[9999]"
      style={{
        translateX: cursorXSpring,
        translateY: cursorYSpring,
      }}
      aria-hidden="true"
    />
  );
};

export default CustomCursor;
