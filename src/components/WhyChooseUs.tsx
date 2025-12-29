import { Award, Clock, DollarSign, Shield, Users, ThumbsUp } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import workshopImage from '@/assets/workshop-interior.jpg';

const features = [
  {
    icon: Award,
    title: 'Certified Mechanics',
    description: 'ASE-certified technicians with decades of combined experience.',
  },
  {
    icon: Clock,
    title: 'Fast Turnaround',
    description: 'Most repairs completed same-day. We value your time.',
  },
  {
    icon: DollarSign,
    title: 'Transparent Pricing',
    description: 'Upfront quotes with no hidden fees. No surprises.',
  },
  {
    icon: Shield,
    title: 'Warranty Coverage',
    description: '24-month/24,000-mile warranty on all repairs.',
  },
  {
    icon: Users,
    title: 'Family Owned',
    description: 'Serving our community with integrity since 1995.',
  },
  {
    icon: ThumbsUp,
    title: 'Satisfaction Guaranteed',
    description: "Not happy? We'll make it right. That's our promise.",
  },
];

const WhyChooseUs = () => {
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
    <section id="why-us" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-primary/20 to-transparent" />
      </div>

      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image Side */}
          <div className={`relative ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="relative">
              <img 
                src={workshopImage}
                alt="Professional auto workshop interior with modern equipment"
                className="w-full h-[500px] object-cover rounded shadow-lg"
              />
              {/* Yellow Accent Frame */}
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-primary rounded -z-10" />
              
              {/* Stats Badge */}
              <div className="absolute -bottom-8 -left-4 bg-primary text-primary-foreground p-6 rounded shadow-xl">
                <div className="font-display text-4xl">25+</div>
                <div className="text-sm uppercase tracking-wider opacity-80">Years of Excellence</div>
              </div>
            </div>
          </div>

          {/* Content Side */}
          <div className={isVisible ? 'animate-slide-in-right' : 'opacity-0'}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary uppercase tracking-widest text-sm font-medium">Why Choose Us</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Trusted by Thousands of Vehicle Owners
            </h2>
            <p className="text-muted-foreground text-lg mb-10">
              We're not just mechanics – we're car enthusiasts who take pride in every 
              job. When you bring your vehicle to us, you're getting more than a repair.
            </p>

            {/* Features Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {features.map((feature, index) => (
                <div 
                  key={feature.title}
                  className="flex gap-4 group"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div className="w-12 h-12 bg-secondary border border-border rounded flex items-center justify-center flex-shrink-0 group-hover:bg-primary group-hover:border-primary transition-all">
                    <feature.icon className="w-5 h-5 text-primary group-hover:text-primary-foreground transition-colors" />
                  </div>
                  <div>
                    <h3 className="font-display text-lg text-foreground mb-1">{feature.title}</h3>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;