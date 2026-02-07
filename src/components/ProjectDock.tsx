

interface ProjectDockProps {
  activeCategory: string;
  onCategoryChange: (category: string) => void;
}

const categories = [
  { id: "illustrations", label: "Ilustrações", icon: "🎨" },
  { id: "character-design", label: "Character Design", icon: "👤" },
  { id: "pixel-art", label: "Pixel Art", icon: "🕹️" },
  { id: "concepts", label: "Concepts", icon: "💡" },
  { id: "game-dev", label: "Game Dev", icon: "🎮" },
];

const ProjectDock = ({ activeCategory, onCategoryChange }: ProjectDockProps) => {
  const handleClick = (category: typeof categories[0]) => {
    onCategoryChange(category.id);
  };

  return (
    <div className="sticky top-4 z-50 w-full py-4">
      <nav className="glass-effect rounded-full p-2 shadow-soft w-full">
        <ul className="flex items-center justify-between w-full">
          {categories.map((category) => (
            <li key={category.id}>
              <button
                onClick={() => handleClick(category)}
                className={`dock-item flex items-center gap-2 font-medium ${
                  activeCategory === category.id ? "active" : ""
                }`}
              >
                <span className="text-lg">{category.icon}</span>
                <span className="hidden sm:inline">{category.label}</span>
              </button>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default ProjectDock;
