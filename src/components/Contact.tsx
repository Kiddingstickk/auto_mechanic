import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Location',
      lines: ['1234 Motor Avenue', 'Detroit, MI 48201'],
    },
    {
      icon: Phone,
      title: 'Phone',
      lines: ['(555) 123-4567', '(555) 987-6543'],
    },
    {
      icon: Mail,
      title: 'Email',
      lines: ['service@precisionauto.com', 'quotes@precisionauto.com'],
    },
    {
      icon: Clock,
      title: 'Hours',
      lines: ['Mon-Fri: 7AM - 6PM', 'Sat: 8AM - 4PM', 'Sun: Closed'],
    },
  ];

  return (
    <section id="contact" ref={sectionRef} className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gear-overlay opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16">
          {/* Contact Info */}
          <div className={isVisible ? 'animate-slide-in-left' : 'opacity-0'}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary uppercase tracking-widest text-sm font-medium">Contact Us</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              Visit us at our shop or give us a call. We're here to help with all your 
              automotive needs.
            </p>

            {/* Contact Cards */}
            <div className="grid sm:grid-cols-2 gap-6 mb-10">
              {contactInfo.map((item) => (
                <div 
                  key={item.title}
                  className="bg-card border border-border p-6 rounded group hover:border-primary transition-colors shadow-sm"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                    <item.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <h3 className="font-display text-lg text-foreground mb-2">{item.title}</h3>
                  {item.lines.map((line, i) => (
                    <p key={i} className="text-muted-foreground text-sm">{line}</p>
                  ))}
                </div>
              ))}
            </div>

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="btn-primary px-8 py-5 font-display text-lg flex-1">
                Book Appointment
              </Button>
              <Button 
                variant="outline" 
                className="px-8 py-5 font-display text-lg flex-1 border-border text-foreground hover:border-primary hover:text-primary bg-card"
              >
                Get Directions
              </Button>
            </div>
          </div>

          {/* Map Placeholder */}
          <div className={`relative ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative h-full min-h-[400px] lg:min-h-[500px] bg-card border border-border rounded overflow-hidden shadow-sm">
              {/* Map Placeholder with styled grid */}
              <div 
                className="absolute inset-0 opacity-30"
                style={{
                  backgroundImage: `
                    linear-gradient(hsl(var(--border)) 1px, transparent 1px),
                    linear-gradient(90deg, hsl(var(--border)) 1px, transparent 1px)
                  `,
                  backgroundSize: '50px 50px'
                }}
              />
              
              {/* Center Pin */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <div className="w-16 h-16 bg-primary rounded-full flex items-center justify-center animate-pulse-glow">
                    <MapPin className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-4 h-4 bg-primary transform rotate-45" />
                </div>
              </div>

              {/* Overlay Text */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-card to-transparent p-6">
                <div className="bg-card/95 backdrop-blur-sm border border-border p-4 rounded shadow-sm">
                  <div className="font-display text-lg text-foreground mb-1">Precision Auto</div>
                  <div className="text-sm text-muted-foreground">1234 Motor Avenue, Detroit, MI 48201</div>
                </div>
              </div>
            </div>

            {/* Yellow Accent Frame */}
            <div className="absolute -bottom-4 -left-4 w-full h-full border-2 border-primary rounded -z-10" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;