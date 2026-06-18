import { ReactNode } from "react";

interface CategoryPageProps {
  title: string;
  banner: string;
  items?: { src: string; title?: string }[];
  children?: ReactNode;
}

const CategoryPage = ({ title, banner, items = [], children }: CategoryPageProps) => {
  return (
    <div>
      {/* Fullscreen banner */}
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={banner}
          alt={title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </section>

      {/* Title */}
      <section className="py-16 text-center">
        <h1 className="font-display text-4xl md:text-5xl flex items-center justify-center gap-4">
          <span className="text-accent">¤</span>
          {title}
          <span className="text-accent">¤</span>
        </h1>
        <div className="mt-10 mx-auto h-px w-3/4 max-w-5xl bg-border" />
      </section>

      {/* Grid */}
      {items.length > 0 && (
        <section className="mx-auto max-w-7xl px-6 pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item, i) => (
              <div
                key={i}
                className="group relative overflow-hidden bg-card border border-border/50 aspect-[4/3] cursor-pointer"
              >
                <img
                  src={item.src}
                  alt={item.title ?? `${title} ${i + 1}`}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                {item.title && (
                  <div className="absolute inset-x-0 bottom-0 p-4 bg-gradient-to-t from-background/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity">
                    <p className="font-display text-sm uppercase tracking-[0.2em]">
                      {item.title}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {children}
    </div>
  );
};

export default CategoryPage;
