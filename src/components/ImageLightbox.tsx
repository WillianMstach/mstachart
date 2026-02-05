import { useState, useEffect } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Project {
  id: string;
  image: string;
  title: string;
  description: string;
  category: string;
  categoryId: string;
}

interface ImageLightboxProps {
  isOpen: boolean;
  onClose: () => void;
  projects: Project[];
  currentIndex: number;
  onNavigate: (index: number) => void;
}

const ImageLightbox = ({
  isOpen,
  onClose,
  projects,
  currentIndex,
  onNavigate,
}: ImageLightboxProps) => {
  const [isImageLoaded, setIsImageLoaded] = useState(false);

  const currentProject = projects[currentIndex];

  useEffect(() => {
    setIsImageLoaded(false);
  }, [currentIndex]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen) return;
      if (e.key === "ArrowLeft") {
        handlePrevious();
      } else if (e.key === "ArrowRight") {
        handleNext();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, currentIndex, projects.length]);

  const handlePrevious = () => {
    const newIndex = currentIndex === 0 ? projects.length - 1 : currentIndex - 1;
    onNavigate(newIndex);
  };

  const handleNext = () => {
    const newIndex = currentIndex === projects.length - 1 ? 0 : currentIndex + 1;
    onNavigate(newIndex);
  };

  if (!currentProject) return null;

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="max-w-5xl w-[95vw] h-[90vh] p-0 border-none bg-background/95 backdrop-blur-xl overflow-hidden">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-50 p-2 rounded-full bg-background/80 hover:bg-muted transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        <div className="flex flex-col lg:flex-row h-full">
          {/* Image Section */}
          <div className="relative flex-1 flex items-center justify-center bg-muted/20 min-h-[50vh] lg:min-h-full">
            {/* Navigation Arrows */}
            <button
              onClick={handlePrevious}
              className="absolute left-4 z-40 p-3 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground transition-all shadow-lg hover:scale-110"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={handleNext}
              className="absolute right-4 z-40 p-3 rounded-full bg-background/80 hover:bg-primary hover:text-primary-foreground transition-all shadow-lg hover:scale-110"
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Image */}
            <div className="relative w-full h-full flex items-center justify-center p-8">
              {!isImageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-12 h-12 border-4 border-primary/30 border-t-primary rounded-full animate-spin" />
                </div>
              )}
              <img
                src={currentProject.image}
                alt={currentProject.title}
                onLoad={() => setIsImageLoaded(true)}
                className={`max-w-full max-h-full object-contain rounded-lg shadow-2xl transition-all duration-500 ${
                  isImageLoaded ? "opacity-100 scale-100" : "opacity-0 scale-95"
                }`}
              />
            </div>

            {/* Image counter */}
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-2 rounded-full bg-background/80 text-sm font-medium">
              {currentIndex + 1} / {projects.length}
            </div>
          </div>

          {/* Info Section */}
          <div className="lg:w-80 p-6 lg:p-8 flex flex-col justify-center border-t lg:border-t-0 lg:border-l border-border bg-background">
            <span className="inline-block self-start px-3 py-1 text-xs font-medium bg-primary/90 text-primary-foreground rounded-full mb-4">
              {currentProject.category}
            </span>
            
            <h2 className="font-display text-2xl lg:text-3xl font-bold mb-4 text-gradient">
              {currentProject.title}
            </h2>
            
            <p className="text-muted-foreground leading-relaxed">
              {currentProject.description}
            </p>

            {/* Thumbnails */}
            <div className="mt-8 pt-6 border-t border-border">
              <p className="text-xs text-muted-foreground mb-3 uppercase tracking-wider">
                Mais nesta categoria
              </p>
              <div className="flex gap-2 overflow-x-auto pb-2">
                {projects.map((project, index) => (
                  <button
                    key={project.id}
                    onClick={() => onNavigate(index)}
                    className={`flex-shrink-0 w-16 h-16 rounded-lg overflow-hidden transition-all duration-300 ${
                      index === currentIndex
                        ? "ring-2 ring-primary ring-offset-2 ring-offset-background"
                        : "opacity-60 hover:opacity-100"
                    }`}
                  >
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ImageLightbox;
