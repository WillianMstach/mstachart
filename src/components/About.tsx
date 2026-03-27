import { Palette, Gamepad2, Sparkles, Joystick } from "lucide-react";

const skills = [
  { icon: Palette, label: "Ilustração Digital", description: "Concept art e character design" },
  { icon: Gamepad2, label: "Pixel Art", description: "Sprites e ambientes para games" },
  { icon: Sparkles, label: "Arte Conceitual", description: "Mundos e criaturas fantásticas" },
  { icon: Joystick, label: "Game Design", description: "Mecânicas e experiências interativas" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Sobre Mim</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Transformando <span className="text-gradient">imaginação</span> em arte
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Sou um artista digital apaixonado por criar mundos visuais únicos. 
            Meu trabalho é fortemente influenciado pela estética de Moebius — 
            suas linhas limpas, paisagens surreais e paletas de cores etéreas.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
            Especializado em ilustração digital e pixel art, trabalho com 
            desenvolvedores de jogos, estúdios criativos e projetos pessoais.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4 max-w-4xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className="flex flex-col items-center gap-3 p-6 rounded-xl border border-border bg-card hover:border-primary/30 transition-colors duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 rounded-lg accent-gradient">
                <skill.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground">{skill.label}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
