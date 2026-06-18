import CategoryPage from "@/components/CategoryPage";
import banner from "@/assets/banner-hero.jpg";

const Prints = () => (
  <CategoryPage
    title="Prints"
    banner={banner}
    items={Array.from({ length: 6 }).map((_, i) => ({
      src: "/placeholder.svg",
      title: `Print ${i + 1}`,
    }))}
  />
);

export default Prints;
