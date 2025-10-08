import { cn } from '@/lib/utils';

const SlashLogo = ({ className }: { className?: string }) => {
  return (
    <div className={cn("font-headline font-medium text-2xl", className)}>
      /Slash
    </div>
  );
};

export default SlashLogo;
