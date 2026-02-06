import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Gamepad2, ExternalLink } from "lucide-react";

interface Game {
  id: string;
  title: string;
  description: string;
  itchUrl: string;
  embedUrl: string;
}

const games: Game[] = [
  {
    id: "flappybat",
    title: "FlappyBat",
    description:
      "Terceiro jogo do meu desafio de criar 20 jogos: uma versão do clássico Flappy Bird com arte original e pixel art.",
    itchUrl: "https://willianmstach.itch.io/flappybat",
    embedUrl: "https://itch.io/embed-upload/12074498?color=1a2e1a",
  },
];

const Games = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="pt-32 pb-20 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-4">
              <Gamepad2 className="w-4 h-4" />
              Meus Jogos
            </span>
            <h1 className="font-display text-4xl md:text-6xl font-bold mb-4">
              <span className="text-gradient">Jogos</span> Publicados
            </h1>
            <p className="text-muted-foreground max-w-2xl mx-auto text-lg">
              Jogos que desenvolvi e publiquei no itch.io. Jogue direto no
              navegador ou visite a página para mais detalhes.
            </p>
          </div>

          {/* Games List */}
          <div className="space-y-16">
            {games.map((game) => (
              <article
                key={game.id}
                className="card-gradient rounded-2xl overflow-hidden shadow-soft"
              >
                {/* Embed */}
                <div className="aspect-video w-full">
                  <iframe
                    src={game.embedUrl}
                    title={game.title}
                    className="w-full h-full border-0"
                    allowFullScreen
                  />
                </div>

                {/* Info */}
                <div className="p-6 md:p-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                  <div>
                    <h2 className="font-display text-2xl font-bold mb-2">
                      {game.title}
                    </h2>
                    <p className="text-muted-foreground">{game.description}</p>
                  </div>
                  <a
                    href={game.itchUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-6 py-3 accent-gradient text-primary-foreground rounded-full font-medium shadow-soft hover:scale-105 transition-transform duration-300 whitespace-nowrap"
                  >
                    <ExternalLink className="w-4 h-4" />
                    Ver no itch.io
                  </a>
                </div>
              </article>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Games;
