import { Mail, MapPin, Instagram, Linkedin, Youtube, Twitter, Gamepad2 } from "lucide-react";
import npcContact from "@/assets/npc-contact.png";

const NpcContact = () => {
  return (
    <section id="contact" className="relative px-0 pb-0 pt-0 overflow-hidden bg-muted/20">
      <div className="flex flex-col md:flex-row items-end gap-0 min-h-[70vh]">
        {/* NPC Character - half screen, huge */}
        <div className="w-full md:w-1/2 self-end flex justify-center md:justify-end">
          <img
            src={npcContact}
            alt="Willian Mstach NPC"
            className="w-[90%] md:w-full lg:max-w-[600px] h-auto object-contain drop-shadow-2xl"
          />
        </div>

        {/* Info Box - other half */}
        <div className="relative w-full md:w-1/2 px-6 md:px-12 py-8 md:py-16 flex items-center justify-center md:justify-start">
          <div className="w-full max-w-md bg-card rounded-2xl border-2 border-primary/20 p-6 md:p-8 shadow-soft">
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
              <div className="flex flex-wrap gap-3">
                {[
                  { label: "Instagram", href: "#", icon: Instagram },
                  { label: "LinkedIn", href: "#", icon: Linkedin },
                  { label: "YouTube", href: "#", icon: Youtube },
                  { label: "Itch.io", href: "https://willianmstach.itch.io/", icon: Gamepad2 },
                  { label: "Twitter", href: "#", icon: Twitter },
                ].map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target={social.href.startsWith("http") ? "_blank" : undefined}
                    rel={social.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    className="p-2.5 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300"
                    title={social.label}
                  >
                    <social.icon className="w-4 h-4" />
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
