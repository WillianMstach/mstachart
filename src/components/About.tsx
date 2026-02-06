import { Mail, MapPin, Palette, Gamepad2, Sparkles } from "lucide-react";
import npcCharacter from "@/assets/npc-character.png";

const skills = [
  { icon: Palette, label: "Ilustração Digital", description: "Concept art e character design" },
  { icon: Gamepad2, label: "Pixel Art", description: "Sprites e ambientes para games" },
  { icon: Sparkles, label: "Arte Conceitual", description: "Mundos e criaturas fantásticas" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column - Skills */}
          <div className="space-y-8">
            <div>
              <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
                Sobre Mim
              </span>
              <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
                Transformando <span className="text-gradient">imaginação</span> em arte
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed">
                Sou um artista digital apaixonado por criar mundos visuais únicos. 
                Meu trabalho é fortemente influenciado pela estética de Moebius — 
                suas linhas limpas, paisagens surreais e paletas de cores etéreas 
                sempre me inspiraram a explorar o extraordinário.
              </p>
              <p className="text-muted-foreground text-lg leading-relaxed mt-4">
                Especializado em ilustração digital e pixel art, trabalho com 
                desenvolvedores de jogos, estúdios criativos e projetos pessoais 
                que buscam uma identidade visual marcante.
              </p>
            </div>

            {/* Skills */}
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div
                  key={skill.label}
                  className="flex items-start gap-4 p-4 rounded-xl glass-effect hover:bg-muted/50 transition-colors duration-300 animate-slide-in"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="p-3 rounded-lg accent-gradient">
                    <skill.icon className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold">{skill.label}</h3>
                    <p className="text-sm text-muted-foreground">{skill.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - NPC + Speech Bubble */}
          <div className="relative flex items-end gap-0 justify-center lg:justify-end">
            {/* NPC Character */}
            <div className="flex-shrink-0 w-48 md:w-56 lg:w-64 z-10 -mr-4 self-end">
              <img
                src={npcCharacter}
                alt="Willian Mstach NPC"
                className="w-full h-auto object-contain drop-shadow-2xl"
              />
            </div>

            {/* Speech Bubble */}
            <div className="relative flex-1 max-w-sm">
              {/* Bubble tail pointing left */}
              <div className="absolute left-0 bottom-16 -translate-x-3 w-6 h-6 z-0">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full">
                  <path
                    d="M24 0C24 0 8 4 0 24C4 16 12 12 24 12V0Z"
                    className="fill-[hsl(var(--card))]"
                  />
                  <path
                    d="M24 0C24 0 8 4 0 24C4 16 12 12 24 12"
                    className="stroke-primary/30"
                    strokeWidth="2"
                  />
                </svg>
              </div>

              <div className="relative card-gradient rounded-2xl border-2 border-primary/20 p-6 shadow-soft ml-2">
                {/* Name & Title */}
                <div className="mb-4">
                  <h3 className="font-display text-xl font-bold">Willian Mstach</h3>
                  <p className="text-sm text-muted-foreground">MSTACH.ART — Artista Digital</p>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary/10">
                      <Mail className="w-4 h-4 text-primary" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Email</p>
                      <p className="text-sm font-medium">contato@seuportfolio.com</p>
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

                {/* Divider */}
                <div className="border-t border-border mb-4" />

                {/* Social Links */}
                <div className="mb-4">
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

                {/* CTA Button */}
                <button className="w-full py-3 accent-gradient text-primary-foreground rounded-xl font-semibold shadow-soft hover:scale-[1.02] transition-transform duration-300 text-sm">
                  Enviar Mensagem
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
