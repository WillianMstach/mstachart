import { Mail, MapPin } from "lucide-react";
import npcContact from "@/assets/npc-contact.png";

const NpcContact = () => {
  return (
    <section id="contact" className="relative px-6 pb-0 pt-12 overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-end gap-0">
        {/* NPC Character - large, like a game dialog */}
        <div className="flex-shrink-0 w-64 md:w-80 lg:w-[420px] z-10 self-end">
          <img
            src={npcContact}
            alt="Willian Mstach NPC"
            className="w-full h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Info Box - speech bubble style */}
        <div className="relative flex-1 max-w-lg mb-8 md:mb-16 -ml-4 md:-ml-8">
          {/* Bubble tail */}
          <div className="absolute left-0 bottom-8 -translate-x-3 w-6 h-6 z-0 hidden md:block">
            <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
              <path
                d="M24 0C24 0 8 4 0 24C4 16 12 12 24 12V0Z"
                className="fill-card"
              />
              <path
                d="M24 0C24 0 8 4 0 24C4 16 12 12 24 12"
                className="stroke-primary/30"
                strokeWidth="2"
              />
            </svg>
          </div>

          <div className="relative bg-card rounded-2xl border-2 border-primary/20 p-6 md:p-8 shadow-soft">
            {/* Name & Title */}
            <div className="mb-5">
              <h3 className="font-display text-2xl font-bold">Willian Mstach</h3>
              <p className="text-sm text-muted-foreground">MSTACH.ART — Artista Digital & Game Dev</p>
            </div>

            {/* Contact Info */}
            <div className="space-y-3 mb-5">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <Mail className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Email</p>
                  <p className="text-sm font-medium">contato@mstach.art</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary/10">
                  <MapPin className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Localização</p>
                  <p className="text-sm font-medium">Brasil</p>
                </div>
              </div>
            </div>

            <div className="border-t border-border mb-5" />

            {/* Social Links */}
            <div className="mb-5">
              <p className="text-xs text-muted-foreground mb-3">Me encontre nas redes</p>
              <div className="flex flex-wrap gap-2">
                {[
                  { label: "Itch.io", href: "https://willianmstach.itch.io/" },
                  { label: "Instagram", href: "#" },
                  { label: "ArtStation", href: "#" },
                  { label: "Twitter", href: "#" },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="px-3 py-1.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-xs font-medium"
                  >
                    {social.label}
                  </a>
                ))}
              </div>
            </div>

            {/* CTA */}
            <button className="w-full py-3 accent-gradient text-primary-foreground rounded-xl font-semibold shadow-soft hover:scale-[1.02] transition-transform duration-300 text-sm">
              Enviar Mensagem
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NpcContact;
