import { NavLink, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";

const links = [
  { to: "/", label: "Home" },
  { to: "/illustrations", label: "Illustrations" },
  { to: "/pixel-art", label: "Pixel Art" },
  { to: "/games", label: "Games" },
  { to: "/concepts", label: "Concepts" },
  { to: "/prints", label: "Prints" },
  { to: "/info", label: "Info" },
];

const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled ? "bg-background/90 backdrop-blur-md border-b border-border/50" : "bg-transparent"
      }`}
    >
      <div className="mx-auto max-w-7xl px-6 h-20 flex items-center justify-between">
        <Link to="/" className="font-display text-lg tracking-[0.25em] uppercase">
          <span className="text-accent">¤</span> MSTACH ART
        </Link>

        <nav className="hidden md:flex items-center gap-1">
          {links.map((l) => (
            <NavLink
              key={l.to}
              to={l.to}
              end={l.to === "/"}
              className={({ isActive }) =>
                `px-3 py-2 text-sm uppercase tracking-[0.2em] font-medium transition-colors ${
                  isActive ? "text-accent" : "text-foreground/80 hover:text-foreground"
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>

        <button
          className="md:hidden p-2 text-foreground"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          {open ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {open && (
        <nav className="md:hidden border-t border-border/50 bg-background/95 backdrop-blur-md">
          <div className="px-6 py-4 flex flex-col gap-1">
            {links.map((l) => (
              <NavLink
                key={l.to}
                to={l.to}
                end={l.to === "/"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `py-3 text-sm uppercase tracking-[0.25em] ${
                    isActive ? "text-accent" : "text-foreground/80"
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
};

export default Header;
