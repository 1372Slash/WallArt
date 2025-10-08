'use client';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

type AnimatedButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

const AnimatedButton = ({ href, children, className }: AnimatedButtonProps) => {
    const holdTimeout = useRef<NodeJS.Timeout | null>(null);
    const buttonRef = useRef<HTMLAnchorElement>(null);

    useEffect(() => {
        const node = buttonRef.current;
        if (!node) return;

        const observer = new MutationObserver(mutations => {
            mutations.forEach(mutation => {
                if (mutation.attributeName === 'class') {
                    const target = mutation.target as HTMLElement;
                    if (target.classList.contains('is-hovered')) {
                        // Start the timer
                        if (!holdTimeout.current) {
                           holdTimeout.current = setTimeout(() => {
                                window.open(href, '_blank', 'noopener,noreferrer');
                            }, 1600);
                        }
                    } else {
                        // Clear the timer
                        if (holdTimeout.current) {
                            clearTimeout(holdTimeout.current);
                            holdTimeout.current = null;
                        }
                    }
                }
            });
        });

        observer.observe(node, { attributes: true });

        return () => {
            observer.disconnect();
            if (holdTimeout.current) {
                clearTimeout(holdTimeout.current);
            }
        };
    }, [href]);

    const handleClick = (e: React.MouseEvent) => {
        e.preventDefault();
        window.open(href, '_blank', 'noopener,noreferrer');
    }

    return (
        <a 
            href={href} 
            ref={buttonRef}
            onClick={handleClick}
            className={cn("animated-button cursor-interactive", className)} 
            target="_blank" 
            rel="noopener noreferrer"
        >
            <div className="animated-button-bg"></div>
            <span className="text">{children}</span>
            <svg className="absolute inset-0 w-full h-full" width="100%" height="100%"
                 viewBox="0 0 200 50" preserveAspectRatio="none">
                <rect
                    className="border-rect"
                    x="1" y="1" width="198" height="48"
                    rx="24"
                    ry="24"
                    fill="none"
                    stroke="hsl(var(--primary-foreground))"
                    strokeWidth="2"
                />
            </svg>
        </a>
    );
};

export default AnimatedButton;