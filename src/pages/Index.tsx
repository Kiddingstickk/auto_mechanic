import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Services from '@/components/Services';
import WhyChooseUs from '@/components/WhyChooseUs';
import FeaturedWork from '@/components/FeaturedWork';
import AboutShop from '@/components/AboutShop';
import Testimonials from '@/components/Testimonials';
import Pricing from '@/components/Pricing';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import StickyBookButton from '@/components/StickyBookButton';

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <Hero />
      <Services />
      <WhyChooseUs />
      <FeaturedWork />
      <AboutShop />
      <Testimonials />
      <Pricing />
      <Contact />
      <Footer />
      <StickyBookButton />
    </main>
  );
};

export default Index;
