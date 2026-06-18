import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Illustrations from "./pages/Illustrations";
import PixelArt from "./pages/PixelArt";
import Games from "./pages/Games";
import Concepts from "./pages/Concepts";
import Prints from "./pages/Prints";
import Info from "./pages/Info";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route path="/" element={<Home />} />
            <Route path="/illustrations" element={<Illustrations />} />
            <Route path="/pixel-art" element={<PixelArt />} />
            <Route path="/games" element={<Games />} />
            <Route path="/concepts" element={<Concepts />} />
            <Route path="/prints" element={<Prints />} />
            <Route path="/info" element={<Info />} />
            <Route path="*" element={<NotFound />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
