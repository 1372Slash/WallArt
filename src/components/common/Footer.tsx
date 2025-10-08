import SlashLogo from './SlashLogo';
import Link from 'next/link';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="fixed bottom-0 left-0 w-full h-24 bg-primary text-primary-foreground z-[-1]"
    >
      <div className="container mx-auto h-full flex items-center justify-between px-4">
        <Link href="/">
          <SlashLogo className="!h-6" />
        </Link>
        <p className="text-sm text-muted-foreground hidden md:block">&copy; {currentYear} Slash Portfolio. All Rights Reserved.</p>
        <div className="flex gap-4">
          <Link href="#" className="text-sm hover:text-white/80 transition-colors">Twitter</Link>
          <Link href="#" className="text-sm hover:text-white/80 transition-colors">LinkedIn</Link>
          <Link href="#" className="text-sm hover:text-white/80 transition-colors">Github</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
