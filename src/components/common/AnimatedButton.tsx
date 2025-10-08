'use client';
import Link from "next/link";

type AnimatedButtonProps = {
    href: string;
    children: React.ReactNode;
};

const AnimatedButton = ({ href, children }: AnimatedButtonProps) => {
    return (
        <Link href={href} className="animated-button" target="_blank" rel="noopener noreferrer">
            <div className="animated-button-bg"></div>
            <span className="text">{children}</span>
            <svg className="absolute inset-0 w-full h-full" width="100%" height="100%"
                 viewBox="0 0 200 50" preserveAspectRatio="none">
                <rect
                    className="border-rect"
                    x="1" y="1" width="198" height="48"
                    rx="6"
                    ry="6"
                    fill="none"
                    stroke="hsl(var(--primary-foreground))"
                    strokeWidth="2"
                />
            </svg>
        </Link>
    );
};

export default AnimatedButton;
