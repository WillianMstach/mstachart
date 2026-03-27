import { Blocks, Paintbrush, Palette, Code } from "lucide-react";

const courses = [
  {
    icon: Blocks,
    title: "Pixel Art",
    description: "Tilesets, personagens, animações e props do zero ao avançado.",
    topics: ["Tilesets", "Personagens", "Animações", "Props"],
    href: "#",
    color: "from-primary to-accent",
  },
  {
    icon: Paintbrush,
    title: "Ilustração",
    description: "Fundamentos do desenho e técnicas de aperfeiçoamento.",
    topics: ["Fundamentos", "Aperfeiçoamento"],
    href: "#",
    color: "from-secondary to-accent",
  },
  {
    icon: Palette,
    title: "Pintura Digital",
    description: "Cores, luz, composição e finalização profissional.",
    topics: ["Ilustração Digital", "Cores & Luz"],
    href: "#",
    color: "from-accent to-destructive",
  },
  {
    icon: Code,
    title: "Programação na Godot",
    description: "Desenvolva jogos com Godot, do básico à publicação.",
    topics: ["GDScript", "Game Dev", "Publicação"],
    href: "#",
    color: "from-primary to-secondary",
  },
];

const Courses = () => {
  return (
    <section id="courses" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <p className="text-sm uppercase tracking-widest text-muted-foreground mb-4">Cursos</p>
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4 text-foreground">
            Aprenda <span className="text-gradient">comigo</span>
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Cursos práticos e diretos ao ponto.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course, index) => (
            <a
              key={course.title}
              href={course.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col rounded-xl bg-card border border-border p-6 hover:border-primary/30 transition-all duration-500 hover:-translate-y-1 animate-fade-up"
              style={{ animationDelay: `${index * 120}ms` }}
            >
              <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${course.color} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}>
                <course.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-xl font-bold mb-2 text-foreground group-hover:text-primary transition-colors">
                {course.title}
              </h3>
              <p className="text-sm text-muted-foreground mb-5 leading-relaxed flex-1">
                {course.description}
              </p>
              <div className="flex flex-wrap gap-1.5 mb-5">
                {course.topics.map((topic) => (
                  <span key={topic} className="px-2.5 py-1 text-xs rounded-full bg-muted text-muted-foreground font-medium">
                    {topic}
                  </span>
                ))}
              </div>
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
