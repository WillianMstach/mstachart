const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <a href="#" className="font-display text-xl font-bold">
            <span className="text-gradient">Pixel</span>
            <span className="text-foreground">Verse</span>
          </a>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} Todos os direitos reservados. 
            <span className="mx-2">•</span>
            Inspirado por Moebius
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <a href="#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projetos
            </a>
            <a href="#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
