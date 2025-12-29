import { Phone } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';

const StickyBookButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsVisible(window.scrollY > 500);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      className={`fixed bottom-6 right-6 z-50 flex flex-col gap-3 transition-all duration-300 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
      }`}
    >
      {/* Phone Button */}
      <a
        href="tel:+15551234567"
        className="w-14 h-14 bg-card border border-border rounded-full flex items-center justify-center text-foreground hover:border-primary hover:text-primary transition-all shadow-lg"
        aria-label="Call us"
      >
        <Phone className="w-6 h-6" />
      </a>

      {/* Book Now Button */}
      <Button className="btn-primary px-6 py-6 font-display text-lg shadow-xl animate-pulse-glow">
        Book Now
      </Button>
    </div>
  );
};

export default StickyBookButton;