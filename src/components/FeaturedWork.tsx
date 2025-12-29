import { useState, useEffect, useRef } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import featuredEngine from '@/assets/featured-engine.jpg';
import featuredMod1 from '@/assets/featured-mod-1.jpg';

const projects = [
  {
    id: 1,
    title: 'Custom Widebody Build',
    category: 'Performance Modification',
    description: 'Complete widebody conversion with custom suspension, exhaust, and ECU tuning.',
    image: featuredMod1,
    stats: { hp: '+120 HP', time: '6 weeks' },
  },
  {
    id: 2,
    title: 'Twin Turbo Engine Swap',
    category: 'Engine Build',
    description: 'Full twin-turbo conversion with forged internals and custom fabrication.',
    image: featuredEngine,
    stats: { hp: '+350 HP', time: '8 weeks' },
  },
  {
    id: 3,
    title: 'Classic Restoration',
    category: 'Full Restoration',
    description: 'Ground-up restoration with modern performance upgrades and reliability mods.',
    image: featuredMod1,
    stats: { hp: '+80 HP', time: '12 weeks' },
  },
];

const FeaturedWork = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
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

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <section id="work" ref={sectionRef} className="py-24 bg-secondary/30 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 gear-overlay opacity-20" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className={`flex flex-col md:flex-row md:items-end md:justify-between mb-12 ${isVisible ? 'animate-fade-in' : 'opacity-0'}`}>
          <div>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary uppercase tracking-widest text-sm font-medium">Featured Work</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl lg:text-6xl text-foreground">
              Our Latest Builds
            </h2>
          </div>
          
          {/* Navigation Arrows */}
          <div className="flex gap-3 mt-6 md:mt-0">
            <button
              onClick={prevSlide}
              className="w-12 h-12 border border-border bg-card rounded flex items-center justify-center hover:border-primary hover:text-primary transition-colors text-foreground"
              aria-label="Previous project"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button
              onClick={nextSlide}
              className="w-12 h-12 bg-primary text-primary-foreground rounded flex items-center justify-center hover:brightness-110 transition-all"
              aria-label="Next project"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Carousel */}
        <div className={`relative ${isVisible ? 'animate-fade-in' : 'opacity-0'}`} style={{ animationDelay: '0.2s' }}>
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {projects.map((project) => (
                <div key={project.id} className="w-full flex-shrink-0 px-2">
                  <div className="grid lg:grid-cols-2 gap-8 items-center">
                    {/* Image */}
                    <div className="relative group overflow-hidden rounded shadow-lg">
                      <img 
                        src={project.image}
                        alt={project.title}
                        className="w-full h-[400px] lg:h-[500px] object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                      {/* Overlay */}
                      <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-60" />
                      
                      {/* Category Badge */}
                      <div className="absolute top-6 left-6 bg-primary text-primary-foreground px-4 py-2 text-sm uppercase tracking-wider font-medium">
                        {project.category}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="yellow-accent-left">
                      <h3 className="font-display text-3xl md:text-4xl text-foreground mb-4">
                        {project.title}
                      </h3>
                      <p className="text-muted-foreground text-lg mb-8">
                        {project.description}
                      </p>

                      {/* Stats */}
                      <div className="flex gap-8 mb-8">
                        <div>
                          <div className="font-display text-3xl text-primary">{project.stats.hp}</div>
                          <div className="text-sm text-muted-foreground uppercase tracking-wider">Power Gain</div>
                        </div>
                        <div>
                          <div className="font-display text-3xl text-foreground">{project.stats.time}</div>
                          <div className="text-sm text-muted-foreground uppercase tracking-wider">Build Time</div>
                        </div>
                      </div>

                      <Button className="btn-primary px-8 py-5 font-display text-lg">
                        View Full Project
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Pagination Dots */}
          <div className="flex justify-center gap-2 mt-8">
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-all ${
                  index === currentIndex 
                    ? 'bg-primary w-8' 
                    : 'bg-border hover:bg-muted-foreground'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedWork;