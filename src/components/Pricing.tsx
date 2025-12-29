import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useEffect, useRef, useState } from 'react';

const pricingPlans = [
  {
    name: 'Basic Service',
    price: '79',
    description: 'Essential maintenance for everyday drivers',
    features: [
      'Oil & Filter Change',
      'Tire Rotation',
      '21-Point Inspection',
      'Fluid Top-Off',
      'Battery Test',
    ],
    popular: false,
  },
  {
    name: 'Full Service',
    price: '189',
    description: 'Comprehensive care for optimal performance',
    features: [
      'Everything in Basic',
      'Brake Inspection',
      'Engine Diagnostics',
      'Air Filter Replacement',
      'Cabin Filter Replacement',
      'Fuel System Cleaning',
    ],
    popular: true,
  },
  {
    name: 'Performance',
    price: 'Custom',
    description: 'Custom builds and performance upgrades',
    features: [
      'Full Consultation',
      'Custom Fabrication',
      'ECU Tuning',
      'Dyno Testing',
      'Performance Parts',
      '24-Month Warranty',
    ],
    popular: false,
  },
];

const Pricing = () => {
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
    <section id="pricing" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `repeating-linear-gradient(
              90deg,
              transparent,
              transparent 50px,
              hsl(0 0% 0% / 0.05) 50px,
              hsl(0 0% 0% / 0.05) 51px
            )`
          }}
        />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`text-center max-w-2xl mx-auto mb-16 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div className="flex items-center justify-center gap-4 mb-4">
            <div className="w-12 h-[2px] bg-primary" />
            <span className="text-primary uppercase tracking-widest text-sm font-medium">Pricing</span>
            <div className="w-12 h-[2px] bg-primary" />
          </div>
          <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground mb-4">
            Transparent Pricing
          </h2>
          <p className="text-muted-foreground text-lg">
            No hidden fees, no surprises. Just honest pricing for quality work.
          </p>
        </div>

        {/* Pricing Grid */}
        <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {pricingPlans.map((plan, index) => (
            <div
              key={plan.name}
              className={`relative bg-card border rounded overflow-hidden transition-all duration-300 shadow-sm ${
                plan.popular 
                  ? 'border-primary shadow-[0_0_30px_hsl(51_100%_50%_/_0.2)] scale-105 z-10' 
                  : 'border-border hover:border-primary/50'
              } ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Popular Badge */}
              {plan.popular && (
                <div className="absolute top-0 left-0 right-0 h-1 bg-primary" />
              )}

              <div className="p-8">
                {/* Popular Label */}
                {plan.popular && (
                  <div className="inline-block bg-primary text-primary-foreground text-xs uppercase tracking-wider font-bold px-3 py-1 rounded mb-4">
                    Most Popular
                  </div>
                )}

                {/* Plan Name */}
                <h3 className="font-display text-2xl text-foreground mb-2">{plan.name}</h3>
                <p className="text-muted-foreground text-sm mb-6">{plan.description}</p>

                {/* Price */}
                <div className="mb-8">
                  <span className="font-display text-5xl text-foreground">
                    {plan.price === 'Custom' ? '' : '$'}{plan.price}
                  </span>
                  {plan.price !== 'Custom' && (
                    <span className="text-muted-foreground ml-2">starting</span>
                  )}
                </div>

                {/* Features */}
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3">
                      <div className="w-5 h-5 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-foreground text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>

                {/* CTA */}
                <Button 
                  className={`w-full py-5 font-display text-lg ${
                    plan.popular 
                      ? 'btn-primary' 
                      : 'bg-secondary border border-border text-foreground hover:border-primary hover:text-primary'
                  }`}
                >
                  {plan.price === 'Custom' ? 'Get Quote' : 'Book Now'}
                </Button>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className={`text-center text-muted-foreground text-sm mt-8 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.3s' }}>
          Prices may vary based on vehicle make, model, and condition. All prices include parts and labor.
        </p>
      </div>
    </section>
  );
};

export default Pricing;