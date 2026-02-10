import { useState, useEffect, useRef } from "react";
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
  subcategoryId: string;
  parallaxSpeed?: number;
}

const projects: Project[] = [
  {
    id: "1",
    image: concept1,
    title: "Desert Wanderer",
    description: "Character concept for a desert-themed RPG. Inspired by nomadic cultures and sci-fi aesthetics.",
    category: "Cenários",
    categoryId: "illustrations",
    subcategoryId: "cenarios",
    parallaxSpeed: 0.3,
  },
  {
    id: "2",
    image: concept2,
    title: "Biomech Entity",
    description: "Creature design exploring the fusion of organic and mechanical elements.",
    category: "Personagens",
    categoryId: "illustrations",
    subcategoryId: "personagens",
    parallaxSpeed: 0.5,
  },
  {
    id: "3",
    image: gameArt1,
    title: "Crystal Citadel",
    description: "Environment art for a fantasy adventure game. Floating palace in an ethereal realm.",
    category: "Personagens",
    categoryId: "pixel-art",
    subcategoryId: "px-personagens",
    parallaxSpeed: 0.4,
  },
  {
    id: "4",
    image: gameArt2,
    title: "Ancient Ruins",
    description: "Temple environment design with mystical atmosphere and ancient architecture.",
    category: "Full Art",
    categoryId: "pixel-art",
    subcategoryId: "px-full-art",
    parallaxSpeed: 0.6,
  },
  {
    id: "5",
    image: fullArt1,
    title: "Path of the Seeker",
    description: "Full illustration depicting a lone traveler discovering ancient monuments in an alien desert.",
    category: "Cenário",
    categoryId: "concepts",
    subcategoryId: "concept-cenario",
    parallaxSpeed: 0.35,
  },
  {
    id: "6",
    image: fullArt2,
    title: "Cosmic Voyage",
    description: "Space exploration scene with surreal nebula and mysterious spacecraft.",
    category: "Props",
    categoryId: "concepts",
    subcategoryId: "concept-props",
    parallaxSpeed: 0.55,
  },
];

const Gallery = () => {
  const navigate = useNavigate();
  const [activeCategory, setActiveCategory] = useState("illustrations");
  const [activeSubcategory, setActiveSubcategory] = useState("cenarios");
  const [displayedProjects, setDisplayedProjects] = useState<Project[]>([]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const galleryRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll listener
  useEffect(() => {
    const handleScroll = () => {
      if (galleryRef.current) {
        const rect = galleryRef.current.getBoundingClientRect();
        setScrollY(-rect.top);
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProjectClick = (project: Project) => {
    const index = displayedProjects.findIndex((p) => p.id === project.id);
    if (index !== -1) {
      setCurrentImageIndex(index);
      setLightboxOpen(true);
    }
  };

  useEffect(() => {
    setIsTransitioning(true);

    const timer = setTimeout(() => {
      const filtered = projects.filter(
        (p) => p.categoryId === activeCategory && p.subcategoryId === activeSubcategory
      );
      setDisplayedProjects(filtered);
      setIsTransitioning(false);
    }, 350);

    return () => clearTimeout(timer);
  }, [activeCategory, activeSubcategory]);

  return (
    <section id="gallery" className="py-20 px-6" ref={galleryRef}>
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
          activeSubcategory={activeSubcategory}
          onCategoryChange={setActiveCategory}
          onSubcategoryChange={setActiveSubcategory}
        />

        {/* Projects Grid with fade transition */}
        <div
          className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 transition-all duration-500 ease-in-out ${
            isTransitioning ? "opacity-0 translate-y-4" : "opacity-100 translate-y-0"
          }`}
        >
          {displayedProjects.map((project, index) => (
            <div
              key={project.id}
              style={{
                transform: `translateY(${scrollY * (project.parallaxSpeed || 0.3) * 0.1}px)`,
                transition: "transform 0.1s linear",
              }}
            >
              <ProjectCard
                image={project.image}
                title={project.title}
                description={project.description}
                category={project.category}
                delay={index * 120}
                onClick={() => handleProjectClick(project)}
              />
            </div>
          ))}
        </div>

        {/* Empty State */}
        {displayedProjects.length === 0 && !isTransitioning && (
          <div className="text-center py-20">
            <p className="text-muted-foreground">
              Nenhum projeto encontrado nesta subcategoria.
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
