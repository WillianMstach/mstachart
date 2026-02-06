import { Mail, MapPin, Palette, Gamepad2, Sparkles } from "lucide-react";
import avatarImage from "@/assets/avatar.png";
import featuredArt from "@/assets/featured-art.png";

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
          {/* Left Column - Info */}
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

          {/* Right Column - Contact Card */}
          <div className="relative">
            {/* Featured Art - Decorative */}
            <div className="absolute -top-16 -right-8 w-48 h-48 opacity-20 pointer-events-none hidden xl:block">
              <img
                src={featuredArt}
                alt=""
                className="w-full h-full object-contain"
              />
            </div>

            {/* Decorative Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/10 rounded-3xl blur-3xl" />
            
            <div className="relative card-gradient rounded-3xl p-8 shadow-soft">
              {/* Avatar */}
              <div className="flex items-center gap-4 mb-6">
                <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-primary/20 shadow-lg">
                  <img
                    src={avatarImage}
                    alt="Avatar"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="font-display text-xl font-bold">Willian Mstach</h3>
                  <p className="text-sm text-muted-foreground">MSTACH.ART — Artista Digital</p>
                </div>
              </div>
              <h3 className="font-display text-xl font-bold mb-6">
                Vamos Trabalhar Juntos?
              </h3>
              
              <div className="space-y-6">
                {/* Contact Info */}
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <Mail className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Email</p>
                      <p className="font-medium">contato@seuportfolio.com</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="p-3 rounded-full bg-primary/10">
                      <MapPin className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground">Localização</p>
                      <p className="font-medium">Brasil</p>
                    </div>
                  </div>
                </div>

                {/* Divider */}
                <div className="border-t border-border" />

                {/* Social Links */}
                <div>
                  <p className="text-sm text-muted-foreground mb-4">Me encontre nas redes</p>
                  <div className="flex flex-wrap gap-3">
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
                        className="px-4 py-2 rounded-full bg-muted hover:bg-primary hover:text-primary-foreground transition-colors duration-300 text-sm font-medium"
                      >
                        {social.label}
                      </a>
                    ))}
                  </div>
                </div>

                {/* CTA Button */}
                <button className="w-full py-4 accent-gradient text-primary-foreground rounded-xl font-semibold shadow-soft hover:scale-[1.02] transition-transform duration-300">
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
