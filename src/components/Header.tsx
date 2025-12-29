import { useState, useEffect } from 'react';
import { Menu, X, Phone, Wrench } from 'lucide-react';
import { Button } from '@/components/ui/button';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '#services', label: 'Services' },
    { href: '#why-us', label: 'Why Us' },
    { href: '#work', label: 'Our Work' },
    { href: '#about', label: 'About' },
    { href: '#pricing', label: 'Pricing' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-background/95 backdrop-blur-md border-b border-border shadow-md' 
          : 'bg-background/80 backdrop-blur-sm'
      }`}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-12 h-12 bg-primary rounded flex items-center justify-center group-hover:animate-pulse-glow transition-all">
              <Wrench className="w-7 h-7 text-primary-foreground" />
            </div>
            <div className="hidden sm:block">
              <span className="font-display text-2xl tracking-wider text-foreground">
                PRECISION
              </span>
              <span className="font-display text-2xl tracking-wider text-primary ml-1">
                AUTO
              </span>
            </div>
          </a>

          {/* Right Side - Phone, Book Service, Hamburger */}
          <div className="flex items-center gap-4">
            {/* Phone - hidden on mobile */}
            <a 
              href="tel:+15551234567" 
              className="hidden md:flex items-center gap-2 text-foreground hover:text-primary transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span className="font-medium">(555) 123-4567</span>
            </a>
            
            {/* Book Service Button - hidden on mobile */}
            <Button className="hidden md:flex btn-primary px-6 py-5 font-display text-lg">
              Book Service
            </Button>

            {/* Hamburger Menu Button - always visible */}
            <button
              className="p-2 text-foreground hover:text-primary transition-colors border border-border rounded hover:border-primary"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-card border-b border-border shadow-lg transition-all duration-300 ${
          isMobileMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'
        }`}
      >
        <nav className="container mx-auto px-4 py-6 flex flex-col gap-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-lg font-medium text-foreground hover:text-primary hover:bg-secondary/50 transition-colors uppercase tracking-wider py-3 px-4 rounded"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.label}
            </a>
          ))}
          <div className="pt-4 mt-2 border-t border-border">
            <a 
              href="tel:+15551234567" 
              className="flex items-center gap-2 text-foreground mb-4 md:hidden px-4"
            >
              <Phone className="w-5 h-5 text-primary" />
              <span className="font-medium">(555) 123-4567</span>
            </a>
            <Button 
              className="btn-primary w-full py-5 font-display text-lg"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Book Service
            </Button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;