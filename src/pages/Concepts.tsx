import CategoryPage from "@/components/CategoryPage";
import banner from "@/assets/banner-hero.jpg";

const Concepts = () => (
  <CategoryPage
    title="Concepts"
    banner={banner}
    items={Array.from({ length: 6 }).map((_, i) => ({
      src: "/placeholder.svg",
      title: `Concept ${i + 1}`,
    }))}
  />
);

export default Concepts;
