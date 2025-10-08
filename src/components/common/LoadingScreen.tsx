'use client';
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import SlashLogo from './SlashLogo';

const LoadingScreen = ({ onAnimationComplete }: { onAnimationComplete: () => void }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const panelsRef = useRef<HTMLDivElement[]>([]);
  const logoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline({
      onComplete: () => {
        onAnimationComplete();
        gsap.to('main', { opacity: 1, duration: 0.6, ease: 'easeOut' });
      },
    });

    gsap.set(logoRef.current, { opacity: 0, y: 20 });
    gsap.set(panelsRef.current, { yPercent: 100 });

    tl.to(panelsRef.current, {
      yPercent: 0,
      stagger: 0.05,
      duration: 0.6,
      ease: 'power3.out',
    })
    .to(logoRef.current, {
        opacity: 1,
        y: 0,
        duration: 0.5,
        ease: 'power3.out'
    }, "-=0.3")
    .to(logoRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.5,
        ease: 'power3.in'
    }, '+=1')
    .to(
      panelsRef.current,
      {
        yPercent: -100,
        stagger: 0.05,
        duration: 0.6,
        ease: 'power3.in',
      },
      "-=0.5"
    )
    .set(containerRef.current, {
      display: 'none',
    });
  }, [onAnimationComplete]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[100] overflow-hidden bg-background">
      <div className="absolute inset-0 flex items-center justify-center z-20" ref={logoRef}>
        <SlashLogo className="text-background !h-12"/>
      </div>
      <div className="relative w-full h-full">
        {[...Array(5)].map((_, i) => (
          <div
            key={i}
            ref={(el) => (panelsRef.current[i] = el!)}
            className="absolute top-0 h-full w-[20.1vw] bg-primary"
            style={{ left: `${i * 20}vw` }}
          />
        ))}
      </div>
    </div>
  );
};

export default LoadingScreen;
