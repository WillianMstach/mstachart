import { useState, useEffect } from "react";
import ProjectDock from "./ProjectDock";
import ProjectCard from "./ProjectCard";

// Import images
import concept1 from "@/assets/concept-1.jpg";
import concept2 from "@/assets/concept-2.jpg";
import gameArt1 from "@/assets/game-art-1.jpg";
import gameArt2 from "@/assets/game-art-2.jpg";
import fullArt1 from "@/assets/full-art-1.jpg";
import fullArt2 from "@/assets/full-art-2.jpg";

interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  categoryId: string;
}

const projects: Project[] = [
  {
    id: "1",
    image: concept1,
    title: "Desert Wanderer",
    description: "Character concept for a desert-themed RPG. Inspired by nomadic cultures and sci-fi aesthetics.",
    category: "Concepts",
    categoryId: "concepts",
  },
  {
    id: "2",
    image: concept2,
    title: "Biomech Entity",
    description: "Creature design exploring the fusion of organic and mechanical elements.",
    category: "Concepts",
    categoryId: "concepts",
  },
  {
    id: "3",
    image: gameArt1,
    title: "Crystal Citadel",
    description: "Environment art for a fantasy adventure game. Floating palace in an ethereal realm.",
    category: "Game Art",
    categoryId: "game-art",
  },
  {
    id: "4",
    image: gameArt2,
    title: "Ancient Ruins",
    description: "Temple environment design with mystical atmosphere and ancient architecture.",
    category: "Game Art",
    categoryId: "game-art",
  },
  {
    id: "5",
    image: fullArt1,
    title: "Path of the Seeker",
    description: "Full illustration depicting a lone traveler discovering ancient monuments in an alien desert.",
    category: "Full Art",
    categoryId: "full-art",
  },
  {
    id: "6",
    image: fullArt2,
    title: "Cosmic Voyage",
    description: "Space exploration scene with surreal nebula and mysterious spacecraft.",
    category: "Full Art",
    categoryId: "full-art",
  },
];

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("concepts");
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);

  useEffect(() => {
    setIsTransitioning(true);
    
    const timer = setTimeout(() => {
      const filtered = projects.filter((p) => p.categoryId === activeCategory);
      setDisplayedProjects(filtered);
      setIsTransitioning(false);
    }, 300);

    return () => clearTimeout(timer);
  }, [activeCategory]);

  return (
    <section id="gallery" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            <span className="text-gradient">Meus</span> Projetos
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Uma coleção de ilustrações e pixel art explorando mundos fantásticos, 
            personagens únicos e ambientes surreais.
          </p>
        </div>

        {/* Dock Navigation */}
        <ProjectDock
          activeCategory={activeCategory}
          onCategoryChange={setActiveCategory}
        />

        {/* Projects Grid */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 transition-opacity duration-300 ${
            isTransitioning ? "opacity-0" : "opacity-100"
          }`}
        >
          {displayedProjects.map((project, index) => (
            <ProjectCard
              key={project.id}
              image={project.image}
              title={project.title}
              description={project.description}
              category={project.category}
              delay={index * 100}
            />
          ))}
        </div>

        {/* Empty State */}
        {displayedProjects.length === 0 && !isTransitioning && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              Nenhum projeto encontrado nesta categoria.
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;
