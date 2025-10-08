'use client';
import Link from "next/link";
import { cn } from "@/lib/utils";

type AnimatedButtonProps = {
    href: string;
    children: React.ReactNode;
    className?: string;
};

const AnimatedButton = ({ href, children, className }: AnimatedButtonProps) => {
    return (
        <Link href={href} className={cn("animated-button cursor-interactive", className)} target="_blank" rel="noopener noreferrer">
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
                    stroke="hsl(var(--primary))"
                    strokeWidth="2"
                />
            </svg>
        </Link>
    );
};

export default AnimatedButton;
