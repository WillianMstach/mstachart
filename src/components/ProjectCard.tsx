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
      className="group relative overflow-hidden rounded-xl card-gradient shadow-soft animate-scale-in cursor-pointer ink-border"
      style={{ animationDelay: `${delay}ms` }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={onClick}
    >
      {/* Image Container */}
      <div className="aspect-square overflow-hidden">
        <img
          src={image}
          alt={title}
          onLoad={() => setIsLoaded(true)}
          className={`w-full h-full object-cover transition-all duration-700 ${
            isLoaded ? "opacity-100" : "opacity-0"
          } ${isHovered ? "scale-110" : "scale-100"}`}
        />
        
        {/* Loading Skeleton */}
        {!isLoaded && (
          <div className="absolute inset-0 bg-muted animate-pulse" />
        )}
      </div>

      {/* Overlay */}
      <div
        className={`absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent transition-opacity duration-300 ${
          isHovered ? "opacity-100" : "opacity-0"
        }`}
      />

      {/* Content */}
      <div
        className={`absolute inset-x-0 bottom-0 p-6 transition-all duration-300 ${
          isHovered ? "translate-y-0 opacity-100" : "translate-y-4 opacity-0"
        }`}
      >
        <span className="inline-block px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full mb-3">
          {category}
        </span>
        <h3 className="font-display text-xl font-bold text-primary-foreground mb-2">
          {title}
        </h3>
        <p className="text-sm text-primary-foreground/80 line-clamp-2">
          {description}
        </p>
      </div>

      {/* Decorative Corner */}
      <div className="absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 border-primary/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
    </article>
  );
};

export default ProjectCard;
