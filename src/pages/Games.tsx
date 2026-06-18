import CategoryPage from "@/components/CategoryPage";
import banner from "@/assets/banner-hero.jpg";

const Games = () => (
  <CategoryPage
    title="Games"
    banner={banner}
    items={Array.from({ length: 3 }).map((_, i) => ({
      src: "/placeholder.svg",
      title: `Game ${i + 1}`,
    }))}
  />
);

export default Games;
