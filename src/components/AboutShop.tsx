import { useEffect, useRef, useState } from 'react';
import workshopImage from '@/assets/workshop-interior.jpg';
import featuredMod2 from '@/assets/featured-mod-2.jpg';

const AboutShop = () => {
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
    <section id="about" ref={sectionRef} className="py-24 bg-background relative overflow-hidden">
      {/* Decorative Element */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-primary/5 to-transparent" />
      
      <div className="container mx-auto px-4 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content Side */}
          <div className={`order-2 lg:order-1 ${isVisible ? 'animate-slide-in-left' : 'opacity-0'}`}>
            <div className="flex items-center gap-4 mb-4">
              <div className="w-12 h-[2px] bg-primary" />
              <span className="text-primary uppercase tracking-widest text-sm font-medium">About Our Shop</span>
            </div>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Built on Passion.<br />
              <span className="text-primary">Driven</span> by Excellence.
            </h2>
            <div className="space-y-4 text-muted-foreground text-lg mb-8">
              <p>
                Founded in 1995, Precision Auto has grown from a small two-bay garage 
                into the region's premier destination for auto repair and performance 
                modifications.
              </p>
              <p>
                Our team of ASE-certified master technicians brings over 100 years of 
                combined experience to every vehicle that enters our shop. We combine 
                old-school craftsmanship with cutting-edge diagnostic technology.
              </p>
              <p>
                Whether you need routine maintenance or a full custom build, we treat 
                every vehicle like it's our own.
              </p>
            </div>

            {/* Certifications */}
            <div className="flex flex-wrap gap-4">
              {['ASE Certified', 'AAA Approved', 'BBB A+ Rated', 'EPA Certified'].map((cert) => (
                <div 
                  key={cert}
                  className="px-4 py-2 bg-secondary border border-border rounded text-sm font-medium text-foreground"
                >
                  {cert}
                </div>
              ))}
            </div>
          </div>

          {/* Image Side */}
          <div className={`order-1 lg:order-2 ${isVisible ? 'animate-slide-in-right' : 'opacity-0'}`}>
            <div className="relative">
              {/* Main Image */}
              <img 
                src={workshopImage}
                alt="Precision Auto professional workshop with modern equipment and tools"
                className="w-full h-[400px] object-cover rounded shadow-lg"
              />
              
              {/* Secondary Image - Overlapping */}
              <div className="absolute -bottom-12 -left-8 w-2/3 hidden lg:block">
                <img 
                  src={featuredMod2}
                  alt="Classic muscle car restoration project at Precision Auto"
                  className="w-full h-48 object-cover rounded border-4 border-background shadow-xl"
                />
              </div>

              {/* Experience Badge */}
              <div className="absolute top-6 right-6 bg-card/95 backdrop-blur-sm border border-primary p-4 rounded shadow-lg">
                <div className="font-display text-3xl text-primary">1995</div>
                <div className="text-xs uppercase tracking-wider text-muted-foreground">Est.</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutShop;