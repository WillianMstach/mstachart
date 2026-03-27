import { Link } from "react-router-dom";
import { Instagram, Linkedin, Youtube, Twitter, Gamepad2, Mail } from "lucide-react";

const socials = [
  { icon: Instagram, href: "#", label: "Instagram" },
  { icon: Youtube, href: "#", label: "YouTube" },
  { icon: Linkedin, href: "#", label: "LinkedIn" },
  { icon: Twitter, href: "#", label: "Twitter" },
  { icon: Gamepad2, href: "https://willianmstach.itch.io/", label: "Itch.io" },
  { icon: Mail, href: "mailto:contato@mstach.art", label: "Email" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-6 border-t border-border">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Social Icons */}
        <div className="flex items-center gap-4">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target={s.href.startsWith("http") ? "_blank" : undefined}
              rel={s.href.startsWith("http") ? "noopener noreferrer" : undefined}
              className="text-muted-foreground hover:text-foreground transition-colors"
              title={s.label}
            >
              <s.icon className="w-5 h-5" />
            </a>
          ))}
        </div>

        {/* Copyright */}
        <p className="text-xs text-muted-foreground">
          © {currentYear} MSTACH.ART — Todos os direitos reservados.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
