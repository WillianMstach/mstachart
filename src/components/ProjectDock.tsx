import { useState } from "react";
import { useNavigate } from "react-router-dom";

interface Subcategory { id: string; label: string; }
interface Category { id: string; label: string; icon: string; subcategories: Subcategory[]; isGameDev?: boolean; }

interface ProjectDockProps {
  activeCategory: string;
  activeSubcategory: string;
  onCategoryChange: (category: string) => void;
  onSubcategoryChange: (subcategory: string) => void;
}

const categories: Category[] = [
  { id: "illustrations", label: "Ilustrações", icon: "🎨", subcategories: [
    { id: "cenarios", label: "Cenários" }, { id: "personagens", label: "Personagens" },
    { id: "portraits", label: "Portraits" }, { id: "cover", label: "Cover" },
  ]},
  { id: "pixel-art", label: "Pixel Art", icon: "🕹️", subcategories: [
    { id: "px-personagens", label: "Personagens" }, { id: "px-full-art", label: "Full Art" },
    { id: "px-animacoes", label: "Animações" }, { id: "px-tileset", label: "Tileset" },
    { id: "px-mockups", label: "Mockups" },
  ]},
  { id: "concepts", label: "Concepts", icon: "💡", subcategories: [
    { id: "concept-cenario", label: "Cenário" }, { id: "concept-props", label: "Props" },
    { id: "concept-personagens", label: "Personagens" },
  ]},
  { id: "game-dev", label: "Game Dev", icon: "🎮", isGameDev: true, subcategories: [
    { id: "flappybat", label: "FlappyBat" }, { id: "hollow-depths", label: "Hollow Depths" },
  ]},
];

const ProjectDock = ({ activeCategory, activeSubcategory, onCategoryChange, onSubcategoryChange }: ProjectDockProps) => {
  const navigate = useNavigate();
  const [expandedCategory, setExpandedCategory] = useState(activeCategory);
  const activeData = categories.find((c) => c.id === expandedCategory);

  const handleCategoryClick = (category: Category) => {
    setExpandedCategory(category.id);
    onCategoryChange(category.id);
    if (category.subcategories.length > 0) onSubcategoryChange(category.subcategories[0].id);
  };

  const handleSubcategoryClick = (sub: Subcategory, isGameDev?: boolean) => {
    if (isGameDev) { navigate(`/games#${sub.id}`); return; }
    onSubcategoryChange(sub.id);
  };

  return (
    <div className="sticky top-16 z-40 w-full py-4 space-y-3">
      {/* Main Categories */}
      <nav className="bg-background/90 backdrop-blur-md border border-border rounded-full p-2 w-full">
        <ul className="flex items-center justify-between w-full">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => handleCategoryClick(category)}
                className={`dock-item flex items-center gap-2 font-medium text-sm ${
                  expandedCategory === category.id ? "active" : ""
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="hidden sm:inline">{category.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>

      {activeData && activeData.subcategories.length > 0 && (
        <div className="animate-fade-up">
          <nav className="bg-background/90 backdrop-blur-md border border-border rounded-full p-1.5 w-full">
            <ul className="flex items-center justify-center gap-1 flex-wrap">
              {activeData.subcategories.map((sub) => (
                <li key={sub.id}>
                  <button
                    onClick={() => handleSubcategoryClick(sub, activeData.isGameDev)}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                      activeSubcategory === sub.id && !activeData.isGameDev
                        ? "bg-secondary text-secondary-foreground"
                        : "hover:bg-muted text-muted-foreground hover:text-foreground"
                    }`}
                  >
                    {sub.label}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      )}
    </div>
  );
};

export default ProjectDock;
