import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import NpcContact from "@/components/NpcContact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Gallery />
        <About />
        <NpcContact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
