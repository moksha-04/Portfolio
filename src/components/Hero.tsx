import { ArrowDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import heroBg from '@/assets/hero-bg.jpg';
const Hero = () => {
  const scrollToSection = (id: string) => {
    const element = document.querySelector(id);
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };
  return <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background with overlay */}
      <div className="absolute inset-0 z-0">
        <img src={heroBg} alt="Hero background" className="w-full h-full object-cover opacity-20 dark:opacity-10" />
        <div className="absolute inset-0 bg-gradient-hero"></div>
      </div>

      {/* Geometric shapes */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl animate-float"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-light/10 rounded-full blur-3xl animate-float" style={{
        animationDelay: '2s'
      }}></div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 z-10 text-center">
        <div className="animate-slide-up">
          <h1 className="text-5xl md:text-7xl font-bold mb-4 text-cyan-950 dark:text-blue-400">
            Kadava Mokshagnanjali
          </h1>
          <p className="text-xl md:text-3xl font-semibold mb-6 text-foreground/90">
            Backend Engineer | Ethical AI Advocate | UI/UX Enthusiast
          </p>
          <p className="text-lg md:text-xl mb-8 text-muted-foreground max-w-2xl mx-auto">
            Building secure, scalable systems with a human-centered approach.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button size="lg" className="shadow-glow hover:scale-105 transition-transform" onClick={() => scrollToSection('#portfolio')}>
              View My Work
            </Button>
            <Button size="lg" variant="outline" className="hover:scale-105 transition-transform border-2" onClick={() => scrollToSection('#contact')}>
              Contact Me
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ArrowDown className="w-6 h-6 text-primary" />
        </div>
      </div>
    </section>;
};
export default Hero;