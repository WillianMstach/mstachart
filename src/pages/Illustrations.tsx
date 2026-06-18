import CategoryPage from "@/components/CategoryPage";
import banner from "@/assets/banner-hero.jpg";

const Illustrations = () => (
  <CategoryPage
    title="Illustrations"
    banner={banner}
    items={Array.from({ length: 6 }).map((_, i) => ({
      src: "/placeholder.svg",
      title: `Illustration ${i + 1}`,
    }))}
  />
);

export default Illustrations;
