import { ChevronDown, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroImage from '@/assets/hero-mechanic.jpg';

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Light Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-background via-background/90 to-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50" />
      </div>

      {/* Gear Pattern Overlay */}
      <div className="absolute inset-0 gear-overlay opacity-40" />

      {/* Hazard Stripe Accent */}
      <div className="absolute bottom-0 left-0 right-0 h-2 hazard-stripe" />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 lg:px-8 pt-20">
        <div className="max-w-4xl">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 bg-primary/20 border border-primary/40 rounded-full px-4 py-2 mb-8 animate-fade-in">
            <span className="w-2 h-2 bg-primary rounded-full animate-pulse" />
            <span className="text-sm font-medium text-foreground uppercase tracking-wider">
              Expert Auto Services Since 1995
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-foreground mb-6 leading-none animate-fade-in" style={{ animationDelay: '0.1s' }}>
            Precision Repairs.
            <br />
            <span className="text-primary">Performance</span> You Can Trust.
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mb-10 animate-fade-in" style={{ animationDelay: '0.2s' }}>
            Expert auto repair and modification services for every vehicle. 
            From routine maintenance to high-performance builds, we deliver 
            excellence with every job.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: '0.3s' }}>
            <Button className="btn-primary px-8 py-6 font-display text-xl tracking-wider group">
              Book Your Service
              <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
            </Button>
            <Button 
              variant="outline" 
              className="px-8 py-6 font-display text-xl tracking-wider border-foreground/30 hover:border-primary hover:text-primary bg-card/50 text-foreground"
            >
              <Play className="w-5 h-5 mr-2" />
              Watch Our Work
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-border animate-fade-in" style={{ animationDelay: '0.4s' }}>
            <div>
              <div className="font-display text-4xl md:text-5xl text-primary">25+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Years Experience</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-primary">15K+</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Vehicles Serviced</div>
            </div>
            <div>
              <div className="font-display text-4xl md:text-5xl text-primary">98%</div>
              <div className="text-sm text-muted-foreground uppercase tracking-wider mt-1">Customer Satisfaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ChevronDown className="w-8 h-8 text-primary" />
      </div>

      {/* Decorative Gear */}
      <div className="absolute -right-32 top-1/3 w-64 h-64 opacity-10">
        <svg viewBox="0 0 100 100" className="w-full h-full animate-gear-rotate text-foreground">
          <path
            fill="currentColor"
            d="M50 10c-22.1 0-40 17.9-40 40s17.9 40 40 40 40-17.9 40-40-17.9-40-40-40zm0 60c-11 0-20-9-20-20s9-20 20-20 20 9 20 20-9 20-20 20z"
          />
          <path
            fill="currentColor"
            d="M50 0v15M50 85v15M0 50h15M85 50h15M14.6 14.6l10.6 10.6M74.8 74.8l10.6 10.6M14.6 85.4l10.6-10.6M74.8 25.2l10.6-10.6"
            strokeWidth="8"
            stroke="currentColor"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;