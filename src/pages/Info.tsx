import banner from "@/assets/banner-hero.jpg";

const Info = () => {
  return (
    <div>
      <section className="relative h-screen w-full overflow-hidden">
        <img
          src={banner}
          alt="Info"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/40 via-transparent to-background" />
      </section>

      <section className="py-16 text-center">
        <h1 className="font-display text-4xl md:text-5xl flex items-center justify-center gap-4">
          <span className="text-accent">¤</span> Info <span className="text-accent">¤</span>
        </h1>
        <div className="mt-10 mx-auto h-px w-3/4 max-w-5xl bg-border" />
      </section>

      <section className="mx-auto max-w-2xl px-6 pb-24 text-center space-y-6 text-foreground/80 leading-relaxed">
        <p>
          Olá! Sou artista digital focado em Pixel Art, Ilustração e Concept Art.
        </p>
        <p>
          Para contato, comissões ou colaborações, envie um e-mail:
        </p>
        <a
          href="mailto:contato@exemplo.com"
          className="inline-block font-display uppercase tracking-[0.3em] text-accent hover:opacity-80 transition"
        >
          contato@exemplo.com
        </a>
      </section>
    </div>
  );
};

export default Info;
