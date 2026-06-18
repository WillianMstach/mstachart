import CategoryPage from "@/components/CategoryPage";
import banner from "@/assets/banner-hero.jpg";

const PixelArt = () => (
  <CategoryPage
    title="Pixel Art"
    banner={banner}
    items={Array.from({ length: 6 }).map((_, i) => ({
      src: "/placeholder.svg",
      title: `Pixel Art ${i + 1}`,
    }))}
  />
);

export default PixelArt;
