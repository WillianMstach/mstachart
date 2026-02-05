import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const navLinks = [
  { label: "Início", href: "#" },
  { label: "Projetos", href: "#gallery" },
  { label: "Sobre", href: "#about" },
];

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-effect py-4" : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="font-display text-2xl font-bold">
          <span className="text-gradient">Pixel</span>
          <span className="text-foreground">Verse</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="relative font-medium text-muted-foreground hover:text-foreground transition-colors duration-300 group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300" />
            </a>
          ))}
          <a
            href="#about"
            className="px-6 py-2.5 accent-gradient text-primary-foreground rounded-full font-medium shadow-soft hover:scale-105 transition-transform duration-300"
          >
            Contato
          </a>
        </nav>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden absolute top-full left-0 right-0 glass-effect transition-all duration-300 ${
          isMobileMenuOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-4 pointer-events-none"
        }`}
      >
        <nav className="flex flex-col p-6 gap-4">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsMobileMenuOpen(false)}
              className="font-medium text-lg py-2 border-b border-border/50 hover:text-primary transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#about"
            onClick={() => setIsMobileMenuOpen(false)}
            className="mt-2 px-6 py-3 accent-gradient text-primary-foreground rounded-full font-medium text-center"
          >
            Contato
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
