import { Palette, Gamepad2, Sparkles } from "lucide-react";

const skills = [
  { icon: Palette, label: "Ilustração Digital", description: "Concept art e character design" },
  { icon: Gamepad2, label: "Pixel Art", description: "Sprites e ambientes para games" },
  { icon: Sparkles, label: "Arte Conceitual", description: "Mundos e criaturas fantásticas" },
];

const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-muted/30">
      <div className="max-w-4xl mx-auto text-center space-y-8">
        <div>
          <span className="inline-block px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
            Sobre Mim
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-6">
            Transformando <span className="text-gradient">imaginação</span> em arte
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed max-w-2xl mx-auto">
            Sou um artista digital apaixonado por criar mundos visuais únicos. 
            Meu trabalho é fortemente influenciado pela estética de Moebius — 
            suas linhas limpas, paisagens surreais e paletas de cores etéreas 
            sempre me inspiraram a explorar o extraordinário.
          </p>
          <p className="text-muted-foreground text-lg leading-relaxed mt-4 max-w-2xl mx-auto">
            Especializado em ilustração digital e pixel art, trabalho com 
            desenvolvedores de jogos, estúdios criativos e projetos pessoais 
            que buscam uma identidade visual marcante.
          </p>
        </div>

        {/* Skills */}
        <div className="grid sm:grid-cols-3 gap-4 max-w-3xl mx-auto">
          {skills.map((skill, index) => (
            <div
              key={skill.label}
              className="flex flex-col items-center gap-3 p-6 rounded-xl glass-effect hover:bg-muted/50 transition-colors duration-300 animate-slide-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="p-3 rounded-lg accent-gradient">
                <skill.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <h3 className="font-display font-semibold">{skill.label}</h3>
              <p className="text-sm text-muted-foreground">{skill.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
