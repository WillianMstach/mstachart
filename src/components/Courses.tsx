import { Blocks, Paintbrush, Palette, Code } from "lucide-react";

const courses = [
  {
    icon: Blocks,
    title: "Pixel Art",
    description: "Aprenda a criar tilesets, personagens, animações e props em pixel art do zero ao avançado.",
    topics: ["Tilesets", "Personagens", "Animações", "Props"],
    href: "#",
    color: "from-primary to-olive",
  },
  {
    icon: Paintbrush,
    title: "Ilustração",
    description: "Domine os fundamentos do desenho e técnicas de aperfeiçoamento para elevar suas ilustrações.",
    topics: ["Fundamentos", "Aperfeiçoamento do Desenho"],
    href: "#",
    color: "from-secondary to-flannel",
  },
  {
    icon: Palette,
    title: "Pintura Digital",
    description: "Técnicas de ilustração digital: cores, luz, composição e finalização profissional.",
    topics: ["Ilustração Digital", "Cores & Luz", "Composição"],
    href: "#",
    color: "from-accent to-rust",
  },
  {
    icon: Code,
    title: "Programação na Godot",
    description: "Desenvolva seus próprios jogos utilizando a engine Godot, do básico à publicação.",
    topics: ["GDScript", "Game Dev", "Publicação"],
    href: "#",
    color: "from-beanie to-ink",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-24 px-6 bg-muted/20">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="inline-block px-4 py-2 rounded-full bg-secondary/10 text-secondary text-sm font-medium mb-4">
            Cursos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            Aprenda <span className="text-gradient">comigo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Compartilho o que aprendi ao longo dos anos em cursos práticos e diretos ao ponto.
          </p>
        </div>

        {/* Course Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <a
              key={course.title}
              href={course.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex flex-col rounded-2xl bg-card border-2 border-foreground/10 p-6 shadow-soft hover:shadow-glow transition-all duration-500 hover:-translate-y-2 animate-fade-up ink-border"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              {/* Icon */}
              <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${course.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <course.icon className="w-6 h-6 text-primary-foreground" />
              </div>

              {/* Title */}
              <h3 className="font-display text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                {course.title}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
                {course.description}
              </p>

              {/* Topics */}
              <div className="flex flex-wrap gap-1.5 mb-5">
                {course.topics.map((topic) => (
                  <span
                    key={topic}
                    className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground font-medium"
                  >
                    {topic}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-2 text-sm font-semibold text-primary group-hover:gap-3 transition-all duration-300">
                Acessar curso
                <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Courses;
