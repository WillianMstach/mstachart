import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ProjectDock from "./ProjectDock";
import ProjectCard from "./ProjectCard";
import ImageLightbox from "./ImageLightbox";

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
  isLink?: boolean;
}

const projects: Project[] = [
  {
    id: "1",
    image: concept1,
    title: "Desert Wanderer",
    description: "Character concept for a desert-themed RPG. Inspired by nomadic cultures and sci-fi aesthetics.",
    category: "Concepts",
    categoryId: "illustrations",
  },
  {
    id: "2",
    image: concept2,
    title: "Biomech Entity",
    description: "Creature design exploring the fusion of organic and mechanical elements.",
    category: "Ilustrações",
    categoryId: "illustrations",
  },
  {
    id: "3",
    image: gameArt1,
    title: "Crystal Citadel",
    description: "Environment art for a fantasy adventure game. Floating palace in an ethereal realm.",
    category: "Character Design",
    categoryId: "character-design",
  },
  {
    id: "4",
    image: gameArt2,
    title: "Ancient Ruins",
    description: "Temple environment design with mystical atmosphere and ancient architecture.",
    category: "Character Design",
    categoryId: "character-design",
  },
  {
    id: "5",
    image: fullArt1,
    title: "Path of the Seeker",
    description: "Full illustration depicting a lone traveler discovering ancient monuments in an alien desert.",
    category: "Pixel Art",
    categoryId: "pixel-art",
  },
  {
    id: "6",
    image: fullArt2,
    title: "Cosmic Voyage",
    description: "Space exploration scene with surreal nebula and mysterious spacecraft.",
    category: "Concepts",
    categoryId: "concepts",
  },
  {
    id: "7",
    image: gameArt1,
    title: "FlappyBat",
    description: "Versão do clássico Flappy Bird com arte original e pixel art. Jogue no navegador!",
    category: "Game Dev",
    categoryId: "game-dev",
    isLink: true,
  },
  {
    id: "8",
    image: gameArt2,
    title: "Hollow Depths",
    description: "Metroidvania em pixel art com cavernas subterrâneas e criaturas místicas.",
    category: "Game Dev",
    categoryId: "game-dev",
    isLink: true,
  },
];

const Gallery = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("illustrations");
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleProjectClick = (project: Project) => {
    if (project.isLink) {
      navigate("/games");
      return;
    }
    const index = displayedProjects.findIndex((p) => p.id === project.id);
    if (index !== -1) {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    }
  };

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
              onClick={() => handleProjectClick(project)}
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

        {/* Lightbox */}
        <ImageLightbox
          isOpen={lightboxOpen}
          onClose={() => setLightboxOpen(false)}
          projects={displayedProjects}
          currentIndex={currentImageIndex}
          onNavigate={setCurrentImageIndex}
        />
      </div>
    </section>
  );
};

export default Gallery;
