'use client';
import Link from "next/link";
import { cn } from "@/lib/utils";
import { useEffect, useRef } from "react";

type AnimatedButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

const AnimatedButton = ({ href, children, className }: AnimatedButtonProps) => {
    const holdTimeout = useRef<NodeJS.Timeout | null>(null);

    const handleMouseEnter = () => {
        holdTimeout.current = setTimeout(() => {
            window.open(href, '_blank', 'noopener,noreferrer');
        }, 1600); // This duration should match the CSS transition duration
    };

    const handleMouseLeave = () => {
        if (holdTimeout.current) {
            clearTimeout(holdTimeout.current);
            holdTimeout.current = null;
        }
    };
    
    useEffect(() => {
        // Cleanup timeout on component unmount
        return () => {
            if (holdTimeout.current) {
                clearTimeout(holdTimeout.current);
            }
        };
    }, []);

    return (
        <Link 
            href={href} 
            className={cn("animated-button", className)} 
            target="_blank" 
            rel="noopener noreferrer"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
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
        </Link>
    );
};

export default AnimatedButton;
