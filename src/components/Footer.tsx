import { Link } from "react-router-dom";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link to="/" className="font-display text-xl font-bold tracking-wider">
            <span className="text-gradient">MSTACH</span>
            <span className="text-foreground">.ART</span>
          </Link>

          {/* Copyright */}
          <p className="text-sm text-muted-foreground text-center">
            © {currentYear} MSTACH.ART — Todos os direitos reservados.
          </p>

          {/* Quick Links */}
          <div className="flex items-center gap-6">
            <Link to="/#gallery" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Projetos
            </Link>
            <Link to="/games" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Jogos
            </Link>
            <Link to="/#about" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contato
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
