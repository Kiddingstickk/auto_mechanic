import { Wrench, Gauge, Disc, Droplets, CircleDot, Cog } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';

const services = [
  {
    icon: Wrench,
    title: 'Engine Repair',
    description: 'Complete engine diagnostics, rebuilds, and performance tuning for all makes and models.',
  },
  {
    icon: Gauge,
    title: 'Diagnostics',
    description: 'State-of-the-art computer diagnostics to identify and resolve any vehicle issue quickly.',
  },
  {
    icon: Disc,
    title: 'Brake Service',
    description: 'Full brake system inspection, repair, and upgrades for maximum stopping power.',
  },
  {
    icon: Droplets,
    title: 'Oil Change',
    description: 'Premium synthetic and conventional oil changes with multi-point inspection.',
  },
  {
    icon: CircleDot,
    title: 'Tire Service',
    description: 'Tire mounting, balancing, rotation, and alignment for optimal performance.',
  },
  {
    icon: Cog,
    title: 'Modifications',
    description: 'Custom performance upgrades, suspension lifts, exhaust systems, and more.',
  },
];

const Services = () => {
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

  return (
    <section id="services" ref={sectionRef} className="py-24 bg-secondary/30 relative">
      {/* Gear Overlay */}
      <div className="absolute inset-0 gear-overlay opacity-30" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`max-w-3xl mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex items-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Our Services</span>
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Complete Auto Care
          </h2>
          <p className="text-muted-foreground text-lg">
            From routine maintenance to complex repairs and custom modifications, 
            our certified technicians deliver excellence on every job.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <div
              key={service.title}
              className={`industrial-card p-8 group cursor-pointer bg-card ${
                isVisible ? 'animate-fade-in' : 'opacity-0'
              }`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Icon */}
              <div className="w-16 h-16 bg-primary/10 border border-primary/30 rounded flex items-center justify-center mb-6 group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                <service.icon className="w-8 h-8 text-primary group-hover:text-primary-foreground transition-colors" />
              </div>

              {/* Content */}
              <h3 className="font-display text-2xl text-foreground mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>

              {/* Arrow */}
              <div className="mt-6 flex items-center gap-2 text-primary opacity-0 group-hover:opacity-100 transition-all transform translate-x-0 group-hover:translate-x-2">
                <span className="text-sm font-medium uppercase tracking-wider">Learn More</span>
                <span>→</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;