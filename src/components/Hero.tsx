import { useEffect, useState } from "react";
import heroBg from "@/assets/hero-bg.jpg";

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroBg}
          alt="Hero background"
          className={`w-full h-full object-cover transition-all duration-1000 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-110"
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-transparent to-background" />
      </div>

      {/* Floating Geometric Elements */}
      <div className="absolute top-20 left-10 w-16 h-16 border-2 border-primary/30 rotate-45 animate-float" />
      <div className="absolute bottom-32 right-20 w-24 h-24 border-2 border-secondary/30 rounded-full animate-float" style={{ animationDelay: "2s" }} />
      <div className="absolute top-1/3 right-10 w-12 h-12 bg-accent/20 rotate-12 animate-float" style={{ animationDelay: "4s" }} />

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <div
          className={`transition-all duration-1000 delay-300 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="inline-block px-4 py-2 rounded-full glass-effect text-sm font-medium text-muted-foreground mb-6">
            Ilustrador & Pixel Artist
          </span>
        </div>

        <h1
          className={`font-display text-5xl md:text-7xl lg:text-8xl font-bold mb-6 transition-all duration-1000 delay-500 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-gradient">Mundos</span>
          <br />
          <span className="text-foreground">Imaginados</span>
        </h1>

        <p
          className={`font-body text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10 transition-all duration-1000 delay-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          Criando universos através de pixels e traços. 
          Inspirado pela estética surreal de Moebius e a nostalgia do pixel art.
        </p>

        <div
          className={`flex flex-wrap gap-4 justify-center transition-all duration-1000 delay-900 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <a
            href="#gallery"
            className="px-8 py-4 accent-gradient text-primary-foreground rounded-full font-medium shadow-soft hover:scale-105 transition-transform duration-300"
          >
            Ver Projetos
          </a>
          <a
            href="#about"
            className="px-8 py-4 glass-effect rounded-full font-medium hover:bg-muted transition-colors duration-300"
          >
            Sobre Mim
          </a>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
