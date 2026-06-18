import { Link } from "react-router-dom";
import banner from "@/assets/banner-hero.jpg";

const categories = [
  { to: "/illustrations", label: "Illustrations" },
  { to: "/pixel-art", label: "Pixel Art" },
  { to: "/games", label: "Games" },
  { to: "/concepts", label: "Concepts" },
  { to: "/prints", label: "Prints" },
];

const Home = () => {
  return (
    <div>
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={banner}
          alt="Portfolio hero"
          width={1920}
          height={1088}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/10 to-background" />
        <div className="relative z-10 h-full flex flex-col items-center justify-end pb-24 text-center px-6">
          <h1 className="font-display text-5xl md:text-7xl tracking-wide drop-shadow-lg">
            MSTACH ART
          </h1>
          <p className="mt-4 text-sm md:text-base uppercase tracking-[0.4em] text-foreground/80">
            PIXEL ART · ILUSTRAÇÃO · CONCEPTS · GAMES
          </p>
        </div>
      </section>

      <section className="py-20 text-center">
        <h2 className="font-display text-3xl md:text-4xl flex items-center justify-center gap-4">
          <span className="text-accent">¤</span> Categorias <span className="text-accent">¤</span>
        </h2>
        <div className="mt-10 mx-auto h-px w-3/4 max-w-5xl bg-border" />

        <div className="mt-12 mx-auto max-w-6xl px-6 flex flex-row gap-4 h-[400px] md:h-[500px]">
          {categories.map((c) => (
            <Link
              key={c.to}
              to={c.to}
              className="group relative flex-1 min-w-0 overflow-hidden bg-card border border-border/50 transition-all duration-500 ease-out hover:flex-[3]"
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-xl md:text-2xl uppercase tracking-[0.3em] whitespace-nowrap transition-transform duration-500 group-hover:scale-110">
                  {c.label}
                </span>
              </div>
              <div className="absolute inset-0 ring-1 ring-inset ring-transparent group-hover:ring-accent/60 transition" />
            </Link>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
