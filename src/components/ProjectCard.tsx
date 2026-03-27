import { useState } from "react";

interface ProjectCardProps {
  image: string;
  title: string;
  description: string;
  category: string;
  delay?: number;
  onClick?: () => void;
}

const ProjectCard = ({ image, title, description, category, delay = 0, onClick }: ProjectCardProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <article
      className="group relative overflow-hidden rounded-lg bg-card border border-border animate-scale-in cursor-pointer hover:border-primary/20 transition-colors duration-300"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${isHovered ? "scale-110" : "scale-100"}`}
        />
        {!isLoaded && <div className="absolute inset-0 bg-muted animate-pulse" />}
      </div>

      <div
        className={`absolute inset-0 bg-gradient-to-t from-background/95 via-background/40 to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      <div
        className={`absolute inset-x-0 bottom-0 p-5 transition-all duration-300 ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <span className="inline-block px-2.5 py-1 text-xs font-medium bg-primary/80 text-primary-foreground rounded-full mb-2">
          {category}
        </span>
        <h3 className="font-display text-lg font-bold text-foreground mb-1">{title}</h3>
        <p className="text-sm text-muted-foreground line-clamp-2">{description}</p>
      </div>
    </article>
  );
};

export default ProjectCard;
